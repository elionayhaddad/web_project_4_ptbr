import "./index.css";
import {
  cardList,
  form,
  formAdd,
  editButton,
  addButton,
  closeButton,
  closeButtonAdd,
  closeButtonImg,
  removeButton,
  config,
  closeButtonRemove,
  btnSubmitConfirm,
} from "../components/utils.js";
import UserInfo from "../components/UserInfo.js";
import FormValidator from "../components/FormValidator.js";
import Card from "../components/Card.js";
import Section from "../components/Section.js";
import PopupWithImage from "../components/PopupWithImage.js";
import PopupWithForm from "../components/PopupWithForm.js";

import headerSrc from "../images/header.svg";
import lineSrc from "../images/Line.svg";
import artistSrc from "../images/photo-elipse.png";
import editionSrc from "../images/button__edit.svg";
import creationSrc from "../images/more.svg";
import Api from "../components/Api.js";
import PopupWithConfirm from "../components/PopupWithConfirm";

const headerLogo = document.getElementById("header");
const headerLine = document.getElementById("line");
const profileArt = document.getElementById("artist");
const editProf = document.getElementById("edition");
const createCard = document.getElementById("create-card");

headerLogo.src = headerSrc;
headerLine.src = lineSrc;
profileArt.src = artistSrc;
editProf.src = editionSrc;
createCard.src = creationSrc;

const api = new Api({
  baseUrl: "https://around.nomoreparties.co/v1/web_ptbr_04",
  headers: {
    authorization: "1c439799-4201-41a1-bc23-3ac75b525bca",
    "Content-type": "application/json",
  },
});
api
  .getUserInfo({
    avatar: document.querySelector(".profile__image").src,
    name: document.querySelector(".profile__artist").textContent,
    role: document.querySelector(".profile__text").textContent,
    _id: api.headers.authorization,
  })
  .then();

const formConfirm = new PopupWithConfirm(".popup_remove", (elementId) => {
  api.deleteCards(elementId).then(() => {
    const card = document.getElementById("card");
    card.remove();
  });
});

api.getCards().then((initialCards) => {
  const section = new Section(
    {
      items: initialCards,
      renderer: (item) => {
        const card = new Card(
          {
            name: item.name,
            imageUrl: item.link,
            cardId: item._id,
            likes: item.likes,
            ownerId: item.owner._id,
          },
          {
            cardSelector: ".card-template",
            handleImageClick: (imageUrl, name) => {
              popupWithImage.open(imageUrl, name);
            },
            handleDeleteClick: (cardId) => {
              formConfirm.open();
              formConfirm.getIdCard(cardId);
            },
            handleLikeClick: (isLiked, cardId) => {
              if (isLiked) {
                return api.removeLikeCards(cardId);
              } else {
                return api.addLikeCards(cardId);
              }
            },
            isLiked: [],
          }
        );
        const cardElement = card.generateCard(api.getUserInfo(card.ownerId));
        console.log(api.getUserInfo(card._handleImageClickownerId));
        cardList.prepend(cardElement);
        return cardElement;
      },
    },
    ".cards"
  );
  section.renderItems(initialCards);
});

const popupWithImage = new PopupWithImage();

const formPopup = new PopupWithForm(() => {
  const user = new UserInfo({
    nameSelector: ".profile__artist",
    roleSelector: ".profile__text",
  });
  const newUser = user.setUserInfo();
  api.editProfile(user._nameInput.value, user._roleInput.value).then(() => {
    return newUser;
  });
}, ".popup");

const formPopupAdd = new PopupWithForm((item) => {
  const inputTitle = document.querySelector(".title-input");
  const inputImageUrl = document.querySelector(".link-input");
  const card = new Card(
    {
      name: inputTitle.value,
      imageUrl: inputImageUrl.value,
      cardId: item._id,
      owner: api.getUserInfo,
      likes: [],
    },
    {
      cardSelector: ".card-template",
      handleImageClick: (imageUrl, name) => {
        popupWithImage.open(imageUrl, name);
      },
      handleDeleteClick: (cardId) => {
        formConfirm.open();
        formConfirm.getIdCard(cardId);
      },
      handleLikeClick: (isLiked, cardId) => {
        if (isLiked) {
          return api.removeLikeCards(cardId);
        } else {
          return api.addLikeCards(cardId);
        }
      },
      isLiked: [],
    }
  );
  api
    .createCards({
      name: inputTitle.value,
      link: inputImageUrl.value,
      cardId: item._id,
    })
    .then(() => {
      console.log(card.owner);
      const cardElement = card.generateCard(api.getUserInfo.user);
      cardList.prepend(cardElement);
      return cardElement;
    });
}, ".popup_add");

const formValidator = new FormValidator(config, form);
const formAddValidation = new FormValidator(config, formAdd);
formAddValidation.enableValidation();
formValidator.enableValidation();

formPopup.setEventListeners();
formPopupAdd.setEventListeners();
popupWithImage.setEventListeners();
formConfirm.setEventListeners();

addButton.addEventListener("click", () => formPopupAdd.open());
closeButtonAdd.addEventListener("click", () => formPopupAdd.close());
editButton.addEventListener("click", () => {
  formPopup.open();
  const populateForm = new UserInfo(
    {
      nameSelector: ".profile__artist",
      roleSelector: ".profile__text",
    },
    ".popup"
  );
  return populateForm.getUserInfo();
});
closeButtonImg.addEventListener("click", () => popupWithImage.close());
closeButtonRemove.addEventListener("click", () => formConfirm.close());
closeButton.addEventListener("click", () => formPopup.close());

import "./index.css";
import {
  cardList,
  form,
  formAdd,
  formPhoto,
  editButton,
  addButton,
  btnSubmit,
  btnSubmitAdd,
  btnSubmitConfirm,
  btnSubmitPhotoUser,
  closeButton,
  closeButtonAdd,
  closeButtonImg,
  config,
  closeButtonRemove,
  closeButtonPhotoUser,
  photoUserBtn,
} from "../components/utils.js";
import UserInfo from "../components/UserInfo.js";
import FormValidator from "../components/FormValidator.js";
import Card from "../components/Card.js";
import Section from "../components/Section.js";
import PopupWithImage from "../components/PopupWithImage.js";
import PopupWithForm from "../components/PopupWithForm.js";

import headerSrc from "../images/header.svg";
import lineSrc from "../images/Line.svg";
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
    _id: [],
  })
  .then((user) => {
    profileArt.src = user.avatar;
    document.querySelector(".profile__artist").innerHTML = user.name;
    document.querySelector(".profile__text").innerHTML = user.about;

    const formPhotoUser = new PopupWithForm(
      () => {
        const newImageUrl = document.querySelector(".input-photo-user").value;
        api.updateImageUser(newImageUrl).then();
        profileArt.src = newImageUrl;
        setTimeout(() => {
          btnSubmitPhotoUser.textContent = "Salvando...";
        }, 0);
      },
      ".popup_photo-user",
      btnSubmitPhotoUser,
      profileArt
    );

    function deleteCards(id) {
      api.deleteCards(id).then();
      setTimeout(() => {
        btnSubmitConfirm.textContent = "Salvando...";
      }, 0);
    }
    const formConfirm = new PopupWithConfirm(
      ".popup_remove",
      deleteCards,
      btnSubmitConfirm
    );

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
                checkId: (ownerId, buttonElement) => {
                  const checkId = ownerId === user._id;
                  if (!checkId) {
                    buttonElement.classList.add("card__remove-icon_hidden");
                  } else {
                    buttonElement.classList.remove("card__remove-icon_hidden");
                  }
                },
                handleDeleteClick: (cardId) => {
                  formConfirm.open();
                  formConfirm.getIdCard(cardId);
                },
                submitDeletePopup: deleteCards,
                handleLikeClick: (cardId, likeArray, likeCounter) => {
                  const indexToRemove = likeArray.findIndex((obj) => {
                    return obj._id === user._id;
                  });
                  if (indexToRemove !== -1) {
                    api.removeLikeCards(cardId);
                    likeArray.splice(indexToRemove, 1);
                    likeCounter.innerHTML = likeArray.length;
                  } else {
                    api.addLikeCards(cardId);
                    likeArray.push(user);
                    likeCounter.innerHTML = likeArray.length;
                  }
                },
                isLiked: (likeArray, buttonElement) => {
                  const hasMyId = likeArray.some((obj) => {
                    return obj._id === user._id;
                  });
                  if (hasMyId == true) {
                    buttonElement.classList.add("card__like_active");
                  } else {
                    buttonElement.classList.remove("card__like_active");
                  }
                },
              }
            );
            const cardElement = card.generateCard();
            cardList.append(cardElement);
            return cardElement;
          },
        },
        ".cards"
      );
      section.renderItems(initialCards);
    });

    const popupWithImage = new PopupWithImage();

    const formPopup = new PopupWithForm(
      () => {
        setTimeout(() => {
          btnSubmit.textContent = "Salvando...";
        }, 0);
        const user = new UserInfo({
          nameSelector: ".profile__artist",
          roleSelector: ".profile__text",
        });
        const newUser = user.setUserInfo();
        api
          .editProfile(user._nameInput.value, user._roleInput.value)
          .then(() => {
            return newUser;
          });
      },
      ".popup",
      btnSubmit,
      editButton
    );

    const formPopupAdd = new PopupWithForm(
      (item) => {
        const inputTitle = document.querySelector(".title-input");
        const inputImageUrl = document.querySelector(".link-input");
        setTimeout(() => {
          btnSubmitAdd.textContent = "Salvando...";
        }, 0);
        const card = new Card(
          {
            name: inputTitle.value,
            imageUrl: inputImageUrl.value,
            cardId: item._id,
            likes: [],
          },
          {
            cardSelector: ".card-template",
            handleImageClick: (imageUrl, name) => {
              popupWithImage.open(imageUrl, name);
            },
            checkId: (ownerId, buttonElement) => {
              const checkId = ownerId === user._id;
              if (checkId) {
                buttonElement.classList.remove("card__remove-icon_hidden");
              }
            },
            handleDeleteClick: (cardId) => {
              formConfirm.open();
              formConfirm.getIdCard(cardId);
            },
            submitDeletePopup: deleteCards,
            handleLikeClick: (cardId, likeArray, likeCounter) => {
              const indexToRemove = likeArray.findIndex((obj) => {
                return obj._id === user._id;
              });
              if (indexToRemove !== -1) {
                api.removeLikeCards(cardId);
                likeArray.splice(indexToRemove, 1);
                likeCounter.innerHTML = likeArray.length;
              } else {
                api.addLikeCards(cardId);
                likeArray.push(user);
                likeCounter.innerHTML = likeArray.length;
              }
            },
            isLiked: (likeArray, buttonElement) => {
              const hasMyId = likeArray.some((obj) => {
                return obj._id === user._id;
              });
              if (hasMyId == true) {
                buttonElement.classList.add("card__like_active");
              } else {
                buttonElement.classList.remove("card__like_active");
              }
            },
          }
        );
        api
          .createCards({
            name: inputTitle.value,
            link: inputImageUrl.value,
          })
          .then((item) => {
            card._cardId = item._id;
            card.likes = item.likes;
            const cardElement = card.generateCard();
            cardList.prepend(cardElement);
            return cardElement;
          });
      },
      ".popup_add",
      btnSubmitAdd,
      addButton
    );

    const formValidator = new FormValidator(config, form);
    const formAddValidation = new FormValidator(config, formAdd);
    const formPhotoUserValidation = new FormValidator(config, formPhoto);
    formPhotoUserValidation.enableValidation();
    formAddValidation.enableValidation();
    formValidator.enableValidation();

    formPopup.setEventListeners();
    formPopupAdd.setEventListeners();
    popupWithImage.setEventListeners();
    formConfirm.setEventListeners();
    formPhotoUser.setEventListeners();

    photoUserBtn.addEventListener("click", () => formPhotoUser.open());
    addButton.addEventListener("click", () => formPopupAdd.open());
    closeButtonAdd.addEventListener("click", () => formPopupAdd.close());
    closeButtonPhotoUser.addEventListener("click", () => formPhotoUser.close());
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
  });

import FormValidator from "../components/FormValidator.js";
import Card from "../components/Card.js";
import Section from "../components/Section.js";
import Popup from "../components/Popup.js";
import PopupWithImage from "../components/PopupWithImage.js";
import PopupWithForm from "../components/PopupWithForm.js";

const cardList = document.querySelector(".cards");
const form = document.querySelectorAll(".popup__field-txt");

const initialCards = [
  {
    name: "Vale de Yosemite",
    imageUrl:
      "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_yosemite.jpg",
  },
  {
    name: "Lago Louise",
    imageUrl:
      "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_lake-louise.jpg",
  },
  {
    name: "Montanhas Carecas",
    imageUrl:
      "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_bald-mountains.jpg",
  },
  {
    name: "Latemar",
    imageUrl:
      "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_latemar.jpg",
  },
  {
    name: "Parque Nacional da Vanoise ",
    imageUrl:
      "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_vanoise.jpg",
  },
  {
    name: "Lago di Braies",
    imageUrl:
      "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_lago.jpg",
  },
];

function populateForm() {
  const nameArtist = profile.querySelector(".profile__artist").textContent;
  const roleArtist = profile.querySelector(".profile__text").textContent;

  popup.querySelector("input#name-input").value = nameArtist;
  popup.querySelector("input#role-input").value = roleArtist;
}

function handleProfileFormSubmit(evt) {
  evt.preventDefault(popup);
  popup.classList.remove("popup_show");
  const nameInput = popup.querySelector("input#name-input").value;
  const roleInput = popup.querySelector("input#role-input").value;

  profile.querySelector(".profile__artist").textContent = nameInput;
  profile.querySelector(".profile__text").textContent = roleInput;
}

const popupWithImage = new PopupWithImage();
popupWithImage.setEventListeners();
closeButtonImg.addEventListener("click", () => popupWithImage.close());

const section = new Section(
  {
    items: initialCards,
    renderer: (item) => {
      const card = new Card(
        item.name,
        item.imageUrl,
        ".card-template",
        (imageUrl, name) => {
          popupWithImage.open(imageUrl, name);
        }
      );
      const cardElement = card.generateCard();
      cardList.prepend(cardElement);
      return cardElement;
    },
  },
  ".cards"
);

section.renderItems(initialCards);

const formPopup = new PopupWithForm((values) => {
  const inputName = document.querySelector(".name-input");
  const inputRole = document.querySelector(".role-input");

  const card = new Card(inputName.value, inputRole.value, ".card-template");
  section.addItem(card);
}, ".popup");

formPopup.setEventListeners();
editButton.addEventListener("click", () => formPopup.open());
closeButton.addEventListener("click", () => formPopup.close());

const formPopupAdd = new PopupWithForm((values) => {
  const inputTitle = document.querySelector(".title-input");
  const inputImageUrl = document.querySelector(".link-input");

  const card = {
    name: inputTitle.value,
    imageUrl: inputImageUrl.value,
  };
  section.addItem(card);
}, ".popup_add");

formPopupAdd.setEventListeners();
addButton.addEventListener("click", () => formPopupAdd.open());
closeButtonAdd.addEventListener("click", () => formPopupAdd.close());

editButton.addEventListener("click", populateForm);
popup.addEventListener("submit", handleProfileFormSubmit);

const config = {
  formSelector: ".popup__field",
  inputSelector: ".popup__field-txt",
  errorSelector: ".popup__input-error",
  submitButtonSelector: ".button_submit",
  inactiveButtonClass: "button_inactive",
  inputErrorClass: "popup__input_type_error",
  errorClass: "popup__input-error_active",
};

const formValidator = new FormValidator(config, form);
formValidator.enableValidation();

import {
  popup,
  editButton,
  profile,
  addButton,
  closeButton,
  closeButtonAdd,
  closeButtonImg,
} from "../../src/components/utils.js";

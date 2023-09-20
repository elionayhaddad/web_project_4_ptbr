const popupImg = document.querySelector(".popup_image");
const popupAdd = document.querySelector(".popup_add");
const editButton = document.querySelector(".button_profile");
const closeButtonImg = popupImg.querySelector(".button_close_image");
const closeButton = document.querySelector(".button_close");
const addButton = document.querySelector(".button_add");
const closeButtonAdd = popupAdd.querySelector(".button_close");
const cardList = document.querySelector(".cards");
const form = document.querySelector(".popup__container");
const formAdd = popupAdd.querySelector(".popup__container");
const popupRemove = document.querySelector("popup_remove");
const removeButton = document.querySelector(".card__remove-icon");

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

const config = {
  formSelector: ".popup__field",
  inputSelector: ".popup__field-txt",
  errorSelector: ".popup__input-error",
  submitButtonSelector: ".button_submit",
  inactiveButtonClass: "button_inactive",
  inputErrorClass: "popup__input_type_error",
  errorClass: "popup__input-error_active",
};

export {
  initialCards,
  cardList,
  form,
  formAdd,
  editButton,
  addButton,
  closeButton,
  closeButtonAdd,
  closeButtonImg,
  config,
  removeButton,
  popupRemove,
};

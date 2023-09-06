const profile = document.querySelector(".profile");
const popup = document.querySelector(".popup");
const popupImg = document.querySelector(".popup_image");
const popupAdd = document.querySelector(".popup_add");
const editButton = profile.querySelector(".button_profile");
const closeButtonImg = popupImg.querySelector(".button_close_image");
const closeButton = popup.querySelector(".button_close");
const addButton = profile.querySelector(".button_add");
const closeButtonAdd = popupAdd.querySelector(".button_close");
const cardList = document.querySelector(".cards");
const form = document.querySelector(".popup__container");
const formAdd = popupAdd.querySelector(".popup__container");

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

export {
  initialCards,
  popup,
  cardList,
  form,
  formAdd,
  popupAdd,
  popupImg,
  editButton,
  addButton,
  closeButton,
  closeButtonAdd,
  closeButtonImg,
  profile,
};

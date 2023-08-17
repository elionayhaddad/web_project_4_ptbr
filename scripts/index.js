const cardList = document.querySelector(".cards");

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

function createCard(item) {
  const card = new Card(item.name, item.imageUrl, ".card-template");
  const cardElement = card.generateCard();
  cardList.prepend(cardElement);
}

initialCards.forEach((item) => {
  createCard(item);
});

popupAdd.addEventListener("submit", function (evt) {
  evt.preventDefault(popupAdd);
  popupAdd.classList.remove("popup_add_show");
  const titleInput = popupAdd.querySelector("input#title-input");
  const imageUrlInput = popupAdd.querySelector("input#link-input");

  const card = {
    name: titleInput.value,
    imageUrl: imageUrlInput.value,
  };
  createCard(card);
  titleInput.value = "";
  imageUrlInput.value = "";
});

editButton.addEventListener("click", populateForm);
popup.addEventListener("submit", handleProfileFormSubmit);

import FormValidator from "./FormValidator.js";
import Card from "./card.js";
import {
  popup,
  popupAdd,
  popupImg,
  editButton,
  profile,
  addButton,
  closeButton,
  closeButtonAdd,
  closeButtonImg,
  openFormPopup,
  closeFormPopup,
  openPopupAdd,
  closePopupAdd,
  openPopupImage,
  closePopupImage,
  handleOverlayClick,
  keyHandler,
  setEventListeners,
} from "./utils.js";

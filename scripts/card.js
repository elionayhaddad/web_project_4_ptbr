import { popupImg, openPopupImage } from "./utils.js";

export default class Card {
  constructor(name, imageUrl, cardSelector) {
    this._name = name;
    this._imageUrl = imageUrl;
    this._cardSelector = cardSelector;
  }

  _getTemplate() {
    const cardElement = document
      .querySelector(".card-template")
      .content.querySelector(".card")
      .cloneNode(true);

    return cardElement;
  }

  generateCard() {
    this._element = this._getTemplate();
    this._setEventListener();

    const titleElement = this._element.querySelector(".card__title");
    const linkElement = this._element.querySelector(".card__image");

    titleElement.textContent = this._name;
    linkElement.src = this._imageUrl;
    linkElement.alt = this._name;

    return this._element;
  }

  _setEventListener() {
    const removeButton = this._element.querySelector(".card__remove-icon");
    const linkElement = this._element.querySelector(".card__image");

    this._element
      .querySelector(".card__like")
      .addEventListener("click", function (evt) {
        evt.target.classList.toggle("card__like_active");
      });

    removeButton.addEventListener("click", () => {
      this._element = removeButton.closest(".card");
      this._element.remove();
    });

    linkElement.addEventListener("click", this._handleImageClick);
  }

  _handleImageClick(event) {
    const popupImgElement = document.querySelector(".popup__link-image");
    const popupImgLegend = document.querySelector(".popup__legend-image");
    popupImgElement.src = event.target.src;
    popupImgElement.alt = event.target.alt;
    popupImgLegend.textContent = event.target.alt;
    openPopupImage(popupImg);
  }
}

/*function createCard(card) {
    const cardTemplate = cardList.querySelector(".card-template").content;
    const cardElement = cardTemplate.querySelector(".card").cloneNode(true);
    const titleElement = cardElement.querySelector(".card__title");
    const linkElement = cardElement.querySelector(".card__image");
    const removeButton = cardElement.querySelector(".card__remove-icon");
  
    cardElement
      .querySelector(".card__like")
      .addEventListener("click", function (evt) {
        evt.target.classList.toggle("card__like_active");
      });
  
    removeButton.addEventListener("click", function () {
      card = removeButton.closest(".card");
      card.remove();
    });
  
    linkElement.addEventListener("click", handleImageClick);
  
    titleElement.textContent = card.name;
    linkElement.src = card.imageUrl;
    linkElement.alt = card.name;
    cardList.prepend(cardElement);
  }
  
  initialCards.forEach(function (card) {
    createCard(card);
  });*/

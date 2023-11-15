import { popupRemove } from "./utils.js";

export default class Card {
  constructor(cardData, config) {
    this._name = cardData.name;
    this._imageUrl = cardData.imageUrl;
    this._cardId = cardData.cardId;
    this._likes = cardData.likes;
    this._ownerId = cardData.ownerId;
    this._cardSelector = config.cardSelector;
    this._handleImageClick = config.handleImageClick;
    this._checkId = config.checkId;
    this._handleDeleteClick = config.handleDeleteClick;
    this._submitDeletePopup = config.submitDeletePopup;
    this._handleLikeClick = config.handleLikeClick;
    this._isLiked = config.isLiked;
  }
  _getTemplate() {
    const cardElement = document
      .querySelector(this._cardSelector)
      .content.querySelector(".card")
      .cloneNode(true);

    return cardElement;
  }

  generateCard() {
    this._element = this._getTemplate();
    this._setEventListener();

    const titleElement = this._element.querySelector(".card__title");
    const linkElement = this._element.querySelector(".card__image");
    const likeCount = this._element.querySelector(".card__counter");
    const removeButton = this._element.querySelector(".card__remove-icon");

    this._checkId(this._ownerId, removeButton);

    titleElement.textContent = this._name;
    linkElement.src = this._imageUrl;
    linkElement.alt = this._name;
    likeCount.innerHTML = this._likes.length;
    return this._element;
  }

  _setEventListener() {
    const removeButton = this._element.querySelector(".card__remove-icon");
    const linkElement = this._element.querySelector(".card__image");
    const likeButtonElement = this._element.querySelector(".card__like");

    this._isLiked(this._likes, likeButtonElement);
    likeButtonElement.addEventListener("click", (evt) => {
      this._isLiked(this._likes, likeButtonElement);
      this._handleLikeClick(
        this._cardId,
        this._likes,
        this._element.querySelector(".card__counter")
      );
      evt.target.classList.toggle("card__like_active");
    });

    removeButton.addEventListener("click", () => {
      this._cardIdClicked = this._cardId;
      this._handleDeleteClick(this._cardIdClicked);
      popupRemove.addEventListener("submit", () => {
        this._submitDeletePopup();
        this._element.remove();
      });
    });

    linkElement.addEventListener("click", () => {
      this._handleImageClick(this._imageUrl, this._name);
    });
  }
}

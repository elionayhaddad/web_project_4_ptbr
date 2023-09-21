export default class Card {
  constructor(name, imageUrl, cardSelector, handleImageClick, handleLikeClick) {
    this._name = name;
    this._imageUrl = imageUrl;
    this._cardSelector = cardSelector;
    this._handleImageClick = handleImageClick;
    this._handleLikeClick = handleLikeClick;
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

    titleElement.textContent = this._name;
    linkElement.src = this._imageUrl;
    linkElement.alt = this._name;

    return this._element;
  }

  _setEventListener() {
    const removeButton = this._element.querySelector(".card__remove-icon");
    const linkElement = this._element.querySelector(".card__image");
    const likeButtonElement = this._element.querySelector(".card__like");

    likeButtonElement.addEventListener("click", function (evt) {
      this._handleLikeClick().then(() => {
        evt.target.classList.toggle("card__like_active");
      });
    });

    removeButton.addEventListener("click", () => {
      this._element = removeButton.closest(".card");
      this._element.remove();
    });

    linkElement.addEventListener("click", () => {
      this._handleImageClick(this._imageUrl, this._name);
    });
  }
}

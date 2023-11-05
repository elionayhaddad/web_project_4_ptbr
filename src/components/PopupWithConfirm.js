import Popup from "./Popup.js";

export default class PopupWithConfirm extends Popup {
  constructor(popupSelector, submitHandler) {
    super(popupSelector);
    this._submitHandler = submitHandler;
    this._form = this._popup.querySelector(".popup__container-confirm");
  }

  getIdCard(cardId) {
    this._elementId = cardId;
  }

  handleIdCard() {
    this._submitHandler(this._elementId);
  }

  setEventListeners() {
    super.setEventListeners();
    this._form.addEventListener("submit", (evt) => {
      evt.preventDefault();
      this.handleIdCard();
      this.close();
    });
  }
  close() {
    super.close();
  }
}

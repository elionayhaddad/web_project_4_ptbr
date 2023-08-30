import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
  constructor(submitHandler, popupSelector) {
    super(popupSelector);
    this._submitHandler = submitHandler;
  }
  _getInputValues() {
    this._data = document.querySelectorAll(".popup__field-txt");
    return this._data;
  }
  setEventListeners() {
    const buttonElement = document.querySelector(".button_submit");
    super.setEventListener();
    closeButtonAdd.addEventListener("click", () => super.close());
    buttonElement.addEventListener("submit", () => this._getInputValues());
  }
  close() {
    super.close();
    popupImg.src = "";
  }
}

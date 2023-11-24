import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
  constructor(submitHandler, popupSelector, buttonElement, buttonPopup) {
    super(popupSelector);
    this._form = this._popup.querySelector(".form");
    this._submitHandler = submitHandler;
    this._buttonElement = buttonElement;
    this._buttonPopup = buttonPopup;
  }
  _getInputValues() {
    const inputElement = this._form.querySelectorAll(".popup__field-txt");
    const values = {};
    inputElement.forEach((input) => {
      values[input.name] = input.value;
    });
    return values;
  }
  open() {
    super.open();
    this._buttonElement.textContent = "Salvar";
  }
  setEventListeners() {
    this._form.addEventListener("submit", (evt) => {
      evt.preventDefault();
      this._submitHandler(this._getInputValues());
      this.close();
    });
  }
  close() {
    this._form.reset();
    super.close();
  }
}

export default class FormValidator {
  constructor(config, form) {
    this._config = config;
    this._form = form;
  }

  enableValidation() {
    const inputList = document.querySelectorAll(this._config.inputSelector);
    inputList.forEach(this._setEventListeners.bind(this));
  }

  _showInputError(errorElement, message) {
    errorElement.classList.add(this._config.errorClass);
    errorElement.textContent = message;
  }

  _hideInputError(errorElement) {
    errorElement.classList.remove(this._config.errorClass);
    errorElement.textContent = "";
  }

  _setEventListeners(input) {
    input.addEventListener("input", this._validateInput.bind(this));
  }

  _hasInvalidInput(inputList) {
    return inputList.some((inputElement) => !inputElement.validity.valid);
  }

  _validateInput(event) {
    const inputElement = event.target;
    const buttonElement = document.querySelector(
      this._config.submitButtonSelector
    );
    const buttonAddElement = document.querySelector(
      this._config.submitAddButtonSelector
    );
    const errorElement = inputElement
      .closest(this._config.formSelector)
      .querySelector(this._config.errorSelector);

    const inputList = document.querySelectorAll(this._config.inputSelector);
    const inputArray = Array.from(inputList);

    if (inputElement.validity.valid) {
      this._hideInputError(errorElement);
      inputElement.classList.remove(this._config.inputErrorClass);
      buttonElement.disabled = false;
      buttonElement.classList.remove(this._config.inactiveButtonClass);
    } else {
      this._hasInvalidInput(inputArray);
      this._showInputError(errorElement, inputElement.validationMessage);
      inputElement.classList.add(this._config.inputErrorClass);
      buttonElement.disabled = true;
      buttonElement.classList.add(this._config.inactiveButtonClass);
    }
  }
}

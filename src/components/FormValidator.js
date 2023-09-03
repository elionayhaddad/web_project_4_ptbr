export default class FormValidator {
  constructor(config, form) {
    this._config = config;
    this._form = form;
  }

  enableValidation() {
    const inputList = this._form.querySelectorAll(this._config.inputSelector);
    inputList.forEach(this._setEventListeners.bind(this));
  }

  _showInputError(errorElement, message, inputElement) {
    errorElement.classList.add(this._config.errorClass);
    errorElement.textContent = message;
    inputElement.classList.add(this._config.inputErrorClass);
  }

  _hideInputError(errorElement, inputElement) {
    errorElement.classList.remove(this._config.errorClass);
    errorElement.textContent = "";
    inputElement.classList.remove(this._config.inputErrorClass);
  }

  _setEventListeners(input) {
    input.addEventListener("input", this._validateInput.bind(this));
  }

  _hasInvalidInput(inputList) {
    return inputList.some((form) => !form.validity.valid);
  }

  _toggleStateButton(buttonElement, inputList) {
    if (this._hasInvalidInput(inputList)) {
      buttonElement.disabled = true;
      buttonElement.classList.add(this._config.inactiveButtonClass);
    } else {
      buttonElement.disabled = false;
      buttonElement.classList.remove(this._config.inactiveButtonClass);
    }
  }

  _validateInput(event) {
    const inputElement = event.target;
    const buttonElement = this._form.querySelector(
      this._config.submitButtonSelector
    );
    const errorElement = inputElement
      .closest(this._config.formSelector)
      .querySelector(this._config.errorSelector);

    const inputList = this._form.querySelectorAll(this._config.inputSelector);
    const inputArray = Array.from(inputList);

    if (inputElement.validity.valid) {
      this._hideInputError(errorElement, inputElement);
      this._toggleStateButton(buttonElement, inputArray);
    } else {
      this._showInputError(
        errorElement,
        inputElement.validationMessage,
        inputElement
      );
      this._toggleStateButton(buttonElement, inputArray);
    }
  }
}

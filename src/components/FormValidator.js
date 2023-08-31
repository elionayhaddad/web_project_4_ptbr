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

  /*PAREI AQUIIIIIIII
  _toggleButtonState(inputElement, buttonElement) {
    if (inputElement.validity.valid) {
      buttonElement.removeAttribute("disabled", false);
      buttonElement.classList.add(this._config.inactiveButtonClass);
    } else {
      buttonElement.setAttribute("disabled", true);
      buttonElement.classList.add(this._config.inactiveButtonClass);
    }
  }*/

  _validateInput(event) {
    const inputElement = event.target;
    const buttonElement = document.querySelectorAll(".button_submit");
    const errorElement = inputElement
      .closest(this._config.formSelector)
      .querySelector(this._config.errorSelector);
    if (inputElement.validity.valid) {
      this._hideInputError(errorElement);
    } else {
      this._showInputError(
        errorElement,
        inputElement.validationMessage,
        inputElement.classList.add(this._config.inputErrorClass)
      );
      // this._toggleButtonState(buttonElement);
    }
  }
}

/*_checkValidity(formElement, inputElement) {
  

  if (!inputElement.validity.valid) {
    showInputError(formElement, inputElement, inputElement.validationMessage);
  } else {
    hideInputError(formElement, inputElement);
  }
}

_isInvalidInput(inputList) {
  inputList.some((inputElement) => !inputElement.validity.valid);
}


_setEventListeners(formElement) {
  const inputList = Array.from(
    formElement.querySelectorAll(".popup__field-txt")
  );
  const buttonElement = formElement.querySelector(".button_submit");
  buttonElement.setAttribute("disabled", true);
  buttonElement.classList.add("button_inactive");

  inputList.forEach((inputElement) => {
    inputElement.addEventListener("input", function () {
      checkInputValidity(formElement, inputElement);
      toggleButtonState(inputList, buttonElement);
    });
  });
}

*/

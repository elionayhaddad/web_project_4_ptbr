class FormValidator {
  constructor(formElement, inputElement) {
    this._formElement = formElement;
    this._inputElement = inputElement;
  }

  _checkValidity(formElement, inputElement) {
    const showInputError = (formElement, inputElement, errorMessage) => {
      const errorElement = formElement.querySelector(
        `.${inputElement.id}-error`
      );
      inputElement.classList.add("popup__input_type_error");
      errorElement.textContent = errorMessage;
      errorElement.classList.add("popup__input-error_active");
    };

    const hideInputError = (formElement, inputElement) => {
      const errorElement = formElement.querySelector(
        `.${inputElement.id}-error`
      );
      inputElement.classList.remove("popup__input_type_error");
      errorElement.classList.remove("popup__input-error_active");
      errorElement.textContent = "";
    };

    if (!inputElement.validity.valid) {
      showInputError(formElement, inputElement, inputElement.validationMessage);
    } else {
      hideInputError(formElement, inputElement);
    }
  }

  _isInvalidInput(inputList) {
    inputList.some((inputElement) => !inputElement.validity.valid);
  }
  _toggleButtonState(inputList, buttonElement) {
    if (isInvalidInput(inputList)) {
      buttonElement.setAttribute("disabled", true);
      buttonElement.classList.add("button_inactive");
    } else {
      buttonElement.removeAttribute("disabled", false);
      buttonElement.classList.remove("button_inactive");
    }
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

  enableValidation() {
    const inputList = Array.from(
      document.querySelectorAll(".popup__container")
    );
    inputList.forEach((formElement) => {
      formElement.addEventListener("submit", (evt) => {
        evt.preventDefault();
      });
      setEventListeners(formElement);
    });

    return enableValidation({
      formSelector: ".popup__container",
      inputSelector: ".popup__field-txt",
      submitButtonSelector: ".button_submit",
      inactiveButtonClass: "button_inactive",
      inputErrorClass: "popup__input_type_error",
      errorClass: "popup__input-error_active",
    });
  }
}

export default { FormValidator };

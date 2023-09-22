const popupImg = document.querySelector(".popup_image");
const popupAdd = document.querySelector(".popup_add");
const editButton = document.querySelector(".button_profile");
const closeButtonImg = popupImg.querySelector(".button_close_image");
const closeButton = document.querySelector(".button_close");
const addButton = document.querySelector(".button_add");
const closeButtonAdd = popupAdd.querySelector(".button_close");
const cardList = document.querySelector(".cards");
const form = document.querySelector(".popup__container");
const formAdd = popupAdd.querySelector(".popup__container");
const popupRemove = document.querySelector("popup_remove");
const removeButton = document.querySelector(".card__remove-icon");

const config = {
  formSelector: ".popup__field",
  inputSelector: ".popup__field-txt",
  errorSelector: ".popup__input-error",
  submitButtonSelector: ".button_submit",
  inactiveButtonClass: "button_inactive",
  inputErrorClass: "popup__input_type_error",
  errorClass: "popup__input-error_active",
};

export {
  cardList,
  form,
  formAdd,
  editButton,
  addButton,
  closeButton,
  closeButtonAdd,
  closeButtonImg,
  config,
  removeButton,
  popupRemove,
};

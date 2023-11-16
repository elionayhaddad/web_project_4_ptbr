const popupImg = document.querySelector(".popup_image");
const popupAdd = document.querySelector(".popup_add");
const popupPhotoUser = document.querySelector(".popup_photo-user");
const editButton = document.querySelector(".button_profile");
const closeButtonImg = popupImg.querySelector(".button_close_image");
const closeButton = document.querySelector(".button_close");
const addButton = document.querySelector(".button_add");
const closeButtonAdd = popupAdd.querySelector(".button_close");
const closeButtonRemove = document.querySelector("img#close-remove");
const closeButtonPhotoUser = document.querySelector(".button_close_photo-user");
const cardList = document.querySelector(".cards");
const form = document.querySelector(".popup__container");
const formAdd = popupAdd.querySelector(".popup__container");
const formPhoto = popupPhotoUser.querySelector(".popup__container-photo-user");
const popupRemove = document.querySelector(".popup_remove");
const removeButton = document.querySelector(".card__remove-icon");
const btnSubmitConfirm = popupRemove.querySelector(".button_submit_confirm");

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
  formPhoto,
  btnSubmitConfirm,
  editButton,
  addButton,
  closeButton,
  closeButtonAdd,
  closeButtonImg,
  closeButtonRemove,
  closeButtonPhotoUser,
  config,
  removeButton,
  popupRemove,
};

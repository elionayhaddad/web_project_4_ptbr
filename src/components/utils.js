const popup = document.querySelector(".popup");
const popupImg = document.querySelector(".popup_image");
const popupAdd = document.querySelector(".popup_add");
const popupPhotoUser = document.querySelector(".popup_photo-user");
const editButton = document.querySelector(".button_profile");
const addButton = document.querySelector(".button_add");
const photoUserBtn = document.querySelector(".profile__overlay");

const closeButton = document.querySelector(".button_close");
const closeButtonAdd = popupAdd.querySelector(".button_close");
const closeButtonImg = popupImg.querySelector(".button_close_image");
const closeButtonRemove = document.querySelector("img#close-remove");
const closeButtonPhotoUser = document.querySelector(".button_close_photo-user");

const cardList = document.querySelector(".cards");
const form = document.querySelector(".popup__container");
const formAdd = popupAdd.querySelector(".popup__container");
const formPhoto = popupPhotoUser.querySelector(".popup__container-photo-user");
const popupRemove = document.querySelector(".popup_remove");
const removeButton = document.querySelector(".card__remove-icon");

const btnSubmit = popup.querySelector(".button_submit");
const btnSubmitAdd = popupAdd.querySelector(".button_submit");
const btnSubmitConfirm = popupRemove.querySelector(".button_submit_confirm");
const btnSubmitPhotoUser = popupPhotoUser.querySelector(".button_submit");

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
  photoUserBtn,
  btnSubmit,
  btnSubmitAdd,
  btnSubmitPhotoUser,
  closeButton,
  closeButtonAdd,
  closeButtonImg,
  closeButtonRemove,
  closeButtonPhotoUser,
  config,
  removeButton,
  popupRemove,
};

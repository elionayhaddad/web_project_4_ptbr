const profile = document.querySelector(".profile");
const popup = document.querySelector(".popup");
const popupImg = document.querySelector(".popup_image");
const popupAdd = document.querySelector(".popup_add");
const editButton = profile.querySelector(".button_profile");
const closeButtonImg = popupImg.querySelector(".button_close_image");
const closeButton = popup.querySelector(".button_close");
const addButton = profile.querySelector(".button_add");
const closeButtonAdd = popupAdd.querySelector(".button_close");

function openFormPopup() {
  popup.classList.add("popup_show");
}

function closeFormPopup() {
  popup.classList.remove("popup_show");
}

function openPopupAdd() {
  popupAdd.classList.add("popup_add_show");
}

function closePopupAdd() {
  popupAdd.classList.remove("popup_add_show");
}

function openPopupImage() {
  popupImg.classList.add("popup_image_show");
}

function closePopupImage() {
  popupImg.classList.remove("popup_image_show");
}

function handleOverlayClick() {
  const overlay = popup.querySelector("div#overflow");
  const overlayAdd = popupAdd.querySelector("div#overflow-add");
  const overlayImg = popupImg.querySelector("div#overflow-image");

  overlay.addEventListener("click", closeFormPopup);
  overlayAdd.addEventListener("click", closePopupAdd);
  overlayImg.addEventListener("click", closePopupImage);
}
handleOverlayClick();

function keyHandler(event) {
  if (event.key === "Escape") {
    closeFormPopup();
    closePopupAdd();
    closePopupImage();
  }
  event.target.removeEventListener("keyup", keyHandler);
}

function setEventListeners() {
  document.addEventListener("keyup", keyHandler);
  editButton.addEventListener("click", openFormPopup);
  addButton.addEventListener("click", openPopupAdd);
  closeButton.addEventListener("click", closeFormPopup);
  closeButtonAdd.addEventListener("click", closePopupAdd);
  closeButtonImg.addEventListener("click", closePopupImage);
}
setEventListeners();

export {
  popup,
  popupAdd,
  popupImg,
  editButton,
  addButton,
  closeButton,
  closeButtonAdd,
  closeButtonImg,
  profile,
  openFormPopup,
  closeFormPopup,
  openPopupAdd,
  closePopupAdd,
  openPopupImage,
  closePopupImage,
  handleOverlayClick,
  keyHandler,
  setEventListeners,
};

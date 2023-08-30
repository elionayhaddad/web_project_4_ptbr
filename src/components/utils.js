import Popup from "./Popup.js";

const profile = document.querySelector(".profile");
const popup = document.querySelector(".popup");
const popupImg = document.querySelector(".popup_image");
const popupAdd = document.querySelector(".popup_add");
const editButton = profile.querySelector(".button_profile");
const closeButtonImg = popupImg.querySelector(".button_close_image");
const closeButton = document.querySelector(".button_close");
const addButton = profile.querySelector(".button_add");
const closeButtonAdd = popupAdd.querySelector(".button_close");

// function handleOverlayClick() {
//   const overlay = popup.querySelector("div#overflow");
//   const overlayAdd = popupAdd.querySelector("div#overflow-add");
//   const overlayImg = popupImg.querySelector("div#overflow-image");

//   overlay.addEventListener("click", closeFormPopup);
//   overlayAdd.addEventListener("click", closePopupAdd);
//   overlayImg.addEventListener("click", closePopupImage);
// }
// handleOverlayClick();

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
  // handleOverlayClick,
  keyHandler,
  setEventListeners,
};

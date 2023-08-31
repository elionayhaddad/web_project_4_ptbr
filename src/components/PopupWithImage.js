import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
  constructor() {
    super(".popup_image");
    this.setEventListeners();
  }
  open(imageUrl, imageName) {
    const popupImageElement = document.querySelector(".popup__link-image");
    const popupImageLegend = document.querySelector(".popup__legend-image");
    popupImageElement.src = imageUrl;
    popupImageLegend.textContent = imageName;
    super.open();
  }
}

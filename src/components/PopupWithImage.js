import Popup from "./Popup.js";
import { popupImg } from "./utils.js";

export default class PopupWithImage extends Popup {
  constructor() {
    super(".popup_image");
    this.setEventListener();
  }
  open(name, imageUrl) {
    popupImg.src = imageUrl;
    popupImg.alt = name;
    super.open();
  }
}

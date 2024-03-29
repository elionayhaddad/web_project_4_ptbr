import { closeButton } from "./utils.js";

export default class Popup {
  constructor(selector) {
    this._popup = document.querySelector(selector);
    this._handleEscClose = this._handleEscClose.bind(this);
  }

  open() {
    this._popup.classList.add("popup_show");
    document.addEventListener("keyup", this._handleEscClose);
  }

  close() {
    this._popup.classList.remove("popup_show");
    document.removeEventListener("keyup", this._handleEscClose);
  }

  _handleEscClose(event) {
    if (event.key === "Escape") {
      this.close(this._popup);
    }
  }

  setEventListeners() {
    closeButton.addEventListener("click", this.close());
    this._popup.addEventListener("click", (event) => {
      if (event.target.classList.contains("popup__overflow")) {
        this.close(this._popup);
      }
    });
  }
}

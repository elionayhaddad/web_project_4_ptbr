import "../page/index.css";
import {
  initialCards,
  cardList,
  form,
  formAdd,
  editButton,
  addButton,
  closeButton,
  closeButtonAdd,
  closeButtonImg,
} from "../components/utils.js";
import UserInfo from "../components/UserInfo.js";
import FormValidator from "../components/FormValidator.js";
import Card from "../components/Card.js";
import Section from "../components/Section.js";
import PopupWithImage from "../components/PopupWithImage.js";
import PopupWithForm from "../components/PopupWithForms.js";

const popupWithImage = new PopupWithImage();

const section = new Section(
  {
    items: initialCards,
    renderer: (item) => {
      const card = new Card(
        item.name,
        item.imageUrl,
        ".card-template",
        (imageUrl, name) => {
          popupWithImage.open(imageUrl, name);
        }
      );
      const cardElement = card.generateCard();
      cardList.prepend(cardElement);
      return cardElement;
    },
  },
  ".cards"
);
section.renderItems(initialCards);

const formPopup = new PopupWithForm(() => {
  const user = new UserInfo({
    nameSelector: ".profile__artist",
    roleSelector: ".profile__text",
  });
  const newUser = user.setUserInfo();
  return newUser;
}, ".popup");

const formPopupAdd = new PopupWithForm((values) => {
  const inputTitle = document.querySelector(".title-input");
  const inputImageUrl = document.querySelector(".link-input");
  const card = new Card(
    inputTitle.value,
    inputImageUrl.value,
    ".card-template",
    (imageUrl, name) => {
      popupWithImage.open(imageUrl, name);
    }
  );
  const cardElement = card.generateCard();
  cardList.prepend(cardElement);
  return cardElement;
}, ".popup_add");

const config = {
  formSelector: ".popup__field",
  inputSelector: ".popup__field-txt",
  errorSelector: ".popup__input-error",
  submitButtonSelector: ".button_submit",
  inactiveButtonClass: "button_inactive",
  inputErrorClass: "popup__input_type_error",
  errorClass: "popup__input-error_active",
};

const formValidator = new FormValidator(config, form);
const formAddValidation = new FormValidator(config, formAdd);

formValidator.enableValidation();
formAddValidation.enableValidation();
formPopup.setEventListeners();
formPopupAdd.setEventListeners();
popupWithImage.setEventListeners();

addButton.addEventListener("click", () => formPopupAdd.open());
closeButtonAdd.addEventListener("click", () => formPopupAdd.close());
editButton.addEventListener("click", () => {
  formPopup.open();
  const populateForm = new UserInfo(
    {
      nameSelector: ".profile__artist",
      roleSelector: ".profile__text",
    },
    ".popup"
  );
  return populateForm.getUserInfo();
});
closeButtonImg.addEventListener("click", () => popupWithImage.close());
closeButton.addEventListener("click", () => formPopup.close());

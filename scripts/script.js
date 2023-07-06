const profile = document.querySelector(".profile");
const popup = document.querySelector(".popup");
const popupAdd = document.querySelector(".popup_add");
const editButton = profile.querySelector(".button_profile");
const addButton = profile.querySelector(".button_add");
const card = document.querySelector(".card");
const closeButton = popup.querySelector(".button_close");
const closeButtonAdd = popupAdd.querySelector(".button_close");
// variável para os seis cartões iniciais da página
const initialCards = [
  {
    name: "Vale de Yosemite",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_yosemite.jpg",
  },
  {
    name: "Lago Louise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_lake-louise.jpg",
  },
  {
    name: "Montanhas Carecas",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_bald-mountains.jpg",
  },
  {
    name: "Latemar",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_latemar.jpg",
  },
  {
    name: "Parque Nacional da Vanoise ",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_vanoise.jpg",
  },
  {
    name: "Lago di Braies",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_lago.jpg",
  },
];

function togglePopup() {
  popup.classList.toggle("popup_show");
}

function togglePopupAdd() {
  popupAdd.classList.toggle("popup_add_show");
}

function populateForm() {
  const nameArtist = profile.querySelector(".profile__artist").textContent;
  const roleArtist = profile.querySelector(".profile__text").textContent;

  popup.querySelector("input#name").value = nameArtist;
  popup.querySelector("input#role").value = roleArtist;
}

function handleProfileFormSubmit(evt) {
  evt.preventDefault(popup);
  popup.classList.remove("popup_show");
  const nameInput = popup.querySelector("input#name").value;
  const roleInput = popup.querySelector("input#role").value;

  profile.querySelector(".profile__artist").textContent = nameInput;
  profile.querySelector(".profile__text").textContent = roleInput;
}

function toggleReact() {
  const reactButton = card.querySelector(".card__like");
  reactButton.classList.toggle("card__like_active");
}

editButton.addEventListener("click", togglePopup); // abre o popup de edição de perfil
addButton.addEventListener("click", togglePopupAdd); // abre o popup de adição de cartão
editButton.addEventListener("click", populateForm);
closeButton.addEventListener("click", togglePopup); // fecha o popup de edição de perfil
closeButtonAdd.addEventListener("click", togglePopupAdd); // fecha o popup de adição de cartão
popup.addEventListener("submit", handleProfileFormSubmit);
card.addEventListener("click", toggleReact);

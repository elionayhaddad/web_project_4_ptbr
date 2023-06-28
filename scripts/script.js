let profile = document.querySelector(".profile");
let popup = document.querySelector(".popup");
let editButton = profile.querySelector(".button_profile");
let card = document.querySelector(".card");
let closeButton = popup.querySelector(".button_close");

function togglePopup() {
  popup.classList.toggle("popup_show");
}

function populateForm() {
  let nameArtist = profile.querySelector(".profile__artist").textContent;
  let roleArtist = profile.querySelector(".profile__text").textContent;

  popup.querySelector("input#name").value = nameArtist;
  popup.querySelector("input#role").value = roleArtist;
}

function handleProfileFormSubmit(evt) {
  evt.preventDefault(popup);
  popup.classList.remove("popup_show");
  let nameInput = popup.querySelector("input#name").value;
  let roleInput = popup.querySelector("input#role").value;

  profile.querySelector(".profile__artist").textContent = nameInput;
  profile.querySelector(".profile__text").textContent = roleInput;
}

function toggleReact() {
  let reactButton = card.querySelector(".card__like");
  reactButton.classList.toggle("card__like_active");
}
editButton.addEventListener("click", togglePopup);
editButton.addEventListener("click", populateForm);
closeButton.addEventListener("click", togglePopup);
popup.addEventListener("submit", handleProfileFormSubmit);
card.addEventListener("click", toggleReact);

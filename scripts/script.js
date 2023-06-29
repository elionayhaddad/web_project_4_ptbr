const profile = document.querySelector(".profile");
const popup = document.querySelector(".popup");
const editButton = profile.querySelector(".button_profile");
const card = document.querySelector(".card");
const closeButton = popup.querySelector(".button_close");

function togglePopup() {
  popup.classList.toggle("popup_show");
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
editButton.addEventListener("click", togglePopup);
editButton.addEventListener("click", populateForm);
closeButton.addEventListener("click", togglePopup);
popup.addEventListener("submit", handleProfileFormSubmit);
card.addEventListener("click", toggleReact);

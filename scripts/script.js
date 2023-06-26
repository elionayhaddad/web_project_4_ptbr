let profile = document.querySelector(".profile");
let popup = document.querySelector(".popup");
let name = profile.querySelector(".profile__artist");
let role = profile.querySelector(".profile__text");
let editButton = profile.querySelector(".button__profile");
let closeButton = popup.querySelector(".button-close");

function editInfo() {
  popup.setAttribute("style", "display:flex");
  editButton.innerHTML = `<div class="popup">
  <img class="button-close" src="images/close-icon.png" />
  <form class="popup__container" name="register">
    <h3 class="popup__title">Editar perfil</h3>
    <fieldset class="popup__field">
      <input
        class="popup__field-txt"
        type="text"
        name="name"
        placeholder="Nome"
      />
      <img class="popup__field-img" src="images/line_form.png" />
    </fieldset>
    <fieldset class="popup__field">
      <input
        class="popup__field-txt"
        type="text"
        name="function"
        placeholder="Função"
      />
      <img class="popup__field-img" src="images/line_form.png" />
    </fieldset>
    <button class="button button-submit" type="submit">Salvar</button>
  </form>
</div>";`;
}
editButton.addEventListener("click", editInfo);

// function closeBox() {
//   popup.removeAttribute("style", "display:flex");
//   closeButton.innerHTML = `
//   <button class="button button__profile" type="submit">
//   <img
//     class="button__profile-image"
//     src="images/button__edit.svg"/>
//  </button>`;
// }
// closeButton.addEventListener("click", closeBox);

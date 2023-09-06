export default class UserInfo {
  constructor({ nameSelector, roleSelector }) {
    this._name = nameSelector;
    this._role = roleSelector;
    this._nameInput = document.querySelector(".name-input");
    this._roleInput = document.querySelector(".role-input");
  }
  getUserInfo() {
    const nameUser = document.querySelector(this._name);
    const roleUser = document.querySelector(this._role);

    this._nameInput.value = nameUser.textContent;
    this._roleInput.value = roleUser.textContent;
  }

  setUserInfo() {
    document.querySelector(this._name).textContent = this._nameInput.value;
    document.querySelector(this._role).textContent = this._roleInput.value;
  }
}

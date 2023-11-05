export default class Api {
  constructor({ baseUrl, headers }) {
    this.baseUrl = baseUrl;
    this.headers = headers;
  }

  getUserInfo(user) {
    return fetch(`${this.baseUrl}/users/me`, {
      method: "GET",
      headers: this.headers,
      user,
    }).then((res) => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject();
    });
  }

  getCards() {
    return fetch(`${this.baseUrl}/cards`, {
      method: "GET",
      headers: this.headers,
    }).then((res) => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject();
    });
  }

  editProfile(nameUser, roleUser) {
    return fetch(`${this.baseUrl}/users/me`, {
      method: "PATCH",
      headers: this.headers,
      body: JSON.stringify({
        name: nameUser,
        about: roleUser,
      }),
    }).then((res) => {
      if (res.ok) {
        return res.json();
      }

      return Promise.reject();
    });
  }

  createCards(card) {
    return fetch(`${this.baseUrl}/cards`, {
      method: "POST",
      body: JSON.stringify(card),
      headers: this.headers,
    }).then((res) => {
      if (res.ok) {
        return res.json();
      }

      return Promise.reject();
    });
  }

  deleteCards(cardId) {
    return fetch(`${this.baseUrl}/cards/${cardId}`, {
      method: "DELETE",
      headers: this.headers,
    }).then((res) => {
      if (res.ok) {
        return res.json();
      }

      return Promise.reject();
    });
  }

  addLikeCards(cardId) {
    return fetch(`${this.baseUrl}/cards/likes/${cardId}`, {
      method: "PUT",
      headers: this.headers,
    }).then((res) => {
      if (res.ok) {
        return res.json();
      }

      return Promise.reject();
    });
  }
  removeLikeCards(cardId) {
    return fetch(`${this.baseUrl}/cards/likes/${cardId}`, {
      method: "DELETE",
      headers: this.headers,
    }).then((res) => {
      if (res.ok) {
        return res.json();
      }

      return Promise.reject();
    });
  }

  updateImageUser() {
    return fetch(`${this.baseUrl}/users/me/avatar`, {
      method: "PATCH",
      headers: this.headers,
    }).then((res) => {
      if (res.ok) {
        return res.json();
      }

      return Promise.reject();
    });
  }
}

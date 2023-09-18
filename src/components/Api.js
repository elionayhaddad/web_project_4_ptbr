export default class Api {
  constructor({ baseUrl, headers }) {
    this.baseUrl = baseUrl;
    this.headers = headers;
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
}

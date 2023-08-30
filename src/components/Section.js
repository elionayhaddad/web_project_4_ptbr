export default class Section {
  constructor({ items, renderer }, selector) {
    this._containerSelector = document.querySelector(selector);
    this._items = items;
    this._renderer = renderer;
  }

  renderItems() {
    this._items.forEach((item) => this._renderer(item));
  }

  addItem() {
    this._containerSelector.append(this._items);
  }
}

import "../styles/app.css";

import Shop from "./shop.js";

export class App {
  static cart;

  static init() {
    const shop = new Shop();
    this.cart = shop.cart;
  }

  static addProductToCart(product) {
    if (this.cart) {
      this.cart.addProduct(product);
    }
  }
}

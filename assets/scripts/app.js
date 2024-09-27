import Shop from "./shop.js";

export class App {
  static cart;

  static init() {
    console.log("Initilize shop");
    const shop = new Shop();
    this.cart = shop.cart;
  }

  static addProductToCart(product) {
    console.log("product added to cart", product);
    this.cart.addProduct(product);
  }
}

App.init();

import { ProductList } from "./product-list.js";
import { ShoppingCart } from "./shopping-cart.js";

export default class Shop {
  constructor() {
    this.render();
  }

  render() {
    console.log("render shop");
    this.cart = new ShoppingCart("app");
    new ProductList("app");
  }
}

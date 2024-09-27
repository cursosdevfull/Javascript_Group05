import { Component } from "./component.js";

export class ShoppingCart extends Component {
  items = [];

  constructor(tagRenderId) {
    super(tagRenderId);
    console.log("ShoppingCart constructor");
  }

  render() {
    const elementTotal = this.createRootElement("section", "cart");
    elementTotal.innerHTML = `
          <h2>Total: 0</h2>
          <button>Order now</button>
      `;

    this.totalOutput = elementTotal.querySelector("h2");
  }

  addProduct(product) {
    const updateItems = [...this.items];
    updateItems.push(product);
    this.cartItems(updateItems);
  }

  cartItems(listItems) {
    this.items = listItems;
    const total = this.items.map(this.getPrice).reduce(this.calculateTotal, 0);
    this.totalOutput.innerHTML = `Total: ${total}`;
  }

  getPrice(item) {
    return item.price;
  }

  calculateTotal(previousValue, currentValue) {
    return previousValue + currentValue;
  }
}

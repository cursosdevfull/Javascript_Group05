import { App } from "./app.js";
import { Component } from "./component.js";

export class ProductItem extends Component {
  constructor(product, tagRenderId) {
    super(tagRenderId, false);
    this.product = product;
    console.log("show product", this.product);
    this.render();
  }

  addToCart() {
    //console.log("Product added to cart", this.product);
    App.addProductToCart(this.product);
  }

  render() {
    const productElement = this.createRootElement("li", "product-item");
    productElement.innerHTML = `
          <div>
              <img src="${this.product.imageUrl}" alt="${this.product.title}" />
              <div class="product-item__content">
                  <h2>${this.product.title}</h2>
                  <h3>US ${this.product.price}</h3>
                  <p>${this.product.description}</p>
                  <button>Add to cart</button>
              </div>
          </div>
      `;

    const addCartButton = productElement.querySelector("button");
    addCartButton.addEventListener("click", this.addToCart.bind(this));
  }
}

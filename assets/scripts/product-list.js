import { Component } from "./component.js";
import { ElementAttribute } from "./element-attribute.js";
import { ProductItem } from "./product-item.js";
import { Product } from "./product.js";

export class ProductList extends Component {
  products = [];

  constructor(tagRenderId) {
    super(tagRenderId);
    this.loadProducts();
  }

  loadProducts() {
    this.products = [
      new Product(
        "Pillow",
        "https://americanblossomlinens.com/cdn/shop/files/Two_Pillows_Stacked_Bed_Pillow_Natural_Cotton_Wool_Fill_Made_in_USA_2048x.jpg?v=1725917584",
        "Afforable pillow",
        100
      ),
      new Product(
        "Blank sheet",
        "https://decotextiles.com.pe/wp-content/uploads/2019/10/Sabana-King-Size-1.jpg",
        "Egypt sheet",
        200
      ),
      new Product(
        "Night Table",
        "https://www.ethanallen.com/dw/image/v2/AAKH_PRD/on/demandware.static/-/Sites-main/default/dwf7d5eb88/images/large_gray/22-5326_461_F.jpg?sw=1268&sh=1268&sm=fit&strip=false",
        "Roman night table",
        500
      ),
    ];

    this.renderProducts();
  }

  render() {
    this.createRootElement("ul", "product-list", [
      new ElementAttribute("id", "prod-list"),
    ]);
  }

  renderProducts() {
    this.products.forEach((product) => new ProductItem(product, "prod-list"));
  }
}

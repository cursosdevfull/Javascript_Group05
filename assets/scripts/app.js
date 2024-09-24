class ElementAttribute {
  constructor(name, value) {
    this.name = name;
    this.value = value;
  }
}

class Component {
  constructor(tagRenderId, isRendered = true) {
    this.tagRenderId = tagRenderId;
    if (isRendered) this.render();
  }

  render() {
    console.log("Calling method render");
  }

  createRootElement(tag, cssClass, attributes) {
    const root = document.createElement(tag);

    if (cssClass) {
      root.className = cssClass;
    }

    if (attributes && attributes.length > 0) {
      for (const attr of attributes) {
        if (attr.name && attr.value) root.setAttribute(attr.name, attr.value);
      }
    }

    document.getElementById(this.tagRenderId).append(root);

    return root;
  }
}

class Product {
  constructor(title, imageUrl, description, price) {
    this.title = title;
    this.imageUrl = imageUrl;
    this.description = description;
    this.price = price;
  }
}

class ProductItem extends Component {
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

class ProductList extends Component {
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

class ShoppingCart extends Component {
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

class Shop {
  constructor() {
    this.render();
  }

  render() {
    console.log("render shop");
    this.cart = new ShoppingCart("app");
    new ProductList("app");
  }
}

class App {
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

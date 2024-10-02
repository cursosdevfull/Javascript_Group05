import { App } from "./app.js";

vi.mock("./shop.js", () => {
  return {
    default: vi.fn().mockImplementation(() => {
      return {
        cart: {
          addProduct: vi.fn(),
        },
      };
    }),
  };
});

describe("App", () => {
  beforeEach(() => {
    App.cart = null;
  });

  it("should initialize the shop and set the cart", () => {
    App.init();
    expect(App.cart).not.toBeNull();
  });

  it("should add product or cart if cart is initialized", () => {
    App.init();
    const product = { id: 1, name: "ssss" };
    App.addProductToCart(product);

    expect(App.cart.addProduct).toHaveBeenCalled();
    expect(App.cart.addProduct).toHaveBeenCalledWith(product);
  });
});

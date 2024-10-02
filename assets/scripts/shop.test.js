import { ProductList } from "./product-list.js";
import Shop from "./shop.js";
import { ShoppingCart } from "./shopping-cart.js";

vi.mock("./shopping-cart.js", () => {
  return {
    ShoppingCart: vi.fn().mockImplementation(() => {
      return {
        render: vi.fn(),
      };
    }),
  };
});

vi.mock("./product-list.js", () => {
  return {
    ProductList: vi.fn().mockImplementation(() => {
      return {
        render: vi.fn(),
      };
    }),
  };
});

describe("Shop", () => {
  it("should create an instance of ShoppingCart and ProductList on render", () => {
    const shop = new Shop();
    expect(ShoppingCart).toHaveBeenCalledWith("app");
    expect(ProductList).toHaveBeenCalledWith("app");
  });

  it("should call render method on instantiation", () => {
    const renderSpy = vi.spyOn(Shop.prototype, "render");
    new Shop();
    expect(renderSpy).toHaveBeenCalled();
    renderSpy.mockRestore();
  });
});

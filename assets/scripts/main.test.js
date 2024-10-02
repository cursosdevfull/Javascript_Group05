import { App } from "./app.js";

vi.mock("./app.js", () => {
  return {
    App: {
      init: vi.fn(),
    },
  };
});

describe("main.js", () => {
  it("should call App.init on load", () => {
    // Preparación
    import("./main.js");

    // Ejecución

    // Comprobación
    vi.waitFor(() => {
      expect(App.init).toHaveBeenCalled();
    });
  });
});

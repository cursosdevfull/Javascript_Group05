export class Component {
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

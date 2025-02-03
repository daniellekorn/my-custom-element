const createImg = (id, src) => {
  const img = document.createElement("img");
  img.src = src;
  img.id = id;
  img.width = 200;
  img.style.position = "fixed";
  return img;
};

class MyElement extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `<p>Hello from MyElement!</p>`; // Set HTML first
    this.appendChild(createImg("img", "./wix.png")); // Then append image
  }
}

customElements.define("my-element", MyElement);

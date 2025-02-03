const LOGO_IMG = "https://static.wixstatic.com/media/logo-img.png";

const createImg = (id, src) => {
  const img = document.createElement("img");
  img.src = src;
  img.id = id;
  img.width = "200";
  img.style.position = "fixed";
  return img;
};

class myElement extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.appendChild(createImg("img", LOGO_IMG));
    this.innerHTML = `<p>Hello from MyElement!</p>`;
  }
}

customElements.define("my-element", myElement);

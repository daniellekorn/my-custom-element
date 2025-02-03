class MyElement extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `<p>Hello from MyElement!</p>`;
  }
}

customElements.define("my-element", MyElement);

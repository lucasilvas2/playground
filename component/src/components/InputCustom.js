class InputCustom extends HTMLElement {
  constructor() {
    super();

    const shadow = this.attachShadow({ mode: "open" });

    const div = document.createElement("div");
    const label = document.createElement("label");
    label.setAttribute("for", "input-custom");
    label.textContent = "Label input";

    const input = document.createElement("input");
    input.setAttribute("id", "input-custom");
    input.type = "text";

    input.addEventListener("change", (element)=>{
      console.log(this, element);
    });

    div.append(label, input);
    shadow.appendChild(div);
  }

  attributeChangedCallback(name, oldValue, newValue) {
    console.log(
      `Attribute ${name} has changed from ${oldValue} to ${newValue}.`
    );
  }
}

customElements.define("input-custom", InputCustom);

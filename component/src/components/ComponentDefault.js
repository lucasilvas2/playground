class ComponentDefault extends HTMLElement {
    constructor(){
        super();

        const shadow = this.attachShadow({mode: "open"});

        const componentRoot = document.createElement("p");
        componentRoot.textContent = this.getAttribute("message");

        const style = document.createElement("style");
        style.textContent = `
            p{
                color: red;
            }
        `;

        shadow.appendChild(componentRoot);
        shadow.appendChild(style);
    }
}

customElements.define("component-default", ComponentDefault)
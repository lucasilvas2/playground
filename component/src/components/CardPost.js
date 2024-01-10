class CardPost extends HTMLElement {
  constructor() {
    super();

    const shadow = this.attachShadow({ mode: "open" });
    shadow.appendChild(this.build());
    shadow.appendChild(this.style());
  }

  build() {
    const componentRoot = document.createElement("div");
    componentRoot.setAttribute("class", "card");

    const cardLeft = document.createElement("div");
    cardLeft.setAttribute("class", "card-left");

    const autor = document.createElement("span");
    autor.textContent = "By " + (this.getAttribute("autor") || "Anonymous");

    const linkTitle = document.createElement("a");
    linkTitle.textContent = this.getAttribute("title");
    linkTitle.href = this.getAttribute("link");

    const content = document.createElement("p");
    content.textContent = this.getAttribute("content");

    cardLeft.append(autor, linkTitle, content);

    const cardRight = document.createElement("div");
    cardRight.setAttribute("class", "card-right");

    const image = document.createElement("img");
    image.src = this.getAttribute("image") || "assets/images/postDefault.jpg";
    image.alt = "Foto do post";
    cardRight.appendChild(image);

    componentRoot.appendChild(cardLeft);
    componentRoot.appendChild(cardRight);

    return componentRoot;
  }

  style() {
    const style = document.createElement("style");
    style.textContent = `
        .card {
            width: 80%;
            box-shadow: 9px 9px 27px 0px rgba(0, 0, 0, 0.75);
            -webkit-box-shadow: 9px 9px 27px 0px rgba(0, 0, 0, 0.75);
            -moz-box-shadow: 9px 9px 27px 0px rgba(0, 0, 0, 0.75);
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            margin-bottom: 20px;
          }
          
          .card-left {
            display: flex;
            flex-direction: column;
            justify-content: center;
            padding-left: 10px;
          }
          
          .card-left > span {
            font-weight: 400;
          }
          
          .card-left > a {
            margin-top: 15px;
            font-size: 25px;
            color: black;
            text-decoration: none;
            font-weight: bold;
          }
          
          .card-left > p {
            color: rgb(70, 70, 70);
          }

          .card-right > img {
            height: 100%;
          }
        `;

    return style;
  }
}

customElements.define("card-post", CardPost);

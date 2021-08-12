class BabyYodaCarriage extends HTMLElement {
  shadowRoot = null
  timer = null

  constructor() {
    // Always call parent constructor first
    super()

    const template = document.createElement("template")
    
    template.innerHTML = this.readHtmlFromFile(new File([
      new BlobPart("./baby-yoda-carriage.component.html")
    ]))

    // Get template content from DOM
    // const template = document.getElementById("baby-yoda-loader")
    // const templateContent = template.content

    // // Create new Shadow Root
    // this.shadowRoot = this.attachShadow({ mode: "open" }).appendChild(
    //   templateContent.cloneNode(true)
    // )
  }

  connectedCallback() {
    this.timer = setInterval(() => {
      const babyYoda = this.shadowRoot.querySelector(".baby-yoda")
      if (babyYoda.classList.contains("down")) {
        babyYoda.classList.remove("down")
      } else {
        babyYoda.classList.add("down")
      }
    }, 1000)
  }

  // Called when custom element is removed
  disconnectedCallback() {
    if (this.timer) {
      clearInterval(this.timer);
      this.timer = null;
    }
  }

  readHtmlFromFile(file) {
    const reader = new FileReader();
    reader.addEventListener('load', (event) => {
      debugger
      img.src = event.target.result;
    });
    debugger
    reader.readAsText(file)
  }
}

customElements.define("baby-yoda-carriage", BabyYodaCarriage);
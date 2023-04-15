import styles from "./cat.css"

export enum Attribute {
    "cosito"="cosito"
}


class Card extends HTMLElement {
    cosito?: string

    static get observedAttributes() {
        const atri: Record<Attribute, null> = {
            cosito: null,
        };
        return Object.keys(atri);
    }

    constructor() {
        super();
        this.attachShadow({ mode: "open" });
    }

    connectedCallback() {
        this.render();
    }

    attributeChangedCallback(
        propName: Attribute,
        _: string | undefined,
        newValue: string | undefined
        ) {
            switch (propName) {

                default:
                this[propName] = newValue;
                break;
            }

            this.render();
        }

        render() {
            if (this.shadowRoot) {
                this.shadowRoot.innerHTML = ``
                
                const css = this.ownerDocument.createElement("style");
                css.innerHTML = styles;
                this.shadowRoot?.appendChild(css);
                 
                this.shadowRoot.innerHTML += `
                <link rel="stylesheet" href="">
                <section>
                <button>${this.cosito}</button>
                </section>
                `;
            }
        }
    }

customElements.define("my-category", Card);
export default Card;

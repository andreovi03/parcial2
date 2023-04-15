import styles from "./jok.css"

export enum Attributej {
    "categories" = "categories",
    "icon" = "icon",
    "value" = "value",
}


class Cardj extends HTMLElement {
    categories?:string
    value?:string
    icon?:string

    static get observedAttributes() {
        const atrij: Record<Attributej, null> = {
            categories: null,
            value: null,
            icon: null,
        };
        return Object.keys(atrij);
    }

    constructor() {
        super();
        this.attachShadow({ mode: "open" });
    }

    connectedCallback() {
        this.render();
    }

    attributeChangedCallback(
        propName: Attributej,
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
                <h1>${this.categories}</h1>
                </section>
                `;
            }
        }
    }

customElements.define("my-cardj", Cardj);
export default Cardj;

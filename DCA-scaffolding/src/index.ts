import "./components/export";
import styles from "./components/categories/cat.css";
import {traer_cat} from "./components/data"
import {traer_jok} from "./components/data"
import Card, { Attribute } from "./components/categories/categories";
import Cardj, { Attributej } from "./components/jokes/jokes";


class AppContainer extends HTMLElement {
    categoriesL: Card [] = [];

    constructor(){
        super();
        this.attachShadow({mode: "open"})
    }

    async connectedCallback() {
        const dataca = await traer_cat();
        console.log("datach",dataca)
        dataca.forEach((data: any) => {
            console.log(data);
        });

        dataca.forEach((data: any) => {
            const chuckCat = this.ownerDocument.createElement("my-category") as Card;
            chuckCat.setAttribute(Attribute.cosito, data);
                this.categoriesL.push(chuckCat);
        });
        this.render(this.categoriesL);
    }

    render(categoriesL:any) {
        const categoriesC = this.ownerDocument.createElement('section');
        categoriesC.className = "hpSection"
        categoriesL.forEach((categoriesc:any) => {
            categoriesC.appendChild(categoriesc)
        });
        this.shadowRoot?.appendChild(categoriesC);
    }
}

customElements.define('app-container', AppContainer)
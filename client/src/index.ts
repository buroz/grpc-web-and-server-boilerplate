import { customElement, LitElement, html } from "lit-element";
import "./scss/main.scss";
import "./components";

/*
const styles = {
  btn: "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
};
*/

@customElement("root-el")
export class RootElement extends LitElement {
  createRenderRoot() {
    return this;
  }

  render() {
    return html`
      <page-auth>
        <login-form></login-form>
      </page-auth>
    `;
  }
}

import { customElement, LitElement, html } from "lit-element";

const styles = {
  label: "block mb-2 text-sm font-bold text-gray-700",
  input:
    "w-full px-6 py-4 text-sm leading-tight text-gray-700 bg-gray-200 focus:bg-white border-transparent rounded focus:outline-none focus:shadow-outline appearance-none",
  button:
    "w-full px-6 py-4 font-bold text-white rounded   hover:bg-gray-800 active:bg-blue-700 bg-black focus:outline-none",
  link: "inline-block text-sm text-blue-500 align-baseline hover:text-blue-800"
};

@customElement("login-form")
export class LoginForm extends LitElement {
  createRenderRoot() {
    return this;
  }

  render() {
    return html`
      <form class="px-2 lg:px-8 pt-6 pb-8 mb-4 bg-white rounded">
        <div class="mb-4">
          <label class="${styles.label}" for="username">
            Email
          </label>
          <input class="${styles.input}" id="email" type="text" placeholder="Email" />
        </div>

        <div class="mb-4">
          <label class="${styles.label}" for="password">
            Şifre
          </label>
          <input class="${styles.input}" id="password" type="password" placeholder="Şifre" />
        </div>

        <div class="mb-4">
          <input class="mr-2 leading-tight" type="checkbox" id="checkbox_id" />
          <label class="text-sm text-gray-500" for="checkbox_id">
            Beni Hatırla
          </label>
        </div>

        <div class="mb-6 text-center">
          <button class="${styles.button}" type="button">
            Kayıt Ol
          </button>
        </div>

        <hr class="mb-6 border-t" />

        <div class="text-center">
          <a class="${styles.link}" href="./register.html">
            Create an Account!
          </a>
        </div>

        <div class="text-center">
          <a class="${styles.link}" href="./forgot-password.html">
            Forgot Password?
          </a>
        </div>
      </form>
    `;
  }
}

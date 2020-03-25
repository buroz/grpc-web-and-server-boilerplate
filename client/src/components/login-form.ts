import { customElement, LitElement, html } from "lit-element";

@customElement("login-form")
export class LoginForm extends LitElement {
  createRenderRoot() {
    return this;
  }

  render() {
    return html`
      <form class="px-2 lg:px-8 pt-6 pb-8 mb-4 bg-white rounded">
        <div class="mb-4">
          <label class="block mb-2 text-sm font-bold text-gray-700" for="username">
            Username
          </label>
          <input
            class="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
            id="email"
            type="text"
            placeholder="Email"
          />
        </div>
        <div class="mb-4">
          <label class="block mb-2 text-sm font-bold text-gray-700" for="password">
            Password
          </label>
          <input
            class="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border border-red-500 rounded shadow appearance-none focus:outline-none focus:shadow-outline"
            id="password"
            type="password"
            placeholder="Şifre"
          />
          <p class="text-xs italic text-red-500">Please choose a password.</p>
        </div>
        <div class="mb-4">
          <input class="mr-2 leading-tight" type="checkbox" id="checkbox_id" />
          <label class="text-sm" for="checkbox_id">
            Remember Me
          </label>
        </div>
        <div class="mb-6 text-center">
          <button
            class="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700 focus:outline-none focus:shadow-outline"
            type="button"
          >
            Sign In
          </button>
        </div>
        <hr class="mb-6 border-t" />
        <div class="text-center">
          <a class="inline-block text-sm text-blue-500 align-baseline hover:text-blue-800" href="./register.html">
            Create an Account!
          </a>
        </div>
        <div class="text-center">
          <a
            class="inline-block text-sm text-blue-500 align-baseline hover:text-blue-800"
            href="./forgot-password.html"
          >
            Forgot Password?
          </a>
        </div>
      </form>
    `;
  }
}

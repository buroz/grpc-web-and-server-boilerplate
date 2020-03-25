import { customElement, html } from "lit-element";
import { Layout } from "../components/_layout";

@customElement("page-auth")
export class PageAuth extends Layout {
  render() {
    return html`
      <div class="container mx-auto">
        <div class="flex justify-center px-2 my-2 lg:my-16">
          <!-- Row -->
          <div class="w-full xl:w-3/4 lg:w-11/12 flex rounded-lg shadow">
            <!-- Col -->
            <div
              class="w-full h-auto bg-gray-400 hidden lg:block lg:w-1/2 bg-cover rounded-l-lg"
              style="background-image: url('auth-poster.jpg')"
            ></div>
            <!-- Col -->
            <div class="w-full lg:w-1/2 bg-white p-5 rounded-lg lg:rounded-l-none">
              <figure class="pt-4">
                <img class="h-10 mx-auto" src="/brand.svg" alt="" />
              </figure>
              <login-form />
            </div>
          </div>
        </div>
      </div>
    `;
  }
}

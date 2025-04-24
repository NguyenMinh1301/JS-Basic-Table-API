import { Footer } from "../components/Footer";
import { Header } from "../components/Header";

export const HomePage = () => {
  return /*html*/ `
      ${Header()}
      <div class="container">
        <h1>Best selling</h1>
        <div class="product-list">
          
        </div>
      </div>
      ${Footer()}
    `;
};
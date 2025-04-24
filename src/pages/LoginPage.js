import { Footer } from "../components/Footer";
import { Header } from "../components/Header";

export const Login = () => {
    return /*html*/ `
      ${Header()}
      <div class="container">
        <h1> Login Page </h1>
      </div>
      
      ${Footer()}
    `;
  };
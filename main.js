import { AboutPage } from './src/pages/AboutPage';
import { HomePage } from './src/pages/HomePage';
import { Login } from './src/pages/LoginPage';
import { NotFoundPage } from './src/pages/NotFound';
import { SignUp } from './src/pages/SignUp';
import './style.css'
import Navigo from 'navigo';
import "./node_modules/bootstrap/dist/css/bootstrap-grid.min.css";

const router = new Navigo("/", {
  linksSelector: "a"
});

const app = document.getElementById("app");

const render = (position, content) => {
  position.innerHTML = content();
}

app.innerHTML = AboutPage();

router.on("/", () => render(app, HomePage), {
  after() {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then(({ products }) => {
        const productList = document.querySelector(".product-list")
        const contnetHTML = products
          .map((product) => {
            return /*html*/ `
          <div class="product-card">
            <img src="${product.thumbnail}" />
            <div class="product-info">
              <h3>${product.title}</h3>
              <p>Price: ${product.price}</p>
              <span>${product.description}</span>
            </div>
          </div>
        `;
          })
          .join("");

        productList.innerHTML = contnetHTML;

      });
  }
});
router.on("/about", () => render(app, AboutPage));
router.on("/signup", () => render(app, SignUp));
router.on("/login", () => render(app, Login));
router.notFound(() => render(app, NotFoundPage));
router.resolve();

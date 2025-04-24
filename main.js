import { AboutPage } from './src/pages/AboutPage';
import { HomePage } from './src/pages/HomePage';
import { Login } from './src/pages/LoginPage';
import { NotFoundPage } from './src/pages/NotFound';
import { SignUp } from './src/pages/SignUp';
import './style.css'
import Navigo from 'navigo';

const router = new Navigo("/", {
  linksSelector: "a"
});

const app = document.getElementById("app");

const render = (position, content) => {
  position.innerHTML = content();
}

app.innerHTML = AboutPage();

router.on("/", () => render(app, HomePage));
router.on("/about", () => render(app, AboutPage));
router.on("/signup", () => render(app, SignUp));
router.on("/login", () => render(app, Login));
router.notFound(() => render(app, NotFoundPage));
router.resolve();

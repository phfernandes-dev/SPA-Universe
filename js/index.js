import { Router } from "./router.js";

// Mapeamento de rotas utilizando classes
const router = new Router();
router.add("/", "./pages/home.html");
router.add("/universe", "./pages/universe.html");
router.add("/exploration", "./pages/exploration.html");
router.add(404, "./pages/404.html");

router.handle();

// Mapeamento de rotas utilizando object literals
// const routes = {
//   "/": "./pages/home.html",
//   "/universe": "./pages/universe.html",
//   "/exploration": "./pages/exploration.html",
//   404: "./pages/404.html"
// };

//Alterar a página via 'voltar'/'avançar' do navegador
window.onpopstate = () => router.handle();
window.route = () => router.route();

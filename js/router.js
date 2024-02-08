import * as controls from "./controls.js";

export class Router {
  routes = {};
  // Mapeamento de rotas utilizando classes
  add(routeName, page) {
    this.routes[routeName] = page;
  }
  // Evitar redirecionamento
  route(event) {
    event = event || window.event;
    event.preventDefault();

    let bgClass;

    if (document.body.classList.contains("bgHome")) {
      bgClass = "bgHome";
    } else if (document.body.classList.contains("bgUniverse")) {
      bgClass = "bgUniverse";
    } else if (document.body.classList.contains("bgExploration")) {
      bgClass = "bgExploration";
    }

    window.history.pushState({ wallpaper: bgClass }, "", event.target.href);
    window.addEventListener("popstate", function (event) {
      console.log(event.state.wallpaper)
    });
    switch (event.target.pathname) {
      case "/":
        controls.bgHome();
        break;
      case "/universe":
        controls.bgUniverse();
        break;
      case "/exploration":
        controls.bgExploration();
        break;
      default:
        break;
    }

    this.handle();
  }

  // Alterar o conteúdo da página (#app)
  handle() {
    const { pathname } = window.location;
    const route = this.routes[pathname] || this.routes[404];

    // Busca o conteúdo (texto) da página
    fetch(route)
      .then((data) => data.text())
      .then((html) => (document.querySelector("#app").innerHTML = html));
  }
}

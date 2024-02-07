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
    window.history.pushState({}, "", event.target.href);

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

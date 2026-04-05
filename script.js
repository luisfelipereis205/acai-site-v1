const menu = document.querySelector("#menu-hamburguer");
const nav = document.querySelector(".list-header");

menu.addEventListener("click", () => {
    nav.classList.toggle("active") // Adiciona ou remove a classe "active" no elemento de navegação
})

nav.querySelectorAll("a").forEach( link => { // Seleciona todos os links dentro do elemento de navegação e adiciona um evento de clique a cada um deles
    link.addEventListener("click", () => {
        nav.classList.remove("active") // Remove a classe "active" do elemento de navegação quando um link é clicado
    })
});


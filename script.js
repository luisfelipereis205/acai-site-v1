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

document.querySelectorAll(".card").forEach(card => {

  const menos = card.querySelector(".menos");
  const mais = card.querySelector(".mais");
  const qtdSpan = card.querySelector(".qtd");
  const btn = card.querySelector(".btn-card");

  let qtd = 1;

  function gerarMensagem(){ // Função para gerar a mensagem formatada para o pedido, incluindo o número de copos e complementos
    const produto = btn.dataset.produto;
    const numComplementos = parseInt(btn.dataset.complementos); // Obtém o número de complementos a partir do atributo data-complementos e converte para inteiro

    let mensagem = `Olá, gostaria de pedir:\n\n${qtd}x ${produto}\n\n`; 

    for(let i = 1; i <= qtd; i++){ // Loop para cada copo pedido

      mensagem += `ITEM ${i}-\n`;
      mensagem += `1 cobertura:\n`;

      for(let j = 1; j <= numComplementos; j++){ // Loop para cada complemento, usando o número de complementos definido no atributo data-complementos
        mensagem += `Complemento ${j}:\n`;
      }

      mensagem += `\n`;
    }

    return mensagem; // Retorna a mensagem formatada para o pedido, incluindo o número de copos e complementos
  }

  function atualizarLink(){ // Função para atualizar o link do botão com a mensagem formatada
    const numero = "559884952669";

    const mensagem = gerarMensagem();

    btn.href = `https://wa.me/${numero}?text=${encodeURIComponent(mensagem)}`; // Atualiza o link do botão para incluir a mensagem formatada, usando encodeURIComponent para garantir que a mensagem seja corretamente codificada para a URL
  }

  mais.addEventListener("click", () => {
    qtd++;
    qtdSpan.textContent = qtd;
    atualizarLink();
  });

  menos.addEventListener("click", () => {
    if(qtd > 1){
      qtd--;
      qtdSpan.textContent = qtd;
      atualizarLink();
    }
  });

  atualizarLink(); // Chama a função para atualizar o link do botão com a mensagem formatada quando a página é carregada, garantindo que o link esteja correto desde o início
});

// explicação do código: O código seleciona todos os elementos com a classe "card" e para cada card, ele define a funcionalidade de aumentar ou diminuir a quantidade de um produto. Ele também gera uma mensagem formatada para o pedido, incluindo o número de copos e complementos, e atualiza o link do botão para enviar essa mensagem via WhatsApp.
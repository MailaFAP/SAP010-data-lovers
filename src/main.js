import data from "./data/breakingbad/breakingbad.js";
import info from "./data.js";
//aqui importamos o banco de dados do Breaking Bad e o arquivo data.js onde estão as funções para utilizarmos 

//abaixo estão todas as declarações de elementos do html para manipularmos no js
const imgs = document.getElementById("imgs-footer");
const dados = data.breaking_bad;
const btnShow = document.getElementById("botao");
const listHidden = document.getElementById("aside");
const subItens1 = document.getElementById("subItens1");
const subItens2 = document.getElementById("subItens2");
const item1 = document.getElementById("filtro-status");
const item2 = document.getElementById("filtro-categoria");
const bbad = document.getElementById("Breaking-Bad");
const bcSaul = document.getElementById("Better-Cal-Saul");
const bbtter = document.getElementById("Breaking-Better");
const alive = document.getElementById("alive");
const deceased = document.getElementById("deceased");
const dead = document.getElementById("dead");
let dadosFiltrados = dados;
const ordenar = document.getElementById("itemOrdenar");
const subOrdenar = document.getElementById("subItemOrdenar");
const aZ = document.getElementById("a-z");
const zA = document.getElementById("z-a");


function imagens(breaking_bad) {
  imgs.innerHTML = breaking_bad
    .map(
      (breaking_bad) =>
        `<div class="imagem-nome">
          <img src="${breaking_bad.img}" class="imgs-personagens" alt="imagens dos personagens">
            <p class="nomesPersonagens">${breaking_bad.name}</p>
        </div>`
    )
    .join("");
}
imagens(dados);

const controle = document.querySelectorAll(".seta");
let currentItem = 0;
let maxItens = document.querySelectorAll(".imgs-personagens").length;

controle.forEach((control) => {
  control.addEventListener("click", () => {
    const isLeft = control.classList.contains("seta-esquerda");
    if (isLeft) {
      currentItem -= 9;
    } else {
      currentItem += 9;
    }

    if (currentItem >= maxItens) {
      //se o numero atual for maior ou igual ao numero máximo de itens, volta para o inicio
      currentItem = 0;
    }

    if (currentItem < 0) {
      //se o numero atual for menor que zero, vai para o final da lista
      currentItem = maxItens - 1;
    }

    const itens = document.querySelectorAll(".imgs-personagens");
    itens[currentItem].scrollIntoView({
      behavior: "smooth",
      inline: "start", //alinha de maneira horizontal no centro
    });
  });
});

function atualizarItens() {
  maxItens = document.querySelectorAll(".imgs-personagens").length;
}

listHidden.style.display = "none"; // o estado inicial vai ser com o elemento escondido
btnShow.addEventListener("click", () => {
  if (listHidden.style.display === "none") {
    //com display none o elemento é escondido e com display como block o elemento será exibido
    listHidden.style.display = "block";
  } else {
    listHidden.style.display = "none";
  }
});

//Este código é responsável por adicionar um evento de clique ao item1, 
//que é um elemento HTML. Quando esse evento é acionado, o código verifica se o subItens1 
//está definido como "none" em seu estilo (ou seja, invisível na tela). Se for esse o caso, 
//ele altera o estilo do subItens1 para "block" (ou seja, fica visível na tela). 
//Se subItens1 já estiver visível na tela, o código define seu estilo como "none" novamente 
//(tornando-o invisível novamente). Esta é uma forma de criar um menu dropdown para o usuário interagir.
subItens1.style.display = "none";
item1.addEventListener("click", () => {
  if (subItens1.style.display === "none") {
    subItens1.style.display = "block";
  } else {
    subItens1.style.display = "none";
  }
});

subItens2.style.display = "none";
item2.addEventListener("click", () => {
  if (subItens2.style.display === "none") {
    subItens2.style.display = "block";
  } else {
    subItens2.style.display = "none";
  }
});

subOrdenar.style.display = "none";
ordenar.addEventListener("click", () => {
  if (subOrdenar.style.display === "none") {
    subOrdenar.style.display = "block";
  } else {
    subOrdenar.style.display = "none";
  }
});

bbad.addEventListener("click", () => {
  dadosFiltrados = info.filtrarCategorias(dados, bbad.innerHTML);
  imagens(dadosFiltrados);
  atualizarItens();
  calculoAgregadoCategoria(dados, "Breaking Bad");
});
//Este código está adicionando um evento de clique ao elemento HTML com o ID "bbad". 
//Quando o elemento é clicado, o código filtra os dados usando um método chamado "filtrarCategorias", 
//que é definido no objeto "info". Esse método filtra os dados por categoria, usando o texto dentro do elemento 
//"bbad". Em seguida, o código chama a função "imagens" com os dados filtrados como argumento, 
//atualiza os itens com a função "atualizarItens" e faz um cálculo agregado de categoria usando a função 
//"calculoAgregadoCategoria".Essencialmente, este código está ajudando a filtrar e exibir dados específicos 
//com base na categoria selecionada pelo usuário. Neste caso, a categoria é "Breaking Bad".
bcSaul.addEventListener("click", () => {
  dadosFiltrados = info.filtrarCategorias(dados, bcSaul.innerHTML);
  imagens(dadosFiltrados);
  atualizarItens();
  calculoAgregadoCategoria(dados, "Better Call Saul");
  
});

bbtter.addEventListener("click", () => {
  dadosFiltrados = info.filtrarCategorias(dados, bbtter.innerHTML);
  imagens(dadosFiltrados);
  atualizarItens();
  calculoAgregadoCategoria(dados, "Breaking Bad, Better Call Saul");
});

alive.addEventListener("click", () => {
  dadosFiltrados = info.filtrarStatus(dados, alive.innerHTML);
  imagens(dadosFiltrados);
  atualizarItens();
});

dead.addEventListener("click", () => {
  dadosFiltrados = info.filtrarStatus(dados, dead.innerHTML);
  imagens(dadosFiltrados);
  atualizarItens();
});

deceased.addEventListener("click", () => {
  dadosFiltrados = info.filtrarStatus(dados, deceased.innerHTML);
  imagens(dadosFiltrados);
  atualizarItens();
});

aZ.addEventListener("click", () => {
  dadosFiltrados = info.ordenar(dadosFiltrados, aZ.innerHTML);
  imagens(dadosFiltrados);
  atualizarItens();
});

zA.addEventListener("click", () => {
  dadosFiltrados = info.ordenar(dadosFiltrados, zA.innerHTML);
  imagens(dadosFiltrados);
  atualizarItens();
});


function calculoAgregadoCategoria(dados, category) {
  const objetosVerdadeiros = dados.filter(
    (objeto) => objeto.category === category
  );
  // Calcula a porcentagem em relação ao tamanho total da array original
  const porcentagem = info.calculoAgregado(
    objetosVerdadeiros.length,
    dados.length
  );

  const mensagem = `A porcentagem dos personagens de ${category} é de ${porcentagem.toFixed(2)}%.`;
  const resultadoElemento = document.getElementById("porcentagem-msg");
  resultadoElemento.textContent = mensagem; //Atualiza o conteúdo do elemento com a mensagem
}

import data from "./data/breakingbad/breakingbad.js";
import info from "./data.js";

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
const subOrdenar =document.getElementById("subItemOrdenar");
const aZ = document.getElementById("a-z");
const zA = document.getElementById("z-a");

function imagens(breaking_bad) {
  imgs.innerHTML = breaking_bad
    .map(
      (breaking_bad) =>
        `<img src="${breaking_bad.img}" class="imgs-personagens" alt="imagens dos personagens">`
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

    console.log(currentItem);

    if (currentItem >= maxItens) { //se o numero atual for maior ou igual ao numero máximo de itens, volta para o inicio
      currentItem = 0;
    }

    if (currentItem < 0) {//se o numero atual for menor que zero, vai para o final da lista
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
  dadosFiltrados= info.filtrarCategorias(dados, bbad.innerHTML);
  imagens(dadosFiltrados);
  atualizarItens();
});

bcSaul.addEventListener("click", () => {
  dadosFiltrados = info.filtrarCategorias(dados, bcSaul.innerHTML);
  imagens(dadosFiltrados);
  atualizarItens();
});

bbtter.addEventListener("click", () => {
  dadosFiltrados = info.filtrarCategorias(dados, bbtter.innerHTML);
  imagens(dadosFiltrados);
  atualizarItens();
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




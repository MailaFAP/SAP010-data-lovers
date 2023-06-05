import data from "./data/breakingbad/breakingbad.js";
import info from "./data.js";


const imgs = document.getElementById("imgs-footer");
const dados = data.breaking_bad;
const btnShow = document.getElementById("botao");
const listHidden = document.getElementById("aside");
const subItens1 = document.getElementById("subItens1");
const subItens2 = document.getElementById("subItens2");
const item1 = document.getElementById("filtro-status");
const item2 =document.getElementById("filtro-categoria");
const bbad = document.getElementById("Breaking-Bad");
const bcSaul = document.getElementById("Better-Cal-Saul");
const bbtter = document.getElementById("Breaking-Better");
const alive = document.getElementById("alive");
const deceased = document.getElementById("deceased");
const dead = document.getElementById("dead");

function imagens(breaking_bad) {
  imgs.innerHTML = breaking_bad
    .map(
      (breaking_bad) =>
        `<img src="${breaking_bad.img}" class="imgs-personagens" alt="imagens dos personagens">`
    )
    .join("");
}
imagens(dados);



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

bbad.addEventListener("click", () => {
  imagens(info.filtrarCategorias(dados, bbad.innerHTML));
});

bcSaul.addEventListener("click", () => {
  imagens(info.filtrarCategorias(dados, bcSaul.innerHTML));
});

bbtter.addEventListener("click", () => {
  imagens(info.filtrarCategorias(dados, bbtter.innerHTML));
});

alive.addEventListener("click", () => {
  imagens(info.filtrarStatus(dados, alive.innerHTML));
});

dead.addEventListener("click", () => {
  imagens(info.filtrarStatus(dados, dead.innerHTML));
});

deceased.addEventListener("click", () => {
  imagens(info.filtrarStatus(dados, deceased.innerHTML));
});




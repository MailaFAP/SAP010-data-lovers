import data from "./data/breakingbad/breakingbad.js";

const imgs = document.getElementById("imgs-footer");
const dados = data.breaking_bad;
const btnShow = document.querySelector(".botao");
const listHidden = document.querySelector(".aside");

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

import data from "./data/breakingbad/breakingbad.js";

function imagens() {
    for(const i in data.breaking_bad) {
      console.log(data.breaking_bad[i].img);
    }
  }
  imagens();
  const btnShow = document.querySelector(".botao");
  const listHidden = document.querySelector(".aside");
  listHidden.style.display = "none"; // o estado inicial vai ser com o elemento escondido
  btnShow.addEventListener("click", () => {
    if (listHidden.style.display === "none") {
      //com display none o elemento é escondido e com display como block o elemento será exibido
      listHidden.style.display = "block";
    } else {
      listHidden.style.display = "none";
    }
  });
  
/*document.getElementById("filtro-nome").addEventListener("click", )
document.getElementById("botao").addEventListener("click", filtrar);
function filtrar (){

}*/
















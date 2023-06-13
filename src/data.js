function filtrarCategorias(dados, categoria) {
  return dados.filter(i => i.category === categoria);
  //Este código é uma função chamada "filtrarCategorias" que tem dois parâmetros: "dados" que é uma 
  //lista com objetos que possuem uma propriedade "category" e "categoria" que é uma string que representa 
  //a categoria desejada.
  //A função usa o método "filter" para percorrer cada objeto da lista "dados" e criar uma nova lista apenas 
  //com os objetos que possuem a categoria igual a string "categoria".
  //Finalmente, a função retorna a nova lista criada que contém apenas os objetos com a categoria escolhida.
}

function filtrarStatus(dados, status) {
  return dados.filter(i => i.status === status);
}

function ordenar(dadosFiltrados, abobrinha) {
  //A função "sort()" é usada para ordenar os elementos do array em ordem crescente, 
  //ou seja, em ordem alfabética neste caso. O operador ternário é usado para determinar a 
  //ordem de classificação. Se o valor da propriedade "name" de "a" for maior do que o valor da 
  //propriedade "name" de "b", então retorna 1, indicando que "a" deve vir depois de "b" na ordem de 
  //classificação. Caso contrário, retorna -1, indicando que "a" deve vir antes de "b".
  if (abobrinha === "A-Z") {
    dadosFiltrados.sort((a, b) => a.name > b.name ? 1 : -1);
  } else if (abobrinha === "Z-A") {
    dadosFiltrados.sort((a, b) => a.name < b.name ? 1 : -1);
  }
  return dadosFiltrados;
}

function calculoAgregado(quantidade, total) {
  return quantidade / total * 100;
}

export default {
  filtrarCategorias,
  filtrarStatus,
  ordenar,
  calculoAgregado,
};

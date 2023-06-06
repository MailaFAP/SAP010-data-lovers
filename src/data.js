

function filtrarCategorias(dados, categoria) {
  return dados.filter(i => i.category === categoria);
}

function filtrarStatus(dados, status) {
  return dados.filter(i => i.status === status);
}



export default {
  filtrarCategorias: filtrarCategorias, 
  filtrarStatus: filtrarStatus,
};
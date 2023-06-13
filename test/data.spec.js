import data from '../src/data.js';
//este é o famoso mock, que seria um banco de dados "falso" para poder testar a função
const chuchu = [{ 
  name: "Fulano",
  category: "maracujá",
  status: "maduro",  
},
{
  name: "Ciclano",
  category: "abacaxi",
  status: "verde",
}];
//abre uma const para declarar um array de objetos com category, pois é a propriedade que queremos filtrar
describe('filtrar', () => {
  // describe serve para organizar os testes, o que estiver entre aspas é o nome que vai aparecer no terminal, não importa qual o nome que vamos dar
  //abrimos um bloco que vai fazer o testes das funções de filtro que fizemos no data.js
  it('filtrar categoria', () => {
    //o it já é o cenário de teste, não é o bloco de organização como o describe 
    expect(data.filtrarCategorias(chuchu, "maracujá")).toStrictEqual([chuchu[0]]);
    // aqui é o teste em si, eu mostro o esperado e dou os parametros, e mostro o que deveria retornar 
  });

  it('filtrar status', () =>{
    expect(data.filtrarStatus(chuchu, "maduro")).toStrictEqual([chuchu[0]]);
  })
});

describe('ordenar', () => {
  it('ordenar de A-Z', () => {
    const resultado = data.ordenar(chuchu, "A-Z");
    //abrimos uma const para não ficar muito código dentro do expect, mas poderia ser lá tbm
    expect(resultado[0].name).toBe("Ciclano");
    //No chuchu, o indice 0 é Fulano. Depois de ordenado, o índice 0 é Ciclano.
  })
  it('ordenar de Z-A', () => {
    const resultado = data.ordenar(chuchu, "Z-A");
    expect(resultado[0].name).toBe("Fulano");   
  })
});

describe('porcentagem', () => {
  it('porcentagem de personagens', () => {
    expect(data.calculoAgregado(8, 50)).toBe(16);    
  })
});

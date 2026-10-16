//Questão 1
const frutas = ["maçã", "banana", "laranja"];

frutas.push("uva");
frutas.unshift("abacaxi")
frutas.pop();
frutas.shift();
//Questão 2
const numeros = [10, 20, 30, 40, 50, 60];
const numerosParcial = numeros.slice(2,4);

//Questão 3
const cores = ["azul", "verde", "amarelo", "vermelho"];
cores.splice(1,2, "roxo", "laranja");
cores.splice(1,0, "preto");

//Questão 4
const frontEnd = ["HTML", "CSS", "JavaScript"];
const backEnd = ["Node.js", "Python", "Java"];

const tecnologias = frontEnd.concat(backEnd);
tecnologias.forEach((elemento) => (console.log(elemento))) 
//Questão 5
const palavras = ["JavaScript", "é", "uma", "linguagem", "poderosa"];
let frase = palavras.join(" ");
console.log(frase);
//Questão 6
const linguagens = ["JavaScript", "Python", "Java", "C#"];
function temLinguagem(nome) {
    if(linguagens.includes(nome))
        return true;
    return false;
}
console.log(temLinguagem("Python"));

console.log(temLinguagem("Ruby"));
//Questão 7
const nomes = ["Ana", "Bruno", "Carlos", "Ana", "Daniel"];
console.log(nomes.indexOf("Ana"));
console.log(nomes.lastIndexOf("Ana"));
console.log(nomes.indexOf("Marcos"));

//Questão 8
const produtos = ["Notebook", "Mouse", "Teclado", "Monitor"];

produtos.forEach((elemento, indice) => (console.log(indice + " - " + elemento)))
//Questão 9
const precos = [100, 250, 80, 320, 150];

const precosAtualizado = precos.map(
    (elemento) => elemento - (elemento*0.1)
)

//Questão 10
const numeros2 = [3, 8, 11, 14, 21, 26, 30, 35];

const numerosPares = numeros2.filter(
    (elemento) => elemento%2===0
)
//Questão 11
const alunos = [
  { nome: "Ana", nota: 8.5 },
  { nome: "Bruno", nota: 6.0 },
  { nome: "Carlos", nota: 9.2 },
  { nome: "Daniel", nota: 7.5 }
];

console.log(alunos.find(
    (elemento) => elemento.nota > 9 
))

//Questão 12
const produtos2 = [
  { id: 101, nome: "Notebook" },
  { id: 205, nome: "Mouse" },
  { id: 310, nome: "Teclado" },
  { id: 450, nome: "Monitor" }
];

function buscarIndice(id) {
    indice = produtos2.findIndex(id)
    return indice;
}
//Questão 13
const notas = [5.5, 6.0, 7.2, 8.0, 9.5];

console.log(notas.some(
    (elemento) => elemento >= 9
))

console.log(notas.some(
    (elemento) => elemento < 6 
))
//Questão 14
const idades = [22, 31, 19, 27, 40];


console.log(notas.every(
    (elemento) => elemento >= 18
))

const idades2 = [22, 17, 19, 27, 40];

console.log(idades2.every(
    (elemento) => elemento >= 18
))

//Questão 15
const precos2 = [29.90, 49.90, 15.50, 100.00];

const precoFinal = precos2.reduce(
    (acumulador, elemento) => (acumulador + elemento),0
)
console.log(precoFinal);

const precos3 = [
    {nome: "leite", preco: 12.5},
    {nome: "amendoim", preco: 5},
    {nome: "chocolate", preco: 10}
];

const precoFinal2 = precos3.reduce(
    (acumulador, elemento) => (acumulador + elemento.preco),0
)
console.log(precoFinal2);

//Questão 16
const numeros3 = [100, 8, 25, 3, 45, 12];

const ordemCrescente = Array.from(numeros3).sort(
    (a,b) => a-b
)

const ordemDecrescente = Array.from(numeros3).sort(
    (a,b) => b-a
)

console.log(ordemCrescente);
console.log(ordemDecrescente);
//Questão 17
const fila = ["Ana", "Bruno", "Carlos", "Daniel"];
const filaInvertida = fila.reverse();

console.log(filaInvertida);
//Questão 18
const categorias = [
  ["HTML", "CSS"],
  ["JavaScript", "TypeScript"],
  ["Node.js", "Express"]
];

const listaCategorias = Array.from(categorias).flat();
console.log(listaCategorias);

const listaCategorias2 = categorias.flat(3);
console.log(listaCategorias2);
//Questão 19
const turmas = [
  { nome: "Turma A", alunos: ["Ana", "Bruno"] },
  { nome: "Turma B", alunos: ["Carlos", "Daniel", "Eva"] }
];

const ano = turmas.flatMap(turma => turma.alunos)
console.log(ano);


//Questão 20

const vendas = [
  { produto: "Notebook", categoria: "Informática", valor: 3500, quantidade: 2 },
  { produto: "Mouse", categoria: "Informática", valor: 120, quantidade: 5 },
  { produto: "Cadeira", categoria: "Móveis", valor: 900, quantidade: 3 },
  { produto: "Teclado", categoria: "Informática", valor: 250, quantidade: 4 },
  { produto: "Mesa", categoria: "Móveis", valor: 1200, quantidade: 1 }
];

const vendasFiltradas = vendas.filter(
    venda => venda.categoria === "Informática"
).map(
    venda => ({
        valorTotal: venda.valor * venda.quantidade, 
        nomeProduto: venda.produto
}));

console.log("Vendas totais:", vendasFiltradas);


const faturamentoTotal = Array.from(vendasFiltradas).reduce(
    (acumulador, venda) => acumulador + venda.valorTotal,0
)

console.log("Faturamento total:", faturamentoTotal);


const maiorFaturadorIndividual = Array.from(vendasFiltradas).sort(
    (venda1, venda2) => venda2.valorTotal-venda1.valorTotal
).slice(0, 1)

console.log("Maior faturador:", maiorFaturadorIndividual);


const nomesProdutos  = vendasFiltradas.map(
    venda => venda.nomeProduto
)

console.log("Nomes produtos:", nomesProdutos);

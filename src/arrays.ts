// src/arrays.ts
export {};
// --- Sintaxe básica ---
const numeros: number[] = [10, 20, 30, 40];
const nomes: string[] = ["Ana", "João", "Maria"];

// --- Arrays de objetos ---
type Produto = {
  id: number;
  nome: string;
  preco: number;
  categoria: string;
  emEstoque: boolean;
};

const produtos: Produto[] = [
  { id: 1, nome: "Notebook", preco: 3500, categoria: "TI", emEstoque: true },
  { id: 2, nome: "Mouse", preco: 89, categoria: "TI", emEstoque: true },
  { id: 3, nome: "Cadeira", preco: 450, categoria: "Móvel", emEstoque: false },
  { id: 4, nome: "Teclado", preco: 199, categoria: "TI", emEstoque: true },
  { id: 5, nome: "Monitor", preco: 1200, categoria: "TI", emEstoque: true }
];

// --- filter: produtos em estoque ---
const disponiveis = produtos.filter(p => p.emEstoque);
console.log("Disponíveis:", disponiveis.map(p => p.nome));

// --- map: nomes dos produtos ---
const nomesProdutos = produtos.map(p => p.nome);
console.log("Produtos:", nomesProdutos);

// --- find: buscar por ID ---
const produto = produtos.find(p => p.id === 3);
console.log("Produto 3:", produto?.nome);

// --- reduce: total do carrinho ---
const total = disponiveis.reduce((soma, p) => soma + p.preco, 0);
console.log(`Total: R$ ${total}`);

// --- some/every ---
const temCaro = produtos.some(p => p.preco > 3000);
const todosDisponiveis = disponiveis.every(p => p.emEstoque);
console.log("Tem caro?", temCaro);
console.log("Todos disponíveis?", todosDisponiveis);

// --- sort: ordenar por preço ---
const porPreco = [...produtos].sort((a, b) => a.preco - b.preco);
console.log("Por preço:", porPreco.map(p => `${p.nome}: R$ ${p.preco}`));

// --- Tuple ---
type Coordenada = [number, number];
const ponto: Coordenada = [10, 25];
console.log(`Posição: ${ponto[0]}, ${ponto[1]}`);
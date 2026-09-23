"use strict";
const listaProdutos = [
    { id: 1, nome: "Notebook", preco: 3500 },
    { id: 2, nome: "Mouse", preco: 89 },
    { id: 3, nome: "Teclado", preco: 199 },
    { id: 4, nome: "Monitor", preco: 1200 },
];
// --- break: buscar produto pelo ID ---
const idBuscado = 3;
let encontrado = null;
for (const produto of listaProdutos) {
    if (produto.id === idBuscado) {
        encontrado = produto;
        break;
    }
}
if (encontrado) {
    console.log(`Produto: ${encontrado.nome} — R$ ${encontrado.preco}`);
}
const pedidos = [
    { id: 1, cliente: "Ana", status: "pendente" },
    { id: 2, cliente: "Bob", status: "cancelado" },
    { id: 3, cliente: "Carlos", status: "processando" },
    { id: 4, cliente: "Diana", status: "cancelado" },
    { id: 5, cliente: "Eva", status: "pendente" },
];
let processados = 0;
for (const pedido of pedidos) {
    if (pedido.status === "cancelado") {
        console.log(`Pedido #${pedido.id} cancelado — pulando...`);
        continue;
    }
    processados++;
    console.log(`Processando pedido #${pedido.id} (${pedido.cliente})`);
}
console.log(`Total processados: ${processados}`);
// --- break com label: buscar em estrutura aninhada ---
const lojas = [
    ["Notebook", "Mouse"],
    ["Teclado", "Monitor"],
    ["Webcam", "Headset"],
];
const itemBuscado = "Monitor";
let encontradoLoja = false;
lojaLoop: for (let i = 0; i < lojas.length; i++) {
    for (let j = 0; j < lojas[i].length; j++) {
        if (lojas[i][j] === itemBuscado) {
            console.log(`\nEncontrado na Loja ${i + 1}, posição ${j + 1}`);
            encontradoLoja = true;
            break lojaLoop;
        }
    }
}
if (!encontradoLoja) {
    console.log("Produto não encontrado em nenhuma loja.");
}

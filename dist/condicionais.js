"use strict";
// src/condicionais.ts
// --- Exemplo 1: Sistema de Login ---
const usuarioLogado = true;
const ehAdmin = false;
if (usuarioLogado && ehAdmin) {
    console.log("Bem-vindo, administrador!");
}
else if (usuarioLogado) {
    console.log("Bem-vindo ao painel!");
}
else {
    console.log("Por favor, faça login.");
}
// --- Exemplo 2: Sistema de Notas ---
const notaFinal = 78;
if (notaFinal >= 90) {
    console.log("Aprovado com Honra!");
}
else if (notaFinal >= 70) {
    console.log("Aprovado!");
}
else if (notaFinal >= 50) {
    console.log("Recuperação.");
}
else {
    console.log("Reprovado.");
}
// --- Exemplo 3: Método de Pagamento ---
const pagamento = "pix";
switch (pagamento) {
    case "pix":
        console.log("PIX: Aprovação instantânea!");
        break;
    case "credito":
        console.log("Crédito: Parcelamento disponível.");
        break;
    case "debito":
        console.log("Débito: Pagamento à vista.");
        break;
    default:
        console.log("Método inválido.");
}

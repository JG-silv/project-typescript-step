"use strict";
// src/pedidos.ts
Object.defineProperty(exports, "__esModule", { value: true });
// --- Enums ---
var StatusPedido;
(function (StatusPedido) {
    StatusPedido["Novo"] = "NOVO";
    StatusPedido["EmPreparo"] = "EM_PREPARO";
    StatusPedido["Enviado"] = "ENVIADO";
    StatusPedido["Entregue"] = "ENTREGUE";
    StatusPedido["Cancelado"] = "CANCELADO";
})(StatusPedido || (StatusPedido = {}));
var TipoPagamento;
(function (TipoPagamento) {
    TipoPagamento["Pix"] = "PIX";
    TipoPagamento["Credito"] = "CR\u00C9DITO";
    TipoPagamento["Debito"] = "D\u00C9BITO";
})(TipoPagamento || (TipoPagamento = {}));
// --- Função com switch ---
function processarPedido(status) {
    switch (status) {
        case StatusPedido.Novo:
            console.log("Pedido registrado. Aguardando pagamento...");
            break;
        case StatusPedido.EmPreparo:
            console.log("Preparando seu pedido...");
            break;
        case StatusPedido.Enviado:
            console.log("Pedido a caminho!");
            break;
        case StatusPedido.Entregue:
            console.log("Pedido entregue com sucesso!");
            break;
        case StatusPedido.Cancelado:
            console.log("Pedido cancelado. Estorno em processamento.");
            break;
    }
}
// --- Função com if/else ---
function calcularFrete(regiao) {
    if (regiao === "sudeste") {
        return 15.0;
    }
    else if (regiao === "sul" || regiao === "centro-oeste") {
        return 22.5;
    }
    else {
        return 35.0;
    }
}
// --- Nullish coalescing ---
function aplicarDesconto(valor, cupom) {
    const desconto = cupom !== null && cupom !== void 0 ? cupom : "SEM_DESCONTO";
    console.log(`Cupom aplicado: ${desconto}`);
    return desconto !== "SEM_DESCONTO" ? valor * 0.9 : valor;
}
function exibirCliente(cliente) {
    var _a, _b;
    var _c, _d;
    const cidade = (_c = (_a = cliente.endereco) === null || _a === void 0 ? void 0 : _a.cidade) !== null && _c !== void 0 ? _c : "Não informada";
    const estado = (_d = (_b = cliente.endereco) === null || _b === void 0 ? void 0 : _b.estado) !== null && _d !== void 0 ? _d : "Não informado";
    console.log(`${cliente.nome} — ${cidade}/${estado}`);
}
// --- Execução ---
processarPedido(StatusPedido.EmPreparo);
console.log(`Frete para Sul: R$ ${calcularFrete("sul")}`);
console.log(`Preço final: R$ ${aplicarDesconto(100, null)}`);
exibirCliente({ nome: "Ana", endereco: { cidade: "SP", estado: "SP" } });
exibirCliente({ nome: "Carlos" });

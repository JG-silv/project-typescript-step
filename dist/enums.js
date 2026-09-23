"use strict";
// src/enums.ts
// --- Enum de Status de Pedido ---
var StatusPedido;
(function (StatusPedido) {
    StatusPedido["Pendente"] = "PENDENTE";
    StatusPedido["Processando"] = "PROCESSANDO";
    StatusPedido["Enviado"] = "ENVIADO";
    StatusPedido["Entregue"] = "ENTREGUE";
    StatusPedido["Cancelado"] = "CANCELADO";
})(StatusPedido || (StatusPedido = {}));
function exibirStatusPedido(status) {
    switch (status) {
        case StatusPedido.Pendente:
            console.log("Aguardando pagamento...");
            break;
        case StatusPedido.Processando:
            console.log("Preparando pedido...");
            break;
        case StatusPedido.Enviado:
            console.log("A caminho!");
            break;
        case StatusPedido.Entregue:
            console.log("Entregue com sucesso!");
            break;
        case StatusPedido.Cancelado:
            console.log("Pedido cancelado.");
            break;
    }
}
exibirStatusPedido(StatusPedido.Enviado);
// --- Enum de Nível de Acesso ---
var NivelAcesso;
(function (NivelAcesso) {
    NivelAcesso[NivelAcesso["Leitor"] = 1] = "Leitor";
    NivelAcesso[NivelAcesso["Editor"] = 2] = "Editor";
    NivelAcesso[NivelAcesso["Administrador"] = 3] = "Administrador";
})(NivelAcesso || (NivelAcesso = {}));
function verificarPermissao(nivel) {
    if (nivel >= NivelAcesso.Administrador) {
        return "Acesso total";
    }
    else if (nivel >= NivelAcesso.Editor) {
        return "Pode editar";
    }
    return "Somente leitura";
}
console.log(verificarPermissao(NivelAcesso.Editor)); // "Pode editar"
function calcularFrete(metodo) {
    switch (metodo) {
        case "sedex":
            return 25.9;
        case "pac":
            return 12.5;
        case "express":
            return 45.0;
    }
}
console.log(`Frete Sedex: R$ ${calcularFrete("sedex")}`);

// src/enums.ts

// --- Enum de Status de Pedido ---
enum StatusPedido {
  Pendente = "PENDENTE",
  Processando = "PROCESSANDO",
  Enviado = "ENVIADO",
  Entregue = "ENTREGUE",
  Cancelado = "CANCELADO"
}

function exibirStatusPedido(status: StatusPedido): void {
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
enum NivelAcesso {
  Leitor = 1,
  Editor = 2,
  Administrador = 3
}

function verificarPermissao(nivel: NivelAcesso): string {
  if (nivel >= NivelAcesso.Administrador) {
    return "Acesso total";
  } else if (nivel >= NivelAcesso.Editor) {
    return "Pode editar";
  }
  return "Somente leitura";
}

console.log(verificarPermissao(NivelAcesso.Editor)); // "Pode editar"

// --- Union Type como alternativa ---
type MetodoEnvio = "sedex" | "pac" | "express";

function calcularFrete(metodo: MetodoEnvio): number {
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
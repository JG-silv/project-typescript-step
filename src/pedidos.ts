// src/pedidos.ts

export {};

// --- Enums ---
enum StatusPedido {
  Novo = "NOVO",
  EmPreparo = "EM_PREPARO",
  Enviado = "ENVIADO",
  Entregue = "ENTREGUE",
  Cancelado = "CANCELADO"
}

enum TipoPagamento {
  Pix = "PIX",
  Credito = "CRÉDITO",
  Debito = "DÉBITO"
}

// --- Union type ---
type RegiaoEnvio = "norte" | "nordeste" | "centro-oeste" | "sudeste" | "sul";

// --- Discriminated union para resultado ---
type ResultadoPedido =
  | { ok: true; mensagem: string }
  | { ok: false; erro: string };

// --- Função com switch ---
function processarPedido(status: StatusPedido): void {
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
function calcularFrete(regiao: RegiaoEnvio): number {
  if (regiao === "sudeste") {
    return 15.0;
  } else if (regiao === "sul" || regiao === "centro-oeste") {
    return 22.5;
  } else {
    return 35.0;
  }
}

// --- Nullish coalescing ---
function aplicarDesconto(valor: number, cupom: string | null): number {
  const desconto = cupom ?? "SEM_DESCONTO";
  console.log(`Cupom aplicado: ${desconto}`);
  return desconto !== "SEM_DESCONTO" ? valor * 0.9 : valor;
}

// --- Optional chaining ---
type Cliente = {
  nome: string;
  endereco?: {
    cidade?: string;
    estado?: string;
  };
};

function exibirCliente(cliente: Cliente): void {
  const cidade = cliente.endereco?.cidade ?? "Não informada";
  const estado = cliente.endereco?.estado ?? "Não informado";
  console.log(`${cliente.nome} — ${cidade}/${estado}`);
}

// --- Execução ---
processarPedido(StatusPedido.EmPreparo);
console.log(`Frete para Sul: R$ ${calcularFrete("sul")}`);
console.log(`Preço final: R$ ${aplicarDesconto(100, null)}`);

exibirCliente({ nome: "Ana", endereco: { cidade: "SP", estado: "SP" } });
exibirCliente({ nome: "Carlos" });
// src/pedidos-lacos.ts

enum StatusPedido {
  Novo = "NOVO",
  EmPreparo = "EM_PREPARO",
  Enviado = "ENVIADO",
  Entregue = "ENTREGUE",
  Cancelado = "CANCELADO"
}

type Pedido = {
  id: number;
  cliente: string;
  status: StatusPedido;
};

const pedidos: Pedido[] = [
  { id: 1, cliente: "Ana", status: StatusPedido.Novo },
  { id: 2, cliente: "Bob", status: StatusPedido.Cancelado },
  { id: 3, cliente: "Carlos", status: StatusPedido.EmPreparo },
  { id: 4, cliente: "Diana", status: StatusPedido.Enviado },
  { id: 5, cliente: "Eva", status: StatusPedido.Cancelado },
  { id: 6, cliente: "Frank", status: StatusPedido.Entregue },
  { id: 7, cliente: "Gabriela", status: StatusPedido.Novo },
  { id: 8, cliente: "Hugo", status: StatusPedido.Enviado }
];

let novos: number = 0;
let emPreparo: number = 0;
let enviados: number = 0;
let entregues: number = 0;
let cancelados: number = 0;
let parouEmPreparo: boolean = false;

for (const pedido of pedidos) {
  // Pular cancelados
  if (pedido.status === StatusPedido.Cancelado) {
    cancelados++;
    console.log(`Pedido #${pedido.id} cancelado — pulando...`);
    continue;
  }

  // Parar ao encontrar "EmPreparo"
  if (pedido.status === StatusPedido.EmPreparo && !parouEmPreparo) {
    console.log(`\nPedido #${pedido.id} em preparo — parando busca.`);
    parouEmPreparo = true;
    // Não dá break aqui para continuar contando os outros status
  }

  switch (pedido.status) {
    case StatusPedido.Novo:
      novos++;
      break;
    case StatusPedido.EmPreparo:
      emPreparo++;
      break;
    case StatusPedido.Enviado:
      enviados++;
      break;
    case StatusPedido.Entregue:
      entregues++;
      break;
  }
}

// Relatório final
console.log("\n===== RELATÓRIO =====");
console.log(`Novos: ${novos}`);
console.log(`Em preparo: ${emPreparo}`);
console.log(`Enviados: ${enviados}`);
console.log(`Entregues: ${entregues}`);
console.log(`Cancelados: ${cancelados}`);
// src/lacos.ts

// --- Exemplo 1: for clássico — Carrinho de compras ---
const precos: number[] = [49.9, 29.9, 89.9, 15.9];
let total: number = 0;

for (let i = 0; i < precos.length; i++) {
  total += precos[i];
}

console.log(`Total do carrinho: R$ ${total.toFixed(2)}`);

// --- Exemplo 2: while — Tentativas de login ---
let tentativas: number = 0;
const maxTentativas: number = 3;
const senhaCorreta: string = "minhaSena123";
let senhaDigitada: string = "errada";

while (tentativas < maxTentativas && senhaDigitada !== senhaCorreta) {
  tentativas++;
  console.log(`Tentativa ${tentativas}: senha incorreta`);
  if (tentativas === 2) {
    senhaDigitada = "minhaSena123";
  }
}

if (senhaDigitada === senhaCorreta) {
  console.log("Login realizado com sucesso!");
} else {
  console.log("Conta bloqueada.");
}

// --- Exemplo 3: do...while — Menu de opções ---
let opcao: number;

do {
  console.log("\n===== MENU =====");
  console.log("1 - Ver saldo");
  console.log("2 - Fazer depósito");
  console.log("0 - Sair");

  opcao = Math.floor(Math.random() * 3);

  switch (opcao) {
    case 1:
      console.log("Saldo: R$ 1.250,00");
      break;
    case 2:
      console.log("Depósito realizado!");
      break;
    case 0:
      console.log("Saindo do sistema...");
      break;
  }
} while (opcao !== 0);
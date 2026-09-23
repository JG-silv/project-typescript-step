
type Conta = {
  titular: string;
  saldo: number;
};

const minhaConta: Conta = {
  titular: "Fabio",
  saldo: 3000,
};

function saque(saldoAtual: number, valorSaque: number): number {
  return saldoAtual - valorSaque;
}

const saldoFinal = saque(minhaConta.saldo, 500);

console.log(`Saldo de ${minhaConta.titular}: ${saldoFinal}`);
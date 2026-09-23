"use strict";
const minhaConta = {
    titular: "Fabio",
    saldo: 3000,
};
function saque(saldoAtual, valorSaque) {
    return saldoAtual - valorSaque;
}
const saldoFinal = saque(minhaConta.saldo, 500);
console.log(`Saldo de ${minhaConta.titular}: ${saldoFinal}`);

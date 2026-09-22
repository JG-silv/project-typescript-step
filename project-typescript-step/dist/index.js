"use strict";
const exemplo = {
    nome: "Fabio",
    saldo: 3000,
};
function deposito(saldoCliente, valorDeposito) {
    return saldoCliente + valorDeposito;
}
console.log(deposito(exemplo.saldo, 152));

"use strict";
// O código abaixo tem alguns erros e não funciona como deveria. Você pode identificar quais são e corrigi-los em um arquivo TS?
let botaoAtualizar = document.getElementById('atualizar-saldo');
let botaoLimpar = document.getElementById('limpar-saldo');
let soma = document.getElementById('soma');
let campoSaldo = document.getElementById('campo-saldo');
if (typeof campoSaldo === 'string') {
    Number(campoSaldo);
}
if (typeof soma === 'string') {
    Number(soma);
}
let saldoTotal = Number(campoSaldo);
let proximaSoma = Number(soma);
function somarAoSaldo(soma) {
    saldoTotal += soma;
}
function limparSaldo(saldoTotal) {
    saldoTotal = 0;
}
if (botaoAtualizar) {
    botaoAtualizar.addEventListener('click', function () {
        somarAoSaldo(proximaSoma);
    });
}
if (botaoLimpar) {
    botaoLimpar.addEventListener('click', function () {
        limparSaldo(saldoTotal);
    });
}
/**
    <h4>Valor a ser adicionado: <input id="soma"> </h4>
    <button id="atualizar-saldo">Atualizar saldo</button>
    <button id="limpar-saldo">Limpar seu saldo</button>
    <h1>"Seu saldo é: " <span id="campo-saldo"></span></h1>
 */ 

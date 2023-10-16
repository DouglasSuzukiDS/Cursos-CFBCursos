"use strict";
// Curso de Typescript Completo #P13 Aprendendo sobre Funções em Typescript #P2
function soma(n1 = 0, n2 = 0) {
    return n1 + n2;
}
console.log(soma(5));
function novoUser(user, pass, nome) {
    // console.log(`User: ${user}`)
    // console.log(`Pass: ${pass}`)
    // console.log(`Nome: ${nome}`)
    let dados = { user, pass, nome };
    console.log(dados);
}
novoUser('Nick', '123');

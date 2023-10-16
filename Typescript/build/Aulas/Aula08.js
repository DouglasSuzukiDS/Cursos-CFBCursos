"use strict";
let dados = {
    nome: 'Shanks',
    idade: 25,
    status: 'A',
    ola: () => console.log('Oi'),
    info: (p) => console.log(p)
};
dados.nome = 'Luffy';
console.log(typeof dados);
console.log(dados);
console.log(dados.nome);
dados.ola();
dados.info('Hito Hito no Mi');
dados.info(dados.nome);

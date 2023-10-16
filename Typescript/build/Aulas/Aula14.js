"use strict";
// Curso de Typescript Completo #P14 Arrow Function ou Função de Seta em Typescript. Função Anônima
/*teste() => O JS 'manda' tudo que e function pro começo da aplicação
function teste1(): void {
   console.log('Teste')
}*/
const teste2 = (txt) => {
    console.log(txt);
};
teste2('CFB Cursos');
teste2('Curso de  Typescript');
teste2('Youtube');
teste2();
const fsoma = (n1, n2) => {
    return n1 + n2;
};
console.log(fsoma(90, 10));
const fsoma2 = (n) => {
    let s = 0;
    n.forEach((e) => {
        s += e;
    });
    return s;
};
let numer = [10, 20, 30, 40];
console.log(fsoma2(numer));

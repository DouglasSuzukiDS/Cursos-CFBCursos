"use strict";
class Curso {
    canal = null;
    curso = null;
    constructor(canal, curso) {
        this.canal = canal;
        this.curso = curso;
    }
}
let c1 = new Curso('CFB Cursos', 'Typescript');
console.log(c1.canal);
console.log(c1.curso);
// tsc aula03.ts --target "ES2016" => Utilzia a versão do JS espcificada
// tsc aula03.ts --target "ESNEXT" => Utilzia a versão do JS mais recente
// tsc --init => Gera o arquivo de configuração pro TS
// tsc => Caso contenha mais arquivos TS na pasta src ele compila todos de uma vez e coloca na pasta build 
// Necessário especificar no arquivo de configuração

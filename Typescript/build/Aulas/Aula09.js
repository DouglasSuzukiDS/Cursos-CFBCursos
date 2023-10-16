"use strict";
var dias;
(function (dias) {
    dias[dias["domingo"] = 0] = "domingo";
    dias[dias["segunda"] = 1] = "segunda";
    dias[dias["terca"] = 2] = "terca";
    dias[dias["quarta"] = 3] = "quarta";
    dias[dias["quinta"] = 4] = "quinta";
    dias[dias["sexta"] = 5] = "sexta";
    dias[dias["sabado"] = 6] = "sabado";
})(dias || (dias = {}));
// console.log(dias.domingo) // 1
// console.log(dias['domingo']) // 1
// console.log(dias[1]) // segunda
const d = new Date();
// console.log(d.getDate())
// console.log(dias[d.getDay()]) 
var cores;
(function (cores) {
    cores["branco"] = "#FFF";
    cores["preto"] = "#000";
    cores["vermelho"] = "#F00";
    cores["verde"] = "#0F0";
    cores["azul"] = "#00F";
})(cores || (cores = {}));
console.log(cores.branco); // #FFF
console.log(cores['branco']); // #FFF
var tipoUsuario;
(function (tipoUsuario) {
    tipoUsuario[tipoUsuario["USER"] = 10] = "USER";
    tipoUsuario[tipoUsuario["ADMIN"] = 100] = "ADMIN";
    tipoUsuario[tipoUsuario["SUPER"] = 1000] = "SUPER";
})(tipoUsuario || (tipoUsuario = {}));
console.log(tipoUsuario.SUPER); // 1000
const tp = tipoUsuario.SUPER;
console.log(tp);

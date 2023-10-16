var Granadas=["Flashbang x5", "Granada x5", "Smoke x5", "Flashbang Fênix Dourada x5", "Granada Fênix Dourada x5", "Smoke Fênix Dourada", "Fumaça Prata", "Granada Neve x5", "Granada Docinho x2", "Granada Sabão x3"];

Granadas.sort(); //Ordena o Array

var qtdGranadas=Granadas.length; //Tamanho do Array
var nGranadas ="Granadas Disponíveis no Arsenal: "+qtdGranadas;

//document.write(qtdGranadas"<br>"+nGranadas;
var mostraTR=document.getElementById('Titulo').innerHTML=nGranadas;
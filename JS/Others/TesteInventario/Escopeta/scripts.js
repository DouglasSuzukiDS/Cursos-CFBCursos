var Escopetas=["Jack Hammer DDB", "AA-12", "Remington 870-Knife", "M37 Stakout-Chamas", "KSG-15 Dragão Azul", "687 EELL Diamond", "Dual Desperados", "Spas-12", "Remington 870", "KSG-15", "Serbu-Cano Serrado", "XM1014", "REM 870P Breachers", "500 Chainsaw"];

Escopetas.sort(); //Ordena o Array

var qtdEscopetas=Escopetas.length; //Tamanho do Array
var nEscopetas ="Escopetas Disponíveis no Arsenal: "+qtdEscopetas;

//document.write(qtdEscopetas"<br>"+nEscopetas;
var mostraTR=document.getElementById('Titulo').innerHTML=nEscopetas;
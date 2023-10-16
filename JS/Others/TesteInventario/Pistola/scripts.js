var Pistolas=["Desert Eagle Prata", "Búfalo", "COP 357 Derringer x2", "Anaconda Red Dragon x2", "Desert Eagle Tiger", "Desert Eagle SD", "Desert Eagle", "Desert Eagle Escopeta", "Desert Eagle Camo x2", "Python", "PMR-30 Camo", "Ots-23 Drotik", "Anaconda", "S&W M66", "Mateba", "MK.23", "Colt 1911", "PMR-30", "P228", "USP", "Beretta M9", "Glock-18", "Dual Colt Grafite", "3.8tinho", "Desert Eagle - Guarda Real"];

Pistolas.sort(); //Ordena o Array

var qtdPistolas=Pistolas.length; //Tamanho do Array
var nPistolas ="Pistolas Disponíveis no Arsenal: "+qtdPistolas;

//document.write(qtdPistolas"<br>"+nPistolas;
var mostraTR=document.getElementById('Titulo').innerHTML=nPistolas;
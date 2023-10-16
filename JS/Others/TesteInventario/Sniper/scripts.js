var Snipers=["AWM-Magma x2", "APR 338", "AWM-Zebra", "AWM-Caçador", "AWM-Crimson", "AWM-Ferrugem", "FR-F2 Ferrugem", "HK G28", "PSG-2", "SL8", "M700", "Steyr Elite", "SR99", "DSR-1", "Falcon OP99", "R93T2", "TRG-21", "WA2000", "Dragunov", "AWM", "AR-50 A1", "Walther G22", "M98B", "AWM-Cano Longo2", "Savage 110BA-Azul"];

Snipers.sort(); //Ordena o Array

var qtdSnipers=Snipers.length; //Tamanho do Array
var nSnipers="Snipers Disponíveis no Arsenal: "+qtdSnipers;

//document.write(qtdRifles+"<br>"+nRifles);
var mostraTR=document.getElementById('Titulo').innerHTML=nSnipers;
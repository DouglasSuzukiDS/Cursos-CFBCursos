var Rifles=["M4A1 Dragão Vitoriosa", "AK Bustar Platium", "AK47-k-Guarda Real", "M4A1 Aurum", "M4A1-XS Jade", "AK47-Super Ouro", "AN94-Arnuvo", "M4A1 Custom BR x2", "M4A1 Soberana", "M4A1 Camo x2", "M4A1 Violet Crystal", "SG552-Camo", "QBZ-95 Camo", "M4A1 Crimson x2", "SAR-21 Reptiliano", "AN94", "M4A1 Miau", "DBR-Cobra", "AK47 Camo x2", "M4A1-X Camo Azul", "Winchester", "XM8", "G36K", "Type 89", "M16", "Ash-12.7", "M16A2", "M4A1", "PindadSS2", "Steyr AUG A3", "Famas", "MK18 Mod 0", "Steyer AUG A1", "RX4 Storm", "Tantal W2 88", "9A-91", "HK G36L", "G3A3", "AK47", "CM 901", "Type56", "Scar Heavy", "L85A1", "SAR-21", "Zastava M21", "Berettaa AR-70", "QBZ-95", "Scar Light", "Scar Light Silver Smith", "STG 44", "SG540", "SG552", "MSBS-5.56", "AK74", "M4A1 Kevin", "AK47 BR", "LAPA FA 03", "CR 300ML x2", "KAC PDW", "AK5C", "Scar Light Ouro", "M4A1 Laser Ouro","AK47-K-SB"];

Rifles.sort(); //Ordena o Array

var qtdRifles=Rifles.length; //Tamanho do Array
var nRifles="Rifles Disponíveis no Arsenal: "+qtdRifles;

//document.write(qtdRifles+"<br>"+nRifles);
var mostraTR=document.getElementById('Titulo').innerHTML=nRifles;
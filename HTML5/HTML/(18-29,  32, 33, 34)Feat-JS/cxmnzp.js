var CaixasMNZP=[];

	var cx01=["AK47 Red Dragon ==> ", 50],     cx02=["AK-12-S ==> ", 9],     cx03=["AK47 Mania ==> ", 20],     cx04=["Adaga Laser ==> ", 6],
		cx05=["Arnuvo ==> ", 50],     cx06=["Azul ==> ", 30],     cx07=["Barragem ==> ", 30],     cx08=["Black Dragon ==> ", 35],
		cx09=["Camo ==> ", 20],     cx10=["Camo 2 ==> ", 40],     cx11=["Camo Tática ==> ", 25],     cx12=["Coleção Fênix Dourada ==> ", 10],
		cx13=["Cutelaria ==> ", 18],     cx14=["Desert-Eagle Camo ==> ", 95],     cx15=["Dia de Festa ==> ", 20],     cx16=["Especial 2.0 ==> ", 45],
		cx17=["Espoleta ==> ", 20],     cx18=["Evento da Amizade ==> ", 20],     cx19=["Event Especial CF ==> ", 20],     cx20=["HexCamo ==> ", 60],
		cx21=["Imperial ==> ", 12],     cx22=["Indepedência ==> ", 120],     cx23=["Jade 1 ==> ", 130],     cx24=["Jade 2 ==> ", 30],
		cx25=["Jasmine 2 ==> ", 25],     cx26=["KAC ChainSaw ==> ", 35],     cx27=["Machado Phoenix ==> ", 64],     cx28=["Magma ==> ", 10],
		cx29=["Modo Zumbi ==> ", 77],     cx30=["Nevasca ==> ", 5],     cx31=["Ouro Cintilante ==> ", 31],     cx32=["Ouro 3 ==> ", 5],
		cx33=["Ouro Negro ==> ", 37],     cx34=["Rabisco ==> ", 6],     cx35=["Rosa Choque ==> ", 30],     cx36=["Selva ==> ", 21],
		cx37=["Tigre 1 ==> ", 30],     cx38=["Tigre 2 ==> ", 30],     cx39=["Tijolo ==> ", 6],     cx40=["Touro ==> ", 30],
		cx41=["Tática ==> ", 45],     cx42=["Ultimate Gold ==> ", 5],     cx43=["Ultimate Gold 2 ==> ", 60],     cx44=["Ultimate Silver ==> ", 40],
		cx45=["Urban Camo ==> ", 5],     cx46=["Verde ==> ", 49],     cx47=["Zéfiro ==> ", 55],     cx48=["Galera ==> ", 44],
		cx49=["Time ==> ", 20],     cx50=["Desert-Eagle SD ==> ", 20],     cx51=["FR-F2 Ferrugem ==> ", 44],     cx52=["Fênix ==> ", 40],
		cx53=["M14EBR ==> ", 10],     cx54=["M200 CheyTac ==> ", 15],     cx55=["Mauser M1896 ==> ", 10],     cx56=["Metal Líquido ==> ", 25],
		cx57=["Pacote Ártico ==> ", 30],     cx58=["Red Spray ==> ", 40],     cx59=["Scar Lighr Ouro ==> ", 60],     cx60=["Soco Inglês"+" ==>  ", 21];
		//cx29=["", ],     cx30=["", ],     cx31=["", ],     cx32=["", ];

	

		CaixasMNZP.push(cx01);    CaixasMNZP.push(cx02);    CaixasMNZP.push(cx03);    CaixasMNZP.push(cx04);
		CaixasMNZP.push(cx05);    CaixasMNZP.push(cx06);    CaixasMNZP.push(cx07);    CaixasMNZP.push(cx08);
		CaixasMNZP.push(cx09);    CaixasMNZP.push(cx10);    CaixasMNZP.push(cx11);    CaixasMNZP.push(cx12);
		CaixasMNZP.push(cx13);    CaixasMNZP.push(cx14);    CaixasMNZP.push(cx15);    CaixasMNZP.push(cx16);
		CaixasMNZP.push(cx17);    CaixasMNZP.push(cx18);    CaixasMNZP.push(cx19);    CaixasMNZP.push(cx20);
		CaixasMNZP.push(cx21);    CaixasMNZP.push(cx22);    CaixasMNZP.push(cx23);    CaixasMNZP.push(cx24);
		CaixasMNZP.push(cx25);    CaixasMNZP.push(cx26);    CaixasMNZP.push(cx27);    CaixasMNZP.push(cx28);
		CaixasMNZP.push(cx29);    CaixasMNZP.push(cx30);    CaixasMNZP.push(cx31);    CaixasMNZP.push(cx32);
		CaixasMNZP.push(cx33);    CaixasMNZP.push(cx34);    CaixasMNZP.push(cx35);    CaixasMNZP.push(cx36);
		CaixasMNZP.push(cx37);    CaixasMNZP.push(cx38);    CaixasMNZP.push(cx39);    CaixasMNZP.push(cx40);
		CaixasMNZP.push(cx41);    CaixasMNZP.push(cx42);    CaixasMNZP.push(cx43);    CaixasMNZP.push(cx44);
		CaixasMNZP.push(cx45);    CaixasMNZP.push(cx46);    CaixasMNZP.push(cx47);    CaixasMNZP.push(cx48);
		CaixasMNZP.push(cx49);    CaixasMNZP.push(cx50);    CaixasMNZP.push(cx51);    CaixasMNZP.push(cx52);
		CaixasMNZP.push(cx53);    CaixasMNZP.push(cx54);    CaixasMNZP.push(cx55);    CaixasMNZP.push(cx56);
		CaixasMNZP.push(cx57);    CaixasMNZP.push(cx58);    CaixasMNZP.push(cx59);    CaixasMNZP.push(cx60);
		//CaixasMNZP.push(cx1);    CaixasMNZP.push(cx3);    CaixasMNZP.push(cx3);    CaixasMNZP.push(cx3);

		CaixasMNZP.sort();

		//document.write(CaixasMNZP.length);
	function mtMNZP(){
			for(i=0; i<60; i++){
			document.write(CaixasMNZP[i]+"<br>"+"<hr>");
		}
	}
<body>
	<button id="btMNZP" onclick="mtMNZP()">Caixas MN-ZP</button>
</body>

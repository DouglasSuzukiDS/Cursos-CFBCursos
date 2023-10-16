// (117) Casos em Que o Ponto e Virgula e Obrigatorio em JS - Parte 01

let i = null
for(i = 0; i < 10; i++) {
   console.log(i)
}

for(i = 0; i < 10; i++); // Aqui o For não tem scopo
console.log(i)
// (80) Aprendendo sobre a Biblioteca Math - Parte 01

const mat = document.getElementById('mat')

const num = Math.random() * 10 // Gera um numero de 0 - 9 
//mat.innerHTML = Math.floor(num) // Arredonda pra baixo
//mat.innerHTML = Math.round(num) // Arredonda pra cima
//mat.innerHTML = Math.sqrt(16) // Raiz Quadrada
//mat.innerHTML = Math.pow(10, 2) // Potencia(Base, Expoente)
mat.innerHTML = Math.floor(Math.random() * 10) + 1  // Assim gera de 0 - 10
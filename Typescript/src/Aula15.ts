// (15) Curso de Typescript Completo #P15 Aprendendo sobre parâmetros REST com SPREAD em Typescript
function fsoma3(...n: number[]) {
   let s: number = 0

   // n.forEach((n) =>  {
   //    s += n
   // })

   for(let num of n) {
      s += num
   }

   return s
}

console.log(fsoma3(10, 20, 30))
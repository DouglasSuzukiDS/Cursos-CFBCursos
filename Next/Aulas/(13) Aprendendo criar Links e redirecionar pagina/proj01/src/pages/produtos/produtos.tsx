import { Card } from "@/components/Card"
import { Topo } from "@/components/Topo"

export default function produtosPagina() {
   const produtos = [
      {
         produto: 'Mouse',
         valor: 49.9,
         desconto: 0,
         disponivel: true
      },

      {
         produto: 'Teclado',
         valor: 69.9,
         desconto: 10,
         disponivel: true
      },

      {
         produto: 'Monitor',
         valor: 659.9,
         desconto: 0,
         disponivel: true
      },

      {
         produto: 'CPU',
         valor: 829.9,
         desconto: 100,
         disponivel: true
      },

      {
         produto: 'Cx.Som',
         valor: 39.9,
         desconto: 0,
         disponivel: true
      },

      {
         produto: 'Microfone',
         valor: 65.0,
         desconto: 0,
         disponivel: true
      },
   ]

   function calcDesc(v: number, d: number) {
      return v - d
   }

   function calcDesc2(v: number, d: number) {
      return v - (d / 2)
   }

   return (
      <>
         <Topo />
         <div className='flex justify-center gap-3'>
            {
               produtos.map((e: any) => {
                  if (e.disponivel) {
                     return (
                        <Card
                           produto={e.produto}
                           valor={e.valor}
                           desconto={e.desconto}
                           funcao={calcDesc} />
                     )
                  }
               })
            }
         </div>
      </>
   )
}
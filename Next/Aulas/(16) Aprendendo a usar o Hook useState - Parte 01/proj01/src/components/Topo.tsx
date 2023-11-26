import Link from "next/link"
import { useRouter } from "next/router"

export const Topo = () => {
   const router = useRouter()
   
   return (
      <div className='flex flex-col justify-between items-center bg-zinc-300 h-[130px]'>
         <div>Logo</div>

         <div className='flex flex-col justify-center items-center'>
            <div className='text-3xl'>CFB Cursos</div>
            <div className='subtitulo'>Curso de Next</div>
         </div>

         <nav className="flex gap-5">
            <Link href={'/'}>
               Home
            </Link>

            <Link href={
               {
                  pathname: '/produtos/produtos',
                  query: { nome: 'Nick', curso: 'React/Next' }
               }
            }>
               Produtos
            </Link>

            <Link href={'/teste/teste'}>
               Teste
            </Link>

            <Link href={'/useState/useState'}>
               State
            </Link>
         </nav>
      </div>
   )
}
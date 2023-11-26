import Link from "next/link"

export const Topo = () => {
   return (
      <div className='flex flex-col justify-between items-center bg-zinc-300 h-[130px]'>
         <div>Logo</div>

         <div className='flex flex-col justify-center items-center'>
            <div className='text-3xl'>CFB Cursos</div>
            <div className='subtitulo'>Curso de Next</div>
         </div>

         <nav>
            <Link href={'/'}>
               Home
            </Link>

            <Link href={'/produtos/produtos'}>
               Produtos
            </Link>

            <Link href={'/teste/teste'}>
               Teste
            </Link>
         </nav>
      </div>
   )
}
import Image from 'next/image'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const nome = 'Nick'
  let canal = 'CFB Cursos'

  function retNome() {
    return nome
  }

  const cn = () =>{
    return canal
  }

  function Topo() {
    return (
      <div className='flex justify-between items-center bg-zinc-300 h-[100px]'>
        <div>Logo</div>
        <div className='flex flex-col justify-center items-center'>
          <div className='text-3xl'>{ canal }</div>
          <div className='subtitulo'>Curso de Next</div>
        </div>
        <div>{ nome }</div>
      </div>
    )
  }

  return (
    <div>
      {/* { Topo() } */}
      <Topo />
      <div>Curso de React/Next</div>
      <div>Typescript</div>
      <div>React</div>
    </div>
  )
}

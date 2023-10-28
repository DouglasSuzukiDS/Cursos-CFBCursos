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
      <div>
        <div>Logo</div>
        <div>{ canal }</div>
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

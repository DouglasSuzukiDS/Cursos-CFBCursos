import Image from 'next/image'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const nome = 'Nick'
  let canal = 'CFB Cursos'

  function retNome() {
    return nome
  }

  return (
    <main>
      {/* <div>{ nome }</div> */}
      <div>{ retNome() }</div>
      <div>{ canal }</div>
      <div>Curso de React/Next</div>
      <div>Typescript</div>
      <div>React</div>
    </main>
  )
}

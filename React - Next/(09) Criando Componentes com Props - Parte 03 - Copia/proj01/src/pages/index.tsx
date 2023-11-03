import Image from 'next/image'
import { Inter } from 'next/font/google'
import React from 'react'
import { Topo } from '@/components/Topo'
import { Card } from '@/components/Card'

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

  return (
    <div>
      {/* { Topo() } */}
      <Topo />

      <div style={ testeCSS }>
        <div>Curso de React/Next</div>
        <div>Typescript</div>
        <div style={{ color: '#00F', backgroundColor: '#BBB' }}>React</div>
      </div>

      <div className='flex justify-center gap-3'>
        <Card produto={'Mouse'} valor={49.90} desconto={10} />
        <Card produto={'Teclado'} valor={69.90} desconto={2} />
        <Card produto={'Monitor'} valor={459.90} desconto={0} />
        <Card produto={'CPU'} valor={759.90} desconto={50} />
      </div>
    </div>
  )
}

const testeCSS: React.CSSProperties = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  // flexDirection: 'column',
  color: '#00ffff',
  backgroundColor: '#EEE',
  fontSize: '20px'
}
import Image from 'next/image'
import { Inter } from 'next/font/google'
import React from 'react'
import { Topo } from '@/components/Topo'

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
    </div>
  )
}

const testeCSS: React.CSSProperties = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
  color: '#00F',
  backgroundColor: '#EEE',
  fontSize: '20px'
}
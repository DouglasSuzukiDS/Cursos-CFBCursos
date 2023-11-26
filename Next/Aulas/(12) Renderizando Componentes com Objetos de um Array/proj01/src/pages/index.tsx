import Image from 'next/image'
import { Inter } from 'next/font/google'
import React from 'react'
import { Topo } from '@/components/Topo'
import { Card } from '@/components/Card'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const nome = 'Nick'
  let canal = 'CFB Cursos'

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
    <div>
      {/* { Topo() } */}
      <Topo />

      <div style={ testeCSS }>
        <div>Curso de React/Next</div>
        <div>Typescript</div>
        <div style={{ color: '#00F', backgroundColor: '#BBB' }}>React</div>
      </div>

      <div className='flex justify-center gap-3'>
        {
          produtos.map((e: any) => {
            if(e.disponivel) {
              return (
                <Card 
                  produto={ e.produto } 
                  valor={ e.valor } 
                  desconto={ e.desconto } 
                  funcao={ calcDesc } />
              )
            }
          })
        }
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
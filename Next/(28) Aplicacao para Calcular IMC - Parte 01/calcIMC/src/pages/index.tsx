import { Inter } from 'next/font/google'
import CalcIMC from './calcIMC/CalcIMC'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className='flex justify-start items-start w-full h-screen'>
      <CalcIMC />
    </div>
  )
}

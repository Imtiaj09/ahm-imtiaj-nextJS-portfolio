import Image from 'next/image'
import HeroPortfolio from './components/HeroPortfolio'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
     <div className='container mx-auto px-12 py-4'>
        <HeroPortfolio/>
     </div>
    </main>
  )
}

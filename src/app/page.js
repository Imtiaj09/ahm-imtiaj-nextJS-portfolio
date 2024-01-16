import Image from 'next/image'
import HeroPortfolio from './components/HeroPortfolio'
import Navbar from './components/Navbar'
import AboutProtfolio from './components/AboutProtfolio'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
      <Navbar/>
     <div className='container mt-24 mx-auto px-12 py-4'>
        <HeroPortfolio/>
        <AboutProtfolio/>
     </div>
    </main>
  )
}

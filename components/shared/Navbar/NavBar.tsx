import Link from 'next/link'
import Image from 'next/image'
import NavItems from './NavItems'
import MobileNav from './MobileNav'
import { Anton } from 'next/font/google'

const anton = Anton({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-anton'
})

export default function Navbar() {
  return (
    <nav className='w-full border fixed top-0 z-50 py-2 text-black bg-white'>
      <div className='_flex-between mx-auto w-full max-w-screen-xl px-6 xs:px-8 sm:px-16'>
        <Link href='/' className={`anton-font text-2xl md:text-5xl ${anton.className}`}> Rejouir </Link>
        <div className="hidden md:block">
          <NavItems />
        </div>
        
        <MobileNav />
      </div>
    </nav>
  )
}
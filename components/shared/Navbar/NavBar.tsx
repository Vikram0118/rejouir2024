import Link from 'next/link'
import Image from 'next/image'
import NavItems from './NavItems'
import MobileNav from './MobileNav'
import { SignedIn, SignedOut, UserButton } from '@clerk/nextjs'

export default function Navbar() {
  return (
    <nav className="w-full border fixed top-0 z-50 py-2 text-black bg-white">
      <div className="_flex-between mx-auto w-full max-w-screen-2xl px-6 xs:px-8 sm:px-16">
        <Link href="/" className={`text-xl md:text-3xl`}>
          {' '}
          Rejouir{' '}
        </Link>
        <div className="hidden md:flex flex-row gap-3">
          <NavItems />
        </div>

        <SignedIn>
          <UserButton afterSignOutUrl="/" />
        </SignedIn>

        <SignedOut>
          <button className="px-4 py-2  text-white bg-black">
            <Link href="/sign-in">Login Here</Link>
          </button>
        </SignedOut>

        <MobileNav />
      </div>
    </nav>
  )
}

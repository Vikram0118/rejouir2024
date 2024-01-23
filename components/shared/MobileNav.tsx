import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet"
  import Image from "next/image"
  import { Separator } from "../ui/separator"
  import NavItems from "./NavItems"
  import { socialLinks } from "@/constants"
  import React from "react"
  import Link from "next/link"
  
  
  export default function MobileNav() {
    return (
      <nav className="md:hidden">
        <Sheet>
          <SheetTrigger className="align-middle">
            <Image 
              src="/assets/icons/menu.svg"
              alt="menu"
              width={24}
              height={24}
              className="cursor-pointer"
            />
          </SheetTrigger>
          <SheetContent className="flex flex-col gap-4 bg-white md:hidden">
          <Link href='/' className='anton-font text-4xl'> VP. </Link>
            <Separator className="border border-gray-400" />
            <ul className="flex flex-col gap-3 w-full mt-1">
              {socialLinks.map((link, index) => {
                return (
                  <li key={link.link} className="my-1">
                      <Link href={link.link} className='heading1 flex flex-row items-center gap-1'>
                        <Image 
                          src= {`${link.icon}`}
                          width={30}
                          height={30}
                          quality={100}
                          priority={true}
                          alt='react'
                        />
                        {link.label}
                      </Link>
                  </li>
                )
              })}
            </ul>
          </SheetContent>
        </Sheet>
      </nav>
    )
  }
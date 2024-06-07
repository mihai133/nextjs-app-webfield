import { Menu, RepeatIcon } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Logo from '../../assets/ThewebfieldSVG.svg'
import { Button, buttonVariants } from '@/components/ui/button'
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet'

export default function Header() {
  return (
    <header className="sticky top-0 flex h-20 items-center gap-4 border-b bg-background px-4 md:px-6">
      <nav className="grid grid-flow-col auto-cols-max flex-col gap-6 justify-between  w-[100%]">
        <Link
          href="/"
          className="flex items-center gap-2 text-lg font-semibold md:text-base"
        >
          <Image src={Logo} alt="The Webfield" width={150} />
        </Link>

        <div className="flex align-center justify-between gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
          <div className='hidden md:flex'>


            <ul className="items-center gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
              <li>
                <Link
                  href="/"
                  className="flex items-center gap-2 text-lg font-semibold md:text-base"
                >
                  Home
                </Link>
              </li>

            </ul>

            <div className="flex items-center gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
              <Link className={buttonVariants({ variant: "link" })} href="/login" >
                Login
              </Link>
              <Link href="/signup" className={buttonVariants({ variant: "link" })}>
                Sign up
              </Link>
            </div>
          </div>
          <Sheet>
            <SheetTrigger className='md:hidden'>
              <Menu className="h-5 w-5" />
            </SheetTrigger>
            <SheetContent className="py-[100px]">
              <SheetHeader>
                {/* <SheetTitle>Menu</SheetTitle> */}

              </SheetHeader>
              <ul className="items-center text-lg font-medium flex-col md:items-center md:gap-5 md:text-sm lg:gap-6 justify-between h-full">
                <li>
                  <Link
                    href="/"
                    className="flex items-center gap-2 text-lg md:text-base"
                  >
                    Home
                  </Link>
                </li>

              </ul>

              <div className="flex items-start text-lg font-medium flex-row md:items-center">
                <Link className={buttonVariants({ variant: "link" })} href="/login" >
                  Login
                </Link>
                <Link href="/signup" className={buttonVariants({ variant: "link" })}>
                  Sign up
                </Link>
              </div>
            </SheetContent>
          </Sheet>
        </div>


      </nav>
    </header>
  )
}

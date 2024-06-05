import { RepeatIcon } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import * as Logo from '../assets/ThewebfieldSVG.svg'
import { buttonVariants } from '@/components/ui/button'

export default function Header() {
  return (
    <header className="sticky top-0 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6">
      <nav className=" flex-col gap-6 justify-between text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6 w-[100%]">
        <Link
          href="/"
          className="flex items-center gap-2 text-lg font-semibold md:text-base"
        >
          <Image src={Logo} alt="The Webfield" width={150} />
        </Link>
        <div className="flex  justify-between gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
          <ul className="flex items-center gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
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
      </nav>
    </header>
  )
}

import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Logo from '../../assets/ThewebfieldSVG.svg'

export default function DesktopMenu() {
  return (
    <nav className="hidden flex-col gap-6 text-lg font-medium lg:flex lg:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
      <Link
        href="/"
        className="desktop-logo w-[150px] items-center gap-2 text-lg font-semibold md:text-base"
      >
        <Image src={Logo} alt="The Webfield" width={400} />
      </Link>
      <Link
        href="/dashboard"
        className="text-foreground transition-colors hover:text-foreground"
      >
        Dashboard
      </Link>
      <Link
        href="#"
        className="text-muted-foreground transition-colors hover:text-foreground"
      >
        Orders
      </Link>
      <Link
        href="#"
        className="text-muted-foreground transition-colors hover:text-foreground"
      >
        Products
      </Link>
      <Link
        href="#"
        className="text-muted-foreground transition-colors hover:text-foreground"
      >
        Customers
      </Link>
      <Link
        href="#"
        className="text-muted-foreground transition-colors hover:text-foreground"
      >
        Analytics
      </Link>
    </nav>
  )
}

import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { Menu, Package2 } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import Logo from "@/app/assets/ThewebfieldSVG.svg"
import React from 'react'

export default function MobileMenu() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          variant="outline"
          size="icon"
          className="shrink-0 lg:hidden"
        >
          <Menu className="h-5 w-5" />
          <span className="sr-only">Toggle navigation menu</span>
        </Button>
      </SheetTrigger>
      <Link
        href="/"
        className="flex lg:hidden w-[150px] items-center gap-2 text-lg font-semibold md:text-base"
      >
        <Image src={Logo} alt="The Webfield" width={400} />
      </Link>
      <SheetContent side="left">
        <nav className="grid gap-6 text-lg font-medium">
          <Link
            href="/"
            className="flex lg:hidden w-[120px] items-center gap-2 text-lg font-semibold md:text-base"
          >
            <Image src={Logo} alt="The Webfield" width={300} />
          </Link>
          <Link href="#" className="hover:text-foreground">
            Dashboard
          </Link>
          <Link
            href="#"
            className="text-muted-foreground hover:text-foreground"
          >
            Orders
          </Link>
          <Link
            href="#"
            className="text-muted-foreground hover:text-foreground"
          >
            Products
          </Link>
          <Link
            href="#"
            className="text-muted-foreground hover:text-foreground"
          >
            Customers
          </Link>
          <Link
            href="#"
            className="text-muted-foreground hover:text-foreground"
          >
            Analytics
          </Link>
        </nav>
      </SheetContent>
    </Sheet>
  )
}

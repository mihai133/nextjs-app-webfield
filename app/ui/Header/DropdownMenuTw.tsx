

import React from 'react'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
import { Button, buttonVariants } from '@/components/ui/button'
import { CircleUser } from 'lucide-react'
import Link from 'next/link'
import { auth, signOut } from '@/auth'

export default async function DropdownMenuTw() {
  const session = await auth()
  const user = session?.user
  console.log(session)

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="secondary" size="icon" className="rounded-full">
          <CircleUser className="h-5 w-5" />
          <span className="sr-only">Toggle user menu</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>Settings</DropdownMenuItem>
        <DropdownMenuItem>Support</DropdownMenuItem>
        <DropdownMenuSeparator />
        {!user ?
          (
            <><Link className={` ${buttonVariants({ variant: "ghost" })}`} href="/login" >
              Login
            </Link>
              <Link href="/signup" className={buttonVariants({ variant: "ghost" })}>

                Sign up

              </Link>
            </>
          )
          : (
            // <Link className={` ${buttonVariants({ variant: "ghost" })}`} href="/login" >
            //   signout
            // </Link>
            <form action={async () => {
              'use server'

              await signOut({ redirectTo: '/login', redirect: true });
            }}>

              <Button type='submit' variant={"ghost"}>
                Sign out
              </Button>
            </form>
          )
        }


        <div className="flex items-start text-lg font-medium flex-row md:items-center">


        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

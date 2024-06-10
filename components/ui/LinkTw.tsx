'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

export default function LinkTw({
  href,
  children
}: Readonly<{
  href: string,
  children: React.ReactNode
}>) {
  const pathName = usePathname();
  return <Link
  className={`${pathName === href ? "text-foreground" : "text-muted-foreground"} transition-colors hover:text-foreground`}
  href={href}>
    {children}
  </Link>
}
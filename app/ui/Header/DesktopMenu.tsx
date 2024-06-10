import Image from 'next/image'
import Link from 'next/link'
import Logo from '../../assets/ThewebfieldSVG.svg'
import LinkTw from '@/components/ui/LinkTw'

export default function DesktopMenu() {
  return (
    <nav className="hidden flex-col gap-6 text-lg font-medium lg:flex lg:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
      <Link
        href="/"
        className="desktop-logo w-[150px] items-center gap-2 text-lg font-semibold md:text-base"
      >
        <Image src={Logo} alt="The Webfield" width={400} />
      </Link>
      <LinkTw href='/dashboard'>
        Dashboard
      </LinkTw>
      <LinkTw href='#'>
        Orders
      </LinkTw>
      <LinkTw href='#'>
        Products
      </LinkTw>
      <LinkTw href='#'>
        Customers
      </LinkTw>
      <LinkTw href='#'>
        Analytics
      </LinkTw>


    </nav>
  )
}

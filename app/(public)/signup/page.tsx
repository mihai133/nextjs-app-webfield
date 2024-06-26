import SignupForm from "@/components/User/signup-form"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Image from "next/image"
import Link from "next/link"



export default function Signup() {
  return (
    <div className="w-full lg:grid lg:min-h-[600px] h-screen lg:grid-cols-2 xl:min-h-[800px]">
      <div className="flex items-center justify-center py-12">
        <SignupForm />
      </div>
      <div className="hidden bg-muted lg:block">
        <Image
          src="/assets/placeholder-image.png"
          alt="Image"
          width="1920"
          height="1080"
          className="h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
        />
      </div>
    </div>
  )
}

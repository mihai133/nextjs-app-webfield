
import { userSignOut } from '@/app/lib/userActions/actions';
import { signOut } from '@/auth';
import { Button } from '@/components/ui/button';
import React from 'react'

const SignoutForm = () => {

  return (
    <form action={userSignOut}>
      <Button className='w-[100%] px-2 py-0 justify-start' type='submit' variant={"ghost"}>
        Sign out
      </Button>
    </form>
  )
}

export default SignoutForm

'use client';

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import Link from 'next/link'
import React, { useEffect } from 'react'
import { useFormState, useFormStatus } from 'react-dom'
import { loginUser } from '../../lib/userActions/actions'
import { toast, useToast } from '@/components/ui/use-toast';
import LoadingSpinner from '@/components/ui/LoadingSpinner';


const initialState = {
  error: null || '',
  message: '',
  status: 200
}

export default function LoginForm() {

  const [state, formAction, isPending] = useFormState(loginUser, initialState);
  const { pending, data } = useFormStatus();

  if (state?.error) toast({
    title: "Error",
    description: state?.error
  })
  return (
    <>
      <div className="mx-auto grid w-[400px] gap-6">
        <div className="grid gap-2 text-center">
          <h1 className="text-3xl font-bold">Login</h1>
          <p className="text-balance text-muted-foreground">
            Enter your email below to login to your account
          </p>

        </div>
        <form action={formAction} className="grid gap-4">
          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              name='email'
              placeholder="mail@example.com"
              required
            />
          </div>
          <div className="grid gap-2">
            <div className="flex items-center">
              <Label htmlFor="password">Password</Label>
              <Link
                href="/forgot-password"
                className="ml-auto inline-block text-sm underline"
              >
                Forgot your password?
              </Link>
            </div>
            <Input id="password" type="password" name='password' required />
          </div>
          <SubmitButton />
          <Button variant="outline" className="w-full">
            Login with Google
          </Button>
        </form>
        <div className="mt-4 text-center text-sm">
          Don&apos;t have an account?{" "}
          <Link href="/signup" className="underline">
            Sign up
          </Link>
        </div>
      </div >
    </>
  )
}


function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <Button type="submit" className="w-full">
      {pending ? <LoadingSpinner /> : "Login"}
    </Button>
  )
}
'use client';

import React from 'react'
import { useFormState } from 'react-dom';
import { registerUser } from '../../lib/userActions/actions';
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { z } from 'zod'

const initialState: { message: string; status: number } = {
  message: '',
  status: 200
}

export default function SignupForm() {
  const [state, formAction] = useFormState(registerUser, initialState);

  return (
    <div className="mx-auto grid w-[400px] gap-6">
      <div className="grid gap-2 text-center">
        <h1 className="text-3xl font-bold">Create account</h1>
        <p className="text-balance text-muted-foreground">
          Start by creating an account
        </p>
      </div>
      <form action={formAction} className="grid gap-4">
        <div className="grid gap-2">
          <Label htmlFor="username">Username</Label>
          <Input
            id="username"
            type="username"
            name='username'
            placeholder="Username"
            required
          />
        </div>
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
          <Label htmlFor="password">Password</Label>
          <Input id="password" type="password" name='password' required />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="confirmpassword">Confirm Password</Label>
          <Input id="confirmpassword" type="password" name='confirmPassword' required />
        </div>
        <Button type="submit" className="w-full">
          Create account
        </Button>
        <Button variant="outline" className="w-full">
          Signup with Google
        </Button>
      </form>
      <div className="mt-4 text-center text-sm">
        Already have an account?{" "}
        <Link href="/login" className="underline">
          Login
        </Link>
      </div>
    </div>
  )
}

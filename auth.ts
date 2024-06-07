import NextAuth from "next-auth"
import authConfig from "./auth.config" 
import { PrismaAdapter } from "@auth/prisma-adapter"
import { db } from "./app/lib/db"

export const { 
  auth,
  handlers,
  signIn,
  signOut,
} = NextAuth({
  adapter: PrismaAdapter(db),
  session: { strategy: "jwt"},
  ...authConfig
})
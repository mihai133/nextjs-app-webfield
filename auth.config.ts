import type { NextAuthConfig } from "next-auth"
import Credentials from "next-auth/providers/credentials"
import { LogInSchema } from "./app/lib/schemas/userSchemas" 
import { db } from "./app/lib/db";
import { compare } from "bcryptjs";


export default {
  pages: {
    signIn: '/login',
  },
  providers: [
    Credentials({
      async authorize(credentials) {
        const validatedFields = LogInSchema.safeParse(credentials);

        if(validatedFields.success) {
          const {email, password} = validatedFields.data;

          const user = await db.user.findUnique({where: {email: email}})
          if(!user || !user.password) return {error: "User not found"};

          const passwordMatch = await compare(password, user.password)

          if(passwordMatch) return user;
        }

        return null;
      }
    })
  ]
} satisfies NextAuthConfig
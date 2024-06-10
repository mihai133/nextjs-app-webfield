"use server";

import { compare, hash } from "bcrypt";
import { db } from "../db";
import { LogInSchema, SignUpSchema } from "../schemas/userSchemas";
import { signIn } from "@/auth";
import { DEFAULT_LOGIN_REDIRECT } from "@/routes";
import { AuthError } from "next-auth";





// Register user server action
export async function registerUser(prevState: any, formData: FormData) {
  try {
    const {email, username, password} = SignUpSchema.parse({
      username: formData.get('username'),
      email: formData.get('email'),
      password: formData.get('password'),
      confirmPassword: formData.get('confirmPassword'),
    });
    
    // check if email exists
    const existingUser = await db.user.findUnique({ where: { email: email } });

    if (existingUser) {
      return { user:null, message: "User already exists",status: 409 };
    }

    // check if username exists
    const existingUsername = await db.user.findUnique({ where: { username: username } });

    if (existingUsername) {
      return { user: null, message: "Username already exists",status: 409 };
    }

    const hashedPassword = await hash(password, 10);
    const newUser = await db.user.create({
      data: {
        username,
        email,
        password: hashedPassword,
      },
    });
    const { password: newUserPassword, ...rest}= newUser;

    return {user: newUser, message: "User created successfully", status: 200}; 
  } catch (error) {
    if (error instanceof Error) {
      return { message: JSON.parse(error?.message), status: 500 };
    }
  }
}

// Login user server action
export async function loginUser(prevState: any, formData: FormData) {
  const validatedFields = LogInSchema.safeParse({
          email: formData.get('email'),
          password: formData.get('password'),
        })

  if(!validatedFields.success) {
    return {error: "Invalid fields!"}
  }

  const { email, password } = validatedFields.data;

  try {
    await signIn("credentials", {
      email,
      password,
      redirectTo: DEFAULT_LOGIN_REDIRECT
    })
  } catch (error) {
    if(error instanceof AuthError) {
      switch (error.type) {
        case "CredentialsSignin" :
          return { error: "Invalid credentials!"}
        default: 
          return {error: "Something went wrong!"}
      }
    }

    throw error
  }
}

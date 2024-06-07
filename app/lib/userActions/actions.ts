"use server";

import { compare, hash } from "bcrypt";
import { db } from "../db";
import { LogInSchema, SignUpSchema } from "../schemas/userSchemas";
import { signIn } from "../../../auth"





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
  try {
    const {email, password} =  LogInSchema.parse({
      email: formData.get('email'),
      password: formData.get('password'),
    });

     const signInData = await signIn("Credentials", {
      email: email,
      password: password
    });
console.log(email, password)
    console.log(signInData)

    // user = await db.user.findUnique({ where: { email: email } });

    // if (!user) {
    //   return { user:null, message: "User not found",status: 404 };
    // }


    // const isPasswordValid = await compare(password, user.password);

    // if (!isPasswordValid) {
    //   return { user:null, message: "Invalid password",status: 401 };
    // }

    // return {user: user, message: "Logged in successfully", status: 200};
  } catch (error) {
    if (error instanceof Error) {
      return { message: error?.message, status: 500 };
    }
  }
}
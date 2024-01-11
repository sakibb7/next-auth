'use server'

import { RegistrationSchema } from "@/schemas";
import * as z from "zod"
import bcrypt from "bcrypt"
import { db } from "@/lib/db";
import { getUserByEmail } from "@/data/user";

export const registration = async (values: z.infer<typeof RegistrationSchema>) => {
    const validatedFields = RegistrationSchema.safeParse(values)
    if (!validatedFields.success) {
        return {error: "Invalid fields!"}
    }

    const {email,password,name} = validatedFields.data
    const hashedPassword = await bcrypt.hash(password,10)

    const existingUser = await getUserByEmail(email)

    if(existingUser) {
        return {error: "Email already in use!"}
    }

    await db.user.create({
        data: {
            name,
            email,
            password: hashedPassword,
        }
    })

    return {success : "User Created!"}
}
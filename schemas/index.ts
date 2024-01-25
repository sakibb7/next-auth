import { UserRole } from "@prisma/client"
import * as z from "zod"

export const SettingsSchema = z.object({
    name: z.optional(z.string()),
    isTwoFactorEnabled: z.optional(z.boolean()),
    role:z.enum([UserRole.ADMIN, UserRole.USER]),
    email: z.optional(z.string().email()),
    password: z.optional(z.string().min(6)),
    newPassword: z.optional(z.string().min(6)),
}).refine((data) => {
    if(data.password && !data.newPassword) {
        return false;
    }

    if(data.newPassword && !data.password) {
        return false
    }

    return true
}, {
    message: "New Password is required",
    path: ["newPassword"]
}).refine((data) => {
    if(data.newPassword && !data.password) {
        return false;
    }

    return true
}, {
    message: "Password is required",
    path: ["password"]
})

export const LoginSchema = z.object({
    email:z.string().email({
        message:"Vai, Email is required"
    }),
    password:z.string().min(1, {
        message: "Vai, Password is needed"
    }),
    code: z.optional(z.string()),
})

export const RegistrationSchema = z.object({
    email:z.string().email({
        message:"Vai, Email is required"
    }),
    password:z.string().min(6, {
        message: "Vai, Minimum 6 character is required"
    }),
    name:z.string().min(1, {
        message: "Vai, Name is required"
    })

})


export const ResetSchema = z.object({
    email:z.string().email({
        message:"Vai, Email is required"
    }),
})

export const NewPasswordSchema = z.object({
    password:z.string().min(6,{
        message:"Vai, Minimun 6 characters is required"
    }),
})
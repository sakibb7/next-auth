import * as z from "zod"

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
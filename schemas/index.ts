import * as z from "zod"

export const LoginSchema = z.object({
    email:z.string().email({
        message:"Vai, Email is required"
    }),
    password:z.string().min(1, {
        message: "Vai, Password is needed"
    })
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
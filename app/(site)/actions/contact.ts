"use server"

import { db } from "@/lib/db"
import { z } from "zod"
import { revalidatePath } from "next/cache"
import { prisma } from "@/lib/prisma"

const contactSchema = z.object({
    name: z.string().min(2, { message: "Name must be at least 2 characters." }),
    email: z.string().email({ message: "Please enter a valid email address." }),
    subject: z.string().optional(),
    message: z.string().min(10, { message: "Message must be at least 10 characters." }),
})

export async function submitContactForm(prevState: any, formData: FormData) {
    try {
        console.log("prevState :", prevState, "formData :", formData);
        const rawData = {
            name: formData.get("name"),
            email: formData.get("email"),
            subject: formData.get("subject"),
            message: formData.get("message"),
        }

        const validatedData = contactSchema.parse(rawData)

        await prisma.contact.create({
            data: {
                name: validatedData.name,
                email: validatedData.email,
                subject: validatedData.subject || "No Subject",
                message: validatedData.message,
            },
        })

        revalidatePath("/admin/contacts")

        return { success: true, message: "Message sent successfully!" }
    } catch (error) {
        if (error instanceof z.ZodError) {
            const fieldErrors = error.flatten().fieldErrors
            // Format checks if specific errors exist, otherwise return a generic error
            return {
                success: false,
                message: "Validation failed. Please check your inputs.",
                errors: fieldErrors
            }
        }

        console.error("Contact form error:", error)
        return { success: false, message: "Something went wrong. Please try again later." }
    }
}

export async function toggleReadStatus(id: string, currentStatus: boolean) {
    try {
        await prisma.contact.update({
            where: { id },
            data: { read: !currentStatus }
        })

        revalidatePath("/admin/contacts")
        return { success: true }
    } catch (error) {
        console.error("Error toggling read status:", error)
        return { success: false, message: "Failed to update status" }
    }
}

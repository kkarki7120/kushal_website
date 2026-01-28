import { NextResponse } from "next/server"
import { prisma } from "@/lib/prisma"

export async function GET() {
    const contacts = await prisma.contact.findMany()
    return NextResponse.json({ success: true, contacts })
}

export async function POST(request: Request) {
    try {
        const body = await request.json()
        const { name, subject, email, message, read } = body

        if (!name || !name.trim()) {
            return NextResponse.json(
                { error: "Category name is required" },
                { status: 400 }
            )
        }

        const existingContact = await prisma.contact.findFirst({
            where: {
                name: {
                    equals: name.trim(),
                    mode: 'insensitive'
                }
            }
        })

        if (existingContact) {
            return NextResponse.json(
                { error: "Contact already exists" },
                { status: 409 }
            )
        }

        const contact = await prisma.contact.create({
            data: {
                name: name.trim(),
                email: email.trim(),
                subject,
                message,
                read
            }
        })

        return NextResponse.json(
            { success: true, contact },
            { status: 201 }
        )
    } catch (error) {
        console.error("Error creating contact:", error)
        return NextResponse.json(
            { error: "Failed to create contact" },
            { status: 500 }
        )
    }
}



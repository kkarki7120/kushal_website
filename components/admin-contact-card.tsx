"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Check, MailOpen } from "lucide-react"
import { toggleReadStatus } from "@/app/(site)/actions/contact"
import { toast } from "sonner"
import { useState } from "react"

interface ContactProps {
    contact: {
        id: string
        name: string
        email: string
        subject: string | null
        message: string
        createdAt: Date
        read: boolean
    }
}

export function AdminContactCard({ contact }: ContactProps) {
    const [isLoading, setIsLoading] = useState(false)

    async function handleToggleRead() {
        setIsLoading(true)
        try {
            const result = await toggleReadStatus(contact.id, contact.read)
            if (result.success) {
                toast.success(contact.read ? "Marked as unread" : "Marked as read")
            } else {
                toast.error("Failed to update status")
            }
        } catch (error) {
            toast.error("Something went wrong")
        } finally {
            setIsLoading(false)
        }
    }

    return (
        <Card className={`transition-colors ${contact.read ? "bg-muted/50 border-l-4 border-l-gray-300" : "border-l-4 border-l-blue-500"}`}>
            <CardHeader className="py-4 px-5">
                <div className="flex justify-between items-start">
                    <div className="flex items-center gap-2">
                        <CardTitle className="text-base">{contact.subject || "No Subject"}</CardTitle>
                        {!contact.read && (
                            <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-blue-500 text-white hover:bg-blue-600">
                                New
                            </span>
                        )}
                    </div>
                    <div className="flex items-center gap-2">
                        <span className="text-xs text-muted-foreground mr-2">
                            {new Date(contact.createdAt).toLocaleDateString()} {new Date(contact.createdAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                        </span>
                        <Button
                            variant="ghost"
                            size="icon"
                            onClick={handleToggleRead}
                            disabled={isLoading}
                            title={contact.read ? "Mark as unread" : "Mark as read"}
                            className="h-8 w-8"
                        >
                            {contact.read ? <MailOpen className="h-4 w-4" /> : <Check className="h-4 w-4" />}
                        </Button>
                    </div>
                </div>
                <CardDescription>
                    From: {contact.name} ({contact.email})
                </CardDescription>
            </CardHeader>
            <CardContent className="py-2 px-5">
                <p className="text-sm border-t pt-2 mt-1 whitespace-pre-wrap">{contact.message}</p>
            </CardContent>
        </Card>
    )
}

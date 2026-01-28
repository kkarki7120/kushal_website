"use client"

import { useState } from "react"
import { useFormStatus } from "react-dom"
import { Button } from "@/components/ui/button"
import { Send } from "lucide-react"
import { submitContactForm } from "@/app/(site)/actions/contact"
import { toast } from "sonner"

function SubmitButton() {
    const { pending } = useFormStatus()

    return (
        <Button
            type="submit"
            disabled={pending}
            className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
        >
            <Send className="mr-2 h-4 w-4" />
            {pending ? "Sending..." : "Send Message"}
        </Button>
    )
}

export function ContactForm() {
    const [state, setState] = useState<{ success: boolean; message: string; errors?: any } | null>(null)

    async function clientAction(formData: FormData) {
        const result = await submitContactForm(null, formData)
        setState(result)

        if (result.success) {
            toast.success(result.message)
            const form = document.querySelector("form") as HTMLFormElement
            if (form) form.reset()
        } else {
            toast.error(result.message)
        }
    }

    return (
        <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg">
            <h2 className="text-2xl font-bold mb-6">Send Me a Message</h2>
            <form action={clientAction} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                        <label htmlFor="name" className="text-sm font-medium">
                            Name
                        </label>
                        <input
                            id="name"
                            name="name"
                            placeholder="Your name"
                            required
                            className="w-full px-4 py-3 rounded-lg border border-gray-200 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-800"
                        />
                        {state?.errors?.name && (
                            <p className="text-red-500 text-sm">{state.errors.name[0]}</p>
                        )}
                    </div>
                    <div className="space-y-2">
                        <label htmlFor="email" className="text-sm font-medium">
                            Email
                        </label>
                        <input
                            id="email"
                            name="email"
                            type="email"
                            placeholder="Your email"
                            required
                            className="w-full px-4 py-3 rounded-lg border border-gray-200 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-800"
                        />
                        {state?.errors?.email && (
                            <p className="text-red-500 text-sm">{state.errors.email[0]}</p>
                        )}
                    </div>
                </div>
                <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-medium">
                        Subject
                    </label>
                    <input
                        id="subject"
                        name="subject"
                        placeholder="What's this about?"
                        className="w-full px-4 py-3 rounded-lg border border-gray-200 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-800"
                    />
                </div>
                <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">
                        Message
                    </label>
                    <textarea
                        id="message"
                        name="message"
                        placeholder="Your message"
                        rows={6}
                        required
                        className="w-full px-4 py-3 rounded-lg border border-gray-200 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-800 resize-none"
                    />
                    {state?.errors?.message && (
                        <p className="text-red-500 text-sm">{state.errors.message[0]}</p>
                    )}
                </div>
                <SubmitButton />
            </form>
        </div>
    )
}

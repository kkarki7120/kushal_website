import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { AdminContactCard } from "@/components/admin-contact-card"
import { ScrollArea } from "@/components/ui/scroll-area"
import { db } from "@/lib/db"
import { prisma } from "@/lib/prisma"

export default async function AdminContactsPage() {
    const contacts = await prisma.contact.findMany({
        orderBy: {
            createdAt: 'desc'
        }
    })

    return (
        <div className="container mx-auto py-10">
            <h1 className="text-3xl font-bold mb-6">Contact Inquiries</h1>

            <Card className="h-[600px] flex flex-col">
                <CardHeader>
                    <CardTitle>Messages</CardTitle>
                    <CardDescription>Inquiries from the contact form</CardDescription>
                </CardHeader>
                <CardContent className="flex-1 overflow-hidden">
                    <ScrollArea className="h-[480px] w-full pr-4">
                        <div className="space-y-4">
                            {contacts.length === 0 ? (
                                <p className="text-muted-foreground text-center py-10">No messages yet.</p>
                            ) : (
                                contacts.map((contact) => (
                                    <AdminContactCard key={contact.id} contact={contact} />
                                ))
                            )}
                        </div>
                    </ScrollArea>
                </CardContent>
            </Card>
        </div>
    )
}

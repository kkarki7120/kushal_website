import { LoginForm } from "@/components/auth/login-form"
import { getSession } from "@/lib/auth"
import { redirect } from "next/navigation"

export const metadata = {
    title: "Login | Construction CMS",
    description: "Login to your account",
}

export default async function LoginPage() {
    const session = await getSession()
    
    if (session) {
        redirect("/admin")
    }
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="w-full max-w-md p-8 space-y-8 bg-white rounded-lg shadow-md">
                <div className="text-center">
                    <h1 className="text-3xl font-bold">Welcome Back</h1>
                    <p className="mt-2 text-gray-600">Login to access your account</p>
                </div>
                <LoginForm />
            </div>
        </div>
    )
}


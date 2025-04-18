"use client"

import type React from "react"

import { useState } from "react"
import { signOut } from "next-auth/react"
import { LogOut } from "lucide-react"
import { Button, type ButtonProps } from "@/components/ui/button"

interface LogoutButtonProps extends ButtonProps {
    showIcon?: boolean
    children?: React.ReactNode
}

export function LogoutButton({
    children,
    showIcon = false,
    variant = "ghost",
    className,
    ...props
}: LogoutButtonProps) {
    const [isLoading, setIsLoading] = useState(false)

    const handleLogout = async () => {
        setIsLoading(true)
        await signOut({ callbackUrl: "/" })
    }

    return (
        <Button variant={variant} onClick={handleLogout} disabled={isLoading} className={className} {...props}>
            {showIcon && <LogOut className="mr-2 h-4 w-4" />}
            {children || "Logout"}
        </Button>
    )
}


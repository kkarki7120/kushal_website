"use client"

import React, { useState } from "react"
import { Check, Copy } from "lucide-react"

interface CodeBlockProps extends React.HTMLAttributes<HTMLElement> {
    children?: React.ReactNode
}

export function CodeBlock({ className, children, ...props }: CodeBlockProps) {
    const [isCopied, setIsCopied] = useState(false)

    // Extract language from className (e.g. "language-typescript" -> "typescript")
    const match = /language-(\w+)/.exec(className || "")
    const language = match?.[1] || "text"

    const copyToClipboard = async () => {
        if (!children) return

        try {
            await navigator.clipboard.writeText(String(children).trim())
            setIsCopied(true)
            setTimeout(() => setIsCopied(false), 2000)
        } catch (err) {
            console.error("Failed to copy code", err)
        }
    }

    return (
        <div className="relative my-6 rounded-lg border border-border bg-muted/50 overflow-hidden">
            <div className="flex items-center justify-between bg-muted/80 px-4 py-2 text-xs text-muted-foreground border-b border-border">
                <span className="font-medium uppercase">{language}</span>
                <button
                    onClick={copyToClipboard}
                    className="flex items-center gap-1.5 hover:text-foreground transition-colors"
                    aria-label="Copy to clipboard"
                >
                    {isCopied ? (
                        <>
                            <Check className="h-3.5 w-3.5" />
                            <span>Copied!</span>
                        </>
                    ) : (
                        <>
                            <Copy className="h-3.5 w-3.5" />
                            <span>Copy</span>
                        </>
                    )}
                </button>
            </div>
            <div className="overflow-x-auto py-4 px-4">
                <code
                    className={`font-mono text-sm leading-relaxed ${className || ""}`}
                    {...props}
                >
                    {children}
                </code>
            </div>
        </div>
    )
}

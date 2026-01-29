"use client"

import { useEffect } from "react"
import { incrementPostViews } from "@/lib/actions"

export function ViewCounter({ slug }: { slug: string }) {
    useEffect(() => {
        incrementPostViews(slug)
    }, [slug])

    return null
}

"use client"

import { ShoppingBag } from "lucide-react"
import { useEffect } from "react"
import { useBoolean } from "usehooks-ts"

import { Button } from "@/components/ui/button"
import { useCart } from "@/hooks/useCart"
import { useRouter } from "next/navigation"

export const NavbarActions = () => {
    const {value: isMounted, setTrue: setMountedTrue} = useBoolean(false)

    useEffect(() => {
        setMountedTrue()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const router = useRouter()
    const cart = useCart()

    if (!isMounted) return null

    return (
        <div className="ml-auto flex items-center gap-x-4">
            <Button onClick={() => router.push("/cart")} className="flex items-center rounded-full bg-black px-4 py-2">
                <ShoppingBag size={20} color="white"/>
                <span className="ml-2 text-sm font-semibold text-white">{cart.items.length}</span>
            </Button>
        </div>
    )
}
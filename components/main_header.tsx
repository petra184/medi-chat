"use client"

import Link from "next/link"
import { Heart } from "lucide-react"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"

export function MainHeader() {
  const pathname = usePathname()

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-customdarkblue">
      <div className="container flex h-14 items-center">
        <div className="flex items-center space-x-2">
          <Heart className="h-5 w-5 text-white" />
          <Link href="/" className="text-lg font-semibold text-white">
            MediChat
          </Link>
        </div>
      </div>
    </header>
  )
}
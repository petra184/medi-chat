"use client"

import Link from "next/link"
import { Heart } from "lucide-react"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"

export function MediHeader() {
  const pathname = usePathname()

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white">
      <div className="container flex h-14 items-center">
        <div className="flex items-center space-x-2">
          <Heart className="h-5 w-5 text-blue-600" />
          <Link href="/" className="text-lg font-semibold text-blue-600">
            MediChat
          </Link>
        </div>
        <nav className="ml-auto flex items-center space-x-6">
          <Link
            href="/verified"
            className={cn(
              "text-sm transition-colors hover:text-blue-600",
              pathname === "/verified" ? "text-blue-600" : "text-gray-600",
            )}
          >
            Home
          </Link>
          <Link
            href="/verified/dashboard"
            className={cn(
              "text-sm transition-colors hover:text-blue-600",
              pathname === "/verified/dashboard" ? "text-blue-600" : "text-gray-600",
            )}
          >
            User Profile
          </Link>
        </nav>
      </div>
    </header>
  )
}
"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Heart, History, MessageSquare, User } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

const sidebarLinks = [
  {
    title: "User Profile",
    href: "/verified/dashboard",
    icon: User,
  },
  {
    title: "Chat History",
    href: "/verified/dashboard/chatbot-history",
    icon: MessageSquare,
  },
  {
    title: "Medical History",
    href: "/verified/dashboard/medical-history",
    icon: History,
  },
  {
    title: "Medical Information",
    href: "/verified/dashboard/medical-information",
    icon: Heart,
  },
]

export function Sidebar() {
  const pathname = usePathname()

  return (
    <div className="flex w-64 flex-col bg-[#1e4b87] text-white">
      <div className="p-6">
        <h1 className="text-2xl font-bold">Dashboard</h1>
      </div>
      <nav className="flex-1 space-y-2 p-4">
        {" "}
        {/* Added space-y-4 for vertical spacing */}
        {sidebarLinks.map((link) => {
          const isActive = pathname === link.href
          return (
            <Link key={link.href} href={link.href} className="block">
              {" "}
              {/* Added block to ensure full-width clickable area */}
              <Button
                variant="ghost"
                className={cn(
                  "w-full justify-start gap-2 text-white hover:bg-white/10 py-3", // Increased vertical padding
                  isActive && "bg-white/10",
                )}
              >
                <link.icon className="h-5 w-5" />
                {link.title}
              </Button>
            </Link>
          )
        })}
      </nav>
    </div>
  )
}


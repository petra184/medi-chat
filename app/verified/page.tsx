import Link from "next/link"
import { Button } from "@/components/ui/button"
import { MediHeader } from "@/components/medi-header"

export default function WelcomeScreen() {
  return (
    <>
        <MediHeader />
      <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-blue-100 to-white">
        <h1 className="text-4xl font-bold mb-8">Chatbot page</h1>
      </div>
    </>
  )
}

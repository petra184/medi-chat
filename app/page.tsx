import Link from "next/link"
import { Button } from "@/components/ui/button"
import { MainHeader } from "@/components/main_header"

export default function WelcomeScreen() {
  return (
    <>
    <MainHeader/>
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-blue-100 to-white">
      <h1 className="text-4xl font-bold mb-8">Welcome to Your Medical Assistant</h1>
      <div className="space-x-4">
        <Button asChild>
          <Link href="/sign-in">Log In</Link>
        </Button>
        <Button asChild variant="outline">
          <Link href="/sign-up">Sign Up</Link>
        </Button>
      </div>
      <div className="p-4">
          <Link href="/verified">Continue as Guest</Link>
      </div>
    </div>
    </>
  )
}


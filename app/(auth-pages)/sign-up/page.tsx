import { signUpAction } from "@/app/actions";
import { FormMessage, Message } from "@/components/form-message";
import { SubmitButton } from "@/components/submit-button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import { MainHeader } from "@/components/main_header";

export default async function Signup(props: {
  searchParams: Promise<Message>;
}) {
  const searchParams = await props.searchParams;
  if ("message" in searchParams) {
    return (
      <div className="w-full flex-1 flex items-center h-screen sm:max-w-md justify-center gap-2 p-4">
        <FormMessage message={searchParams} />
      </div>
    );
  }

  return (
    <>
    <MainHeader />
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-blue-100 to-white">
      <form className="w-full max-w-md space-y-4">
        <h2 className="text-2xl font-bold text-center mb-6">Sign Up</h2>
        <div className="space-y-2">
          <Label htmlFor="email">First Name</Label>
          <Input
            id="f_name"
            name="f_name"
            type="name"
            placeholder="First Name"
            required
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">Last Name</Label>
          <Input
            id="l_name"
            name="l_name"
            type="name"
            placeholder="Last Name"
            required
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="Enter your email"
            required
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="password">Password</Label>
          <Input
            id="password"
            name="password"
            type="password"
            placeholder="*********"
            minLength={6}
            required
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="confirmPassword">Confirm Password</Label>
          <Input
            id="confirmPassword"
            name="confirmPassword"
            type="password"
            placeholder="*********"
            required
          />
        </div>
        <SubmitButton formAction={signUpAction} pendingText="Signing up..." className="w-full">
            Sign up
        </SubmitButton>
        <p className="text-center">
          Already have an account?{' '}
          <Link href="/sign-in" className="text-blue-600 hover:underline">
            Log In
          </Link>
        </p>
        <FormMessage message={searchParams} />
      </form>
    </div>
    </>
  );
}

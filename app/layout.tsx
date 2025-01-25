import { Geist } from "next/font/google";
import "./globals.css";
import { Inter } from "next/font/google"

const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:3000";

  export const metadata = {
    title: "Medical App",
    description: "Your personal medical assistant",
  }

const geistSans = Geist({
  display: "swap",
  subsets: ["latin"],
});

const inter = Inter({ subsets: ["latin"] })

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}

import { Sidebar } from "@/components/sidebar"
import { MediHeader } from "@/components/medi-header"


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="h-full">
    <body className="h-full m-0">
        <div className="flex flex-col h-screen bg-[#F8FBFF]">
        <MediHeader />
        <div className="flex flex-1">
            <Sidebar />
            <main className="flex-1 px-8 py-6 bg-gradient-to-b from-blue-100 to-white">{children}</main>
        </div>
        </div>
    </body>
    </html>
  )
}
import "./globals.css"
import { Inter } from "next/font/google"
import { Header } from "@/components/header"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Hospital Management System",
  description: "A comprehensive hospital management system",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="min-h-screen bg-background flex flex-col">
          <Header />
          <main className="flex-1">{children}</main>
        </div>
      </body>
    </html>
  )
}


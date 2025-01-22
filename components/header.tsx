import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Hospital } from "lucide-react"

export function Header() {
  return (
    <header className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <Hospital className="h-6 w-6" />
          <span className="text-lg font-bold">MediCare Hospital</span>
        </Link>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <Link href="/" className="hover:underline">
                Dashboard
              </Link>
            </li>
            <li>
              <Link href="/patients" className="hover:underline">
                Patients
              </Link>
            </li>
            <li>
              <Link href="/appointments" className="hover:underline">
                Appointments
              </Link>
            </li>
            <li>
              <Link href="/staff" className="hover:underline">
                Staff
              </Link>
            </li>
          </ul>
        </nav>
        <Button variant="secondary">Logout</Button>
      </div>
    </header>
  )
}


import { AppointmentCalendar } from "@/components/appointment-calendar"
import { AppointmentList } from "@/components/appointment-list"
import { Button } from "@/components/ui/button"
import { PlusCircle } from "lucide-react"
import Link from "next/link"

export default function AppointmentsPage() {
  return (
    <div className="container mx-auto p-4 space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Appointments</h1>
        <Link href="/appointments/new">
          <Button>
            <PlusCircle className="mr-2 h-4 w-4" /> Schedule Appointment
          </Button>
        </Link>
      </div>
      <div className="grid gap-6 md:grid-cols-2">
        <AppointmentCalendar />
        <AppointmentList />
      </div>
    </div>
  )
}


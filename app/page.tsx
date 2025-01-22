import { DashboardCards } from "@/components/dashboard-cards"
import { AppointmentList } from "@/components/appointment-list"
import { StaffOverview } from "@/components/staff-overview"

export default function Dashboard() {
  return (
    <div className="container mx-auto p-4 space-y-6">
      <h1 className="text-3xl font-bold">Hospital Dashboard</h1>
      <DashboardCards />
      <div className="grid gap-6 md:grid-cols-2">
        <AppointmentList />
        <StaffOverview />
      </div>
    </div>
  )
}


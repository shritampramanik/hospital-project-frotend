import { PatientList } from "@/components/patient-list"
import { PatientStats } from "@/components/patient-stats"
import { Button } from "@/components/ui/button"
import { PlusCircle } from "lucide-react"
import Link from "next/link"

export default function PatientsPage() {
  return (
    <div className="container mx-auto p-4 space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Patients</h1>
        <Link href="/patients/new">
          <Button>
            <PlusCircle className="mr-2 h-4 w-4" /> Add New Patient
          </Button>
        </Link>
      </div>
      <PatientStats />
      <PatientList />
    </div>
  )
}


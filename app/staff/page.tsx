import { StaffList } from "@/components/staff-list"
import { StaffOverview } from "@/components/staff-overview"
import { Button } from "@/components/ui/button"
import { PlusCircle } from "lucide-react"
import Link from "next/link"

export default function StaffPage() {
  return (
    <div className="container mx-auto p-4 space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Staff</h1>
        <Link href="/staff/new">
          <Button>
            <PlusCircle className="mr-2 h-4 w-4" /> Add New Staff
          </Button>
        </Link>
      </div>
      <StaffOverview />
      <StaffList />
    </div>
  )
}


import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const staff = [
  {
    id: 1,
    name: "Dr. Sarah Johnson",
    role: "Cardiologist",
    department: "Cardiology",
    experience: "10 years",
    contact: "sarah.j@hospital.com",
  },
  {
    id: 2,
    name: "Nurse Mike Brown",
    role: "Head Nurse",
    department: "Emergency",
    experience: "8 years",
    contact: "mike.b@hospital.com",
  },
  {
    id: 3,
    name: "Dr. Emily Chen",
    role: "Pediatrician",
    department: "Pediatrics",
    experience: "6 years",
    contact: "emily.c@hospital.com",
  },
  {
    id: 4,
    name: "Nurse Lisa Taylor",
    role: "Nurse",
    department: "Surgery",
    experience: "4 years",
    contact: "lisa.t@hospital.com",
  },
  {
    id: 5,
    name: "Dr. James Wilson",
    role: "Neurologist",
    department: "Neurology",
    experience: "12 years",
    contact: "james.w@hospital.com",
  },
]

export function StaffList() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Staff List</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Role</TableHead>
              <TableHead>Department</TableHead>
              <TableHead>Experience</TableHead>
              <TableHead>Contact</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {staff.map((member) => (
              <TableRow key={member.id}>
                <TableCell>{member.name}</TableCell>
                <TableCell>{member.role}</TableCell>
                <TableCell>{member.department}</TableCell>
                <TableCell>{member.experience}</TableCell>
                <TableCell>{member.contact}</TableCell>
                <TableCell>
                  <Link href={`/staff/${member.id}`}>
                    <Button variant="outline" size="sm">
                      View
                    </Button>
                  </Link>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}


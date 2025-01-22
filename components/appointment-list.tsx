import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const appointments = [
  { id: 1, patient: "John Doe", time: "09:00 AM", doctor: "Dr. Smith", department: "Cardiology" },
  { id: 2, patient: "Jane Smith", time: "10:30 AM", doctor: "Dr. Johnson", department: "Pediatrics" },
  { id: 3, patient: "Bob Brown", time: "11:45 AM", doctor: "Dr. Lee", department: "Orthopedics" },
  { id: 4, patient: "Alice Green", time: "02:15 PM", doctor: "Dr. Patel", department: "Neurology" },
]

export function AppointmentList() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Today's Appointments</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Patient</TableHead>
              <TableHead>Time</TableHead>
              <TableHead>Doctor</TableHead>
              <TableHead>Department</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {appointments.map((appointment) => (
              <TableRow key={appointment.id}>
                <TableCell>{appointment.patient}</TableCell>
                <TableCell>{appointment.time}</TableCell>
                <TableCell>{appointment.doctor}</TableCell>
                <TableCell>{appointment.department}</TableCell>
                <TableCell>
                  <Link href={`/appointments/${appointment.id}`}>
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


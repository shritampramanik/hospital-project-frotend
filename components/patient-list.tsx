import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const patients = [
  { id: 1, name: "John Doe", age: 45, gender: "Male", condition: "Hypertension", admissionDate: "2023-06-15" },
  { id: 2, name: "Jane Smith", age: 32, gender: "Female", condition: "Pregnancy", admissionDate: "2023-06-18" },
  { id: 3, name: "Bob Johnson", age: 58, gender: "Male", condition: "Diabetes", admissionDate: "2023-06-20" },
  { id: 4, name: "Alice Brown", age: 27, gender: "Female", condition: "Appendicitis", admissionDate: "2023-06-22" },
  { id: 5, name: "Charlie Wilson", age: 71, gender: "Male", condition: "Pneumonia", admissionDate: "2023-06-23" },
]

export function PatientList() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Patient List</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Age</TableHead>
              <TableHead>Gender</TableHead>
              <TableHead>Condition</TableHead>
              <TableHead>Admission Date</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {patients.map((patient) => (
              <TableRow key={patient.id}>
                <TableCell>{patient.name}</TableCell>
                <TableCell>{patient.age}</TableCell>
                <TableCell>{patient.gender}</TableCell>
                <TableCell>{patient.condition}</TableCell>
                <TableCell>{patient.admissionDate}</TableCell>
                <TableCell>
                  <Link href={`/patients/${patient.id}`}>
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


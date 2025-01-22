"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function NewAppointmentPage() {
  const router = useRouter()
  const [formData, setFormData] = useState({
    patient: "",
    doctor: "",
    department: "",
    date: "",
    time: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSelectChange = (name: string, value: string) => {
    setFormData({ ...formData, [name]: value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the data to your backend
    console.log("Scheduling new appointment:", formData)
    // Redirect to the appointments list page
    router.push("/appointments")
  }

  return (
    <div className="container mx-auto p-4">
      <Card>
        <CardHeader>
          <CardTitle>Schedule New Appointment</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Label htmlFor="patient">Patient Name</Label>
              <Input id="patient" name="patient" value={formData.patient} onChange={handleChange} required />
            </div>
            <div>
              <Label htmlFor="doctor">Doctor</Label>
              <Input id="doctor" name="doctor" value={formData.doctor} onChange={handleChange} required />
            </div>
            <div>
              <Label htmlFor="department">Department</Label>
              <Select name="department" onValueChange={(value) => handleSelectChange("department", value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Select department" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="cardiology">Cardiology</SelectItem>
                  <SelectItem value="neurology">Neurology</SelectItem>
                  <SelectItem value="orthopedics">Orthopedics</SelectItem>
                  <SelectItem value="pediatrics">Pediatrics</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label htmlFor="date">Date</Label>
              <Input id="date" name="date" type="date" value={formData.date} onChange={handleChange} required />
            </div>
            <div>
              <Label htmlFor="time">Time</Label>
              <Input id="time" name="time" type="time" value={formData.time} onChange={handleChange} required />
            </div>
            <Button type="submit">Schedule Appointment</Button>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}


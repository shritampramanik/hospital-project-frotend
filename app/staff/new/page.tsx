"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function NewStaffPage() {
  const router = useRouter()
  const [formData, setFormData] = useState({
    name: "",
    role: "",
    department: "",
    experience: "",
    contact: "",
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
    console.log("Adding new staff member:", formData)
    // Redirect to the staff list page
    router.push("/staff")
  }

  return (
    <div className="container mx-auto p-4">
      <Card>
        <CardHeader>
          <CardTitle>Add New Staff Member</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Label htmlFor="name">Name</Label>
              <Input id="name" name="name" value={formData.name} onChange={handleChange} required />
            </div>
            <div>
              <Label htmlFor="role">Role</Label>
              <Select name="role" onValueChange={(value) => handleSelectChange("role", value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Select role" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="doctor">Doctor</SelectItem>
                  <SelectItem value="nurse">Nurse</SelectItem>
                  <SelectItem value="admin">Admin</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label htmlFor="department">Department</Label>
              <Input id="department" name="department" value={formData.department} onChange={handleChange} required />
            </div>
            <div>
              <Label htmlFor="experience">Experience</Label>
              <Input id="experience" name="experience" value={formData.experience} onChange={handleChange} required />
            </div>
            <div>
              <Label htmlFor="contact">Contact</Label>
              <Input
                id="contact"
                name="contact"
                type="email"
                value={formData.contact}
                onChange={handleChange}
                required
              />
            </div>
            <Button type="submit">Add Staff Member</Button>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}


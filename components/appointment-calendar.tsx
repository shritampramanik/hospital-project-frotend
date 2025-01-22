"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar } from "@/components/ui/calendar"

export function AppointmentCalendar() {
  const [date, setDate] = useState<Date | undefined>(new Date())

  return (
    <Card>
      <CardHeader>
        <CardTitle>Appointment Calendar</CardTitle>
      </CardHeader>
      <CardContent>
        <Calendar mode="single" selected={date} onSelect={setDate} className="rounded-md border" />
      </CardContent>
    </Card>
  )
}


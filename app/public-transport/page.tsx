"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { AlertCircle } from "lucide-react"

export default function PublicTransport() {
  const [searchQuery, setSearchQuery] = useState("")

  // Mock data for public transport schedule
  const scheduleData = [
    { route: "Bus 101", departure: "10:00 AM", arrival: "10:30 AM", status: "On Time" },
    { route: "Train A", departure: "10:15 AM", arrival: "10:45 AM", status: "Delayed" },
    { route: "Bus 202", departure: "10:30 AM", arrival: "11:00 AM", status: "On Time" },
    { route: "Train B", departure: "10:45 AM", arrival: "11:15 AM", status: "On Time" },
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Public Transportation Information</h1>

      <div className="flex mb-4">
        <Input
          type="text"
          placeholder="Enter your location or route"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="mr-2"
        />
        <Button>Search</Button>
      </div>

      <div className="flex flex-col md:flex-row gap-8">
        <div className="w-full md:w-2/3">
          {/* Placeholder for public transport routes map */}
          <div className="bg-gray-200 h-96 rounded-lg flex items-center justify-center mb-4">
            Public transport routes map will be integrated here
          </div>

          <Button>Suggest New Stoppage</Button>

          <h2 className="text-xl font-semibold mt-8 mb-4">Public Transport Schedule</h2>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Route</TableHead>
                <TableHead>Departure</TableHead>
                <TableHead>Arrival</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {scheduleData.map((item, index) => (
                <TableRow key={index}>
                  <TableCell>{item.route}</TableCell>
                  <TableCell>{item.departure}</TableCell>
                  <TableCell>{item.arrival}</TableCell>
                  <TableCell>{item.status}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>

        <div className="w-full md:w-1/3">
          <h2 className="text-xl font-semibold mb-4">Real-time Updates</h2>
          <ul className="space-y-4">
            <li className="bg-white p-4 rounded-lg shadow">
              <div className="flex items-center mb-2">
                <AlertCircle className="text-yellow-500 mr-2" />
                <span className="font-semibold">Delay</span>
              </div>
              <p>Train A is running 10 minutes late due to signal issues.</p>
            </li>
            <li className="bg-white p-4 rounded-lg shadow">
              <div className="flex items-center mb-2">
                <AlertCircle className="text-red-500 mr-2" />
                <span className="font-semibold">Cancellation</span>
              </div>
              <p>Bus 303 service has been cancelled for today.</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}


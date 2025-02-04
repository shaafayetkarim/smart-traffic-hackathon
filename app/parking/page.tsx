"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { MapPin } from "lucide-react"

export default function Parking() {
  const [searchQuery, setSearchQuery] = useState("")
  const [parkingType, setParkingType] = useState("")
  const [vehicleSize, setVehicleSize] = useState("")

  // Mock data for nearby parking spots
  const parkingSpots = [
    { name: "Central Parking", available: 5, total: 50, type: "Paid" },
    { name: "Street Parking A", available: 2, total: 10, type: "Free" },
    { name: "Mall Parking", available: 20, total: 100, type: "Paid" },
    { name: "Street Parking B", available: 0, total: 5, type: "Free" },
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Parking Spot Availability</h1>

      <div className="flex flex-wrap gap-4 mb-4">
        <Input
          type="text"
          placeholder="Find parking near..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="flex-grow"
        />
        <Select onValueChange={(value) => setParkingType(value)}>
          <SelectTrigger>
            <SelectValue placeholder="Parking type" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All</SelectItem>
            <SelectItem value="paid">Paid</SelectItem>
            <SelectItem value="free">Free</SelectItem>
          </SelectContent>
        </Select>
        <Select onValueChange={(value) => setVehicleSize(value)}>
          <SelectTrigger>
            <SelectValue placeholder="Vehicle size" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="small">Small</SelectItem>
            <SelectItem value="medium">Medium</SelectItem>
            <SelectItem value="large">Large</SelectItem>
          </SelectContent>
        </Select>
        <Button>Search</Button>
      </div>

      <div className="flex flex-col md:flex-row gap-8">
        <div className="w-full md:w-2/3">
          {/* Placeholder for parking availability map */}
          <div className="bg-gray-200 h-96 rounded-lg flex items-center justify-center mb-4">
            Parking availability map will be integrated here
          </div>

          <Button>Reserve Parking</Button>
        </div>

        <div className="w-full md:w-1/3">
          <h2 className="text-xl font-semibold mb-4">Nearby Parking Spots</h2>
          <ul className="space-y-4">
            {parkingSpots.map((spot, index) => (
              <li key={index} className="bg-white p-4 rounded-lg shadow">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-semibold">{spot.name}</span>
                  <span className={`text-sm ${spot.available > 0 ? "text-green-500" : "text-red-500"}`}>
                    {spot.available > 0 ? "Available" : "Full"}
                  </span>
                </div>
                <div className="flex items-center justify-between text-sm text-gray-600">
                  <span>
                    {spot.available} / {spot.total} spots
                  </span>
                  <span>{spot.type}</span>
                </div>
                <div className="mt-2 flex items-center text-sm text-gray-600">
                  <MapPin className="w-4 h-4 mr-1" />
                  <span>0.5 miles away</span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}


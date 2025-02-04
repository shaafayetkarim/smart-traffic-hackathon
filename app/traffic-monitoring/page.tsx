"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { MapPin, AlertTriangle } from "lucide-react"

export default function TrafficMonitoring() {
  const [searchQuery, setSearchQuery] = useState("")

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Real-Time Traffic Monitoring</h1>

      <div className="flex mb-4">
        <Input
          type="text"
          placeholder="Enter location or route"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="mr-2"
        />
        <Button>Search</Button>
      </div>

      <div className="flex flex-col md:flex-row gap-8">
        <div className="w-full md:w-2/3">
          {/* Placeholder for Google Maps */}
          <div className="bg-gray-200 h-96 rounded-lg flex items-center justify-center">
            Google Maps API will be integrated here
          </div>
          <div className="mt-4 flex justify-between">
            <div className="flex items-center">
              <div className="w-4 h-4 bg-green-500 rounded-full mr-2"></div>
              <span>Low Traffic</span>
            </div>
            <div className="flex items-center">
              <div className="w-4 h-4 bg-yellow-500 rounded-full mr-2"></div>
              <span>Moderate Traffic</span>
            </div>
            <div className="flex items-center">
              <div className="w-4 h-4 bg-red-500 rounded-full mr-2"></div>
              <span>Heavy Traffic</span>
            </div>
          </div>
          <Button className="mt-4">Show Alternative Routes</Button>
        </div>

        <div className="w-full md:w-1/3">
          <h2 className="text-xl font-semibold mb-4">Current Incidents</h2>
          <ul className="space-y-4">
            <li className="bg-white p-4 rounded-lg shadow">
              <div className="flex items-center mb-2">
                <AlertTriangle className="text-yellow-500 mr-2" />
                <span className="font-semibold">Accident</span>
              </div>
              <p>Main St & 5th Ave - Expect delays</p>
            </li>
            <li className="bg-white p-4 rounded-lg shadow">
              <div className="flex items-center mb-2">
                <MapPin className="text-red-500 mr-2" />
                <span className="font-semibold">Road Closure</span>
              </div>
              <p>Broadway between 34th and 42nd St</p>
            </li>
          </ul>

          <h2 className="text-xl font-semibold mt-8 mb-4">Estimated Travel Times</h2>
          <ul className="space-y-2">
            <li>Downtown to Airport: 35 mins</li>
            <li>Uptown to Midtown: 20 mins</li>
            <li>East Side to West Side: 25 mins</li>
          </ul>
        </div>
      </div>
    </div>
  )
}


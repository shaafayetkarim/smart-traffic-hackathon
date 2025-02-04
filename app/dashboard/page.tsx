"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "../../components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { AlertTriangle, Bus, Car, Clock, MapPin, ParkingCircle, Search } from "lucide-react"

export default function Dashboard() {
  const [searchQuery, setSearchQuery] = useState("")

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-serif font-bold mb-8 text-primary">Smart Traffic Management Dashboard</h1>

      <div className="mb-8">
        <Input
          type="text"
          placeholder="Search for a location or service..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="max-w-md"
        />
      </div>

      <Tabs defaultValue="overview" className="space-y-4">
        <TabsList className="bg-secondary">
          <TabsTrigger
            value="overview"
            className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
          >
            Overview
          </TabsTrigger>
          <TabsTrigger
            value="traffic"
            className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
          >
            Traffic
          </TabsTrigger>
          <TabsTrigger
            value="public-transport"
            className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
          >
            Public Transport
          </TabsTrigger>
          <TabsTrigger
            value="parking"
            className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
          >
            Parking
          </TabsTrigger>
        </TabsList>

        <TabsContent value="overview">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <Card className="bg-card text-card-foreground">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Real-time Traffic</CardTitle>
                <Car className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">Moderate</div>
                <p className="text-xs text-muted-foreground">Current congestion level</p>
              </CardContent>
            </Card>
            <Card className="bg-card text-card-foreground">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Public Transport</CardTitle>
                <Bus className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">On Time</div>
                <p className="text-xs text-muted-foreground">Most services running as scheduled</p>
              </CardContent>
            </Card>
            <Card className="bg-card text-card-foreground">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Parking Availability</CardTitle>
                <ParkingCircle className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">75%</div>
                <p className="text-xs text-muted-foreground">Of total parking spots available</p>
              </CardContent>
            </Card>
            <Card className="bg-card text-card-foreground">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Active Incidents</CardTitle>
                <AlertTriangle className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">3</div>
                <p className="text-xs text-muted-foreground">Reported in the last hour</p>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="traffic">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader>
                <CardTitle>Real-time Traffic Check</CardTitle>
                <CardDescription>Monitor current traffic conditions</CardDescription>
              </CardHeader>
              <CardContent>
                <Button asChild className="w-full">
                  <Link href="/traffic-monitoring">View Traffic Map</Link>
                </Button>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Incident Reporting</CardTitle>
                <CardDescription>Report traffic incidents or view active reports</CardDescription>
              </CardHeader>
              <CardContent>
                <Button asChild className="w-full">
                  <Link href="/incident-reporting">Report Incident</Link>
                </Button>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Alternative Routes</CardTitle>
                <CardDescription>Find alternative routes to avoid congestion</CardDescription>
              </CardHeader>
              <CardContent>
                <Button asChild className="w-full">
                  <Link href="/alternative-routes">Get Directions</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="public-transport">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader>
                <CardTitle>Public Transport Schedule</CardTitle>
                <CardDescription>View schedules for buses and trains</CardDescription>
              </CardHeader>
              <CardContent>
                <Button asChild className="w-full">
                  <Link href="/public-transport">View Schedules</Link>
                </Button>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Stoppage Application</CardTitle>
                <CardDescription>Request new public transport stops</CardDescription>
              </CardHeader>
              <CardContent>
                <Button asChild className="w-full">
                  <Link href="/public-transport?tab=stoppage">Request Stop</Link>
                </Button>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Service Updates</CardTitle>
                <CardDescription>Check for any service disruptions or changes</CardDescription>
              </CardHeader>
              <CardContent>
                <Button asChild className="w-full">
                  <Link href="/public-transport?tab=updates">View Updates</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="parking">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader>
                <CardTitle>Parking Availability</CardTitle>
                <CardDescription>Check real-time parking spot availability</CardDescription>
              </CardHeader>
              <CardContent>
                <Button asChild className="w-full">
                  <Link href="/parking">Find Parking</Link>
                </Button>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Industrial Vehicle Management</CardTitle>
                <CardDescription>View time limits for industrial vehicles</CardDescription>
              </CardHeader>
              <CardContent>
                <Button asChild className="w-full">
                  <Link href="/industrial-vehicles">View Regulations</Link>
                </Button>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Road Size Filtering</CardTitle>
                <CardDescription>Filter vehicles based on road size</CardDescription>
              </CardHeader>
              <CardContent>
                <Button asChild className="w-full">
                  <Link href="/road-filtering">View Restrictions</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>

      <div className="mt-8">
        <h2 className="text-2xl font-serif font-semibold mb-4 text-primary">Quick Actions</h2>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <Button
            asChild
            variant="outline"
            className="h-20 bg-accent text-accent-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
          >
            <Link href="/traffic-monitoring" className="flex flex-col items-center justify-center">
              <Search className="mb-2" />
              <span>Check Traffic</span>
            </Link>
          </Button>
          <Button
            asChild
            variant="outline"
            className="h-20 bg-accent text-accent-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
          >
            <Link href="/incident-reporting" className="flex flex-col items-center justify-center">
              <AlertTriangle className="mb-2" />
              <span>Report Incident</span>
            </Link>
          </Button>
          <Button
            asChild
            variant="outline"
            className="h-20 bg-accent text-accent-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
          >
            <Link href="/public-transport" className="flex flex-col items-center justify-center">
              <Clock className="mb-2" />
              <span>Transport Schedule</span>
            </Link>
          </Button>
          <Button
            asChild
            variant="outline"
            className="h-20 bg-accent text-accent-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
          >
            <Link href="/parking" className="flex flex-col items-center justify-center">
              <MapPin className="mb-2" />
              <span>Find Parking</span>
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}


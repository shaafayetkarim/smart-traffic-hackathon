import Link from "next/link"
import { Button } from "../components/ui/button"
import { MapPin, AlertTriangle, Car } from "lucide-react"

export default function Home() {
  return (
    <div className="container mx-auto px-4">
      {/* Hero Section */}
      <section className="py-20 text-center">
        <h1 className="text-4xl font-bold mb-4">Smart Traffic Management for a Smarter City</h1>
        <p className="text-xl mb-8">Efficient, safe, and sustainable urban mobility solutions</p>
        <div className="flex justify-center space-x-4">
          <Button asChild>
            <Link href="/traffic-monitoring">Check Traffic</Link>
          </Button>
          <Button asChild variant="outline">
            <Link href="/incident-reporting">Report Incident</Link>
          </Button>
          <Button asChild variant="outline">
            <Link href="/parking">Find Parking</Link>
          </Button>
        </div>
      </section>

      {/* Features Overview */}
      <section className="py-16">
        <h2 className="text-3xl font-bold text-center mb-12">Key Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <MapPin className="mx-auto h-12 w-12 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2">Real-Time Traffic</h3>
            <p>Get up-to-date information on traffic conditions across the city</p>
          </div>
          <div className="text-center">
            <AlertTriangle className="mx-auto h-12 w-12 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2">Incident Reporting</h3>
            <p>Report and view traffic incidents to help fellow commuters</p>
          </div>
          <div className="text-center">
            <Car className="mx-auto h-12 w-12 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2">Parking Availability</h3>
            <p>Find and reserve parking spots in real-time</p>
          </div>
        </div>
      </section>
    </div>
  )
}


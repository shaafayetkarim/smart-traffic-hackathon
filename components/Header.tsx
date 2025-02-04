import Link from "next/link"
import { Button } from "@/components/ui/button"

const Header = () => {
  return (
    <header className="bg-primary text-primary-foreground shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-serif font-bold">
          Smart Traffic
        </Link>
        <nav className="flex space-x-4">
          <ul className="flex space-x-4">
            <li>
              <Link href="/" className="hover:text-accent transition-colors">
                Home
              </Link>
            </li>
            <li>
              <Link href="/dashboard" className="hover:text-accent transition-colors">
                Dashboard
              </Link>
            </li>
            <li>
              <Link href="/traffic-monitoring" className="hover:text-accent transition-colors">
                Traffic Monitoring
              </Link>
            </li>
            <li>
              <Link href="/incident-reporting" className="hover:text-accent transition-colors">
                Incident Reporting
              </Link>
            </li>
            <li>
              <Link href="/public-transport" className="hover:text-accent transition-colors">
                Public Transport
              </Link>
            </li>
            <li>
              <Link href="/parking" className="hover:text-accent transition-colors">
                Parking
              </Link>
            </li>
          </ul>
        </nav>
        <Button asChild variant="secondary">
          <Link href="/auth">Login/Signup</Link>
        </Button>
      </div>
    </header>
  )
}

export default Header


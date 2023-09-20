"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"

import { SwitchCamera, CalendarClock, Grid } from "lucide-react"

const NavigationBar = () => {
  const pathname = usePathname();

  return (
    <nav className="fixed bottom-12 left-1/2 -translate-x-1/2 bg-white text-black p-4 rounded-lg">
      <ul className="flex gap-12">
        <li>
          <Link href="/" className={`${pathname==="/"&&'text-nasa-red'}`}>
            <SwitchCamera />
          </Link>
        </li>
        <li>
          <Link href="/daterange" className={`${pathname==="/daterange"&&'text-nasa-red'}`}>
            <CalendarClock />
          </Link>
        </li>
        <li>
          <Link href="/random" className={`${pathname==="/random"&&'text-nasa-red'}`}>
            <Grid />
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default NavigationBar
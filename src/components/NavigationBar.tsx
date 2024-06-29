"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavigationBar = () => {
  const pathname = usePathname();

  return (
    <nav className="py-8 mx-8 border-b-2 border-white">
      <ul className="max-w-7xl w-[90%] mx-auto flex gap-12 justify-end">
        <li>
          <Link href="/" className={`${pathname === "/" && "text-nasa-red"}`}>
            Home
          </Link>
        </li>
        <li>
          <Link
            href="/daterange"
            className={`${pathname === "/daterange" && "text-nasa-red"}`}
          >
            Date
          </Link>
        </li>
        <li>
          <Link
            href="/random"
            className={`${pathname === "/random" && "text-nasa-red"}`}
          >
            Random
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavigationBar;

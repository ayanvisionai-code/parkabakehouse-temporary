"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { name: "Menu", href: "/menu" },
    { name: "Locations", href: "/locations" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-parka-cream/95 backdrop-blur-md border-b border-parka-sand/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24">
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="relative h-14 w-32 flex items-center">
              <Image 
                src="/images/parka/branding/logo.jpg" 
                alt="Parka Bakehouse Logo" 
                fill
                className="object-contain object-left mix-blend-multiply"
                priority
              />
            </Link>
          </div>
          
          <div className="hidden md:flex space-x-10 items-center">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={cn(
                  "text-sm font-medium tracking-wide uppercase transition-colors hover:text-parka-terracotta relative",
                  pathname === link.href ? "text-parka-terracotta after:content-[''] after:absolute after:-bottom-2 after:left-1/2 after:-translate-x-1/2 after:w-1 after:h-1 after:bg-parka-terracotta after:rounded-full" : "text-parka-text"
                )}
              >
                {link.name}
              </Link>
            ))}
            <a
              href="https://linktr.ee/parkabakehouse"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-parka-terracotta text-white px-6 py-3 text-sm font-medium hover:bg-parka-brown transition-all duration-300 hover:shadow-md"
            >
              Order Now
            </a>
          </div>

          <div className="flex md:hidden items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-parka-text hover:text-parka-terracotta focus:outline-none"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-parka-cream border-b border-parka-sand absolute w-full left-0 shadow-lg">
          <div className="px-6 pt-4 pb-8 space-y-4 text-center">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block py-4 text-2xl font-display text-parka-brown hover:text-parka-terracotta border-b border-parka-sand/50"
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-6">
              <a
                href="https://linktr.ee/parkabakehouse"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
                className="block w-full text-center bg-parka-terracotta text-white px-6 py-4 text-lg font-medium hover:bg-parka-brown transition-colors"
              >
                Order Now
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}

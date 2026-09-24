"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Menu", href: "/menu" },
    { name: "Locations", href: "/locations" },
  ];

  return (
    <nav className={cn(
      "sticky top-0 z-50 w-full transition-all duration-500",
      scrolled ? "bg-parka-paper/95 backdrop-blur-md border-b border-parka-muted/30 py-2" : "bg-parka-paper py-4"
    )}>
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="relative h-12 w-32 flex items-center group">
              <Image 
                src="/images/parka/branding/logo.jpg" 
                alt="Parka Bakehouse Logo" 
                fill
                className="object-contain object-left mix-blend-multiply group-hover:opacity-80 transition-opacity duration-300"
                priority
              />
            </Link>
          </div>
          
          <div className="hidden md:flex space-x-12 items-center">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={cn(
                  "text-[13px] font-medium tracking-[0.15em] uppercase transition-colors hover:text-parka-terracotta relative py-2",
                  pathname === link.href ? "text-parka-terracotta after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-px after:bg-parka-terracotta" : "text-parka-brown"
                )}
              >
                {link.name}
              </Link>
            ))}
            <a
              href="https://linktr.ee/parkabakehouse"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-parka-terracotta text-parka-cream px-8 py-3.5 text-[13px] tracking-[0.1em] uppercase font-medium hover:bg-parka-clay transition-all duration-300 border border-transparent hover:border-parka-clay rounded-sm"
            >
              Order Now
            </a>
          </div>

          <div className="flex md:hidden items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-parka-brown hover:text-parka-terracotta focus:outline-none p-2"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={32} strokeWidth={1.5} /> : <Menu size={32} strokeWidth={1.5} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-parka-paper border-b border-parka-muted/30 absolute w-full left-0 shadow-2xl h-screen flex flex-col">
          <div className="px-8 pt-12 pb-8 flex flex-col space-y-8 flex-grow">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block text-5xl font-display text-parka-brown hover:text-parka-terracotta transition-colors"
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-12 mt-auto pb-24">
              <a
                href="https://linktr.ee/parkabakehouse"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
                className="block w-full text-center bg-parka-terracotta text-parka-cream px-6 py-5 text-sm tracking-[0.15em] uppercase font-medium hover:bg-parka-clay transition-colors rounded-sm"
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

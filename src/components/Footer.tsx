import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-parka-brown text-parka-cream pt-24 pb-12 border-t-[8px] border-parka-terracotta relative overflow-hidden">
      {/* Editorial handwritten accent */}
      <div className="absolute top-12 right-12 md:right-24 opacity-30 -rotate-6 pointer-events-none">
        <span className="font-accent text-5xl md:text-7xl text-parka-peach">baked fresh</span>
      </div>

      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 relative z-10">
        
        <div className="lg:col-span-5 flex flex-col justify-between">
          <div>
            <Link href="/" className="relative h-14 w-40 flex items-center mb-10 group">
              <Image 
                src="/images/parka/branding/logo.jpg" 
                alt="Parka Bakehouse Logo" 
                fill
                className="object-contain object-left mix-blend-screen opacity-90 invert group-hover:opacity-100 transition-opacity duration-500"
              />
            </Link>
            <p className="font-accent text-3xl md:text-4xl text-parka-peach mb-6 -rotate-2">
              ~ roll in dough with us ~
            </p>
            <p className="text-parka-muted/80 max-w-sm font-light leading-relaxed text-lg">
              Neighborhood bakehouse serving fresh dough, hearty plates, and specialty coffee. A space to stay awhile.
            </p>
          </div>
        </div>

        <div className="lg:col-span-4 flex flex-col">
          <h4 className="font-display text-2xl text-parka-peach mb-8 italic">Locations</h4>
          <ul className="space-y-8 text-parka-muted/90">
            <li>
              <Link href="/locations" className="group block">
                <span className="block font-display text-2xl text-parka-cream group-hover:text-parka-peach transition-colors duration-300 mb-1">Shajar, Aljada</span>
                <span className="text-[13px] tracking-widest uppercase opacity-70">Sharjah</span>
              </Link>
            </li>
            <li>
              <Link href="/locations" className="group block">
                <span className="block font-display text-2xl text-parka-cream group-hover:text-parka-peach transition-colors duration-300 mb-1">Nad Al Sheba Mall</span>
                <span className="text-[13px] tracking-widest uppercase opacity-70">Dubai</span>
              </Link>
            </li>
          </ul>
        </div>

        <div className="lg:col-span-3 flex flex-col">
          <h4 className="font-display text-2xl text-parka-peach mb-8 italic">Connect</h4>
          <ul className="space-y-6 text-parka-muted/90">
            <li>
              <a href="https://www.instagram.com/parkabakehouse/" target="_blank" rel="noopener noreferrer" className="font-medium text-lg hover:text-parka-peach transition-colors duration-300 flex items-center gap-3">
                <span className="w-8 h-px bg-parka-peach/50 block"></span>
                Instagram
              </a>
            </li>
            <li>
              <a href="https://linktr.ee/parkabakehouse" target="_blank" rel="noopener noreferrer" className="font-medium text-lg hover:text-parka-peach transition-colors duration-300 flex items-center gap-3">
                <span className="w-8 h-px bg-parka-peach/50 block"></span>
                Order & Menu
              </a>
            </li>
          </ul>
        </div>

      </div>
      
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 mt-24 pt-8 border-t border-parka-cream/10 text-sm text-parka-muted/50 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
        <p className="tracking-wide">&copy; {new Date().getFullYear()} Parka Bakehouse. All rights reserved.</p>
        <div className="flex gap-8 text-[13px] tracking-widest uppercase">
          <Link href="/menu" className="hover:text-parka-cream transition-colors duration-300">Menu</Link>
          <Link href="/locations" className="hover:text-parka-cream transition-colors duration-300">Locations</Link>
        </div>
      </div>
    </footer>
  );
}

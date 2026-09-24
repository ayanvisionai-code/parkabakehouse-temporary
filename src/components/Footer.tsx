import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-parka-brown text-parka-cream py-20 border-t-[6px] border-parka-terracotta relative overflow-hidden">
      <div className="absolute top-0 right-0 opacity-5 pointer-events-none translate-x-1/4 -translate-y-1/4">
        <svg width="400" height="400" viewBox="0 0 100 100" fill="currentColor"><path d="M50 0 C22.4 0 0 22.4 0 50 C0 77.6 22.4 100 50 100 C77.6 100 100 77.6 100 50 C100 22.4 77.6 0 50 0 Z M50 90 C27.9 90 10 72.1 10 50 C10 27.9 27.9 10 50 10 C72.1 10 90 27.9 90 50 C90 72.1 72.1 90 50 90 Z"/></svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-16 relative z-10">
        <div className="col-span-1 md:col-span-2">
          <Link href="/" className="relative h-12 w-32 flex items-center mb-6">
            <Image 
              src="/images/parka/branding/logo.jpg" 
              alt="Parka Bakehouse Logo" 
              fill
              className="object-contain object-left mix-blend-screen opacity-90 invert"
            />
          </Link>
          <p className="font-accent text-3xl text-parka-peach mb-6 -rotate-2">
            ~ roll in dough with us ~
          </p>
          <p className="text-parka-sand/70 max-w-sm font-light leading-relaxed">
            Neighborhood bakehouse serving fresh dough, hearty plates, and specialty coffee. A space to stay awhile.
          </p>
        </div>

        <div>
          <h4 className="font-display text-xl text-parka-peach mb-6 border-b border-parka-peach/20 pb-2 inline-block">Locations</h4>
          <ul className="space-y-4 text-parka-sand/80">
            <li>
              <Link href="/locations" className="hover:text-white transition-colors block">
                <span className="block font-medium text-white">Shajar, Aljada</span>
                <span className="text-sm opacity-80">Sharjah</span>
              </Link>
            </li>
            <li>
              <Link href="/locations" className="hover:text-white transition-colors block">
                <span className="block font-medium text-white">Nad Al Sheba Mall</span>
                <span className="text-sm opacity-80">Dubai</span>
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-display text-xl text-parka-peach mb-6 border-b border-parka-peach/20 pb-2 inline-block">Connect</h4>
          <ul className="space-y-4 text-parka-sand/80">
            <li>
              <a href="https://www.instagram.com/parkabakehouse/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors inline-flex items-center gap-2">
                <span>Instagram</span>
              </a>
            </li>
            <li>
              <a href="https://linktr.ee/parkabakehouse" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                Linktree / Order
              </a>
            </li>
          </ul>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20 pt-8 border-t border-white/10 text-sm text-parka-sand/50 flex flex-col md:flex-row justify-between items-center gap-4">
        <p>&copy; {new Date().getFullYear()} Parka Bakehouse.</p>
        <div className="flex gap-6">
          <Link href="/menu" className="hover:text-white transition-colors">Menu</Link>
          <Link href="/locations" className="hover:text-white transition-colors">Locations</Link>
        </div>
      </div>
    </footer>
  );
}

import Image from "next/image";
import { MapPin, Clock } from "lucide-react";

export default function Locations() {
  const locations = [
    {
      id: "shajar",
      name: "Shajar, Aljada",
      city: "Sharjah",
      image: "/images/parka/interior/interior-5.jpg",
      description: "Our greenhouse sanctuary. A bright, airy space perfect for morning coffee, weekend breakfasts, and slow afternoons. Experience our full bakery and signature hearty plates in a beautifully designed environment.",
      address: "Shajar, Aljada, Sharjah, United Arab Emirates",
      hours: "7:00 AM – 11:00 PM",
      mapUrl: "https://maps.google.com/maps?q=Parka+Bakehouse+Aljada",
      orderUrl: "https://drivu.co"
    },
    {
      id: "nad-al-sheba",
      name: "Nad Al Sheba",
      city: "Dubai",
      image: "/images/parka/interior/interior-6.jpg",
      description: "A warm, inviting retreat in the heart of Dubai. Drop in for our signature bakes, specialty coffee, and stay for the relaxed community vibe. Your local spot for fresh dough and good times.",
      address: "Nad Al Sheba Mall, Dubai, United Arab Emirates",
      hours: "8:00 AM – 11:00 PM",
      mapUrl: "https://maps.google.com/maps?q=Parka+Bakehouse+Nad+Al+Sheba",
      orderUrl: "https://drivu.co"
    }
  ];

  return (
    <div className="min-h-screen bg-parka-cream relative">
      {/* Decorative doodle background */}
      <div className="absolute top-40 left-10 opacity-10 pointer-events-none hidden lg:block">
        <svg width="200" height="200" viewBox="0 0 100 100" fill="none" stroke="var(--color-parka-terracotta)" strokeWidth="1"><circle cx="50" cy="50" r="40"/><path d="M50 10 L50 90 M10 50 L90 50"/></svg>
      </div>

      {/* Page Header */}
      <div className="py-24 text-center px-4 max-w-4xl mx-auto">
        <span className="font-accent text-3xl text-parka-terracotta mb-4 block -rotate-2">Find your Parka</span>
        <h1 className="text-6xl md:text-7xl font-display text-parka-brown mb-6">Our Locations</h1>
        <p className="text-parka-text/80 text-lg md:text-xl font-light leading-relaxed">
          Two beautiful spaces designed for community, coffee, and comfort. Roll in dough with us across the UAE.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-32 space-y-32">
        {locations.map((loc, index) => (
          <div key={loc.id} className={`flex flex-col ${index % 2 !== 0 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 lg:gap-24 items-center`}>
            {/* Image Side */}
            <div className="w-full lg:w-1/2 relative">
              <div className="absolute inset-0 bg-parka-terracotta/20 translate-x-4 translate-y-4"></div>
              <div className="relative aspect-[4/5] w-full overflow-hidden shadow-2xl bg-parka-sand">
                <Image 
                  src={loc.image}
                  alt={loc.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>

            {/* Content Side */}
            <div className="w-full lg:w-1/2 flex flex-col justify-center">
              <span className="uppercase tracking-widest text-sm text-parka-terracotta font-medium mb-4 block">
                {loc.city}
              </span>
              <h2 className="text-5xl md:text-6xl font-display text-parka-brown mb-6">{loc.name}</h2>
              <p className="text-xl text-parka-text/70 mb-10 leading-relaxed font-light">
                {loc.description}
              </p>
              
              <div className="space-y-8 mb-12">
                <div className="flex items-start gap-5">
                  <div className="w-10 h-10 rounded-full bg-parka-paper flex items-center justify-center shrink-0 border border-parka-sand">
                    <MapPin className="w-5 h-5 text-parka-terracotta" />
                  </div>
                  <div className="pt-2">
                    <h4 className="font-display text-2xl text-parka-brown mb-2">Address</h4>
                    <p className="text-parka-text/70 leading-relaxed">{loc.address}</p>
                  </div>
                </div>
                <div className="flex items-start gap-5">
                  <div className="w-10 h-10 rounded-full bg-parka-paper flex items-center justify-center shrink-0 border border-parka-sand">
                    <Clock className="w-5 h-5 text-parka-terracotta" />
                  </div>
                  <div className="pt-2">
                    <h4 className="font-display text-2xl text-parka-brown mb-2">Hours</h4>
                    <p className="text-parka-text/70">{loc.hours}</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href={loc.mapUrl} 
                  target="_blank" 
                  rel="noreferrer"
                  className="px-10 py-4 bg-parka-brown text-parka-cream font-medium text-center hover:bg-parka-terracotta transition-colors uppercase tracking-widest text-sm"
                >
                  Get Directions
                </a>
                <a 
                  href="https://linktr.ee/parkabakehouse" 
                  target="_blank" 
                  rel="noreferrer"
                  className="px-10 py-4 bg-parka-paper border border-parka-brown text-parka-brown font-medium text-center hover:bg-parka-sand transition-colors uppercase tracking-widest text-sm"
                >
                  Order / Pick Up
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

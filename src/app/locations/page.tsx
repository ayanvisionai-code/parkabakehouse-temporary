import Image from "next/image";

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
    <div className="min-h-screen bg-parka-cream relative overflow-hidden">
      {/* Decorative doodle background */}
      <div className="absolute top-40 left-10 opacity-20 pointer-events-none hidden lg:block text-parka-peach">
        <svg width="250" height="250" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="50" cy="50" r="40" strokeDasharray="4 4" /><path d="M50 10 L50 90 M10 50 L90 50"/></svg>
      </div>

      {/* Page Header */}
      <div className="pt-32 pb-24 text-center px-6 lg:px-12 max-w-[1440px] mx-auto relative z-10">
        <span className="font-accent text-4xl text-parka-terracotta mb-6 block -rotate-3 drop-shadow-sm">Find your Parka</span>
        <h1 className="text-7xl md:text-8xl lg:text-9xl font-display text-parka-brown mb-8 uppercase tracking-tight">Locations</h1>
        <p className="text-parka-text/70 text-xl md:text-2xl font-light leading-relaxed max-w-2xl mx-auto">
          Two beautiful spaces designed for community, coffee, and comfort. Roll in dough with us across the UAE.
        </p>
      </div>

      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 pb-40 space-y-40 relative z-10">
        {locations.map((loc, index) => (
          <div key={loc.id} className={`flex flex-col ${index % 2 !== 0 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-16 lg:gap-32 items-center`}>
            
            {/* Editorial Image Side */}
            <div className="w-full lg:w-1/2 relative">
              <div className="absolute inset-0 bg-parka-peach/20 translate-x-6 translate-y-6 hidden md:block"></div>
              <div className="relative aspect-[4/5] w-full overflow-hidden shadow-2xl bg-parka-sand z-10">
                <Image 
                  src={loc.image}
                  alt={loc.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              <div className="absolute -bottom-8 -right-8 z-20 opacity-80 hidden md:block text-parka-terracotta">
                 <svg width="100" height="100" viewBox="0 0 200 200" fill="none" stroke="currentColor" strokeWidth="3"><path d="M20,100 Q80,20 180,100 T180,180" /></svg>
              </div>
            </div>

            {/* Content Side */}
            <div className="w-full lg:w-1/2 flex flex-col justify-center">
              <span className="uppercase tracking-[0.2em] text-sm text-parka-terracotta font-medium mb-6 block">
                {loc.city}
              </span>
              <h2 className="text-6xl md:text-7xl font-display text-parka-brown mb-8 leading-none italic pr-4">{loc.name}</h2>
              <p className="text-2xl text-parka-text/70 mb-12 leading-relaxed font-light">
                {loc.description}
              </p>
              
              <div className="space-y-10 mb-16 border-l-2 border-parka-terracotta/30 pl-8">
                <div>
                  <h4 className="uppercase tracking-[0.15em] text-xs font-bold text-parka-terracotta mb-3">Address</h4>
                  <p className="text-parka-brown text-xl leading-relaxed">{loc.address}</p>
                </div>
                <div>
                  <h4 className="uppercase tracking-[0.15em] text-xs font-bold text-parka-terracotta mb-3">Hours</h4>
                  <p className="text-parka-brown text-xl">{loc.hours}</p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-6">
                <a 
                  href={loc.mapUrl} 
                  target="_blank" 
                  rel="noreferrer"
                  className="px-10 py-5 bg-parka-brown text-parka-cream font-medium text-center hover:bg-parka-terracotta transition-colors uppercase tracking-[0.15em] text-sm rounded-sm"
                >
                  Get Directions
                </a>
                <a 
                  href="https://linktr.ee/parkabakehouse" 
                  target="_blank" 
                  rel="noreferrer"
                  className="px-10 py-5 bg-transparent border border-parka-brown text-parka-brown font-medium text-center hover:bg-parka-brown hover:text-parka-cream transition-colors uppercase tracking-[0.15em] text-sm rounded-sm"
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

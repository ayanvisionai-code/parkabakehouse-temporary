import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col w-full overflow-hidden bg-parka-cream">
      
      {/* HERO SECTION - Premium, Image First */}
      <section className="relative h-[90vh] min-h-[700px] w-full flex items-center justify-center overflow-hidden">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline
          poster="/images/parka/lifestyle/lifestyle-7.jpg"
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/images/parka/lifestyle/hero-video.mp4" type="video/mp4" />
        </video>
        
        {/* Subtle, localized gradient for text readability, not a generic overlay */}
        <div className="absolute inset-0 bg-parka-brown/30 mix-blend-multiply" />
        
        <div className="relative z-10 w-full max-w-[1440px] mx-auto px-6 lg:px-12 flex flex-col items-center justify-center text-center mt-12">
          
          <div className="mb-6 relative">
            <span className="font-accent text-parka-peach text-4xl md:text-5xl -rotate-3 block drop-shadow-sm">
              ~ roll in dough with us ~
            </span>
          </div>

          <h1 className="text-7xl md:text-9xl lg:text-[11rem] font-display text-parka-paper leading-[0.85] tracking-tight drop-shadow-md mb-12 uppercase">
            Parka
          </h1>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 w-full max-w-lg mx-auto">
            <Link href="/menu" className="w-full sm:w-auto px-12 py-5 bg-parka-terracotta text-parka-paper font-medium hover:bg-parka-clay transition-all duration-500 tracking-[0.15em] uppercase text-xs sm:text-sm rounded-sm">
              Explore Menu
            </Link>
            <Link href="/locations" className="w-full sm:w-auto px-12 py-5 bg-transparent border border-parka-paper text-parka-paper font-medium hover:bg-parka-paper hover:text-parka-brown transition-all duration-500 tracking-[0.15em] uppercase text-xs sm:text-sm rounded-sm backdrop-blur-sm">
              Find Us
            </Link>
          </div>
        </div>
      </section>

      {/* STORY / INTRO SECTION */}
      <section className="py-32 lg:py-48 px-6 lg:px-12 max-w-[1440px] mx-auto w-full relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">
          
          {/* Typography / Copy block */}
          <div className="lg:col-span-5 flex flex-col justify-center order-2 lg:order-1">
            <h2 className="text-6xl md:text-7xl lg:text-8xl font-display text-parka-brown mb-8 leading-[1.05]">
              Fresh <br/>
              from the <br/>
              <span className="text-parka-terracotta italic pr-4">dough.</span>
            </h2>
            <p className="text-2xl text-parka-brown/80 mb-8 leading-relaxed font-light">
              Neighborhood bakehouse serving fresh dough, hearty plates, and specialty coffee. 
            </p>
            <p className="text-lg text-parka-text/60 mb-12 leading-relaxed">
              We believe in the slow art of baking. Whether you're grabbing your morning coffee or settling in for a hearty breakfast with friends, Parka is your space to slow down and savor the moment.
            </p>
            <div>
              <a href="https://linktr.ee/parkabakehouse" target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-parka-terracotta font-medium hover:text-parka-clay transition-colors uppercase tracking-[0.15em] text-sm border-b-2 border-parka-terracotta/30 hover:border-parka-clay pb-1">
                Order Online 
              </a>
            </div>
          </div>

          {/* Editorial Image Composition */}
          <div className="lg:col-span-7 relative order-1 lg:order-2">
            {/* Hand-drawn accent */}
            <div className="absolute -top-16 -right-8 z-0 text-parka-peach opacity-60 hidden md:block">
              <svg width="200" height="200" viewBox="0 0 200 200" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20,100 Q80,20 180,100 T180,180" /><circle cx="150" cy="50" r="10" strokeDasharray="4 4" /></svg>
            </div>
            
            <div className="relative aspect-[3/4] w-[90%] md:w-[75%] ml-auto overflow-hidden z-10">
              <Image 
                src="/images/parka/food/food-2.jpg"
                alt="Signature Parka Bake"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            
            <div className="absolute -bottom-12 left-0 w-[55%] aspect-square overflow-hidden border-[12px] border-parka-cream z-20 shadow-2xl">
              <Image 
                src="/images/parka/food/food-1.jpg"
                alt="Parka Coffee"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 50vw, 30vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* SIGNATURE FOOD SECTION */}
      <section className="py-32 lg:py-40 bg-parka-paper relative">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12 relative z-10">
          
          <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
            <div className="max-w-2xl">
              <span className="font-accent text-4xl text-parka-terracotta mb-6 block">Hand-shaped, oven-baked</span>
              <h2 className="text-6xl md:text-7xl font-display text-parka-brown">Our Signatures</h2>
            </div>
            <Link href="/menu" className="hidden md:inline-flex items-center px-10 py-4 border border-parka-brown text-parka-brown hover:bg-parka-brown hover:text-parka-paper transition-colors uppercase tracking-[0.15em] text-sm rounded-sm">
              View Full Menu
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 lg:gap-x-12 gap-y-16">
            {[
              {
                title: "Croissants",
                image: "/images/parka/food/food-3.jpg",
                desc: "Flaky, buttery, and baked fresh every single morning."
              },
              {
                title: "Hearty Plates",
                image: "/images/parka/food/food-4.jpg",
                desc: "From folded eggs to fresh flatbreads, crafted with intention."
              },
              {
                title: "Specialty Coffee",
                image: "/images/parka/interior/interior-5.jpg",
                desc: "Expertly roasted, poured with precision."
              }
            ].map((item, i) => (
              <Link href="/menu" key={i} className="group cursor-pointer flex flex-col">
                <div className="relative aspect-[4/5] w-full overflow-hidden mb-8 bg-parka-sand">
                  <Image 
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-[1.5s] group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <h3 className="text-4xl font-display text-parka-brown mb-4 italic group-hover:text-parka-terracotta transition-colors">{item.title}</h3>
                <p className="text-parka-text/70 leading-relaxed font-light text-lg">{item.desc}</p>
              </Link>
            ))}
          </div>
          
          <div className="mt-20 md:hidden flex justify-center">
            <Link href="/menu" className="inline-flex items-center px-10 py-5 border border-parka-brown text-parka-brown hover:bg-parka-brown hover:text-parka-paper transition-colors uppercase tracking-[0.15em] text-sm w-full justify-center rounded-sm">
              View Full Menu
            </Link>
          </div>
        </div>
      </section>

      {/* INSTAGRAM / SOCIAL SECTION - EDITORIAL COLLAGE */}
      <section className="py-32 lg:py-48 bg-parka-brown text-parka-paper overflow-hidden relative">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12 mb-20 md:mb-32 flex flex-col md:flex-row justify-between items-end gap-12">
          <div>
            <p className="font-accent text-parka-peach text-4xl md:text-5xl mb-6 -rotate-2">From the feed</p>
            <h2 className="text-6xl md:text-8xl font-display leading-none">@parkabakehouse</h2>
          </div>
          <a href="https://www.instagram.com/parkabakehouse/" target="_blank" rel="noreferrer" className="inline-block border-b-2 border-parka-peach/50 text-parka-peach pb-2 hover:text-parka-cream hover:border-parka-cream transition-colors uppercase tracking-[0.2em] text-sm font-medium whitespace-nowrap">
            Follow along
          </a>
        </div>
        
        {/* Editorial Grid inspired by IG layout */}
        <div className="px-6 lg:px-12 max-w-[1600px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 auto-rows-[300px] md:auto-rows-[400px]">
            
            {/* Large Feature */}
            <a href="https://www.instagram.com/parkabakehouse/" target="_blank" rel="noreferrer" className="relative block overflow-hidden group md:col-span-6 row-span-1 md:row-span-2 bg-parka-sand">
              <Image src="/images/parka/lifestyle/lifestyle-7.jpg" alt="Parka Lifestyle" fill className="object-cover transition-transform duration-[2s] group-hover:scale-105" />
            </a>
            
            {/* Standard Squares */}
            <a href="https://www.instagram.com/parkabakehouse/" target="_blank" rel="noreferrer" className="relative block overflow-hidden group md:col-span-3 bg-parka-sand">
              <Image src="/images/parka/interior/interior-6.jpg" alt="Parka Interior" fill className="object-cover transition-transform duration-[2s] group-hover:scale-105" />
            </a>
            
            {/* Text/Doodle Tile */}
            <a href="https://www.instagram.com/parkabakehouse/" target="_blank" rel="noreferrer" className="relative flex flex-col items-center justify-center p-8 text-center group bg-parka-terracotta text-parka-paper md:col-span-3 hover:bg-parka-clay transition-colors duration-500">
               <span className="font-accent text-5xl mb-6 -rotate-6">baked fresh</span>
               <span className="uppercase tracking-[0.2em] text-sm border-t border-parka-paper/30 pt-6">Every Day</span>
            </a>
            
            <a href="https://www.instagram.com/parkabakehouse/" target="_blank" rel="noreferrer" className="relative block overflow-hidden group md:col-span-3 bg-parka-sand">
              <Image src="/images/parka/lifestyle/lifestyle-10.jpg" alt="Parka Coffee" fill className="object-cover transition-transform duration-[2s] group-hover:scale-105" />
            </a>

            <a href="https://www.instagram.com/parkabakehouse/" target="_blank" rel="noreferrer" className="relative block overflow-hidden group md:col-span-3 bg-parka-sand">
              <Image src="/images/parka/lifestyle/lifestyle-8.jpg" alt="Parka Moment" fill className="object-cover transition-transform duration-[2s] group-hover:scale-105" />
            </a>

          </div>
        </div>
      </section>
    </div>
  );
}

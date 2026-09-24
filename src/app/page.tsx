import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col w-full overflow-hidden bg-parka-cream">
      {/* HERO SECTION */}
      <section className="relative h-[90vh] min-h-[650px] w-full bg-parka-brown flex items-center justify-center overflow-hidden">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline
          poster="/images/parka/food/food-1.jpg"
          className="absolute inset-0 w-full h-full object-cover opacity-70"
        >
          <source src="/images/parka/lifestyle/hero-video.mp4" type="video/mp4" />
        </video>
        
        {/* Subtle terracotta/brown gradient to ensure text readability without looking generic */}
        <div className="absolute inset-0 bg-gradient-to-t from-parka-brown/80 via-parka-brown/20 to-transparent mix-blend-multiply" />
        
        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto mt-20 flex flex-col items-center">
          <span className="font-accent text-parka-peach text-3xl md:text-4xl -rotate-3 mb-6 block drop-shadow-md">
            ~ roll in dough with us ~
          </span>
          <h1 className="text-6xl md:text-8xl lg:text-[10rem] font-display text-parka-cream leading-none tracking-tight drop-shadow-lg mb-8">
            PARKA
          </h1>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-8">
            <Link href="/menu" className="w-full sm:w-auto px-10 py-4 bg-parka-terracotta text-white font-medium hover:bg-parka-cream hover:text-parka-terracotta transition-all duration-300 shadow-xl tracking-wide uppercase text-sm">
              Explore Menu
            </Link>
            <Link href="/locations" className="w-full sm:w-auto px-10 py-4 bg-transparent border-2 border-parka-cream text-parka-cream font-medium hover:bg-parka-cream hover:text-parka-brown transition-all duration-300 tracking-wide uppercase text-sm">
              Find Us
            </Link>
          </div>
        </div>
      </section>

      {/* STORY / INTRO SECTION */}
      <section className="py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full relative">
        {/* Subtle doodle */}
        <div className="absolute top-12 right-12 opacity-20 text-parka-terracotta hidden lg:block">
          <svg width="120" height="120" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2"><path d="M10,50 Q25,20 50,50 T90,50" /><path d="M30,30 Q50,10 70,30" /></svg>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 items-center">
          <div className="md:col-span-5 flex flex-col justify-center">
            <h2 className="text-5xl md:text-7xl font-display text-parka-brown mb-6 leading-[1.1]">
              Fresh <br/>
              from the <br/>
              <span className="text-parka-terracotta italic font-display">dough.</span>
            </h2>
            <div className="w-16 h-1 bg-parka-terracotta mb-10"></div>
            <p className="text-xl text-parka-text/80 mb-6 leading-relaxed font-light">
              Neighborhood bakehouse serving fresh dough, hearty plates, and specialty coffee. 
            </p>
            <p className="text-lg text-parka-text/70 mb-10 leading-relaxed">
              We believe in the slow art of baking. Whether you're grabbing your morning coffee or settling in for a hearty breakfast with friends, Parka is your space to slow down and savor the moment.
            </p>
            <a href="https://linktr.ee/parkabakehouse" target="_blank" rel="noopener noreferrer" className="group inline-flex items-center text-parka-terracotta font-medium hover:text-parka-brown transition-colors uppercase tracking-widest text-sm">
              Order Online 
              <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-2 transition-transform" />
            </a>
          </div>
          <div className="md:col-span-7 relative">
            <div className="relative aspect-[3/4] w-[85%] ml-auto rounded-sm overflow-hidden shadow-2xl rotate-1 hover:rotate-0 transition-transform duration-700">
              <Image 
                src="/images/parka/food/food-2.jpg"
                alt="Signature Parka Bake"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className="absolute -bottom-10 left-0 w-1/2 aspect-square rounded-sm overflow-hidden shadow-xl border-8 border-parka-cream -rotate-3 z-10">
              <Image 
                src="/images/parka/food/food-1.jpg"
                alt="Parka Coffee"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* SIGNATURE FOOD SECTION */}
      <section className="py-32 bg-parka-paper border-y border-parka-sand relative">
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(var(--color-parka-brown) 1px, transparent 1px)', backgroundSize: '32px 32px' }}></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <div className="max-w-xl">
              <span className="font-accent text-3xl text-parka-terracotta mb-4 block">Hand-shaped, oven-baked</span>
              <h2 className="text-5xl md:text-6xl font-display text-parka-brown">Our Signatures</h2>
            </div>
            <Link href="/menu" className="hidden md:inline-flex items-center px-8 py-3 border border-parka-brown text-parka-brown hover:bg-parka-brown hover:text-parka-cream transition-colors uppercase tracking-widest text-sm">
              View Full Menu
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
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
                <div className="relative aspect-[4/5] w-full overflow-hidden mb-6 bg-parka-sand shadow-lg">
                  <Image 
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-1000 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-parka-brown/0 group-hover:bg-parka-brown/10 transition-colors duration-500" />
                </div>
                <h3 className="text-3xl font-display text-parka-brown mb-3 group-hover:text-parka-terracotta transition-colors">{item.title}</h3>
                <p className="text-parka-text/70 leading-relaxed font-light">{item.desc}</p>
              </Link>
            ))}
          </div>
          
          <div className="mt-16 md:hidden flex justify-center">
            <Link href="/menu" className="inline-flex items-center px-10 py-4 border border-parka-brown text-parka-brown hover:bg-parka-brown hover:text-parka-cream transition-colors uppercase tracking-widest text-sm w-full justify-center">
              View Full Menu
            </Link>
          </div>
        </div>
      </section>

      {/* INSTAGRAM / SOCIAL SECTION - EDITORIAL COLLAGE */}
      <section className="py-32 bg-parka-cream text-parka-brown overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 text-center">
          <p className="font-accent text-parka-terracotta text-3xl mb-4 -rotate-2">From the feed</p>
          <h2 className="text-5xl md:text-7xl font-display mb-8">@parkabakehouse</h2>
          <a href="https://www.instagram.com/parkabakehouse/" target="_blank" rel="noreferrer" className="inline-block border-b-2 border-parka-terracotta text-parka-brown pb-1 hover:text-parka-terracotta transition-colors uppercase tracking-widest text-sm font-medium">
            Follow along
          </a>
        </div>
        
        {/* Editorial Grid inspired by IG layout */}
        <div className="px-4 max-w-7xl mx-auto relative">
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 auto-rows-[200px] md:auto-rows-[300px]">
            {/* Large Feature */}
            <a href="https://www.instagram.com/parkabakehouse/" target="_blank" rel="noreferrer" className="relative block overflow-hidden group col-span-2 row-span-2 bg-parka-sand shadow-sm">
              <Image src="/images/parka/lifestyle/lifestyle-7.jpg" alt="Parka Instagram" fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
            </a>
            
            {/* Standard Squares */}
            <a href="https://www.instagram.com/parkabakehouse/" target="_blank" rel="noreferrer" className="relative block overflow-hidden group bg-parka-sand shadow-sm">
              <Image src="/images/parka/interior/interior-6.jpg" alt="Parka Interior" fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
            </a>
            
            <a href="https://www.instagram.com/parkabakehouse/" target="_blank" rel="noreferrer" className="relative block overflow-hidden group bg-parka-sand shadow-sm">
              <Image src="/images/parka/lifestyle/lifestyle-8.jpg" alt="Parka Lifestyle" fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
            </a>
            
            {/* Text/Doodle Tile */}
            <a href="https://www.instagram.com/parkabakehouse/" target="_blank" rel="noreferrer" className="relative flex flex-col items-center justify-center p-6 text-center group bg-parka-terracotta text-parka-cream shadow-sm">
               <span className="font-accent text-4xl mb-4 rotate-3">baked fresh</span>
               <span className="uppercase tracking-widest text-xs">Every Day</span>
            </a>
            
            <a href="https://www.instagram.com/parkabakehouse/" target="_blank" rel="noreferrer" className="relative block overflow-hidden group bg-parka-sand shadow-sm">
              <Image src="/images/parka/lifestyle/lifestyle-10.jpg" alt="Parka Coffee" fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

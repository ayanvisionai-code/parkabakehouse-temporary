"use client";

import { useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

const menuData = {
  shajar: [
    {
      category: "Croissants",
      image: "/images/parka/food/food-3.jpg",
      items: [
        { name: "Parka Croissant", description: "Our signature flaky, buttery croissant baked fresh daily.", price: "22" },
        { name: "Akkawi Croissant", description: "Savoury cheese and herbs wrapped in our classic dough.", price: "26" },
        { name: "Keema Samosa Croissant", description: "A fusion of spiced minced meat in flaky pastry.", price: "32" },
        { name: "Cookie Croissant", description: "The best of both worlds – gooey cookie meets crisp croissant.", price: "30" }
      ]
    },
    {
      category: "Hearty Plates",
      image: "/images/parka/food/food-4.jpg",
      items: [
        { name: "Folded Eggs with Chilli Oil", description: "Soft scrambled eggs on toasted sourdough with house-made chilli oil.", price: "45" },
        { name: "Avocado on Zaatar Labneh", description: "Fresh avocado, creamy labneh, zaatar, and pomegranate on toast.", price: "52" },
        { name: "Shakshouka", description: "Baked eggs in a rich, spiced tomato and bell pepper sauce.", price: "55" }
      ]
    },
    {
      category: "Coffee & Drinks",
      image: "/images/parka/food/food-1.jpg",
      items: [
        { name: "Passionfruit Americano", description: "Our signature refreshing coffee mocktail.", price: "28" },
        { name: "Flat White", description: "Double shot of espresso with micro-foamed milk.", price: "24" },
        { name: "Spanish Latte", description: "Espresso with condensed milk for a sweet, creamy finish.", price: "28" },
        { name: "V60 Pour Over", description: "Single-origin filter coffee.", price: "32" }
      ]
    }
  ],
  nad: [
    {
      category: "Croissants",
      image: "/images/parka/food/food-3.jpg",
      items: [
        { name: "Parka Croissant", description: "Our signature flaky, buttery croissant baked fresh daily.", price: "22" },
        { name: "Akkawi Croissant", description: "Savoury cheese and herbs wrapped in our classic dough.", price: "26" },
        { name: "Chocolate Croissant", description: "Rich dark chocolate wrapped in our classic dough.", price: "28" },
      ]
    },
    {
      category: "Hearty Plates",
      image: "/images/parka/food/food-4.jpg",
      items: [
        { name: "Folded Eggs with Chilli Oil", description: "Soft scrambled eggs on toasted sourdough with house-made chilli oil.", price: "45" },
        { name: "Avocado on Zaatar Labneh", description: "Fresh avocado, creamy labneh, zaatar, and pomegranate on toast.", price: "52" },
      ]
    }
  ]
};

export default function MenuPage() {
  const [activeLocation, setActiveLocation] = useState<"shajar" | "nad">("shajar");

  return (
    <div className="min-h-screen bg-parka-paper relative">
      
      <div className="absolute top-0 right-0 w-full h-[50vh] bg-parka-cream rounded-bl-[100px] pointer-events-none z-0"></div>

      {/* Header */}
      <div className="pt-32 pb-24 text-center px-6 max-w-[1440px] mx-auto relative z-10">
        <span className="font-accent text-4xl text-parka-terracotta mb-8 block rotate-2 drop-shadow-sm">Made from dough. Made with love.</span>
        <h1 className="text-7xl md:text-9xl font-display text-parka-brown mb-8 uppercase tracking-tight">Our Menu</h1>
        <p className="text-parka-text/70 text-xl md:text-2xl font-light max-w-2xl mx-auto">
          Crafted with intention. From our signature bakes to our hearty plates.
        </p>
      </div>

      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 pb-40 relative z-10">
        
        {/* Location Tabs */}
        <div className="flex justify-center mb-32">
          <div className="inline-flex flex-wrap justify-center gap-6">
            <button
              onClick={() => setActiveLocation("shajar")}
              className={cn(
                "px-12 py-5 font-medium transition-all duration-300 uppercase tracking-[0.15em] text-sm border-b-2",
                activeLocation === "shajar" 
                  ? "border-parka-terracotta text-parka-terracotta" 
                  : "border-transparent text-parka-brown hover:border-parka-terracotta/50"
              )}
            >
              Shajar, Aljada
            </button>
            <button
              onClick={() => setActiveLocation("nad")}
              className={cn(
                "px-12 py-5 font-medium transition-all duration-300 uppercase tracking-[0.15em] text-sm border-b-2",
                activeLocation === "nad" 
                  ? "border-parka-terracotta text-parka-terracotta" 
                  : "border-transparent text-parka-brown hover:border-parka-terracotta/50"
              )}
            >
              Nad Al Sheba
            </button>
          </div>
        </div>

        {/* Menu Content - Editorial Style */}
        <div className="space-y-40">
          {menuData[activeLocation].map((section, idx) => (
            <div key={idx} className={`flex flex-col ${idx % 2 !== 0 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-16 lg:gap-32`}>
              
              {/* Category Image */}
              <div className="w-full lg:w-5/12">
                <div className="relative aspect-[3/4] w-full bg-parka-sand shadow-xl">
                  <Image src={section.image} alt={section.category} fill className="object-cover" sizes="(max-width: 1024px) 100vw, 40vw" />
                  
                  {/* Editorial label overlapping */}
                  <div className="absolute -bottom-8 -right-8 bg-parka-cream p-8 shadow-2xl z-10 hidden md:block">
                    <span className="font-accent text-5xl text-parka-terracotta -rotate-6 block">{section.category}</span>
                  </div>
                </div>
              </div>

              {/* Category Items */}
              <div className="w-full lg:w-7/12 flex flex-col justify-center py-8">
                <h2 className="text-6xl font-display text-parka-brown mb-16 md:hidden italic">{section.category}</h2>
                <div className="space-y-12">
                  {section.items.map((item, itemIdx) => (
                    <div key={itemIdx} className="group pb-8">
                      <div className="flex justify-between items-baseline mb-4 gap-6">
                        <h3 className="text-3xl lg:text-4xl font-display text-parka-brown">{item.name}</h3>
                        <div className="grow border-b-2 border-dotted border-parka-muted/50 relative -top-3"></div>
                        <div className="flex items-baseline gap-1 text-parka-terracotta shrink-0">
                          <span className="text-xs uppercase tracking-widest font-bold">AED</span>
                          <span className="font-display text-2xl font-medium">{item.price}</span>
                        </div>
                      </div>
                      <p className="text-parka-text/70 leading-relaxed font-light text-xl pr-12">{item.description}</p>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

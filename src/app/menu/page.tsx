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
        { name: "Parka Croissant", description: "Our signature flaky, buttery croissant baked fresh daily.", price: "AED 22" },
        { name: "Akkawi Croissant", description: "Savoury cheese and herbs wrapped in our classic dough.", price: "AED 26" },
        { name: "Keema Samosa Croissant", description: "A fusion of spiced minced meat in flaky pastry.", price: "AED 32" },
        { name: "Cookie Croissant", description: "The best of both worlds – gooey cookie meets crisp croissant.", price: "AED 30" }
      ]
    },
    {
      category: "Hearty Plates",
      image: "/images/parka/food/food-4.jpg",
      items: [
        { name: "Folded Eggs with Chilli Oil", description: "Soft scrambled eggs on toasted sourdough with house-made chilli oil.", price: "AED 45" },
        { name: "Avocado on Zaatar Labneh", description: "Fresh avocado, creamy labneh, zaatar, and pomegranate on toast.", price: "AED 52" },
        { name: "Shakshouka", description: "Baked eggs in a rich, spiced tomato and bell pepper sauce.", price: "AED 55" }
      ]
    },
    {
      category: "Coffee & Drinks",
      image: "/images/parka/food/food-1.jpg",
      items: [
        { name: "Passionfruit Americano", description: "Our signature refreshing coffee mocktail.", price: "AED 28" },
        { name: "Flat White", description: "Double shot of espresso with micro-foamed milk.", price: "AED 24" },
        { name: "Spanish Latte", description: "Espresso with condensed milk for a sweet, creamy finish.", price: "AED 28" },
        { name: "V60 Pour Over", description: "Single-origin filter coffee.", price: "AED 32" }
      ]
    }
  ],
  nad: [
    {
      category: "Croissants",
      image: "/images/parka/food/food-3.jpg",
      items: [
        { name: "Parka Croissant", description: "Our signature flaky, buttery croissant baked fresh daily.", price: "AED 22" },
        { name: "Akkawi Croissant", description: "Savoury cheese and herbs wrapped in our classic dough.", price: "AED 26" },
        { name: "Chocolate Croissant", description: "Rich dark chocolate wrapped in our classic dough.", price: "AED 28" },
      ]
    },
    {
      category: "Hearty Plates",
      image: "/images/parka/food/food-4.jpg",
      items: [
        { name: "Folded Eggs with Chilli Oil", description: "Soft scrambled eggs on toasted sourdough with house-made chilli oil.", price: "AED 45" },
        { name: "Avocado on Zaatar Labneh", description: "Fresh avocado, creamy labneh, zaatar, and pomegranate on toast.", price: "AED 52" },
      ]
    }
  ]
};

export default function MenuPage() {
  const [activeLocation, setActiveLocation] = useState<"shajar" | "nad">("shajar");

  return (
    <div className="min-h-screen bg-parka-paper">
      {/* Header */}
      <div className="py-24 text-center px-4 relative max-w-4xl mx-auto">
        <span className="font-accent text-3xl text-parka-terracotta mb-6 block rotate-2">Made from dough. Made with love.</span>
        <h1 className="text-6xl md:text-8xl font-display text-parka-brown mb-6">Our Menu</h1>
        <p className="text-parka-text/70 text-xl font-light">
          Crafted with intention. From our signature bakes to our hearty plates.
        </p>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-32">
        {/* Location Tabs */}
        <div className="flex justify-center mb-24">
          <div className="inline-flex flex-wrap justify-center gap-4">
            <button
              onClick={() => setActiveLocation("shajar")}
              className={cn(
                "px-10 py-4 font-medium transition-all duration-300 uppercase tracking-widest text-sm border-2",
                activeLocation === "shajar" 
                  ? "bg-parka-brown text-parka-cream border-parka-brown" 
                  : "bg-transparent text-parka-brown border-parka-sand hover:border-parka-brown"
              )}
            >
              Shajar, Aljada
            </button>
            <button
              onClick={() => setActiveLocation("nad")}
              className={cn(
                "px-10 py-4 font-medium transition-all duration-300 uppercase tracking-widest text-sm border-2",
                activeLocation === "nad" 
                  ? "bg-parka-brown text-parka-cream border-parka-brown" 
                  : "bg-transparent text-parka-brown border-parka-sand hover:border-parka-brown"
              )}
            >
              Nad Al Sheba
            </button>
          </div>
        </div>

        {/* Menu Content - Editorial Style */}
        <div className="space-y-32">
          {menuData[activeLocation].map((section, idx) => (
            <div key={idx} className={`flex flex-col ${idx % 2 !== 0 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 lg:gap-20`}>
              
              {/* Category Image */}
              <div className="w-full lg:w-5/12">
                <div className="relative aspect-[3/4] w-full bg-parka-sand shadow-xl">
                  <Image src={section.image} alt={section.category} fill className="object-cover" sizes="(max-width: 1024px) 100vw, 40vw" />
                  <div className="absolute -bottom-6 -right-6 bg-parka-cream border border-parka-sand p-6 shadow-lg z-10 hidden md:block">
                    <span className="font-accent text-3xl text-parka-terracotta -rotate-6 block">{section.category}</span>
                  </div>
                </div>
              </div>

              {/* Category Items */}
              <div className="w-full lg:w-7/12 flex flex-col justify-center py-8">
                <h2 className="text-5xl font-display text-parka-brown mb-12 md:hidden">{section.category}</h2>
                <div className="space-y-12">
                  {section.items.map((item, itemIdx) => (
                    <div key={itemIdx} className="group border-b border-parka-sand/60 pb-8 last:border-0">
                      <div className="flex justify-between items-baseline mb-3 gap-4">
                        <h3 className="text-2xl font-display text-parka-brown">{item.name}</h3>
                        <div className="grow border-b border-dashed border-parka-sand/50 hidden sm:block relative -top-2"></div>
                        <span className="font-medium text-parka-terracotta whitespace-nowrap shrink-0">{item.price}</span>
                      </div>
                      <p className="text-parka-text/70 leading-relaxed font-light text-lg">{item.description}</p>
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

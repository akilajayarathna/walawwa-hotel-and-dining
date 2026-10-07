"use client";

import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Star } from "lucide-react";
import GarlandBorder from "@/components/GarlandBorder";

const reviews = [
  {
    name: "Sarah Mitchell",
    text: "The most peaceful stay of our trip. Waking up to mist over the hills, then tea on the veranda, was perfect.",
  },
  {
    name: "Nuwan Perera",
    text: "The rice and curry was the best I have had. The staff made us feel like family.",
  },
  {
    name: "Anika Sharma",
    text: "Beautiful carved woodwork, spotless rooms and a warm welcome. The Kandyan dance evening was a highlight.",
  },
  {
    name: "Thomas Keller",
    text: "A rare place that feels traditional and comfortable at the same time. We are already planning our return.",
  },
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((current) => (current + 1) % reviews.length);
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative z-10 bg-crimson px-6 py-20 text-center text-ivory md:py-28">
              
    <GarlandBorder side="left" />
    <GarlandBorder side="right" />

      <div className="mx-auto max-w-3xl">
        <p className="text-sm uppercase tracking-[0.3em] text-gold">
          Guest Reviews
        </p>

        <div className="mt-6 flex items-center justify-center gap-3">
          <div className="flex gap-1">
            {[1, 2, 3, 4, 5].map((n) => (
              <Star key={n} size={22} className="fill-gold text-gold" />
            ))}
          </div>
          <span className="text-2xl text-gold">4.9</span>
        </div>

        <div className="mx-auto my-6 h-px w-24 bg-gold"></div>

        <div className="flex min-h-[220px] items-center justify-center md:min-h-[180px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              <p className="font-heading text-2xl italic md:text-3xl">
                "{reviews[index].text}"
              </p>
              <p className="mt-6 text-sm uppercase tracking-widest text-gold">
                {reviews[index].name}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="mt-8 flex justify-center gap-3">
          {reviews.map((review, i) => (
            <button
              key={review.name}
              onClick={() => setIndex(i)}
              aria-label={`Show review ${i + 1}`}
              className={`h-2.5 w-2.5 rounded-full transition-colors ${
                i === index ? "bg-gold" : "bg-ivory/30 hover:bg-ivory/60"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
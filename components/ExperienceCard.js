"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function ExperienceCard({ title, tagline, image, href, index = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className="h-full"
    >
      <Link
        href={href}
        className="group relative block aspect-3/4 overflow-hidden rounded-lg"
      >
        <Image
          src={image}
          alt={title}
          fill
          sizes="(min-width: 768px) 33vw, 100vw"
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-linear-to-t from-ink/90 via-ink/20 to-transparent"></div>

        <div className="absolute inset-x-0 bottom-0 p-6 text-ivory">
          <p className="text-xs uppercase tracking-[0.3em] text-gold">{tagline}</p>
          <h3 className="mt-2 text-3xl">{title}</h3>
          <div className="mt-3 h-px w-12 bg-gold transition-all duration-500 group-hover:w-24"></div>
          <p className="mt-3 text-sm uppercase tracking-widest text-ivory/80 transition-colors group-hover:text-gold">
            Discover →
          </p>
        </div>
      </Link>
    </motion.div>
  );
}
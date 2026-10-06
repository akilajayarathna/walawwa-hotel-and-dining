"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Card, CardContent, CardFooter } from "@/components/ui/card";

export default function RoomCard({ name, description, price, image, href, index = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      whileHover={{ scale: 1.03, transition: { duration: 0.3 } }}
      className="h-full"
    >
      <Card className="group h-full gap-0 overflow-hidden border-stone/40 bg-white py-0 shadow-sm transition-shadow duration-300 hover:shadow-xl">
        <div className="relative aspect-[4/3] overflow-hidden">
          <Image
            src={image}
            alt={name}
            fill
            sizes="(min-width: 768px) 33vw, 100vw"
            className="object-cover transition-transform duration-700 group-hover:scale-110"
          />
        </div>

        <CardContent className="p-6">
          <h3 className="text-2xl text-ink">{name}</h3>
          <div className="my-3 h-px w-12 bg-gold"></div>
          <p className="text-ink/70">{description}</p>
          <p className="mt-4 text-ink">
            From <span className="font-semibold text-crimson">Rs. {price.toLocaleString()}</span> / night
          </p>
        </CardContent>

        <CardFooter className="px-6 pb-6">
          <Link
            href={href}
            className="text-sm uppercase tracking-widest text-crimson transition-colors hover:text-gold"
          >
            View details →
          </Link>
        </CardFooter>
      </Card>
    </motion.div>
  );
}
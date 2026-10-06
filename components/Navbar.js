"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { Menu } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Rooms", href: "/rooms" },
  { name: "Dining", href: "/dining" },
  { name: "Experience", href: "/experience" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);

    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className={`fixed inset-x-0 top-0 z-50 flex items-center justify-between px-6 text-ivory transition-[background-color,padding,box-shadow] duration-300 md:px-10 ${
        scrolled
          ? "bg-ink/55 py-3 shadow-lg backdrop-blur"
          : "bg-transparent py-5"
      }`}
    >
      <Link href="/" className="font-heading text-2xl font-semibold text-crimson">
        Walawwa Hotel & Dining
      </Link>

      {/* Desktop links */}
      <nav className="hidden gap-10 md:flex">
        {navLinks.map((item) => {
          const isActive = pathname === item.href;

          return (
            <Link
              key={item.href}
              href={item.href}
              className={`border-b-2 pb-1 transition-colors ${
                isActive
                  ? "border-gold text-gold"
                  : "border-transparent text-ink hover:text-gold"
              }`}
            >
              {item.name}
            </Link>
          );
        })}
      </nav>

      {/* Desktop Book Now */}
      <motion.div
        className="hidden md:block"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <Link
          href="/contact"
          className="inline-block rounded bg-crimson px-5 py-2 text-ivory"
        >
          Book Now
        </Link>
      </motion.div>

      {/* Mobile menu */}
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild>
          <button className="md:hidden" aria-label="Open menu">
            <Menu size={28} />
          </button>
        </SheetTrigger>

        <SheetContent side="right" className="border-gold/30 bg-ivory text-ink">
          <SheetTitle className="sr-only">Navigation menu</SheetTitle>

          <nav className="mt-16 flex flex-col gap-6 px-6">
            {navLinks.map((item) => {
              const isActive = pathname === item.href;

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={`font-heading text-2xl transition-colors ${
                    isActive ? "text-gold" : "text-ink hover:text-gold"
                  }`}
                >
                  {item.name}
                </Link>
              );
            })}

            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="mt-4 rounded bg-crimson px-5 py-3 text-center text-ivory"
            >
              Book Now
            </Link>
          </nav>
        </SheetContent>
      </Sheet>
    </motion.header>
  );
}
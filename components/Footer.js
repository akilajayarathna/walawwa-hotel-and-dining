import Link from "next/link";
import { MapPin, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const quickLinks = [
  { name: "Home", href: "/" },
  { name: "Rooms", href: "/rooms" },
  { name: "Dining", href: "/dining" },
  { name: "Experience", href: "/experience" },
  { name: "Contact", href: "/contact" },
];

const socials = [
  { name: "Facebook", href: "https://facebook.com" },
  { name: "Instagram", href: "https://instagram.com" },
];

export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-gold/40 bg-ink px-6 pt-16 text-ivory">
      <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-4">
        <div className="md:col-span-1">
          <h2 className="text-2xl text-gold">Walawwa Hotel & Dining</h2>
          <div className="my-4 h-px w-16 bg-gold"></div>
          <p className="text-ivory/70">
            A Kandyan heritage hotel in the hills, with traditional rooms and
            home-style Sri Lankan dining.
          </p>

          <div className="mt-6 flex flex-col gap-3">
            <Button asChild className="bg-gold text-ink hover:bg-gold/90">
              <Link href="/contact">Book a Room</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="border-gold bg-transparent text-ivory hover:bg-gold hover:text-ink"
            >
              <Link href="/dining#reserve">Reserve a Table</Link>
            </Button>
          </div>
        </div>

        <div>
          <h3 className="text-xl text-gold">Quick Links</h3>
          <ul className="mt-4 space-y-2">
            {quickLinks.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-ivory/70 transition-colors hover:text-gold"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-xl text-gold">Contact</h3>
          <ul className="mt-4 space-y-4 text-ivory/70">
            <li className="flex gap-3">
              <MapPin className="mt-1 shrink-0 text-gold" size={18} />
              123 Lake Road, Kandy, Sri Lanka
            </li>
            <li className="flex gap-3">
              <Phone className="mt-1 shrink-0 text-gold" size={18} />
              <a href="tel:+94812345678" className="transition-colors hover:text-gold">
                +94 81 234 5678
              </a>
            </li>
            <li className="flex gap-3">
              <Mail className="mt-1 shrink-0 text-gold" size={18} />
              <a href="mailto:stay@walawwakandy.lk" className="transition-colors hover:text-gold">
                stay@walawwakandy.lk
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl text-gold">Follow Us</h3>
          <div className="mt-4 flex flex-wrap gap-3">
            {socials.map((item) => (
              <a
                key={item.name}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-gold/50 px-4 py-2 text-sm text-ivory/80 transition-colors hover:bg-gold hover:text-ink"
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="mx-auto mt-14 max-w-6xl border-t border-ivory/10 py-6 text-center text-sm text-ivory/60">
        &copy; {new Date().getFullYear()} Walawwa Hotel & Dining. All rights reserved.
      </div>
    </footer>
  );
}
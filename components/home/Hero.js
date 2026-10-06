import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="sticky top-0 flex min-h-svh items-center justify-center overflow-hidden px-6 pb-16 pt-28">
      <Image
        src="/images/hero/hero.jpg"
        alt="Misty hills of Kandy at sunrise"
        priority
        fill
        sizes="100vw"
        className="object-cover"
      />

      <div className="absolute inset-0 bg-linear-to-b from-ink/70 via-ink/10 to-ink/70"></div>

      <div className="relative z-10 mx-auto max-w-4xl text-center text-ivory">
        <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl">
          Welcome to Walawwa Hotel & Dining
        </h1>

        <div className="mx-auto my-6 h-px w-24 bg-gold"></div>

        <p className="mx-auto max-w-2xl text-base md:text-2xl">
          Experience the perfect blend of heritage and modern comfort in the
          heart of Kandy.
        </p>

        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button
            asChild
            size="lg"
            className="w-full bg-crimson text-ivory hover:bg-crimson/90 sm:w-auto"
          >
            <Link href="/contact">Book Now</Link>
          </Button>

          <Button
            asChild
            size="lg"
            variant="outline"
            className="w-full border-gold bg-transparent text-ivory hover:bg-gold hover:text-ink sm:w-auto"
          >
            <Link href="/rooms">Explore Rooms</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import FadeIn from "@/components/FadeIn";
import { signatureDishes } from "@/data/menu";
import GarlandBorder from "@/components/GarlandBorder";

export default function DiningHighlight() {
  return (
    <section className="relative z-10 bg-ink px-6 py-20 text-ivory md:py-28 md:px-32 lg:py-36">

      <GarlandBorder side="left" />
      <GarlandBorder side="right" />
      
      <div className="mx-auto grid max-w-4xl items-center gap-12 md:grid-cols-2">
        <FadeIn>
          <div className="group relative aspect-4/5 overflow-hidden rounded-lg">
            <Image
              src="/images/dining/food.jpg"
              alt="Traditional food served on a clay plate"
              fill
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </div>
        </FadeIn>

        <FadeIn delay={0.2}>
          <div className="text-center md:text-left">
            <p className="text-sm uppercase tracking-[0.3em] text-ivory">
              Dining
            </p>
            <h2 className="mt-4 text-4xl text-gold md:text-5xl">
              Flavours of the hill country
            </h2>
            <div className="mx-auto my-6 h-px w-24 bg-gold md:mx-0"></div>
            <p className="text-ivory/80">
              Our kitchen cooks the way Kandyan households always have: clay
              pots, fresh coconut and spices ground by hand each morning.
            </p>

            <ul className="mt-6 space-y-2 text-ivory/90">
              {signatureDishes.map((item) => (
                <li key={item} className="flex items-center justify-center gap-3 md:justify-start">
                  <span className="h-1.5 w-1.5 rounded-full bg-gold"></span>
                  {item}
                </li>
              ))}
            </ul>

            <Button
              asChild
              size="lg"
              className="mt-8 bg-gold text-ink hover:scale-120 hover:bg-gold/95 hover:text-ink transition-transform"
            >
              <Link href="/dining">See the menu</Link>
            </Button>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
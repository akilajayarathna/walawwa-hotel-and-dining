import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import FadeIn from "@/components/FadeIn";
import { signatureDishes } from "@/data/menu";

export default function DiningHighlight() {
  return (
    <section className="relative z-10 bg-ink px-6 py-20 text-ivory md:py-28">
      <div className="mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-2">
        <FadeIn>
          <div className="group relative aspect-[4/5] overflow-hidden rounded-lg">
            <Image
              src="/images/dining/rice-and-curry.jpg"
              alt="Traditional Kandyan rice and curry served on a clay plate"
              fill
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </div>
        </FadeIn>

        <FadeIn delay={0.2}>
          <div className="text-center md:text-left">
            <p className="text-sm uppercase tracking-[0.3em] text-gold">
              Dining
            </p>
            <h2 className="mt-4 text-4xl md:text-5xl">
              Flavours of the hill country
            </h2>
            <div className="mx-auto my-6 h-px w-24 bg-gold md:mx-0"></div>
            <p className="text-ivory/80">
              Our kitchen cooks the way Kandyan households always have: clay
              pots, fresh coconut and spices ground by hand each morning.
            </p>

            <ul className="mt-6 space-y-2 text-ivory/90">
              {signatureDishes.map((dish) => (
                <li key={dish} className="flex items-center justify-center gap-3 md:justify-start">
                  <span className="h-1.5 w-1.5 rounded-full bg-gold"></span>
                  {dish}
                </li>
              ))}
            </ul>

            <Button
              asChild
              size="lg"
              className="mt-8 bg-gold text-ink hover:bg-gold/90"
            >
              <Link href="/dining">See the menu</Link>
            </Button>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
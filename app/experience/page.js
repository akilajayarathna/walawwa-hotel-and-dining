import Image from "next/image";
import Link from "next/link";
import { Check, Clock, Wallet } from "lucide-react";
import { Button } from "@/components/ui/button";
import PageHeader from "@/components/PageHeader";
import FadeIn from "@/components/FadeIn";
import { experiences } from "@/data/experience";

export const metadata = {
  title: "Experiences | Walawwa Hotel & Dining",
  description:
    "Tea plantation visits, cooking classes, Kandyan dance evenings and more, arranged from our hotel in Kandy.",
};

export default function ExperiencePage() {
  return (
    <>
      <PageHeader
        label="Experiences"
        title="Live the hill country"
        subtitle="Guided by local people, arranged by our team, and easy to add to your stay."
        image="/images/experiences/tea-plantation.png"
      />

      <section className="bg-ivory px-6 py-20 md:py-28">
        <div className="mx-auto max-w-6xl space-y-20 md:space-y-28">
          {experiences.map((item, index) => (
            <div
              key={item.id}
              id={item.slug}
              className={`grid scroll-mt-28 items-center gap-10 md:grid-cols-2 md:gap-16 ${
                index % 2 === 1 ? "md:[&>*:first-child]:order-2" : ""
              }`}
            >
              <FadeIn>
                <div className="group relative aspect-4/3 overflow-hidden rounded-lg shadow-lg">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(min-width: 768px) 50vw, 100vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
              </FadeIn>

              <FadeIn delay={0.2}>
                <div className="text-center md:text-left">
                  <p className="text-sm uppercase tracking-[0.3em] text-crimson">
                    {item.tagline}
                  </p>
                  <h2 className="mt-3 text-4xl text-ink md:text-5xl">{item.title}</h2>
                  <div className="mx-auto my-5 h-px w-24 bg-gold md:mx-0"></div>
                  <p className="text-ink/80">{item.description}</p>

                  <ul className="mt-6 space-y-2">
                    {item.highlights.map((highlight) => (
                      <li
                        key={highlight}
                        className="flex items-center justify-center gap-3 text-ink/80 md:justify-start"
                      >
                        <Check className="text-crimson" size={18} />
                        {highlight}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-6 flex flex-wrap items-center justify-center gap-6 text-ink md:justify-start">
                    <span className="flex items-center gap-2">
                      <Clock className="text-gold" size={20} />
                      {item.duration}
                    </span>
                    <span className="flex items-center gap-2">
                      <Wallet className="text-gold" size={20} />
                      Rs. {item.price.toLocaleString()} per person
                    </span>
                  </div>
                </div>
              </FadeIn>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-ink px-6 py-20 text-center text-ivory md:py-24">
        <FadeIn>
          <h2 className="text-3xl text-gold md:text-5xl">
            Add an experience to your stay
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-ivory/80">
            Book your room, then tell us which experiences you would like in
            the special requests box. Our team will arrange the rest.
          </p>
          <Button
            asChild
            size="lg"
            className="mt-8 bg-crimson text-ivory hover:bg-crimson/90"
          >
            <Link href="/contact">Plan your stay</Link>
          </Button>
        </FadeIn>
      </section>
    </>
  );
}
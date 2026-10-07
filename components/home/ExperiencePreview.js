import Link from "next/link";
import { Button } from "@/components/ui/button";
import ExperienceCard from "@/components/ExperienceCard";
import FadeIn from "@/components/FadeIn";
import { experiences } from "@/data/experience";

export default function ExperiencePreview() {
  const featured = experiences.filter((item) => item.featured);

  return (
    <section className="relative z-10 bg-ivory px-6 py-20 md:py-28">
      <div className="mx-auto max-w-6xl">
        <FadeIn>
          <div className="mb-14 text-center">
            <p className="text-sm uppercase tracking-[0.3em] text-crimson">
              Experiences
            </p>
            <h2 className="mt-4 text-4xl text-ink md:text-5xl">
              More than a place to sleep
            </h2>
            <div className="mx-auto my-6 h-px w-24 bg-gold"></div>
            <p className="mx-auto max-w-2xl text-ink/70">
              Tea hills, clay-pot cooking and Kandyan dance. Add a little of
              the hill country to your stay.
            </p>
          </div>
        </FadeIn>

        <div className="grid gap-8 md:grid-cols-3">
          {featured.map((item, index) => (
            <ExperienceCard
              key={item.id}
              title={item.title}
              tagline={item.tagline}
              image={item.image}
              href={`/experience#${item.slug}`}
              index={index}
            />
          ))}
        </div>

        <FadeIn delay={0.3}>
          <div className="mt-14 text-center">
            <Button
              asChild
              size="lg"
              variant="outline"
              className="bg-crimson text-ivory hover:scale-120 hover:bg-crimson/95 hover:text-ivory transition-transform"
            >
              <Link href="/experience">All experiences</Link>
            </Button>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, BedDouble, Check, Maximize, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import PageHeader from "@/components/PageHeader";
import RoomCard from "@/components/RoomCard";
import FadeIn from "@/components/FadeIn";
import { rooms } from "@/data/rooms";

export function generateStaticParams() {
  return rooms.map((room) => ({ slug: room.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const room = rooms.find((r) => r.slug === slug);

  if (!room) return {};

  return {
    title: `${room.name} | Walawwa Hotel & Dining`,
    description: room.description,
  };
}

export default async function RoomDetailPage({ params }) {
  const { slug } = await params;
  const room = rooms.find((r) => r.slug === slug);

  if (!room) notFound();

  const otherRooms = rooms.filter((r) => r.slug !== slug).slice(0, 2);

  const facts = [
    { icon: Maximize, label: "Size", value: room.size },
    { icon: Users, label: "Guests", value: `Up to ${room.guests}` },
    { icon: BedDouble, label: "Bed", value: room.bed },
  ];

  return (
    <>
      <PageHeader
        label="Rooms & Suites"
        title={room.name}
        subtitle={room.description}
        image={room.image}
      />

      <section className="bg-ivory px-6 py-16 md:py-24">
        <div className="mx-auto max-w-6xl">
          <Link
            href="/rooms"
            className="mb-10 inline-flex items-center gap-2 text-sm uppercase tracking-widest text-crimson transition-colors hover:text-gold"
          >
            <ArrowLeft size={16} />
            All rooms
          </Link>

          <div className="grid gap-12 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <FadeIn>
                <h2 className="text-3xl text-ink md:text-4xl">About this room</h2>
                <div className="my-6 h-px w-24 bg-gold"></div>
                <p className="text-lg text-ink/80">{room.details}</p>

                <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-3">
                  {facts.map((fact) => (
                    <div key={fact.label} className="flex items-center gap-4">
                      <fact.icon className="text-gold" size={28} />
                      <div>
                        <p className="text-xs uppercase tracking-widest text-ink/60">
                          {fact.label}
                        </p>
                        <p className="text-ink">{fact.value}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <h3 className="mt-12 text-2xl text-ink">Room features</h3>
                <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                  {room.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3 text-ink/80">
                      <Check className="text-crimson" size={18} />
                      {feature}
                    </li>
                  ))}
                </ul>
              </FadeIn>

              <div className="mt-12 grid gap-4 sm:grid-cols-2">
                {room.gallery.map((src, index) => (
                  <FadeIn key={src} delay={index * 0.15}>
                    <div className="group relative aspect-[4/3] overflow-hidden rounded-lg">
                      <Image
                        src={src}
                        alt={`${room.name} photo ${index + 1}`}
                        fill
                        sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                    </div>
                  </FadeIn>
                ))}
              </div>
            </div>

            <aside className="self-start lg:sticky lg:top-28">
              <FadeIn delay={0.2}>
                <div className="rounded-lg border border-gold/40 bg-white p-8 shadow-sm">
                  <p className="text-sm uppercase tracking-widest text-ink/60">From</p>
                  <p className="mt-1 text-4xl text-crimson">
                    Rs. {room.price.toLocaleString()}
                  </p>
                  <p className="text-ink/60">per night, breakfast included</p>

                  <div className="my-6 h-px w-full bg-gold/40"></div>

                  <Button
                    asChild
                    size="lg"
                    className="w-full bg-crimson text-ivory hover:bg-crimson/90"
                  >
                    <Link href={`/contact?room=${room.slug}`}>Book this room</Link>
                  </Button>

                  <p className="mt-4 text-center text-sm text-ink/60">
                    Free cancellation up to 48 hours before arrival
                  </p>
                </div>
              </FadeIn>
            </aside>
          </div>
        </div>
      </section>

      <section className="bg-ink px-6 py-20 md:py-24">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-12 text-center text-3xl text-gold md:text-4xl">
            You may also like
          </h2>
          <div className="grid gap-8 md:grid-cols-2">
            {otherRooms.map((other, index) => (
              <RoomCard
                key={other.id}
                name={other.name}
                description={other.description}
                price={other.price}
                image={other.image}
                href={`/rooms/${other.slug}`}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
import Link from "next/link";
import { Button } from "@/components/ui/button";
import RoomCard from "@/components/RoomCard";
import FadeIn from "@/components/FadeIn";
import { rooms } from "@/data/rooms";

export default function FeaturedRooms() {
  return (
    <section className="relative z-10 bg-ivory px-6 py-20 md:py-28">
      <div className="mx-auto max-w-6xl">
        <FadeIn>
          <div className="mb-14 text-center">
            <p className="text-sm uppercase tracking-[0.3em] text-crimson">
              Rooms & Suites
            </p>
            <h2 className="mt-4 text-4xl text-ink md:text-5xl">
              Rest in heritage comfort
            </h2>
            <div className="mx-auto my-6 h-px w-24 bg-gold"></div>
            <p className="mx-auto max-w-2xl text-ink/70">
              Each room blends traditional Kandyan craft with the comfort you
              expect today.
            </p>
          </div>
        </FadeIn>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {rooms.slice(0, 3).map((room, index) => (
            <RoomCard
              key={room.id}
              name={room.name}
              description={room.description}
              price={room.price}
              image={room.image}
              href={`/rooms/${room.slug}`}
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
              <Link href="/rooms">View all rooms</Link>
            </Button>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
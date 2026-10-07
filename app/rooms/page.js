import Link from "next/link";
import { Wifi, Coffee, Bath, Car } from "lucide-react";
import { Button } from "@/components/ui/button";
import PageHeader from "@/components/PageHeader";
import RoomCard from "@/components/RoomCard";
import FadeIn from "@/components/FadeIn";
import { rooms } from "@/data/rooms";

export const metadata = {
  title: "Rooms & Suites | Walawwa Hotel & Dining",
  description:
    "Heritage rooms and suites in Kandy, with carved wood, brass lamps and hill views.",
};

const included = [
  { icon: Coffee, label: "Breakfast included" },
  { icon: Wifi, label: "Free Wi-Fi" },
  { icon: Bath, label: "Hot water and toiletries" },
  { icon: Car, label: "Free parking" },
];

export default function RoomsPage() {
  return (
    <>
      <PageHeader
        label="Rooms & Suites"
        title="Your room in the hills"
        subtitle="Four ways to stay, each with traditional Kandyan craft and modern comfort."
        image="/images/hero/hero.jpg"
      />

      <section className="bg-ivory px-6 py-20 md:py-28">
        <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-2">
          {rooms.map((room, index) => (
            <RoomCard
              key={room.id}
              id={room.slug}
              name={room.name}
              description={room.description}
              price={room.price}
              image={room.image}
              href={`/rooms/${room.slug}`}
              index={index}
            />
          ))}
        </div>
      </section>

      <section className="bg-ink px-6 py-16 text-ivory">
        <FadeIn>
          <div className="mx-auto max-w-6xl">
            <h2 className="text-center text-3xl text-gold md:text-4xl">
              Included in every stay
            </h2>
            <div className="mt-10 grid grid-cols-2 gap-8 md:grid-cols-4">
              {included.map((item) => (
                <div key={item.label} className="flex flex-col items-center gap-3 text-center">
                  <item.icon className="text-gold" size={32} />
                  <p>{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>
      </section>

      <section className="bg-ivory px-6 py-20 text-center">
        <FadeIn>
          <h2 className="text-3xl text-ink md:text-5xl">Ready to book your stay?</h2>
          <p className="mx-auto mt-4 max-w-xl text-ink/70">
            Tell us your dates and we will take care of the rest.
          </p>
          <Button
            asChild
            size="lg"
            className="mt-8 bg-crimson text-ivory hover:bg-crimson/90"
          >
            <Link href="/contact">Book now</Link>
          </Button>
        </FadeIn>
      </section>
    </>
  );
}
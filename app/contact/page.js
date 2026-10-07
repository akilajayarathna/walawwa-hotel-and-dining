import { MapPin, Phone, Mail, Clock } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import BookingForm from "@/components/BookingForm";
import FadeIn from "@/components/FadeIn";
import { rooms } from "@/data/rooms";

export const metadata = {
  title: "Book & Contact | Walawwa Hotel & Dining",
  description: "Reserve a room or contact Walawwa Hotel & Dining in Kandy.",
};

const details = [
  { icon: MapPin, label: "Address", value: "123 Lake Road, Kandy, Sri Lanka" },
  { icon: Phone, label: "Phone", value: "+94 81 234 5678" },
  { icon: Mail, label: "Email", value: "stay@walawwakandy.lk" },
  { icon: Clock, label: "Reception", value: "Open daily, 24 hours" },
];

export default async function ContactPage({ searchParams }) {
  const { room } = await searchParams;
  const defaultRoom = rooms.some((r) => r.slug === room) ? room : "";

  return (
    <>
      <PageHeader
        label="Book & Contact"
        title="Plan your stay"
        subtitle="Tell us your dates and we will take care of the rest."
        image="/images/hero/hero.png"
      />

      <section className="bg-ivory px-6 py-16 md:py-24">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <BookingForm key={defaultRoom} defaultRoom={defaultRoom} />
          </div>

          <aside className="space-y-6">
            <FadeIn>
              <div className="rounded-lg bg-ink p-8 text-ivory">
                <h2 className="text-2xl text-gold">Visit us</h2>
                <div className="my-4 h-px w-16 bg-gold"></div>
                <ul className="space-y-5">
                  {details.map((item) => (
                    <li key={item.label} className="flex gap-4">
                      <item.icon className="mt-1 shrink-0 text-gold" size={20} />
                      <div>
                        <p className="text-xs uppercase tracking-widest text-ivory/60">
                          {item.label}
                        </p>
                        <p>{item.value}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>

          </aside>
        </div>
      </section>
    </>
  );
}
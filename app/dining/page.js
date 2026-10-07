import Image from "next/image";
import Link from "next/link";
import { Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import PageHeader from "@/components/PageHeader";
import MenuItem from "@/components/MenuItem";
import FadeIn from "@/components/FadeIn";
import { menuCategories } from "@/data/menu";
import TableReservationForm from "@/components/TableReservationForm";

export const metadata = {
  title: "Dining | Walawwa Hotel & Dining",
  description:
    "Traditional Sri Lankan cuisine in Kandy: rice and curry, hoppers, seafood, desserts and Ceylon tea.",
};

const hours = [
  { meal: "Breakfast", time: "7:00 AM - 10:30 AM" },
  { meal: "Lunch", time: "12:00 PM - 3:00 PM" },
  { meal: "Dinner", time: "6:30 PM - 10:30 PM" },
];

export default function DiningPage() {
  return (
    <>
      <PageHeader
        label="Dining"
        title="A table in the hills"
        subtitle="Traditional Sri Lankan cooking, made fresh each day."
        image="/images/dining/restaurant.jpg"
      />

      <section className="bg-ivory px-6 py-20 md:py-28">
        <div className="mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-2">
          <FadeIn>
            <div className="text-center md:text-left">
              <p className="text-sm uppercase tracking-[0.3em] text-crimson">
                Our Kitchen
              </p>
              <h2 className="mt-4 text-4xl text-ink md:text-5xl">
                Cooked in clay, served with care
              </h2>
              <div className="mx-auto my-6 h-px w-24 bg-gold md:mx-0"></div>
              <p className="text-ink/80">
                Every curry is slow-cooked in clay pots over a gentle flame,
                with coconut and spices from the hill country. Dine in our
                pillared hall or on the veranda overlooking the garden.
              </p>

              <div className="mt-8 rounded-lg border border-gold/40 bg-white p-6 text-left">
                <h3 className="flex items-center gap-2 text-2xl text-ink">
                  <Clock className="text-gold" size={22} />
                  Opening hours
                </h3>
                <ul className="mt-4 space-y-2">
                  {hours.map((item) => (
                    <li key={item.meal} className="flex justify-between text-ink/80">
                      <span>{item.meal}</span>
                      <span>{item.time}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="group relative aspect-4/5 overflow-hidden rounded-t-full">
              <Image
                src="/images/dining/restaurant.png"
                alt="Dining hall with carved wooden pillars and brass lamps"
                fill
                sizes="(min-width: 768px) 50vw, 100vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="bg-white px-6 py-20 md:py-28">
        <div className="mx-auto max-w-4xl">
          <FadeIn>
            <div className="mb-12 text-center">
              <p className="text-sm uppercase tracking-[0.3em] text-crimson">
                The Menu
              </p>
              <h2 className="mt-4 text-4xl text-ink md:text-5xl">
                Choose your course
              </h2>
              <div className="mx-auto my-6 h-px w-24 bg-gold"></div>
            </div>
          </FadeIn>

          <Tabs defaultValue={menuCategories[0].id}>
            <TabsList className="mb-8 flex h-auto w-full flex-wrap justify-center gap-2 bg-transparent">
              {menuCategories.map((category) => (
                <TabsTrigger
                  key={category.id}
                  value={category.id}
                  className="rounded-full border border-gold/50 px-5 py-2 text-ink transition-colors data-[state=active]:border-crimson data-[state=active]:bg-crimson data-[state=active]:text-ivory"
                >
                  {category.name}
                </TabsTrigger>
              ))}
            </TabsList>

            {menuCategories.map((category) => (
              <TabsContent key={category.id} value={category.id}>
                <div className="divide-y divide-gold/30">
                  {category.items.map((item, index) => (
                    <FadeIn key={item.name} delay={index * 0.08}>
                      <MenuItem
                        name={item.name}
                        description={item.description}
                        price={item.price}
                      />
                    </FadeIn>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

            <section id="reserve" className="scroll-mt-20 bg-ink px-6 py-20 text-ivory md:py-28">
              <div className="mx-auto max-w-3xl">
                <FadeIn>
                  <div className="mb-12 text-center">
                    <p className="text-sm uppercase tracking-[0.3em] text-gold">
                      Reservations
                    </p>
                    <h2 className="mt-4 text-4xl md:text-5xl">Reserve your table</h2>
                    <div className="mx-auto my-6 h-px w-24 bg-gold"></div>
                    <p className="mx-auto max-w-xl text-ivory/80">
                      Join us under the brass lamps. Choose a date and time, and we
                      will keep a table for you.
                    </p>
                  </div>
                </FadeIn>

                <FadeIn delay={0.2}>
                  <TableReservationForm />
                </FadeIn>
              </div>
            </section>
    </>
  );
}
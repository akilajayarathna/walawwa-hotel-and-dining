import Image from "next/image";
import GarlandBorder from "@/components/GarlandBorder";

export default function HeritageIntro() {
  return (
    <section className="relative z-10 rounded-t-[2.5rem] bg-crimson px-6 md:px-32 py-20 shadow-[0_-20px_40px_rgba(0,0,0,0.25)] md:py-28 overflow-hidden">
      
      <GarlandBorder side="left" />
      <GarlandBorder side="right" />

      <div className="mx-auto grid max-w-4xl items-center gap-12 md:grid-cols-2">
        <div className="text-center md:text-left">
          <p className="text-sm uppercase tracking-[0.3em] text-ivory">
            Our Heritage
          </p>
          <h2 className="mt-4 text-4xl text-gold md:text-5xl">
            A Kandyan manor, reborn
          </h2>
          <div className="mx-auto my-6 h-px w-24 bg-gold md:mx-0"></div>
          <p className="text-ivory/80">
            Walawwa was inspired by the traditional manor houses of the Kandyan
            hill country, with carved wooden pillars, deep verandas and brass
            lamps. Every room and every plate carries a little of that story.
          </p>
          <p className="mt-4 text-ivory/80">
            Stay with us to enjoy old Kandy hospitality, with the comfort you
            expect today.
          </p>
        </div>

        <div className="relative mx-auto aspect-4/3 w-full max-w-sm overflow-hidden rounded-md">
          <Image
            src="/images/heritage/heritage.png"
            alt="Carved wooden pillars of a Kandyan manor veranda"
            fill
            sizes="(min-width: 768px) 384px, 90vw"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
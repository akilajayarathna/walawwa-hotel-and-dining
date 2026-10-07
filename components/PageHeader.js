import Image from "next/image";

export default function PageHeader({ label, title, subtitle, image }) {
  return (
    <section className="relative flex min-h-[50svh] items-center justify-center overflow-hidden bg-ink px-6 pb-16 pt-32 text-center text-ivory">
      {image && (
        <>
          <Image
            src={image}
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-linear-to-b from-ink/20 to-ink/70"></div>
        </>
      )}

      <div className="relative z-10 mx-auto max-w-3xl">
        {label && (
          <p className="text-sm uppercase tracking-[0.3em] text-gold">{label}</p>
        )}
        <h1 className="mt-4 text-4xl sm:text-5xl md:text-7xl">{title}</h1>
        <div className="mx-auto my-6 h-px w-24 bg-gold"></div>
        {subtitle && (
          <p className="mx-auto max-w-2xl text-base text-ivory/80 md:text-xl">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
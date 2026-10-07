export default function MenuItem({ name, description, price }) {
  return (
    <div className="py-5">
      <div className="flex items-baseline gap-3">
        <h3 className="text-2xl text-ink">{name}</h3>
        <span className="flex-1 border-b border-dotted border-gold"></span>
        <span className="font-semibold text-crimson">
          Rs. {price.toLocaleString()}
        </span>
      </div>
      <p className="mt-1 text-ink/70">{description}</p>
    </div>
  );
}
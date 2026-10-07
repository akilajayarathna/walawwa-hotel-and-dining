import { Label } from "@/components/ui/label";

export default function FormField({ label, name, error, children }) {
  return (
    <div className="space-y-2">
      <Label htmlFor={name} className="text-ink">
        {label}
      </Label>
      {children}
      {error && <p className="text-sm text-crimson">{error}</p>}
    </div>
  );
}
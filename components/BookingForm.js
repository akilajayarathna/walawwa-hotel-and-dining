"use client";

import Field from "@/components/FormField";
import { useState } from "react";
import { CheckCircle2 } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { rooms } from "@/data/rooms";

const todayString = () => new Date().toLocaleDateString("en-CA");

function getNights(checkIn, checkOut) {
  if (!checkIn || !checkOut) return 0;
  const diff = (new Date(checkOut) - new Date(checkIn)) / (1000 * 60 * 60 * 24);
  return diff > 0 ? Math.round(diff) : 0;
}

function validate(values) {
  const errors = {};

  if (!values.name.trim()) errors.name = "Please enter your name.";
  if (!/^\S+@\S+\.\S+$/.test(values.email)) errors.email = "Please enter a valid email.";
  if (values.phone.replace(/\D/g, "").length < 9) errors.phone = "Please enter a valid phone number.";
  if (!values.room) errors.room = "Please choose a room.";
  if (!values.checkIn) errors.checkIn = "Please choose a check-in date.";
  if (!values.checkOut) {
    errors.checkOut = "Please choose a check-out date.";
  } else if (values.checkIn && getNights(values.checkIn, values.checkOut) === 0) {
    errors.checkOut = "Check-out must be after check-in.";
  }

  return errors;
}

const inputStyle = "h-11 border-stone/50 bg-white text-ink";

export default function BookingForm({ defaultRoom = "" }) {
  const emptyForm = {
    name: "",
    email: "",
    phone: "",
    room: defaultRoom,
    checkIn: "",
    checkOut: "",
    guests: "2",
    message: "",
  };

  const [values, setValues] = useState(emptyForm);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const selectedRoom = rooms.find((r) => r.slug === values.room);
  const nights = getNights(values.checkIn, values.checkOut);

  function handleChange(e) {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
    setErrors({ ...errors, [name]: undefined });
  }

  function handleSubmit(e) {
    e.preventDefault();
    const newErrors = validate(values);

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setSubmitted(true);
  }

  function reset() {
    setValues(emptyForm);
    setErrors({});
    setSubmitted(false);
  }

  if (submitted) {
    return (
      <div className="rounded-lg border border-gold/40 bg-white p-8 text-center shadow-sm md:p-12">
        <CheckCircle2 className="mx-auto text-gold" size={56} />
        <h2 className="mt-6 text-3xl text-ink">Thank you, {values.name.split(" ")[0]}</h2>
        <p className="mx-auto mt-3 max-w-md text-ink/70">
          We have received your request for the {selectedRoom?.name}. A confirmation
          will be sent to {values.email} shortly.
        </p>

        <div className="mx-auto mt-8 max-w-sm space-y-2 rounded-md bg-ivory p-5 text-left text-ink">
          <p>Check-in: {values.checkIn}</p>
          <p>Check-out: {values.checkOut}</p>
          <p>Guests: {values.guests}</p>
          <p>Nights: {nights}</p>
          {selectedRoom && (
            <p className="font-semibold text-crimson">
              Estimated total: Rs. {(selectedRoom.price * nights).toLocaleString()}
            </p>
          )}
        </div>

        <Button
          onClick={reset}
          variant="outline"
          className="mt-8 border-crimson bg-transparent text-crimson hover:bg-crimson hover:text-ivory"
        >
          Make another booking
        </Button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="space-y-6 rounded-lg border border-gold/40 bg-white p-6 shadow-sm md:p-10"
    >
      <h2 className="text-3xl text-ink">Book your stay</h2>

      <div className="grid gap-6 sm:grid-cols-2">
        <Field label="Full name" name="name" error={errors.name}>
          <Input id="name" name="name" value={values.name} onChange={handleChange} className={inputStyle} />
        </Field>

        <Field label="Email" name="email" error={errors.email}>
          <Input id="email" name="email" type="email" value={values.email} onChange={handleChange} className={inputStyle} />
        </Field>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <Field label="Phone" name="phone" error={errors.phone}>
          <Input id="phone" name="phone" type="tel" value={values.phone} onChange={handleChange} className={inputStyle} />
        </Field>

        <Field label="Room" name="room" error={errors.room}>
          <select
            id="room"
            name="room"
            value={values.room}
            onChange={handleChange}
            className={`${inputStyle} w-full rounded-md border px-3 text-sm`}
          >
            <option value="">Choose a room</option>
            {rooms.map((room) => (
              <option key={room.id} value={room.slug}>
                {room.name}
              </option>
            ))}
          </select>
        </Field>
      </div>

      <div className="grid gap-6 sm:grid-cols-3">
        <Field label="Check-in" name="checkIn" error={errors.checkIn}>
          <Input id="checkIn" name="checkIn" type="date" min={todayString()} value={values.checkIn} onChange={handleChange} className={inputStyle} />
        </Field>

        <Field label="Check-out" name="checkOut" error={errors.checkOut}>
          <Input id="checkOut" name="checkOut" type="date" min={values.checkIn || todayString()} value={values.checkOut} onChange={handleChange} className={inputStyle} />
        </Field>

        <Field label="Guests" name="guests">
          <select
            id="guests"
            name="guests"
            value={values.guests}
            onChange={handleChange}
            className={`${inputStyle} w-full rounded-md border px-3 text-sm`}
          >
            {[1, 2, 3, 4, 5, 6].map((n) => (
              <option key={n} value={n}>
                {n} {n === 1 ? "guest" : "guests"}
              </option>
            ))}
          </select>
        </Field>
      </div>

      <Field label="Special requests (optional)" name="message">
        <Textarea id="message" name="message" rows={4} value={values.message} onChange={handleChange} className="border-stone/50 bg-white text-ink" />
      </Field>

      {selectedRoom && nights > 0 && (
        <div className="rounded-md bg-ivory p-4 text-ink">
          <p>
            {nights} {nights === 1 ? "night" : "nights"} in the {selectedRoom.name}
          </p>
          <p className="text-xl font-semibold text-crimson">
            Estimated total: Rs. {(selectedRoom.price * nights).toLocaleString()}
          </p>
        </div>
      )}

      <Button type="submit" size="lg" className="w-full bg-crimson text-ivory hover:bg-crimson/90">
        Request booking
      </Button>
    </form>
  );
}
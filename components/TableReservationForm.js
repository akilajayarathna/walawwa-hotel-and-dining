"use client";

import { useState } from "react";
import { CheckCircle2 } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import Field from "@/components/FormField";

const todayString = () => new Date().toLocaleDateString("en-CA");

const lunchSlots = ["12:00 PM", "12:30 PM", "1:00 PM", "1:30 PM", "2:00 PM", "2:30 PM"];
const dinnerSlots = ["6:30 PM", "7:00 PM", "7:30 PM", "8:00 PM", "8:30 PM", "9:00 PM", "9:30 PM"];
const occasions = ["None", "Birthday", "Anniversary", "Business dinner", "Other"];

const emptyForm = {
  name: "",
  email: "",
  phone: "",
  date: "",
  time: "",
  guests: "2",
  occasion: "None",
  message: "",
};

const inputStyle = "h-11 border-stone/50 bg-white text-ink";
const selectStyle = `${inputStyle} w-full rounded-md border px-3 text-sm`;

function validate(values) {
  const errors = {};

  if (!values.name.trim()) errors.name = "Please enter your name.";
  if (!/^\S+@\S+\.\S+$/.test(values.email)) errors.email = "Please enter a valid email.";
  if (values.phone.replace(/\D/g, "").length < 9) errors.phone = "Please enter a valid phone number.";
  if (!values.date) errors.date = "Please choose a date.";
  if (!values.time) errors.time = "Please choose a time.";

  return errors;
}

export default function TableReservationForm() {
  const [values, setValues] = useState(emptyForm);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

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
        <h3 className="mt-6 text-3xl text-ink">
          Table reserved, {values.name.split(" ")[0]}
        </h3>
        <p className="mx-auto mt-3 max-w-md text-ink/70">
          We look forward to welcoming you. A confirmation will be sent to{" "}
          {values.email}.
        </p>

        <div className="mx-auto mt-8 max-w-sm space-y-2 rounded-md bg-ivory p-5 text-left text-ink">
          <p>Date: {values.date}</p>
          <p>Time: {values.time}</p>
          <p>Guests: {values.guests}</p>
          {values.occasion !== "None" && <p>Occasion: {values.occasion}</p>}
        </div>

        <Button
          onClick={reset}
          variant="outline"
          className="mt-8 border-crimson bg-transparent text-crimson hover:bg-crimson hover:text-ivory"
        >
          Make another reservation
        </Button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="space-y-6 rounded-lg border border-gold/40 bg-white p-6 text-left shadow-sm md:p-10"
    >
      <div className="grid gap-6 sm:grid-cols-2">
        <Field label="Full name" name="name" error={errors.name}>
          <Input id="name" name="name" value={values.name} onChange={handleChange} className={inputStyle} />
        </Field>

        <Field label="Phone" name="phone" error={errors.phone}>
          <Input id="phone" name="phone" type="tel" value={values.phone} onChange={handleChange} className={inputStyle} />
        </Field>
      </div>

      <Field label="Email" name="email" error={errors.email}>
        <Input id="email" name="email" type="email" value={values.email} onChange={handleChange} className={inputStyle} />
      </Field>

      <div className="grid gap-6 sm:grid-cols-3">
        <Field label="Date" name="date" error={errors.date}>
          <Input id="date" name="date" type="date" min={todayString()} value={values.date} onChange={handleChange} className={inputStyle} />
        </Field>

        <Field label="Time" name="time" error={errors.time}>
          <select id="time" name="time" value={values.time} onChange={handleChange} className={selectStyle}>
            <option value="">Choose a time</option>
            <optgroup label="Lunch">
              {lunchSlots.map((slot) => (
                <option key={slot} value={slot}>{slot}</option>
              ))}
            </optgroup>
            <optgroup label="Dinner">
              {dinnerSlots.map((slot) => (
                <option key={slot} value={slot}>{slot}</option>
              ))}
            </optgroup>
          </select>
        </Field>

        <Field label="Guests" name="guests">
          <select id="guests" name="guests" value={values.guests} onChange={handleChange} className={selectStyle}>
            {[1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
              <option key={n} value={n}>
                {n} {n === 1 ? "guest" : "guests"}
              </option>
            ))}
          </select>
        </Field>
      </div>

      <Field label="Occasion" name="occasion">
        <select id="occasion" name="occasion" value={values.occasion} onChange={handleChange} className={selectStyle}>
          {occasions.map((item) => (
            <option key={item} value={item}>{item}</option>
          ))}
        </select>
      </Field>

      <Field label="Special requests (optional)" name="message">
        <Textarea id="message" name="message" rows={3} value={values.message} onChange={handleChange} className="border-stone/50 bg-white text-ink" />
      </Field>

      <Button type="submit" size="lg" className="w-full bg-crimson text-ivory hover:bg-crimson/90">
        Reserve table
      </Button>
    </form>
  );
}
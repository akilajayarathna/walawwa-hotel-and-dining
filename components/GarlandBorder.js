"use client";
import { motion } from "framer-motion";

export default function GarlandBorder({ side = "left" }) {
  return (
    <motion.div
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: "easeOut" }}

      aria-hidden="true"
      className={`pointer-events-none absolute inset-y-0 hidden w-24 xl:block ${
        side === "left" ? "left-4 lg:left-10" : "right-4 lg:right-10 -scale-x-100"
      }`}
      style={{
        backgroundImage: "url('/images/kandyan-art.png')",
        backgroundRepeat: "no-repeat",
        backgroundSize: "auto 100%",
        backgroundPosition: "center",
      }}
    ></motion.div>
  );
}
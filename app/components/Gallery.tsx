"use client";
import Image from "next/image";
import { motion } from "framer-motion";

const Gallery = () => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 px-12 md:px-8 lg:px-32 mt-8"
      >
        <div className="grid gap-4">
          <motion.img
            className="h-auto max-w-full rounded-lg"
            src="/assets/IMG_0286.webp"
            alt="Nails"
            width={500}
            height={300}
            whileHover={{ scale: 1.4 }}
          />
          <motion.img
            className="h-auto bg-cover max-w-full rounded-lg"
            src="/assets/IMG_0287.webp"
            alt="Nails"
            width={500}
            height={300}
            whileHover={{ scale: 1.4 }}
          />
          <motion.img
            className="h-auto max-w-full rounded-lg"
            src="/assets/IMG_0288.webp"
            alt="Nails"
            width={500}
            height={300}
            whileHover={{ scale: 1.4 }}
          />
        </div>
        <div className="grid gap-4">
          <motion.img
            className="h-auto max-w-full rounded-lg"
            src="/assets/IMG_0289.webp"
            alt="Nails"
            width={500}
            height={300}
            whileHover={{ scale: 1.4 }}
          />
          <motion.img
            className="h-auto max-w-full rounded-lg"
            src="/assets/IMG_0290.webp"
            alt="Nails"
            width={500}
            height={300}
            whileHover={{ scale: 1.4 }}
          />
          <motion.img
            className="h-auto max-w-full rounded-lg"
            src="/assets/IMG_0291.webp"
            alt="Nails"
            width={500}
            height={300}
            whileHover={{ scale: 1.4 }}
          />
        </div>
        <div className="grid gap-4">
          <motion.img
            className="h-auto max-w-full rounded-lg"
            src="/assets/IMG_0292.webp"
            alt="Nails"
            width={500}
            height={300}
            whileHover={{ scale: 1.4 }}
          />
          <motion.img
            className="h-auto max-w-full rounded-lg"
            src="/assets/IMG_0295.webp"
            alt="Nails"
            width={500}
            height={300}
            whileHover={{ scale: 1.4 }}
          />
          <motion.img
            className="h-auto max-w-full rounded-lg"
            src="/assets/IMG_0296.webp"
            alt="Nails"
            width={500}
            height={300}
            whileHover={{ scale: 1.4 }}
          />
        </div>
        <div className="grid gap-4">
          <motion.img
            className="h-auto max-w-full rounded-lg"
            src="/assets/IMG_0297.webp"
            alt="Nails"
            width={500}
            height={300}
            whileHover={{ scale: 1.4 }}
          />
          <motion.img
            className="h-auto max-w-full rounded-lg"
            src="/assets/IMG_2476.webp"
            alt="Nails"
            width={500}
            height={300}
            whileHover={{ scale: 1.4 }}
          />
          <motion.img
            className="h-auto max-w-full rounded-lg"
            src="/assets/IMG_2305.webp"
            alt="Nails"
            width={500}
            height={300}
            whileHover={{ scale: 1.4 }}
          />
        </div>
      </motion.div>
    </>
  );
};

export default Gallery;

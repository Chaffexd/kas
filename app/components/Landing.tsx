"use client"
import Image from "next/image";
import { motion } from "framer-motion";

const LandingSection = () => {
  const imageStyles = [
    { width: 'max-w-full', height: 'sm:h-auto h-96', source: "/assets/IMG_2244.webp", radius: 'rounded-lg' },
    { width: 'max-w-full', height: 'sm:h-auto h-96', source: "/assets/IMG_2305.webp", radius: 'rounded-lg' },
    { width: 'max-w-full', height: 'sm:h-auto h-96', source: "/assets/IMG_2476.webp", radius: 'rounded-lg' },
    { width: 'max-w-full', height: 'sm:h-auto h-96', source: "/assets/IMG_5391.webp", radius: 'rounded-lg' },
  ];

  return (
    <section className="w-full h-screen p-8">
      <div className="h-5/6 w-11/12 m-auto mb-24 grid grid-cols-1 sm:grid-cols-2 gap-2">
        {imageStyles.map((style, index) => (
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} key={index} className={`bg-gray-300 ${style.width} ${style.height} ${style.radius} relative`}>
            <Image
              src={style.source}
              alt="Nails"
              fill
              objectFit="cover"
              className={style.radius}
            />
          </motion.div>
        ))}
      </div>
      <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="mt-4 h-44">
        <h3 className="text-rose-500 font-bold text-4xl mb-4">Information / Location</h3>
        <p className="text-rose-500 text-xl">
          At Kas, we pride ourselves on offering an exclusive, appointment-only
          service to ensure a personalized experience for each client. With high
          demand for our services, appointments are limited, guaranteeing
          dedicated attention to every detail. Nestled in N4, we're a brief
          stroll from Manor House Tube Station on the Piccadilly Line, making
          our location easily accessible. Book your appointment now and immerse
          yourself in the unique charm and precision of Kas, where exceptional
          nail care meets unparalleled convenience.
        </p>
      </motion.div>
    </section>
  );
};

export default LandingSection;

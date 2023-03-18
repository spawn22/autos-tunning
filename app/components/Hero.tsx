"use client"
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="relative  overflow-hidden">
      <div className="relative grid grid-cols-2 min-h-screen">
        <div className="flex flex-col justify-center items-center p-8 max-w-lg ml-96">
          <motion.h1
            className="text-3xl  text-red-400  mb-4 "
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
          >
            Personaliza tu estilo sobre ruedas
          </motion.h1>
          <motion.h2
            className="text-3xl font-medium text-white uppercase mb-4 "
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8, ease: "easeOut" }}
          >
            Encuentra los mejores autos tuneados y personalizados en nuestra
            tienda de ventas
          </motion.h2>
          <motion.p
            className="text-lg text-gray-300"
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8, ease: "easeOut" }}
          >
            Bienvenido a nuestra tienda de autos tuneados, donde encontrarás una
            amplia variedad de vehículos personalizados que reflejan tu estilo y
            personalidad. Contamos con los últimos avances en tecnología y
            accesorios, así como con un equipo de expertos en modificaciones de
            autos para asesorarte en todo momento. Ven y descubre nuestro
            catálogo de autos tuneados, ¡te sorprenderás!
          </motion.p>
        </div>
        <div className="flex justify-end items-center">
          <motion.img
            className="max-w-full h-auto object-cover"
            src="https://res.cloudinary.com/ddyk63iig/image/upload/v1679001717/auto-hero_g7h4iu.png"
            alt="Imagen del auto"
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;

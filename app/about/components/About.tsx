"use client";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8 sm:py-16 mt-10">
      <motion.h2
        className="text-xl font-semibold text-gray-200 mr-4"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
      >
        Nosotros:{" "}
      </motion.h2>
      <div className="flex items-center mb-1">
        <motion.h1
          className="text-4xl font-bold text-blue-600 mt-2"
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
        >
          Bienvenido a Tuning Co.
        </motion.h1>
      </div>

      <div className="flex flex-col sm:flex-row items-center sm:items-start mb-8">
        <motion.p
          className="text-lg sm:text-xl font-medium leading-relaxed mr-8 max-w-md text-white mt-10"
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
        >
          Tuning Co. es una empresa líder en el mercado de venta de productos y
          servicios de tuning. Desde 2005, nos hemos dedicado a brindar a
          nuestros clientes la mejor calidad y servicio en el mercado, lo que
          nos ha permitido consolidarnos como la opción preferida por los
          amantes del tuning.
        </motion.p>
        <motion.img
          src="https://res.cloudinary.com/ddyk63iig/image/upload/v1679105190/emprendedor_o_empresario_con_cual_te_identificas__ymhkdr.png"
          alt="Emprendedor o Empresario"
          className="w-1/2  rounded-lg shadow-lg"
          initial={{ x: -1000 }}
          animate={{ x: 0 }}
          transition={{ duration: 0.5 }}
        />
      </div>

      <motion.div
        className="grid grid-cols-1 sm:grid-cols-3 gap-8"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
      >
        <div className="text-center">
          <span className="text-4xl font-bold text-yellow-400">20k+</span>
          <p className="text-lg font-medium text-white">Ventas realizadas</p>
        </div>
        <div className="text-center">
          <span className="text-4xl font-bold text-yellow-400">10k+</span>
          <p className="text-lg font-medium text-white">Clientes satisfechos</p>
        </div>
        <div className="text-center">
          <span className="text-4xl font-bold text-yellow-400">5</span>
          <p className="text-lg font-medium text-white">
            Sucursales en todo el país
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default About;

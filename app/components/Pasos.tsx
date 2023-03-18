"use client"
import { motion } from "framer-motion";

const Pasos = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ ease: "easeIn", duration: 0.4, delay: 0.3 }}
    >
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold mb-8 text-center text-white">
          Cómo Comprar un Auto
        </h2>
        <div className="grid grid-cols-3 gap-8">
          <div className="col-span-1 bg-gray-800 p-8 rounded-lg">
            <div className="flex items-center mb-4">
              <motion.h3 className="text-lg font-bold text-white m-1">
                Selecciona un Auto{" "}
              </motion.h3>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6 text-blue-400"
              >
                <path
                  fill-rule="evenodd"
                  d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                  clip-rule="evenodd"
                />
              </svg>
            </div>
            <p className="text-gray-400">
              Encuentra el auto que deseas comprar, revisa sus características y
              compara precios.
            </p>
          </div>
          <div className="col-span-1 bg-gray-800 p-8 rounded-lg">
            <div className="flex items-center mb-4">
              <h3 className="text-lg font-bold text-white m-1">
                Contacta al Vendedor
              </h3>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6 text-blue-400"
              >
                <path
                  fill-rule="evenodd"
                  d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                  clip-rule="evenodd"
                />
              </svg>
            </div>
            <p className="text-gray-400">
              Ponte en contacto con el vendedor para hacer preguntas o programar
              una prueba de manejo.
            </p>
          </div>
          <div className="col-span-1 bg-gray-800 p-8 rounded-lg">
            <div className="flex items-center mb-4">
              <h3 className="text-lg font-bold text-white m-1">
                Adquiere el Auto
              </h3>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6 text-blue-400"
              >
                <path
                  fill-rule="evenodd"
                  d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                  clip-rule="evenodd"
                />
              </svg>
            </div>
            <p className="text-gray-400">
              Finaliza la transacción y adquiere el auto de tus sueños.
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Pasos;

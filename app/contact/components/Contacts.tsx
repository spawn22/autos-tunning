"use client";
import { motion } from "framer-motion";

const Contacts = () => {
  return (
    <motion.div
      className="flex justify-center items-center h-screen bg-transparent"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
    >
      <div className="w-full max-w-2xl mx-auto rounded-md shadow-lg overflow-hidden bg-white">
        <div className="px-6 py-8 md:flex">
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold text-blue-600">
              Necesitas más información?
            </h2>
            <p className="mt-4 text-gray-600 font-medium">
              En nuestra empresa, la satisfacción del cliente es nuestra
              prioridad. Por eso, nuestro equipo de atención al cliente está
              disponible para ayudarte con cualquier duda o consulta que tengas
              sobre nuestros autos. Estamos comprometidos en brindarte la mejor
              experiencia de compra posible, desde el momento en que entras a
              nuestro sitio web hasta que conduces tu nuevo vehículo. ¡No dudes
              en contactarnos si necesitas cualquier tipo de ayuda!
            </p>
            <div className="mt-6">
              <p className="text-black font-bold">
                Teléfono:{" "}
                <span className="text-gray-600 font-semibold">
                  +1 123-456-7890
                </span>
              </p>
              <p className="text-black font-bold">
                Email:{" "}
                <span className="text-gray-600 font-semibold">
                  info@company.com
                </span>
              </p>
            </div>
          </div>
          <div className="md:w-1/2 md:pl-6 mt-8 md:mt-0">
            <form className="space-y-6">
              <div>
                <label
                  htmlFor="nombre"
                  className="block font-medium text-gray-700 mb-2 border-black"
                >
                  Nombre completo
                  <input
                    type="text"
                    name="nombre"
                    id="nombre"
                    className="form-input mt-1 block w-full outline"
                    required
                  />
                </label>
              </div>
              <div>
                <label
                  htmlFor="nombre"
                  className="block font-medium text-gray-700 mb-2 border-black"
                >
                  Email
                  <input
                    type="text"
                    name="nombre"
                    id="nombre"
                    className="form-input mt-1 block w-full outline"
                    required
                  />
                </label>
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700"
                >
                  Mensaje
                </label>
                <div className="mt-1">
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="block w-full shadow-sm focus:ring-yellow-500 focus:border-yellow-500 sm:text-sm border-gray-300 rounded-md outline"
                    required
                  ></textarea>
                </div>
              </div>
              <div>
                <motion.button
                  type="submit"
                  className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-yellow-500 hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Enviar
                </motion.button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Contacts;

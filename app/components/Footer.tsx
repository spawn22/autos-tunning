"use client";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-gray-900 text-gray-300 py-16"
    >
      <div className="container mx-auto flex flex-wrap">
        <div className="w-full md:w-1/4 lg:w-1/5 mb-12 md:mb-0">
          <h2 className="text-2xl font-bold mb-4 text-red-600">Tuning Co.</h2>
          <p className="text-lg mb-4">
            Somos una empresa dedicada a la venta de autos tunning de alta
            calidad.
          </p>
        </div>
        <div className="w-full md:w-1/4 lg:w-1/5 mb-12 md:mb-0">
          <h3 className="text-xl font-bold mb-4 text-red-600">Contáctanos</h3>
          <p className="text-lg mb-2">Telefono: 123-456-7890</p>
          <p className="text-lg mb-2">
            Correo electrónico: contacto@tucarro.com
          </p>
        </div>
        <div className="w-full md:w-1/4 lg:w-1/5 mb-12 md:mb-0">
          <h3 className="text-xl font-bold mb-4 text-red-600">Redes</h3>
          <p className="text-lg mb-2">Twitter: twitter.com/example</p>
          <p className="text-lg mb-2">Instagram: instagram.com/example</p>
          <p className="text-lg mb-2">Facebook: facebook.com/example</p>
        </div>
        <div className="w-full md:w-1/4 lg:w-1/5 mb-12 md:mb-0">
          <h3 className="text-xl font-bold mb-4 text-red-600">Oficinas</h3>
          <p className="text-lg mb-2">Buenos Aires 1020</p>
          <p className="text-lg mb-2">Tucuman 2050</p>
          <p className="text-lg mb-2">San juan 1502</p>
        </div>
        <div className="w-full md:w-1/4 lg:w-1/5 mb-12 md:mb-0">
          <h3 className="text-xl font-bold mb-4 text-red-600">HORARIOS </h3>
          <p className="text-lg mb-2"> Lun - Vier: 9:00AM - 9:00PM</p>
          <p className="text-lg mb-2"> Sabados: 9:00AM - 19:00PM</p>
          <p className="text-lg mb-2"> Domingos: Cerrado</p>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;

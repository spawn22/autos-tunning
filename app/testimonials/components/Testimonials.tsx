"use client"
import { motion } from "framer-motion";

const numStars = 5; // número de estrellas a mostrar

const stars: any[] = [];
for (let i = 0; i < numStars; i++) {
  stars.push(
    <svg
      key={i}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="w-6 h-6 text-yellow-400 inline-block"
    >
      <path
        fillRule="evenodd"
        d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
        clipRule="evenodd"
      />
    </svg>
  );
}

const Testimonios = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ ease: "easeIn", duration: 0.4, delay: 0.5 }}
    >
      <div className="flex flex-col items-center pt-20 pb-20 bg-transparent mt-36">
        <div className="text-3xl font-titles font-semibold mb-4 text-gray-200">
          Testimonios
        </div>
        <div className="text-6xl font-titles font-extrabold mb-8 text-blue-600">
          Lo que nuestros clientes dicen
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-11/12 max-w-screen-lg">
          <motion.div
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="p-8 bg-white shadow-md rounded-lg"
          >
            <div className="flex items-center mb-2">{stars}</div>
            <div className="text-black text-lg font-bold mb-4">
              Excelente servicio
            </div>
            <p className="text-gray-600 text-base font-semibold">
              Compré un auto tunning desde esta página y fue una excelente
              elección. El proceso fue muy fácil y el servicio de atención al
              cliente fue muy amable y servicial en todo momento. ¡Muy
              recomendable!
            </p>
            <p className="mt-8 font-semibold text-red-600">
              Por Julian Alvarez
            </p>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="p-8 bg-white shadow-md rounded-lg"
          >
            <div className="text-xl font-semibold mb-2">{stars}</div>
            <div className="text-black text-lg font-bold mb-4">
              {" "}
              Muy contento con mi compra
            </div>
            <p className="text-gray-600 text-base font-semibold">
              Hace unas semanas compré un auto tunning desde esta página y no
              podría estar más feliz con mi elección. La calidad del auto es
              excelente y el servicio de atención al cliente fue sobresaliente.
              Sin duda recomiendo esta página a cualquiera que esté buscando un
              auto de alta calidad.
            </p>
            <p className="mt-8 font-semibold text-red-600">
              Por Lautaro Martinez
            </p>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="p-8 bg-white shadow-md rounded-lg"
          >
            <div className="text-xl font-semibold mb-2">{stars}</div>
            <div className="text-black text-lg font-bold mb-4">
              Una experiencia increíble
            </div>
            <p className="text-gray-600 text-base font-semibold">
              Comprar un auto tunning desde esta página fue una experiencia
              increíble. El proceso fue muy fácil y el equipo de atención al
              cliente fue muy útil en todo momento. Además, el auto que compré
              es de una calidad excepcional. ¡Muy recomendable!
            </p>
            <p className="mt-8 font-semibold text-red-600">
              Por Lionel Scaloni
            </p>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default Testimonios;

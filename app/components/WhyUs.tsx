"use client"
import { motion } from "framer-motion";

const WhyUs = () => {
  return (
    <motion.div
      className="flex flex-col justify-center items-center w-full mt-80"
      initial={{ opacity: 0, y: -100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ ease: "easeIn", duration: 0.4, delay: 0.5 }}
    >
      <div className="flex justify-center w-full">
        <img
          src="https://res.cloudinary.com/ddyk63iig/image/upload/v1679098786/auto_tnmo0s.png"
          alt="Car banner"
          className="w-1/2"
        />
      </div>
      <div className="flex flex-col justify-center items-center w-full mt-4">
        <h1 className="text-4xl font-bold text-center text-blue-600">
          Ofrecemos los mejores servicios de venta de autos
        </h1>
        <p className="text-xl mt-6 max-w-2xl text-center text-white ">
          Nuestro objetivo es brindarte la mejor experiencia de compra de
          vehículos posible. Desde el momento en que ingresas a nuestro sitio
          web hasta que conduces tu automóvil fuera de nuestro lote, nos
          aseguramos de que todo el proceso sea lo más fácil y sin problemas
          posible.
        </p>
      </div>
      <div className="flex justify-center  gap-20  items-center w-full mt-16">
        <div className="flex flex-col justify-center items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-8 h-8 text-green-500 mb-4"
          >
            <path
              fill-rule="evenodd"
              d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
              clip-rule="evenodd"
            />
          </svg>

          <h4 className="text-lg font-bold text-blue-400">
            Calidad garantizada
          </h4>
          <p className="text-base mt-2 max-w-xs text-center text-gray-200">
            Todos nuestros vehículos son inspeccionados y pasan por un riguroso
            proceso de selección antes de ser vendidos. Garantizamos que
            nuestros vehículos son de la más alta calidad y cumplen con los
            estándares de seguridad.
          </p>
        </div>
        <div className="flex flex-col justify-center items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-8 h-8 text-green-500 mb-4"
          >
            <path d="M10.464 8.746c.227-.18.497-.311.786-.394v2.795a2.252 2.252 0 01-.786-.393c-.394-.313-.546-.681-.546-1.004 0-.323.152-.691.546-1.004zM12.75 15.662v-2.824c.347.085.664.228.921.421.427.32.579.686.579.991 0 .305-.152.671-.579.991a2.534 2.534 0 01-.921.42z" />
            <path
              fill-rule="evenodd"
              d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM12.75 6a.75.75 0 00-1.5 0v.816a3.836 3.836 0 00-1.72.756c-.712.566-1.112 1.35-1.112 2.178 0 .829.4 1.612 1.113 2.178.502.4 1.102.647 1.719.756v2.978a2.536 2.536 0 01-.921-.421l-.879-.66a.75.75 0 00-.9 1.2l.879.66c.533.4 1.169.645 1.821.75V18a.75.75 0 001.5 0v-.81a4.124 4.124 0 001.821-.749c.745-.559 1.179-1.344 1.179-2.191 0-.847-.434-1.632-1.179-2.191a4.122 4.122 0 00-1.821-.75V8.354c.29.082.559.213.786.393l.415.33a.75.75 0 00.933-1.175l-.415-.33a3.836 3.836 0 00-1.719-.755V6z"
              clip-rule="evenodd"
            />
          </svg>

          <h4 className="text-lg font-bold text-blue-400">Amplia selección</h4>
          <p className="text-base mt-2 max-w-xs text-center text-gray-200">
            Ofrecemos una amplia selección de vehículos de diferentes marcas,
            modelos y años. Además, actualizamos nuestro inventario
            constantemente para ofrecerte los últimos modelos disponibles.
          </p>
        </div>
        <div className="flex flex-col justify-center items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-8 h-8 text-green-500 mb-4"
          >
            <path d="M7.493 18.75c-.425 0-.82-.236-.975-.632A7.48 7.48 0 016 15.375c0-1.75.599-3.358 1.602-4.634.151-.192.373-.309.6-.397.473-.183.89-.514 1.212-.924a9.042 9.042 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3a.75.75 0 01.75-.75 2.25 2.25 0 012.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H14.23c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23h-.777zM2.331 10.977a11.969 11.969 0 00-.831 4.398 12 12 0 00.52 3.507c.26.85 1.084 1.368 1.973 1.368H4.9c.445 0 .72-.498.523-.898a8.963 8.963 0 01-.924-3.977c0-1.708.476-3.305 1.302-4.666.245-.403-.028-.959-.5-.959H4.25c-.832 0-1.612.453-1.918 1.227z" />
          </svg>

          <h4 className="text-lg font-bold text-blue-400 ">
            Precios competitivos
          </h4>
          <p className="text-base mt-2 max-w-xs text-center text-gray-200">
            Ofrecemos precios competitivos en todos nuestros vehículos. Además,
            ofrecemos varias opciones de financiamiento para ayudarte a
            encontrar el automóvil de tus sueños sin sacrificar tus finanzas
            personales.
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default WhyUs;

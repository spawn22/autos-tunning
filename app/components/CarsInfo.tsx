"use client"
import data from "../data/data.json";
import { motion } from "framer-motion";
import { useState } from "react";

interface Cars {
  brand: string;
  model: string;
  year: number;
  engine: string;
  price: number;
  image: string;
  id: number;
}

const CarsInfo = () => {
  const cars = data.cars as Cars[];
  const [selectedCarIndex, setSelectedCarIndex] = useState(0);
  const selectedCar = cars[selectedCarIndex];

  const limit = 6; // Límite de autos a mostrar
  const limitedCars = cars.slice(0, limit);
  return (
    <motion.div
      initial={{ opacity: 0, y: -100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ ease: "easeIn", duration: 0.4, delay: 0.5 }}
    >
    <div className="flex flex-col items-center justify-center mt-48 mb-28   ">
      <div className="text-center mb-10">
        <h1 className="text-red-600 text-4xl font-bold m-10">Nuestros Autos</h1>
        <p className="text-white text-lg m-10">
          Explora nuestra selección de autos de alta calidad
        </p>
      </div>
      <div className="flex flex-row gap-40 w-full">
        <div className="flex flex-col w-1/1 h-90 bg-gray-800 ml-36 ">
          {limitedCars.map((car, index) => (
            <motion.button
              key={index}
              onClick={() => setSelectedCarIndex(index)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className={`${
                selectedCarIndex === index
                  ? "bg-blue-500 text-white"
                  : "bg-white text-black"
              } text-1xl font-titles font-semibold border-none cursor-pointer py-1 px-28  transition-all duration-200 m-5 w-25`}
            >
              {car.brand} {car.model}
            </motion.button>
          ))}
        </div>
        <div className="flex flex-col w-1/3 items-center">
          <motion.img
            key={selectedCar.image}
            src={selectedCar.image}
            alt={`${selectedCar.brand} ${selectedCar.model}`}
            className="w-full"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          />
        </div>
        <div className="flex flex-col w-1/1">
          <motion.div
            key={`${selectedCar.brand} ${selectedCar.model}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl font-bold mb-4 text-blue-400 ">
              {selectedCar.brand} {selectedCar.model}
            </h2>
            <table className="w-full text-white">
              <tbody>
              <tr className="border divide-y">
                  <td className="p-2 font-medium">Model:</td>
                  <td className="p-2">{selectedCar.model}</td>
                </tr>
                <tr className="border divide-y">
                  <td className="p-2 font-medium">Engine:</td>
                  <td className="p-2">{selectedCar.engine}</td>
                </tr>
                <tr className="border divide-y">
                  <td className="p-2 font-medium">Year:</td>
                  <td className="p-2">{selectedCar.year}</td>
                </tr>
                <tr className="border divide-y">
                  <td className="p-2 font-medium">Price:</td>
                  <td className="p-2">${selectedCar.price}</td>
                </tr>
              </tbody>
            </table>
            <div className="mt-4">
              <button className="bg-blue-500 text-white py-2 px-4 rounded-lg">
                Ver más
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
    </motion.div>
  );
};

export default CarsInfo;

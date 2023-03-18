"use client";
import data from "../../data/data.json";
import { motion } from "framer-motion";

interface Car {
  brand: string;
  model: string;
  year: number;
  engine: string;
  price: number;
  image: string;
}

function Cars() {
  const cars = data.cars as Car[];

  return (
    <div className="max-w-5xl mx-auto mt-8 px-4 sm:px-6 lg:px-8">
      <h2 className="text-5xl font-bold text-blue-600 flex justify-center mb-16">
        Autos disponibles
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-6">
        {cars.map((car) => (
          <motion.div
            key={`${car.brand}-${car.model}`}
            className="bg-white overflow-hidden shadow rounded-lg"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.3 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <img
              className="w-full h-48 object-cover"
              src={car.image}
              alt={`${car.brand} ${car.model}`}
            />
            <motion.div
              className="px-4 py-5 sm:p-6 bg-stone-300"
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
            >
              <h3 className="text-lg font-medium text-blue-600">
                {`${car.brand} ${car.model}`}
              </h3>
              <p className="mt-1 text-md font-semibold text-gray-800">{`Year: ${car.year}`}</p>
              <p className="mt-1 text-md font-semibold text-gray-800">{`Engine: ${car.engine}`}</p>
              <p className="mt-1 text-md font-medium text-yellow-600">{`Price: $${car.price}`}</p>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Cars;

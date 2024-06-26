import React from 'react';
import { motion } from 'framer-motion';

const Cars = ({ cars }) => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {cars.map(car => (
                <motion.div key={car.id.carId} className="border rounded"
                            layout
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.5 }}
                >
                    <img
                        src={car.imageUrls[0]}
                        alt={`${car.brand} ${car.model}`}
                        className="w-full h-48 object-cover mb-4"
                    />
                    <h2 className="text-xl font-semibold pl-4">{car.brand} {car.model}</h2>
                    <p className="text-gray-600 pl-4">{car.type}</p>
                    <p className="text-blue-600 font-bold p-4">€{car.price}</p>
                </motion.div>
            ))}
        </div>
    );
};

export default Cars;

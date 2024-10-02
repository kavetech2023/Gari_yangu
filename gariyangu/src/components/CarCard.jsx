import React from 'react'
import { motion } from 'framer-motion'
import { Calendar, MapPin } from 'lucide-react'

const CarCard = ({ car, onViewDetails }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="bg-white rounded-lg shadow-md overflow-hidden"
    >
      <img src={car.image} alt={`${car.make} ${car.model}`} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-900">{car.year} {car.make} {car.model}</h3>
        <p className="mt-1 text-sm text-gray-500">${car.price.toLocaleString()}</p>
        <div className="mt-2 flex items-center text-sm text-gray-500">
          <Calendar className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" />
          <p>{car.year}</p>
        </div>
        <div className="mt-2 flex items-center text-sm text-gray-500">
          <MapPin className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" />
          <p>{car.mileage.toLocaleString()} miles</p>
        </div>
        <div className="mt-4">
          <button
            onClick={() => onViewDetails(car)}
            className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            View Details
          </button>
        </div>
      </div>
    </motion.div>
  )
}

export default CarCard
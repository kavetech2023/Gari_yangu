import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Calendar, MapPin, DollarSign, Clock } from 'lucide-react'

const CarDetails = ({ car, onClose, onBook }) => {
  const [bookingDate, setBookingDate] = useState('')

  const handleBook = () => {
    if (bookingDate) {
      onBook(car, bookingDate)
    } else {
      alert('Please select a date for your test drive.')
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full z-50"
      onClick={onClose}
    >
      <div className="relative top-20 mx-auto p-5 border w-96 shadow-lg rounded-md bg-white"
           onClick={e => e.stopPropagation()}>
        <div className="mt-3 text-center">
          <h3 className="text-lg leading-6 font-medium text-gray-900">{car.year} {car.make} {car.model}</h3>
          <div className="mt-2 px-7 py-3">
            <img src={car.image} alt={`${car.make} ${car.model}`} className="w-full h-48 object-cover rounded-md" />
            <p className="text-sm text-gray-500 mt-1">
              <DollarSign className="inline-block mr-1" size={16} />
              Price: ${car.price.toLocaleString()}
            </p>
            <p className="text-sm text-gray-500 mt-1">
              <MapPin className="inline-block mr-1" size={16} />
              Mileage: {car.mileage.toLocaleString()} miles
            </p>
            <p className="text-sm text-gray-500 mt-1">
              <Calendar className="inline-block mr-1" size={16} />
              Year: {car.year}
            </p>
            <div className="mt-4">
              <label htmlFor="bookingDate" className="block text-sm font-medium text-gray-700">Select Test Drive Date</label>
              <input
                type="date"
                id="bookingDate"
                name="bookingDate"
                value={bookingDate}
                onChange={(e) => setBookingDate(e.target.value)}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
          </div>
          <div className="items-center px-4 py-3">
            <button
              onClick={handleBook}
              className="px-4 py-2 bg-blue-500 text-white text-base font-medium rounded-md w-full shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-300"
            >
              Book Test Drive
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default CarDetails
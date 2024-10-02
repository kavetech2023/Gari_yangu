import React, { useState } from 'react'
import CarCard from './CarCard'
import CarDetails from './CarDetails'

const cars = [
  {
    id: 1,
    make: "Toyota",
    model: "Camry",
    year: 2022,
    price: 25000,
    mileage: 15000,
    image: "https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
  },
  {
    id: 2,
    make: "Honda",
    model: "Civic",
    year: 2021,
    price: 22000,
    mileage: 20000,
    image: "https://images.unsplash.com/photo-1606611013016-969c19ba27bb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
  },
  {
    id: 3,
    make: "Ford",
    model: "Mustang",
    year: 2023,
    price: 35000,
    mileage: 5000,
    image: "https://images.unsplash.com/photo-1584345604476-8ec5e12e42dd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
  },
  {
    id: 4,
    make: "Tesla",
    model: "Model 3",
    year: 2022,
    price: 45000,
    mileage: 10000,
    image: "https://images.unsplash.com/photo-1560958089-b8a1929cea89?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
  },
]

const CarList = () => {
  const [selectedCar, setSelectedCar] = useState(null)
  const [bookings, setBookings] = useState([])

  const handleViewDetails = (car) => {
    setSelectedCar(car)
  }

  const handleCloseDetails = () => {
    setSelectedCar(null)
  }

  const handleBookTestDrive = (car, date) => {
    const newBooking = { car, date }
    setBookings([...bookings, newBooking])
    alert(`Test drive booked for ${car.make} ${car.model} on ${date}`)
    setSelectedCar(null)
  }

  return (
    <div className="bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-extrabold text-gray-900 mb-6">Featured Vehicles</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {cars.map((car) => (
            <CarCard key={car.id} car={car} onViewDetails={handleViewDetails} />
          ))}
        </div>
        {selectedCar && (
          <CarDetails
            car={selectedCar}
            onClose={handleCloseDetails}
            onBook={handleBookTestDrive}
          />
        )}
      </div>
    </div>
  )
}

export default CarList
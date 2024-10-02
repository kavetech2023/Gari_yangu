import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Menu, X, User, ShoppingCart } from 'lucide-react'
import { motion } from 'framer-motion'
import SearchBar from './SearchBar'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <Link to="/" className="text-primary text-3xl font-bold">
            AutoDeal
          </Link>
          <div className="hidden md:block">
            <SearchBar />
          </div>
          <nav className="hidden md:flex items-center space-x-4">
            <Link to="/inventory" className="text-gray-500 hover:text-gray-900">Inventory</Link>
            <Link to="/services" className="text-gray-500 hover:text-gray-900">Services</Link>
            <Link to="/about" className="text-gray-500 hover:text-gray-900">About</Link>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center space-x-2 px-4 py-2 rounded-full border border-gray-200 hover:shadow-md transition duration-200"
            >
              <User className="h-5 w-5" />
              <span>Account</span>
            </motion.button>
          </nav>
          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link to="/inventory" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">Inventory</Link>
            <Link to="/services" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">Services</Link>
            <Link to="/about" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">About</Link>
            <Link to="/account" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">Account</Link>
          </div>
        </div>
      )}
      <div className="md:hidden px-4 py-2">
        <SearchBar />
      </div>
    </header>
  )
}

export default Header
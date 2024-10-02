import React from 'react'
import { Search } from 'lucide-react'

const SearchBar = () => {
  return (
    <div className="flex items-center max-w-md mx-auto bg-white rounded-full shadow-md">
      <input
        className="w-full py-2 px-6 text-gray-700 leading-tight focus:outline-none"
        id="search"
        type="text"
        placeholder="Search for cars..."
      />
      <div className="p-2">
        <button className="bg-primary text-white rounded-full p-2 hover:bg-blue-600 focus:outline-none w-12 h-12 flex items-center justify-center">
          <Search className="h-6 w-6" />
        </button>
      </div>
    </div>
  )
}

export default SearchBar
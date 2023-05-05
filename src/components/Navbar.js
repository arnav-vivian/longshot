import React from 'react'
import { FaFlagUsa } from 'react-icons/fa'

const Navbar = () => {
    return (
        <div className="flex flex-col w-full">
            <p>Keyword Explorer{'>'} Keyword overview</p>
            <p>Keyword shopping in Barcelona</p>
            <div className='flex'>
                <p className='pr-2'>Database: United States</p>
                <FaFlagUsa />
            </div>
            <hr class="w-full h-0.5  my-4 bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-700"></hr>
        </div>
    )
}

export default Navbar
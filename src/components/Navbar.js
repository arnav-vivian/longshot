import React from 'react'
import { FaFlagUsa } from 'react-icons/fa'

const Navbar = () => {
    return (
        <div className="flex flex-col w-full  p-2">
            <p className='text-xs'>Keyword Explorer{'>'} Keyword overview</p>
            <p className='text-md '><b>Keyword:</b> Shopping in Barcelona</p>
            <div className='flex'>
                <p className='pr-2 text-xs'>Database: United States</p>
                <FaFlagUsa />
            </div>
            <hr class="w-full h-0.5  bg-gray-100 border-0 rounded md:my-2 dark:bg-gray-700"></hr>
        </div>
    )
}

export default Navbar
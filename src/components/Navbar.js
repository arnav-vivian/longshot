import React from 'react'
import { FaFlagUsa } from 'react-icons/fa'

const Navbar = () => {
    return (
        <div className="flex flex-col w-full p-2">
            <p className='text-[10px]'>Keyword Explorer{'>'} <span className='text-black font-medium'>Keyword overview</span> </p>
            <p className='text-[14px]'><span className='text-black font-medium'>Keyword:</span> Shopping in Barcelona</p>
            <div className='flex'>
                <p className='pr-2 text-[10px]'>Database: United States</p>
                <FaFlagUsa className='h-[10px] mt-1' />
            </div>
            <hr class="w-full h-0.5  bg-slate-100 border-0 rounded md:my-2"></hr>
        </div>
    )
}

export default Navbar
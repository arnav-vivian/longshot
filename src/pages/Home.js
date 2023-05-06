import React from 'react'
import Sidebar from '../components/Sidebar'
import Navbar from '../components/Navbar'
import Card from '../components/Card'
import Table from '../components/Col'
import Data from "../assets/Data";
import { useState } from 'react'
import Col from '../components/Col'

const Home = () => {

    return (
        <>
            <div className='flex bg-[#F9FAFC]'>
                <Sidebar />
                <div className='w-full'>
                    <Navbar />
                    <div>
                        <Col />
                    </div>
                </div>
            </div>

        </>
    )
}

export default Home
import React from 'react'
import Sidebar from '../components/Sidebar'
import Navbar from '../components/Navbar'
import Card from '../components/Card'
import Table from '../components/Col'
import Data from "../assets/Data";
import { useState } from 'react'
import Col from '../components/Col'

const Home = () => {
    const [active, setActive] = useState("secondCard")
    const handleClick = () => {
    };

    return (
        <>
            <div className='flex'>
                <Sidebar />
                <div className='w-full'>
                    <Navbar />
                    <div className='flex justify-around'>
                        <Card />
                        <Card />
                    </div>
                    <div className='flex justify-between py-4 px-16'>
                        <div class="inline-flex" role="group">
                            <div>
                                <button onClick={() => setActive("firstCard")}>left</button>
                                <button onClick={() => setActive("secondCard")}>middle</button>
                                <button onClick={() => setActive("ThirdCard")}>Right</button>
                            </div>
                        </div>
                        <button class="bg-blue-500 hover:bg-blue-400  font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">
                            Button
                        </button>

                    </div>
                    <div>
                        <Col />
                    </div>
                </div>
            </div>

        </>
    )
}

export default Home
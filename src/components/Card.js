import React from 'react'

import { FaFlagUsa } from 'react-icons/fa'

const Card = () => {
    return (
        <div class="flex flex-wrap justify-center mt-10">

            <div class="p-4 max-w-sm">
                <div class="flex rounded-lg h-full bg-teal-400 p-8 flex-col">
                    <div class="flex-col items-center mb-3">
                        <h2 class="text-white text-lg font-medium">volume</h2>
                        <h2 class="text-white text-lg font-medium">480  </h2>
                    </div>

                    <hr class="w-full h-0.5  bg-gray-100  rounded  dark:bg-gray-700"></hr>
                    <div class="flex flex-col justify-between flex-grow">
                        <p>Keyword dificulty</p>
                        <p>46%</p>
                        <p>Possible</p>
                        <p class="leading-relaxed text-base text-white">Slightly more competition. You'll need well-structured and unique content appropriately optimized for your keywords</p>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card


// import React from 'react'

// const Card = () => {
//     return (
//         <div class="w-full min-h-screen bg-blue-50 p-6">

//             <h1 class="font-bold text-xl text-center md:text-3xl md:mt-12 mb-4">Check out the <span class="text-red-500">Features</span> of our App</h1>



//             <div class="flex flex-wrap justify-center">

//                 <div class="flex flex-col bg-white rounded-lg shadow-md w-full m-6 overflow-hidden sm:w-52">

//                     <img src="images/database-icon.svg" alt="" class="h-20 m-6" />

//                     <h2 class="text-center px-2 pb-5">Database Support</h2>



//                 </div>



//                 <div class="flex flex-col bg-white rounded-lg shadow-md w-full m-6 overflow-hidden sm:w-52">

//                     <img src="images/email-icon.svg" alt="" class="h-20 m-6" />

//                     <h2 class="text-center px-2 pb-5">Email Support</h2>



//                 </div>



//                 <div class="flex flex-col bg-white rounded-lg shadow-md w-full m-6 overflow-hidden sm:w-52">

//                     <img src="images/chat-icon.svg" alt="" class="h-20 m-6" />

//                     <h2 class="text-center px-2 pb-5">Chat Support</h2>



//                 </div>



//                 <div class="flex flex-col bg-white rounded-lg shadow-md w-full m-6 overflow-hidden sm:w-52">

//                     <img src="images/terminal-icon.svg" alt="" class="h-20 m-6" />

//                     <h2 class="text-center px-2 pb-5">Terminal Commands</h2>



//                 </div>

//             </div>

//         </div>
//     )
// }

// export default Card
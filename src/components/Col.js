import { React, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Doughnut } from "react-chartjs-2";


import {
    Chart as ChartJS,
    ArcElement,
    Tooltip,
    Legend
} from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

export default function Col() {
    const p =
    {
        "topic": "shopping in barcelona",
        "country": "us",
        "phrase_search": "fullsearch",
        "columnNames": [
            "Keyword",
            "Search Volume",
            "Intent",
            "CPC",
            "Competition",
            "Number of Results",
            "Trends",
            "Keyword Difficulty"
        ],
        "raw_related_data": [
            [
                "guide",
                "33100",
                "0",
                "0.64",
                "0.01",
                "14720000000",
                "0.27,0.27,0.27,0.27,0.27,0.27,0.18,0.18,0.45,1.00,0.27,0.27",
                "11"
            ],
            [
                "search engine",
                "33100",
                "1",
                "0.27",
                "0.16",
                "2080000000",
                "0.53,0.35,0.28,0.28,0.28,0.43,0.66,0.35,0.82,1.00,1.00,1.00",
                "33"
            ],
            [
                "search engine optimization",
                "33100",
                "0",
                "0.14",
                "0.27",
                "239000000",
                "0.66,0.14,0.23,0.19,0.52,0.14,0.52,1.00,0.80,0.14,0.66,0.52",
                "28"
            ],
            [
                "seo company",
                "27100",
                "0",
                "0.22",
                "0.12",
                "339000000",
                "0.21,0.21,0.21,0.14,0.21,0.39,0.59,0.48,1.00,0.88,0.88,0.59",
                "18"
            ],
            [
                "seo services",
                "27100",
                "0",
                "0.09",
                "0.27",
                "347000000",
                "0.39,0.39,0.72,1.00,1.00,0.01,0.01,0.01,0.01,0.01,0.01,0.01",
                "21"
            ]
        ],
        "raw_broadmatch_data": [
            [
                "shopping in barcelona",
                "480",
                "0",
                "0.24",
                "0.12",
                "313000000",
                "0.21,0.21,0.21,0.14,0.21,0.39,0.59,0.48,1.00,0.88,0.88,0.59",
                "46"
            ],
            [
                "how to open a weed shop in barcelona",
                "320",
                "1",
                "0",
                "0",
                "4800000",
                "0.39,0.39,0.72,1.00,1.00,0.01,0.01,0.01,0.01,0.01,0.01,0.01",
                "12"
            ],
            [
                "best shopping in barcelona",
                "260",
                "0",
                "0",
                "0.05",
                "314000000",
                "0.53,0.35,0.28,0.28,0.28,0.43,0.66,0.35,0.82,1.00,1.00,1.00",
                "44"
            ],
            [
                "shopping in barcelona spain",
                "140",
                "0",
                "0.47",
                "0.06",
                "87900000",
                "0.43,0.43,0.34,0.09,0.43,0.28,0.28,0.15,0.43,1.00,1.00,0.65",
                "44"
            ],
            [
                "best coffee shops in barcelona",
                "90",
                "0",
                "0",
                "0.01",
                "22100000",
                "0.66,0.14,0.23,0.19,0.52,0.14,0.52,1.00,0.80,0.14,0.66,0.52",
                "26"
            ],
            [
                "luxury shopping in barcelona",
                "70",
                "0",
                "0",
                "0.02",
                "19800000",
                "0.21,0.21,0.21,0.21,0.21,0.21,0.14,0.78,0.78,0.78,1.00,1.00",
                "24"
            ],
            [
                "tattoo shops in barcelona spain",
                "70",
                "0",
                "0",
                "0.04",
                "4380000",
                "0.14,0.14,0.14,0.14,0.14,0.52,0.09,0.52,0.52,0.52,0.52,0.09",
                "23"
            ],
            [
                "where to shop in barcelona",
                "70",
                "0",
                "0",
                "0.02",
                "250000000",
                "0.21,0.21,0.21,0.21,0.21,0.28,0.35,0.35,1.00,1.00,1.00,1.00",
                "36"
            ],
            [
                "best places to shop in barcelona",
                "40",
                "0",
                "0",
                "0.03",
                "0",
                "0.27,0.27,0.27,0.27,0.27,0.27,0.18,0.18,0.45,1.00,0.27,0.27",
                "42"
            ],
            [
                "is shopping cheap in barcelona",
                "40",
                "0",
                "0",
                "0",
                "21500000",
                "0.14,0.64,0.14,0.14,0.00,0.35,0.14,0.14,1.00,0.14,0.14,0.14",
                "36"
            ]
        ],
        "raw_question_data": [
            [
                "is it expensive to shop",
                "33100",
                "0",
                "0.64",
                "0.01",
                "14720000000",
                "0.27,0.27,0.27,0.27,0.27,0.27,0.18,0.18,0.45,1.00,0.27,0.27",
                "11"
            ],
            [
                "cheap things in barcelona",
                "33100",
                "1",
                "0.27",
                "0.16",
                "2080000000",
                "0.53,0.35,0.28,0.28,0.28,0.43,0.66,0.35,0.82,1.00,1.00,1.00",
                "33"
            ],
            [
                "costliest accessories",
                "33100",
                "0",
                "0.14",
                "0.27",
                "239000000",
                "0.66,0.14,0.23,0.19,0.52,0.14,0.52,1.00,0.80,0.14,0.66,0.52",
                "28"
            ],
            [
                "trending items",
                "27100",
                "0",
                "0.22",
                "0.12",
                "339000000",
                "0.21,0.21,0.21,0.14,0.21,0.39,0.59,0.48,1.00,0.88,0.88,0.59",
                "18"
            ],
            [
                "jewellery",
                "27100",
                "0",
                "0.09",
                "0.27",
                "347000000",
                "0.39,0.39,0.72,1.00,1.00,0.01,0.01,0.01,0.01,0.01,0.01,0.01",
                "21"
            ]
        ],
        "request_id": "74bf439b-ffc7-493a-b758-1e37c80c5c29",
        "status": 200,
        "created_date": "2022-11-19T05:39:27.001544"
    };

    const [isHovering, setIsHovering] = useState(false);
    const [color, setColor] = useState();

    const handleMouseEnter = () => {
        setIsHovering(true);
    };

    const handleMouseLeave = () => {
        setIsHovering(false);
    };


    function getIntentInfo(intentType) {
        const intentMap = {
            0: {
                type: "Commercial",
                'hover-text': "The user wants to investigate brands or services.",
                color: { bg: "#FCE081", text: "#A75800", hover: "#ffca6e" },
            },
            1: {
                type: "Informational",
                'hover-text': "The user wants to find an answer to a specific question.",
                color: { bg: "#C4E5FE", text: "#006DCA", hover: "#61c6ff" },
            },
            2: {
                type: "Navigational",
                'hover-text': "The user wants to find a specific page or site.",
                color: { bg: "#EDD9FF", text: "#8649E1", hover: "#c59dfa" },
            },
            3: {
                type: "Transactional",
                'hover-text': "The user wants to complete an action (conversion).",
                color: { bg: "#9EF2C9", text: "#007C65", hover: "#11d6a6" },
            },
        };

        return intentMap[intentType];
    }


    const keywordDifficulty = function (value) {
        if (value > 85) {
            return {
                rating: "Very hard",
                text:
                    "The absolute hardest keywords to compete for, especially for a new website. These will demand a lot of on page SEO, link building, and content promotion efforts to eventually rank and acquire traffic.",
                color: "#D1002F",
            };
        } else if (value >= 70) {
            return {
                rating: "Hard",
                text:
                    "Even stiffer competition. These keywords will demand more effort in terms of getting higher authority referring domains in order to rank your well-optimized and helpful content among the top pages.",
                color: "#FF4953",
            };
        } else if (value >= 50) {
            return {
                rating: "Difficult",
                text:
                    "You'll need to have some backlinks in addition to your well-structured, helpful and optimized content in order to compete here.",
                color: "#FF8C43",
            };
        } else if (value >= 30) {
            return {
                rating: "Possible",
                text:
                    "Slightly more competition. You'll need well-structured and unique content appropriately optimized for your keywords.",
                color: "#FDC23C",
            };
        } else if (value >= 15) {
            return {
                rating: "Easy",
                text:
                    "These keywords have some competition but are still possible to rank for when you're starting out. To be able to rank for these, you'll need quality content focused on the keyword's intent.",
                color: "#59DDAA",
            };
        } else if (value >= 9) {
            return {
                rating: "Very easy",
                text:
                    "These are the best opportunities to start ranking new webpages on Google as soon as possible without backlinks.",
                color: "#009F81",
            };
        } else {
            return {
                rating: "",
                text:
                    "",
                color: "#009F81",
            };
        }
    }


    const [show, setShow] = useState(0);
    const [state, setState] = useState('broadmatch');
    const [selectedRow, setSelectedRow] = useState(['shopping in barcelona', '480', '0', '0.24', '0.12', '313000000', '0.21,0.21,0.21,0.14,0.21,0.39,0.59,0.48,1.00,0.88,0.88,0.59', '46']);
    var p1 = p.raw_broadmatch_data;
    var p2 = p.raw_question_data;
    var p3 = p.raw_related_data;
    // console.log(p1);

    const [checked, setChecked] = useState(false);
    function handleChange(e, param1) {
        setChecked(e.target.checked);
        // console.log(param1)
        setSelectedRow(param1)
        //console.log("ssad")
        console.log(selectedRow)
    }
    const navigate = useNavigate();
    const handlebutton = () => {
        navigate('/drop')
    }

    useEffect(() => {
        // console.log(selectedRow[7]);

        // let selRo = selectedRow[6];
        // console.log(selRo);
        // const dataArray = selRo.split(",");
        // const firstData = dataArray.slice(0, 1);
        //console.log(firstData);

    }, [selectedRow]);

    // if (setColor(0)) {

    // }
    // else if (setColor(1)) {

    // }
    // if (setColor(2)) {

    // }



    // console.log(p1[0])

    const intentInfo = getIntentInfo(selectedRow[2]);
    //console.log(intentInfo.type); // Output: "Commercial"
    // console.log(intentInfo['hover-text']); // Output: "The user wants to investigate brands or services."
    //const bg = intentInfo.color.bg; // Output: "#FCE081"
    // const yur = keywordDifficulty(selectedRow[7]).rating;


    const rating = selectedRow[7];
    console.log(rating);
    const options = {
        responsive: false,
        maintainAspectRatio: false,
        // width: 1
        height: 10,
    };
    const data = {
        labels: ["Data 1", "Data 2"],
        datasets: [
            {
                data: [rating, 100 - rating],
                backgroundColor: ["##FFFF00", " #f5f5f5"],
                hoverBackgroundColor: ["#FFFF00", "# #f5f5f5"],
            },
        ],
    };
    const vol = selectedRow[5] / 1000000;
    return (
        <div className="flex flex-col">

            <div className="flex justify-center  ">
                <div class="flex flex-wrap justify-center">

                    <div class="p-4 w-96 h-[140] mr-8 bg-white">
                        <div class="flex rounded-lg h-full p-2 flex-col">
                            <div class="flex-col items-center mb-3">
                                <h2 class=" text-[12px] font-medium ">Volume</h2>
                                <h2 class=" text-lg font-extrabold">{selectedRow[1]}</h2>
                            </div>
                            <hr class="w-full h-0.5  bg-slate-100 border-0 rounded md:my-2"></hr>
                            <div class="flex flex-col">
                                <p className="text-[12px] font-medium mt-2">Keyword dificulty</p>
                                <p className="font-extrabold text-[18px] mt-2">{selectedRow[7]}%</p>
                                <p className="font-medium text-[14px] mt-2"> {keywordDifficulty(selectedRow[7]).rating}</p>
                                <div className="my-3"><Doughnut data={data} options={options} /></div>

                                <p class="leading-relaxed text-xs mt-4">{keywordDifficulty(selectedRow[7]).text}</p>

                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex-col">
                    <div class="flex flex-wrap justify-center mt-2 Class
                    border-solid ">

                        <div class=" w-96 h-32">
                            <div class="flex rounded-lg h-full bg-white p-4 flex-col">
                                <div class="flex-col items-center mb-3">
                                    <h2 class="  font-medium">Intent</h2>
                                    <div className=" text-md font-medium bg-yellow-400 rounded-3xl px-3 w-32 hover:text-orange-500  hover:bg-yellow-600" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>{intentInfo?.type}</div>
                                    <div className=" text-md font-medium bg-yellow-400 rounded-3xl px-3 w-32 hover:text-orange-500  hover:bg-yellow-600" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>{intentInfo?.type}</div>
                                    {isHovering && (
                                        <div className=" bg-white w-92 h-16 z-10" >
                                            <span className="  flex justify-center items-center">{intentInfo['hover-text']}</span>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="flex flex-wrap justify-center mt-6">

                        <div class=" w-96 h-32">
                            <div class="flex rounded-lg h-full bg-white p-4 flex-col -z-10">
                                <div class="flex-col items-center mb-3">
                                    <h2 class=" text-[16px] font-medium">Results</h2>
                                    <h2 class=" text-[32px]  font-bold">{vol} M</h2>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div class="flex flex-wrap justify-center mt-6">

                        <div class=" w-96 h-32">
                            <div class="flex rounded-lg h-full bg-white p-4 flex-col">
                                <div class="flex-col items-center">
                                    <div className="flex justify-around  items-center">
                                        <div className="flex flex-col">
                                            <h2 class="text-md font-medium">CPC</h2>
                                            <h2 class="text-[28px] font-extrabold">${selectedRow[3]}  </h2>
                                        </div>
                                        <div className="flex flex-col">
                                            <h2 class=" text-md font-medium">Com.</h2>
                                            <h2 class=" text-[28px] font-extrabold">{selectedRow[4]}  </h2>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-wrap justify-start font-medium text-center mx-3 text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400">
                <div>
                    <button class="inline-block p-2 text-[12px] m-2 text-black bg-gray-100 rounded-lg active" onClick={() => setState('related')}>related</button>
                    <button class="inline-block p-2 text-[12px] m-2 text-black bg-gray-100 rounded-lg active" onClick={() => setState('question')}>questions</button>
                    <button class="inline-block p-2 text-[12px] m-2 text-black bg-gray-100 rounded-lg active" onClick={() => setState('broadmatch')}>broadmatch</button>

                    <button class="inline-block p-2 text-[12px] m-2 text-black bg-red-400 rounded-lg active" onClick={() => { handlebutton() }}>DragDrop</button>

                </div>
            </div>

            <div className="">
                <div className="p-1.5 w-full inline-block align-middle ">
                    <div className=" border rounded-lg ">
                        <table className="min-w-full divide-y divide-gray-200 text-[10px] ">
                            <tr className="bg-gray-50">
                                <th scope="col"
                                    className="px-1 py-3 text-[8px] font-extrabold text-left text-gray-500 uppercase ">Checkbox</th>
                                <th
                                    scope="col"
                                    className="px-3 py-3 text-[8px] font-extrabold text-left text-gray-500 uppercase "
                                >
                                    {p.columnNames[0]}
                                </th>
                                <th
                                    scope="col"
                                    className="px-3 py-3 text-[8px] font-extrabold text-left text-gray-500 uppercase "
                                >
                                    {p.columnNames[1]}
                                </th>
                                <th
                                    scope="col"
                                    className="px-2 py-3 text-[8px] font-extrabold  text-gray-500 uppercase "
                                >
                                    {p.columnNames[2]}
                                </th>
                                <th
                                    scope="col"
                                    className="px-2 py-3 text-[8px] font-extrabold  text-gray-500 uppercase "
                                >
                                    {p.columnNames[3]}
                                </th>
                                <th
                                    scope="col"
                                    className="px-2 py-3 text-[8px] font-extrabold  text-gray-500 uppercase "
                                >
                                    {p.columnNames[4]}
                                </th>
                                <th
                                    scope="col"
                                    className="px-2 py-3 text-[8px] font-extrabold  text-gray-500 uppercase "
                                >
                                    {p.columnNames[5]}
                                </th>
                                <th
                                    scope="col"
                                    className="px-3 py-3 text-[8px] font-extrabold  text-gray-500 uppercase "
                                >
                                    {p.columnNames[6]}
                                </th>
                                <th
                                    scope="col"
                                    className="px-1 py-3 text-[8px] font-extrabold  text-gray-500 uppercase "
                                >
                                    {p.columnNames[7]}
                                </th>
                            </tr>

                            {state === 'broadmatch' && p1.map((item) => {
                                return (
                                    <tr>
                                        <td className="pl-3">
                                            <input value="test" type="radio" name="relate" onChange={e => handleChange(e, item)} />
                                        </td>
                                        {item.map((item1, index) => {
                                            return (
                                                <td className="px-2 py-4  text-gray-800 whitespace-nowrap" key={index}>
                                                    {item1}

                                                </td>
                                            )
                                        })}</tr>
                                )
                            })}
                            {state === 'question' && p2.map((item) => {
                                return (
                                    <tr>
                                        <td className="pl-3">
                                            <input value="test" type="radio" name="relate" onChange={e => handleChange(e, item)} />


                                        </td>
                                        {item.map((item1, index) => {
                                            return (
                                                <td className="px-3 py-4 text-gray-800 whitespace-nowrap" key={index}>
                                                    {item1}

                                                </td>
                                            )

                                        })}</tr>
                                )
                            })}
                            {state === 'related' && p3.map((item) => {
                                return (
                                    <tr>
                                        <td className="pl-3">
                                            <input value="test" type="radio" name="relate" onChange={e => handleChange(e, item)} />


                                        </td>
                                        {item.map((item1, index) => {
                                            return (
                                                <td className="px-2 py-4  text-gray-800 whitespace-nowrap" key={index}>
                                                    {item1}

                                                </td>
                                            )

                                        })}</tr>
                                )
                            })}
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}
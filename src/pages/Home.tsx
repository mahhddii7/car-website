import React, { useEffect, useState } from "react"
// import GetAllPockers from "../services/Pockers"
import Pocker from "../model/pocker"
import { Link } from "react-router-dom"
import { Header } from "../component/home/Header"
import { Engine } from "../component/home/Engine"
import { WheelTire } from "../component/home/WheelTire"
import { Lights } from "../component/home/Lights"
import { Loading } from "../component/loading"

export const Home = () => {
    const [data, setData] = useState([])
    const [height, setHeight] = useState(0)
    useEffect(() => {
        // const get = async () => {
        //     const res = await GetAllPockers()
        //     setData(res.results);
        // }
        // get()
        setHeight(document.body.clientHeight - 700)
        const svg: any = document.getElementById("svgPath");
        const length = svg?.getTotalLength();

        // start positioning of svg drawing
        svg.style.strokeDasharray = length;

        // hide svg before scrolling starts
        svg.style.strokeDashoffset = length;

        window.addEventListener("scroll", function () {
            const scrollpercent = (document.body.scrollTop + document.documentElement.scrollTop) / (document.documentElement.scrollHeight - document.documentElement.clientHeight);

            const draw = length * scrollpercent;

            // Reverse the drawing when scroll upwards
            svg.style.strokeDashoffset = length - draw;
        });
    }, [])

    return (
        <>
            <Loading />
            <Header />
            <svg width="357" height={height} className="svg-draw hidden sm:block"><path id="svgPath" stroke="#1085c7" stroke-width="4px" stroke-dasharray="20, 10" fill="none" d="M268,106C293.6990093311958,156.98197064989517,319.39801866239156,207.96394129979035,282,250C244.6019813376084,292.03605870020965,144.10693468162947,325.1262054507337,89,388C33.89306531837054,450.8737945492663,24.174242611090563,543.5312368972745,18,666C11.82575738890944,788.4687631027255,9.196094874008299,940.7488469601676,13,1056C16.8039051259917,1171.2511530398324,27.04137789287624,1249.4733752620546,71,1351C114.95862210712376,1452.5266247379454,192.6383935544868,1577.3576519916141,242,1659C291.3616064455132,1740.6423480083859,312.40504788917667,1779.0960167714886,268,1879C223.59495211082336,1978.9039832285114,113.74141488880667,2140.258280922432,88,2337C62.25858511119333,2533.741719077568,120.62929255559666,2765.8708595387843,179,2998"></path>
                <path id="" className="narmol" stroke="#fff" stroke-width="6px" stroke-dasharray="20" fill="none" d="M268,106C293.6990093311958,156.98197064989517,319.39801866239156,207.96394129979035,282,250C244.6019813376084,292.03605870020965,144.10693468162947,325.1262054507337,89,388C33.89306531837054,450.8737945492663,24.174242611090563,543.5312368972745,18,666C11.82575738890944,788.4687631027255,9.196094874008299,940.7488469601676,13,1056C16.8039051259917,1171.2511530398324,27.04137789287624,1249.4733752620546,71,1351C114.95862210712376,1452.5266247379454,192.6383935544868,1577.3576519916141,242,1659C291.3616064455132,1740.6423480083859,312.40504788917667,1779.0960167714886,268,1879C223.59495211082336,1978.9039832285114,113.74141488880667,2140.258280922432,88,2337C62.25858511119333,2533.741719077568,120.62929255559666,2765.8708595387843,179,2998" ></path></svg>
            <Engine />
            <WheelTire />
            <Lights />
        </>
    )
}
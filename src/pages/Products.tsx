import React, { useEffect, useState } from "react"
import {  useParams } from "react-router-dom"
// import { GetPockerById } from "../services/Pockers"
import Product from "../model/product"
import { Loading } from "../component/loading"
export const Products = () => {

    const [data, setData] = useState({} as Product)
    const route = useParams()
    useEffect(() => {
        // const get = async () => {
        //     const res = await GetPockerById(route.id)
        //     setData(res);
        // }
        // get()
    }, [])

    return (
        <main className="grid lg:grid-cols-2 place-items-center pt-16 pb-8 md:pt-8">
            <div>
                <h1 className="text-5xl lg:text-6xl xl:text-7xl font-bold lg:tracking-tight">
                    {data.name == undefined ? <Loading /> : data.name}
                </h1>
                <p className="text-lg mt-4 text-slate-600 max-w-xl">
                    Astroship is a starter template for startups, marketing websites & landing
                    pages.<wbr /> Built with Astro.build, TailwindCSS & Alpine.js. You can quickly
                    create any website with this starter.
                </p>

            </div>
        </main>
    )
}
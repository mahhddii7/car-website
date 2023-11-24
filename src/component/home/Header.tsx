import { MouseEvent, useEffect, useRef, useState } from "react"


export const Header = () => {

    const refImage = useRef<HTMLImageElement>(null)
    const refImageBg = useRef<HTMLImageElement>(null)
    const refElem = useRef<HTMLImageElement>(null)
    useEffect(() => {
        setTimeout(() => {
            if (refImage.current) {
                refImage.current.className = refImage?.current?.className + ' active'
            }
        }, 200);
        setTimeout(() => {
            if (refElem.current && refImageBg.current) {
                refElem.current.className = refElem?.current?.className + ' active'
                refImageBg.current.className = refImageBg?.current?.className + ' active'
            }
        }, 800);
    }, [])
    return (
        <>

            <div className="header col-span-12 grid grid-cols-2 gap-2 pt-32 px-8 h-auto sm:h-screen relative">
                <div ref={refImageBg} className="bg-left"></div>
                <div className="md:col-auto col-span-6 float-right text-center sm:text-rigth m-auto text-gradient z-10">
                    <h1 className="text-white text-5xl lg:text-7xl ">BMW M8</h1>
                    <p className="text-white text-lg lg:text-3xl ">The new BMW M8 Gran Competition Coupé and the new BMW M8 Gran Coupé combine pure M genes with supreme exclusivity. </p>
                    <button className="btn-buy md:float-left ml-8 mt-10 py-2 px-8 rounded-md ">Buy Now</button>
                </div>
                <div className=" md:col-auto col-span-6 float-left m-auto relative py-20 md:py-0">
                    <div ref={refElem} className="back-circle hidden sm:block"></div>
                    <img ref={refImage} src="header2.png" className="relative z-10 header-car" alt="" />
                </div>
            </div>
        </>
    )
}
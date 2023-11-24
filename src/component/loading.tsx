

import React, { useEffect, useRef } from "react";


export const Loading = () => {
    const refImage = useRef<HTMLImageElement>(null)
    useEffect(() => {
        setTimeout(() => {
            if (refImage.current) {
                refImage.current.classList.add('active')
            }
        }, 400);
    }, [])
    return (
        <div className="loading grid grid-cols-8" ref={refImage}>
           <div className="col-auto right-side"></div>
           <div className="col-auto left-side"></div>
           <div className="col-auto right-side"></div>
           <div className="col-auto left-side"></div>
           <span className="text-load">Loading ...</span>
           <div className=" col-auto right-side"></div>
           <div className=" col-auto left-side"></div>
           <div className=" col-auto right-side"></div>
           <div className=" col-auto left-side"></div>
        </div>
    )
}
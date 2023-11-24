import React, { useEffect, useMemo, useRef, useState } from "react"


export const Engine = () => {
    const ref1 = useRef<HTMLImageElement>(null);
    const isInViewport1 = useIsInViewport(ref1);
    console.log('isInViewport1: ', isInViewport1);
    useEffect(() => {
        // 👇️ listen for changes
        console.log(isInViewport1);
        if (isInViewport1) {
            if (ref1.current) {
               ref1?.current?.classList?.add('active') 
            }
        }
    }, [isInViewport1]);
    return (
        <>
            <div className="header col-span-12 grid grid-cols-2 gap-2 px-8 h-auto sm:h-screen" >
                <div className=" md:col-auto col-span-6 float-left m-auto relative order-2 py-20 md:py-0 md:order-1">
                    <img src="engine.jpg" className="relative engine-img shadow-2xl shadow-black" alt="" ref={ref1} />
                </div>
                <div className=" md:col-auto col-span-6 sm:float-right m-auto text-center sm:text-rigth text-gradient sm:ps-14 order-1 md:order-2" >
                    <h1 className="text-white text-5xl lg:text-7xl mb-4">Engine</h1>
                    <p className="text-white text-lg lg:text-3xl">The M8 is powered by a twin-turbo 4.4-liter V-8 that makes 617 horsepower and 553 pound-feet of torque</p>
                </div>
            </div>
        </>
    )

    function useIsInViewport(ref: any) {
        const [isIntersecting, setIsIntersecting] = useState(false);

        const observer = useMemo(
            () =>
                new IntersectionObserver(([entry]) =>
                    setIsIntersecting(entry.isIntersecting),
                ),
            [],
        );

        useEffect(() => {
            observer.observe(ref.current);

            return () => {
                observer.disconnect();
            };
        }, [ref, observer]);

        return isIntersecting;
    }
}
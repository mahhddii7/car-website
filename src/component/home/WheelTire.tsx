import React, { useEffect, useMemo, useRef, useState } from "react"


export const WheelTire = () => {
    
    const ref1 = useRef<HTMLImageElement>(null);
    const isInViewport1 = useIsInViewport(ref1);
    console.log('isInViewport1: ', isInViewport1);
    useEffect(() => {
        // 👇️ listen for changes
        console.log(isInViewport1);
        if (isInViewport1) {
            if (ref1.current) {
                ref1?.current?.classList.add('active')
            }
        }
    }, [isInViewport1]);
    return (
        <>

            <div className="col-span-12 grid grid-cols-2 gap-2 px-8 h-auto sm:h-screen">
                <div className="md:col-auto col-span-6 text-center sm:text-rigth my-auto text-gradient">
                    <h1 className="text-white text-5xl lg:text-7xl mb-4">BMW M8 Tyre Options</h1>
                    <p className="text-white text-lg lg:text-3xl">275/35 ZR 20 102Y (Front) </p>
                </div>
                <div className=" md:col-auto col-span-6 float-left m-auto relative my-20 md:my-0">
                    <img ref={ref1} src="wheel.png" className="relative z-10 tire" alt="" />
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
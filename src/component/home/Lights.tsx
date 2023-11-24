import React, { useEffect, useMemo, useRef, useState } from "react"

export const Lights = () => {
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

            <div className="col-span-12 grid grid-cols-2 gap-2 px-8">
                <div className=" md:col-auto col-span-6 float-left m-auto relative order-2 md:order-1">
                    <img ref={ref1} src="lights.jpg" className="relative z-10 rounded-3xl lights shadow-2xl shadow-black" alt="" />
                </div>
                <div className="md:col-auto col-span-6 my-auto text-gradient text-center sm:text-rigth md:pl-24 pb-10 md:pb-0 order-1 md:order-2">
                    <h1 className="text-white text-5xl lg:text-7xl mb-4">BMW M8 Lights</h1>
                    <p className="text-white text-lg lg:text-3xl ">Each of the main headlights uses six “Oslon Black Flat S” LEDs (3-chip version), which are very compact and particularly bright. For the auxiliary headlights on the BMW M8 GTE, the “Olstar Headlamp” was selected and specifically developed for applications requiring bright light and provides a seamless, white light. </p>
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
import React from "react"



export const Footer = () => {
    return (
        <>
            <div className="footer col-span-12 grid grid-cols-4 md:px-32 py-12 mt-20 border-t-2 shadow-2xl shadow-slate-600">
                <div className="links-parent mx-auto col-span-12 md:col-auto text-center md:text-left">
                    <span className=" border-b-2">Quick Links</span>
                    <ul>
                        <li className=" text-sm text-gray-500 my-2 cursor-pointer">
                            <span>Home</span>
                        </li>
                        <li className=" text-sm text-gray-500 my-2 cursor-pointer">
                            <span>BMW in your country</span>
                        </li>
                        <li className=" text-sm text-gray-500 my-2 cursor-pointer">
                            <span>BMW Group Careers</span>
                        </li>
                        <li className=" text-sm text-gray-500 my-2 cursor-pointer">
                            <span>Regulation</span>
                        </li>
                        <li className=" text-sm text-gray-500 my-2 cursor-pointer">
                            <span>Compatibility Check</span>
                        </li>
                        <li className=" text-sm text-gray-500 my-2 cursor-pointer">
                            <span>Software Update</span>
                        </li>
                    </ul>
                </div>
                <div className="links-parent mx-auto col-span-12 md:col-auto text-center md:text-left my-8 md:my-0">
                    <span className=" border-b-2">More BMW Websites</span>
                    <ul>
                        <li className=" text-sm text-gray-500 my-2 cursor-pointer">
                            <span>BMW M</span>
                        </li>
                        <li className=" text-sm text-gray-500 my-2 cursor-pointer">
                            <span>BMW M Motorsport</span>
                        </li>
                        <li className=" text-sm text-gray-500 my-2 cursor-pointer">
                            <span>BMW Welt</span>
                        </li>
                        <li className=" text-sm text-gray-500 my-2 cursor-pointer">
                            <span>BMW Group Classic</span>
                        </li>
                        <li className=" text-sm text-gray-500 my-2 cursor-pointer">
                            <span>BMW Group</span>
                        </li>
                        <li className=" text-sm text-gray-500 my-2 cursor-pointer">
                            <span>BMW Group Culture</span>
                        </li>
                    </ul></div>
                <div className="links-parent mx-auto col-span-12 md:col-auto text-center md:text-left">
                    <span className=" border-b-2">BMW.com</span>
                    <ul>
                        <li className=" text-sm text-gray-500 my-2 cursor-pointer">
                            <span>About BMW.com</span>
                        </li>
                        <li className=" text-sm text-gray-500 my-2 cursor-pointer">
                            <span>Cookies</span>
                        </li>
                        <li className=" text-sm text-gray-500 my-2 cursor-pointer">
                            <span>Imprint</span>
                        </li>
                    </ul>
                </div>
                <div className="links-parent mx-auto col-span-12 md:col-auto text-center md:text-left">
                    <label htmlFor="contact-us" className="border-b-2">Enter Your Email:</label>
                    <input type="email"  className="text-black border-0 shadow-lg block mt-4 text-center md:text-left text-sm p-3 rounded-xl" placeholder="example@gmail.com"/>
                </div>
            </div>

        </>
    )
}
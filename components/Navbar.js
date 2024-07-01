import { Component, useState } from "react";
import { BsList } from 'react-icons/bs'
import { HiOutlineMenuAlt4 } from 'react-icons/hi'
import { AiOutlineClose } from 'react-icons/ai'
import { FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa'

const Navbar = () => {

    const [nav, setNav] = useState(false);
    const [logo, setLogo] = useState(false)
    const handleNav = () => {
        setNav(!nav);
        setLogo(!logo);
    }

    const [showMenu, setShowMenu] = useState(false);

    const toggleMenu = () => {
        setShowMenu(!showMenu);
    }

    return (
        <div className="flex  w-full justify-between items-center h-20 p-4px absolute z-10 text-white">
            <div className="logo-div pl-8 ">
                <h1 className={logo ? 'hidden' : 'block'}>
                    <img className="w-[25%] cursor-pointer" src="\2.png"
                        alt="logo" />
                </h1>
            </div>

            <div className="header-menu-div pr-8">
                <ul className="hidden md:flex">
                    <li className="p-4 cursor-pointer font-semibold text-lg m-4">Home</li>
                    <li className="p-4 cursor-pointer font-semibold text-lg m-4">Product</li>
                    <li className="p-4 cursor-pointer font-semibold text-lg m-4">Services</li>
                    <li className="p-4 cursor-pointer font-semibold text-lg m-4">
                        {/*new code  */}

                        <div className="container relative">
                            <div className="more">
                                <button id="more-btn" className="more-btn" onClick={toggleMenu}>
                                    <span className="more-dot"><BsList /></span>

                                </button>
                                {showMenu && (
                                    <div className="more-menu absolute top-full left-[-30px] bg-slate-100/55 p-2">

                                        <ul className="more-menu-items" tabIndex="-1" role="menu" aria-labelledby="more-btn" aria-hidden="true">
                                            <li className="more-menu-item" role="presentation">
                                                <button type="button" className="more-menu-btn" role="menuitem">Share</button>
                                            </li>
                                            <li className="more-menu-item" role="presentation">
                                                <button type="button" className="more-menu-btn" role="menuitem">Copy</button>
                                            </li>
                                            <li className="more-menu-item" role="presentation">
                                                <button type="button" className="more-menu-btn" role="menuitem">Embed</button>
                                            </li>
                                            <li className="more-menu-item" role="presentation">
                                                <button type="button" className="more-menu-btn" role="menuitem">Block</button>
                                            </li>
                                            <li className="more-menu-item" role="presentation">
                                                <button type="button" className="more-menu-btn" role="menuitem">Report</button>
                                            </li>
                                        </ul>


                                    </div>
                                )}
                            </div>
                        </div>

                        {/*  */}

                    </li>
                </ul>
            </div>
            {/* hambuger */}
            <div onClick={handleNav} className="md:hidden z-10">
                {nav ? <AiOutlineClose size={20} /> : <HiOutlineMenuAlt4 size={20} />}

            </div>
            {/* Mobile Menu Dropdown */}

            <div className={nav ? 'absolute left-0 top-0 w-full bg-gray-200 px-4 py-7 flex flex-col' : 'absolute left-[-100%] '}>

                <ul className={nav ? " text-blue-500" : 'absolute left-[-100%] '}>
                    <h1>
                        <img className="w-[25%] cursor-pointer" src="\2.png"
                            alt="logo" />

                    </h1>
                    <li className="border-b">Home</li>
                    <li className="border-b">Products</li>
                    <li className="border-b">About us</li>
                    <li className="border-b">Contact</li>
                </ul>
                <div className={nav ? "flex flex-col" : "'absolute left-[-100%]"}>
                    <button className="p-3 my-6 m-3 border bg-gradient-to-r from-[blue] to-[green] text-white rounded-md">Search</button>
                    <button className="p-3 my-6 m-3 border bg-gradient-to-r from-[blue] to-[green] text-white rounded-md">Account</button>
                </div>
                <div className="flex">
                    <FaFacebook className='icon  text-[#4b4bce] size-7 m-2 cursor-pointer ' />
                    <FaInstagram className='icon text-[#4b4bce] size-7 m-2 cursor-pointer' />
                    <FaYoutube className='icon   text-[#4b4bce] size-7 m-2 cursor-pointer' />
                </div>
            </div>
        </div>
    )
}
export default Navbar 
import { HiOutlineMenuAlt4 } from 'react-icons/hi';
import { AiOutlineClose } from 'react-icons/ai';
 import { useRouter } from 'next/router';
//import { useRouter, usePathname } from 'next/navigation';
import { useState } from 'react';
import Link from 'next/link';

const Header = () => {
    const [nav, setNav] = useState(false);
    const [logo, setLogo] = useState(false);
    const router = useRouter();
    const pathname = router.pathname;


    const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);

    const handleMenuHover = () => {
        setIsSubMenuOpen(true);
    };

    const handleMenuLeave = () => {
        setIsSubMenuOpen(false);
    };
    const handleNav = () => {
        setNav(!nav);
        setLogo(!logo);
        setIsSubMenuOpen(false); // Close the submenu when toggling the main menu

    };

    const handleLinkClick = () => {
        setNav(false);
        setIsSubMenuOpen(!isSubMenuOpen); // Toggle the submenu state on click

    };

    const [showMenu, setShowMenu] = useState(false)
    const scrollToProduct = () => {
        let path = pathname;
        
        if (path == '/') {
            const productSection = document.getElementById('product');
            if (productSection) {
                window.scrollTo({
                    top: productSection.offsetTop,
                    behavior: 'smooth',
                });
            }
        } else {
            router.push('/');
        }
    };
    const toggleMenu = () => {
        if (window.innerWidth < 1024) {
            setIsSubMenuOpen(!isSubMenuOpen);
        } else {
            setIsSubMenuOpen(false);
        }
    };


    return (
        <div className="p-4px absolute z-10 flex h-20 w-full items-center justify-between text-white">
            <div className="logo-div pl-8">
                <h1 className={logo ? 'hidden' : 'block'}>
                    <Link href="/">
                        <img className="w-30 h-10 cursor-pointer" src="\2.png" alt="logo" />
                    </Link>
                </h1>
            </div>

            <div className="header-menu-div pr-8">
                <ul className="hidden md:flex">
                    <Link href="/">
                        <li className="m-4 mt-5 cursor-pointer p-4 text-lg font-semibold hover:border-b-2 hover:border-white hover:text-white">Home</li>
                    </Link>
                    <li className="m-4 mt-5 cursor-pointer p-4 text-lg font-semibold hover:border-b-2 hover:border-white hover:text-white" onClick={scrollToProduct}>
                        Products
                    </li>

                    <li className="m-4 cursor-pointer p-4 text-lg font-semibold " onClick={handleLinkClick}>


                        <Link
                            href="/services"

                        >
                            Services
                        </Link>

                        <div className={`transition inline-block duration-500 ${isSubMenuOpen ? 'rotate-180' : ''} ltr:ml-2 rtl:mr-2`}>
                                <svg width="24" height="24" viewBox="0 0 24 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M19 9L12 15L10.25 13.5M5 9L7.33333 11"
                                        stroke="currentColor"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                            </div>
                            
                        {isSubMenuOpen && (
                            <div className="submenu absolute top-16 p-5  bg-white rounded-md text-black " onClick={() => toggleMenu()}>
                                <ul className='p-2'> <li>
                                    <Link href="/webDevelopment" className={router.pathname === '/webDevelopment' ? 'active' : ''}>
                                        Web Development
                                    </Link>   </li>
                                    <li>                                   <Link href="/mobileDevelopment " className={router.pathname === '/mobileDevelopment' ? 'active' : ''}>
                                        Mobile Development
                                    </Link> </li>
                                    <li>    <Link href="/development-Testing" className={router.pathname === '/development-Testing' ? 'active' : ''}>
                                        Development & Testing
                                    </Link></li>
                                    <li>   <Link href="/ui-ux" className={router.pathname === '/ui-ux' ? 'active' : ''}>
                                        UI/UX Design
                                    </Link></li>
                                    <li> <Link href="/devops" className={router.pathname === '/devops' ? 'active' : ''}>
                                        {' '}
                                        DevOps
                                        {' '}
                                    </Link></li>
                                    <li>  <Link href="/curam" className={router.pathname === '/curam' ? 'active' : ''}>

                                        {' '}
                                        Cúram
                                        {' '}
                                    </Link></li>
                                </ul>
                            </div>

                        )}

                    </li>
       

                    <Link href="/contact-us">
                        <li className="m-4 mt-5 cursor-pointer p-4 text-lg font-semibold hover:border-b-2 hover:border-white hover:text-white">About Us</li>
                    </Link>
                </ul>
            </div>

            <div onClick={handleNav} className="z-10 md:hidden" style={{ color: 'white' }}>
                {nav ? <AiOutlineClose size={30} /> : <HiOutlineMenuAlt4 size={30} />}
            </div>

            <div className={nav ? 'absolute left-0 top-0 flex w-full flex-col bg-black/90 px-4 py-7' : 'absolute left-[-100%]'}>
                <ul className={nav ? 'text-blue-500' : 'absolute left-[-100%]'}>
                    <h1>
                        <img className="w-[25%] cursor-pointer" src="\2.png" alt="logo" />
                    </h1>
                    <Link href="/">
                        <li
                            onClick={handleLinkClick}
                            className="m-4 cursor-pointer p-4 text-lg font-semibold hover:border-b-2 hover:border-white hover:text-white"
                        >
                            Home
                        </li>
                    </Link>
                    <li onClick={handleLinkClick} className="m-4 cursor-pointer p-4 text-lg font-semibold hover:border-b-2 hover:border-white hover:text-white">
                        Products
                    </li>
                    <Link href="/services">
                        <li
                            onClick={handleLinkClick}
                            className="m-4 cursor-pointer p-4 text-lg font-semibold hover:border-b-2 hover:border-white hover:text-white"
                        >
                            Services
                        </li>
                    </Link>
                    <Link href="/contact-us">
                        <li
                            onClick={handleLinkClick}
                            className="m-4 cursor-pointer p-4 text-lg font-semibold hover:border-b-2 hover:border-white hover:text-white"
                        >
                            About Us
                        </li>
                    </Link>
                </ul>
            </div>
        </div>
    );
};

export default Header;



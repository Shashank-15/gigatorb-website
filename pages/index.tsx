import React, { useRef } from 'react';
import { useState, ReactNode } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation, Autoplay, Virtual } from 'swiper';
import Link from 'next/link';
import { useSelector } from 'react-redux';
import { IRootState } from '../store';
import Massage from '../components/Message';
import Testimonial from '../components/Testimonial';
import { Bolt } from '@mui/icons-material';
type ButtonType = 'coreValues' | 'vision' | 'mission' | null;

const Index = (props: any) => {
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const dialog: any = useRef();
    const isRtl = useSelector((state: IRootState) => state.themeConfig.direction) === 'rtl' ? true : false;
    const [isModalOpen, setModalOpen] = useState(false);

    const handleOnclick = () => {
        setModalOpen(false);
    };
    const [activeButton, setActiveButton] = useState<ButtonType>(null);

    const handleMouseEnter = (button: ButtonType) => {
        setActiveButton(button);
        setModalOpen(true);
    };

    const gridData = [
        {
            text: 'With Tariff data for over 150 ports and more being added everyday, you can get all your services covered with a click of a button.',
            imageSrc: 'Featured icon (1).svg',
            title: 'Real-time Cost Sata',
        },
        {
            text: 'Generate proforma disbursement accounts instantly to get a comprehensive estimate of your port calls.',
            imageSrc: 'Featured icon (4).svg',
            title: 'Generate Instant PDA’s',
        },
        {
            text: 'Customize your portcalls after it’s generated. Fine-tune & tailor data parameters to focus on what matters most to you, at no additional cost!',
            imageSrc: 'Featured icon (7).svg',
            title: 'Customizable Reports',
        },
        {
            text: ' All of your portcalls data stored within an easily accessible dashboard in compliance with industry standard regulations.',
            imageSrc: 'Featured icon (8).svg',
            title: 'Data Storage',
        },
        {
            text: 'Explore integrations using our API’s that make your day-to-day workflow more efficient and familiar. Plus, our extensive developer documentation.',
            imageSrc: 'Featured icon (5).svg',
            title: 'Connect tools you already use [BETA]',
        },
        {
            text: 'Our customer service team is an extension of us, and all of our resources are free. Chat with our friendly team 24/7 when you need help.',
            imageSrc: 'Featured icon (9).svg',
            title: '24/7 Customer Support',
        },
    ];
    const users = [
        { name: 'Lav Kumar Pandey', pos: 'CEO & Founder', avatar: 'lav2.png' },
        { name: 'Anupam Mishra', pos: 'TECH LEAD', avatar: 'AnupamMishra.png' },
        { name: 'Jay Maheshwari', pos: 'SALES LEAD', avatar: 'Jay Maheshwari.jpg' },
        { name: 'Neeraj Yaduvanshi', pos: 'FULL STACK DEVELOPER', avatar: 'Neeraj Yaduvanshi.jpg' },
        { name: 'Neeraj Sharma', pos: 'FULL STACK DEVELOPER', avatar: 'Neeraj Sharma.jpg' },
        { name: 'Jahnvi Dubey', pos: 'DATA ANALYST', avatar: 'Jahnvi Dubey.jpg' },
        { name: 'Vaishali Parmar', pos: 'FRONTEND DEVELOPER', avatar: 'Vaishali Parmar.jpg' },
        { name: 'Ankit Parmar', pos: 'UI/UX DESIGNER', avatar: 'Ankit Parmar.jpg' },
    ];

    return (
        <>
            <div className="section1-container relative  w-full overflow-hidden bg-black max-md:h-[600px] lg:h-full">
                <div className="h-full w-full bg-black">
                    <video className="h-full w-full object-cover opacity-50" autoPlay loop muted playsInline>
                        <source src="bg-video.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                    <div className="absolute top-[40px] left-0 h-full w-full">
                        <div className="md:mt-50 md:mt-50 top-0 m-auto flex h-full w-full flex-col justify-center p-3 text-center text-white md:w-[100%]"><br/>
                            <p className="font-mulish text-5xl font-bold max-md:text-xl lg:leading-[4rem]" style={{ fontFamily: 'Philosopher' }}>
                                "Tech Tides"{' '}
                            </p><br/>

                            <p className="top-0 font-mulish text-5xl font-bold max-md:text-xl lg:leading-[4rem]" style={{ fontFamily: 'Philosopher' }}>
                                Steering The Maritime Industry Forward
                            </p>
                            <br/>

                            <h1 className="mt-12 text-lg font-semiBold tracking-wider md:mt-10 lg:leading-[5rem] xl:text-xl" style={{ fontFamily: 'Regular' }}>
                                We are revolutionizing the maritime industry by harnessing the potential of cutting-edge IT solutions encapsulated in our ethos,{' '}
                                <br /><br />
                                Join us as we ride this wave of innovation, navigating towards a more intelligent and interconnected maritime future together.
                            </h1>

                        </div>
                    </div>
                </div>
            </div>


            {/* section 2 */}
            <br />

            <div id="product" style={{ backgroundImage: 'url("Content1.png")' }} className="bg-[#e5f1ff]">
                <br />
                <br /><br />
                <div className="heading text-center ">
                <h4 style={{ color: '#1759D4', textAlign: 'center',fontSize:'50px'}}>Product</h4>
                </div>
                <div className="mx-[1px] flex h-auto flex-col md:mx-20 md:justify-between lg:flex-row">
                    <div className="flex items-center pt-[20px] md:w-1/2 lg:md:p-[20px] lg:w-1/2 lg:px-[70px]" data-aos="fade-left">
                        <div>
                            <div className="">
                                <div className="m-[auto] -mt-3 w-8/12 rounded-lg  md:w-4/6">
                                    <img className="w-[14rem]" src="Logowrap1.svg" alt="portlogo" />
                                </div>
                            </div>

                            <div className="heading text-center ">
                                <h4 style={{ color: '#1759D4',font:'bold' ,fontFamily: 'Poppins',fontSize:'53px',marginTop:'10px' }}>Your Port Calls</h4>
                                <h4 style={{ color: '#1759D4',font:'bold', fontFamily: 'Poppins' ,fontSize:'48px',marginTop:'12px'}}>Our Expertise</h4>
                                <p style={{ color: 'black', fontSize: 18, font:'bold', fontFamily: 'Poppins' ,marginTop:'28px'}}>PCS IS OUR NEXT-GEN PIECE OF MARITIME TECHNOLOGY IN THE PROCESS OF RE-INVENTING PORT CALLS.</p>

                            </div>

                            <div className=" my-10 flex justify-center  space-x-12 ">
                                
                                <Link
                                    href="https://portcosts.com/home"
                                    
                                    className="btn mb-4 capitalize text-white shadow-lg bg-#1759d4: #1759d4; --font-SegoeUI: 'Segoe UI', sans-serif "
                                    style={{ borderRadius: 30, boxShadow: '0px 8px 12px rgba(0, 0, 0, 0.3)' }}
                                >
                                    Click here
                                </Link>
                            </div>
                        </div>
                    </div>
                    
                    <div className="my-[20px] lg:w-3/5 ml-10" data-aos="fade-right" style={{ borderRadius: 60 }}>
                        <div className="overflow-hidden" style={{ borderRadius: 60 }}>
                            <img
                                className="h-full w-full transition-transform duration-300 transform hover:scale-110"
                                src="Component 45 – 1.jpg"
                                alt="dashboard"
                                style={{ borderRadius: 60 }}
                            />
                        </div>
                    </div>
                </div>
            </div>
            <br style={{ boxShadow: '0px 8px 12px rgba(0, 0, 0, 1)' }} />

            {/* <.....................................................> */}
            <div className="bg-[#e5f1ff]">
                <div className=" mx-10 p-[30px] ">
                    <div className="heading my-10 flex-col justify-center text-center">
                        <br />

                        <p className="text-center text-3xl font-bold text-[#000000]" style={{ fontFamily: 'Poppins' }}>Features</p>
                        <br />
                        <h4 style={{ color: '#1759D4',marginTop:'-2',textAlign: 'center', fontFamily: 'Poppins', fontSize: 40 }}> All you need to make your Portcalls more efficient</h4>
                    
                        <br /> <p className="text-center text-3xl -mt-2 text-[#000000]" style={{ fontFamily: 'Poppins' }}>Open a full-featured account with us in less than 5 minutes.</p>
                    </div>
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3">
                        {gridData.map((cell, index) => (
                            <div key={index} className="my-2 flex flex-col items-center justify-center p-3 text-black sm:my-4">
                                <img src={cell.imageSrc} alt={`Image ${index + 1}`} className="mb-2 rounded-md" style={{ width: '75px', height: '75px' }} />
                                <p className="text-center text-lg font-bold leading-[40px] text-[#1759D4]">{cell.title}</p>
                                <p className="text-[12px] h-[25%] w-[80%] text-center text-black">{cell.text}</p>
                                
                            </div>
                        ))}
                        <br /><br />
                    </div>
                </div>
            </div>

            {/* section end */}

            {/* section 3  start */}

            {/* section3 end  */}
            {/* <div className="my-6 bg-[#1759D4] p-16 shadow-xl shadow-black/50  md:h-auto lg:h-[200px]">
                <p className=" text-center text-xl font-bold leading-10 text-white">TEAM. CUSTOMER. COMMUNITY</p>
                <p className=" text-center text-4xl font-extrabold text-white ">We work with the best partners</p>
            </div>
            <div className="mx-auto w-4/5 py-10">
                <Swiper
                    modules={[Navigation, Autoplay, Virtual]}
                    slidesPerView="auto"
                    spaceBetween={30}
                    speed={2500}
                    loop={true}
                    autoplay={{ delay: 0, disableOnInteraction: false }}
                    breakpoints={{
                        320: {
                            slidesPerView: 1.7,
                        },
                        600: {
                            slidesPerView: 3,
                        },
                        1000: {
                            slidesPerView: 5,
                        },
                        1600: {
                            slidesPerView: 8,
                        },
                    }}
                    dir={isRtl ? 'rtl' : 'ltr'}
                    key={isRtl ? 'true' : 'false'}
                >
                    <SwiperSlide>
                        <Link href="#" className="flex items-center gap-3">
                            <div>
                                <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clipPath="url(#clip0_298_1769)">
                                        <mask id="mask0_298_1769" style={{ maskType: 'alpha' }} maskUnits="userSpaceOnUse" x="0" y="0" width="30" height="30">
                                            <circle cx="15" cy="15" r="15" fill="#C4C4C4" />
                                        </mask>
                                        <g mask="url(#mask0_298_1769)">
                                            <circle cx="7.86398" cy="-2.66231" r="12.4449" transform="rotate(-22 7.86398 -2.66231)" fill="#47BDFF" />
                                            <circle cx="22.1375" cy="32.6639" r="12.4449" transform="rotate(-22 22.1375 32.6639)" fill="#47BDFF" />
                                            <circle cx="-2.6629" cy="22.1365" r="12.4449" transform="rotate(-22 -2.6629 22.1365)" fill="#B476E5" />
                                            <circle cx="32.337" cy="7.05449" r="12.4449" transform="rotate(-22 32.337 7.05449)" fill="#B476E5" />
                                        </g>
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_298_1769">
                                            <rect width="30" height="30" fill="white" />
                                        </clipPath>
                                    </defs>
                                </svg>
                            </div>
                            <span className="text-xl font-bold text-black dark:text-white">Delliote</span>
                        </Link>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Link href="#" className="flex items-center gap-3">
                            <div>
                                <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M2 12.7576C2 6.26406 7.26406 1 13.7576 1V17.2417C13.7576 23.7352 8.49355 28.9993 2 28.9993V12.7576Z"
                                        fill="#FFBD11"
                                    />
                                    <path
                                        d="M15.4633 7.38899C15.4633 3.86045 18.3237 1 21.8522 1C25.3808 1 28.2412 3.86045 28.2412 7.38899V7.75786C28.2412 11.2864 25.3808 14.1469 21.8522 14.1469C18.3237 14.1469 15.4633 11.2864 15.4633 7.75786V7.38899Z"
                                        fill="#47BDFF"
                                    />
                                    <path
                                        d="M15.4633 22.2425C15.4633 18.714 18.3237 15.8535 21.8522 15.8535C25.3808 15.8535 28.2412 18.714 28.2412 22.2425V22.6114C28.2412 26.1399 25.3808 29.0004 21.8522 29.0004C18.3237 29.0004 15.4633 26.1399 15.4633 22.6114V22.2425Z"
                                        fill="#B476E5"
                                    />
                                </svg>
                            </div>
                            <span className="text-xl font-bold text-black dark:text-white">DIONA</span>
                        </Link>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Link href="#" className="flex items-center gap-3">
                            <div>
                                <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clipPath="url(#clip0_301_1299)">
                                        <rect x="5.55554" y="5.55469" width="18.8889" height="18.8889" rx="8" fill="#47BDFF" />
                                        <rect x="9.42285" width="2.88247" height="4.44444" rx="1.44123" fill="#B476E5" />
                                        <rect x="13.559" width="2.88247" height="4.44444" rx="1.44123" fill="#B476E5" />
                                        <rect x="17.696" width="2.88247" height="4.44444" rx="1.44123" fill="#B476E5" />
                                        <rect y="20.5762" width="2.88247" height="4.44444" rx="1.44123" transform="rotate(-90 0 20.5762)" fill="#B476E5" />
                                        <rect y="16.4395" width="2.88247" height="4.44444" rx="1.44123" transform="rotate(-90 0 16.4395)" fill="#B476E5" />
                                        <rect y="12.3047" width="2.88247" height="4.44444" rx="1.44123" transform="rotate(-90 0 12.3047)" fill="#B476E5" />
                                        <rect
                                            x="25.5558"
                                            y="20.5762"
                                            width="2.88247"
                                            height="4.44444"
                                            rx="1.44123"
                                            transform="rotate(-90 25.5558 20.5762)"
                                            fill="#B476E5"
                                        />
                                        <rect
                                            x="25.5558"
                                            y="16.4395"
                                            width="2.88247"
                                            height="4.44444"
                                            rx="1.44123"
                                            transform="rotate(-90 25.5558 16.4395)"
                                            fill="#B476E5"
                                        />
                                        <rect
                                            x="25.5558"
                                            y="12.3047"
                                            width="2.88247"
                                            height="4.44444"
                                            rx="1.44123"
                                            transform="rotate(-90 25.5558 12.3047)"
                                            fill="#B476E5"
                                        />
                                        <rect x="9.42285" y="25.5547" width="2.88247" height="4.44444" rx="1.44123" fill="#B476E5" />
                                        <rect x="13.559" y="25.5547" width="2.88247" height="4.44444" rx="1.44123" fill="#B476E5" />
                                        <rect x="17.696" y="25.5547" width="2.88247" height="4.44444" rx="1.44123" fill="#B476E5" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_301_1299">
                                            <rect width="30" height="30" fill="white" />
                                        </clipPath>
                                    </defs>
                                </svg>
                            </div>
                            <span className="text-xl font-bold text-black dark:text-white">GBM</span>
                        </Link>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Link href="#" className="flex items-center gap-3">
                            <div>
                                <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M16.7705 5.24752C16.7705 3.4509 18.9554 2.56542 20.2062 3.85514L29.1466 13.0738C29.5085 13.4469 29.7109 13.9463 29.7109 14.4661V25.0644C29.7109 26.861 27.526 27.7465 26.2752 26.4568L17.3348 17.2381C16.9729 16.865 16.7705 16.3656 16.7705 15.8457V5.24752Z"
                                        fill="#47BDFF"
                                    />
                                    <path
                                        d="M8.75098 4.93502C8.75098 3.1384 10.9359 2.25292 12.1867 3.54264L21.1271 12.7613C21.489 13.1344 21.6914 13.6338 21.6914 14.1536V24.7519C21.6914 26.5485 19.5064 27.434 18.2556 26.1443L9.31526 16.9256C8.95337 16.5525 8.75098 16.0531 8.75098 15.5332V4.93502Z"
                                        fill="#FFBD11"
                                    />
                                    <path
                                        d="M1 5.24752C1 3.4509 3.18492 2.56542 4.43571 3.85514L13.3761 13.0738C13.738 13.4469 13.9404 13.9463 13.9404 14.4661V25.0644C13.9404 26.861 11.7555 27.7465 10.5047 26.4568L1.56429 17.2381C1.20239 16.865 1 16.3656 1 15.8457V5.24752Z"
                                        fill="#B476E5"
                                    />
                                </svg>
                            </div>
                            <span className="text-xl font-bold text-black dark:text-white">myndriven</span>
                        </Link>
                    </SwiperSlide>
                </Swiper>

            </div>
            <Testimonial /> */}
            <br />
            <section className=" py-14 dark:bg-transparent lg:py-[90px]" style={{ background: '#e5f1ff' }}>
                <div className="container">
                    <div className="heading text-center">
                    <h6 style={{ color: 'black', fontSize: 25,marginTop:'-20px' }}>Meet Our Team</h6>
                        <h4 style={{ color: '#1759D4', fontSize: 40,marginTop:'-10px' }}>Creative Minds</h4>
                    </div>
                    <div className=" w-90 mx-auto ml-16  mt-8 grid grid-cols-1 justify-around gap-9 pl-[50px] md:grid-cols-2 lg:grid-cols-4 ">
                        {users.map((user, index) => (
                            <div key={index} className="card  w-40 rounded-xl text-center">
                                <img src={user.avatar} alt={`${user.name}'s avatar`} className="rounded-xl mb-4" />
                                <h3 className='font-bold mt-2' style={{ color: '#1759D4',fontFamily: 'Segoe UI', fontWeight: '700',fontSize: 14  }}>{user.pos}</h3>
                                <p style={{ fontWeight: '700', fontFamily: 'Segoe UI', color: 'black', fontSize: 18}}>{user.name}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            
            <br />
            {/* Massage component */}

            <Massage />
        </>
    );
};

export default Index;

import React, { useState, useEffect, useRef } from 'react';
import emailjs from '@emailjs/browser';
import OfficeSwiper from '../components/OfficeSwiper';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useSelector } from 'react-redux';
// import { useEffect,useState } from 'react';
import { IRootState } from '../store';
import Link from 'next/link';
import Head from 'next/head';
import axios from 'axios';
import Gallery from './gallery';
import Testimonial from '../components/Testimonial';
import CountUp from 'react-countup';
import Massage from '../components/Message';

const Contactus = () => {
    const [activeTab, setActiveTab] = useState<string>('all');
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [photoIndex, setPhotoIndex] = useState<number>(0);
    const [isModalOpen, setModalOpen] = useState(false);
    useEffect(() => {
        window['global'] = window as never;
    }, []);

    const isRtl = useSelector((state: IRootState) => state.themeConfig.direction) === 'rtl' ? true : false;

    // const sendMail = (e: React.FormEvent<HTMLFormElement>) => {
    //     e.preventDefault();
    //     const formData = new FormData(e.currentTarget);

    //     axios
    //         .post('http://localhost:3200/send-email', formData, {
    //             headers: {
    //                 'Content-Type': 'application/json',
    //             },
    //         })
    //         .then((response) => {
    //             // Handle the response
    //         })
    //         .catch((error) => {
    //             // Handle errors
    //         });
    // };

    const form = useRef<any>();

    const sendEmail = (e:any) => {
        e.preventDefault();
        console.log("senddddd")
        emailjs
          .sendForm('service_zv95n1m', 'template_gv63spa', form.current, {
            publicKey: 'cfOC9lz4lZR6OISK8',
          })
          .then(
            () => {
                console.log('SUCCESS!');
                toast.success('Our team will connect you soon!', {
                
                  autoClose: 3000, // Close the toast after 3 seconds
                });
                form.current.reset(); // Reset form fields
              },
            (error) => {
              console.log('FAILED...', error.text);
            },
          );
      };
    

    const handleOnclick = () => {
        setModalOpen(false);
    };
    const [activeButton, setActiveButton] = useState<any>(null);
    const handleMouseEnter = (button: any) => {
        setActiveButton(button);
        setModalOpen(true);
    };
    const getModalContent = () => {
        switch (activeButton) {
            case 'coreValues':
                return (
                    <div>
                        <p className="my-6 font-bold leading-10 text-black">
                            <img className="inline h-6 w-6" src="/dot.png"></img> Integrity:
                            <span className=""> Committed to upholding promises and honouring commitments.</span>{' '}
                        </p>
                        <p className="my-6 font-bold leading-10 text-black">
                            <img className="inline h-6 w-6" src="/dot.png"></img> Client Satisfaction:
                            <span className=""> Consistently surpassing expectations for client satisfaction and excellence</span>{' '}
                        </p>
                        <p className="my-6 font-bold leading-10 text-black">
                            <img className="inline h-6 w-6" src="/dot.png"></img> Innovation:
                            <span className=""> We are revolutionizing industries through new ideas.</span>{' '}
                        </p>
                        <p className="my-6 font-bold leading-10 text-black">
                            <img className="inline h-6 w-6" src="/dot.png"></img> Teamwork:
                            <span className="">We work together to produce goal-oriented results.</span>{' '}
                        </p>
                        <p className="my-6 font-bold leading-10 text-black">
                            <img className="inline h-6 w-6" src="/dot.png"></img> Commitment to excellence:
                            <span className="">We passionately pursue the highest standard.</span>{' '}
                        </p>
                    </div>
                );
            case 'vision':
                return (
                    <div>
                        <p className="p-8 text-center text-xl font-semibold leading-10 text-black">
                            Guiding Excellence Across Industries To transcend as a premier company, seamlessly integrating IT and Maritime prowess, prioritizing
                            customer growth, delivering high-quality work, and establishing ourselves as a reliable and innovative service provider across
                            diverse sectors.
                        </p>
                    </div>
                );
            case 'mission':
                return (
                    <div>
                        <p className="p-8 text-center text-xl font-semibold leading-10 text-black">
                            Uniting IT and Maritime Frontiers We exceed client expectations with cutting-edge web solutions, transforming data into actionable
                            knowledge. Navigating innovation seas, we empower clients in IT and Maritime to tackle challenges. Committed to redefining
                            standards, shaping the future, and creating value across digital and maritime landscapes. Join us in this transformative journey
                            where excellence knows no sectoral boundaries.
                        </p>
                    </div>
                );
            default:
                return null;
        }
    };

    return (
        <>
            <div suppressHydrationWarning={true}>
                <Head>
                    <title>Contact Us </title>
                </Head>
                <div className="bg-cover bg-center bg-no-repeat lg:md:w-[100%] lg:md:mt-[-2rem] mt-[-2.5rem] lg:md:h-[110vh] h-[30vh]" style={{ backgroundImage: "url('Sir.jpg')" }}>
    <div className="relative">
        <div className="container">
            <div className="mt-[14rem] items-center justify-between py-10 text-center md:flex md:h-[400px] md:py-0">
                <div className="heading relative mb-0 text-center ltr:md:text-left rtl:md:text-left">
                    <h4 className="ml-[20px] text-center font-mulish text-xl italic !text-white"></h4>
                </div>
                <h4 className="mt-[2rem] mr-[220px] h-3 text-xl font-bold text-white">
                    <span className=" font-extrabold" style={{ color: '#F16767', fontStyle: 'Poppins' }}></span>{' '}
                    <br />
                </h4>
                <div className="text-white">
                    <h4></h4>
                </div>
                <h4></h4>
            </div>
        </div>
    </div>
</div>

<section className="bg-[#e5f1ff] py-10 lg:py-20" data-aos="fade-up" data-aos-duration="1000">
    <div className="container">
        <div className="flex flex-col gap-7 lg:flex-row">

            <div className="dark:border-gray-dark mx-auto h-full w-full max-w-[380px] flex-none overflow-hidden border-white">
                <div className="mb-10 lg:mb-28 flex items-center gap-4">
                    <div className="grid h-14 w-14 flex-none place-content-center rounded-[150px] rounded-br-[20px] text-white lg:h-20 lg:w-20">
                        <img src="member.png" alt="" />
                    </div>

                    <div>
                        <h3 className="mb-1 text-center text-lg font-bold text-[#1759D4] dark:text-[#1759D4] lg:text-2xl">
                            <div className="text-[#1759D4]">
                                <CountUp start={0} end={12} duration={2} suffix="+"></CountUp>
                            </div>
                            Happy
                        </h3>
                        <p className="lg:text-sm text-center text-xs font-semibold text-black ">Clients</p>
                    </div>
                </div>

                <div className="mb-10 lg:mb-28 flex items-center gap-4">
                    <div className="grid h-14 w-14 flex-none place-content-center rounded-[150px] rounded-br-[20px] text-white lg:h-20 lg:w-20">
                        <img src="experience.png" alt="" />
                    </div>

                    <div>
                        <h3 className="mb-1 text-lg font-bold text-[#1759D4] dark:text-[#1759D4] lg:text-2xl">
                            <div className="text-center text-[#1759D4]">
                                <CountUp start={0} end={3} duration={2} suffix="+"></CountUp>
                            </div>
                            Years
                        </h3>
                        <p className="lg:text-sm text-center text-xs font-semibold text-black">Of Experience</p>
                    </div>
                </div>

                <div className="flex items-center gap-4">
                    <div className="grid h-14 w-14 flex-none place-content-center rounded-[150px] rounded-br-[20px] text-white lg:h-20 lg:w-20">
                        <img src="public-relation.png" alt="" />
                    </div>

                    <div>
                        <h3 className="mb-1 text-lg font-bold text-[#1759D4] dark:text-[#1759D4] lg:text-2xl">
                            <div className="text-center text-[#1759D4]">
                                <CountUp start={0} end={20} duration={2} suffix="+"></CountUp>
                            </div>
                            Team
                        </h3>
                        <p className="lg:text-sm text-center text-xs font-semibold text-black">Members</p>
                    </div>
                </div>
            </div>
            <div className="flex flex-1 flex-col justify-between text-center ltr:md:text-left rtl:md:text-right">
                <div>
                    <p className="mb-2.5 text-lg font-semibold text-black">Know more</p>

                    <h2 className="mb-4 text-xl lg:text-3xl lg:leading-tight font-extrabold dark:text-white"
                        style={{ color: '#1759D4' }}>
                        Dear valued clients, partners & team members
                    </h2>

                    <p className="mb-10 lg:mb-20 text-sm lg:text-base">
                        At Gigatorb, our journey is guided by a vision of excellence. Your success is our top priority as we deliver exceptional
                        work marked by quality, reliability, and innovation. We aim to be a leading force in the maritime industry, making a
                        positive impact globally. As CEO, I lead a passionate team committed to exploring innovative solutions for a brighter
                        maritime future. Thank you for choosing Gigatorb as your partner. Excited about the journey ahead, we're dedicated to
                        exceeding your expectations.
                    </p>

                    <p className="lg:text-sm mt-[-8px]" style={{ color: 'red' }}>Sincerely</p>
                    <h6 style={{ color: '#1759D4', fontWeight: '900' }}>Lav Kumar Pandey, CEO & Founder</h6>
                </div>
            </div>
        </div>
    </div>
</section>



                {/* <section className="bg-[#e5f1ff] py-10 lg:py-20" data-aos="fade-up" data-aos-duration="1000">
                    <div className="container">
                        <div className="flex flex-col gap-7 lg:flex-row">

                            <div className="dark:border-gray-dark mx-auto h-full w-full max-w-[380px] flex-none   overflow-hidden border-white">
                                <div className="mb-28 flex items-center gap-4">
                                    <div className="grid h-14 w-14 flex-none place-content-center rounded-[150px] rounded-br-[20px]  text-white lg:h-20 lg:w-20">
                                        <img src="member.png" alt="" />
                                    </div>

                                    <div>
                                        <h3 className="mb-1 text-center text-lg font-bold text-[#1759D4] dark:text-[#1759D4] lg:text-2xl">
                                            <div className="text-[#1759D4]">
                                                <CountUp start={0} end={12} duration={2} suffix="+"></CountUp>
                                            </div>
                                            Happy
                                        </h3>
                                        <p className="lg:text-x text-center text-sm font-semibold text-black ">Clients</p>
                                    </div>
                                </div>

                                <div className="mb-28 flex items-center gap-4">
                                    <div className="grid h-14 w-14 flex-none place-content-center rounded-[150px] rounded-br-[20px]  text-white lg:h-20 lg:w-20">
                                        <div className="grid h-14 w-14 flex-none place-content-center rounded-[150px] rounded-br-[20px]  text-white lg:h-20 lg:w-20">
                                            <img src="experience.png" alt="" />
                                        </div>
                                    </div>

                                    <div>
                                        <h3 className="mb-1 text-lg font-bold text-[#1759D4] dark:text-[#1759D4] lg:text-2xl">
                                            <div className=" text-center text-[#1759D4]">
                                                <CountUp start={0} end={3} duration={2} suffix="+"></CountUp>
                                            </div>
                                            Years
                                        </h3>
                                        <p className="lg:text-x text-center text-sm font-semibold text-black">Of Experience</p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-4">
                                    <div className="grid h-14 w-14 flex-none place-content-center rounded-[150px] rounded-br-[20px]  text-white lg:h-20 lg:w-20">
                                        <div className="grid h-14 w-14 flex-none place-content-center rounded-[150px] rounded-br-[20px]  text-white lg:h-20 lg:w-20">
                                            <img src="public-relation.png" alt="" />
                                        </div>
                                    </div>

                                    <div>
                                        <h3 className="mb-1 text-lg font-bold text-[#1759D4] dark:text-[#1759D4] lg:text-2xl">
                                            <div className="text-center  text-[#1759D4]">
                                                <CountUp start={0} end={20} duration={2} suffix="+"></CountUp>
                                            </div>
                                            Team
                                        </h3>
                                        <p className="lg:text-x text-ellipsis text-sm font-semibold text-black">Members</p>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-1 flex-col justify-between text-center ltr:md:text-left rtl:md:text-right">
                                <div>
                                    <p className="mb-2.5 text-lg font-semibold text-black">Know more</p>

                                    <h2
                                        className="mb-4 text-2xl font-extrabold  dark:text-white md:text-3xl lg:text-[40px] lg:leading-tight"
                                        style={{ color: '#1759D4' }}
                                    >
                                        Dear valued clients, partners & team members
                                    </h2>

                                    <p className="mb-20 text-black lg:text-lg">
                                        At Gigatorb, our journey is guided by a vision of excellence. Your success is our top priority as we deliver exceptional
                                        work marked by quality, reliability, and innovation. We aim to be a leading force in the maritime industry, making a
                                        positive impact globally. As CEO, I lead a passionate team committed to exploring innovative solutions for a brighter
                                        maritime future. Thank you for choosing Gigatorb as your partner. Excited about the journey ahead, we're dedicated to
                                        exceeding your expectations.
                                    </p>

                                    <p className=" lg:text-lg mt-[-8px]" style={{ color: 'red' }}>
                                        Sincerely
                                    </p>
                                    <h6 style={{ color: '#1759D4', fontWeight: '900' }}>Lav Kumar Pandey, CEO & Founder</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </section> */}

                <div
                    className=" bg-cover bg-center bg-no-repeat lg:md:w-[100%] lg:md:mt-[-2rem] mt-[-2.5rem] lg:md:h-[110vh]"
                    style={{ backgroundImage: "url('Mam.jpg')" }}
                >
                    {/* <div className="relative">
                <div className="container mx-auto">
                <div className="mt-24 md:mt-52 md:items-center justify-between py-10 text-center md:flex md:h-96 md:py-0">
                <div className="heading relative mb-0 text-center mx-auto max-w-md">
                    <p className="md:ml-0 lg:pt-[10rem] sm:pt-[5rem] font-mulish lg:text-xl sm:text-sm italic text-white">
                       
                    </p>
                </div>
                <p className="md:mt-40 pr-8 md:pr-16 md:text-xl text-md font-bold text-white">
                    <span className="font-bold" style={{ color: '#F16767', fontStyle: 'Poppins' }}>
                        
                    </span>{' '}
                    <br />
                   
                </p>
            </div>
        </div>
    </div> */}

                    <div className=" mt-[2rem] items-center justify-between py-10 text-center md:flex   md:h-[400px] md:py-0">
                        <div className="heading relative mb-0 text-center  ltr:md:text-left rtl:md:text-left">
                            {/* <h6 className='text-xl'></h6> */}
                            <h4 className=" ml-[20px] text-center font-mulish text-xl italic !text-white">

                            </h4>
                        </div>
                        <h4 className="mt-[16rem] mr-[260px] h-3 text-xl font-bold text-white">
                            <span className=" font-extrabold " style={{ color: '#F16767', fontStyle: 'Poppins' }}>

                            </span>{' '}
                            <br />

                        </h4>
                        <div className="text-white">
                            <h4></h4>
                        </div>
                        <h4></h4>
                    </div>
                </div>

                <section className="bg-[#e5f1ff] py-10 lg:py-20" data-aos="fade-up" data-aos-duration="1000">
                    <div className="container">
                        <div className="flex flex-col gap-7 lg:flex-row">
                            <div className="dark:border-gray-dark mx-auto h-full w-full max-w-[380px] flex-none   overflow-hidden border-white">
                                <div className="mb-40 flex items-center gap-4">
                                    <div className="grid h-14 w-14 flex-none place-content-center rounded-[150px] rounded-br-[20px]  text-white lg:h-20 lg:w-20">
                                        <img src="member.png" alt="" />
                                    </div>

                                    <div>
                                        <h3 className="mb-1 text-center text-lg font-bold text-[#1759D4] dark:text-[#1759D4] lg:text-2xl">
                                            <div className="text-[#1759D4]">
                                                <CountUp start={0} end={12} duration={2} suffix="+"></CountUp>
                                            </div>
                                            Happy
                                        </h3>
                                        <p className="lg:text-x text-center text-sm font-semibold text-black ">Clients</p>
                                    </div>
                                </div>

                                <br />

                                <div className="mb-40 flex items-center gap-4">
                                    <div className="grid h-14 w-14 flex-none place-content-center rounded-[150px] rounded-br-[20px]  text-white lg:h-20 lg:w-20">
                                        <div className="grid h-14 w-14 flex-none place-content-center rounded-[150px] rounded-br-[20px]  text-white lg:h-20 lg:w-20">
                                            <img src="experience.png" alt="" />
                                        </div>
                                    </div>

                                    <div>
                                        <h3 className="mb-1 text-lg font-bold text-[#1759D4] dark:text-[#1759D4] lg:text-2xl">
                                            <div className=" text-center text-[#1759D4]">
                                                <CountUp start={0} end={3} duration={2} suffix="+"></CountUp>
                                            </div>
                                            Years
                                        </h3>
                                        <p className="lg:text-x text-center text-sm font-semibold text-black">Of Experience</p>
                                    </div>
                                </div>

                                <br />

                                <div className="flex items-center gap-4">
                                    <div className="grid h-14 w-14 flex-none place-content-center rounded-[150px] rounded-br-[20px]  text-white lg:h-20 lg:w-20">
                                        <div className="grid h-14 w-14 flex-none place-content-center rounded-[150px] rounded-br-[20px]  text-white lg:h-20 lg:w-20">
                                            <img src="public-relation.png" alt="" />
                                        </div>
                                    </div>

                                    <div>
                                        <h3 className="mb-1 text-lg font-bold text-[#1759D4] dark:text-[#1759D4] lg:text-2xl">
                                            <div className="text-center  text-[#1759D4]">
                                                <CountUp start={0} end={20} duration={2} suffix="+"></CountUp>
                                            </div>
                                            Team
                                        </h3>
                                        <p className="lg:text-x text-ellipsis text-sm font-semibold text-black">Members</p>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-1 flex-col justify-between text-center ltr:md:text-left rtl:md:text-right">
                                <div>
                                    <p className="mb-2.5 text-lg font-semibold text-black">Know more</p>

                                    <h2
                                        className="mb-4 text-2xl font-extrabold  dark:text-white md:text-3xl lg:text-[40px] lg:leading-tight"
                                        style={{ color: '#1759D4' }}
                                    >
                                        Dear valued clients, partners & team members
                                    </h2>

                                    <p className="mb-5 text-black lg:text-lg">
                                        At Gigatorb, our journey has always been guided by a vision of excellence. Today, I am proud to reaffirm our commitment
                                        to this vision. Our relentless focus on customer growth means that your success is our top priority. We are dedicated to
                                        delivering not just good work, but exceptional work, marked by quality, reliability, and innovation. Our aspiration to
                                        be a top-tier IT company isn't just about business success; it's about making a positive difference in the world. We
                                        understand the transformative power of technology, and we are driven to harness it for the betterment of society. As
                                        COO, I am honoured to lead a team of passionate individuals who share these principles and values. Together, we look
                                        forward to embarking on new challenges, exploring innovative solutions, and contributing to a brighter future for all.
                                        Thank you for choosing Gigatorb as your IT partner. We are excited about the journey ahead and are committed to
                                        exceeding your expectations every step of the way.
                                    </p>
                                    <br />
                                    <br />
                                    <p className=" lg:text-lg " style={{ color: 'red' }}>
                                        Sincerely
                                    </p>
                                    <h6 style={{ color: '#1759D4', fontWeight: '900' }}>Nidhi Pandey, COO & Co-Founder</h6>
                                    <br />

                                </div>

                            </div>
                        </div>
                    </div>
                    <br /><br />
                    <Gallery />

                    <div className="bg-[#E5F1FF]">
                        <div className="mx-auto w-full lg:w-7/12 ">
                            <div className="flex flex-col    justify-between lg:flex-row">
                                {/* Core Values */}
                                <div className="mb-8 lg:mb-0">
                                    <div
                                        className="relative mx-auto flex w-full justify-center bg-cover bg-no-repeat align-middle lg:w-[45%]"
                                        style={{ backgroundImage: "url('./Ellipse.svg')" }}
                                    >
                                        <img src="./notebook.svg" alt="error" className="mx-auto w-12 pt-4" />
                                    </div>
                                    <button
                                        className="m-[auto] flex rounded-full border-2 bg-white px-40 py-2 text-xl font-extrabold text-[#1759D4] hover:bg-[#1759D4] hover:text-white  lg:px-10"
                                        onMouseEnter={() => handleMouseEnter('coreValues')}
                                    >
                                        Core Values
                                        <img src="./down copy.png" alt="error" className="-white my-auto w-7 pl-3" />
                                    </button>
                                </div>

                                {/* Vision */}
                                <div className="mb-8 lg:mb-0">
                                    <div
                                        className="relative mx-auto flex w-full justify-center  bg-cover bg-no-repeat align-middle md:w-[50%] lg:w-[55%]"
                                        style={{ backgroundImage: "url('./Ellipse.svg')" }}
                                    >
                                        <img src="./line-chart.svg" alt="error" className="mx-auto  w-12 pt-4" />
                                    </div>
                                    <button
                                        className="m-[auto] flex rounded-full border-2 bg-white px-40 py-2 text-xl font-extrabold text-[#1759D4] hover:bg-[#1759D4] hover:text-white lg:px-10"
                                        onMouseEnter={() => handleMouseEnter('vision')}
                                    >
                                        Vision
                                        <img src="./down copy.png" alt="error" className="-white my-auto w-7 pl-3 " />
                                    </button>
                                </div>

                                {/* Mission */}
                                <div>
                                    <div
                                        className="relative mx-auto flex w-full justify-center bg-cover bg-no-repeat align-middle lg:w-[55%]"
                                        style={{ backgroundImage: "url('./Ellipse.svg')" }}
                                    >
                                        <img src="./notebook.svg" alt="error" className="mx-auto w-12 pt-4" />
                                    </div>
                                    <button
                                        className="m-[auto] flex rounded-full border-2 bg-white px-40 py-2 text-xl font-extrabold text-[#1759D4] hover:bg-[#1759D4] hover:text-white lg:px-10 "
                                        onMouseEnter={() => handleMouseEnter('mission')}
                                    >
                                        Mission
                                        <img src="./down copy.png" alt="error" className="-white my-auto w-7 pl-3" />
                                    </button>
                                </div>
                            </div>

                            {/* Modal */}
                            {isModalOpen && (
                                <div
                                    className="fixed inset-0  z-50 bg-black bg-opacity-50">
                                    <div
                                        onMouseLeave={() => setModalOpen(false)}  // Close the modal when mouse leaves the modal area

                                        className="absolute relative top-1/2 left-1/2 h-[85%] w-full -translate-x-1/2 -translate-y-1/2 transform rounded-lg bg-white p-8 lg:w-[70%]">
                                        <img className="h-full w-full object-cover opacity-30" src="/Bgimage.png" alt="Background Image" />
                                        <button className="absolute top-4 right-4 flex justify-end hover:scale-110" onClick={handleOnclick}>
                                            <svg
                                                className="h-12 w-12 text-blue-900"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            >
                                                <line x1="18" y1="6" x2="6" y2="18" />
                                                <line x1="6" y1="6" x2="18" y2="18" />
                                            </svg>{' '}
                                        </button>
                                        <div className="absolute top-1/2 left-1/2 w-full -translate-x-1/2 -translate-y-1/2 transform p-10">
                                            {getModalContent()}
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div><br />
                        <div className="grid w-full grid-cols-1 gap-8 p-4  lg:lg:grid-cols-2 lg:px-40">
                            <div className="flex items-center justify-center">
                                <img
                                    src="\assets\images\Gallary\outing-3.jpg"
                                    alt="project-4"
                                    className="h-[220px] rounded-lg object-cover lg:h-[290px] lg:w-full"
                                />
                            </div>
                            <div className="flex items-center justify-center">
                                <img
                                    src="\assets\images\Gallary\Work-1.jpg"
                                    alt="project-5"
                                    className="h-[220px]     rounded-lg object-cover lg:h-[290px] lg:w-full"
                                />
                            </div>
                            <div className="flex items-center justify-center">
                                <img
                                    src="\assets\images\Gallary\Celebration-1.jpg"
                                    alt="project-2"
                                    className="h-[220px]  rounded-lg object-cover lg:h-[250px] lg:w-full"
                                />
                            </div>
                            <div className="flex items-center justify-center">
                                <img
                                    src="\assets\images\Gallary\Celebration-3.jpg"
                                    alt="project-1"
                                    className="h-[220px]  rounded-lg object-cover lg:h-[250px] lg:w-full"
                                />
                            </div>
                        </div>
                    </div>
                </section>

                <section className="bg-[#e5f1ff]  to-transparent py-10 dark:bg-none " style={{ paddingBottom: '0' }}>
                    <div className="container">
                        <div className="grid items-center gap-10 md:grid-cols-3 lg:grid-cols-2 xl:items-start">
                            <div className="order-2 md:order-1 md:col-span-2 lg:col-auto">
                                <div className="heading mb-10 text-center ltr:md:text-left rtl:md:text-right">
                                    <h6 style={{ color: 'black', fontSize: '28px', marginBottom: '10px', marginTop: '10px' }}>Careers</h6>
                                    <h4 style={{ color: '#1759D4' }}>
                                        Join the <span className="text-primary">Giga</span>Torb Family
                                    </h4>
                                </div>
                                <div className="text-center font-semibold ltr:md:text-left rtl:md:text-right" style={{ color: 'black' }}>
                                    <p>
                                        We have embarked on a dynamic journey driven by passion, innovation, and a relentless commitment to technological
                                        excellence. Together, we've crafted innovative solutions, solved complex challenges, and fostered a culture of
                                        collaboration and growth.
                                    </p>
                                    <Link href="/contact-us#open-position" className="btn mt-10 capitalize text-white">
                                        Open Positions
                                    </Link>
                                </div>
                            </div>

                            <img
                                src="joingiga.jpg"
                                alt="creative-agency"
                                className="ml-4rem duration-auto  order-1 mx-auto h-[70%] w-[100%] rounded-[32px] transition-all md:order-2 md:mx-0"
                            // data-aos={isRtl ? 'fade-right' : 'fade-left'}
                            // data-aos-duration="1000"
                            />
                        </div>
                    </div>
                </section>




            </div>

            <section className="bg-[#e5f1ff]  -mt-28 to-transparent py-14 dark:bg-none lg:py-[0px]">
                <div className="container">
                    <div className="heading text-center"><br /><br /><br />
                        <h6 className=" text-black" style={{ color: 'black', fontSize: '28px' }}>
                            Our Amazing Perks
                        </h6>
                        <h4 className=" text-[#1759D4]" style={{ color: '#1759D4', fontSize: '35px' }}>
                            Great benefits of working at GigaTorb
                        </h4>
                    </div>
                    <div className="grid gap-[30px] bg-[#C5D9F8] sm:grid-cols-2 lg:grid-cols-3 " style={{ borderRadius: '90px' }}>
                        <div data-aos="fade-up" data-aos-duration="1000">
                            <div
                                style={{ borderRadius: '90px' }}
                                className="dark:border-gray-dark dark:bg-gray-dark flex items-center justify-start  gap-3 rounded-[32px] p-6 drop-shadow-[5px_10px_60px_rgba(119,128,161,0.08)] transition hover:border-[#1759D4] hover:bg-secondary/10 dark:hover:border-[#1759D4] sm:justify-center md:p-10"
                            >
                                <div>
                                    <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M34.8141 38.9194H32.5093C32.5093 38.8544 32.4991 38.7886 32.4737 38.7247L30.3821 33.4967L34.2045 31.3358C34.4585 31.1923 34.5482 30.87 34.4043 30.6161C34.2608 30.3621 33.9378 30.2735 33.6846 30.4162L32.2161 31.2464C32.3498 30.9336 32.4247 30.5892 32.4247 30.2273C32.4247 28.7941 31.2653 27.6348 29.8321 27.6348C28.3989 27.6348 27.2396 28.7941 27.2396 30.2273C27.2396 31.5447 28.2223 32.6186 29.4935 32.7861L26.6404 34.3992C26.7287 34.1605 26.7785 33.908 26.7785 33.6519C26.7785 33.3402 26.7098 33.0285 26.5725 32.7324C26.0598 31.6384 24.7443 31.1843 23.6664 31.7177L15.3339 35.855H4.81304C4.39051 35.855 4.00468 36.0294 3.72998 36.304C3.44987 36.5787 3.28093 36.9645 3.28093 37.3871C3.28093 38.2325 3.96249 38.9195 4.8134 38.9195H1.07203C0.665123 38.9195 0.332336 39.2523 0.332336 39.6592V41.3711C0.332336 41.778 0.665123 42.1108 1.07203 42.1108L2.32436 42.1112V44.8745C2.32436 45.2814 2.65715 45.6142 3.06405 45.6142H5.10368C5.51059 45.6142 5.84337 45.2814 5.84337 44.8745V42.1112H30.0427V44.8745C30.0427 45.2814 30.3755 45.6142 30.7824 45.6142H32.8221C33.229 45.6142 33.5618 45.2814 33.5618 44.8745V42.1112H34.8141C35.221 42.1112 35.5538 41.7784 35.5538 41.3715V39.6596C35.5538 39.2523 35.221 38.9195 34.8141 38.9195L34.8141 38.9194ZM20.7905 38.9194L29.4536 34.0217L31.4133 38.9194H20.7905Z"
                                            fill="#47BDFF"
                                        />
                                        <path
                                            d="M15.238 34.7188L12.6331 32.5789C11.9991 32.0612 11.1006 32.0187 10.4191 32.4783L6.98981 34.798H15.0843L15.238 34.7188Z"
                                            fill="#47BDFF"
                                        />
                                        <path
                                            d="M12.712 18.8535C12.8598 19.1071 12.7701 19.4294 12.5165 19.5772C12.292 19.712 11.9458 19.6524 11.7979 19.3818L11.1534 18.2668C11.0055 18.0187 11.0953 17.691 11.3488 17.5482C11.597 17.4003 11.9196 17.49 12.0675 17.7382L12.712 18.8535Z"
                                            fill="#B476E5"
                                        />
                                        <path
                                            d="M15.5765 16.5221C15.4232 16.78 15.0908 16.861 14.8528 16.7121L13.7379 16.0727C13.4843 15.9248 13.3996 15.6022 13.5424 15.3486C13.6903 15.095 14.0125 15.0104 14.2661 15.1531L15.3811 15.7976C15.6347 15.9462 15.7193 16.2685 15.5765 16.5221Z"
                                            fill="#B476E5"
                                        />
                                        <path
                                            d="M5.53748 18.2666L4.89297 19.3815C4.74584 19.6511 4.39924 19.7122 4.17435 19.577C3.92076 19.4291 3.83102 19.1069 3.97888 18.8533L4.62339 17.7383C4.76618 17.4902 5.09351 17.4001 5.34202 17.5483C5.59561 17.6907 5.68534 18.0185 5.53748 18.2666V18.2666Z"
                                            fill="#B476E5"
                                        />
                                        <path
                                            d="M7.81427 5.81723V4.52825C7.81427 4.2376 8.05187 4 8.34252 4C8.63825 4 8.87077 4.23797 8.87077 4.52825V5.81723C8.87077 6.10787 8.63825 6.34548 8.34252 6.34548C8.05187 6.34584 7.81427 6.10787 7.81427 5.81723Z"
                                            fill="#B476E5"
                                        />
                                        <path
                                            d="M3.14906 9.34789C3.0001 9.59857 2.67966 9.68649 2.42535 9.54335L1.31039 8.89885C1.0568 8.75098 0.972155 8.42873 1.11493 8.17477C1.26279 7.92118 1.58505 7.83654 1.83863 7.97931L2.95359 8.62382C3.20719 8.77205 3.29183 9.0943 3.14906 9.34789Z"
                                            fill="#B476E5"
                                        />
                                        <path
                                            d="M13.5416 9.3479C13.3988 9.0943 13.4835 8.77205 13.7371 8.62382L14.8521 7.97931C15.1056 7.83653 15.4279 7.92118 15.5758 8.17478C15.7185 8.42837 15.6339 8.75062 15.3803 8.89885L14.2653 9.54336C14.0179 9.68287 13.696 9.60803 13.5416 9.3479Z"
                                            fill="#B476E5"
                                        />
                                        <path
                                            d="M16.6909 12.3466C16.6909 12.6373 16.4583 12.8749 16.1626 12.8749H14.8787C14.5829 12.8749 14.3504 12.6373 14.3504 12.3466C14.3504 12.056 14.5829 11.8184 14.8787 11.8184H16.1626C16.4583 11.8184 16.6909 12.056 16.6909 12.3466Z"
                                            fill="#B476E5"
                                        />
                                        <path
                                            d="M12.8441 12.3479C12.8441 14.8311 10.831 16.8442 8.34238 16.8442C5.8592 16.8442 3.84607 14.8311 3.84607 12.3479C3.84607 9.86469 5.8592 7.85156 8.34238 7.85156C10.831 7.8512 12.8441 9.86469 12.8441 12.3479Z"
                                            fill="#B476E5"
                                        />
                                        <path
                                            d="M1.81257 12.8749H0.528612C0.232516 12.8749 0 12.6373 0 12.3466C0 12.056 0.232517 11.8184 0.528249 11.8184H1.81258C2.10831 11.8184 2.34083 12.056 2.34083 12.3466C2.34083 12.6373 2.10831 12.8749 1.81258 12.8749H1.81257Z"
                                            fill="#B476E5"
                                        />
                                        <path
                                            d="M3.14906 15.3483C3.29184 15.6019 3.20719 15.9242 2.9536 16.0724L1.83864 16.7118C1.60103 16.8604 1.26825 16.7801 1.11493 16.5218C0.97215 16.2682 1.0568 15.946 1.3104 15.7977L2.42536 15.1532C2.6735 15.0104 3.0012 15.0947 3.14906 15.3483Z"
                                            fill="#B476E5"
                                        />
                                        <path
                                            d="M3.97864 5.83906C3.83078 5.59092 3.92051 5.26322 4.1741 5.12044C4.42261 4.97257 4.74994 5.06231 4.89273 5.31045L5.53723 6.43053C5.6851 6.67867 5.59536 7.00128 5.34177 7.14915C5.08455 7.30356 4.76121 7.20401 4.62315 6.95914L3.97864 5.83906Z"
                                            fill="#B476E5"
                                        />
                                        <path
                                            d="M11.1532 6.43069L11.7977 5.31061C11.9405 5.06247 12.2678 4.97237 12.5163 5.1206C12.7699 5.26338 12.8597 5.59072 12.7118 5.83922L12.0673 6.9593C11.9332 7.19763 11.6121 7.30771 11.3487 7.14931C11.0951 7.00145 11.0053 6.67919 11.1532 6.43069Z"
                                            fill="#B476E5"
                                        />
                                        <path
                                            d="M8.87077 18.8779V20.1668C8.87077 20.4575 8.63825 20.6951 8.34252 20.6951C8.05187 20.6951 7.81427 20.4571 7.81427 20.1668V18.8779C7.81427 18.5872 8.05187 18.3496 8.34252 18.3496C8.63861 18.3492 8.87077 18.5872 8.87077 18.8779Z"
                                            fill="#B476E5"
                                        />
                                        <path
                                            d="M40.2773 26.555C38.8665 27.0255 37.4398 27.1679 36.0977 26.9725C35.7755 25.2922 35.4321 23.7866 35.1465 22.6081C35.5218 22.7032 35.9178 22.7298 36.3248 22.6927C37.2759 22.603 38.0737 22.1696 38.6441 21.541C39.3105 22.9092 39.8437 24.6476 40.2773 26.555V26.555Z"
                                            fill="#B476E5"
                                        />
                                        <path
                                            d="M40.9377 30.0703C39.4899 30.5404 38.0632 30.6516 36.6895 30.398C36.5678 29.6002 36.4359 28.8184 36.2986 28.0627C37.6617 28.2106 39.0884 28.0522 40.4936 27.5977C40.6575 28.406 40.8054 29.2354 40.9376 30.0703L40.9377 30.0703Z"
                                            fill="#B476E5"
                                        />
                                        <path
                                            d="M42.0742 44.1652C42.0793 44.5881 41.7675 44.9471 41.345 45.0056L36.9596 45.6025C36.278 45.6977 35.7865 44.9736 36.1142 44.3662C37.6516 41.4921 37.4933 36.3298 36.8433 31.4894C37.2713 31.5526 37.6993 31.5846 38.1327 31.5846C39.11 31.5846 40.0982 31.4313 41.0969 31.125C41.8467 36.4136 42.0426 41.8561 42.0742 44.1645L42.0742 44.1652Z"
                                            fill="#B476E5"
                                        />
                                        <path
                                            d="M47.2788 8.04022L43.9607 8.35739C43.7493 8.37338 43.6755 8.64259 43.8499 8.7643L45.2551 9.76812C43.0095 9.22933 40.4257 9.65731 38.1169 11.1418L35.8502 12.5947C36.3309 9.40344 38.2913 7.88148 38.2913 7.88148C42.3334 4.16159 46.1797 6.65026 47.4004 7.63843C47.5588 7.76558 47.4796 8.02462 47.2787 8.04024L47.2788 8.04022Z"
                                            fill="#B476E5"
                                        />
                                        <path
                                            d="M34.3649 12.2053C34.3965 12.1843 34.4285 12.1683 34.4601 12.1472C31.3164 11.3123 28.8172 10.1291 25.4356 11.7087L26.6508 10.4247C26.7936 10.2714 26.6719 10.0178 26.4604 10.0389L23.1529 10.3666C22.9469 10.3826 22.8201 10.1501 22.952 9.99677C23.9663 8.79206 27.2633 5.61133 31.9449 8.4909C31.9449 8.4909 34.1483 9.62149 35.2369 12.6544C34.9619 12.459 34.6661 12.3057 34.3649 12.2054L34.3649 12.2053Z"
                                            fill="#B476E5"
                                        />
                                        <path
                                            d="M29.5406 15.9841C29.6408 17.0461 30.1851 17.9656 30.9989 18.5625L29.9631 19.3658C29.8468 19.461 29.6725 19.4134 29.6143 19.2706L28.822 17.2891C28.7533 17.1147 28.5102 17.0936 28.4151 17.2629C27.966 18.0553 26.867 19.683 25.3822 19.8257C25.2554 19.8363 25.1446 19.7306 25.1391 19.6038L25.0178 17.3531C25.0018 17.1417 24.7377 17.057 24.6109 17.2263L22.5662 19.8577C22.4449 20.0161 22.1859 19.9475 22.1648 19.7469C22.0009 18.3573 21.9428 14.5742 25.6838 12.7566C26.1434 12.5295 26.656 12.3391 27.2373 12.1807C27.2373 12.1807 29.1712 11.6735 31.5646 12.3867C30.3014 13.004 29.3768 14.325 29.5406 15.9842L29.5406 15.9841Z"
                                            fill="#B476E5"
                                        />
                                        <path
                                            d="M49.9992 17.0654C50.0152 17.2663 49.7721 17.3826 49.6188 17.2503L47.1142 15.0523C46.9558 14.915 46.7073 15.0472 46.7389 15.2583L47.0241 17.3296C47.0557 17.5621 46.8707 17.7681 46.6382 17.7681C45.233 17.7681 43.949 16.4791 43.3834 15.8186C43.262 15.6758 43.0241 15.7394 42.9925 15.9243L42.591 18.0221C42.5645 18.1699 42.4006 18.2491 42.2633 18.1805L41.2965 17.6893C41.7721 17.0128 42.0097 16.1728 41.9254 15.2903C41.751 13.383 40.2767 12.1939 38.6865 12.0304C41.1487 10.4504 43.5686 10.6037 43.5686 10.6037C49.048 10.9946 49.8774 15.5014 49.9992 17.0655L49.9992 17.0654Z"
                                            fill="#B476E5"
                                        />
                                        <path
                                            d="M39.4319 17.9529C39.4213 17.9158 39.4053 17.8787 39.3948 17.842C38.7859 16.1643 36.9694 15.2539 35.7385 15.4646C35.8788 14.0626 36.9026 13.1867 38.0633 13.0708C39.4845 12.9335 40.742 13.9693 40.8743 15.3905C40.98 16.4891 40.3776 17.4984 39.4319 17.9529L39.4319 17.9529Z"
                                            fill="#B476E5"
                                        />
                                        <path
                                            d="M35.0996 13.9428C34.6523 14.794 34.6941 15.5083 34.6556 15.7078C33.715 16.0671 32.9491 16.8224 32.579 17.795C32.5419 17.9007 32.5048 18.0064 32.4732 18.1118C31.4745 17.8371 30.6977 16.9757 30.5924 15.8821C30.455 14.4659 31.4905 13.2085 32.912 13.0712C33.7731 12.9865 34.5709 13.3349 35.0996 13.9427L35.0996 13.9428Z"
                                            fill="#B476E5"
                                        />
                                        <path
                                            d="M38.1009 20.5386C37.6889 21.1464 37.0124 21.5689 36.2251 21.643C35.7336 21.6906 35.2634 21.6009 34.8514 21.4C34.0696 21.0196 33.5039 20.2585 33.4142 19.3338C33.3771 18.9269 33.4302 18.5306 33.5675 18.1716C33.8898 17.3313 34.6349 16.6923 35.57 16.5495C35.6227 16.5335 35.6808 16.5284 35.7339 16.5234C35.7866 16.5179 35.8396 16.5128 35.8923 16.5179C37.0229 16.4703 38.0267 17.1733 38.402 18.2036C38.4761 18.4042 38.5233 18.6211 38.5447 18.8431C38.608 19.4661 38.4336 20.063 38.1008 20.5386L38.1009 20.5386Z"
                                            fill="#B476E5"
                                        />
                                    </svg>
                                </div>
                                <h6 className="text-xl font-bold text-black dark:text-white">5 Working Days</h6>
                            </div>
                        </div>
                        <div data-aos="fade-up" data-aos-duration="1000">
                            <div
                                style={{ borderRadius: '90px' }}
                                className="dark:border-gray-dark dark:bg-gray-dark flex items-center justify-start  gap-3 rounded-[32px] p-6 drop-shadow-[5px_10px_60px_rgba(119,128,161,0.08)] transition hover:border-[#1759D4] hover:bg-secondary/10 dark:hover:border-[#1759D4] sm:justify-center md:p-10"
                            >
                                <div>
                                    <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M35.9006 13.0684C31.3845 13.1158 29.9582 14.352 27.7239 16.3008C26.8683 17.0616 23.7781 17.2042 21.8766 17.0138C20.7833 16.9186 19.8326 17.7268 19.6897 18.7727C19.5945 19.866 20.3552 20.8167 21.4485 20.9596C21.7815 21.0071 22.5419 21.0548 23.4926 21.0548C25.5366 21.0548 28.5794 20.7696 30.2905 19.2482C30.5282 19.0105 30.766 18.8205 31.0034 18.6301C30.8134 20.6268 30.5279 24.097 30.2905 27.1396C23.73 27.2822 21.0679 27.9003 20.0696 30.0395C19.3566 31.6083 19.3089 36.5523 19.9744 44.7291C20.0696 46.0602 21.2103 47.1061 22.5413 47.1061H22.7313C24.1576 47.0109 25.2035 45.775 25.1083 44.3488C24.7754 40.0226 24.5379 34.7934 24.7279 32.7492C26.0116 32.4641 28.5785 32.3215 30.7655 32.3689C33.095 32.4163 38.0864 32.8444 38.5619 30.8953C39.0849 28.7083 39.7978 18.5826 39.7978 16.2057C39.7988 14.5423 39.1334 13.0684 35.9006 13.0684Z"
                                            fill="#47BDFF"
                                        />
                                        <path
                                            d="M36.2283 2.00879C38.9803 2.17095 41.08 4.53329 40.9179 7.2853C40.7557 10.0373 38.3934 12.137 35.6414 11.9749C32.889 11.8127 30.7896 9.45036 30.9518 6.69836C31.1136 3.94635 33.4759 1.84665 36.2283 2.00879Z"
                                            fill="#47BDFF"
                                        />
                                        <path
                                            d="M43.5545 13.972C42.6512 13.8768 41.8431 14.5423 41.7479 15.4456L39.7987 33.7957H28.1041C27.2008 33.7957 26.4401 34.5564 26.4401 35.4597C26.4401 36.363 27.2008 37.1238 28.1041 37.1238H33.4761V43.2088L29.7681 44.5395C29.1025 44.7773 28.7222 45.538 28.9599 46.2509C29.1977 46.9638 29.9584 47.2968 30.6713 47.0591L34.8072 45.5854L38.943 47.0591C39.0856 47.1065 39.2282 47.1542 39.3708 47.1542C39.8937 47.1542 40.4166 46.8213 40.6067 46.2987C40.8445 45.6332 40.5115 44.8724 39.7986 44.5873L36.0905 43.2562L36.0908 37.1235H41.2251C42.0806 37.1235 42.7939 36.5054 42.8891 35.6498L44.9809 15.826C45.1232 14.8753 44.4576 14.0668 43.5543 13.972L43.5545 13.972Z"
                                            fill="#B476E5"
                                        />
                                        <path
                                            d="M28.4369 26.332C28.627 26.332 28.8173 26.142 28.8173 25.9516V23.7173C28.8173 23.5273 28.6273 23.3369 28.4369 23.3369L25.9648 23.3373V22.5766C25.9648 22.3866 25.7748 22.1962 25.5845 22.1962H18.5962C18.4062 22.1962 18.2159 22.3862 18.2159 22.5766V23.3373H13.6049V22.5766C13.6049 22.3866 13.4149 22.1962 13.1294 22.1962H11.228C11.038 20.3896 10.9428 15.8735 12.2738 13.8769L12.4164 15.1128C12.4639 15.3028 12.6542 15.4457 12.8442 15.4457L13.272 15.3983L13.7475 18.8686C13.7949 19.0586 13.9853 19.2015 14.1753 19.2015L15.6489 19.0115C15.8389 18.9641 15.9819 18.7737 15.9819 18.5837L14.3178 6.22356C14.2704 6.03355 14.0801 5.89062 13.89 5.89062L12.4638 6.03322C12.2738 6.08064 12.1309 6.27098 12.1309 6.46099L12.6538 10.4067L12.226 10.4542C12.036 10.5016 11.8931 10.6919 11.8931 10.8819L12.0831 12.1656C11.8931 12.3082 11.6553 12.4985 11.465 12.7359C9.46835 15.1129 9.80095 20.8175 9.94357 22.1487H8.08954C7.80436 22.1487 7.61401 22.3387 7.61401 22.529V23.2897H5.38036C5.19034 23.2897 5 23.4798 5 23.6701V25.9044C5 26.0944 5.19001 26.2848 5.38036 26.2848H8.28024V46.5365C8.28024 46.7265 8.47025 46.9168 8.6606 46.9168H15.3637C15.5537 46.9168 15.7441 46.7268 15.7441 46.5365V26.3323L28.4369 26.332Z"
                                            fill="#B476E5"
                                        />
                                    </svg>
                                </div>
                                <h6 className="text-xl font-bold text-black dark:text-white">Flexible Work Environment</h6>
                            </div>
                        </div>
                        <div data-aos="fade-up" data-aos-duration="1000">
                            <div
                                style={{ borderRadius: '90px' }}
                                className="dark:border-gray-dark dark:bg-gray-dark flex items-center justify-start  gap-3 rounded-[32px] p-6 drop-shadow-[5px_10px_60px_rgba(119,128,161,0.08)] transition hover:border-[#1759D4] hover:bg-secondary/10 dark:hover:border-[#1759D4] sm:justify-center md:p-10"
                            >
                                <div>
                                    <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M1.0957 16.4609L11.8572 42.5465L22.6188 16.4609H1.0957Z" fill="#B476E5" />
                                        <path
                                            d="M16.1364 9.77767L13.9242 10.1744L13.4034 14.1427L12.2323 12.1585H11.5816L10.4102 13.7459L10.0198 9.38095H8.06813L6.24641 14.1427L5.20494 7H3.25331V14.5398L1.56189 11.365H0L1.07766 15.4653H17.1765L16.1364 9.77767Z"
                                            fill="#B476E5"
                                        />
                                        <path
                                            d="M24.0738 12.6875L22.2525 11.7615L20.3005 14.6716L19.3893 10.3066H18.0882L17.177 15.4652H22.7736L24.0738 12.6875Z"
                                            fill="#B476E5"
                                        />
                                        <path
                                            d="M20.5798 27.1243V27.882H48.0288V27.1243H48.0299C48.0299 23.9086 45.7834 21.293 43.022 21.293L25.5872 21.2933C22.8257 21.2933 20.5792 23.909 20.5792 27.1243L20.5798 27.1243Z"
                                            fill="#47BDFF"
                                        />
                                        <path
                                            d="M46.9339 32.3262H20.8634C20.2581 32.3262 19.7679 32.9606 19.7679 33.7442C19.7679 34.5277 20.2584 35.1633 20.8634 35.1633H46.9339C47.5395 35.1633 48.0301 34.5277 48.0301 33.7442C48.0304 32.9606 47.5399 32.3262 46.9339 32.3262Z"
                                            fill="#47BDFF"
                                        />
                                        <path
                                            d="M20.2549 36.991C20.2549 40.2078 22.501 42.8234 25.2628 42.8234H42.6967C45.4581 42.8234 47.7046 40.2081 47.7046 36.991V36.2344H20.2556L20.2549 36.991Z"
                                            fill="#47BDFF"
                                        />
                                        <path
                                            d="M49.0851 29.1121C48.1624 29.111 46.6359 28.5851 45.7649 29.1461C45.2681 29.4683 44.7835 30.0554 44.2613 29.5306C43.976 29.2442 43.6527 28.925 43.2619 28.791C42.299 28.4592 41.4412 28.8633 40.5872 29.3118C39.8431 29.7045 39.0555 29.0069 38.3355 28.9442C37.8195 28.8999 37.3899 28.9822 36.8927 29.132C35.7847 29.4668 35.1843 29.6705 34.0974 29.1652C33.4751 28.8759 32.8975 28.608 32.2302 28.4563C30.7949 28.1307 29.5533 29.3291 28.0974 29.0361C26.8625 28.7858 26.0169 28.1761 24.709 28.3662C24.1904 28.4419 23.6623 28.8859 23.2485 29.1752C22.197 29.9071 21.2131 29.1678 20.2447 28.674C19.1607 28.1211 18.2034 29.7528 19.2902 30.3068C20.2734 30.808 21.3526 31.6336 22.5274 31.4424C23.8796 31.2225 24.8289 29.9326 26.2177 30.3452C27.4981 30.7257 28.3266 31.0893 29.6841 30.8837C30.8053 30.7143 31.3633 30.0208 32.6311 30.5571C33.3327 30.8538 33.9624 31.2029 34.7072 31.3845C36.0613 31.7163 37.2419 30.5571 38.5226 30.9291C39.8793 31.3229 40.6079 31.4388 41.8926 30.7608C42.5551 30.4128 44.0111 31.7488 44.8677 31.7713C45.2914 31.7824 45.7265 31.486 46.0561 31.2564C46.9419 30.6394 48.0941 31.0025 49.0851 31.004C50.3049 31.0051 50.3049 29.1143 49.0851 29.1122V29.1121Z"
                                            fill="#47BDFF"
                                        />
                                    </svg>
                                </div>
                                <h6 className="text-xl font-bold text-black dark:text-white">Healthy Snacks</h6>
                            </div>
                        </div>
                    </div>
                </div><br /><br /><br /><br />
            </section>



            <section className="py-14 lg:py-[100px]" id="open-position">
                <div className="container">
                    <div className="heading text-center">
                        <h6 style={{ color: '#1759D4', fontSize: '25px' }}>Open Positions</h6>
                        <h4 style={{ color: '#FFFFFF' }}>Wake Up To A Better Future</h4>
                    </div>
                    <div className="pb-[10px]">
                        <ul className="filters portfolio-filter flex items-center gap-4 overflow-x-auto whitespace-nowrap pb-2.5 font-bold dark:text-white md:justify-between">


                            <li className={`filter ${activeTab === 'design' ? 'active' : ''}`}>

                                <button

                                    className="text-white rounded-[10px] bg-gray/5 py-4 px-5 leading-5 transition hover:bg-[#1759D4] hover:text-white"
                                >
                                    Full-Stack Developer
                                </button>
                            </li>
                            <li className={`filter ${activeTab === 'design' ? 'active' : ''}`}>
                                <button

                                    className="text-white rounded-[10px] bg-gray/5 py-4 px-5 leading-5 transition hover:bg-[#1759D4] hover:text-white"
                                >
                                    Java Developer
                                </button>
                            </li>
                            <li className={`filter ${activeTab === 'website' ? 'active' : ''}`}>
                                <button

                                    className=" text-white rounded-[10px] bg-gray/5 py-4 px-5 leading-5 transition hover:bg-[#1759D4] hover:text-white"
                                >
                                    Python Developer
                                </button>
                            </li>
                            <li className={`filter ${activeTab === 'app' ? 'active' : ''}`}>
                                <button

                                    className="text-white rounded-[10px] bg-gray/5 py-4 px-5 leading-5 transition hover:bg-[#1759D4] hover:text-white"
                                >
                                    React Developer
                                </button>
                            </li>
                            <li className={`filter ${activeTab === 'design' ? 'active' : ''}`}>
                                <button

                                    className="text-white rounded-[10px] bg-gray/5 py-4 px-5 leading-5 transition hover:bg-[#1759D4] hover:text-white"
                                >
                                    UI/UX Designer
                                </button>
                            </li><li className={`filter ${activeTab === 'design' ? 'active' : ''}`}>
                                <button
                                    className="text-white rounded-[10px] bg-gray/5 py-4 px-5 leading-5 transition hover:bg-[#1759D4] hover:text-white"
                                >
                                    IT Sales
                                </button>
                            </li>

                        </ul>
                    </div>

                </div>
            </section>

            {/* my section */}
            <>
                <section className="dark:bg-gray-dark bg-[#e5f1ff] py-14 lg:py-[100px]">
                    <div className="container">
                        <div className="relative z-10 lg:flex">
                            <div className="heading text-center lg:mb-0 lg:w-1/3 ltr:lg:pr-10 ltr:lg:text-left rtl:lg:pl-10 rtl:lg:text-right">
                                <h6 style={{ fontSize: '24px', color: 'black' }}>Get In Touch.</h6>
                                <h4 className="sm:!leading-[50px]" style={{ color: '#1759D4' }}>Ready to Get Started?</h4>
                                <div className="block dark:hidden">
                                    <svg className="mx-auto" width="328" height="328" viewBox="0 0 328 328" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M256.296 146.855L206.276 143.116C201.431 142.749 196.568 143.55 192.098 145.453L178.792 151.124C177.003 154.373 174.804 157.378 172.249 160.067C165.83 166.922 141.214 179.667 128.22 182.346C125.158 182.891 122.003 182.34 119.308 180.788C113.421 185.512 107.253 189.872 100.837 193.848C100.837 193.848 112.989 228.467 158.237 208.898L194.227 193.287L186.343 212.201C186.561 223.014 186.623 237.191 185.907 246.641C194.356 249.214 203.368 249.301 211.865 246.889C215.26 223.83 217.846 187.435 209.059 173.694L252.061 173.289C257.48 163.529 257.002 157.979 256.296 146.855Z"
                                            fill="#B476E5"
                                        ></path>
                                        <path
                                            d="M176.4 133.457L181.635 110.429C181.752 109.925 181.661 109.396 181.387 108.958C181.112 108.519 180.674 108.208 180.171 108.092C179.667 107.977 179.137 108.066 178.699 108.341C178.26 108.615 177.95 109.053 177.834 109.557L171.664 136.697"
                                            fill="#B476E5"
                                        ></path>
                                        <path
                                            d="M176.4 133.457L181.635 110.429C181.752 109.925 181.661 109.396 181.387 108.958C181.112 108.519 180.674 108.208 180.171 108.092C179.667 107.977 179.137 108.066 178.699 108.341C178.26 108.615 177.95 109.053 177.834 109.557L171.664 136.697C172.44 139.559 174.524 143.397 176.4 133.457Z"
                                            fill="#B476E5"
                                        ></path>
                                        <path
                                            d="M172.349 46.2072C172.349 50.0714 171.203 53.8487 169.056 57.0616C166.909 60.2745 163.858 62.7786 160.288 64.2574C156.718 65.7362 152.79 66.1231 149 65.3692C145.21 64.6154 141.729 62.7547 138.997 60.0223C136.264 57.2899 134.404 53.8086 133.65 50.0188C132.896 46.2289 133.283 42.3006 134.761 38.7306C136.24 35.1607 138.744 32.1093 141.957 29.9625C145.17 27.8158 148.948 26.6699 152.812 26.6699C157.992 26.673 162.96 28.7324 166.624 32.3957C170.286 36.0589 172.346 41.0266 172.349 46.2072Z"
                                            fill="#B476E5"
                                        ></path>
                                        <path
                                            d="M274.372 149.317C270.787 157.817 265.722 165.614 259.415 172.345C262.874 172.874 266.332 173.657 269.293 174.121C272.376 172.776 275.267 171.028 277.889 168.92C286.089 162.314 302.981 154.119 306.681 149.445C299.982 148.476 283.592 149.13 274.372 149.317Z"
                                            fill="#47BDFF"
                                        ></path>
                                        <path
                                            d="M210.987 265.857C202.353 262.597 194.364 257.828 187.399 251.771C186.994 255.232 186.371 258.722 185.997 261.713C187.458 264.747 189.313 267.576 191.512 270.126C198.4 278.041 207.219 294.618 212.012 298.17C212.763 291.44 211.519 275.081 210.987 265.857Z"
                                            fill="#47BDFF"
                                        ></path>
                                        <path
                                            d="M104.015 167.079C103.392 167.39 102.737 167.671 102.083 167.951C99.027 164.359 96.1553 160.616 93.4797 156.733C93.7601 157.389 102.36 175.99 116.632 183.001C117.566 182.253 118.47 181.537 119.311 180.82C113.98 177.922 108.44 172.313 104.015 167.079Z"
                                            fill="#47BDFF"
                                        ></path>
                                        <path
                                            d="M185.966 196.836C185.966 196.836 186.246 203.411 186.402 212.167L194.223 193.284L185.966 196.836Z"
                                            fill="#47BDFF"
                                        ></path>
                                        <path
                                            d="M102.052 85.3147C102.052 85.3147 96.5957 75.0926 83.761 81.3262C70.9264 87.5598 73.4159 112.611 73.4159 112.611C73.4159 112.611 62.0097 118.064 55.9335 127.256C46.5232 141.496 51.2612 162.997 80.5237 162.997C79.1287 156.859 78.6457 150.548 79.0903 144.269C79.8693 133.208 83.889 123.081 87.4412 112.704C91.9709 99.2908 90.9984 100.363 92.5826 95.4417C88.8106 91.8583 93.2993 87.5582 95.3247 91.0465C96.1824 92.4569 96.3874 92.5126 97.0729 92.7275C100.786 93.8902 107.523 95.1875 111.177 93.9772C111.182 93.8821 111.493 85.3147 102.052 85.3147Z"
                                            fill="#47BDFF"
                                        ></path>
                                        <path
                                            d="M95.1347 117.035L91.8008 108.685C92.9128 110.175 94.2234 111.506 95.6958 112.642C95.4217 114.094 95.2344 115.561 95.1347 117.035Z"
                                            fill="#47BDFF"
                                        ></path>
                                        <path
                                            d="M139.226 258.535C139.442 259.59 139.34 260.684 138.934 261.679C138.528 262.675 137.835 263.527 136.944 264.131C136.053 264.733 135.004 265.058 133.928 265.064C132.853 265.069 131.8 264.756 130.902 264.164C130.004 263.572 129.303 262.725 128.886 261.735C128.468 260.743 128.355 259.65 128.559 258.594C128.762 257.538 129.275 256.566 130.031 255.801C130.787 255.037 131.754 254.514 132.807 254.297C133.507 254.15 134.229 254.143 134.932 254.278C135.634 254.412 136.304 254.683 136.9 255.078C137.497 255.472 138.01 255.98 138.409 256.574C138.809 257.167 139.086 257.833 139.226 258.535Z"
                                            fill="#47BDFF"
                                        ></path>
                                        <path
                                            d="M172.349 46.2072C172.349 50.0714 171.203 53.8487 169.056 57.0616C166.909 60.2745 163.858 62.7786 160.288 64.2574C156.718 65.7362 152.79 66.1231 149 65.3692C145.21 64.6154 141.729 62.7547 138.997 60.0223C136.264 57.2899 134.404 53.8086 133.65 50.0188C132.896 46.2289 133.283 42.3006 134.761 38.7306C136.24 35.1607 138.744 32.1093 141.957 29.9625C145.17 27.8158 148.948 26.6699 152.812 26.6699C157.992 26.673 162.96 28.7324 166.624 32.3957C170.286 36.0589 172.346 41.0266 172.349 46.2072Z"
                                            stroke="#08111F"
                                            strokeWidth="1.9"
                                        ></path>
                                        <path
                                            d="M215.069 208.21L231.179 216.343C234.485 218.007 238.318 218.292 241.834 217.136C245.352 215.98 248.266 213.476 249.939 210.173L268.386 173.653"
                                            stroke="#08111F"
                                            strokeWidth="1.9"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        ></path>
                                        <path
                                            d="M280.071 150.532L291.444 128.035C293.109 124.728 293.394 120.896 292.238 117.38C291.082 113.863 288.577 110.949 285.274 109.276L171.44 51.7656M106.913 126.608L139.939 61.1864"
                                            stroke="#08111F"
                                            strokeWidth="1.9"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        ></path>
                                        <path
                                            d="M291.974 116.505L196.903 131.836L161.762 63.5879"
                                            stroke="#08111F"
                                            strokeWidth="1.9"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        ></path>
                                        <path
                                            d="M144.812 213.413C137.719 221.211 129.129 227.501 119.553 231.906C109.977 236.312 99.6115 238.744 89.0751 239.058C78.5388 239.371 68.0474 237.559 58.2264 233.729C48.4056 229.9 39.4566 224.132 31.9133 216.77C24.3699 209.406 18.3867 200.601 14.3205 190.876C10.2543 181.151 8.18852 170.706 8.2463 160.165C8.30407 149.624 10.4843 139.203 14.6568 129.523C18.8293 119.843 24.9088 111.103 32.5324 103.823"
                                            stroke="#08111F"
                                            strokeWidth="1.9"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        ></path>
                                        <path
                                            d="M95.1344 119.622C95.0468 117.26 95.2474 114.897 95.7314 112.583C99.5296 115.124 102.669 113.544 104.973 110.258C107.928 105.475 109.445 99.9421 109.343 94.3203"
                                            stroke="#08111F"
                                            strokeWidth="1.9"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        ></path>
                                        <path
                                            d="M93.4794 156.734C96.1541 160.617 99.0244 164.36 102.08 167.951C106.99 165.893 111.514 163.012 115.455 159.433C118.376 156.783 120.996 153.819 123.268 150.595C117.892 143.565 112.909 136.241 108.344 128.659C106.121 124.961 102.784 122.061 98.8111 120.377C97.1071 119.715 95.2672 119.479 93.4515 119.691C92.1031 120.045 90.6906 120.076 89.3278 119.783C87.9651 119.489 86.6906 118.879 85.6074 118.002"
                                            stroke="#08111F"
                                            strokeWidth="1.9"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        ></path>
                                        <path
                                            d="M256.545 149.286C260.782 149.442 269.196 149.411 274.337 149.317C270.762 157.814 265.709 165.611 259.413 172.345C257.824 172.095 254.458 171.752 252.932 171.659"
                                            stroke="#08111F"
                                            strokeWidth="1.9"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        ></path>
                                        <path
                                            d="M306.679 149.441C308.455 149.691 309.597 150.097 309.733 150.657C310.596 154.196 292.073 162.793 283.745 169.508C281.323 171.486 278.614 173.084 275.709 174.245C273.591 174.633 271.416 174.592 269.313 174.12C272.402 172.779 275.296 171.03 277.92 168.92C286.097 162.327 302.973 154.147 306.679 149.441Z"
                                            stroke="#08111F"
                                            strokeWidth="1.9"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        ></path>
                                        <path
                                            d="M274.372 149.317C283.595 149.13 299.985 148.476 306.68 149.442C302.972 154.116 286.089 162.319 277.888 168.917C275.265 171.027 272.374 172.777 269.288 174.12C266.327 173.653 262.869 172.874 259.41 172.344C265.719 165.614 270.785 157.817 274.372 149.317Z"
                                            stroke="#08111F"
                                            strokeWidth="1.9"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        ></path>
                                        <path
                                            d="M210.614 247.255C210.333 251.929 210.614 258.815 210.988 265.888C202.365 262.621 194.389 257.852 187.431 251.804C187.618 250.215 187.742 248.626 187.773 247.13"
                                            stroke="#08111F"
                                            strokeWidth="1.9"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        ></path>
                                        <path
                                            d="M212.016 298.17C211.829 299.974 211.489 301.106 210.925 301.286C207.45 302.393 198.144 284.058 191.138 275.985C189.062 273.631 187.36 270.973 186.09 268.101C185.635 265.997 185.602 263.822 185.997 261.705C187.453 264.742 189.308 267.571 191.512 270.118C198.4 278.067 207.217 294.618 212.016 298.17Z"
                                            stroke="#08111F"
                                            strokeWidth="1.9"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        ></path>
                                        <path
                                            d="M210.987 265.857C211.517 275.081 212.763 291.441 212.015 298.165C207.217 294.613 198.377 278.054 191.515 270.121C189.313 267.573 187.458 264.744 186 261.708C186.374 258.717 186.997 255.225 187.402 251.767C194.366 257.825 202.352 262.596 210.987 265.857Z"
                                            stroke="#08111F"
                                            strokeWidth="1.9"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        ></path>
                                        <path
                                            d="M116.635 183.001C102.364 175.99 93.7634 157.388 93.4797 156.733"
                                            stroke="#08111F"
                                            strokeWidth="1.9"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        ></path>
                                        <path
                                            d="M104.016 167.078C108.444 172.313 113.99 177.948 119.315 180.854C122.017 182.386 125.169 182.925 128.227 182.381C141.232 179.757 165.837 166.957 172.256 160.102C183.88 147.687 182.926 138.229 181.915 122.429C181.505 116.01 180.699 116.164 179.734 119.149C178.299 123.603 176.489 134.401 174.998 138.655C174.859 139.084 174.572 139.448 174.188 139.684C173.04 140.34 172.317 138.905 171.728 136.879C171.103 134.729 170.657 131.866 170.076 130.155C169.058 127.139 166.98 124.391 166.649 133.24C166.455 138.444 166.442 147.406 160.791 150.69C156.392 153.196 151.809 155.363 147.08 157.171C142.189 159.086 137.065 160.344 131.843 160.91C129.008 161.061 125.206 157.825 121.592 152.809"
                                            stroke="#08111F"
                                            strokeWidth="1.9"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        ></path>
                                        <path
                                            d="M176.399 133.457L181.634 110.429C181.751 109.925 181.661 109.396 181.387 108.958C181.111 108.519 180.673 108.208 180.17 108.092C179.666 107.977 179.137 108.066 178.699 108.341C178.259 108.615 177.949 109.053 177.833 109.557L171.663 136.697"
                                            stroke="#08111F"
                                            strokeWidth="1.9"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        ></path>
                                        <path
                                            d="M185.976 196.866C190.837 194.778 194.231 193.284 194.231 193.284L186.402 212.167"
                                            stroke="#08111F"
                                            strokeWidth="1.9"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        ></path>
                                        <path
                                            d="M119.315 180.851C113.428 185.559 107.257 189.9 100.837 193.848C90.3679 186.542 83.0982 175.499 80.5237 162.996"
                                            stroke="#08111F"
                                            strokeWidth="1.9"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        ></path>
                                        <path
                                            d="M178.768 151.125L193.382 144.924C197.001 143.395 200.931 142.743 204.848 143.023L256.295 146.856C257.453 157.623 257.315 163.815 252.058 173.28L209.117 173.685"
                                            stroke="#08111F"
                                            strokeWidth="1.9"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        ></path>
                                        <path
                                            d="M102.052 85.3147C102.052 85.3147 96.5957 75.0926 83.761 81.3262C70.9264 87.5598 73.4159 112.611 73.4159 112.611C73.4159 112.611 62.0097 118.064 55.9335 127.256C46.5232 141.496 51.2612 162.997 80.5237 162.997C79.1287 156.859 78.6457 150.548 79.0903 144.269C79.8693 133.208 83.889 123.081 87.4412 112.704C88.2514 110.305 90.1833 104.447 90.8376 102.015C91.4297 99.7418 91.7101 98.151 92.5826 95.4417C88.8106 91.8583 93.2993 87.5582 95.3247 91.0465C96.2185 92.5225 96.3923 92.4372 97.3714 92.7603C99.7953 93.5573 106.326 95.3663 111.185 93.9083C111.182 93.9132 111.493 85.3147 102.052 85.3147Z"
                                            stroke="#08111F"
                                            strokeWidth="1.9"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        ></path>
                                        <path
                                            d="M40.5402 90.6723C29.4937 96.0007 19.1002 102.589 9.56714 110.305C9.29884 110.472 9.07503 110.701 8.9149 110.974C8.75477 111.246 8.66313 111.553 8.64781 111.869C8.63247 112.184 8.69396 112.499 8.82695 112.785C8.95993 113.072 9.16047 113.322 9.41134 113.514L16.5159 119.154C20.8209 113.508 26.6576 108.735 32.5223 103.805C28.0082 109.645 24.0548 115.897 20.7143 122.478L28.3583 128.533C28.605 128.729 28.8951 128.863 29.2042 128.923C29.5134 128.984 29.8323 128.969 30.1346 128.88C30.4368 128.792 30.7135 128.632 30.9412 128.414C31.1688 128.197 31.341 127.928 31.4432 127.63L43.4693 92.988C43.6097 92.5997 43.6244 92.1769 43.5114 91.7797C43.3983 91.3825 43.1631 91.0308 42.8392 90.7748C42.5151 90.5187 42.1187 90.3709 41.7061 90.3525C41.2936 90.3342 40.8856 90.446 40.5402 90.6723Z"
                                            stroke="#08111F"
                                            strokeWidth="1.9"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        ></path>
                                        <path
                                            d="M251.808 31.2836C245.607 28.1971 238.659 32.5956 239.656 39.0736L236.758 41.7517L240.746 42.0633C244.267 48.0148 253.21 48.2658 256.139 42.406C257.035 40.356 257.081 38.0351 256.269 35.9508C255.457 33.8666 253.853 32.1885 251.808 31.2836Z"
                                            stroke="#08111F"
                                            strokeWidth="1.9"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        ></path>
                                        <path
                                            d="M288.702 211.325C287.761 210.838 286.733 210.541 285.678 210.451C284.622 210.361 283.558 210.479 282.547 210.801C281.539 211.122 280.601 211.639 279.792 212.322C278.982 213.006 278.315 213.843 277.827 214.784C277.827 214.784 272.561 225.069 268.137 224.755L290.136 236.129C287.3 232.701 292.161 222.202 292.161 222.202C292.648 221.26 292.947 220.232 293.035 219.176C293.125 218.12 293.007 217.057 292.686 216.047C292.364 215.037 291.848 214.1 291.164 213.29C290.48 212.48 289.644 211.812 288.702 211.325Z"
                                            stroke="#08111F"
                                            strokeWidth="1.9"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        ></path>
                                        <path
                                            d="M282.75 232.327C282.255 233.286 281.397 234.008 280.369 234.336C279.341 234.662 278.226 234.567 277.266 234.072C276.307 233.577 275.585 232.719 275.257 231.691C274.931 230.662 275.026 229.547 275.521 228.588"
                                            stroke="#08111F"
                                            strokeWidth="1.9"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        ></path>
                                        <path
                                            d="M312.695 92.2949L306.868 112.362"
                                            stroke="#08111F"
                                            strokeWidth="1.9"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        ></path>
                                        <path
                                            d="M319.8 105.226L299.733 99.3994"
                                            stroke="#08111F"
                                            strokeWidth="1.9"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        ></path>
                                        <path
                                            d="M186.434 236.348C195.285 237.804 204.301 237.97 213.2 236.84"
                                            stroke="#08111F"
                                            strokeWidth="1.9"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        ></path>
                                        <path
                                            d="M244.393 146.045C245.797 155.393 244.285 164.946 240.062 173.403"
                                            stroke="#08111F"
                                            strokeWidth="1.9"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        ></path>
                                        <path
                                            d="M139.226 258.535C139.441 259.59 139.34 260.684 138.934 261.679C138.528 262.675 137.835 263.527 136.944 264.131C136.053 264.733 135.003 265.058 133.928 265.064C132.852 265.069 131.799 264.756 130.902 264.164C130.004 263.572 129.303 262.725 128.885 261.735C128.468 260.743 128.355 259.65 128.558 258.594C128.762 257.538 129.275 256.566 130.031 255.801C130.787 255.037 131.753 254.514 132.807 254.297C133.507 254.15 134.229 254.143 134.932 254.278C135.634 254.412 136.303 254.683 136.9 255.078C137.497 255.472 138.01 255.98 138.409 256.574C138.808 257.167 139.086 257.833 139.226 258.535Z"
                                            stroke="#08111F"
                                            strokeWidth="1.9"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        ></path>
                                        <path
                                            d="M136.764 241.491C138.853 239.537 141.475 238.247 144.297 237.784C147.12 237.32 150.016 237.704 152.62 238.886C155.225 240.069 157.42 241.997 158.928 244.428C160.437 246.857 161.191 249.681 161.095 252.539C160.999 255.398 160.057 258.163 158.39 260.487C156.722 262.811 154.402 264.587 151.725 265.592C149.047 266.597 146.132 266.786 143.347 266.135C140.562 265.484 138.032 264.021 136.079 261.932C133.461 259.129 132.062 255.403 132.191 251.569C132.319 247.736 133.964 244.111 136.764 241.491Z"
                                            stroke="#08111F"
                                            strokeWidth="1.9"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        ></path>
                                        <path
                                            d="M100.837 193.848C100.837 193.848 112.989 228.467 158.237 208.898L185.976 196.866C186.32 209.956 187.045 232.111 185.943 246.631C194.392 249.204 203.402 249.291 211.899 246.881C215.296 223.821 217.921 187.421 209.126 173.684C197.731 155.885 162.698 167.296 162.698 167.296"
                                            stroke="#08111F"
                                            strokeWidth="1.9"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        ></path>
                                        <path
                                            d="M95.7317 112.583C94.2303 111.513 92.9112 110.208 91.8252 108.718L95.1347 117.036"
                                            stroke="#08111F"
                                            strokeWidth="1.9"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        ></path>
                                    </svg>
                                </div>
                                <div className="hidden dark:block">
                                    <svg className="mx-auto" width="328" height="328" viewBox="0 0 328 328" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M256.296 146.855L206.276 143.116C201.431 142.749 196.568 143.55 192.098 145.453L178.792 151.124C177.003 154.373 174.804 157.378 172.249 160.067C165.83 166.922 141.213 179.667 128.22 182.346C125.158 182.891 122.003 182.34 119.308 180.788C113.421 185.512 107.253 189.872 100.837 193.848C100.837 193.848 112.989 228.467 158.237 208.898L194.226 193.287L186.343 212.201C186.561 223.014 186.623 237.191 185.907 246.641C194.356 249.214 203.368 249.301 211.865 246.889C215.259 223.83 217.846 187.435 209.059 173.694L252.061 173.289C257.48 163.529 257.002 157.979 256.296 146.855Z"
                                            fill="#B476E5"
                                        ></path>
                                        <path
                                            d="M176.4 133.457L181.635 110.429C181.751 109.925 181.661 109.396 181.387 108.958C181.112 108.519 180.674 108.208 180.171 108.092C179.667 107.977 179.137 108.066 178.699 108.341C178.26 108.615 177.95 109.053 177.833 109.557L171.664 136.697"
                                            fill="#B476E5"
                                        ></path>
                                        <path
                                            d="M176.4 133.457L181.635 110.429C181.751 109.925 181.661 109.396 181.387 108.958C181.112 108.519 180.674 108.208 180.171 108.092C179.667 107.977 179.137 108.066 178.699 108.341C178.26 108.615 177.95 109.053 177.833 109.557L171.664 136.697C172.44 139.559 174.524 143.397 176.4 133.457Z"
                                            fill="#B476E5"
                                        ></path>
                                        <path
                                            d="M172.349 46.2072C172.349 50.0714 171.203 53.8487 169.056 57.0616C166.909 60.2745 163.858 62.7786 160.288 64.2574C156.718 65.7362 152.79 66.1231 149 65.3692C145.21 64.6154 141.729 62.7547 138.997 60.0223C136.264 57.2899 134.404 53.8086 133.65 50.0188C132.896 46.2289 133.283 42.3006 134.761 38.7306C136.24 35.1607 138.744 32.1093 141.957 29.9625C145.17 27.8158 148.948 26.6699 152.812 26.6699C157.992 26.673 162.96 28.7324 166.624 32.3957C170.286 36.0589 172.346 41.0266 172.349 46.2072Z"
                                            fill="#B476E5"
                                        ></path>
                                        <path
                                            d="M274.372 149.317C270.787 157.817 265.722 165.614 259.415 172.345C262.874 172.874 266.332 173.657 269.293 174.121C272.376 172.776 275.267 171.028 277.889 168.92C286.089 162.314 302.981 154.119 306.681 149.445C299.982 148.476 283.592 149.13 274.372 149.317Z"
                                            fill="#47BDFF"
                                        ></path>
                                        <path
                                            d="M210.987 265.857C202.353 262.597 194.364 257.828 187.399 251.771C186.994 255.232 186.371 258.722 185.997 261.713C187.458 264.747 189.313 267.576 191.512 270.126C198.4 278.041 207.219 294.618 212.012 298.17C212.764 291.44 211.519 275.081 210.987 265.857Z"
                                            fill="#47BDFF"
                                        ></path>
                                        <path
                                            d="M104.015 167.079C103.392 167.39 102.738 167.671 102.083 167.951C99.027 164.359 96.1554 160.616 93.4797 156.733C93.7602 157.389 102.36 175.99 116.632 183.001C117.566 182.253 118.47 181.537 119.311 180.82C113.98 177.922 108.44 172.313 104.015 167.079Z"
                                            fill="#47BDFF"
                                        ></path>
                                        <path
                                            d="M185.966 196.836C185.966 196.836 186.246 203.411 186.402 212.167L194.223 193.284L185.966 196.836Z"
                                            fill="#47BDFF"
                                        ></path>
                                        <path
                                            d="M102.052 85.3147C102.052 85.3147 96.5957 75.0926 83.7611 81.3262C70.9264 87.5598 73.416 112.611 73.416 112.611C73.416 112.611 62.0098 118.064 55.9336 127.256C46.5232 141.496 51.2612 162.997 80.5237 162.997C79.1287 156.859 78.6458 150.548 79.0904 144.269C79.8694 133.208 83.889 123.081 87.4412 112.704C91.9709 99.2908 90.9984 100.363 92.5826 95.4417C88.8106 91.8583 93.2993 87.5582 95.3247 91.0465C96.1824 92.4569 96.3874 92.5126 97.073 92.7275C100.786 93.8902 107.523 95.1875 111.177 93.9772C111.182 93.8821 111.493 85.3147 102.052 85.3147Z"
                                            fill="#47BDFF"
                                        ></path>
                                        <path
                                            d="M95.1347 117.035L91.8008 108.685C92.9129 110.175 94.2234 111.506 95.6958 112.642C95.4217 114.094 95.2344 115.561 95.1347 117.035Z"
                                            fill="#47BDFF"
                                        ></path>
                                        <path
                                            d="M139.226 258.535C139.442 259.59 139.34 260.684 138.934 261.679C138.528 262.675 137.835 263.527 136.944 264.131C136.053 264.733 135.004 265.058 133.928 265.064C132.853 265.069 131.8 264.756 130.902 264.164C130.004 263.572 129.303 262.725 128.886 261.735C128.468 260.743 128.355 259.65 128.559 258.594C128.763 257.538 129.275 256.566 130.031 255.801C130.787 255.037 131.754 254.514 132.807 254.297C133.507 254.15 134.229 254.143 134.932 254.278C135.634 254.412 136.304 254.683 136.901 255.078C137.497 255.472 138.01 255.98 138.409 256.574C138.809 257.167 139.086 257.833 139.226 258.535Z"
                                            fill="#47BDFF"
                                        ></path>
                                        <path
                                            d="M172.349 46.2072C172.349 50.0714 171.203 53.8487 169.056 57.0616C166.909 60.2745 163.858 62.7786 160.288 64.2574C156.718 65.7362 152.79 66.1231 149 65.3692C145.21 64.6154 141.729 62.7547 138.997 60.0223C136.264 57.2899 134.404 53.8086 133.65 50.0188C132.896 46.2289 133.283 42.3006 134.761 38.7306C136.24 35.1607 138.744 32.1093 141.957 29.9625C145.17 27.8158 148.948 26.6699 152.812 26.6699C157.992 26.673 162.96 28.7324 166.624 32.3957C170.286 36.0589 172.346 41.0266 172.349 46.2072Z"
                                            stroke="white"
                                            strokeWidth="1.9"
                                        ></path>
                                        <path
                                            d="M215.069 208.21L231.179 216.343C234.485 218.007 238.318 218.292 241.834 217.136C245.352 215.98 248.266 213.476 249.939 210.173L268.386 173.653"
                                            stroke="white"
                                            strokeWidth="1.9"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        ></path>
                                        <path
                                            d="M280.071 150.532L291.444 128.035C293.109 124.728 293.394 120.896 292.238 117.38C291.082 113.863 288.577 110.949 285.274 109.276L171.44 51.7656M106.913 126.608L139.939 61.1864"
                                            stroke="white"
                                            strokeWidth="1.9"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        ></path>
                                        <path
                                            d="M291.974 116.505L196.903 131.836L161.762 63.5879"
                                            stroke="white"
                                            strokeWidth="1.9"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        ></path>
                                        <path
                                            d="M144.812 213.413C137.719 221.211 129.129 227.501 119.553 231.906C109.977 236.312 99.6115 238.744 89.0751 239.058C78.5388 239.371 68.0474 237.559 58.2264 233.729C48.4056 229.9 39.4566 224.132 31.9133 216.77C24.3699 209.406 18.3867 200.601 14.3205 190.876C10.2543 181.151 8.18852 170.706 8.2463 160.165C8.30407 149.624 10.4843 139.203 14.6568 129.523C18.8293 119.843 24.9088 111.103 32.5324 103.823"
                                            stroke="white"
                                            strokeWidth="1.9"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        ></path>
                                        <path
                                            d="M95.1345 119.622C95.0469 117.26 95.2475 114.897 95.7314 112.583C99.5297 115.124 102.669 113.544 104.973 110.258C107.928 105.475 109.445 99.9421 109.343 94.3203"
                                            stroke="white"
                                            strokeWidth="1.9"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        ></path>
                                        <path
                                            d="M93.4794 156.734C96.1541 160.617 99.0244 164.36 102.08 167.951C106.99 165.893 111.514 163.012 115.455 159.433C118.376 156.783 120.996 153.819 123.268 150.595C117.892 143.565 112.909 136.241 108.344 128.659C106.121 124.961 102.784 122.061 98.8111 120.377C97.1071 119.715 95.2672 119.479 93.4515 119.691C92.1031 120.045 90.6906 120.076 89.3278 119.783C87.9651 119.489 86.6906 118.879 85.6074 118.002"
                                            stroke="white"
                                            strokeWidth="1.9"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        ></path>
                                        <path
                                            d="M256.545 149.286C260.782 149.442 269.196 149.411 274.337 149.317C270.762 157.814 265.709 165.611 259.413 172.345C257.824 172.095 254.458 171.752 252.932 171.659"
                                            stroke="white"
                                            strokeWidth="1.9"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        ></path>
                                        <path
                                            d="M306.679 149.441C308.455 149.691 309.597 150.097 309.733 150.657C310.596 154.196 292.073 162.793 283.745 169.508C281.323 171.486 278.614 173.084 275.709 174.245C273.591 174.633 271.416 174.592 269.313 174.12C272.402 172.779 275.296 171.03 277.92 168.92C286.097 162.327 302.973 154.147 306.679 149.441Z"
                                            stroke="white"
                                            strokeWidth="1.9"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        ></path>
                                        <path
                                            d="M274.372 149.317C283.595 149.13 299.985 148.476 306.68 149.442C302.972 154.116 286.089 162.319 277.888 168.917C275.265 171.027 272.374 172.777 269.288 174.12C266.327 173.653 262.869 172.874 259.41 172.344C265.719 165.614 270.785 157.817 274.372 149.317Z"
                                            stroke="white"
                                            strokeWidth="1.9"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        ></path>
                                        <path
                                            d="M210.614 247.255C210.333 251.929 210.614 258.815 210.988 265.888C202.365 262.621 194.389 257.852 187.431 251.804C187.618 250.215 187.742 248.626 187.773 247.13"
                                            stroke="white"
                                            strokeWidth="1.9"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        ></path>
                                        <path
                                            d="M212.016 298.17C211.829 299.974 211.489 301.106 210.925 301.286C207.45 302.393 198.144 284.058 191.138 275.985C189.062 273.631 187.36 270.973 186.09 268.101C185.635 265.997 185.602 263.822 185.997 261.705C187.453 264.742 189.308 267.571 191.512 270.118C198.4 278.067 207.217 294.618 212.016 298.17Z"
                                            stroke="white"
                                            strokeWidth="1.9"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        ></path>
                                        <path
                                            d="M210.987 265.857C211.517 275.081 212.763 291.441 212.015 298.165C207.217 294.613 198.377 278.054 191.515 270.121C189.313 267.573 187.458 264.744 186 261.708C186.374 258.717 186.997 255.225 187.402 251.767C194.366 257.825 202.352 262.596 210.987 265.857Z"
                                            stroke="white"
                                            strokeWidth="1.9"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        ></path>
                                        <path
                                            d="M116.635 183.001C102.364 175.99 93.7635 157.388 93.4797 156.733"
                                            stroke="white"
                                            strokeWidth="1.9"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        ></path>
                                        <path
                                            d="M104.016 167.078C108.444 172.313 113.99 177.948 119.315 180.854C122.017 182.386 125.169 182.925 128.227 182.381C141.232 179.757 165.837 166.957 172.256 160.102C183.88 147.687 182.926 138.229 181.915 122.429C181.505 116.01 180.699 116.164 179.734 119.149C178.299 123.603 176.489 134.401 174.998 138.655C174.859 139.084 174.572 139.448 174.188 139.684C173.04 140.34 172.317 138.905 171.728 136.879C171.103 134.729 170.657 131.866 170.076 130.155C169.058 127.139 166.98 124.391 166.649 133.24C166.455 138.444 166.442 147.406 160.791 150.69C156.392 153.196 151.809 155.363 147.08 157.171C142.189 159.086 137.065 160.344 131.843 160.91C129.008 161.061 125.206 157.825 121.592 152.809"
                                            stroke="white"
                                            strokeWidth="1.9"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        ></path>
                                        <path
                                            d="M176.399 133.457L181.634 110.429C181.751 109.925 181.661 109.396 181.387 108.958C181.111 108.519 180.673 108.208 180.17 108.092C179.666 107.977 179.137 108.066 178.699 108.341C178.259 108.615 177.949 109.053 177.833 109.557L171.663 136.697"
                                            stroke="white"
                                            strokeWidth="1.9"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        ></path>
                                        <path
                                            d="M185.976 196.866C190.837 194.778 194.231 193.284 194.231 193.284L186.402 212.167"
                                            stroke="white"
                                            strokeWidth="1.9"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        ></path>
                                        <path
                                            d="M119.315 180.851C113.428 185.559 107.257 189.9 100.837 193.848C90.3679 186.542 83.0982 175.499 80.5237 162.996"
                                            stroke="white"
                                            strokeWidth="1.9"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        ></path>
                                        <path
                                            d="M178.768 151.125L193.382 144.924C197.001 143.395 200.931 142.743 204.848 143.023L256.295 146.856C257.453 157.623 257.315 163.815 252.058 173.28L209.117 173.685"
                                            stroke="white"
                                            strokeWidth="1.9"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        ></path>
                                        <path
                                            d="M102.052 85.3147C102.052 85.3147 96.5957 75.0926 83.7611 81.3262C70.9264 87.5598 73.416 112.611 73.416 112.611C73.416 112.611 62.0098 118.064 55.9336 127.256C46.5232 141.496 51.2612 162.997 80.5237 162.997C79.1287 156.859 78.6458 150.548 79.0904 144.269C79.8694 133.208 83.889 123.081 87.4412 112.704C88.2514 110.305 90.1833 104.447 90.8377 102.015C91.4297 99.7418 91.7102 98.151 92.5826 95.4417C88.8106 91.8583 93.2993 87.5582 95.3247 91.0465C96.2185 92.5225 96.3924 92.4372 97.3714 92.7603C99.7954 93.5573 106.326 95.3663 111.185 93.9083C111.182 93.9132 111.493 85.3147 102.052 85.3147Z"
                                            stroke="white"
                                            strokeWidth="1.9"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        ></path>
                                        <path
                                            d="M40.5402 90.6723C29.4937 96.0007 19.1002 102.589 9.56714 110.305C9.29884 110.472 9.07503 110.701 8.9149 110.974C8.75477 111.246 8.66313 111.553 8.64781 111.869C8.63247 112.184 8.69396 112.499 8.82695 112.785C8.95993 113.072 9.16047 113.322 9.41134 113.514L16.5159 119.154C20.8209 113.508 26.6576 108.735 32.5223 103.805C28.0082 109.645 24.0548 115.897 20.7143 122.478L28.3583 128.533C28.605 128.729 28.8951 128.863 29.2042 128.923C29.5134 128.984 29.8323 128.969 30.1346 128.88C30.4368 128.792 30.7135 128.632 30.9412 128.414C31.1688 128.197 31.341 127.928 31.4432 127.63L43.4693 92.988C43.6097 92.5997 43.6244 92.1769 43.5114 91.7797C43.3983 91.3825 43.1631 91.0308 42.8392 90.7748C42.5151 90.5187 42.1187 90.3709 41.7061 90.3525C41.2936 90.3342 40.8856 90.446 40.5402 90.6723Z"
                                            stroke="white"
                                            strokeWidth="1.9"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        ></path>
                                        <path
                                            d="M251.808 31.2836C245.607 28.1971 238.659 32.5956 239.656 39.0736L236.758 41.7517L240.746 42.0633C244.267 48.0148 253.21 48.2658 256.139 42.406C257.035 40.356 257.081 38.0351 256.269 35.9508C255.457 33.8666 253.853 32.1885 251.808 31.2836Z"
                                            stroke="white"
                                            strokeWidth="1.9"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        ></path>
                                        <path
                                            d="M288.702 211.325C287.761 210.838 286.733 210.541 285.678 210.451C284.622 210.361 283.558 210.479 282.547 210.801C281.539 211.122 280.601 211.639 279.792 212.322C278.982 213.006 278.315 213.843 277.827 214.784C277.827 214.784 272.561 225.069 268.137 224.755L290.136 236.129C287.3 232.701 292.161 222.202 292.161 222.202C292.648 221.26 292.947 220.232 293.035 219.176C293.125 218.12 293.007 217.057 292.686 216.047C292.364 215.037 291.848 214.1 291.164 213.29C290.48 212.48 289.644 211.812 288.702 211.325Z"
                                            stroke="white"
                                            strokeWidth="1.9"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        ></path>
                                        <path
                                            d="M282.75 232.327C282.255 233.286 281.397 234.008 280.369 234.336C279.341 234.662 278.226 234.567 277.266 234.072C276.307 233.577 275.585 232.719 275.257 231.691C274.931 230.662 275.026 229.547 275.521 228.588"
                                            stroke="white"
                                            strokeWidth="1.9"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        ></path>
                                        <path
                                            d="M312.695 92.2949L306.868 112.362"
                                            stroke="white"
                                            strokeWidth="1.9"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        ></path>
                                        <path
                                            d="M319.8 105.226L299.733 99.3994"
                                            stroke="white"
                                            strokeWidth="1.9"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        ></path>
                                        <path
                                            d="M186.434 236.348C195.285 237.804 204.301 237.97 213.2 236.84"
                                            stroke="white"
                                            strokeWidth="1.9"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        ></path>
                                        <path
                                            d="M244.393 146.045C245.797 155.393 244.285 164.946 240.062 173.403"
                                            stroke="white"
                                            strokeWidth="1.9"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        ></path>
                                        <path
                                            d="M139.226 258.535C139.441 259.59 139.34 260.684 138.934 261.679C138.528 262.675 137.835 263.527 136.944 264.131C136.053 264.733 135.003 265.058 133.928 265.064C132.852 265.069 131.799 264.756 130.902 264.164C130.004 263.572 129.303 262.725 128.885 261.735C128.468 260.743 128.355 259.65 128.558 258.594C128.762 257.538 129.275 256.566 130.031 255.801C130.787 255.037 131.753 254.514 132.807 254.297C133.507 254.15 134.229 254.143 134.932 254.278C135.634 254.412 136.303 254.683 136.9 255.078C137.497 255.472 138.01 255.98 138.409 256.574C138.808 257.167 139.086 257.833 139.226 258.535Z"
                                            stroke="white"
                                            strokeWidth="1.9"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        ></path>
                                        <path
                                            d="M136.764 241.491C138.853 239.537 141.475 238.247 144.297 237.784C147.12 237.32 150.016 237.704 152.62 238.886C155.225 240.069 157.42 241.997 158.928 244.428C160.437 246.857 161.19 249.681 161.095 252.539C160.999 255.398 160.057 258.163 158.39 260.487C156.722 262.811 154.402 264.587 151.725 265.592C149.047 266.597 146.131 266.786 143.346 266.135C140.562 265.484 138.032 264.021 136.079 261.932C133.461 259.129 132.062 255.403 132.191 251.569C132.319 247.736 133.964 244.111 136.764 241.491Z"
                                            stroke="white"
                                            strokeWidth="1.9"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        ></path>
                                        <path
                                            d="M100.837 193.848C100.837 193.848 112.989 228.467 158.237 208.898L185.976 196.866C186.32 209.956 187.045 232.111 185.943 246.631C194.392 249.204 203.402 249.291 211.899 246.881C215.296 223.821 217.921 187.421 209.126 173.684C197.731 155.885 162.697 167.296 162.697 167.296"
                                            stroke="white"
                                            strokeWidth="1.9"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        ></path>
                                        <path
                                            d="M95.7317 112.583C94.2303 111.513 92.9112 110.208 91.8252 108.718L95.1347 117.036"
                                            stroke="white"
                                            strokeWidth="1.9"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        ></path>
                                    </svg>
                                </div>
                            </div>
                            <form ref={form} action="" className="rounded-3xl bg-white px-4 py-12 dark:bg-[#101626] lg:w-2/3 lg:px-8" onSubmit={sendEmail}>
                                <div className="grid gap-10 sm:grid-cols-2">
                                    <div className="relative">
                                        <input
                                            type="text"
                                            name="from_name"
                                            className="w-full rounded-2xl border-2 border-gray/20 bg-transparent p-4 font-bold outline-none transition focus:border-[#1759D4] ltr:pr-12 rtl:pl-12"
                                        />
                                        <label className="absolute -top-3 bg-white px-2 font-bold text-gray-400 ltr:left-6 rtl:right-6 dark:bg-[#101626]">
                                            Full Name
                                        </label>
                                        <svg
                                            width="20"
                                            height="22"
                                            viewBox="0 0 20 22"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="absolute top-1/2 -translate-y-1/2 ltr:right-4 rtl:left-4 dark:text-white"
                                        >
                                            <path
                                                d="M5.42855 5.57875C5.42855 8.10348 7.47525 10.1502 9.99998 10.1502C12.5247 10.1502 14.5714 8.10348 14.5714 5.57875C14.5714 3.05402 12.5247 1.00732 9.99998 1.00732"
                                                stroke="currentColor"
                                                strokeWidth="1.8"
                                                strokeLinecap="round"
                                            />
                                            <path
                                                d="M2 16.9328C2 15.9495 2.61812 15.0724 3.5441 14.7417V14.7417C7.71891 13.2507 12.2811 13.2507 16.4559 14.7417V14.7417C17.3819 15.0724 18 15.9495 18 16.9328V18.7014C18 19.9185 16.922 20.8535 15.7172 20.6813L13.8184 20.4101C11.2856 20.0483 8.71435 20.0483 6.18162 20.4101L4.28284 20.6813C3.07798 20.8535 2 19.9185 2 18.7014V16.9328Z"
                                                stroke="currentColor"
                                                strokeWidth="1.8"
                                            />
                                        </svg>
                                    </div>
                                    <div className="relative">
                                        <input
                                            type="email"
                                            name="from_email"
                                            className="w-full rounded-2xl border-2 border-gray/20 bg-transparent p-4 font-bold outline-none transition focus:border-[#1759D4] ltr:pr-12 rtl:pl-12"
                                        />
                                        <label className="absolute -top-3 bg-white px-2 font-bold text-gray-400 ltr:left-6 rtl:right-6 dark:bg-[#101626]">
                                            Email Address
                                        </label>
                                        <svg
                                            width="22"
                                            height="21"
                                            viewBox="0 0 22 21"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="absolute top-1/2 -translate-y-1/2 ltr:right-4 rtl:left-4 dark:text-white"
                                        >
                                            <path
                                                d="M1 8.00732V7.00732C1 4.2459 3.23858 2.00732 6 2.00732H16C18.7614 2.00732 21 4.2459 21 7.00732V13.0073C21 15.7687 18.7614 18.0073 16 18.0073H6C3.23858 18.0073 1 15.7687 1 13.0073V12.0073"
                                                stroke="currentColor"
                                                strokeWidth="1.8"
                                                strokeLinecap="round"
                                            />
                                            <path
                                                d="M5 7.00732L9.8 10.6073C10.5111 11.1407 11.4889 11.1407 12.2 10.6073L17 7.00732"
                                                stroke="currentColor"
                                                strokeWidth="1.8"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                        </svg>
                                    </div>
                                    <div className="relative">
                                        <input
                                            type="text"
                                            name="from_mobile"
                                            className="w-full rounded-2xl border-2 border-gray/20 bg-transparent p-4 font-bold outline-none transition focus:border-[#1759D4] ltr:pr-12 rtl:pl-12"
                                        />
                                        <label className="absolute -top-3 bg-white px-2 font-bold text-gray-400 ltr:left-6 rtl:right-6 dark:bg-[#101626]">
                                            Mobile Number
                                        </label>
                                        <svg
                                            width="22"
                                            height="22"
                                            viewBox="0 0 22 22"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="absolute top-1/2 -translate-y-1/2 ltr:right-4 rtl:left-4 dark:text-white"
                                        >
                                            <path
                                                d="M6.45241 1.40806C5.45292 0.783702 4.14202 0.887138 3.2983 1.73086L1.86856 3.1606C-0.302899 5.33207 1.73747 10.8931 6.42586 15.5815C11.1142 20.2699 16.6753 22.3102 18.8467 20.1388L20.2765 18.709C21.2635 17.722 21.2374 16.0956 20.2182 15.0764L18.0036 12.8619C16.9844 11.8426 15.358 11.8165 14.371 12.8036L14.0639 13.1107C13.531 13.6436 12.6713 13.6957 12.0713 13.2005C11.4925 12.7229 10.9159 12.208 10.3576 11.6497C9.79933 11.0914 9.28441 10.5149 8.80678 9.93607C8.31161 9.33601 8.36374 8.47631 8.89666 7.9434L9.20375 7.63631C9.98187 6.85819 10.1303 5.68271 9.65898 4.72062"
                                                stroke="currentColor"
                                                strokeWidth="1.8"
                                                strokeLinecap="round"
                                            />
                                        </svg>
                                    </div>
                                    <div className="relative">
                                        <input
                                            type="text"
                                            name="from_city"
                                            className="w-full rounded-2xl border-2 border-gray/20 bg-transparent p-4 font-bold outline-none transition focus:border-[#1759D4] ltr:pr-12 rtl:pl-12"
                                        />
                                        <label className="absolute -top-3 bg-white px-2 font-bold text-gray-400 ltr:left-6 rtl:right-6 dark:bg-[#101626]">
                                            City
                                        </label>
                                        <svg
                                            width="20"
                                            height="22"
                                            viewBox="0 0 20 22"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="absolute top-1/2 -translate-y-1/2 ltr:right-4 rtl:left-4 dark:text-white"
                                        >
                                            <path
                                                d="M5.89416 2.31259C7.20149 1.48625 8.75475 1.00732 10.4211 1.00732C15.0719 1.00732 18.8421 4.73828 18.8421 9.34066C18.8421 15.0541 12.1053 21.0073 10.4211 21.0073C8.73684 21.0073 2 15.0541 2 9.34066C2 7.87581 2.38193 6.49924 3.05263 5.30315"
                                                stroke="currentColor"
                                                strokeWidth="1.8"
                                                strokeLinecap="round"
                                            />
                                            <path
                                                d="M13.4571 9.77392C13.5365 9.49702 13.579 9.20456 13.579 8.90216C13.579 7.15811 12.1651 5.74427 10.4211 5.74427C8.67702 5.74427 7.26318 7.15811 7.26318 8.90216C7.26318 10.6462 8.67702 12.0601 10.4211 12.0601C10.6633 12.0601 10.8991 12.0328 11.1256 11.9812"
                                                stroke="currentColor"
                                                strokeWidth="1.8"
                                                strokeLinecap="round"
                                            />
                                        </svg>
                                    </div>
                                </div>
                                <div className="relative mt-10">
                                    <input
                                        type="text"
                                        name="message"
                                        className="w-full rounded-2xl border-2 border-gray/20 bg-transparent p-4 font-bold outline-none transition focus:border-[#1759D4] ltr:pr-12 rtl:pl-12"
                                    />
                                    <label className="absolute -top-3 bg-white px-2 font-bold text-gray-400 ltr:left-6 rtl:right-6 dark:bg-[#101626]">
                                        Message
                                    </label>
                                    <svg
                                        width="22"
                                        height="22"
                                        viewBox="0 0 22 22"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="absolute top-1/2 -translate-y-1/2 ltr:right-4 rtl:left-4 dark:text-white"
                                    >
                                        <path
                                            d="M1 11.467V18.9267C1 19.7652 1.96993 20.2314 2.6247 19.7076L5.45217 17.4456C5.8068 17.1619 6.24742 17.0073 6.70156 17.0073H16C18.7614 17.0073 21 14.7687 21 12.0073V6.00732C21 3.2459 18.7614 1.00732 16 1.00732H6C3.23858 1.00732 1 3.2459 1 6.00732V7.62225"
                                            stroke="currentColor"
                                            strokeWidth="1.8"
                                            strokeLinecap="round"
                                        />
                                        <circle cx="6.05005" cy="9.05713" r="1.25" fill="currentColor" />
                                        <circle cx="11.05" cy="9.05713" r="1.25" fill="currentColor" />
                                        <circle cx="16.05" cy="9.05713" r="1.25" fill="currentColor" />
                                    </svg>
                                </div>
                                <div className="mt-10 text-center ltr:lg:text-right rtl:lg:text-left">
                                    <button
                                        type="submit"
                                        className="btn bg-gray px-12 capitalize text-white dark:bg-white dark:text-black dark:hover:bg-[#1759D4]"
                                    >
                                        Submit
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </section>

                <OfficeSwiper />
                <Testimonial />
                <Massage />
            </>
            <ToastContainer />
        </>
    );
};

export default Contactus;

{
    /* <section className="py-12 flex justify-end dark:bg-gray-dark lg:py-24"  style={{ backgroundImage: "url('Contact-tut.png')", backgroundSize: "cover" }}>
     
     <div className='w-[50%]'>
     
    <form action="" style={{width :'auto'}} className="  rounded-3xl bg-transparent px-4 py-12 dark:bg-[#101626] lg:w-2/3 lg:px-8">
                    <div className="grid gap-10 sm:grid-cols-2">
                        <div className="relative">
                            <input
                                type="text"
                                name="name"
                                className="w-full bg-white rounded-2xl border-2 border-gray/20 bg-transparent p-4 font-bold outline-none transition focus:border-secondary ltr:pr-12 rtl:pl-12"
                            />
                            <label className="bg-blue-300 rounded-lg  absolute -top-3  px-2 font-bold ltr:left-6 rtl:right-6 dark:bg-[#101626] dark:text-white">
                                Full Name
                            </label>
                            <svg
                                width="20"
                                height="22"
                                viewBox="0 0 20 22"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                className="absolute top-1/2 -translate-y-1/2 ltr:right-4 rtl:left-4 dark:text-white"
                            >
                                <path
                                    d="M5.42855 5.57875C5.42855 8.10348 7.47525 10.1502 9.99998 10.1502C12.5247 10.1502 14.5714 8.10348 14.5714 5.57875C14.5714 3.05402 12.5247 1.00732 9.99998 1.00732"
                                    stroke="currentColor"
                                    strokeWidth="1.8"
                                    strokeLinecap="round"
                                />
                                <path
                                    d="M2 16.9328C2 15.9495 2.61812 15.0724 3.5441 14.7417V14.7417C7.71891 13.2507 12.2811 13.2507 16.4559 14.7417V14.7417C17.3819 15.0724 18 15.9495 18 16.9328V18.7014C18 19.9185 16.922 20.8535 15.7172 20.6813L13.8184 20.4101C11.2856 20.0483 8.71435 20.0483 6.18162 20.4101L4.28284 20.6813C3.07798 20.8535 2 19.9185 2 18.7014V16.9328Z"
                                    stroke="currentColor"
                                    strokeWidth="1.8"
                                />
                            </svg>
                        </div>
                        <div className="relative">
                            <input
                                type="email"
                                name="email"
                                className="w-full bg-white rounded-2xl border-2 border-gray/20 bg-transparent p-4 font-bold outline-none transition focus:border-secondary ltr:pr-12 rtl:pl-12"
                            />
                            <label className="bg-blue-300 rounded-lg  absolute -top-3  px-2 font-bold ltr:left-6 rtl:right-6 dark:bg-[#101626] dark:text-white">
                                Email Address
                            </label>
                            <svg
                                width="22"
                                height="21"
                                viewBox="0 0 22 21"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                className="absolute top-1/2 -translate-y-1/2 ltr:right-4 rtl:left-4 dark:text-white"
                            >
                                <path
                                    d="M1 8.00732V7.00732C1 4.2459 3.23858 2.00732 6 2.00732H16C18.7614 2.00732 21 4.2459 21 7.00732V13.0073C21 15.7687 18.7614 18.0073 16 18.0073H6C3.23858 18.0073 1 15.7687 1 13.0073V12.0073"
                                    stroke="currentColor"
                                    strokeWidth="1.8"
                                    strokeLinecap="round"
                                />
                                <path
                                    d="M5 7.00732L9.8 10.6073C10.5111 11.1407 11.4889 11.1407 12.2 10.6073L17 7.00732"
                                    stroke="currentColor"
                                    strokeWidth="1.8"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                        </div>
                        <div className="relative">
                            <input
                                type="text"
                                name="mobile"
                                className="w-full bg-white rounded-2xl border-2 border-gray/20 bg-transparent p-4 font-bold outline-none transition focus:border-secondary ltr:pr-12 rtl:pl-12"
                            />
                            <label className="bg-blue-300 rounded-lg  absolute -top-3  px-2 font-bold ltr:left-6 rtl:right-6 dark:bg-[#101626] dark:text-white">
                                Mobile Number
                            </label>
                            <svg
                                width="22"
                                height="22"
                                viewBox="0 0 22 22"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                className="absolute top-1/2 -translate-y-1/2 ltr:right-4 rtl:left-4 dark:text-white"
                            >
                                <path
                                    d="M6.45241 1.40806C5.45292 0.783702 4.14202 0.887138 3.2983 1.73086L1.86856 3.1606C-0.302899 5.33207 1.73747 10.8931 6.42586 15.5815C11.1142 20.2699 16.6753 22.3102 18.8467 20.1388L20.2765 18.709C21.2635 17.722 21.2374 16.0956 20.2182 15.0764L18.0036 12.8619C16.9844 11.8426 15.358 11.8165 14.371 12.8036L14.0639 13.1107C13.531 13.6436 12.6713 13.6957 12.0713 13.2005C11.4925 12.7229 10.9159 12.208 10.3576 11.6497C9.79933 11.0914 9.28441 10.5149 8.80678 9.93607C8.31161 9.33601 8.36374 8.47631 8.89666 7.9434L9.20375 7.63631C9.98187 6.85819 10.1303 5.68271 9.65898 4.72062"
                                    stroke="currentColor"
                                    strokeWidth="1.8"
                                    strokeLinecap="round"
                                />
                            </svg>
                        </div>
                        <div className="relative">
                            <input
                                type="text"
                                name="city"
                                className="w-full bg-white rounded-2xl border-2 border-gray/20 bg-transparent p-4 font-bold outline-none transition focus:border-secondary ltr:pr-12 rtl:pl-12"
                            />
                            <label className="bg-blue-300 rounded-lg  absolute -top-3  px-2 font-bold ltr:left-6 rtl:right-6 dark:bg-[#101626] dark:text-white">
                                City
                            </label>
                            <svg
                                width="20"
                                height="22"
                                viewBox="0 0 20 22"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                className="absolute top-1/2 -translate-y-1/2 ltr:right-4 rtl:left-4 dark:text-white"
                            >
                                <path
                                    d="M5.89416 2.31259C7.20149 1.48625 8.75475 1.00732 10.4211 1.00732C15.0719 1.00732 18.8421 4.73828 18.8421 9.34066C18.8421 15.0541 12.1053 21.0073 10.4211 21.0073C8.73684 21.0073 2 15.0541 2 9.34066C2 7.87581 2.38193 6.49924 3.05263 5.30315"
                                    stroke="currentColor"
                                    strokeWidth="1.8"
                                    strokeLinecap="round"
                                />
                                <path
                                    d="M13.4571 9.77392C13.5365 9.49702 13.579 9.20456 13.579 8.90216C13.579 7.15811 12.1651 5.74427 10.4211 5.74427C8.67702 5.74427 7.26318 7.15811 7.26318 8.90216C7.26318 10.6462 8.67702 12.0601 10.4211 12.0601C10.6633 12.0601 10.8991 12.0328 11.1256 11.9812"
                                    stroke="currentColor"
                                    strokeWidth="1.8"
                                    strokeLinecap="round"
                                />
                            </svg>
                        </div>
                    </div>
                    <div className="relative mt-10 ">
                        <input
                            type="text"
                            name="Decease"
                            className="w-full bg-white rounded-2xl border-2 border-gray/20 bg-transparent p-4 font-bold outline-none transition focus:border-secondary ltr:pr-12 rtl:pl-12"
                        />
                        <label className="bg-blue-300 rounded-lg  absolute -top-3  px-2 font-bold ltr:left-6 rtl:right-6 dark:bg-[#101626] dark:text-white">
                            Message
                        </label>
                        <svg
                            width="22"
                            height="22"
                            viewBox="0 0 22 22"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="absolute top-1/2 -translate-y-1/2 ltr:right-4 rtl:left-4 dark:text-white"
                        >
                            <path
                                d="M1 11.467V18.9267C1 19.7652 1.96993 20.2314 2.6247 19.7076L5.45217 17.4456C5.8068 17.1619 6.24742 17.0073 6.70156 17.0073H16C18.7614 17.0073 21 14.7687 21 12.0073V6.00732C21 3.2459 18.7614 1.00732 16 1.00732H6C3.23858 1.00732 1 3.2459 1 6.00732V7.62225"
                                stroke="currentColor"
                                strokeWidth="1.8"
                                strokeLinecap="round"
                            />
                            <circle cx="6.05005" cy="9.05713" r="1.25" fill="currentColor" />
                            <circle cx="11.05" cy="9.05713" r="1.25" fill="currentColor" />
                            <circle cx="16.05" cy="9.05713" r="1.25" fill="currentColor" />
                        </svg>
                    </div>
                    <div className="mt-10 text-center ltr:lg:text-right rtl:lg:text-left">
                        <button
                            type="button"
                            className="btn bg-gray px-16 py-5 capitalize text-white dark:bg-white dark:text-black dark:hover:bg-secondary"
                        >
                            Book now
                        </button>
                    </div>
                </form>
                </div>
        
    </section> */
}

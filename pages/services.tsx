import CounterComponent from '../components/CounterComponent';
import Testimonial from '../components/Testimonial';
import ProjectSlider from '../components/ProjectSlider';
import Modal from '../components/Modal';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import Link from 'next/link';
import Head from 'next/head';
import { useRef } from 'react';
import { useSelector } from 'react-redux';
import { IRootState } from '../store';
import Massage from '../components/Message';

import Grids from '../components/Grids';
import { Bolt } from '@mui/icons-material';

const Services = () => {
    const dialog: any = useRef();
    const isRtl = useSelector((state: IRootState) => state.themeConfig.direction) === 'rtl' ? true : false;
    const cards = [
        {
            imageUrl: 'testing.png',
            title: 'Analysis & Planning',
            text: 'The very first step that we follow while developing apps or working on any project, begins with analysis.',
        },
        {
            imageUrl: 'section-4-2.png',
            title: 'Design',
            text: 'Designing helps us understand the engagement of users if the product is user-friendly, intuitive, and reciprocal.',
        },
        {
            imageUrl: 'three.png',
            title: 'Development',
            text: 'This is the main part of our process beca-use the product that we deliver depends on the efforts made during this stage.',
        },
        {
            imageUrl: '14.png',
            title: 'Testing',
            text: 'Testing is obligatory to an app’s future success; it surrounds a significant section of our overall mobile app development process.',
        },
    ];
    const users = [
        { name: 'Ankit Kushwaha', avatar: 'AnkitKushwaha.png' },
        { name: 'Keshav Sharma', avatar: 'Keshav Sharma.jpg' },
        { name: 'Bhumika Malviya', avatar: 'Bhumika Malviya.jpg' },
        { name: 'Bhupendra Barfa', avatar: 'Bhupendra Barfa.jpg' },
        { name: 'Sumit Andariya', avatar: 'Sumit Andariya.jpg' },
        { name: 'Shubham Pandey', avatar: 'Shubham Pandey.jpg' },
        { name: 'Sankalp Nagale', avatar: 'Sankalp Nagale.jpg' },
        { name: 'Ritu Ranabhat', avatar: 'Ritu Ranabhat.jpg' },
        { name: 'Amit Yadav', avatar: 'Amit Yadav.jpg' },
        { name: 'Anushree Joshi', avatar: 'Anushree.png' },
        { name: 'Shivam Gupta', avatar: 'Shivam.png' },
        { name: 'Sonu Sharma', avatar: 'SonuSharma.png' },
    ];
    return (
        <div>
            <Head>
                <title>Services... | Plurk – Tailwind CSS Multipurpose Landing Templates</title>
            </Head>
            <div
                className=" mt-[82px] h-screen  h-full bg-cover bg-bottom bg-no-repeat max-md:pt-[106px] lg:pt-[106px]"
                style={{ backgroundImage: "url('Services.jpg')" }}
            >
                <div className="relative">
                    <div className="container flex justify-center ">
                        <div className="items-center justify-between py-10 md:flex   md:h-[400px] md:py-0">
                            <div className="heading relative mb-0 text-center  ltr:md:text-left rtl:md:text-right">
                                
                                <br /><br />

                                <h6 className="text-center  text-xl text-white" style={{ color: 'white', fontSize: 40, fontFamily: 'Philosopher' }}>
                                    Services
                                </h6>
                                <br />
                               
                                <h4 className=" text-x md:line-height-5 lg:line-height-6 text-center font-mulish !text-white" style={{ color: 'white', fontSize: 50, fontFamily: 'Philosopher' }}>
                                    Empowering Transformation{' '}
                                </h4>
                                <br />
                                <br />
                                <h4
                                    className="md:line-height-5 lg:line-height-6 text-center !text-white sm:text-5xl"
                                    style={{ fontSize: '56px', lineHeight: '3rem', fontFamily: 'Philosopher' }}
                                >
                                    Through High Impact Services
                                </h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <br />
            {/* <section className="py-14 lg:py-[100px]">
                <CounterComponent />
            </section> */}

            <ProjectSlider title1="Our Projects" title2="Some of our finest work." />
            <br />
            <section
                className="from-white-[55%]  dark:from-white-[5] bg-gradient-to-b to-transparent bg-cover bg-no-repeat py-14 pt-[150px] pb-[100px]"
                style={{ backgroundImage: "url('bgsetion3-ser.png')" }}
            >
                <div className="container">
                    <div className="grid items-center gap-5 md:gap-10 lg:grid-cols-2">
                        <div className="heading text-center ltr:lg:text-left rtl:lg:text-right">
                            <h6 style={{ color: 'black',fontSize:'35px' }}>How We Do It?</h6><br/><br/>
                            <h4 style={{ color: '#1759D4' ,textTransform:'uppercase',fontSize:'34px'}}>We make your spending stress-free for you to have the perfect control.</h4><br/>
                            <p className="pt-5 text-xl font-semibold" style={{ color: 'black' }}>
                                Find out everything you need to know and more about how we create our business process models.
                            </p>
                            </div>
                    </div>
                </div>
            </section>
           
            {/* new section  */}
            <section className=" py-10" style={{ background: 'linear-gradient(to right, #737DFE, #FFCAC9)' }}><br/>
                <div style={{ margin: 'auto' }} className="mx-auto grid  max-w-6xl  grid-cols-1 gap-4 sm:grid-cols-2  md:mx-0 md:grid-cols-4 ">
                    {cards.map((card, index) => (
                        <div
                            key={index}
                            className="mx-4 flex h-80 w-64 flex-col items-center justify-center  rounded-lg  transition duration-300 hover:shadow-lg"
                            style={{ margin: 'auto' }}
                        >
                            <div className="imgBox relative h-44 w-44 overflow-hidden rounded-full shadow-lg ">
                                <img src={card.imageUrl} alt={card.title} className="h-full w-full object-cover" />
                                <div className="img-blur absolute top-0 left-0 flex h-full w-full items-center justify-center opacity-0 backdrop-blur-3xl transition duration-500">
                                    {/* <a href="#" className="text-white text-lg font-semibold">Explore &gt;</a> */}
                                </div>
                            </div><br/>
                            <h2 className="title mt-4 text-lg font-bold text-white" style={{  textTransform: 'uppercase', marginBottom:'2px'}}>{card.title}</h2>
                            <p className="text text-center font-semibold text-md text-black">{card.text}</p>
                        </div>
                    ))}
                </div><br/>
            </section>
         

            {/* end new section  */}

            <Modal
                ref={dialog}
                width="960"
                closeByOverlay={true}
                closeBtn={true}
                closeStyle="floating"
                contentClass="pt-8 px-0 pb-0 !bg-transparent"
                closeBtnClass="!top-0 ltr:!right-0 rtl:!right-auto rtl:!left-0 !text-white !text-3xl"
                modal={false}
            >
                <div className="dark:bg-gray-dark bg-black !p-4">
                    <div className="relative">
                        <div className="aspect-video">
                            <iframe
                                className="absolute top-0 left-0 h-full w-full"
                                src="https://www.youtube.com/embed/D0UnqGm_miA"
                                frameBorder="0"
                                allowFullScreen
                                allow="autoplay"
                            ></iframe>
                        </div>
                    </div>
                </div>
            </Modal>

            <section className="our-teambg- white/50 py-14 dark:bg-transparent lg:py-[70px]" style={{ background: '#1759D4' }}>
                <div className="container">
                    <div className="heading text-center">
                        <h4>What Technologies Do We Use?</h4>
                    </div>
                    <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-6 md:grid-cols-4 lg:grid-cols-6">
                        <div data-aos="fade-up" data-aos-duration="1000">
                            <div className="group flex items-center justify-center rounded-[32px] bg-white  py-[50px] px-[50px] transition duration-500 hover:scale-105 hover:bg-[#DF2E31] hover:drop-shadow-[0_5px_13px_rgba(60,72,88,0.20)]">
                                <svg
                                    width="60"
                                    height="60"
                                    viewBox="0 0 60 60"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-[60px] w-[60px] transition duration-500 group-hover:hidden"
                                >
                                    <path d="M2 9.94476L29.9114 0L58.5745 9.76794L53.9335 46.6961L29.9114 60L6.26521 46.8729L2 9.94476Z" fill="currentColor" />
                                    <path
                                        d="M29.9555 7.00586L12.5635 45.702L19.0606 45.5915L22.5524 36.8621H38.1545L41.9778 45.702L48.1876 45.8125L29.9555 7.00586ZM29.9999 19.4037L35.8782 31.6908H24.8284L29.9999 19.4037Z"
                                        fill="white"
                                    />
                                </svg>
                                <svg
                                    width="60"
                                    height="60"
                                    viewBox="0 0 60 60"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="hidden h-[60px] w-[60px] transition duration-500 group-hover:block"
                                >
                                    <path d="M2 9.94476L29.9114 0L58.5745 9.76794L53.9335 46.6961L29.9114 60L6.26521 46.8729L2 9.94476Z" fill="white" />
                                    <path
                                        d="M29.9555 7.00586L12.5635 45.702L19.0606 45.5915L22.5524 36.8621H38.1545L41.9778 45.702L48.1876 45.8125L29.9555 7.00586ZM29.9999 19.4037L35.8782 31.6908H24.8284L29.9999 19.4037Z"
                                        fill="#DF2E31"
                                    />
                                </svg>
                            </div>
                        </div>

                        {/* <div data-aos="fade-up" data-aos-duration="1000">
                            <div className="group flex items-center justify-center rounded-[32px] bg-white  py-[50px] px-[50px] transition duration-500 hover:scale-105 hover:bg-[#b3883f] hover:drop-shadow-[0_5px_13px_rgba(60,72,88,0.20)]">

                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 364 502" id="IconChangeColor" height="60" width="60">
                    <path d="M277.74 312.9c9.8-6.7 23.4-12.5 23.4-12.5s-38.7 7-77.2 10.2c-47.1 3.9-97.7 4.7-123.1 1.3-60.1-8 33-30.1 33-30.1s-36.1-2.4-80.6 19c-52.5 25.4 130 37 224.5 12.1zm-85.4-32.1c-19-42.7-83.1-80.2 0-145.8C296 53.2 242.84 0 242.84 0c21.5 84.5-75.6 110.1-110.7 162.6-23.9 35.9 11.7 74.4 60.2 118.2zm114.6-176.2c.1 0-175.2 43.8-91.5 140.2 24.7 28.4-6.5 54-6.5 54s62.7-32.4 33.9-72.9c-26.9-37.8-47.5-56.6 64.1-121.3zm-6.1 270.5a12.19 12.19 0 0 1-2 2.6c128.3-33.7 81.1-118.9 19.8-97.3a17.33 17.33 0 0 0-8.2 6.3 70.45 70.45 0 0 1 11-3c31-6.5 75.5 41.5-20.6 91.4zM348 437.4s14.5 11.9-15.9 21.2c-57.9 17.5-240.8 22.8-291.6.7-18.3-7.9 16-19 26.8-21.3 11.2-2.4 17.7-2 17.7-2-20.3-14.3-131.3 28.1-56.4 40.2C232.84 509.4 401 461.3 348 437.4zM124.44 396c-78.7 22 47.9 67.4 148.1 24.5a185.89 185.89 0 0 1-28.2-13.8c-44.7 8.5-65.4 9.1-106 4.5-33.5-3.8-13.9-15.2-13.9-15.2zm179.8 97.2c-78.7 14.8-175.8 13.1-233.3 3.6 0-.1 11.8 9.7 72.4 13.6 92.2 5.9 233.8-3.3 237.1-46.9 0 0-6.4 16.5-76.2 29.7zM260.64 353c-59.2 11.4-93.5 11.1-136.8 6.6-33.5-3.5-11.6-19.7-11.6-19.7-86.8 28.8 48.2 61.4 169.5 25.9a60.37 60.37 0 0 1-21.1-12.8z" id="mainIconPathAttribute" fill="#ffffff"></path>
                </svg>
                            </div>
                        </div>
                        
                        <div data-aos="fade-up" data-aos-duration="1000">
                            <div className="group flex items-center justify-center rounded-[32px] bg-white  py-[50px] px-[50px] transition duration-500 hover:scale-105 hover:bg-[#6DB33F] hover:drop-shadow-[0_5px_13px_rgba(60,72,88,0.20)]">

                                <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" id="IconChangeColor" height="60" width="60">
                                    <path d="M21.8537 1.4158a10.4504 10.4504 0 0 1-1.284 2.2471A11.9666 11.9666 0 1 0 3.8518 20.7757l.4445.3951a11.9543 11.9543 0 0 0 19.6316-8.2971c.3457-3.0126-.568-6.8649-2.0743-11.458zM5.5805 20.8745a1.0174 1.0174 0 1 1-.1482-1.4323 1.0396 1.0396 0 0 1 .1482 1.4323zm16.1991-3.5806c-2.9385 3.9263-9.2601 2.5928-13.2852 2.7904 0 0-.7161.0494-1.4323.1481 0 0 .2717-.1234.6174-.2469 2.8398-.9877 4.1732-1.1853 5.9018-2.0743 3.2349-1.6545 6.4698-5.2844 7.1118-9.0379-1.2347 3.6053-4.9881 6.7167-8.3959 7.9761-2.3459.8643-6.5685 1.7039-6.5685 1.7039l-.1729-.0988c-2.8645-1.4076-2.9632-7.6304 2.2718-9.6306 2.2966-.889 4.4696-.395 6.9637-.9877 2.6422-.6174 5.7043-2.5929 6.939-5.1857 1.3828 4.1732 3.062 10.643.0493 14.6434z" id="mainIconPathAttribute" fill="white"></path>
                                </svg>
                            </div>
                        </div>
                         */}


                        <div data-aos="fade-up" data-aos-duration="1000">
                            <div className="group flex items-center justify-center rounded-[32px] bg-white  py-[50px] px-[50px] transition duration-500 hover:scale-105 hover:bg-black hover:drop-shadow-[0_5px_13px_rgba(60,72,88,0.20)]">
                                <svg
                                    width="60"
                                    height="60"
                                    viewBox="0 0 60 60"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-[60px] w-[60px] transition duration-500 group-hover:hidden"
                                >
                                    <path
                                        d="M28.3123 4.299C28.2018 4.30905 27.8499 4.34423 27.5332 4.36937C20.2297 5.02784 13.3887 8.96861 9.05585 15.0255C6.64313 18.3933 5.1 22.2134 4.51692 26.2597C4.31084 27.6722 4.28571 28.0894 4.28571 30.0045C4.28571 31.9196 4.31084 32.3368 4.51692 33.7492C5.91429 43.4051 12.7855 51.5179 22.1046 54.5237C23.7734 55.0615 25.5327 55.4285 27.5332 55.6496C28.3123 55.7351 31.6801 55.7351 32.4592 55.6496C35.9124 55.2676 38.8378 54.4131 41.723 52.9404C42.1654 52.7142 42.2508 52.6539 42.1905 52.6036C42.1503 52.5734 40.2653 50.0451 38.0034 46.989L33.8917 41.4347L28.7396 33.8095C25.9046 29.6174 23.5724 26.1894 23.5522 26.1894C23.5321 26.1843 23.512 29.5722 23.502 33.709C23.4869 40.9522 23.4819 41.2437 23.3914 41.4146C23.2607 41.6609 23.1602 41.7614 22.9491 41.872C22.7882 41.9524 22.6475 41.9675 21.8885 41.9675H21.0189L20.7877 41.8218C20.6369 41.7263 20.5263 41.6006 20.4509 41.4548L20.3453 41.2286L20.3554 31.1505L20.3705 21.0674L20.5263 20.8713C20.6067 20.7658 20.7776 20.6301 20.8983 20.5647C21.1043 20.4642 21.1848 20.4541 22.0544 20.4541C23.0798 20.4541 23.2507 20.4944 23.5171 20.7859C23.5925 20.8663 26.3822 25.0685 29.7198 30.1301C33.0573 35.1918 37.6214 42.1032 39.8632 45.4961L43.9347 51.6636L44.1408 51.5279C45.9654 50.3417 47.8956 48.6528 49.4236 46.8935C52.6757 43.1588 54.7718 38.6048 55.4755 33.7492C55.6816 32.3368 55.7067 31.9196 55.7067 30.0045C55.7067 28.0894 55.6816 27.6722 55.4755 26.2597C54.0781 16.6038 47.2069 8.49109 37.8878 5.48525C36.2441 4.95244 34.4949 4.58551 32.5346 4.36434C32.052 4.31408 28.7295 4.25878 28.3123 4.299ZM38.8378 19.851C39.0791 19.9716 39.2751 20.2028 39.3455 20.4441C39.3857 20.5748 39.3958 23.3695 39.3857 29.6677L39.3706 38.7053L37.7772 36.2625L36.1788 33.8196V27.25C36.1788 23.0026 36.1989 20.615 36.2291 20.4994C36.3095 20.2179 36.4854 19.9967 36.7267 19.866C36.9328 19.7605 37.0082 19.7504 37.7973 19.7504C38.5413 19.7504 38.6719 19.7605 38.8378 19.851Z"
                                        fill="#7780A1"
                                    />
                                    <path
                                        d="M43.6834 51.7735C43.5074 51.8841 43.4521 51.9595 43.608 51.8741C43.7185 51.8087 43.8995 51.673 43.8693 51.668C43.8543 51.668 43.7688 51.7182 43.6834 51.7735ZM43.3365 51.9997C43.2461 52.0701 43.2461 52.0751 43.3566 52.0198C43.417 51.9897 43.4672 51.9545 43.4672 51.9444C43.4672 51.9042 43.4421 51.9143 43.3365 51.9997ZM43.0852 52.1505C42.9947 52.2209 42.9947 52.2259 43.1053 52.1706C43.1656 52.1405 43.2159 52.1053 43.2159 52.0952C43.2159 52.055 43.1908 52.0651 43.0852 52.1505ZM42.8339 52.3013C42.7434 52.3717 42.7434 52.3767 42.854 52.3214C42.9143 52.2913 42.9646 52.2561 42.9646 52.246C42.9646 52.2058 42.9394 52.2159 42.8339 52.3013ZM42.4519 52.5024C42.2609 52.6029 42.2709 52.6431 42.4619 52.5476C42.5474 52.5024 42.6127 52.4571 42.6127 52.4471C42.6127 52.4119 42.6077 52.4169 42.4519 52.5024Z"
                                        fill="#7780A1"
                                    />
                                </svg>
                                <svg
                                    width="60"
                                    height="60"
                                    viewBox="0 0 60 60"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="hidden h-[60px] w-[60px] transition duration-500 group-hover:block"
                                >
                                    <path
                                        d="M28.3123 4.299C28.2018 4.30905 27.8499 4.34423 27.5332 4.36937C20.2297 5.02784 13.3887 8.96861 9.05585 15.0255C6.64313 18.3933 5.1 22.2134 4.51692 26.2597C4.31084 27.6722 4.28571 28.0894 4.28571 30.0045C4.28571 31.9196 4.31084 32.3368 4.51692 33.7492C5.91429 43.4051 12.7855 51.5179 22.1046 54.5237C23.7734 55.0615 25.5327 55.4285 27.5332 55.6496C28.3123 55.7351 31.6801 55.7351 32.4592 55.6496C35.9124 55.2676 38.8378 54.4131 41.723 52.9404C42.1654 52.7142 42.2508 52.6539 42.1905 52.6036C42.1503 52.5734 40.2653 50.0451 38.0034 46.989L33.8917 41.4347L28.7396 33.8095C25.9046 29.6174 23.5724 26.1894 23.5522 26.1894C23.5321 26.1843 23.512 29.5722 23.502 33.709C23.4869 40.9522 23.4819 41.2437 23.3914 41.4146C23.2607 41.6609 23.1602 41.7614 22.9491 41.872C22.7882 41.9524 22.6475 41.9675 21.8885 41.9675H21.0189L20.7877 41.8218C20.6369 41.7263 20.5263 41.6006 20.4509 41.4548L20.3453 41.2286L20.3554 31.1505L20.3705 21.0674L20.5263 20.8713C20.6067 20.7658 20.7776 20.6301 20.8983 20.5647C21.1043 20.4642 21.1848 20.4541 22.0544 20.4541C23.0798 20.4541 23.2507 20.4944 23.5171 20.7859C23.5925 20.8663 26.3822 25.0685 29.7198 30.1301C33.0573 35.1918 37.6214 42.1032 39.8632 45.4961L43.9347 51.6636L44.1408 51.5279C45.9654 50.3417 47.8956 48.6528 49.4236 46.8935C52.6757 43.1588 54.7718 38.6048 55.4755 33.7492C55.6816 32.3368 55.7067 31.9196 55.7067 30.0045C55.7067 28.0894 55.6816 27.6722 55.4755 26.2597C54.0781 16.6038 47.2069 8.49109 37.8878 5.48525C36.2441 4.95244 34.4949 4.58551 32.5346 4.36434C32.052 4.31408 28.7295 4.25878 28.3123 4.299ZM38.8378 19.851C39.0791 19.9716 39.2751 20.2028 39.3455 20.4441C39.3857 20.5748 39.3958 23.3695 39.3857 29.6677L39.3706 38.7053L37.7772 36.2625L36.1788 33.8196V27.25C36.1788 23.0026 36.1989 20.615 36.2291 20.4994C36.3095 20.2179 36.4854 19.9967 36.7267 19.866C36.9328 19.7605 37.0082 19.7504 37.7973 19.7504C38.5413 19.7504 38.6719 19.7605 38.8378 19.851Z"
                                        fill="white"
                                    />
                                    <path
                                        d="M43.6834 51.7735C43.5074 51.8841 43.4521 51.9595 43.608 51.8741C43.7185 51.8087 43.8995 51.673 43.8693 51.668C43.8543 51.668 43.7688 51.7182 43.6834 51.7735ZM43.3365 51.9997C43.2461 52.0701 43.2461 52.0751 43.3566 52.0198C43.417 51.9897 43.4672 51.9545 43.4672 51.9444C43.4672 51.9042 43.4421 51.9143 43.3365 51.9997ZM43.0852 52.1505C42.9947 52.2209 42.9947 52.2259 43.1053 52.1706C43.1656 52.1405 43.2159 52.1053 43.2159 52.0952C43.2159 52.055 43.1908 52.0651 43.0852 52.1505ZM42.8339 52.3013C42.7434 52.3717 42.7434 52.3767 42.854 52.3214C42.9143 52.2913 42.9646 52.2561 42.9646 52.246C42.9646 52.2058 42.9394 52.2159 42.8339 52.3013ZM42.4519 52.5024C42.2609 52.6029 42.2709 52.6431 42.4619 52.5476C42.5474 52.5024 42.6127 52.4571 42.6127 52.4471C42.6127 52.4119 42.6077 52.4169 42.4519 52.5024Z"
                                        fill="white"
                                    />
                                </svg>
                            </div>
                        </div>

                        <div data-aos="fade-up" data-aos-duration="1000">
                            <div className="group flex items-center justify-center rounded-[32px] bg-white  py-[50px] px-[50px] transition duration-500 hover:scale-105 hover:bg-[#41D0FD] hover:drop-shadow-[0_5px_13px_rgba(60,72,88,0.20)]">
                                <svg
                                    width="60"
                                    height="60"
                                    viewBox="0 0 60 60"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-[60px] w-[60px] transition duration-500 group-hover:hidden"
                                >
                                    <path
                                        opacity="0.3"
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M35.3422 57.9994L20.1885 42.9452L28.5637 34.4238L52.186 57.9994H35.3422Z"
                                        fill="#7780A1"
                                    />
                                    <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M20.0014 42.9566L35.0205 27.9375H51.9053L28.5403 51.3025L20.0014 42.9566Z"
                                        fill="#7780A1"
                                    />
                                    <path fillRule="evenodd" clipRule="evenodd" d="M7 29.8567L15.5272 38.3781L51.9053 2H34.9328L7 29.8567Z" fill="#7780A1" />
                                </svg>
                                <svg
                                    width="60"
                                    height="60"
                                    viewBox="0 0 60 60"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="hidden h-[60px] w-[60px] transition duration-500 group-hover:block"
                                >
                                    <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M35.3422 57.9994L20.1885 42.9452L28.5637 34.4238L52.186 57.9994H35.3422Z"
                                        fill="#07599C"
                                    />
                                    <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M20.0014 42.9566L35.0205 27.9375H51.9053L28.5403 51.3025L20.0014 42.9566Z"
                                        fill="white"
                                    />
                                    <path fillRule="evenodd" clipRule="evenodd" d="M7 29.8567L15.5272 38.3781L51.9053 2H34.9328L7 29.8567Z" fill="white" />
                                </svg>
                            </div>
                        </div>
                        <div data-aos="fade-up" data-aos-duration="1000">
                            <div className="group flex items-center justify-center rounded-[32px] bg-white  py-[50px] px-[50px] transition duration-500 hover:scale-105 hover:bg-[#E54C21] hover:drop-shadow-[0_5px_13px_rgba(60,72,88,0.20)]">
                                <svg
                                    width="60"
                                    height="60"
                                    viewBox="0 0 60 60"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-[60px] w-[60px] transition duration-500 group-hover:hidden"
                                >
                                    <path d="M8.40169 53.7945L4 0L56.5676 0.108103L51.9133 53.7945L30.4822 60L8.40169 53.7945Z" fill="#7780A1" />
                                    <path
                                        d="M46.177 17.5355L46.7901 10.9688H13.4889L15.3288 31.1013H38.3114L37.4101 39.688L30.0498 41.6721L22.5814 39.5075L22.1846 34.3842H15.5814L16.4836 44.8473L30.0494 48.6356L43.7233 44.8473L45.5632 24.4265H21.4266L20.7411 17.5355H46.177Z"
                                        fill="white"
                                    />
                                </svg>
                                <svg
                                    width="60"
                                    height="60"
                                    viewBox="0 0 60 60"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="hidden h-[60px] w-[60px] transition duration-500 group-hover:block"
                                >
                                    <path d="M8.40169 53.7945L4 0L56.5676 0.108103L51.9133 53.7945L30.4822 60L8.40169 53.7945Z" fill="white" />
                                    <path
                                        d="M46.177 17.5355L46.7901 10.9688H13.4889L15.3288 31.1013H38.3114L37.4101 39.688L30.0498 41.6721L22.5814 39.5075L22.1846 34.3842H15.5814L16.4836 44.8473L30.0494 48.6356L43.7233 44.8473L45.5632 24.4265H21.4266L20.7411 17.5355H46.177Z"
                                        fill="#E54C21"
                                    />
                                </svg>
                            </div>
                        </div>
                        <div data-aos="fade-up" data-aos-duration="1000">
                            <div className="group flex items-center justify-center rounded-[32px] bg-white  py-[50px] px-[50px] transition duration-500 hover:scale-105 hover:bg-black hover:drop-shadow-[0_5px_13px_rgba(60,72,88,0.20)]">
                                <svg
                                    width="60"
                                    height="60"
                                    viewBox="0 0 60 60"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-[60px] w-[60px] transition duration-500 group-hover:text-white"
                                >
                                    <path
                                        d="M39.1657 30.0018L49.6659 11.8706L54.7397 30.0018L49.6657 48.1287L39.1657 30.0018ZM34.0481 32.9463L44.5496 51.0745L26.2604 46.3891L13.0477 32.9463H34.0481ZM44.5473 8.92391L34.0481 27.0551H13.0477L26.2604 13.6114L44.5473 8.92391ZM59.5369 23.8314L53.1311 0L29.2215 6.3868L25.6822 12.6094L18.5004 12.5579L1 30.0034L18.5004 47.4448H18.5011L25.6799 47.3918L29.2243 53.6143L53.1311 60L59.5367 36.1732L55.8988 30.0021L59.5367 23.8319L59.5369 23.8314Z"
                                        fill="currentColor"
                                    />
                                </svg>
                            </div>
                        </div>
                        <div data-aos="fade-up" data-aos-duration="1000">
                            <div className="group flex items-center justify-center rounded-[32px] bg-white  py-[50px] px-[50px] transition duration-500 hover:scale-105 hover:bg-[#01D8FF] hover:drop-shadow-[0_5px_13px_rgba(60,72,88,0.20)]">
                                <svg
                                    width="60"
                                    height="60"
                                    viewBox="0 0 60 60"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-[60px] w-[60px] transition duration-500 group-hover:text-white"
                                >
                                    <path
                                        d="M60 29.7224C60 25.7477 55.0224 21.9808 47.391 19.6449C49.1521 11.8667 48.3693 5.67835 44.9205 3.69711C44.1256 3.23237 43.1961 3.01223 42.181 3.01223V5.7395C42.7436 5.7395 43.1961 5.84957 43.5752 6.05748C45.2385 7.01141 45.9601 10.6437 45.3975 15.3155C45.2629 16.4651 45.0428 17.6759 44.7737 18.9111C42.3767 18.3241 39.7595 17.8716 37.0077 17.5781C35.3567 15.3155 33.6445 13.2609 31.9201 11.4631C35.9071 7.75744 39.6494 5.72727 42.1932 5.72727V3C38.83 3 34.4272 5.39707 29.9755 9.55524C25.5238 5.42153 21.1211 3.04892 17.7578 3.04892V5.77619C20.2894 5.77619 24.044 7.79413 28.031 11.4753C26.3188 13.2731 24.6066 15.3155 22.98 17.5781C20.2161 17.8716 17.5989 18.3241 15.2018 18.9234C14.9205 17.7004 14.7126 16.5141 14.5658 15.3767C13.991 10.7049 14.7004 7.07256 16.3514 6.1064C16.7183 5.88626 17.1953 5.78842 17.7578 5.78842V3.06115C16.7305 3.06115 15.8011 3.28129 14.9939 3.74603C11.5573 5.72727 10.7868 11.9034 12.5601 19.6572C4.95312 22.0053 0 25.7599 0 29.7224C0 33.6971 4.97758 37.4639 12.609 39.7998C10.8479 47.5781 11.6307 53.7664 15.0795 55.7477C15.8744 56.2124 16.8039 56.4325 17.8312 56.4325C21.1945 56.4325 25.5972 54.0355 30.0489 49.8773C34.5006 54.011 38.9034 56.3836 42.2666 56.3836C43.2939 56.3836 44.2234 56.1635 45.0306 55.6987C48.4672 53.7175 49.2377 47.5414 47.4643 39.7876C55.0469 37.4517 60 33.6849 60 29.7224ZM44.0766 21.565C43.6241 23.1427 43.0616 24.7693 42.4256 26.3958C41.9242 25.4174 41.3983 24.4391 40.8235 23.4607C40.2609 22.4823 39.6616 21.5283 39.0624 20.5989C40.799 20.8557 42.4745 21.1737 44.0766 21.565ZM38.4753 34.5899C37.5214 36.2409 36.543 37.8064 35.5279 39.2617C33.7057 39.4207 31.8589 39.5063 30 39.5063C28.1533 39.5063 26.3066 39.4207 24.4965 39.2739C23.4815 37.8186 22.4908 36.2654 21.5369 34.6266C20.6074 33.0245 19.7636 31.3979 18.9931 29.7591C19.7513 28.1203 20.6074 26.4814 21.5247 24.8793C22.4786 23.2283 23.457 21.6629 24.4721 20.2075C26.2943 20.0485 28.1411 19.9629 30 19.9629C31.8467 19.9629 33.6934 20.0485 35.5035 20.1953C36.5186 21.6506 37.5092 23.2038 38.4631 24.8426C39.3926 26.4448 40.2364 28.0713 41.0069 29.7101C40.2364 31.349 39.3926 32.9878 38.4753 34.5899ZM42.4256 33C43.086 34.6388 43.6486 36.2776 44.1133 37.8675C42.5112 38.2589 40.8235 38.5891 39.0746 38.8459C39.6739 37.9042 40.2731 36.938 40.8357 35.9474C41.3983 34.969 41.9242 33.9784 42.4256 33ZM30.0245 46.0493C28.8871 44.8753 27.7497 43.5667 26.6245 42.1357C27.7252 42.1847 28.8504 42.2214 29.9878 42.2214C31.1374 42.2214 32.2748 42.1969 33.3877 42.1357C32.287 43.5667 31.1496 44.8753 30.0245 46.0493ZM20.9254 38.8459C19.1887 38.5891 17.5132 38.2711 15.9111 37.8797C16.3636 36.3021 16.9262 34.6755 17.5622 33.0489C18.0636 34.0273 18.5895 35.0057 19.1643 35.9841C19.7391 36.9625 20.3261 37.9164 20.9254 38.8459ZM29.9633 13.3954C31.1007 14.5695 32.2381 15.8781 33.3632 17.309C32.2625 17.2601 31.1374 17.2234 30 17.2234C28.8504 17.2234 27.713 17.2479 26.6001 17.309C27.7008 15.8781 28.8382 14.5695 29.9633 13.3954ZM20.9132 20.5989C20.3139 21.5406 19.7146 22.5067 19.1521 23.4973C18.5895 24.4757 18.0636 25.4541 17.5622 26.4325C16.9018 24.7937 16.3392 23.1549 15.8744 21.565C17.4766 21.1859 19.1643 20.8557 20.9132 20.5989ZM9.84509 35.9107C5.5157 34.064 2.71504 31.6425 2.71504 29.7224C2.71504 27.8023 5.5157 25.3685 9.84509 23.534C10.8969 23.0815 12.0465 22.6779 13.2328 22.2988C13.9299 24.6959 14.8471 27.1908 15.9845 29.7468C14.8594 32.2907 13.9543 34.7733 13.2695 37.1582C12.0587 36.779 10.9091 36.3632 9.84509 35.9107ZM16.4248 53.3873C14.7615 52.4333 14.04 48.8011 14.6025 44.1292C14.7371 42.9796 14.9572 41.7689 15.2263 40.5336C17.6233 41.1207 20.2405 41.5732 22.9923 41.8667C24.6433 44.1292 26.3555 46.1839 28.0799 47.9817C24.0929 51.6873 20.3506 53.7175 17.8068 53.7175C17.2564 53.7053 16.7917 53.5952 16.4248 53.3873ZM45.4342 44.0681C46.009 48.7399 45.2996 52.3722 43.6486 53.3384C43.2817 53.5585 42.8047 53.6563 42.2421 53.6563C39.7106 53.6563 35.956 51.6384 31.969 47.9572C33.6812 46.1594 35.3934 44.117 37.02 41.8545C39.7839 41.5609 42.4011 41.1084 44.7982 40.5092C45.0795 41.7444 45.2996 42.9307 45.4342 44.0681ZM50.1427 35.9107C49.0909 36.3632 47.9413 36.7668 46.755 37.1459C46.0579 34.7489 45.1406 32.254 44.0033 29.6979C45.1284 27.1541 46.0334 24.6714 46.7183 22.2866C47.9291 22.6657 49.0787 23.0815 50.1549 23.534C54.4843 25.3808 57.285 27.8023 57.285 29.7224C57.2727 31.6425 54.4721 34.0762 50.1427 35.9107Z"
                                        fill="currentColor"
                                    />
                                    <path
                                        d="M29.9878 35.311C33.0745 35.311 35.5768 32.8086 35.5768 29.7219C35.5768 26.6351 33.0745 24.1328 29.9878 24.1328C26.901 24.1328 24.3987 26.6351 24.3987 29.7219C24.3987 32.8086 26.901 35.311 29.9878 35.311Z"
                                        fill="currentColor"
                                    />
                                </svg>
                            </div>
                        </div>
                    </div>
                </div><br /><br />
            </section>

            {/* our team */}

            <section
                className="bg-[url(/assets/images/service-bg.png)] bg-cover bg-center bg-no-repeat py-14 dark:bg-none lg:py-[60px]"
                style={{
                    background: '#e5f1ff',
                }}
            >
                <div className="container ">

                    <div className="heading text-center">
                        <h6 style={{ color: 'black ', fontStyle: 'Poppins', fontSize: 25 ,marginBottom:'1'}}>Why Choose Our</h6>
                        <h4 style={{ color: '#1759D4', fontStyle: 'Poppins', fontSize: 52, textTransform: 'uppercase' }}> Expertise </h4>
                    </div>

                    <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">

                        <div data-aos="fade-up" data-aos-duration="1000">
                            <div
                                className="group rounded-3xl border-2 border-white bg-white p-6 transition duration-500 hover:border-secondary hover:bg-secondary/10 dark:border-white/10 dark:bg-transparent dark:bg-gradient-to-b dark:from-white/[0.04] dark:to-transparent dark:!shadow-none dark:hover:bg-secondary"
                                style={{
                                    boxShadow: '-20px 40px 80px rgba(219, 222, 225, 0.4)',
                                    background: 'linear-gradient(to right, #737DFE, #FFCAC9)',
                                }}
                            >
                                <div
                                    className="flex h-16 w-16 items-center justify-center rounded-full bg-white transition "
                                    style={{
                                        boxShadow: '0px 15px 30px rgba(180, 118, 229, 0.4)',
                                    }}
                                >
                                    <svg width="34" height="34" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            opacity="0.5"
                                            d="M14.2371 18.7087L18.7103 14.2366L21.4893 17.0156V21.4888H17.0172L14.2371 18.7087ZM5.2917 9.76334L2.3092 6.7819C2.21118 6.68399 2.13342 6.56771 2.08036 6.43973C2.02731 6.31174 2 6.17455 2 6.03601C2 5.89746 2.02731 5.76027 2.08036 5.63229C2.13342 5.5043 2.21118 5.38803 2.3092 5.29012L5.2917 2.30867C5.4894 2.11103 5.75751 2 6.03706 2C6.31662 2 6.58472 2.11103 6.78242 2.30867L9.76598 5.29012L5.2917 9.76334Z"
                                            fill="#1759D4"
                                        />
                                        <path
                                            d="M5.29177 12.7459L7.21895 14.6742L8.71179 13.1813L6.78249 11.2552L8.27321 9.76449L10.2015 11.6917L11.6922 10.201L9.76605 8.27271L11.2568 6.78199L13.1818 8.71128L14.6736 7.2195L12.7454 5.29232L15.7279 2.31087C15.9256 2.11323 16.1937 2.0022 16.4732 2.0022C16.7528 2.0022 17.0209 2.11323 17.2186 2.31087L21.6908 6.78304C21.8884 6.98074 21.9994 7.24885 21.9994 7.5284C21.9994 7.80795 21.8884 8.07606 21.6908 8.27376L8.27321 21.6913C8.07551 21.889 7.8074 22 7.52785 22C7.2483 22 6.98019 21.889 6.78249 21.6913L2.31032 17.2192C2.11268 17.0215 2.00165 16.7533 2.00165 16.4738C2.00165 16.1942 2.11268 15.9261 2.31032 15.7284L5.29177 12.7459Z"
                                            fill="#1759D4"
                                        />
                                    </svg>

                                </div>
                                <Link
                                    href="/services-detail"
                                    className="my-8 inline-block text-[20px] font-extrabold text-white dark:text-white dark:group-hover:text-black"
                                >
                                    Prioritizing Client Growth
                                </Link>
                                <p className="mb-10 text-md font-semibold transition line-clamp-9 dark:group-hover:text-white" style={{ color: 'black' }}>
                                    Customer growth is a crucial focus area. Our company not only aims to acquire new clients but also seeks to nurture and
                                    expand its existing customer base. We imply a long-term commitment to customer satisfaction and partnership.
                                </p>
                                
                            </div>
                        </div>

                        <div data-aos="fade-up" data-aos-duration="1000">
                            <div
                                className="group rounded-3xl border-2 border-white bg-white p-6 transition duration-500 hover:border-secondary hover:bg-secondary/20 dark:border-white/10 dark:bg-transparent dark:bg-gradient-to-b dark:from-white/[0.04] dark:to-transparent dark:!shadow-none dark:hover:bg-secondary"
                                style={{
                                    boxShadow: '-20px 30px 70px rgba(219, 222, 225, 0.4)',
                                    background: 'linear-gradient(to right, #737DFE, #FFCAC9)',
                                }}
                            >
                                <div
                                    className="flex h-16 w-16 items-center justify-center rounded-full bg-white transition"
                                    style={{
                                        boxShadow: '0px 15px 30px rgba(180, 118, 229, 0.4)',
                                    }}
                                >
                                    <svg width="34" height="34" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            opacity="0.5"
                                            d="M10.1658 20C10.5862 20 10.9617 19.7371 11.1054 19.342L15.8374 6.34204C16.0749 5.68981 15.5919 5 14.8978 5H13.8341C13.4137 5 13.0382 5.26292 12.8945 5.65796L8.16245 18.658C7.92504 19.3102 8.40804 20 9.10214 20H10.1658Z"
                                            fill="#1759D4"
                                        />
                                        <path
                                            d="M17.9889 17.0964C18.3794 17.4871 19.0127 17.4873 19.4034 17.0966L23.2929 13.2071C23.6834 12.8166 23.6834 12.1834 23.2929 11.7929L19.4036 7.90359C19.0129 7.51287 18.3793 7.5131 17.9889 7.90409L17.2814 8.61254C16.8913 9.00328 16.8916 9.63632 17.2823 10.0266L19.0501 11.7927C19.441 12.1832 19.441 12.8168 19.0502 13.2074L17.2822 14.9746C16.8916 15.365 16.8914 15.9981 17.2818 16.3888L17.9889 17.0964ZM4.94994 13.2073C4.55904 12.8167 4.55896 12.1832 4.94977 11.7925L6.71781 10.0253C7.10839 9.63494 7.10858 9.00184 6.71823 8.61121L6.01111 7.90359C5.62062 7.51283 4.98726 7.51272 4.59664 7.90334L0.707106 11.7929C0.316582 12.1834 0.316582 12.8166 0.707107 13.2071L4.59639 17.0964C4.98711 17.4871 5.62066 17.4869 6.01111 17.0959L6.71856 16.3874C7.10874 15.9967 7.10837 15.3637 6.71773 14.9734L4.94994 13.2073Z"
                                            fill="#1759D4"
                                        />
                                    </svg>
                                </div>
                                <Link
                                    href="/services-detail"
                                    className="my-8 inline-block text-[20px] font-extrabold text-white dark:text-white dark:group-hover:text-black"
                                >
                                    Contributing to Societal Betterment
                                </Link>

                                <p className="mb-4 text-md font-semibold transition line-clamp-9 dark:group-hover:text-black" style={{ color: 'black' }}>
                                    Our company aims not only to profitable but also to make a positive impact on
                                    society. This involves ethical business practicess, community involvement, or even the development of IT solutions that
                                    address societal issues.
                                </p>
                                
                            </div>
                        </div>

                        <div data-aos="fade-up" data-aos-duration="1000">
                            <div
                                className="group rounded-3xl border-2 border-white bg-white p-6 transition duration-500 hover:border-secondary hover:bg-secondary/20 dark:border-white/10 dark:bg-transparent dark:bg-gradient-to-b dark:from-white/[0.04] dark:to-transparent dark:!shadow-none dark:hover:bg-secondary"
                                style={{
                                    boxShadow: '-20px 30px 70px rgba(219, 222, 225, 0.4)',
                                    background: 'linear-gradient(to right, #737DFE, #FFCAC9)',
                                }}
                            >
                                <div
                                    className="flex h-16 w-16 items-center justify-center rounded-full bg-white transition "
                                    style={{
                                        boxShadow: '0px 15px 30px rgba(180, 118, 229, 0.4)',
                                    }}
                                >
                                    <svg width="34" height="34" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            opacity="0.5"
                                            d="M6.21053 20H3.05263C2.77346 20 2.50572 19.8891 2.30831 19.6917C2.1109 19.4943 2 19.2265 2 18.9474V10.5263C2 10.2471 2.1109 9.97941 2.30831 9.782C2.50572 9.58459 2.77346 9.47369 3.05263 9.47369H6.21053C6.4897 9.47369 6.75744 9.58459 6.95485 9.782C7.15226 9.97941 7.26316 10.2471 7.26316 10.5263V18.9474C7.26316 19.2265 7.15226 19.4943 6.95485 19.6917C6.75744 19.8891 6.4897 20 6.21053 20ZM20.9474 20H17.7895C17.5103 20 17.2426 19.8891 17.0452 19.6917C16.8477 19.4943 16.7368 19.2265 16.7368 18.9474V7.36843C16.7368 7.08925 16.8477 6.82151 17.0452 6.6241C17.2426 6.4267 17.5103 6.3158 17.7895 6.3158H20.9474C21.2265 6.3158 21.4943 6.4267 21.6917 6.6241C21.8891 6.82151 22 7.08925 22 7.36843V18.9474C22 19.2265 21.8891 19.4943 21.6917 19.6917C21.4943 19.8891 21.2265 20 20.9474 20Z"
                                            fill="#1759D4"
                                        />
                                        <path
                                            d="M13.5789 20H10.421C10.1419 20 9.87412 19.8891 9.67672 19.6917C9.47931 19.4943 9.36841 19.2265 9.36841 18.9474V1.05263C9.36841 0.773456 9.47931 0.505715 9.67672 0.308309C9.87412 0.110902 10.1419 0 10.421 0H13.5789C13.8581 0 14.1259 0.110902 14.3233 0.308309C14.5207 0.505715 14.6316 0.773456 14.6316 1.05263V18.9474C14.6316 19.2265 14.5207 19.4943 14.3233 19.6917C14.1259 19.8891 13.8581 20 13.5789 20Z"
                                            fill="#1759D4"
                                        />
                                    </svg>
                                </div>
                                <Link
                                    href="/services-detail"
                                    className="my-8 inline-block text-[20px] font-extrabold text-white dark:text-white dark:group-hover:text-black"
                                >
                                    Innovative Service Provider
                                </Link>

                                <p className="mb-10 text-md font-semibold transition line-clamp-9 dark:group-hover:text-black" style={{ color: 'black' }}>
                                    Innovation is vital in the rapidly evolving IT industry. Our company seeks to be at the forefront of technological
                                    advancements and to offer innovative solutions that address emerging challenges and opportunities.
                                </p>
                                
                            </div>
                        </div>

                    </div>
                </div>
            </section>
            <section
                className="py-14 dark:!bg-none lg:py-[10px]"
                style={{
                    background: '#e5f1ff',
                }}
            >
                <div className="relative my-14 mx-auto border-[10px] border-transparent bg-black py-14 dark:border-black dark:bg-gray-dark lg:my-[100px] lg:py-[100px] xl:max-w-[1440px] xl:rounded-3xl">
                    <div className="container">
                        <div className="items-end gap-4 lg:flex xl:gap-0">
                            <div className="lg:w-1/2">
                                <div className="heading mb-16 text-center ltr:lg:text-left rtl:lg:text-right">
                                    <h6>What Makes us Different?</h6>
                                    <h4 className="leading-normal !text-white lg:!leading-[50px]">We bring solutions to make life easier for our clients.</h4>
                                </div>
                                <div className="grid gap-x-7 gap-y-12 sm:grid-cols-2" data-aos={isRtl ? 'fade-left' : 'fade-right'} data-aos-duration="1000">
                                    <div className="flex transition">
                                        <div>
                                            <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <g clipPath="url(#clip0_36_337)">
                                                    <path
                                                        opacity="0.5"
                                                        d="M19.2867 23.9285V25.119C19.2867 25.7505 19.0358 26.3561 18.5893 26.8027C18.1427 27.2492 17.5371 27.5001 16.9056 27.5001H12.1435C11.512 27.5001 10.9063 27.2492 10.4598 26.8027C10.0133 26.3561 9.76239 25.7505 9.76239 25.119V23.9285H19.2867Z"
                                                        fill="#B476E5"
                                                    />
                                                    <path
                                                        d="M9.69213 21.5473C9.33855 20.0318 7.74323 18.7924 7.08844 17.9757C5.96718 16.5748 5.26448 14.8857 5.06127 13.1028C4.85807 11.32 5.16263 9.51606 5.93988 7.89876C6.71712 6.28146 7.93542 4.91663 9.45445 3.96148C10.9735 3.00632 12.7314 2.49971 14.5258 2.5C16.3202 2.50029 18.078 3.00746 19.5967 3.9631C21.1154 4.91874 22.3333 6.28396 23.11 7.90151C23.8867 9.51906 24.1907 11.3231 23.9869 13.1059C23.7831 14.8886 23.0799 16.5776 21.9582 17.9781C21.3034 18.7936 19.7105 20.033 19.3569 21.5473H9.69094H9.69213ZM15.715 12.029V7.26094L10.3576 14.4101H13.334V19.1722L18.6914 12.029H15.715Z"
                                                        fill="#B476E5"
                                                    />
                                                </g>
                                                <defs>
                                                    <clipPath id="clip0_36_337">
                                                        <rect width="30" height="30" fill="white" />
                                                    </clipPath>
                                                </defs>
                                            </svg>
                                        </div>
                                        <div className="ltr:pl-3 rtl:pr-3">
                                            <h4 className="mb-2 text-lg font-bold text-white">Budget Friendly</h4>
                                            <p className="font-semibold">
                                                You will receive a guaranteed price for your project before commencement, allowing you to customize it by adding
                                                or eliminating features based on your budget
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex transition">
                                        <div>
                                            <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <g clipPath="url(#clip0_36_379)">
                                                    <path
                                                        d="M7.38901 21.9074C8.8422 21.9074 10.0284 20.7213 10.0284 19.268C10.0284 17.8148 8.84225 16.6287 7.38901 16.6287C5.93576 16.6287 4.74963 17.8148 4.74963 19.268C4.74963 20.7212 5.90621 21.9074 7.38901 21.9074Z"
                                                        fill="#B476E5"
                                                    />
                                                    <path
                                                        d="M9.64281 22.5896C8.99038 23.0344 8.21938 23.2717 7.38902 23.2717C6.55865 23.2717 5.78771 23.0048 5.13522 22.5896C3.86013 23.3014 3 24.6655 3 26.2372V26.7709C3 27.364 3.47454 27.8386 4.06761 27.8386H9.73188V27.6013C9.73188 26.2075 10.2656 24.9324 11.0962 23.9537C10.7104 23.3901 10.2062 22.9158 9.64276 22.5896L9.64281 22.5896Z"
                                                        fill="#B476E5"
                                                    />
                                                    <path
                                                        d="M20.9714 19.268C20.9714 20.7212 22.1575 21.9074 23.6107 21.9074C25.064 21.9074 26.2501 20.7213 26.2501 19.268C26.2501 17.8148 25.064 16.6287 23.6107 16.6287C22.128 16.6287 20.9714 17.815 20.9714 19.268Z"
                                                        fill="#B476E5"
                                                    />
                                                    <path
                                                        d="M25.8646 22.5893C25.2122 23.0341 24.4412 23.2714 23.6109 23.2714C22.7805 23.2714 21.9797 23.0045 21.3571 22.5596C20.764 22.8858 20.2894 23.3306 19.9039 23.894C20.7638 24.8727 21.2681 26.1478 21.2681 27.5416V27.7789H26.9324C27.5255 27.7789 28 27.3044 28 26.7113V26.1776C27.9998 24.6652 27.1397 23.3308 25.8646 22.5894L25.8646 22.5893Z"
                                                        fill="#B476E5"
                                                    />
                                                    <path
                                                        d="M12.8456 20.6318C12.8456 22.085 14.0318 23.2712 15.485 23.2712C16.9383 23.2712 18.1244 22.085 18.1244 20.6318C18.1244 19.1786 16.9383 17.9924 15.485 17.9924C14.0318 17.9924 12.8456 19.1786 12.8456 20.6318Z"
                                                        fill="#B476E5"
                                                    />
                                                    <path
                                                        d="M17.7388 23.9536C17.0864 24.3984 16.3154 24.6356 15.485 24.6356C14.6547 24.6356 13.8837 24.3688 13.2312 23.9536C11.9561 24.6654 11.096 26.0295 11.096 27.6012V28.1349C11.096 28.728 11.5706 29.2025 12.1636 29.2025H18.8065C19.3996 29.2025 19.8741 28.728 19.8741 28.1349V27.6012C19.8739 26.0295 19.014 24.6654 17.7387 23.9536H17.7388Z"
                                                        fill="#B476E5"
                                                    />
                                                    <path
                                                        opacity="0.5"
                                                        d="M11.0663 9.15515C11.3036 10.6379 12.5787 11.7945 14.1209 11.7945C14.625 11.7945 15.07 11.676 15.4852 11.4683C15.9003 11.676 16.3451 11.7945 16.8495 11.7945C18.3916 11.7945 19.6965 10.6676 19.904 9.15515C20.9123 8.65103 21.5945 7.613 21.5945 6.39726C21.5945 5.18132 20.9125 4.17307 19.904 3.63937C19.6667 2.15658 18.3916 1 16.8495 1C16.3453 1 15.9004 1.11853 15.4852 1.32623C15.07 1.11853 14.6253 1 14.1209 1C12.5787 1 11.2738 2.12698 11.0663 3.63937C10.0581 4.1435 9.37585 5.18153 9.37585 6.39726C9.37606 7.613 10.0581 8.65106 11.0663 9.15515ZM18.5989 5.3888C19.1625 5.3888 19.6072 5.83356 19.6072 6.39705C19.6072 6.96055 19.1624 7.4053 18.5989 7.4053C18.0354 7.4053 17.5907 6.96055 17.5907 6.39705C17.5907 5.83356 18.0354 5.3888 18.5989 5.3888ZM15.485 5.3888C16.0485 5.3888 16.4933 5.83356 16.4933 6.39705C16.4933 6.96055 16.0485 7.4053 15.485 7.4053C14.9215 7.4053 14.4768 6.96055 14.4768 6.39705C14.4768 5.83356 14.9215 5.3888 15.485 5.3888ZM12.3711 5.3888C12.9346 5.3888 13.3793 5.83356 13.3793 6.39705C13.3793 6.96055 12.9346 7.4053 12.3711 7.4053C11.8076 7.4053 11.3629 6.96055 11.3629 6.39705C11.3629 5.83356 11.8076 5.3888 12.3711 5.3888Z"
                                                        fill="#B476E5"
                                                    />
                                                    <path
                                                        d="M9.25737 15.9762C9.73192 15.9762 10.1173 15.5906 10.1173 15.1163C10.1173 14.6417 9.7317 14.2563 9.25737 14.2563C8.78283 14.2563 8.39746 14.6419 8.39746 15.1163C8.39746 15.5908 8.78305 15.9762 9.25737 15.9762Z"
                                                        fill="#B476E5"
                                                    />
                                                    <path
                                                        opacity="0.5"
                                                        d="M11.3036 12.0911C10.7105 12.0911 10.2064 12.5656 10.2064 13.1883C10.2064 13.7813 10.6809 14.2855 11.3036 14.2855C11.9265 14.2855 12.4008 13.811 12.4008 13.1883C12.3712 12.5656 11.8967 12.0911 11.3036 12.0911Z"
                                                        fill="#B476E5"
                                                    />
                                                    <path
                                                        d="M20.8527 15.1163C20.8527 15.5908 21.2383 15.9762 21.7126 15.9762C22.1872 15.9762 22.5726 15.5906 22.5726 15.1163C22.5726 14.6417 22.187 14.2563 21.7126 14.2563C21.2383 14.2563 20.8527 14.6417 20.8527 15.1163Z"
                                                        fill="#B476E5"
                                                    />
                                                    <path
                                                        opacity="0.5"
                                                        d="M19.6665 12.0911C19.0734 12.0911 18.5693 12.5656 18.5693 13.1883C18.5693 13.7813 19.0438 14.2855 19.6665 14.2855C20.2596 14.2855 20.7637 13.811 20.7637 13.1883C20.7637 12.5656 20.2892 12.0911 19.6665 12.0911Z"
                                                        fill="#B476E5"
                                                    />
                                                    <path
                                                        opacity="0.5"
                                                        d="M15.4851 12.5063C14.892 12.5063 14.3879 12.9809 14.3879 13.6036C14.3879 14.1966 14.8624 14.7008 15.4851 14.7008C16.0782 14.7008 16.5823 14.2262 16.5823 13.6036C16.5823 13.0105 16.0782 12.5063 15.4851 12.5063Z"
                                                        fill="#B476E5"
                                                    />
                                                    <path
                                                        d="M15.485 15.353C15.0105 15.353 14.6251 15.7386 14.6251 16.2129C14.6251 16.6875 15.0107 17.0729 15.485 17.0729C15.9596 17.0729 16.345 16.6873 16.345 16.2129C16.345 15.7386 15.9596 15.353 15.485 15.353Z"
                                                        fill="#B476E5"
                                                    />
                                                </g>
                                                <defs>
                                                    <clipPath id="clip0_36_379">
                                                        <rect width="30" height="30" fill="white" />
                                                    </clipPath>
                                                </defs>
                                            </svg>
                                        </div>
                                        <div className="ltr:pl-3 rtl:pr-3">
                                            <h4 className="mb-2 text-lg font-bold text-white">Creative Minds</h4>
                                            <p className="font-semibold">
                                                Our youthful team employs a process-driven strategy to develop digital products tailored to the specific
                                                business requirements of our partners
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex transition">
                                        <div>
                                            <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <g clipPath="url(#clip0_36_392)">
                                                    <path
                                                        opacity="0.5"
                                                        fillRule="evenodd"
                                                        clipRule="evenodd"
                                                        d="M14.2364 27.9997V24.9966C12.4567 25.1078 11.1218 23.6617 11.1218 21.9935C11.1218 20.3249 12.4567 18.9904 14.2364 19.1015V16.0984H8.67477C8.89731 15.6535 9.3422 15.0973 9.3422 14.5412C9.3422 12.3167 6.00534 12.3167 6.00534 14.5412C6.00534 15.0975 6.33905 15.6535 6.56161 16.0984H1V27.1102C1 27.5551 1.44487 27.9999 1.88974 27.9999H14.2365L14.2364 27.9997Z"
                                                        fill="#B476E5"
                                                    />
                                                    <path
                                                        fillRule="evenodd"
                                                        clipRule="evenodd"
                                                        d="M28.6959 16.0981H25.2477C25.3588 17.8778 24.0242 19.3238 22.3557 19.3238C20.576 19.3238 19.2412 17.8778 19.3526 16.0981H15.4595V20.7698C15.0146 20.6586 14.4584 20.3249 14.0135 20.3249C11.9001 20.3249 11.9001 23.6618 14.0135 23.6618C14.4584 23.6618 15.0146 23.4392 15.4595 23.2169V27.9997H27.8063C28.2511 27.9997 28.696 27.5549 28.696 27.11V16.0982L28.6959 16.0981Z"
                                                        fill="#B476E5"
                                                    />
                                                    <path
                                                        fillRule="evenodd"
                                                        clipRule="evenodd"
                                                        d="M28.6731 14.9015V3.88974C28.6731 3.44487 28.2283 3 27.672 3H15.4367V5.89196C17.1052 5.66942 18.6624 7.00423 18.6624 8.78392C18.6624 10.5636 17.1052 11.8985 15.4367 11.6759V14.9016H20.9983C20.8871 15.3464 20.5534 15.9027 20.5534 16.3476C20.5534 18.5722 24.0017 18.5722 24.0017 16.3476C24.0017 15.9027 23.668 15.3465 23.4454 14.9016L28.6731 14.9015Z"
                                                        fill="#B476E5"
                                                    />
                                                </g>
                                                <defs>
                                                    <clipPath id="clip0_36_392">
                                                        <rect width="30" height="30" fill="white" />
                                                    </clipPath>
                                                </defs>
                                            </svg>
                                        </div>
                                        <div className="ltr:pl-3 rtl:pr-3">
                                            <h4 className="mb-2 text-lg font-bold text-white">Full Transparency</h4>
                                            <p className="font-semibold">
                                                Anticipate transparent communication and full visibility at every stage of your product development journey
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex transition">
                                        <div>
                                            <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <g clipPath="url(#clip0_36_401)">
                                                    <path
                                                        opacity="0.5"
                                                        d="M9.68219 19.8007L10.8868 17.8733C11.9699 18.5518 13.2226 18.9106 14.5006 18.9086C15.7787 18.9106 17.0313 18.5518 18.1144 17.8733L19.319 19.8007C17.8749 20.7054 16.2047 21.184 14.5006 21.1814C12.7965 21.184 11.1263 20.7054 9.68219 19.8007Z"
                                                        fill="#B476E5"
                                                    />
                                                    <path
                                                        d="M24.7284 10.9537C25.3312 10.9537 25.9093 11.1932 26.3355 11.6194C26.7618 12.0457 27.0012 12.6238 27.0012 13.2265V17.7722C27.0012 18.375 26.7618 18.9531 26.3355 19.3794C25.9093 19.8056 25.3312 20.0451 24.7284 20.0451H23.5215C23.2445 22.2421 22.1752 24.2625 20.5143 25.7272C18.8534 27.1918 16.715 28 14.5006 28V25.7272C16.309 25.7272 18.0433 25.0088 19.322 23.7301C20.6007 22.4513 21.3191 20.717 21.3191 18.9086V12.0901C21.3191 10.2817 20.6007 8.54743 19.322 7.26871C18.0433 5.98999 16.309 5.27162 14.5006 5.27162C12.6922 5.27162 10.9579 5.98999 9.67919 7.26871C8.40047 8.54743 7.6821 10.2817 7.6821 12.0901V20.0451H4.27284C3.67004 20.0451 3.09194 19.8056 2.6657 19.3794C2.23946 18.9531 2 18.375 2 17.7722V13.2265C2 12.6238 2.23946 12.0457 2.6657 11.6194C3.09194 11.1932 3.67004 10.9537 4.27284 10.9537H5.47972C5.75704 8.75689 6.82646 6.73677 8.48733 5.27238C10.1482 3.808 12.2864 3 14.5006 3C16.7149 3 18.853 3.808 20.5139 5.27238C22.1748 6.73677 23.2442 8.75689 23.5215 10.9537H24.7284Z"
                                                        fill="#B476E5"
                                                    />
                                                </g>
                                                <defs>
                                                    <clipPath id="clip0_36_401">
                                                        <rect width="30" height="30" fill="white" />
                                                    </clipPath>
                                                </defs>
                                            </svg>
                                        </div>
                                        <div className="ltr:pl-3 rtl:pr-3">
                                            <h4 className="mb-2 text-lg font-bold text-white">Agile Development</h4>
                                            <p className="font-semibold">Accelerate Your Time-to-Market: Embrace Agile, Iterative, CI/CD Development</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                           
                            <div className="top-1/2 mx-auto mt-10 ltr:right-5 rtl:left-5 md:w-[45%] lg:mt-0 xl:absolute xl:-translate-y-1/2" style={{ borderRadius: 60 }}>
                                <img src="https://lh3.googleusercontent.com/p/AF1QipOUcWmOrsHZUyS-gS4z95HT7l9SFpNVpdj0CfJM=s680-w680-h510" alt="box-img" className="h-full w-full transition-transform duration-300 transform hover:scale-110 rtl:rotate-y-180" style={{ borderRadius: 60 }} />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            

<section className="bg-white py-14 -mt-32 dark:bg-transparent lg:py-[100px]" style={{ background: '#e5f1ff' }}>
                <div className="container">
                    <div className="heading text-center">
                        <h6 style={{ color: 'black',fontSize:24,marginBottom:'-2px',marginLeft:'24px' }}>Meet Our Team</h6>
                        <h4 style={{ color: '#1759D4' ,fontSize:'34',marginLeft:'24px',marginBottom:'-16px'}}>Creative Minds</h4>
                    </div>
                  
                    <div className="w-90 ml-17 mx-auto  mt-8 grid grid-cols-1 justify-around gap-9 pl-[95px] md:grid-cols-2 lg:grid-cols-4 ">
    
                        <div className="img-card w-40 rounded-xl text-center" style={{marginRight:'24px'}}>
                            <img src="Nidhi Pandey.png" alt="" className="rounded-xl" />
                            <h3 style={{ color: '#1759D4', fontWeight: '700' }}>COO/CO-FOUNDER</h3>
                            <p style={{ fontWeight: '700', color: 'black' }}>Nidhi Pandey</p>
                        </div>
                        <div className="img-card w-40 rounded-xl text-center mr-14">
                            <img src="Mask Group 171.jpg" alt="" className="rounded-xl" />
                            <h3 style={{ color: '#1759D4', fontWeight: '700' }}>SENIOR HR</h3>
                            <p style={{ fontWeight: '700', color: 'black' }}>Divya Singh</p>
                        </div>
                        <div className="img-card w-44 rounded-xl text-center mr-14">
                            <img src="Shashank Sohani.jpg" alt="" className="rounded-xl" />
                            <h3 style={{ color: '#1759D4', fontWeight: '700' }}></h3>
                            <p style={{ fontWeight: '700', color: 'black' }}>Shashank Sohani</p>
                        </div>
                        <div className="img-card w-44 rounded-xl text-center mr-14">
                            <img src="Amar rathod.png" alt="" className="rounded-xl" />
                            <h3 style={{ color: '#1759D4', fontWeight: '700' }}></h3>
                            <p style={{ fontWeight: '700', color: 'black' }}>Amar Rathod</p>
                        </div>
                   
                        {users.map((user, index) => (
                            <div key={index} className="card overflow-hidden  w-40 rounded-xl text-center">
                                <div className='w-[10rem] h-[11rem] card overflow-hidden rounded-xl'>
                                <img src={user.avatar} alt={`${user.name}'s avatar`} className="rounded-xl" />
                                </div>
                                <p style={{ fontWeight: '700', color: 'black',marginTop:'4px' }}>{user.name}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* our team end  */}

            <div
                className="section-3 w-full overflow-hidden bg-white  pt-28 md:h-auto lg:h-[600px]"
                style={{ backgroundImage: 'url("bg-3.png")', backgroundSize: 'cover', width: '100%' }}
            >
                <div
                    className="mx-auto flex h-12 w-4/5 items-center justify-center rounded-2xl bg-blue-600 shadow-xl md:w-1/4"
                    style={{ backgroundColor: '#1759D4' }}
                >
                    <h1 className="text-lg font-semibold text-white">We are proud of our team</h1>
                </div>

                <div className="mx-auto mt-5 flex w-4/5 flex-col gap-5 md:mt-0 md:flex-row">
                    <div className="mx-auto mt-10 h-32 w-full rounded-xl bg-blue-600 text-center md:w-3/5 lg:w-1/5" style={{ backgroundColor: '#1759D4' }}>
                        <div className="icon mx-auto flex w-12 justify-center pt-8 pb-2  text-lg">
                            <img src="MicrosoftTeams-image (22).png" alt="icon" />
                            <h1 className="ml-2 text-3xl font-semibold text-white">15%</h1>
                        </div>
                        <p className="text-md font-semibold text-white">Sales & Marketing</p>
                    </div>

                    <div
                        className="mx-auto mt-5 h-32 w-full rounded-xl bg-blue-600 text-center md:mt-10 md:w-3/5 lg:w-1/5"
                        style={{ backgroundColor: '#1759D4' }}
                    >
                        <div className="icon mx-auto flex w-12 justify-center pt-8 pb-2 text-lg">
                            <img src="/graphic-designer copy.png" alt="icon" className="w-full" />
                            <h1 className="ml-2 text-3xl font-semibold text-white">25%</h1>
                        </div>
                        <p className="text-md font-semibold text-white">Design & Strategy</p>
                    </div>
                </div>

                <div className="mx-auto mt-5 flex w-4/5 flex-col gap-5 md:flex-row">
                    <div className="mx-auto mt-5 h-32 w-full rounded-xl bg-blue-600 text-center md:mt-10 md:w-1/5" style={{ backgroundColor: '#1759D4' }}>
                        <div className="icon mx-auto flex w-12 justify-center   pt-8 pb-2 text-lg">
                            <img src="/development copy.png" alt="icon" className="inline" />
                            <h1 className="ml-2 text-3xl font-semibold text-white">40%</h1>
                        </div>
                        <p className="text-md font-semibold text-white">Development</p>
                    </div>

                    <div className="mx-auto mt-5 w-full rounded-xl text-center md:mt-10 md:w-2/5">
                        <div className="m-4 mx-auto h-[90%] overflow-hidden rounded-xl border border-black text-center">
                            <img
                                src="/images/gigatorb.jpg"
                                alt="zoom"
                                className="duration-2000 h-full w-full transform-gpu transition-transform ease-in-out hover:scale-125"
                            />
                        </div>
                    </div>

                    <div className="mx-auto mt-5 h-32 w-full rounded-xl text-center md:mt-10 md:w-1/5" style={{ backgroundColor: '#1759D4' }}>
                        <div className="icon mx-auto flex w-12 justify-center pt-8 pb-2 text-lg">
                            <img src="/coronavirus.png" className="h-full w-full" alt="icon" />
                            <h1 className="ml-2 text-3xl font-semibold text-white">20%</h1>
                        </div>
                        <p className="text-md font-semibold text-white">Testing</p>
                    </div>
                </div>
            </div>
	
            

            <Massage />
        </div>
    );
};

export default Services;

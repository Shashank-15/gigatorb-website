import { useEffect, useState } from 'react';
import Link from 'next/link';
import Testimonial from '../components/Testimonial';
import CountUp from 'react-countup';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Autoplay, Navigation } from 'swiper';
import { useSelector } from 'react-redux';
import { IRootState } from '../store';
import Head from 'next/head';

const Marketing = () => {
    const isRtl = useSelector((state: IRootState) => state.themeConfig.direction) === 'rtl' ? true : false;
    const feedbacks = [
        {
            id: 1,
            name: 'Nilkanth',
            role: "",
            color:'',
            thumbnail: '/assets/images/Gallary/Nilkanth.jpeg',
            message:
                'An amazing services. We have a great relationship with Gigatorb, great & phenomenal experience.',
        },
    ];

    return (
        <div className="overflow-x-hidden">
            <Head>
                <title>Ui/Ux Design | Gigatorb</title>
            </Head>
            <div className="overflow-hidden bg-black pt-[82px] sm:-mx-[250px] sm:rounded-b-[50%] lg:-mx-[150px] lg:pt-[106px]">
                <div className="relative">
                    <img src="/assets/images/banner-lefticon.png" alt="banner-lefticon" className="absolute left-0 top-20 sm:left-[250px] lg:left-[150px]" />
                    <img
                        src="/assets/images/banner-rightIcon.png"
                        alt="banner-rightIcon"
                        className="absolute right-0 -top-4 sm:right-[250px] lg:right-[150px]"
                    />
                </div>
                <div className="container relative bg-[url(/assets/images/world-map.png)] bg-cover">
                    <div className="flex flex-col items-center gap-7 lg:flex-row">
                        <div className="flex-1 pb-14 pt-14 text-white ltr:text-center rtl:text-center lg:max-w-[558px] lg:pb-52 ltr:lg:text-left rtl:lg:text-right xl:pt-36">
                            <h2 className="text-3xl font-extrabold sm:text-5xl lg:text-[70px] lg:leading-[89px]">
                            Nurturing Your <span className="text-[#1759D4]">UI/UX</span><span className="text-[#1759D4]"> Design</span>  
                              
                            </h2>
                            <p className="mt-7 text-lg font-semibold">We believe that the power of marketing & SEO performance helps businesses to grow.</p>
                            {/* <button type="button" className="btn mx-auto mt-10 block bg-white py-[18px] px-8 rtl:ml-auto lg:mx-0">
                                Read More
                            </button> */}
                        </div>
                        <div className="mb-10 mr-6 w-full max-w-[480px] flex-none lg:mb-0" data-aos="fade-left" data-aos-duration="1000">
                            <img src="\assets\images\Gallary\services-design-page.png" className="rtl:rotate-y-180 xl:ml-[100px]" alt="" />
                        </div>
                    </div>
                </div>
            </div>

         
            <section className="bg-[#E5F1FF] py-12 md:py-20">
                <div className="container"><br/>
                    <div className="heading text-center">
                        <h6 className="!text-[#1759D4]  mt-18" style={{fontSize:'38px'}}>Our UI/UX Design Services</h6><br/>
                        <h4 className=''>High-Impact UI/UX Services for Your Business Growth.</h4><br/>
                    </div>

                    <div
                        className="mt-24 grid grid-cols-1 gap-7 space-y-10 text-black ltr:text-right rtl:text-left sm:grid-cols-2 sm:space-y-0 lg:grid-cols-3"
                        data-aos="fade-up"
                        data-aos-duration="1000"
                    >
                        <div className="group relative rounded-3xl border-2 border-[#1759D4] bg-white p-6 shadow-[-20px_30px_70px_rgba(219,222,225,0.4)] transition duration-500 hover:border-[#1759D4] hover:bg-secondary/20 dark:border-[#1759D4] dark:bg-[#e7f1ff] dark:bg-gradient-to-b dark:from-white/[0.04] dark:to-transparent dark:!shadow-none dark:hover:bg-transparent">
                            <Link
                                href="#"
                                className="absolute -top-[40px] flex h-[80px] w-[80px] items-center justify-center rounded-full bg-[#1759D4] text-white shadow-[0_5px_10px_rgba(180,118,229,0.4)] group-hover:bg-black group-hover:shadow-[0_5px_10px_rgba(199,55,253,0.4)] ltr:right-4 rtl:left-4 pl-3.5"
                            >
                               <svg width="52"  height="50" viewBox="0 0 52 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M18.8344 40.6688C28.1318 40.6688 35.6688 33.1318 35.6688 23.8344C35.6688 14.537 28.1318 7 18.8344 7C9.53703 7 2 14.537 2 23.8344C2 33.1318 9.53703 40.6688 18.8344 40.6688Z"
                                            fill="currentColor"
                                            fillOpacity="0.2"
                                            stroke="#ffffff"
                                            strokeWidth="3"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                        <path d="M30.5432 36.4171L37.1433 43" stroke="#66DA78" strokeWidth="3" />
                                        <path
                                            d="M30.5432 36.4171L37.1433 43"
                                            stroke="#ffffff"
                                            strokeWidth="3"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>
                            </Link>
                            <h3 className="mt-[86px] text-[24px] text-center font-extrabold dark:text-black dark:group-hover:text-white">User Research</h3><br/>
                            <p className="text-lg mt-4 font-semibold text-black dark:group-hover:text-white">
                            We start by understanding your target audience and their needs through in-depth user research.
                            </p>
                            <br/><br/><br/>
                        </div>
                        <div className="group relative rounded-3xl border-2 border-[#1759D4] bg-white p-6 shadow-[-20px_30px_70px_rgba(219,222,225,0.4)] transition duration-500 hover:border-[#1759D4] hover:bg-secondary/20 dark:border-[#1759D4] dark:bg-transparent dark:bg-[#e7f1ff] dark:from-white/[0.04] dark:to-transparent dark:!shadow-none dark:hover:bg-transparent">
                            <Link
                                href="#"
                                className="absolute -top-[40px] flex h-[80px] w-[80px] items-center justify-center rounded-full bg-[#1759D4] text-white shadow-[0_5px_10px_rgba(180,118,229,0.4)] group-hover:bg-black group-hover:shadow-[0_5px_10px_rgba(199,55,253,0.4)] ltr:right-4 rtl:left-4 pl-1"
                            >
                            <svg width="48" height="52" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="20" y="5" width="10" height="10" fill="currentColor" />
    
 
    <rect x="7" y="20" width="10" height="10" fill="currentColor" />
    
    <rect x="33" y="20" width="10" height="10" fill="currentColor" />

    <rect x="0" y="35" width="10" height="10" fill="currentColor" />
    
   
   

    <rect x="12" y="35" width="10" height="10" fill="currentColor" />
  
    <rect x="28" y="35" width="10" height="10" fill="currentColor" />
    
 
    <rect x="40" y="35" width="10" height="10" fill="currentColor" />
</svg>
                            </Link>
                            <h3 className="mt-[86px] text-[24px] font-extrabold dark:text-black dark:group-hover:text-white">Information Architecture</h3><br/>
                            <p className="text-lg mt-4 font-semibold text-black dark:group-hover:text-white">
                            We craft a logical and user-friendly information structure to ensure a smooth user journey.
                            </p>
                           
                        </div>
                        <div className="group relative rounded-3xl border-2 border-[#1759D4] bg-white p-6 shadow-[-20px_30px_70px_rgba(219,222,225,0.4)] transition duration-500 hover:border-[#1759D4] hover:bg-secondary/20 dark:border-[#1759D4] dark:bg-transparent dark:bg-[#e7f1ff] dark:from-white/[0.04] dark:to-transparent dark:!shadow-none dark:hover:bg-transparent sm:!mt-10 lg:!mt-0">
                            <Link
                                href="#"
                                className="absolute -top-[40px] flex h-[80px] w-[80px] items-center justify-center rounded-full bg-[#1759D4] text-white shadow-[0_5px_10px_rgba(180,118,229,0.4)] group-hover:bg-black group-hover:shadow-[0_5px_10px_rgba(199,55,253,0.4)] ltr:right-4 rtl:left-4"
                            >
                                 <svg width="52" height="52" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        opacity="0.4"
                                        d="M47.6663 16.9213V32.8463C47.038 32.543 46.3447 32.3263 45.5647 32.1963L44.893 32.088L44.3297 30.918C43.138 28.4913 41.188 27.083 38.9997 27.083C36.8113 27.083 34.8614 28.4913 33.6697 30.918L33.0847 32.088L32.4347 32.1963C29.8563 32.6297 27.993 34.0597 27.3213 36.0963C26.6713 38.1547 27.343 40.408 29.1847 42.2713L29.8563 42.943L29.7913 43.203C29.358 45.1313 29.5314 46.6047 29.943 47.6663H16.9213C9.03467 47.6663 4.33301 42.9647 4.33301 35.078V16.9213C4.33301 9.03468 9.03467 4.33301 16.9213 4.33301H35.078C42.9647 4.33301 47.6663 9.03468 47.6663 16.9213Z"
                                        fill="currentcolor"
                                    />
                                    <path
                                        d="M41.4271 32.3701L42.1205 33.7785C42.4671 34.4718 43.3555 35.1218 44.0921 35.2518L45.0238 35.4035C47.8621 35.8801 48.5121 37.9601 46.4971 39.9968L45.6304 40.8635C45.0454 41.4485 44.7421 42.5751 44.9155 43.3984L45.0238 43.9184C45.8038 47.3418 43.9838 48.6634 41.0154 46.8651L40.3871 46.4751C39.6288 46.0201 38.3721 46.0201 37.6137 46.4751L36.9855 46.8651C33.9955 48.6634 32.1971 47.3418 32.9771 43.9184L33.0854 43.3984C33.2588 42.5968 32.9555 41.4485 32.3705 40.8635L31.5038 39.9968C29.4888 37.9385 30.1388 35.8801 32.9771 35.4035L33.9088 35.2518C34.6671 35.1218 35.5338 34.4718 35.8804 33.7785L36.5738 32.3701C37.9171 29.6618 40.0838 29.6618 41.4271 32.3701Z"
                                        fill="currentcolor"
                                    />
                                    <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M34.9472 17.1542C35.6565 17.7041 35.7858 18.7248 35.236 19.4341L30.2213 25.9032C28.9324 27.5332 26.556 27.8305 24.898 26.5494L24.8867 26.5407L20.9292 23.4264C20.6847 23.2407 20.3436 23.287 20.158 23.5265C20.1578 23.5267 20.1581 23.5263 20.158 23.5265L15.0023 30.2201C14.4547 30.9312 13.4343 31.0636 12.7233 30.516C12.0123 29.9683 11.8799 28.948 12.4275 28.237L17.5858 21.54C18.8726 19.8747 21.2585 19.5737 22.9202 20.8577L22.9315 20.8665L26.8891 23.9807C27.1362 24.1683 27.4843 24.12 27.6687 23.8914L32.6673 17.443C33.2172 16.7337 34.2379 16.6044 34.9472 17.1542Z"
                                        fill="currentcolor"
                                    />
                                </svg>
                            </Link>
                            <h3 className="mt-[86px] text-[24px] text-center font-extrabold dark:text-black dark:group-hover:text-white">Wireframing and Prototyping</h3>
                            <p className="text-lg mt-4 font-semibold text-black dark:group-hover:text-white">
                            Our wireframes and prototypes provide a clear visual roadmap of your project's user interface.
                            </p>
                           
                        </div>
                    </div>
                </div>
            </section>

          
           

         <br/>

            <section className="bg-gradient-to-b from-transparent to-white/[55%] py-10 dark:bg-gradient-to-t dark:from-white/5 dark:to-transparent lg:py-20">
                <div className="container">
                    <div className="heading text-center">
                        <h6 className="!text-[#1759D4] " style={{fontSize:'40px'}}>Our Process </h6><br/>
                        <h4 className="!text-white" style={{fontSize:'32px'}}>Our creative team is dedicated to pushing the boundaries of design, delivering visually striking and memorable user interfaces</h4>
                    </div>
                    <div
                        className="grid grid-cols-1 justify-between gap-7 ltr:text-right rtl:text-left md:grid-cols-2"
                        data-aos="fade-up"
                        data-aos-duration="1000"
                    >
                        <div className="hover:text-white group flex gap-6 rounded-[32px] border-2 border-white/[0.1] bg-white py-10 px-6 duration-200 hover:border-[#1759D4] hover:bg-secondary/20 dark:bg-transparent dark:bg-gradient-to-b dark:from-white/5 dark:to-transparent">
                            <div className="flex-1">
                                <h3 className="text-2xl font-extrabold text-primary">Discovery and Research</h3>
                                <p className="mt-4 text-lg font-semibold">
                                We dive deep into your project, analyzing market trends and user preferences to inform our design decisions                                </p>
                            </div>
                            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[rgba(71,189,255,0.06)] text-[#47BDFF]">
                                <svg width="34" height="36" viewBox="0 0 34 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M33.6822 11.1466L31.4947 7.35783C31.2046 6.85537 30.7268 6.48878 30.1665 6.33863C29.606 6.18848 29.009 6.26709 28.5066 6.55717L26.9578 7.45191C25.4683 6.11519 23.7148 5.10614 21.8106 4.49V2.6875C21.8106 2.10734 21.5801 1.55091 21.1699 1.14071C20.7597 0.73044 20.2033 0.5 19.6231 0.5H15.2481C14.668 0.5 14.1115 0.73044 13.7013 1.14071C13.2911 1.55091 13.0606 2.10734 13.0606 2.6875V4.48342C11.1508 5.09487 9.3932 6.10602 7.90472 7.44967L6.36031 6.55717C5.85869 6.26989 5.26376 6.19282 4.70544 6.34283C4.14719 6.49284 3.67098 6.85775 3.38097 7.35783L1.19347 11.1466C0.903388 11.649 0.824779 12.2461 0.974929 12.8064C1.12508 13.3668 1.49167 13.8446 1.99406 14.1347L3.55156 15.0359C3.13149 16.9919 3.13149 19.0147 3.55156 20.9706L1.99406 21.8697C1.49167 22.1597 1.12508 22.6376 0.974929 23.1979C0.824779 23.7583 0.903388 24.3554 1.19347 24.8578L3.38097 28.6466C3.67105 29.149 4.1488 29.5156 4.70922 29.6657C5.26957 29.8159 5.86667 29.7372 6.36906 29.4472L7.91781 28.5525C9.40734 29.892 11.1628 30.902 13.0694 31.5166V33.3125C13.0694 33.8927 13.2998 34.4491 13.7101 34.8593C14.1203 35.2696 14.6767 35.5 15.2569 35.5H19.6319C20.212 35.5 20.7684 35.2696 21.1787 34.8593C21.5889 34.4491 21.8194 33.8927 21.8194 33.3125V31.5187C23.7277 30.9067 25.4844 29.8964 26.9731 28.5547L28.5153 29.4472C29.0178 29.7372 29.6148 29.8159 30.1752 29.6657C30.7356 29.5156 31.2133 29.149 31.5035 28.6466L33.691 24.8578C33.981 24.3554 34.0596 23.7583 33.9094 23.1979C33.7594 22.6376 33.3927 22.1597 32.8903 21.8697L31.335 20.9728C31.7562 19.0155 31.7562 16.991 31.335 15.0338L32.8903 14.1347C33.3912 13.8431 33.756 13.3647 33.9045 12.8045C34.0529 12.2442 33.973 11.6479 33.6822 11.1466ZM17.4356 25.6562C15.9214 25.6562 14.4411 25.2072 13.182 24.3659C11.923 23.5247 10.9417 22.3289 10.3622 20.9299C9.78268 19.5309 9.63106 17.9915 9.92646 16.5063C10.2219 15.0211 10.9511 13.657 12.0218 12.5862C13.0926 11.5155 14.4568 10.7863 15.942 10.4909C17.4272 10.1954 18.9665 10.347 20.3656 10.9266C21.7646 11.506 22.9603 12.4874 23.8016 13.7464C24.6428 15.0055 25.0919 16.4858 25.0919 18C25.0919 20.0306 24.2852 21.978 22.8494 23.4138C21.4136 24.8496 19.4662 25.6562 17.4356 25.6562Z"
                                        fill="currentcolor"
                                    />
                                </svg>
                            </div>
                        </div>
                        <div className=" hover:text-white group flex gap-6 rounded-[32px] border-2 border-white/[0.1] bg-white py-10 px-6 duration-200 hover:border-[#1759D4] hover:bg-secondary/20 dark:bg-transparent dark:bg-gradient-to-b dark:from-white/5 dark:to-transparent">
                            <div className="flex-1">
                                <h3 className="text-2xl font-extrabold  text-primary ">Design and Prototyping</h3>
                                <p className="mt-4 text-lg font-semibold">
                                Our designers create wireframes and prototypes that bring your project's vision to life
                                </p>
                            </div>
                            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[rgba(180,118,229,0.06)] text-[#47BDFF]">
                                <svg width="33" height="33" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M16.8133 0.821289C13.6502 0.821289 10.5582 1.75924 7.92817 3.51658C5.29817 5.27392 3.2483 7.77167 2.03784 10.694C0.827388 13.6163 0.51066 16.8319 1.12771 19.9343C1.74483 23.0365 3.26798 25.8862 5.50469 28.1228C7.74133 30.3596 10.591 31.8827 13.6933 32.4998C16.7956 33.1169 20.0112 32.8001 22.9335 31.5897C25.8559 30.3792 28.3536 28.3294 30.111 25.6994C31.8683 23.0694 32.8062 19.9773 32.8062 16.8142C32.8013 12.5741 31.1147 8.50915 28.1166 5.51096C25.1184 2.51278 21.0534 0.826226 16.8133 0.821289ZM26.0453 11.7498L16.9226 24.1296C16.8149 24.2725 16.6798 24.3925 16.5253 24.4827C16.3707 24.5728 16.1997 24.6312 16.0222 24.6545C15.8449 24.6778 15.6646 24.6656 15.4919 24.6185C15.3193 24.5714 15.1578 24.4904 15.0168 24.3802L8.50238 19.1718C8.36568 19.0624 8.25185 18.9272 8.16744 18.7738C8.08302 18.6204 8.02962 18.4519 8.01036 18.278C7.97135 17.9265 8.07356 17.5741 8.29448 17.2979C8.51539 17.0219 8.83691 16.8449 9.18834 16.8059C9.36232 16.7867 9.53844 16.8018 9.70658 16.8506C9.87471 16.8993 10.0316 16.9807 10.1683 17.09L15.6005 21.4361L23.8995 10.1731C23.9994 10.0232 24.1287 9.89511 24.2795 9.79658C24.4303 9.69798 24.5996 9.63101 24.777 9.59972C24.9544 9.56843 25.1363 9.57344 25.3118 9.6144C25.4873 9.65542 25.6525 9.73156 25.7977 9.83823C25.9429 9.94489 26.065 10.0799 26.1565 10.2351C26.248 10.3903 26.3071 10.5624 26.3303 10.7411C26.3535 10.9198 26.3401 11.1012 26.2911 11.2746C26.2421 11.448 26.1585 11.6096 26.0453 11.7498Z"
                                        fill="currentcolor"
                                    />
                                </svg>
                            </div>
                        </div>
                        <div className="hover:text-white group flex gap-6 rounded-[32px] border-2 border-white/[0.1] bg-white py-10 px-6 duration-200 hover:border-[#1759D4] hover:bg-secondary/20 dark:bg-transparent dark:bg-gradient-to-b dark:from-white/5 dark:to-transparent">
                            <div className="flex-1">
                                <h3 className="text-2xl font-extrabold text-primary">Testing and Refinement</h3>
                                <p className="mt-4 text-lg font-semibold">
                                We rigorously test our designs to ensure they meet your project's goals and user needs                                </p>
                            </div>
                            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[rgba(180,118,229,0.06)] text-[#47BDFF]">
                                <svg width="39" height="23" viewBox="0 0 39 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    
                                <path d="M24.398 22.1968C24.8033 22.1968 25.2086 22.0721 25.5827 21.8297L18.398 14.8255C17.3672 15.7867 15.961 16.3372 14.5186 16.3372C13.0763 16.3372 11.6702 15.7867 10.6394 14.8255L3.45465 21.8297C3.82871 22.0721 4.23397 22.1968 4.63924 22.1968H24.398Z" fill="currentcolor" />
                                <line x1="14.5" y1="10" x2="14.5" y2="12" stroke="currentColor" stroke-width="9" stroke-linecap="round" />
                                <polygon points="9,7  14,1 20,7" fill="currentColor" />

 
                                </svg>
                            </div>
                        </div>
                        <div className="hover:text-white group flex gap-6 rounded-[32px] border-2 border-white/[0.1] bg-white py-10 px-6 duration-200 hover:border-[#1759D4] hover:bg-secondary/20 dark:bg-transparent dark:bg-gradient-to-b dark:from-white/5 dark:to-transparent">
                            <div className="flex-1">
                                <h3 className="text-2xl font-extrabold text-primary">Delivery and Launch</h3>
                                <p className="mt-4 text-lg font-semibold">
                                Once the design is perfected, we assist in the implementation and launch of your user-friendly digital product
                                </p>
                            </div>
                            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[rgba(71,189,255,0.06)] text-[#47BDFF]">
                                <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M41.7656 39.9469C41.7656 40.1702 41.8543 40.3843 42.0122 40.5421C42.17 40.7 42.3842 40.7887 42.6074 40.7887H47.3563C47.4942 40.7885 47.6299 40.7547 47.7516 40.6898C47.8732 40.6249 47.9772 40.5313 48.0541 40.4169C48.1311 40.3025 48.1788 40.171 48.193 40.0339C48.2073 39.8967 48.1876 39.7582 48.1357 39.6305C47.6363 38.3821 46.81 37.2913 45.7437 36.4723C44.6774 35.6533 43.4103 35.1364 42.0754 34.9758C41.9358 34.9589 41.7941 34.9773 41.6634 35.0293C41.5328 35.0813 41.4172 35.1652 41.3273 35.2734C41.2374 35.3815 41.176 35.5105 41.1488 35.6485C41.1216 35.7865 41.1293 35.9291 41.1714 36.0633C41.5654 37.3202 41.7657 38.6297 41.7656 39.9469Z"
                                        fill="currentcolor"
                                    />
                                    <path
                                        d="M16.2911 35.9898C16.3316 35.8638 16.3418 35.7299 16.3208 35.5991C16.2999 35.4683 16.2483 35.3443 16.1704 35.2372C16.0925 35.13 15.9904 35.0428 15.8724 34.9826C15.7544 34.9224 15.6239 34.8908 15.4914 34.8906H15.4712C13.9632 34.8913 12.4899 35.3432 11.2408 36.1879C9.99161 37.0327 9.02365 38.2318 8.46148 39.631C8.40989 39.7588 8.39057 39.8974 8.40506 40.0344C8.41955 40.1714 8.46743 40.3028 8.54457 40.417C8.62171 40.5312 8.72566 40.6247 8.84739 40.6894C8.96905 40.754 9.10478 40.7877 9.24254 40.7876H14.8316C15.0548 40.7876 15.2688 40.6989 15.4267 40.5411C15.5845 40.3832 15.6732 40.1691 15.6732 39.9459C15.6726 38.6031 15.8811 37.2685 16.2911 35.9898Z"
                                        fill="currentcolor"
                                    />
                                    <path
                                        d="M24.6457 29.5232C24.7113 29.5634 24.7645 29.6207 24.7997 29.689C24.835 29.7573 24.8509 29.8339 24.8457 29.9105C24.8405 29.9872 24.8144 30.061 24.7703 30.1239C24.7261 30.1867 24.6655 30.2364 24.5952 30.2673C22.6983 31.0772 21.081 32.4262 19.9438 34.147C18.8066 35.8676 18.1996 37.8844 18.1982 39.947C18.1982 40.1702 18.2869 40.3843 18.4448 40.5421C18.6026 40.7 18.8167 40.7886 19.0399 40.7886H38.3993C38.6225 40.7886 38.8366 40.7 38.9945 40.5421C39.1523 40.3843 39.241 40.1702 39.241 39.947C39.2375 37.8813 38.6266 35.8623 37.4844 34.1412C36.3422 32.4201 34.7191 31.0729 32.817 30.2673C32.7459 30.2364 32.6847 30.1866 32.64 30.1232C32.5953 30.0599 32.5689 29.9855 32.5637 29.9081C32.5585 29.8308 32.5746 29.7534 32.6104 29.6847C32.6462 29.6159 32.7002 29.5583 32.7666 29.5182C34.268 28.6264 35.4349 27.2659 36.0877 25.6462C36.7405 24.0264 36.843 22.237 36.3796 20.5533C35.9161 18.8695 34.9122 17.3847 33.5225 16.3272C32.1327 15.2697 30.434 14.698 28.6877 14.7002C26.9414 14.7024 25.2441 15.2783 23.857 16.3393C22.4699 17.4002 21.4698 18.8875 21.0105 20.5724C20.5512 22.2573 20.6582 24.0464 21.315 25.6645C21.9718 27.2826 23.1421 28.6401 24.6457 29.5282V29.5232ZM24.0902 22.67C24.0902 22.3517 24.1258 22.0344 24.1963 21.7239C24.2255 21.594 24.2852 21.4728 24.3703 21.3705C24.4555 21.2681 24.5637 21.1874 24.6861 21.135C24.8086 21.0825 24.9416 21.0599 25.0745 21.0689C25.2073 21.078 25.3362 21.1184 25.4504 21.1869C27.064 22.1583 28.9119 22.6711 30.7952 22.67C31.2877 22.6696 31.7795 22.633 32.2666 22.5606C32.3981 22.5409 32.5324 22.5527 32.6585 22.5949C32.7846 22.6372 32.8989 22.7086 32.992 22.8036C33.0852 22.8985 33.1545 23.0142 33.1943 23.1411C33.2341 23.2679 33.2433 23.4025 33.2211 23.5336C33.0071 24.6607 32.3802 25.6675 31.463 26.3567C30.5459 27.0459 29.4045 27.368 28.2624 27.26C27.1202 27.152 26.0595 26.6216 25.2878 25.7727C24.5161 24.9236 24.089 23.8173 24.0902 22.67Z"
                                        fill="currentcolor"
                                    />
                                    <path
                                        d="M41.1266 33.2135C42.0932 33.2194 43.0377 32.9244 43.8292 32.3695C44.6206 31.8146 45.2198 31.0272 45.5438 30.1164C45.8677 29.2057 45.9003 28.2168 45.637 27.2868C45.3737 26.3567 44.8276 25.5315 44.0744 24.9257C43.3211 24.32 42.3981 23.9635 41.4331 23.9058C40.4682 23.8481 39.5093 24.092 38.6893 24.6037C37.8691 25.1154 37.2286 25.8695 36.8564 26.7616C36.4841 27.6537 36.3986 28.6394 36.6117 29.5823C36.848 30.6062 37.4216 31.5209 38.2405 32.1795C39.0594 32.8381 40.0758 33.2023 41.1266 33.2135Z"
                                        fill="currentcolor"
                                    />
                                    <path
                                        d="M15.4712 33.2129C18.0279 33.2129 20.1006 31.1402 20.1006 28.5835C20.1006 26.0267 18.0279 23.9541 15.4712 23.9541C12.9144 23.9541 10.8418 26.0267 10.8418 28.5835C10.8418 31.1402 12.9144 33.2129 15.4712 33.2129Z"
                                        fill="currentcolor"
                                    />
                                    <path
                                        d="M28.2989 28.5546C31.1994 28.5546 33.5508 26.2033 33.5508 23.3027C33.5508 20.4022 31.1994 18.0508 28.2989 18.0508C25.3983 18.0508 23.047 20.4022 23.047 23.3027C23.047 26.2033 25.3983 28.5546 28.2989 28.5546Z"
                                        fill="currentcolor"
                                    />
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>          <br/>
                <br/>

            </section>

           

           
        </div>
    );
};

export default Marketing;

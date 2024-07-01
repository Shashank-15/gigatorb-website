import Link from 'next/link';
import Head from 'next/head';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Navigation, Autoplay, Virtual } from 'swiper';
import { useSelector } from 'react-redux';
import { IRootState } from '../store';
import Testimonial from '../components/Testimonial';
import CountUp from 'react-countup';

const Healthcare = () => {
    const isRtl = useSelector((state: IRootState) => state.themeConfig.direction) === 'rtl' ? true : false;
    const feedbacks = [
        {
            id: 1,
            name: '',
            role: '',
            color:'',
            thumbnail: '/assets/images/testimonia.png',
            message: 'I had a great experience with Gigatorb. Thank you!!',
        },
    ];

    return (
        <div>
            <Head>
                <title>Cúram | Gigatorb</title>
            </Head>
            <div className="overflow-x-hidden">
                <div className="relative z-[1] overflow-hidden bg-black pt-[82px] sm:-mx-[250px] sm:rounded-b-[50%] lg:-mx-[150px] lg:pt-[106px]">
                    <div className="relative">
                        <img
                            src="/assets/images/banner-lefticon.png"
                            alt="banner-lefticon"
                            className="absolute left-0 top-20 sm:left-[250px] lg:left-[150px]"
                        />
                        <img
                            src="/assets/images/banner-rightIcon.png"
                            alt="banner-rightIcon"
                            className="absolute right-0 -top-4 sm:right-[250px] lg:right-[150px]"
                        />
                        <div className="container bg-[url(/assets/images/world-map.png)] bg-cover">
                            <div className="relative">
                                <div className="relative w-full pb-14 pt-14 text-center text-white md:max-w-[550px] ltr:md:text-left rtl:md:text-right lg:max-w-[760px] lg:pb-52 xl:pt-36">
                                    <h2 className="relative z-10 text-3xl font-extrabold sm:text-5xl lg:text-[70px] lg:leading-[89px]">
                                    Merative  
                                        <span className="italic text-[#e7f1ff]"> Cúram</span> <span className="italic text-[#1759D4]"> Social Program Management (SPM)</span>{' '}
                                        Implementation Services
                                    </h2>
                                  
                                    <span className="absolute top-[60px] -right-[140px] hidden rtl:right-auto rtl:-left-[170px] lg:block xl:top-[150px] ltr:xl:-right-[150px]">
                                        <img src="/assets/images/healthcare/bgimagehelt.svg" className="rtl:rotate-y-180" alt="" />
                                    </span>
                                </div>
                               
                            </div>
                        </div>
                    </div>
                </div>

                <section className="bg-gradient-to-t  bg-[#e7f1ff] from-white/60 to-transparent py-12 dark:from-white/[0.02] lg:py-24">
                    <div className="container"><br/>
                        <div className="flex flex-col items-center md:flex-row">
                            <div className="mx-auto w-full mr-12 max-w-[732px]">
                                <img src="\assets\images\Gallary\curam_logo.jpg" className="rtl:rotate-y-180" alt="" />
                            </div>
                            <div className="ltr:text-right rtl:text-left">
                                <div className="heading mb-0 text-center rtl:text-left ltr:sm:text-right">
                                    <h6 className="!text-black" style={{fontSize:'30px'}}>Our Specialties</h6>
                                    <h4 style={{color:'#1759D4'}}>Cúram SPM Implementation Services</h4>
                                </div>
                                <p className="mt-5 text-md font-semibold text-black">
                                We provide a comprehensive suite of design, development, and implementation services for the 
                                Merative Cúram SPM platform, utilizing an agile delivery methodology and either on-site or offshore delivery options.
                                 By prioritizing simplicity and scalability in our implementation approach, we can help you achieve significant operational cost savings of
                                 up to 30% and effort savings of 30-40%.
                                </p>
                                <br/>
                                <br/>
                            </div>
                        </div>
                    </div>
                </section>

              
             
                
            </div>
        </div>
    );
};

export default Healthcare;

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation, Autoplay } from 'swiper';
import Link from 'next/link';
import { useSelector } from 'react-redux';
import { IRootState } from '../store';

const ProjectSlider = (props: any) => {
    const isRtl = useSelector((state: IRootState) => state.themeConfig.direction) === 'rtl' ? true : false;

    return (
        <section className="py-15 h-screen bg-cover bg-center lg:py-[80px]" style={{ backgroundImage: 'url("section2-bg.png")', height: 'auto' }}>
            <div className="heading text-center  rtl:lg:text-right">
                <h6 style={{ color: 'white' ,fontSize:'30',marginBottom:'14px'}}>{props.title1}</h6>
                <h4 style={{ color: '#1759D4' ,fontSize:48}}>{props.title2}</h4>
            </div><br/>
            <div className="swiper project-slider px-6">
                <div className="swiper-wrapper">
                    <Swiper
                        modules={[Navigation, Autoplay]}
                        slidesPerView="auto"
                        spaceBetween={30}
                        loop={true}
                        autoplay={{ delay: 2500, disableOnInteraction: false }}
                        navigation={{
                            nextEl: '.project-slider-button-next',
                            prevEl: '.project-slider-button-prev',
                        }}
                        breakpoints={{
                            600: {
                                slidesPerView: 2,
                            },
                            768: {
                                slidesPerView: 3,
                            },
                            1000: {
                                slidesPerView: 4,
                            },
                            1200: {
                                slidesPerView: 5,
                            },
                        }}
                        dir={isRtl ? 'rtl' : 'ltr'}
                        key={isRtl ? 'true' : 'false'}
                    >
                        <SwiperSlide>
                            <div className="dark:bg-gray-dark relative rounded-3xl border border-transparent bg-white transition duration-500 hover:border-[#1759D4] hover:bg-secondary/20  text-black hover:text-white">
                                <img
                                    src="\assets\images\Gallary\Screenshot_31.png"
                                    alt="Project"
                                    className="h-52 w-full rounded-t-3xl object-cover"
                                    style={{ objectFit: 'cover' }}
                                />
                                <div className="p-5 text-sm font-bold">
                                    {/* <h6 className="mb-1 text-black line-clamp-1 dark:text-white">Twn - Child welfare management</h6> */}
                                    <p>TWN - Child Welfare Management</p>
                                    <p>Web Application</p>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="dark:bg-gray-dark relative rounded-3xl border border-transparent bg-white transition duration-500 hover:border-[#1759D4] hover:bg-secondary/20 text-black hover:text-white">
                                <img
                                    src="\assets\images\Gallary\Screenshot_11.png"
                                    alt="Project"
                                    className="h-52 w-full rounded-t-3xl object-cover"
                                    style={{ objectFit: 'cover' }}
                                />
                                <div className="p-5 text-sm font-bold">
                                    {/* <h6 className="mb-1 text-black line-clamp-1 dark:text-white">Zagime - Child welfare management</h6> */}
                                    <p >Zagime - Child Welfare Management</p>
                                    <p>Web Application</p>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="dark:bg-gray-dark relative rounded-3xl border border-transparent bg-white transition duration-500 hover:border-[#1759D4] hover:bg-secondary/20 text-black hover:text-white">
                                <img
                                    src="\assets\images\Gallary\Screenshot _21.png"
                                    alt="Project"
                                    className="h-52 w-full rounded-t-3xl object-cover"
                                    style={{ objectFit: 'cover' }}
                                />
                                <div className="p-5 text-sm font-bold">
                                    {/* <h6 className="mb-1 text-black line-clamp-1 dark:text-white">Bhawna Granites - Marble Website</h6> */}
                                    <p>Bhawna Granites - Marble Website</p>
                                    <p>Website</p>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="dark:bg-gray-dark relative rounded-3xl border border-transparent bg-white transition duration-500 hover:border-[#1759D4] hover:bg-secondary/20 text-black hover:text-white">
                                <Link href="http://www.portcosts.com" className="absolute top-0 h-full w-full ltr:left-0 rtl:right-0"></Link>
                                <img
                                    src="\assets\images\Gallary\portcosts.png"
                                    alt="Project"
                                    className="h-52 w-full rounded-t-3xl object-cover"
                                    style={{ objectFit: 'cover' }}
                                />
                                <div className="p-5 text-sm font-bold">
                                    {/* <h6 className="mb-1 text-black line-clamp-1 dark:text-white">Port - Cost Simulator</h6> */}
                                    <p>Port - Cost Simulator</p>
                                    <p>Product</p>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="dark:bg-gray-dark relative rounded-3xl border border-transparent bg-white transition duration-500 hover:border-[#1759D4] hover:bg-secondary/20 text-black hover:text-white">
                                <img
                                    src="\assets\images\Gallary\EPO-Image.png"
                                    alt="Project"
                                    className="h-52 w-full rounded-t-3xl object-cover"
                                    style={{ objectFit: 'cover' }}
                                />
                                <div className="p-5 text-sm font-bold">
                                    {/* <h6 className="mb-1 text-black line-clamp-1 dark:text-white">EPO - Fuel Management Website</h6> */}
                                    <p>EPO - Fuel Management System</p>
                                    <p>Product</p>
                                </div>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
            {/* p-code st */}
            
            <br /><br/>
            <div className="container">
                <div className="mb-7 flex flex-col items-center justify-center lg:mb-0 lg:flex-row ">
                    <div className="flex items-center justify-end gap-4">
                        {/* <Link
                            href="/portfolio-detail"
                            className="text-sm font-extrabold text-black transition hover:text-secondary dark:text-white dark:hover:text-secondary"
                        >
                            View All
                        </Link> */}
                        <div>
                            <button
                                type="button"
                                className="project-slider-button-prev flex h-10 w-10 items-center justify-center rounded-full bg-white transition hover:bg-[#e5f1ff] dark:bg-white dark:hover:bg-[#e5f1ff]"
                            >
                                <svg
                                    width="7"
                                    height="12"
                                    viewBox="0 0 7 12"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="text-black text-blue-600 rtl:rotate-180"
                                    style={{ color: '#1759D4' }}
                                >
                                    <path
                                        d="M5.95007 1.2002L1.48924 5.3424C1.06317 5.73803 1.06317 6.41236 1.48924 6.80799L5.95007 10.9502"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                    ></path>
                                </svg>
                            </button>
                        </div>
                        <div>
                            <button
                                type="button"
                                className="project-slider-button-next text-p flex h-10 w-10 items-center justify-center rounded-full bg-white transition hover:bg-[#e5f1ff] dark:bg-white dark:hover:bg-[#e5f1ff]"
                            >
                                <svg
                                    width="7"
                                    height="12"
                                    viewBox="0 0 7 12"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="text-black hover:text-white rtl:rotate-180 dark:text-white"
                                    style={{ color: '#1759D4' }}
                                >
                                    <path
                                        d="M1.05005 10.7998L5.51089 6.6576C5.93695 6.26197 5.93695 5.58764 5.51089 5.19201L1.05005 1.0498"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                    ></path>
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            {/* <div className="overflow-x-auto">
                        <ul className="flex gap-8 lg:gap-10 font-bold mb-10 mt-10 lg:mt-0 w-[700px] md:w-auto">
                            <li className="text-secondary"><button type="button">All Work</button></li>
                            <li><button type="button" className="hover:text-secondary transition">Design</button></li>
                            <li><button type="button" className="hover:text-secondary transition">Website</button></li>
                            <li><button type="button" className="hover:text-secondary transition">Mobile App</button></li>
                            <li><button type="button" className="hover:text-secondary transition">Web Application</button></li>
                            <li><button type="button" className="hover:text-secondary transition">Ecommerce</button></li>
                        </ul>
                    </div>  */}
        </section>
    );
};

export default ProjectSlider;

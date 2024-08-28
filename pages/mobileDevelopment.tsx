import Link from 'next/link';
import CountUp from 'react-countup';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Autoplay, Navigation } from 'swiper';
import { useSelector } from 'react-redux';
import { IRootState } from '../store';
import ClientSlider from '../components/ClientSlider';
import Head from 'next/head';

const Application = () => {
    const isRtl = useSelector((state: IRootState) => state.themeConfig.direction) === 'rtl' ? true : false;
    return (
        <div>
            <Head>
                <title>Mobile Development | Gigatorb</title>
            </Head>
            <section className="relative">
                <div className="h-[340px] w-full md:h-auto">
                    <img src="/assets/images/application/application_bg.jpg" className="h-full w-full object-cover object-top" alt="" />
                </div>
                <div className="absolute left-1/2 top-[58px] w-full -translate-x-1/2 text-center text-white lg:top-[98px] xl:top-28">
                    <h2 className="text-4xl font-black italic sm:text-6xl md:text-6xl xl:text-[150px]">a place where</h2>
                    <p className="mx-auto inline-flex max-w-[345px] items-center justify-center bg-[url(/assets/images/application/label-bg.png)] bg-[length:100%_100%] bg-center bg-no-repeat px-3 py-2 text-xs font-bold uppercase md:h-14 md:p-5 md:text-xl lg:mt-5 lg:text-2xl xl:mt-8 xl:h-[90px] xl:px-10 xl:text-[40px]">
                        ideas grow
                    </p>
                </div>
            </section>
            <section className="mt-14 mb-10 md:mt-20">
                <div className="container">
                    <div className="heading mb-12 text-center md:!mb-[90px] lg:max-w-[584px] ltr:lg:text-left rtl:lg:text-right">
                        <h4 className="!font-black">
                        Our <span className="bg-secondary p-1 text-white">Process</span> 
                        </h4>
                        <p className="mt-5 text-lg font-medium">
                        In a world that's increasingly mobile-driven, we excel at crafting innovative and user-centric mobile applications to bring your ideas to life.                        </p>
                    </div>
                    <div className="grid grid-cols-1 gap-[30px] sm:grid-cols-2 lg:grid-cols-3" data-aos="fade-up" data-aos-duration="1000">
                        <div className="rounded-[10px] border-2 border-transparent bg-white p-[30px] shadow-[-20px_30px_70px_rgba(219,222,225,0.4)] duration-200 hover:border-2 hover:border-secondary hover:bg-secondary/20 dark:bg-gray-dark dark:shadow-none">
                            <span>
                              
                                <svg width="52" height="50" viewBox="0 0 52 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M18.8344 40.6688C28.1318 40.6688 35.6688 33.1318 35.6688 23.8344C35.6688 14.537 28.1318 7 18.8344 7C9.53703 7 2 14.537 2 23.8344C2 33.1318 9.53703 40.6688 18.8344 40.6688Z"
                                            fill="#66DA78"
                                            fillOpacity="0.2"
                                            stroke="#66DA78"
                                            strokeWidth="3"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                        <path d="M30.5432 36.4171L37.1433 43" stroke="#66DA78" strokeWidth="3" />
                                        <path
                                            d="M30.5432 36.4171L37.1433 43"
                                            stroke="#66DA78"
                                            strokeWidth="3"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>
                            </span>
                            <h3 className="mt-7 text-[22px] font-extrabold text-black dark:text-white">Consultation</h3>
                            <p className="mt-4 text-lg font-semibold">We start by understanding your app concept, goals, and target audience to develop a tailored strategy.</p>
                        </div>
                        <div className="mt-0 lg:-mt-7">
                            <div className="rounded-[10px] border-2 border-transparent bg-white p-[30px] shadow-[-20px_30px_70px_rgba(219,222,225,0.4)] duration-200 hover:border-2 hover:border-secondary hover:bg-secondary/20 dark:bg-gray-dark dark:shadow-none">
                                <span>
                                   
                                    <svg width="44" height="40" viewBox="0 0 44 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M31.8178 38C37.9005 38.0168 42 33.0191 42 26.8767V13.14C42 6.99765 37.9005 2 31.8178 2H12.1823C6.09958 2 2 6.99765 2 13.14V26.8767C2 33.0191 6.09958 38.0168 12.1823 38H31.8178Z"
                                        fill="#FFC452"
                                        fillOpacity="0.2"
                                        stroke="#FFC452"
                                        strokeWidth="3"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                    <path
                                        d="M33.8045 13.7019L24.9179 20.928C23.2389 22.26 20.8767 22.26 19.1976 20.928L10.2361 13.7019"
                                        stroke="#FFC452"
                                        strokeWidth="3"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                                </span>
                                <h3 className="mt-7 text-[22px] font-extrabold text-black dark:text-white">Design</h3>
                                <p className="mt-4 text-lg font-semibold">Our designers create wireframes and prototypes that bring your app's design and user experience to life.</p>
                            </div>
                        </div>
                        <div className="mt-0 lg:-mt-14">
                            <div className="rounded-[10px] border-2 border-transparent bg-white p-[30px] shadow-[-20px_30px_70px_rgba(219,222,225,0.4)] duration-200 hover:border-2 hover:border-secondary hover:bg-secondary/20 dark:bg-gray-dark dark:shadow-none">
                                <span>
                                <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            opacity="0.2"
                                            fillRule="evenodd"
                                            clipRule="evenodd"
                                            d="M28.7514 11.3335H11.2482C5.15482 11.3335 1.33333 15.6506 1.33333 21.7602V38.2397C1.33333 44.3493 5.13862 48.6664 11.2482 48.6664H28.7413C34.8609 48.6664 38.6642 44.3493 38.6642 38.2397V21.7602C38.6723 15.6506 34.867 11.3335 28.7514 11.3335Z"
                                            fill="#FF5B5D"
                                        />
                                        <path
                                            fillRule="evenodd"
                                            clipRule="evenodd"
                                            d="M3.03026 13.3468C5.02522 11.2055 7.87114 10 11.2484 10H28.7516C32.1388 10 34.9871 11.2047 36.9807 13.3474C38.9645 15.4795 40.0024 18.4314 39.998 21.762V38.2398C39.998 41.5697 38.9585 44.5212 36.9739 46.6529C34.9793 48.7955 32.1306 50 28.7415 50H11.2484C7.86381 50 5.01728 48.795 3.02366 46.6527C1.04009 44.5212 0 41.5698 0 38.2398V21.7602C0 18.4287 1.04502 15.4776 3.03026 13.3468ZM4.98168 15.1649C3.53284 16.72 2.66712 18.9822 2.66712 21.7602V38.2398C2.66712 41.0193 3.52968 43.2814 4.97615 44.8358C6.41261 46.3793 8.52347 47.3329 11.2484 47.3329H28.7415C31.4721 47.3329 33.5849 46.3789 35.0218 44.8356C36.4687 43.2814 37.3309 41.0194 37.3309 38.2398V21.7602V21.7585C37.3346 18.9795 36.4739 16.7181 35.0281 15.1642C33.5923 13.621 31.4801 12.6671 28.7516 12.6671H11.2484C8.53234 12.6671 6.42081 13.6202 4.98168 15.1649Z"
                                            fill="#FF5B5D"
                                        />
                                        <path
                                            d="M12.371 33.1768C12.371 36.7867 16.2934 39.0301 19.4049 37.1999L24.8053 34.0234C27.8733 32.2187 27.8733 27.7818 24.8053 25.9772L19.4049 22.8006C16.2934 20.9705 12.371 23.2139 12.371 26.8238V33.1768Z"
                                            fill="white"
                                        />
                                        <path
                                            fillRule="evenodd"
                                            clipRule="evenodd"
                                            d="M18.0527 34.901L23.4531 31.7245C24.7679 30.9511 24.7679 29.0496 23.4531 28.2761L18.0527 25.0996C16.7192 24.3152 15.0382 25.2767 15.0382 26.8238V33.1768C15.0382 34.7239 16.7192 35.6854 18.0527 34.901ZM19.4049 37.1999C16.2934 39.0301 12.371 36.7867 12.371 33.1768V26.8238C12.371 23.2139 16.2934 20.9705 19.4049 22.8006L24.8053 25.9772C27.8733 27.7818 27.8733 32.2187 24.8053 34.0234L19.4049 37.1999Z"
                                            fill="#FF5B5D"
                                        />
                                    </svg>
                                </span>
                                <h3 className="mt-7 text-[22px] font-extrabold text-black dark:text-white">Development</h3>
                                <p className="mt-4 text-lg font-semibold">We employ cutting-edge tools and best practices to create mobile apps that are both highly functional and scalable.</p>
                            </div>
                        </div>
                        <div className="rounded-[10px] border-2 border-transparent bg-white p-[30px] shadow-[-20px_30px_70px_rgba(219,222,225,0.4)] duration-200 hover:border-2 hover:border-secondary hover:bg-secondary/20 dark:bg-gray-dark dark:shadow-none">
                            <span>
                                <svg width="62" height="60" viewBox="0 0 62 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M4.95645 13C3.32426 13 2 14.3465 2 16.0041V17.7722C2 19 2.46691 20.1808 3.30212 21.0689L12.4552 30.8015L12.4592 30.7954C14.2263 32.6044 15.2205 35.0498 15.2205 37.5996V46.2353C15.2205 46.8124 15.8242 47.1808 16.3253 46.9086L21.5378 44.0682C22.3247 43.6384 22.8158 42.8036 22.8158 41.897V37.5771C22.8158 35.0416 23.7959 32.6064 25.5468 30.8015L34.6999 21.0689C35.5331 20.1808 36 19 36 17.7722V16.0041C36 14.3465 34.6777 13 33.0456 13H4.95645Z"
                                        fill="#FF8A1D"
                                        fillOpacity="0.2"
                                        stroke="#FF8A1D"
                                        strokeWidth="3"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                            </span>
                            <h3 className="mt-7 text-[22px] font-extrabold text-black dark:text-white">Testing</h3>
                            <p className="mt-4 text-lg font-semibold">We conduct thorough testing to identify and fix any issues, ensuring a smooth user experience..</p>
                        </div>
                        <div className="mt-0 lg:-mt-4">
                            <div className="rounded-[10px] border-2 border-transparent bg-white p-[30px] shadow-[-20px_30px_70px_rgba(219,222,225,0.4)] duration-200 hover:border-2 hover:border-secondary hover:bg-secondary/20 dark:bg-gray-dark dark:shadow-none">
                                <span>
                                <svg width="52" height="50" viewBox="0 0 52 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M32.7932 33.5173C32.7932 33.5173 10.5172 28.9311 7.8966 28.2759C5.27588 27.6208 2 24.1858 2 19.7587C2 15.3314 5.27588 11.8966 7.8966 11.2414C10.5172 10.5862 32.7932 6 32.7932 6"
                                            fill="#016BFF"
                                            fillOpacity="0.2"
                                        />
                                        <path
                                            d="M32.7932 33.5173C32.7932 33.5173 10.5172 28.9311 7.8966 28.2759C5.27588 27.6208 2 24.1858 2 19.7587C2 15.3314 5.27588 11.8966 7.8966 11.2414C10.5172 10.5862 32.7932 6 32.7932 6"
                                            stroke="#016BFF"
                                            strokeWidth="3"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                        <path
                                            d="M40.0002 19.7587C40.0002 26.9103 36.3312 33.5173 32.7933 33.5173C29.2554 33.5173 25.5864 26.9103 25.5864 19.7587C25.5864 12.6069 29.2554 6 32.7933 6C36.3312 6 40.0002 12.6069 40.0002 19.7587Z"
                                            fill="#016BFF"
                                            fillOpacity="0.2"
                                            stroke="#016BFF"
                                            strokeWidth="3"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                        <path
                                            d="M7.2417 28.931V38.7585C7.2417 41.6534 9.58834 44 12.4831 44H13.7935C16.6883 44 19.0348 41.6534 19.0348 38.7585V31.5516"
                                            fill="#016BFF"
                                            fillOpacity="0.2"
                                        />
                                        <path
                                            d="M7.2417 28.931V38.7585C7.2417 41.6534 9.58834 44 12.4831 44H13.7935C16.6883 44 19.0348 41.6534 19.0348 38.7585V31.5516"
                                            stroke="#016BFF"
                                            strokeWidth="3"
                                        />
                                        <path
                                            d="M7.2417 28.931V38.7585C7.2417 41.6534 9.58834 44 12.4831 44H13.7935C16.6883 44 19.0348 41.6534 19.0348 38.7585V31.5516"
                                            fill="#016BFF"
                                            fillOpacity="0.2"
                                        />
                                        <path
                                            d="M7.2417 28.931V38.7585C7.2417 41.6534 9.58834 44 12.4831 44H13.7935C16.6883 44 19.0348 41.6534 19.0348 38.7585V31.5516"
                                            stroke="#016BFF"
                                            strokeWidth="3"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>
                                  
                                </span>
                                <h3 className="mt-7 text-[22px] font-extrabold text-black dark:text-white">Launch</h3>
                                <p className="mt-4 text-lg font-semibold">Once your app is perfect, we assist with the launch, making it available to your audience on app stores</p>
                            </div>
                        </div>
                        <div className="mt-0 lg:-mt-11">
                            <div className="rounded-[10px] border-2 border-transparent bg-white p-[30px] shadow-[-20px_30px_70px_rgba(219,222,225,0.4)] duration-200 hover:border-2 hover:border-secondary hover:bg-secondary/20 dark:bg-gray-dark dark:shadow-none">
                                <span>
                                    <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            opacity="0.2"
                                            d="M1.26367 46.2398V28.7516H3.76198C5.4024 28.7516 7.02673 28.4285 8.54227 27.8008C10.0578 27.173 11.4349 26.2529 12.5948 25.0929C13.7547 23.933 14.6749 22.5559 15.3026 21.0404C15.9304 19.5248 16.2535 17.9005 16.2535 16.2601V15.0109C16.2535 14.0171 16.6484 13.0639 17.3511 12.3611C18.0539 11.6583 19.0071 11.2635 20.001 11.2635C20.9948 11.2635 21.948 11.6583 22.6508 12.3611C23.3536 13.0639 23.7484 14.0171 23.7484 15.0109V21.2567C23.7484 21.9193 24.0116 22.5548 24.4802 23.0232C24.9487 23.4918 25.5841 23.755 26.2467 23.755H31.2433C32.2907 23.7551 33.3265 23.9748 34.2837 24.3997C35.2411 24.8247 36.0987 25.4457 36.8012 26.2225C37.5038 26.9993 38.0357 27.9147 38.3628 28.9097C38.6898 29.9047 38.8047 30.9573 38.6999 31.9994L37.9255 39.7425C37.6777 42.2075 36.5232 44.4925 34.6859 46.1544C32.8487 47.8162 30.4596 48.7364 27.9822 48.7364H17.6559C16.7276 48.7362 15.8038 48.6066 14.9111 48.3516L8.8552 46.6245C7.96253 46.3695 7.03873 46.24 6.1104 46.2398H1.26367Z"
                                            fill="#6B2EFF"
                                        />
                                        <path
                                            fillRule="evenodd"
                                            clipRule="evenodd"
                                            d="M20.0008 12.5271C19.342 12.5271 18.7102 12.7888 18.2444 13.2546C17.7786 13.7204 17.5169 14.3522 17.5169 15.011V16.2601C17.5169 18.0665 17.1611 19.8551 16.4698 21.524C15.7786 23.1928 14.7654 24.7091 13.4882 25.9864C12.2109 27.2637 10.6945 28.2769 9.02568 28.9682C7.35681 29.6594 5.5682 30.0152 3.76184 30.0152H2.52707V44.9763H6.11027C7.15567 44.9766 8.19634 45.1224 9.20161 45.4095C9.20141 45.4094 9.20174 45.4095 9.20161 45.4095L15.2575 47.1366C16.0373 47.3594 16.8448 47.4727 17.6558 47.4729C17.6556 47.4729 17.6559 47.4729 17.6558 47.4729H27.9821C30.1463 47.4729 32.2333 46.6691 33.8382 45.2174C35.443 43.7658 36.4515 41.7698 36.6681 39.6168L37.4425 31.8737C37.5296 31.0073 37.4342 30.1316 37.1623 29.3043C36.8904 28.477 36.4481 27.7159 35.864 27.0701C35.2799 26.4242 34.5668 25.9079 33.7709 25.5546C32.9751 25.2013 32.114 25.0187 31.2432 25.0186C31.2433 25.0186 31.2431 25.0186 31.2432 25.0186H26.2466C25.2489 25.0186 24.292 24.6223 23.5866 23.9168C22.8811 23.2113 22.4848 22.2545 22.4848 21.2567V15.011C22.4848 14.3522 22.223 13.7204 21.7572 13.2546C21.2914 12.7888 20.6596 12.5271 20.0008 12.5271ZM16.4575 11.4677C17.3972 10.5279 18.6718 10 20.0008 10C21.3298 10 22.6044 10.5279 23.5441 11.4677C24.4838 12.4074 25.0118 13.682 25.0118 15.011V21.2567C25.0118 21.5843 25.1419 21.8983 25.3734 22.1299C25.6051 22.3614 25.9191 22.4915 26.2466 22.4915H31.2432C32.4672 22.4917 33.6777 22.7483 34.7963 23.2449C35.915 23.7416 36.9171 24.4672 37.7382 25.3749C38.5592 26.2827 39.1808 27.3525 39.563 28.5152C39.9452 29.6778 40.0794 30.9076 39.9571 32.1252L39.1826 39.8683C38.9035 42.6449 37.603 45.2195 35.5334 47.0915C33.4638 48.9635 30.7727 50 27.9821 50H17.6558C16.6103 49.9997 15.5696 49.8539 14.5644 49.5668C14.5646 49.5668 14.5642 49.5667 14.5644 49.5668L8.50847 47.8396C7.72874 47.6169 6.9212 47.5036 6.11027 47.5033C6.11034 47.5033 6.11014 47.5033 6.11027 47.5033H1.26354C0.565708 47.5033 0 46.9377 0 46.2398V28.7517C0 28.0538 0.565708 27.4881 1.26354 27.4881H3.76184C5.23633 27.4881 6.69634 27.1977 8.05861 26.6335C9.42088 26.0692 10.6586 25.2421 11.7012 24.1995C12.7438 23.1569 13.5709 21.9191 14.1352 20.5569C14.6994 19.1947 14.9898 17.7347 14.9898 16.2601V15.011C14.9898 13.682 15.5178 12.4074 16.4575 11.4677Z"
                                            fill="#6B2EFF"
                                        />
                                        <path
                                            fillRule="evenodd"
                                            clipRule="evenodd"
                                            d="M0 29.0198C0 28.322 0.565708 27.7563 1.26354 27.7563H8.56907C9.26694 27.7563 9.83261 28.322 9.83261 29.0198V46.1881C9.83261 46.8859 9.26694 47.4516 8.56907 47.4516H1.26354C0.565708 47.4516 0 46.8859 0 46.1881V29.0198ZM2.52707 30.2834V44.9245H7.3056V30.2834H2.52707Z"
                                            fill="#6B2EFF"
                                        />
                                    </svg>
                                </span>
                                <h3 className="mt-7 text-[22px] font-extrabold text-black dark:text-white">Maintenance</h3>
                                <p className="mt-4 text-lg font-semibold">We offer ongoing maintenance and updates to keep your app secure, up-to-date, and optimized for performance</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="relative overflow-x-hidden bg-[#F9F1FF] pt-20 dark:bg-gray-dark">
                <span className="absolute right-0 top-1/2 -translate-y-1/2">
                    <svg width="147" height="300" viewBox="0 0 147 300" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g opacity="0.2">
                            <path
                                d="M147 75.6491V228.205C106.879 228.205 74.349 194.052 74.349 151.927C74.349 109.788 106.879 75.6491 147 75.6491Z"
                                fill="url(#paint0_linear_1030_12905)"
                            />
                            <path
                                d="M146.575 0V300C65.8723 300 0.425311 232.834 0.425311 150.004C0.425311 67.1437 65.8796 0.00730931 146.582 0.00730931L146.575 0Z"
                                fill="url(#paint1_linear_1030_12905)"
                            />
                        </g>
                        <defs>
                            <linearGradient id="paint0_linear_1030_12905" x1="110.674" y1="93.8081" x2="205.119" y2="228.212" gradientUnits="userSpaceOnUse">
                                <stop stopColor="#7780A1" />
                                <stop offset="1" stopColor="#7780A1" stopOpacity="0" />
                            </linearGradient>
                            <linearGradient id="paint1_linear_1030_12905" x1="-72.6495" y1="-188.567" x2="183.171" y2="318.254" gradientUnits="userSpaceOnUse">
                                <stop stopColor="#7780A1" />
                                <stop offset="1" stopColor="#7780A1" stopOpacity="0" />
                            </linearGradient>
                        </defs>
                    </svg>
                </span>
                <span className="absolute -right-10 top-1/2 hidden -translate-y-1/2 xl:block">
                    <svg width="305" height="754" viewBox="0 0 305 754" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M1309.07 377C1309.07 514.315 1236.1 638.771 1117.85 728.963C999.602 819.157 836.154 875 655.533 875C474.911 875 311.463 819.157 193.214 728.963C74.9662 638.771 2 514.315 2 377C2 239.685 74.9662 115.229 193.214 25.0368C311.463 -65.1566 474.911 -121 655.533 -121C836.154 -121 999.602 -65.1566 1117.85 25.0368C1236.1 115.229 1309.07 239.685 1309.07 377Z"
                            fill="url(#paint0_linear_1030_12831)"
                            fillOpacity="0.1"
                            stroke="url(#paint1_linear_1030_12831)"
                            strokeWidth="4"
                        />
                        <defs>
                            <linearGradient id="paint0_linear_1030_12831" x1="1311.2" y1="377" x2="270.486" y2="-153.475" gradientUnits="userSpaceOnUse">
                                <stop stopColor="#B476E5" />
                                <stop offset="1" stopColor="#47BDFF" stopOpacity="0" />
                            </linearGradient>
                            <linearGradient id="paint1_linear_1030_12831" x1="655.65" y1="-123.001" x2="1135.45" y2="517.676" gradientUnits="userSpaceOnUse">
                                <stop stopColor="#B476E5" />
                                <stop offset="1" stopColor="#47BDFF" />
                            </linearGradient>
                        </defs>
                    </svg>
                </span>
                <div className="container">
                    <div className="relative z-[1] flex flex-col gap-[30px] xl:flex-row">
                        <div className="order-2 mx-auto w-full max-w-[540px] xl:order-1" data-aos="fade-right" data-aos-duration="1000">
                            <img src="/assets/images/application/product.png" alt="" />
                        </div>
                        <div className="order-1 xl:order-2">
                            <div className="heading !mb-8 text-center ltr:lg:text-left rtl:lg:text-right">
                                <h4 className="!font-black">
                                Why Choose <span className="bg-secondary p-1 text-white">Us</span> 
                                </h4>
                                <p className="mt-5 text-lg font-medium">
                                Our skilled mobile developers ensure industry-standard, user-centric app development for iOS and Android</p>
                            </div>
                            <div className="grid grid-cols-2 text-center">
                                <div className="border-b-2 border-gray/20 bg-[#7780A1]/[0.06] py-5 px-1 dark:bg-[#212937] sm:py-10 sm:px-4">
                                    <span>
                                        <svg
                                            className="mx-auto h-10 w-10 text-[#08111F] dark:text-white"
                                            viewBox="0 0 40 40"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                opacity="0.2"
                                                d="M28.5714 40C34.8833 40 40 34.8833 40 28.5714C40 22.2596 34.8833 17.1429 28.5714 17.1429C22.2596 17.1429 17.1429 22.2596 17.1429 28.5714C17.1429 34.8833 22.2596 40 28.5714 40Z"
                                                fill="#47BDFF"
                                            />
                                            <path
                                                d="M32.5 22.5C32.5 11.25 20 2.5 20 2.5C20 2.5 7.5 11.25 7.5 22.5C7.5 25.8152 8.81693 28.9946 11.1611 31.3389C13.5054 33.6831 16.6848 35 20 35C23.3152 35 26.4946 33.6831 28.8389 31.3389C31.1831 28.9946 32.5 25.8152 32.5 22.5Z"
                                                stroke="currentcolor"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                            <path d="M20 35V2.5" stroke="currentcolor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M20 10L32.5 22.5" stroke="currentcolor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                            <path
                                                d="M20 17.5L30.9796 28.4796"
                                                stroke="currentcolor"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                            <path
                                                d="M20 25L27.5004 32.5004"
                                                stroke="currentcolor"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                        </svg>
                                    </span>
                                    <h5 className="mt-2.5 text-xl font-extrabold text-black dark:text-white">Custom Solutions</h5>
                                    <p className="mt-2.5 text-sm font-semibold leading-6">Crafting tailored solutions that align with your unique vision.</p>
                                </div>
                                <div className="border-b-2 border-gray/20 bg-[#7780A1]/[0.06] py-5 px-1 ltr:border-l-2 rtl:border-r-2 dark:bg-[#212937] sm:py-10 sm:px-4">
                                    <span>
                                        <svg
                                            className="mx-auto h-10 w-10 text-[#08111F] dark:text-white"
                                            viewBox="0 0 40 40"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                opacity="0.2"
                                                d="M28.5714 40C34.8833 40 40 34.8833 40 28.5714C40 22.2596 34.8833 17.1429 28.5714 17.1429C22.2596 17.1429 17.1429 22.2596 17.1429 28.5714C17.1429 34.8833 22.2596 40 28.5714 40Z"
                                                fill="#B476E5"
                                            />
                                            <path
                                                d="M15 37.4988L17.5 24.9988L7.5 21.2488L25 2.49878L22.5 14.9988L32.5 18.7488L15 37.4988Z"
                                                stroke="currentcolor"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                        </svg>
                                    </span>
                                    <h5 className="mt-2.5 text-xl font-extrabold text-black dark:text-white">User-Centric Design</h5>
                                    <p className="mt-2.5 text-sm font-semibold leading-6">Prioritizing intuitive, engaging interfaces for a seamless user experience.</p>
                                </div>
                                <div className="bg-[#7780A1]/[0.06] py-5 px-1 dark:bg-[#212937] sm:py-10 sm:px-4">
                                    <span>
                                        <svg
                                            className="mx-auto h-10 w-10 text-[#08111F] dark:text-white"
                                            viewBox="0 0 40 40"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                opacity="0.2"
                                                d="M28.5714 40C34.8833 40 40 34.8833 40 28.5714C40 22.2596 34.8833 17.1429 28.5714 17.1429C22.2596 17.1429 17.1429 22.2596 17.1429 28.5714C17.1429 34.8833 22.2596 40 28.5714 40Z"
                                                fill="#47BDFF"
                                            />
                                            <path
                                                d="M20 35C28.2843 35 35 28.2843 35 20C35 11.7157 28.2843 5 20 5C11.7157 5 5 11.7157 5 20C5 28.2843 11.7157 35 20 35Z"
                                                stroke="currentcolor"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                            <path
                                                d="M20 25C22.7614 25 25 22.7614 25 20C25 17.2386 22.7614 15 20 15C17.2386 15 15 17.2386 15 20C15 22.7614 17.2386 25 20 25Z"
                                                stroke="currentcolor"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                            <path d="M35 20H25" stroke="currentcolor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                            <path
                                                d="M30.6066 9.39328L23.5356 16.4644"
                                                stroke="currentcolor"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                        </svg>
                                    </span>
                                    <h5 className="mt-2.5 text-xl font-extrabold text-black dark:text-white">Cross-Platform Developmen</h5>
                                    <p className="mt-2.5 text-sm font-semibold leading-6">Expertise in creating apps that work seamlessly on iOS and Android.</p>
                                </div>
                                <div className="border-gray/20 bg-[#7780A1]/[0.06] py-5 px-1 ltr:border-l-2 rtl:border-r-2 dark:bg-[#212937] sm:py-10 sm:px-4">
                                    <span>
                                        <svg
                                            className="mx-auto h-10 w-10 text-[#08111F] dark:text-white"
                                            viewBox="0 0 40 40"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                opacity="0.2"
                                                d="M28.5714 40C34.8833 40 40 34.8833 40 28.5714C40 22.2596 34.8833 17.1429 28.5714 17.1429C22.2596 17.1429 17.1429 22.2596 17.1429 28.5714C17.1429 34.8833 22.2596 40 28.5714 40Z"
                                                fill="#47BDFF"
                                            />
                                            <path
                                                d="M32.5 22.5C32.5 11.25 20 2.5 20 2.5C20 2.5 7.5 11.25 7.5 22.5C7.5 25.8152 8.81693 28.9946 11.1611 31.3389C13.5054 33.6831 16.6848 35 20 35C23.3152 35 26.4946 33.6831 28.8389 31.3389C31.1831 28.9946 32.5 25.8152 32.5 22.5Z"
                                                stroke="currentcolor"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                            <path d="M20 35V2.5" stroke="currentcolor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M20 10L32.5 22.5" stroke="currentcolor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                            <path
                                                d="M20 17.5L30.9796 28.4796"
                                                stroke="currentcolor"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                            <path
                                                d="M20 25L27.5004 32.5004"
                                                stroke="currentcolor"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                        </svg>
                                    </span>
                                    <h5 className="mt-2.5 text-xl font-extrabold text-black dark:text-white">App Store Optimization (ASO)</h5>
                                    <p className="mt-2.5 text-sm font-semibold leading-6">Enhancing app visibility and rankings in app stores through optimization.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="relative overflow-x-hidden bg-black bg-[url(/assets/images/application/features.png)] bg-cover bg-center bg-no-repeat">
               
                <div className="border-t-2 border-gray/10"></div>
                <span className="absolute bottom-0 left-0">
                    <svg width="1001" height="370" viewBox="0 0 1001 370" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            opacity="0.02"
                            d="M187.425 115.828C185.154 117.403 162.359 137.584 160.827 138.772C151.472 148.558 147.633 155.454 145.086 163.804C142.538 172.153 141.304 181.951 135.024 191.374C128.745 200.797 117.439 209.845 113.716 220.985C109.992 232.124 113.859 245.353 112.866 256.722C111.873 268.091 106.034 277.595 99.2374 285.938C92.4411 294.28 84.6904 301.466 80.5102 313.149C76.3311 324.832 75.7225 341.012 79.0258 360.768C82.3281 380.523 89.5518 403.856 94.5935 433.769C99.6342 463.683 102.495 500.19 112.694 523.882C122.892 547.575 140.43 558.454 152.869 562.414C165.308 566.373 172.65 563.41 178.817 563.456C184.984 563.501 189.98 566.554 200.15 571.177C210.32 575.799 225.666 581.985 235.247 587.394C244.827 592.804 248.642 597.435 254.708 603.459C260.773 609.484 269.094 616.906 276.665 621.052C284.236 625.197 291.06 626.077 297.849 626.148C304.638 626.219 311.398 625.478 316.125 629.02C320.852 632.561 323.548 640.394 324.898 649.23C326.247 658.067 326.248 667.915 324.488 681.559C322.726 695.203 319.204 712.642 320.246 729.571C321.29 746.5 326.904 762.913 339.014 775.586C351.123 788.258 369.731 797.185 388.59 802.757C407.449 808.33 426.562 810.547 438.064 816.217C449.565 821.886 453.458 831.003 458.314 842.714C463.169 854.434 468.986 868.732 476.545 884.783C484.104 900.835 493.404 918.64 503.072 934.893C512.74 951.146 522.784 965.865 532.189 974.193C541.594 982.521 550.374 984.476 557.029 984.792C563.684 985.108 568.221 983.776 570.472 975.324C572.723 966.872 572.688 951.29 581.135 933.849C589.581 916.407 606.514 897.098 619.051 885.234C631.587 873.38 639.731 868.943 641.957 856.188C644.183 843.433 640.492 822.356 649.532 809.049C658.572 795.742 680.342 790.207 691.989 778.806C703.638 767.404 705.162 750.136 705.883 734.334C706.604 718.533 706.521 704.199 708.19 693.043C709.857 681.888 713.272 673.914 714.917 663.382C716.561 652.85 716.431 639.756 714.247 631.575C712.064 623.393 707.824 620.112 701.216 618.556C694.606 616.999 685.624 617.157 677.102 616.774C668.58 616.39 660.512 615.465 650.666 615.465C639.887 615.444 629.134 616.521 618.575 618.679C607.958 620.959 598.348 624.585 590.677 626.413C583.005 628.243 577.268 628.275 570.777 623.605C564.287 618.937 557.036 609.562 549.583 602.302C542.129 595.042 534.471 589.889 527.539 588.633C520.606 587.376 514.402 590.006 505.847 588.811C497.29 587.617 486.387 582.593 476.429 577.295C466.47 571.997 457.457 566.42 447.421 566.478C437.385 566.537 426.327 572.226 413.811 573.623C401.296 575.021 387.32 572.125 375.748 573.248C364.176 574.37 355.012 579.508 348.86 587.253C342.709 594.997 339.577 605.348 337.245 609.31C334.915 613.273 333.383 610.849 330.1 608.731C326.552 606.514 322.567 605.088 318.418 604.55C315.061 604.299 313.388 605.607 310.154 607.167C306.922 608.728 302.111 610.541 298.543 610.967C294.976 611.394 292.643 610.433 290.124 609.527C286.815 608.506 283.711 606.913 280.954 604.82C277.013 601.866 271.843 596.809 271.757 590.886C271.671 584.963 276.66 578.171 278.408 571.506C280.155 564.842 278.657 558.303 274.551 554.785C270.447 551.266 263.737 550.761 256.442 552.481C249.148 554.2 241.277 558.141 236.86 557.787C232.444 557.435 231.503 552.787 231.84 545.508C232.177 538.23 233.797 528.32 234.733 521.687C235.669 515.053 235.919 511.699 233.303 508.359C230.687 505.019 225.205 501.698 221.068 502.289C216.932 502.879 214.145 507.388 209.689 513.202C205.232 519.015 199.106 526.139 192.451 530.749C185.794 535.358 178.612 537.455 173.901 536.779C169.189 536.103 166.953 532.651 164.541 527.201C162.128 521.752 159.542 514.301 159.523 501.588C159.504 488.874 162.055 470.896 165.785 461.19C169.516 451.486 174.431 450.051 179.392 447.372C184.353 444.692 189.363 440.767 195.427 436.945C201.681 432.942 208.346 429.622 215.307 427.038C222.005 424.673 228.278 423.662 233.617 425.796C238.958 427.93 243.37 433.205 247.822 440.728C252.276 448.25 256.769 458.019 261.827 462.696C266.885 467.373 272.511 466.96 274.549 464.109C276.587 461.258 275.043 455.968 273.002 448.976L273.001 448.97L272.995 448.953C270.955 441.96 268.42 433.276 268.19 426.168C267.959 419.055 270.041 413.525 275.119 407.734C280.196 401.943 288.278 395.892 293.893 389.124C299.508 382.356 302.657 374.874 303.293 367.917C303.929 360.958 302.055 354.534 303.045 348.089C304.035 341.644 307.894 335.185 312.95 330.017C318.005 324.848 324.256 320.972 328.086 318.622L328.22 318.539C331.95 316.251 333.338 315.399 334.996 310.656C336.673 305.858 338.626 297.082 342.547 292.245C346.466 287.409 352.36 286.513 359.275 284.904C366.191 283.295 374.13 280.978 378.737 277.785C383.345 274.593 384.623 270.529 383.416 267.804C382.223 265.114 378.618 263.728 373.857 261.899L373.671 261.828C368.817 259.962 362.797 257.614 359.803 254.385C356.809 251.157 356.841 247.047 359.991 244.485C363.141 241.924 369.412 240.916 372.476 242.276C375.539 243.638 383.427 247.955 386.886 252.073C390.343 256.192 397.403 260.696 407.581 261.828C417.759 262.958 431.057 260.719 436.151 257.795C441.246 254.871 438.14 251.266 432.925 247.454C427.71 243.643 412.355 239.045 410.74 235.618C409.125 232.192 413.221 229.357 413.518 224.756C413.816 220.154 410.318 213.792 404.456 210.579C398.594 207.365 390.369 207.305 384.683 206.093C378.998 204.88 375.846 202.52 372.866 197.234C369.886 191.949 367.079 183.74 363.888 179.133C360.697 174.526 357.122 173.521 354.072 175.025C351.024 176.53 348.505 180.546 344.842 183.462C341.179 186.378 342.584 191.626 339.227 191.374C335.871 191.123 331.674 186.234 329.224 183.462C326.773 180.69 324.762 185.361 320.721 183.462C316.679 181.564 318.239 175.882 313.527 175.206C308.816 174.529 310.973 174.458 309.011 171.953C307.048 169.448 323.075 159.07 325.444 157.352C327.814 155.634 325.661 155.707 331.27 157.352C336.878 158.998 337.773 159.588 343.437 161.423C349.101 163.258 347.987 162.691 351.822 161.776C355.658 160.862 358.887 157.865 361.81 153.115C364.971 147.773 367.292 141.976 368.689 135.928C370.036 129.996 370.111 124.639 368.118 121.323C366.125 118.007 362.06 116.733 356.451 115.087C350.842 113.442 349.345 113.213 345.664 108.338C341.984 103.463 344.508 100.137 345.664 94.2587C346.821 88.3805 349.343 84.3662 351.822 83.0255C354.302 81.6848 360.122 81.2411 363.979 82.3154C369.367 83.2028 375.774 83.5976 382.194 85.2114C388.613 86.8242 394.098 90.1457 397.865 96.022C401.631 101.897 403.682 110.326 405.857 117.076C407.602 122.798 410.031 128.289 413.093 133.427C415.857 137.957 419.068 141.944 423.199 144.84C427.329 147.736 432.369 149.548 437.693 148.813C443.018 148.078 448.624 144.803 450.949 139.405C453.274 134.008 452.306 126.495 453.274 120.671C454.243 114.849 457.14 110.718 459.038 106.68C460.936 102.642 461.831 98.688 464.115 95.9703C466.4 93.2516 470.069 91.7681 474.615 91.8783C479.162 91.9876 484.579 93.6876 493.08 94.6938C501.58 95.7 513.161 96.0105 521.668 93.5275C530.175 91.0446 535.607 85.7663 536.882 81.7011C538.158 77.6351 535.276 74.786 530.163 74.8425C525.049 74.8981 520.005 70.2341 512.365 72.8752C504.723 75.5162 496.399 79.5804 491.13 80.5033C485.86 81.4251 483.258 80.9556 482.502 76.2522C481.745 71.5479 480.919 68.4928 479.051 63.5039C477.185 58.515 472.359 57.4608 466.675 56.2486L466.294 56.1671C460.7 54.975 454.32 53.6142 449.228 51.2894C444.021 48.9118 440.162 45.5242 435.954 43.0595C431.746 40.5957 427.193 39.0528 422.53 37.1323C417.867 35.2119 413.091 32.912 407.388 33.7572C401.686 34.6015 395.055 38.5899 390.077 43.3249C385.098 48.0599 381.777 53.5443 379.17 56.561C376.564 59.5777 374.674 60.1307 371.53 59.2011C368.385 58.2725 363.99 55.8653 358.366 56.2754C352.742 56.6856 345.89 59.916 340.093 63.2499C334.295 66.5839 329.555 70.0184 325.712 74.4238C321.869 78.8281 318.925 84.2013 315.924 89.3848C312.924 94.5692 309.869 99.5658 307.736 104.905C305.601 110.246 304.39 115.938 303.045 121.866C301.698 127.793 302.803 132.73 303.374 139.364C303.945 145.999 288.364 160.498 289.405 167.579C290.446 174.66 289.911 181.725 290.248 187.336C290.587 192.947 291.799 197.104 292.283 200.862C292.766 204.62 292.513 207.976 287.757 213.467C283.001 218.958 273.737 226.585 263.221 227.809C252.706 229.033 240.938 223.854 234.437 217.751C227.936 211.646 226.705 204.617 228.508 198.144C230.31 191.671 235.145 185.743 242.721 181.48C250.299 177.217 260.617 174.614 266.848 171.359C273.078 168.104 262.726 164.999 263.221 161.776C263.718 158.554 275.059 155.217 276.201 151.397C277.342 147.575 272.668 142.115 277.455 132.515C282.242 122.916 279.698 108.182 281.123 101.817C282.547 95.4509 280.691 97.4432 275.714 102.177C269.937 107.935 271.492 113.39 266.848 120.095C262.824 125.986 261.437 129.675 259.414 130.47C257.39 131.266 254.725 129.176 251.158 129.598C247.592 130.02 243.116 132.972 238.178 135.029C233.239 137.086 227.836 138.254 223.472 136.655C219.108 135.056 224.339 131.867 222.683 126.195C221.027 120.524 221.041 113.546 217.527 109.568C210.631 101.763 196.68 109.396 187.425 115.828Z"
                            fill="white"
                        />
                        <path
                            opacity="0.04"
                            d="M570.516 6.54906C760.273 33.0193 926.28 167.493 983.462 363.344C1027.73 514.977 966.951 719.159 986.117 532.682C988.474 509.793 978.853 504.114 975.019 491.692C971.186 479.272 973.141 460.104 962.092 448.665C951.043 437.228 944.066 427.366 944.948 417.054C945.839 406.742 954.598 395.98 952.461 392.908C950.334 389.837 937.329 394.457 928.072 398.593C918.815 402.73 913.314 406.389 910.535 412.326C907.756 418.264 907.699 426.491 901.7 433.369C895.71 440.247 883.789 445.78 869.798 449.865C855.807 453.95 839.755 456.584 828.083 453.838C816.401 451.093 809.108 442.965 801.471 435.758C793.91 428.697 785.841 422.207 777.331 416.339C768.831 410.411 759.823 404.834 753.9 391.587C747.98 378.339 745.156 357.418 741.98 340.908C738.804 324.398 735.269 312.299 733.516 299.271C731.763 286.242 731.789 272.284 736.686 253.213C741.583 234.14 751.344 209.953 757.255 193.663C763.167 177.372 765.228 168.972 769.78 165.592C774.332 162.213 781.375 163.85 787.547 165.329C793.728 166.808 799.037 168.13 804.71 167.908C810.393 167.686 816.449 165.922 821.768 165.188C827.096 164.454 831.696 164.751 834.226 162.164C836.746 159.579 830.182 154.748 830.757 151.093C831.331 147.438 831.226 146.99 827.92 141.232C824.623 135.473 812.29 135.589 804.71 131.441C797.139 127.292 802.161 116.843 794.782 114.847C787.412 112.85 780.513 107.479 777.111 101.486C773.709 95.494 769.655 97.2276 766.703 92.0748C763.752 86.921 757.743 83.2095 753.498 86.9201C749.251 90.6306 746.779 101.753 748.323 111.222C749.868 120.691 759.593 120.15 759.727 124.831C759.861 129.511 754.571 131.054 748.323 131.441C742.08 131.828 734.877 131.06 731.293 133.542C727.708 136.025 727.744 141.759 727.752 148.116C727.76 154.474 727.746 161.451 726.699 167.707C725.653 173.963 723.575 179.491 722.008 184.667C720.441 189.844 719.388 194.664 713.937 197.077C708.487 199.49 698.64 199.489 691.848 194.498C685.057 189.506 681.322 179.518 682.281 172.262C683.239 165.006 688.895 160.484 692.667 157.947C696.439 155.409 698.331 154.857 698.48 152.557C698.628 150.257 697.036 146.208 692.301 141.232C687.036 136.009 681.214 131.38 674.94 127.428C670.19 124.505 668.566 124.568 666.494 126.61C664.422 128.652 661.903 132.669 658.303 132.284C654.704 131.9 650.024 127.108 649.36 119.917C648.696 112.726 652.051 103.132 656.388 95.5055C660.727 87.8803 666.05 82.2206 667.687 75.1789C669.324 68.1373 667.275 59.7081 659.088 52.0464C650.901 44.3838 636.579 37.486 629.434 36.9052C622.289 36.3255 622.322 42.0571 624.812 47.0748C627.302 52.0924 632.251 56.3914 635.387 60.8072C638.523 65.2241 639.847 69.7626 634.617 72.9308C629.386 76.0989 617.602 77.8986 610.98 78.396C604.357 78.8933 602.89 78.0912 602.874 80.1477C602.858 82.2043 604.294 87.1165 608.401 90.6383C612.51 94.1591 619.284 96.2827 624.435 98.4715C629.585 100.66 633.116 102.911 635.086 106.85C637.057 110.789 637.47 116.413 635.162 119.753C632.853 123.094 627.828 124.149 622.206 124.561C615.693 125.112 609.135 124.379 602.905 122.402C595.006 119.809 587.543 116.04 580.768 111.222C574.764 106.816 571.44 102.456 570.604 98.1878C569.767 93.9195 571.42 89.7423 574.902 88.3163C578.383 86.8904 583.692 88.2109 587.349 88.7849C591.005 89.3599 593.004 89.1855 593.476 86.5866C593.947 83.9877 592.892 78.9594 591.212 73.9121C589.532 68.8637 587.232 63.7895 581.984 59.1686C576.735 54.5467 568.544 50.3713 561.729 46.0024C554.915 41.6325 549.476 37.0624 546.797 32.1013C544.116 27.1401 544.196 21.7842 544.261 16.9706C544.327 12.1571 544.383 7.88015 536.188 5.45564C495.711 -6.52219 400.253 10.4647 360.685 22.019C302.059 39.1333 226.656 85.452 180.28 119.79C181.812 118.602 183.796 117.098 186.066 115.524C195.321 109.091 209.273 101.458 216.168 109.263C219.682 113.241 219.668 120.219 221.324 125.89C222.98 131.563 217.749 134.752 222.113 136.35C226.477 137.949 231.881 136.782 236.819 134.725C241.758 132.668 246.233 129.715 249.799 129.293C253.366 128.873 256.031 130.961 258.055 130.165C260.079 129.37 261.465 125.682 265.489 119.79C270.134 113.086 268.579 107.63 274.356 101.873C279.332 97.1385 281.189 95.1461 279.765 101.512C278.34 107.877 280.883 122.611 276.096 132.21C271.309 141.811 275.983 147.271 274.842 151.092C273.7 154.913 262.359 158.249 261.863 161.471C261.367 164.694 271.72 167.799 265.489 171.054C259.258 174.31 248.941 176.912 241.363 181.175C233.786 185.438 228.951 191.367 227.149 197.84C225.346 204.312 226.577 211.341 233.078 217.446C239.579 223.549 251.347 228.728 261.863 227.504C272.379 226.28 281.642 218.654 286.398 213.162C291.155 207.671 291.408 204.315 290.924 200.558C290.44 196.799 289.228 192.642 288.89 187.031C288.552 181.42 289.087 174.356 288.046 167.274C287.005 160.193 302.587 145.695 302.015 139.06C301.444 132.425 300.34 127.489 301.686 121.561C303.031 115.634 304.243 109.941 306.377 104.602C308.51 99.2611 311.565 94.2645 314.565 89.081C317.566 83.8966 320.51 78.5234 324.353 74.1191C328.197 69.7137 332.936 66.2792 338.734 62.9452C344.532 59.6113 351.383 56.3808 357.008 55.9707C362.631 55.5605 367.026 57.9678 370.171 58.8974C373.316 59.8259 375.205 59.274 377.811 56.2563C380.418 53.2395 383.74 47.7552 388.718 43.0202C393.696 38.2852 400.327 34.2967 406.03 33.4525C411.733 32.6073 416.508 34.9072 421.171 36.8276C425.834 38.749 430.387 40.2909 434.595 42.7557C438.803 45.2195 442.662 48.6071 447.869 50.9846C453.077 53.3622 459.632 54.7316 465.316 55.9439C471 57.1561 475.826 58.2103 477.693 63.1992C479.56 68.1881 480.386 71.2432 481.143 75.9475C481.899 80.6508 484.501 81.1204 489.771 80.1985C495.04 79.2757 503.365 75.2115 511.006 72.5704C518.647 69.9294 523.691 74.5934 528.804 74.5378C533.917 74.4813 536.799 77.3313 535.523 81.3964C534.248 85.4615 528.816 90.7399 520.309 93.2228C511.802 95.7058 500.221 95.3953 491.721 94.3891C483.22 93.3829 477.804 91.6828 473.257 91.5736C468.71 91.4634 465.041 92.9478 462.756 95.6655C460.473 98.3833 459.577 102.337 457.679 106.376C455.782 110.413 452.884 114.544 451.916 120.368C450.947 126.19 451.916 133.703 449.59 139.101C447.265 144.498 441.659 147.773 436.335 148.508C431.01 149.243 425.97 147.431 421.84 144.535C417.709 141.639 414.498 137.653 411.734 133.124C408.673 127.984 406.243 122.494 404.498 116.771C402.323 110.021 400.272 101.593 396.506 95.7173C392.739 89.8419 387.255 86.5195 380.835 84.9067C374.415 83.2929 368.008 82.8981 362.62 82.0107C358.763 80.9364 352.943 81.3811 350.464 82.7208C347.984 84.0614 345.462 88.0758 344.305 93.954C343.15 99.8332 340.625 103.159 344.305 108.033C347.986 112.908 349.484 113.137 355.092 114.783C360.701 116.428 364.766 117.703 366.759 121.018C368.753 124.334 368.677 129.691 367.33 135.623C365.933 141.671 363.613 147.469 360.451 152.81C357.528 157.56 354.299 160.557 350.464 161.471C346.628 162.386 347.742 162.953 342.078 161.119C336.415 159.283 335.52 158.693 329.911 157.048C324.302 155.402 326.455 155.33 324.086 157.048C321.716 158.765 305.69 169.143 307.652 171.648C309.615 174.153 307.458 174.225 312.17 174.901C316.881 175.578 315.32 181.259 319.362 183.158C323.404 185.056 325.415 180.386 327.866 183.158C330.315 185.929 334.512 190.818 337.868 191.069C341.225 191.321 339.82 186.073 343.483 183.158C347.147 180.242 349.665 176.225 352.713 174.721C355.763 173.216 359.338 174.222 362.529 178.829C365.721 183.436 368.527 191.644 371.507 196.93C374.487 202.215 377.639 204.576 383.325 205.788C389.011 207 397.235 207.062 403.097 210.274C408.959 213.487 412.458 219.849 412.16 224.451C411.862 229.053 407.766 231.887 409.381 235.313C410.997 238.74 426.351 243.338 431.567 247.149C436.782 250.962 439.887 254.568 434.793 257.49C429.698 260.414 416.4 262.654 406.222 261.523C396.045 260.391 388.984 255.887 385.527 251.768C382.068 247.651 374.18 243.333 371.117 241.972C368.053 240.611 361.782 241.619 358.632 244.181C355.482 246.742 355.45 250.852 358.444 254.081C361.438 257.309 367.458 259.657 372.312 261.523C377.166 263.388 380.849 264.774 382.057 267.499C383.264 270.224 381.986 274.289 377.378 277.482C372.771 280.674 364.832 282.99 357.917 284.599C351.001 286.208 345.108 287.104 341.188 291.94C337.268 296.777 335.315 305.553 333.637 310.351C331.96 315.151 330.558 315.966 326.727 318.317C322.897 320.668 316.646 324.543 311.591 329.712C306.535 334.88 302.676 341.34 301.686 347.785C300.696 354.229 302.57 360.654 301.934 367.612C301.299 374.569 298.149 382.052 292.534 388.82C286.919 395.588 278.837 401.638 273.76 407.429C268.682 413.221 266.6 418.751 266.831 425.863C267.061 432.977 269.6 441.67 271.642 448.665C273.683 455.662 275.229 460.954 273.191 463.805C271.152 466.656 265.526 467.069 260.468 462.391C255.41 457.715 250.917 447.946 246.464 440.423C242.012 432.9 237.599 427.626 232.259 425.492C226.919 423.357 220.646 424.368 213.948 426.734C206.987 429.317 200.323 432.638 194.068 436.64C188.005 440.462 182.994 444.387 178.033 447.067C173.072 449.746 168.157 451.181 164.426 460.886C160.696 470.591 158.145 488.569 158.164 501.283C158.184 513.997 160.769 521.447 163.182 526.896C165.594 532.346 167.83 535.798 172.542 536.475C177.253 537.15 184.435 535.053 191.092 530.444C197.747 525.835 203.875 518.711 208.33 512.897C212.786 507.083 215.574 502.575 219.711 501.984C223.847 501.393 229.328 504.714 231.944 508.054C234.56 511.394 234.31 514.748 233.374 521.382C232.438 528.016 230.818 537.925 230.481 545.204C230.145 552.482 231.086 557.13 235.502 557.482C239.918 557.836 247.789 553.896 255.083 552.176C262.379 550.456 269.088 550.961 273.193 554.48C277.298 557.998 278.796 564.538 277.049 571.202C275.302 577.867 270.312 584.658 270.398 590.581C270.484 596.505 275.654 601.562 279.595 604.515C282.353 606.608 285.456 608.202 288.765 609.223C291.285 610.128 293.617 611.089 297.185 610.663C300.752 610.236 305.563 608.423 308.795 606.862C312.029 605.302 313.702 603.994 317.059 604.245C321.208 604.783 325.193 606.209 328.742 608.426C332.024 610.545 333.556 612.968 335.888 609.006C338.218 605.043 341.35 594.693 347.501 586.948C353.653 579.203 362.817 574.065 374.389 572.943C385.961 571.822 399.937 574.717 412.452 573.318C424.969 571.921 436.026 566.232 446.063 566.173C456.098 566.115 465.111 571.692 475.07 576.991C485.028 582.288 495.932 587.313 504.488 588.507C513.043 589.702 519.248 587.071 526.18 588.328C533.112 589.585 540.77 594.738 548.225 601.998C555.678 609.259 562.928 618.632 569.418 623.301C575.909 627.971 581.646 627.938 589.318 626.11C596.99 624.28 606.599 620.654 617.216 618.375C627.776 616.216 638.528 615.139 649.307 615.16C659.153 615.16 667.221 616.086 675.743 616.469C684.265 616.852 693.248 616.695 699.857 618.251C706.466 619.808 710.705 623.088 712.888 631.27C715.072 639.451 715.202 652.545 713.558 663.077C711.913 673.609 708.498 681.583 706.831 692.738C705.162 703.894 705.246 718.228 704.524 734.03C703.803 749.831 702.279 767.099 690.63 778.501C678.983 789.903 657.213 795.437 648.173 808.744C639.133 822.051 642.825 843.126 640.598 855.881C638.373 868.636 630.229 873.073 617.692 884.937C605.156 896.791 588.222 916.101 579.776 933.542C571.33 950.983 571.364 966.565 569.113 975.017C566.862 983.47 562.325 984.802 555.671 984.485C549.015 984.169 540.236 982.224 530.83 973.886C521.425 965.559 511.382 950.849 501.713 934.586C492.045 918.334 482.745 900.538 475.187 884.477C467.628 868.425 461.811 854.127 456.955 842.417C452.099 830.697 448.207 821.581 436.705 815.912C425.203 810.243 406.09 808.025 387.232 802.453C368.373 796.88 349.764 787.954 337.656 775.281C325.547 762.609 319.931 746.195 318.888 729.267C317.845 712.338 321.367 694.898 323.129 681.254C324.89 667.611 324.888 657.762 323.539 648.926C322.19 640.089 319.493 632.256 314.767 628.715C310.039 625.173 303.279 625.914 296.491 625.843C289.702 625.772 282.878 624.892 275.307 620.747C267.735 616.601 259.414 609.179 253.349 603.154C247.283 597.13 243.468 592.499 233.888 587.089C224.308 581.681 208.961 575.495 198.792 570.872C188.621 566.249 183.625 563.196 177.458 563.151C171.291 563.105 163.949 566.068 151.51 562.109C139.071 558.149 121.533 547.27 111.335 523.578C101.137 499.886 98.2762 463.378 93.2346 433.465C88.193 403.551 80.9702 380.218 77.6669 360.463C74.3646 340.708 74.9722 324.528 79.1514 312.845C83.3315 301.161 91.0822 293.975 97.8785 285.633C104.675 277.29 110.515 267.786 111.508 256.417C112.501 245.049 108.635 231.819 112.358 220.68C116.081 209.541 127.386 200.492 133.665 191.069C139.946 181.646 141.18 171.848 143.727 163.499C146.274 155.149 150.114 148.253 159.468 138.467C28.9976 263.9 -34.88 459.03 19.3513 644.798C97.0726 911.031 375.9 1063.84 642.132 986.124C801.212 939.685 919.802 821.439 972.902 676.987C974.483 672.7 986.95 627.182 988.416 622.849"
                            stroke="url(#paint0_linear_1250_13394)"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                        <defs>
                            <linearGradient id="paint0_linear_1250_13394" x1="500" y1="1.36108" x2="500" y2="1006.38" gradientUnits="userSpaceOnUse">
                                <stop stopColor="white" />
                                <stop offset="1" stopColor="white" stopOpacity="0" />
                            </linearGradient>
                        </defs>
                    </svg>
                </span>
                <span className="absolute top-1/2">
                    <svg width="171" height="122" viewBox="0 0 171 122" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            opacity="0.1"
                            d="M137.325 70.3248C137.325 82.6545 127.33 92.6496 115 92.6496C102.671 92.6496 92.6755 82.6545 92.6755 70.3248C92.6755 57.9952 102.671 48 115 48C127.33 48 137.325 57.9952 137.325 70.3248Z"
                            fill="url(#paint0_linear_1250_13381)"
                        />
                        <path
                            opacity="0.2"
                            d="M130.941 52.0556C133.863 51.516 136.539 51.3332 138.747 51.6297C140.896 51.9183 143.032 52.7285 144.204 54.6011C145.449 56.5916 145.074 58.903 144.17 60.9011C143.251 62.9316 141.607 65.0836 139.503 67.2307C135.275 71.5467 128.799 76.2333 121.094 80.3383C113.386 84.4449 105.761 87.2698 99.6245 88.4857C96.5674 89.0915 93.7693 89.3204 91.4684 89.0471C89.2356 88.7818 87.0044 87.9788 85.7968 86.0485C84.4829 83.9486 84.9695 81.4992 85.991 79.4085C87.0375 77.2666 88.8732 74.9831 91.2156 72.703L92.6755 71.487C92.6755 72.0966 92.9081 73.4662 93.1446 74.6848C93.2689 75.325 93.3942 75.9234 93.4874 76.3481C91.6684 78.2046 90.4236 79.8714 89.752 81.2461C88.9783 82.8295 89.171 83.5497 89.3454 83.8283C89.5486 84.1531 90.1966 84.6806 91.9623 84.8904C93.6599 85.0921 95.9798 84.9406 98.8109 84.3796C104.451 83.2622 111.685 80.6083 119.126 76.644C126.569 72.6782 132.664 68.2298 136.514 64.3011C138.449 62.3258 139.721 60.578 140.356 59.1755C141.005 57.7406 140.821 57.0858 140.655 56.8213C140.459 56.5081 139.848 56.0011 138.189 55.7783C136.679 55.5754 134.64 55.6631 132.153 56.0913L128.59 52.6212C129.535 52.3381 130.426 52.1448 130.941 52.0556Z"
                            fill="url(#paint1_linear_1250_13381)"
                        />
                        <path
                            opacity="0.2"
                            d="M167.101 0.577437C167.623 0.153362 168.407 0.486153 168.465 1.15654L168.709 3.97392C168.723 4.14111 168.787 4.30014 168.893 4.43043L170.675 6.62595C171.099 7.14839 170.767 7.93237 170.096 7.99022L167.279 8.23334C167.112 8.24777 166.952 8.31202 166.822 8.41778L164.627 10.2C164.104 10.6241 163.32 10.2913 163.262 9.62092L163.019 6.80355C163.005 6.63635 162.941 6.47733 162.835 6.34704L161.053 4.15151C160.629 3.62908 160.961 2.84507 161.632 2.78722L164.449 2.54412C164.616 2.5297 164.775 2.46545 164.906 2.35968L167.101 0.577437Z"
                            fill="url(#paint2_linear_1250_13381)"
                        />
                        <path
                            opacity="0.2"
                            d="M39.5961 107.653C40.3273 107.059 41.4248 107.525 41.5059 108.464L41.8464 112.408C41.8663 112.642 41.9564 112.865 42.1047 113.047L44.5996 116.121C45.1934 116.852 44.7276 117.95 43.789 118.031L39.8447 118.371C39.6106 118.391 39.3879 118.481 39.2055 118.629L36.1317 121.125C35.4005 121.718 34.303 121.252 34.2219 120.314L33.8814 116.369C33.8614 116.135 33.7714 115.913 33.6231 115.73L31.1282 112.657C30.5344 111.925 31.0002 110.828 31.9388 110.747L35.8831 110.406C36.1172 110.386 36.3399 110.296 36.5223 110.148L39.5961 107.653Z"
                            fill="url(#paint3_linear_1250_13381)"
                        />
                        <path
                            opacity="0.2"
                            d="M8.34866 17.6152C8.97538 17.1063 9.91612 17.5056 9.98557 18.3101L10.2775 21.691C10.2946 21.8916 10.3717 22.0824 10.4989 22.2388L12.6374 24.8734C13.1463 25.5003 12.7471 26.4411 11.9426 26.5105L8.5617 26.8023C8.36107 26.8196 8.17017 26.8967 8.01383 27.0236L5.37913 29.1623C4.75241 29.6712 3.81166 29.2718 3.74221 28.4674L3.45032 25.0865C3.43321 24.8859 3.35605 24.695 3.22889 24.5387L1.0904 21.9041C0.581445 21.2771 0.980693 20.3363 1.78523 20.2669L5.16608 19.9752C5.36671 19.9579 5.55761 19.8808 5.71396 19.7539L8.34866 17.6152Z"
                            fill="url(#paint4_linear_1250_13381)"
                        />
                        <defs>
                            <linearGradient id="paint0_linear_1250_13381" x1="115" y1="48" x2="115" y2="92.6496" gradientUnits="userSpaceOnUse">
                                <stop stopColor="white" />
                                <stop offset="1" stopColor="white" stopOpacity="0" />
                            </linearGradient>
                            <linearGradient id="paint1_linear_1250_13381" x1="115" y1="51.4883" x2="115" y2="89.1613" gradientUnits="userSpaceOnUse">
                                <stop stopColor="white" />
                                <stop offset="1" stopColor="white" stopOpacity="0" />
                            </linearGradient>
                            <linearGradient id="paint2_linear_1250_13381" x1="165.864" y1="0.388733" x2="165.864" y2="10.3887" gradientUnits="userSpaceOnUse">
                                <stop stopColor="white" />
                                <stop offset="1" stopColor="white" stopOpacity="0" />
                            </linearGradient>
                            <linearGradient id="paint3_linear_1250_13381" x1="37.8639" y1="107.389" x2="37.8639" y2="121.389" gradientUnits="userSpaceOnUse">
                                <stop stopColor="white" />
                                <stop offset="1" stopColor="white" stopOpacity="0" />
                            </linearGradient>
                            <linearGradient id="paint4_linear_1250_13381" x1="6.86389" y1="17.3887" x2="6.86389" y2="29.3887" gradientUnits="userSpaceOnUse">
                                <stop stopColor="white" />
                                <stop offset="1" stopColor="white" stopOpacity="0" />
                            </linearGradient>
                        </defs>
                    </svg>
                </span>
                <div className="container">
                    <div className="relative z-[1] flex flex-col gap-[60px] py-20 lg:flex-row">
                        <div className="relative">
                            <span className="absolute top-0 right-5">
                                <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M5.96948 1.18251C6.121 0.0940483 7.42774 -0.38195 8.24292 0.354641L12.6575 4.34154C12.8608 4.525 13.1145 4.64366 13.3857 4.68154L19.2775 5.50256C20.3648 5.65454 20.8399 6.96068 20.1043 7.77623L16.1186 12.1949C15.9351 12.3984 15.8168 12.6521 15.779 12.9237L14.9584 18.8178C14.8069 19.9058 13.5001 20.3818 12.685 19.6457L8.27035 15.6583C8.06708 15.4748 7.81343 15.3566 7.54216 15.3188L1.65043 14.4973C0.563058 14.3458 0.0879843 13.0396 0.823581 12.2241L4.80928 7.80499C4.99279 7.60145 5.11109 7.3477 5.14887 7.07661L5.96948 1.18251Z"
                                        fill="#FFC452"
                                    />
                                </svg>
                            </span>
                            <div className="heading relative text-center lg:max-w-[540px] ltr:lg:text-left rtl:lg:text-right">
                                <h4 className="!text-white">
                                Our  <span className="bg-secondary p-1">Services</span>
                                </h4>
                                <h6 className="mt-5 !font-medium !text-gray">
                                    It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
                                </h6>
                                <span className="absolute right-0 top-0">
                                    <svg width="84" height="52" viewBox="0 0 84 52" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            opacity="0.2"
                                            d="M1 16.2713C30.1519 35.949 93.7378 24.6791 72.0092 4.9489C56.5269 -9.10932 37.9458 16.2713 82.6351 51"
                                            stroke="url(#paint0_linear_1250_13380)"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                        <defs>
                                            <linearGradient
                                                id="paint0_linear_1250_13380"
                                                x1="41.8176"
                                                y1="1"
                                                x2="41.8176"
                                                y2="51"
                                                gradientUnits="userSpaceOnUse"
                                            >
                                                <stop stopColor="white" />
                                                <stop offset="1" stopColor="white" stopOpacity="0" />
                                            </linearGradient>
                                        </defs>
                                    </svg>
                                </span>
                            </div>
                            <div className="lg:mt-12 lg:-mb-5">
                                <img src="/assets/images/application/text.png" alt="" />
                            </div>
                            <div className="grid grid-cols-1 gap-[14px] sm:grid-cols-3">
                                <div className="rounded-[10px] bg-gray-dark py-[30px] px-5" data-aos="fade-up" data-aos-duration="1000">
                                    <span>
                                        <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <g clipPath="url(#clip0_1250_13345)">
                                                <path
                                                    d="M4.09427 7.51633C4.09427 5.62624 5.62569 4.09482 7.51578 4.09332H9.07292C9.97635 4.09332 10.8419 3.73465 11.4835 3.0991L12.5716 2.00955C13.9048 0.668796 16.0718 0.662745 17.4125 1.99593L17.414 1.99744L17.4276 2.00955L18.5172 3.0991C19.1588 3.7362 20.0244 4.09332 20.9278 4.09332H22.4835C24.3736 4.09332 25.9065 5.62474 25.9065 7.51633V9.07043C25.9065 9.97385 26.2636 10.841 26.9007 11.4826L27.9902 12.5722C29.331 13.9053 29.3386 16.0723 28.0054 17.4131L28.0038 17.4146L27.9902 17.4282L26.9007 18.5178C26.2636 19.1579 25.9065 20.0235 25.9065 20.9269V22.484C25.9065 24.3741 24.3751 25.9056 22.485 25.9056H22.4835H20.9248C20.0214 25.9056 19.1543 26.2642 18.5142 26.9013L17.4246 27.9893C16.093 29.3301 13.9275 29.3376 12.5867 28.0075C12.5852 28.006 12.5837 28.0045 12.5822 28.0029L12.5686 27.9893L11.4805 26.9013C10.8404 26.2642 9.9733 25.9071 9.06987 25.9056H7.51578C5.62569 25.9056 4.09427 24.3741 4.09427 22.484V20.9238C4.09427 20.0205 3.73565 19.1549 3.09854 18.5148L2.0105 17.4252C0.669751 16.0935 0.662183 13.928 1.99386 12.5873C1.99386 12.5858 1.99537 12.5842 1.99688 12.5827L2.0105 12.5691L3.09854 11.4795C3.73565 10.8379 4.09427 9.97235 4.09427 9.06742V7.51633Z"
                                                    fill="#47BDFF"
                                                    fillOpacity="0.2"
                                                    stroke="#47BDFF"
                                                    strokeWidth="2"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                                <path
                                                    d="M10.5122 14.9982L13.9158 18.4004L20.7203 11.5959"
                                                    stroke="#47BDFF"
                                                    strokeWidth="2"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_1250_13345">
                                                    <rect width="30" height="30" fill="white" />
                                                </clipPath>
                                            </defs>
                                        </svg>
                                    </span>
                                    <h3 className="mt-2.5 text-lg font-extrabold text-white">iOS App Development</h3>
                                    <p className="mt-2.5 text-sm font-semibold leading-7">
                                    We craft high-quality, feature-rich iOS applications tailored to the Apple ecosystem
                                    </p>
                                </div>
                                <div className="sm:-mt-5" data-aos="fade-up" data-aos-duration="1000">
                                    <div className="rounded-[10px] bg-white py-[30px] px-5">
                                        <span>
                                        <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M11.9755 7.02706C12.4315 6.20905 12.6595 5.80005 13.0004 5.80005C13.3413 5.80005 13.5693 6.20905 14.0253 7.02706L14.1432 7.23869C14.2728 7.47115 14.3376 7.58737 14.4386 7.66406C14.5396 7.74075 14.6654 7.76921 14.9171 7.82615L15.1462 7.87798C16.0316 8.07833 16.4744 8.1785 16.5797 8.51723C16.6851 8.85596 16.3832 9.20891 15.7796 9.91482L15.6234 10.0974C15.4518 10.298 15.3661 10.3983 15.3275 10.5224C15.2889 10.6465 15.3019 10.7803 15.3278 11.048L15.3514 11.2916C15.4427 12.2335 15.4883 12.7044 15.2125 12.9137C14.9368 13.1231 14.5222 12.9322 13.6931 12.5505L13.4787 12.4517C13.2431 12.3432 13.1253 12.289 13.0004 12.289C12.8755 12.289 12.7577 12.3432 12.5221 12.4517L12.3076 12.5505C11.4786 12.9322 11.064 13.1231 10.7882 12.9137C10.5125 12.7044 10.5581 12.2335 10.6494 11.2916L10.673 11.048C10.6989 10.7803 10.7119 10.6465 10.6733 10.5224C10.6347 10.3983 10.5489 10.298 10.3774 10.0974L10.2212 9.91482C9.61756 9.20891 9.31573 8.85596 9.42106 8.51723C9.5264 8.1785 9.96914 8.07833 10.8546 7.87798L11.0837 7.82615C11.3353 7.76921 11.4612 7.74075 11.5622 7.66406C11.6632 7.58737 11.728 7.47115 11.8576 7.23869L11.9755 7.02706Z"
                                                     fillRule="evenodd"
                                                clipRule="evenodd"
                                              
                                                    stroke="#47BDFF"
                                                    strokeWidth="2"
                                                    strokeLinecap="square"
                                                />
                                                <path
                                                    d="M13 17.8814L8.47425 22.5674C7.82611 23.2385 7.50204 23.574 7.2276 23.6901C6.60222 23.9547 5.9085 23.7283 5.57953 23.1522C5.43516 22.8994 5.39018 22.4434 5.3002 21.5314C5.2494 21.0164 5.224 20.759 5.1469 20.5433C4.97429 20.0605 4.61159 19.685 4.14533 19.5063C3.93705 19.4264 3.68839 19.4001 3.19107 19.3475C2.31024 19.2544 1.86983 19.2078 1.62566 19.0583C1.06926 18.7177 0.850571 17.9994 1.10611 17.3519C1.21826 17.0677 1.54233 16.7322 2.19047 16.0611L5.1469 13"
                                                     fillRule="evenodd"
                                                clipRule="evenodd"
                                           
                                                    stroke="#47BDFF"
                                                    strokeWidth="2"
                                                    strokeLinecap="square"
                                                />
                                                <path
                                                    d="M13 17.8814L17.5257 22.5674C18.1739 23.2385 18.498 23.574 18.7724 23.6901C19.3978 23.9547 20.0915 23.7283 20.4205 23.1522C20.5648 22.8994 20.6098 22.4434 20.6998 21.5314C20.7506 21.0164 20.776 20.759 20.8531 20.5433C21.0257 20.0605 21.3884 19.685 21.8547 19.5063C22.0629 19.4264 22.3116 19.4001 22.8089 19.3475C23.6898 19.2544 24.1302 19.2078 24.3743 19.0583C24.9307 18.7177 25.1494 17.9994 24.8939 17.3519C24.7817 17.0677 24.4577 16.7322 23.8095 16.0611L20.8531 13"
                                                     fillRule="evenodd"
                                                clipRule="evenodd"
                                                
                                                    stroke="#47BDFF"
                                                    strokeWidth="2"
                                                    strokeLinecap="square"
                                                />
                                                <path
                                                    d="M5.19961 6.2763C4.81255 7.2419 4.59961 8.29608 4.59961 9.4C4.59961 14.0392 8.36042 17.8 12.9996 17.8C17.6388 17.8 21.3996 14.0392 21.3996 9.4C21.3996 4.76081 17.6388 1 12.9996 1C11.8957 1 10.8415 1.21295 9.87591 1.6"
                                                     fillRule="evenodd"
                                                clipRule="evenodd"
                                            
                                                    stroke="#47BDFF"
                                                    strokeWidth="2"
                                                    strokeLinecap="square"
                                                />
                                            </svg>
                                        </span>
                                        <h3 className="mt-2.5 text-lg font-extrabold text-black">App Testing and Quality Assurance</h3>
                                        <p className="mt-2.5 text-sm font-semibold leading-7">
                                        We conduct rigorous testing to ensure your app functions flawlessly across various devices and scenarios.
                                        </p>
                                    </div>
                                </div>
                                <div className="rounded-[10px] bg-gray-dark py-[30px] px-5" data-aos="fade-up" data-aos-duration="1000">
                                    <span>
                                        <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                fillRule="evenodd"
                                                clipRule="evenodd"
                                                d="M15.4853 29C15.4853 29 26.8778 25.5505 26.8778 16.041C26.8778 6.52994 27.2906 5.78743 26.3774 4.87272C25.4627 3.958 16.9792 1 15.4853 1C13.9915 1 5.50805 3.958 4.59479 4.87272C3.68008 5.78743 4.09292 6.52994 4.09292 16.041C4.09292 25.5505 15.4853 29 15.4853 29Z"
                                                fill="#47BDFF"
                                                fillOpacity="0.2"
                                                stroke="#47BDFF"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                            <path
                                                d="M11.6275 14.5495L14.437 17.3634L20.2253 11.5721"
                                                stroke="#47BDFF"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                        </svg>
                                    </span>
                                    <h3 className="mt-2.5 text-lg font-extrabold text-white">Android App Development</h3>
                                    <p className="mt-2.5 text-sm font-semibold leading-7">
                                    Our Android app developers create scalable, robust apps that cater to the diverse Android user base.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="relative mx-auto w-full max-w-[292px]">
                            <img src="\assets\images\Gallary\mobiledevelopmet.png" alt="" />
                            <span className="absolute -top-6 -left-6">
                                <svg width="43" height="50" viewBox="0 0 43 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g opacity="0.2">
                                        <path
                                            d="M5.76505 21.076C5.06754 20.765 4.24973 21.0781 3.93865 21.7755C3.62757 22.4729 3.94072 23.2903 4.63824 23.6014L5.76505 21.076ZM24.0699 32.2677C24.7674 32.5787 25.5852 32.2655 25.8963 31.5681C26.2074 30.8708 25.8935 30.0533 25.1967 29.7423L24.0699 32.2677ZM4.63824 23.6014L24.0699 32.2677L25.1967 29.7423L5.76505 21.076L4.63824 23.6014Z"
                                            fill="url(#paint0_linear_1250_13375)"
                                        />
                                        <path
                                            d="M1.06353 47.2718C0.321082 47.4479 -0.138637 48.193 0.0376441 48.936C0.213925 49.679 0.958449 50.1385 1.70159 49.9624L1.06353 47.2718ZM23.5666 44.7786C24.3091 44.6025 24.7688 43.8574 24.5925 43.1144C24.4162 42.3714 23.6717 41.9119 22.9286 42.088L23.5666 44.7786ZM1.70159 49.9624L23.5666 44.7786L22.9286 42.088L1.06353 47.2718L1.70159 49.9624Z"
                                            fill="url(#paint1_linear_1250_13375)"
                                        />
                                        <path
                                            d="M23.2445 10.1429C22.7854 9.53301 21.9186 9.411 21.3088 9.87043C20.6984 10.3298 20.5767 11.1967 21.0358 11.8066L23.2445 10.1429ZM30.5328 24.4148C30.9925 25.0246 31.8594 25.1466 32.4691 24.6873C33.0788 24.2278 33.2012 23.3609 32.7415 22.751L30.5328 24.4148ZM21.0358 11.8066L30.5328 24.4148L32.7415 22.751L23.2445 10.1429L21.0358 11.8066Z"
                                            fill="url(#paint2_linear_1250_13375)"
                                        />
                                        <path
                                            d="M41.4892 1.31791C41.4532 0.555202 40.8062 -0.0341968 40.043 0.0015432C39.2805 0.0372832 38.6915 0.684544 38.7267 1.44732L41.4892 1.31791ZM39.5874 19.825C39.6233 20.5877 40.2711 21.1771 41.0336 21.1414C41.7961 21.1057 42.3858 20.4584 42.3498 19.6956L39.5874 19.825ZM38.7267 1.44732L39.5874 19.825L42.3498 19.6956L41.4892 1.31791L38.7267 1.44732Z"
                                            fill="url(#paint3_linear_1250_13375)"
                                        />
                                    </g>
                                    <defs>
                                        <linearGradient
                                            id="paint0_linear_1250_13375"
                                            x1="14.9174"
                                            y1="20.9557"
                                            x2="14.9174"
                                            y2="32.388"
                                            gradientUnits="userSpaceOnUse"
                                        >
                                            <stop stopColor="white" />
                                            <stop offset="1" stopColor="white" stopOpacity="0" />
                                        </linearGradient>
                                        <linearGradient
                                            id="paint1_linear_1250_13375"
                                            x1="12.3151"
                                            y1="42.0504"
                                            x2="12.3151"
                                            y2="50"
                                            gradientUnits="userSpaceOnUse"
                                        >
                                            <stop stopColor="white" />
                                            <stop offset="1" stopColor="white" stopOpacity="0" />
                                        </linearGradient>
                                        <linearGradient
                                            id="paint2_linear_1250_13375"
                                            x1="26.8888"
                                            y1="9.5921"
                                            x2="26.8888"
                                            y2="24.9656"
                                            gradientUnits="userSpaceOnUse"
                                        >
                                            <stop stopColor="white" />
                                            <stop offset="1" stopColor="white" stopOpacity="0" />
                                        </linearGradient>
                                        <linearGradient
                                            id="paint3_linear_1250_13375"
                                            x1="40.5383"
                                            y1="0"
                                            x2="40.5383"
                                            y2="21.1429"
                                            gradientUnits="userSpaceOnUse"
                                        >
                                            <stop stopColor="white" />
                                            <stop offset="1" stopColor="white" stopOpacity="0" />
                                        </linearGradient>
                                    </defs>
                                </svg>
                            </span>
                            <span className="absolute -bottom-3 -right-3">
                                <svg width="58" height="54" viewBox="0 0 58 54" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        opacity="0.2"
                                        d="M2 52H17.1024C38.5891 52 56 34.7801 56 13.5383V2"
                                        stroke="url(#paint0_linear_1250_13382)"
                                        strokeWidth="3"
                                        strokeLinecap="round"
                                    />
                                    <defs>
                                        <linearGradient id="paint0_linear_1250_13382" x1="29" y1="52" x2="29" y2="2" gradientUnits="userSpaceOnUse">
                                            <stop stopColor="white" />
                                            <stop offset="1" stopColor="white" stopOpacity="0" />
                                        </linearGradient>
                                    </defs>
                                </svg>
                            </span>
                        </div>
                    </div>
                </div>
            </section>

           
        </div>
    );
};

export default Application;

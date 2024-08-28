import CounterComponent from '../components/CounterComponent';
import Testimonial from '../components/Testimonial';
import ProjectSlider from '../components/ProjectSlider';
import Modal from '../components/Modal';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation, Autoplay, Virtual } from 'swiper';
import Link from 'next/link';
import Head from 'next/head';
import { useRef } from 'react';
import { useSelector } from 'react-redux';
import { IRootState } from '../store';

const Services = () => {
    const dialog: any = useRef();
    const isRtl = useSelector((state: IRootState) => state.themeConfig.direction) === 'rtl' ? true : false;

    return (
        <div>
            <Head>
                <title>Services | Plurk – Tailwind CSS Multipurpose Landing Templates</title>
            </Head>
 

            <div className="overflow-hidden bg-black pt-[82px] lg:pt-[106px]">
                <div className="relative">
                  
                    <div className="container">
                         <img className="absolute inset-0 object-cover w-full h-full" src='\assets\images\Gallary\serviceBack.jpg'/>
                        <div className="relative flex flex-col items-center bg-[url(/assets/images/world-map.png)] bg-cover bg-top bg-no-repeat lg:flex-row">
                            <div className="flex-1 py-10 text-center text-white ltr:lg:text-left rtl:lg:text-right ">
                            <h6 className="!text-primary ">Services</h6>
                                <h4 className="!text-white text-3xl" >Empowering Transformation </h4>
                                <h4 className="!text-white text-3xl" > through High-Impact Services</h4>
                                <div>
                              
                                </div>
                                <div className='flex   w-70%  pt-10% '>
                                <img className="h-20 w-20 animate-spin" src='\assets\images\Gallary\doco.png'/>
                                </div>
                            </div>
                            <div
                               
                                    className="rtl:rotate-y-0 mx-auto h-[500px] w-full max-w-[560px]"
                                   >
                                   
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <section className="py-14 lg:py-[100px]">
                <CounterComponent />
            </section>

            <ProjectSlider title1="Our Project" title2="Some of our finest work." />

            <section className="bg-gradient-to-b from-white/[55%] to-transparent py-14 dark:from-white/5 lg:py-[100px]">
                <div className="container">
                    <div className="grid items-center gap-5 md:gap-10 lg:grid-cols-2">
                        <div className="heading text-center ltr:lg:text-left rtl:lg:text-right">
                            <h6>How We Do It?</h6>
                            <h4>We make your spending stress-free for you to have the perfect control.</h4>
                            <p className="pt-5 text-lg font-semibold">
                                Find out everything you need to know and more about how we create our business process models.
                            </p>
                        </div>
                        <div className="grid gap-4 rounded-[32px] sm:grid-cols-2 sm:gap-0">
                            <div
                                className="flex h-[200px] gap-4 py-7 px-4 text-white ltr:rounded-tl-[32px] rtl:rounded-tr-[32px]"
                                style={{ background: 'linear-gradient(130.61deg, #FFBD11 0%, #FF8E00 100%)' }}
                                data-aos="fade-up"
                                data-aos-duration="1000"
                            >
                                <div className="pt-1">
                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g clipPath="url(#clip0_290_1513)">
                                            <path
                                                opacity="0.5"
                                                d="M4.2104 20.0002H1.0526C0.773432 20.0002 0.5057 19.8893 0.308299 19.6919C0.110898 19.4945 0 19.2268 0 18.9476V10.5268C0 10.2476 0.110898 9.9799 0.308299 9.7825C0.5057 9.5851 0.773432 9.4742 1.0526 9.4742H4.2104C4.48956 9.4742 4.7573 9.5851 4.9547 9.7825C5.1521 9.9799 5.263 10.2476 5.263 10.5268V18.9476C5.263 19.2268 5.1521 19.4945 4.9547 19.6919C4.7573 19.8893 4.48956 20.0002 4.2104 20.0002ZM18.9468 20.0002H15.789C15.5098 20.0002 15.2421 19.8893 15.0447 19.6919C14.8473 19.4945 14.7364 19.2268 14.7364 18.9476V7.36901C14.7364 7.08984 14.8473 6.82211 15.0447 6.62471C15.2421 6.42731 15.5098 6.31641 15.789 6.31641H18.9468C19.226 6.31641 19.4937 6.42731 19.6911 6.62471C19.8885 6.82211 19.9994 7.08984 19.9994 7.36901V18.9476C19.9994 19.2268 19.8885 19.4945 19.6911 19.6919C19.4937 19.8893 19.226 20.0002 18.9468 20.0002Z"
                                                fill="white"
                                            />
                                            <path
                                                d="M11.5787 19.9994H8.42089C8.14172 19.9994 7.87399 19.8885 7.67659 19.6911C7.47918 19.4937 7.36829 19.226 7.36829 18.9468V1.0526C7.36829 0.773432 7.47918 0.5057 7.67659 0.308299C7.87399 0.110898 8.14172 0 8.42089 0H11.5787C11.8579 0 12.1256 0.110898 12.323 0.308299C12.5204 0.5057 12.6313 0.773432 12.6313 1.0526V18.9468C12.6313 19.226 12.5204 19.4937 12.323 19.6911C12.1256 19.8885 11.8579 19.9994 11.5787 19.9994Z"
                                                fill="white"
                                            />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_290_1513">
                                                <rect width="20" height="20" fill="white" />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="pb-2 text-lg font-extrabold">Analysis & Planning</h3>
                                    <p className="text-sm font-bold leading-5 opacity-80 line-clamp-6">
                                        The very first step that we follow while developing apps or working on any project, begins with analysis.
                                    </p>
                                </div>
                            </div>
                            <div
                                className="flex h-[200px] gap-4 py-7 px-4 text-white ltr:rounded-tr-[32px] rtl:rounded-tl-[32px]"
                                style={{ background: 'linear-gradient(130.61deg, #FFBD11 0%, #FF8E00 100%)' }}
                                data-aos="fade-up"
                                data-aos-duration="1000"
                            >
                                <div className="pt-1">
                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g clipPath="url(#clip0_290_1534)">
                                            <path
                                                opacity="0.5"
                                                d="M12.2371 16.7087L16.7103 12.2366L19.4893 15.0156V19.4888H15.0172L12.2371 16.7087ZM3.2917 7.76334L0.3092 4.7819C0.211179 4.68399 0.133418 4.56771 0.080363 4.43973C0.0273081 4.31174 0 4.17455 0 4.03601C0 3.89746 0.0273081 3.76027 0.080363 3.63229C0.133418 3.5043 0.211179 3.38803 0.3092 3.29012L3.2917 0.308673C3.4894 0.11103 3.75751 0 4.03706 0C4.31662 0 4.58472 0.11103 4.78242 0.308673L7.76598 3.29012L3.2917 7.76334Z"
                                                fill="white"
                                            />
                                            <path
                                                d="M3.29183 10.7457L5.21902 12.6739L6.71185 11.1811L4.78255 9.25497L6.27327 7.76424L8.20152 9.69143L9.69224 8.20071L7.76611 6.27246L9.25683 4.78174L11.1819 6.71104L12.6737 5.21926L10.7454 3.29207L13.7279 0.310626C13.9256 0.112983 14.1938 0.00195312 14.4733 0.00195312C14.7529 0.00195312 15.021 0.112983 15.2187 0.310626L19.6908 4.7828C19.8885 4.9805 19.9995 5.24861 19.9995 5.52816C19.9995 5.80771 19.8885 6.07582 19.6908 6.27352L6.27327 19.6911C6.07557 19.8887 5.80747 19.9998 5.52791 19.9998C5.24836 19.9998 4.98026 19.8887 4.78255 19.6911L0.310382 15.2189C0.112739 15.0212 0.00170898 14.7531 0.00170898 14.4735C0.00170898 14.194 0.112739 13.9259 0.310382 13.7282L3.29183 10.7457Z"
                                                fill="white"
                                            />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_290_1534">
                                                <rect width="20" height="20" fill="white" />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="pb-2 text-lg font-extrabold">Design</h3>
                                    <p className="text-sm font-bold leading-5 opacity-80 line-clamp-6">
                                        Designing helps us understand the engagement of users if the product is user-friendly, intuitive, and reciprocal.
                                    </p>
                                </div>
                            </div>
                            <div
                                className="flex h-[200px] gap-4 py-7 px-4 text-white ltr:rounded-tl-[32px] rtl:rounded-tr-[32px] ltr:sm:rounded-tl-none ltr:sm:rounded-bl-[32px] rtl:sm:rounded-tr-none rtl:sm:rounded-br-[32px]"
                                style={{ background: 'linear-gradient(130.61deg, #38EF7D 0%, #11998E 100%)' }}
                                data-aos="fade-up"
                                data-aos-duration="1000"
                            >
                                <div className="pt-1">
                                    <svg width="22" height="20" viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            opacity="0.5"
                                            d="M9.26036 16.75C9.68075 16.75 10.0563 16.4871 10.2 16.092L14.477 4.34204C14.7145 3.68981 14.2315 3 13.5374 3H12.7397C12.3193 3 11.9438 3.26292 11.8 3.65796L7.52305 15.408C7.28564 16.0602 7.76863 16.75 8.46273 16.75H9.26036Z"
                                            fill="white"
                                        />
                                        <path
                                            d="M16.4309 14.0301C16.8214 14.4208 17.4547 14.4209 17.8454 14.0303L21.2929 10.5828C21.6834 10.1923 21.6834 9.55909 21.2929 9.16857L17.8456 5.72128C17.4549 5.33056 16.8213 5.33078 16.4309 5.72178L15.9002 6.25323C15.51 6.64397 15.5104 7.277 15.901 7.66728L17.4036 9.1684C17.7945 9.55893 17.7945 10.1925 17.4037 10.5831L15.9009 12.0852C15.5104 12.4756 15.5102 13.1087 15.9005 13.4993L16.4309 14.0301ZM4.59644 10.5829C4.20554 10.1924 4.20546 9.55886 4.59627 9.16823L6.09906 7.66615C6.48964 7.27575 6.48983 6.64265 6.09948 6.25202L5.56911 5.72128C5.17862 5.33052 4.54527 5.33041 4.15464 5.72103L0.707107 9.16856C0.316583 9.55909 0.316582 10.1923 0.707107 10.5828L4.15439 14.0301C4.54511 14.4208 5.17866 14.4206 5.56911 14.0296L6.09981 13.4981C6.48999 13.1074 6.48962 12.4743 6.09898 12.0841L4.59644 10.5829Z"
                                            fill="white"
                                        />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="pb-2 text-lg font-extrabold">Development</h3>
                                    <p className="text-sm font-bold leading-5 opacity-80 line-clamp-6">
                                        This is the main part of our process beca-use the product that we deliver depends on the efforts made during this stage.
                                    </p>
                                </div>
                            </div>
                            <div
                                className="flex h-[200px] gap-4 py-7 px-4 text-white ltr:rounded-tr-[32px] rtl:rounded-tl-[32px] ltr:sm:rounded-tr-none ltr:sm:rounded-br-[32px] rtl:sm:rounded-tl-none rtl:sm:rounded-bl-[32px]"
                                style={{ background: 'linear-gradient(130.61deg, #56CCF2 0%, #2F80ED 100%)' }}
                                data-aos="fade-up"
                                data-aos-duration="1000"
                            >
                                <div className="pt-1">
                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            opacity="0.3"
                                            d="M9.96489 0.0482068C10.1078 0.0164562 10.2559 0.0164562 10.3987 0.0482068L17.6518 1.66C18.0673 1.75273 18.3636 2.12091 18.3636 2.54727V11.6264C18.3636 13.45 17.4518 15.1536 15.9345 16.1645L10.7365 19.6301C10.4006 19.8541 9.963 19.8541 9.62709 19.6301L4.42909 16.1645C2.91091 15.1527 2 13.45 2 11.6273V2.54727C2 2.12091 2.29636 1.75273 2.71182 1.66L9.96489 0.0482068Z"
                                            fill="white"
                                        />
                                        <path
                                            d="M14.872 7.20887C14.5168 6.854 13.9413 6.85407 13.5863 7.20904L10.4362 10.3585C10.0456 10.749 9.4125 10.749 9.02201 10.3585L7.80086 9.13732C7.44589 8.78235 6.87038 8.78235 6.51541 9.13732C6.16044 9.49228 6.16044 10.0678 6.51541 10.4228L9.02285 12.9302C9.41337 13.3207 10.0465 13.3207 10.4371 12.9302L14.8722 8.49508C15.2274 8.13988 15.2273 7.56395 14.872 7.20887Z"
                                            fill="white"
                                        />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="pb-2 text-lg font-extrabold">Testing</h3>
                                    <p className="text-sm font-bold leading-5 opacity-80 line-clamp-6">
                                        Testing is obligatory to an app’s future success; it surrounds a significant section of our overall mobile app
                                        development process.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

          
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
                <div className="bg-black !p-4 dark:bg-gray-dark">
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

            <section className="bg-white/50 py-14 dark:bg-transparent lg:py-[100px]">
                <div className="container">
                    <div className="heading text-center">
                        <h4>What Technologies Do We Use?</h4>
                    </div>
                    <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-6 md:grid-cols-4 lg:grid-cols-6">
                        <div data-aos="fade-up" data-aos-duration="1000">
                            <div className="group flex items-center justify-center rounded-[32px] bg-gray/10 py-[50px] px-[50px] transition duration-500 hover:scale-105 hover:bg-[#DF2E31] hover:drop-shadow-[0_5px_13px_rgba(60,72,88,0.20)]">
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
                        <div data-aos="fade-up" data-aos-duration="1000">
                            <div className="group flex items-center justify-center rounded-[32px] bg-gray/10 py-[50px] px-[50px] transition duration-500 hover:scale-105 hover:bg-black hover:drop-shadow-[0_5px_13px_rgba(60,72,88,0.20)]">
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
                            <div className="group flex items-center justify-center rounded-[32px] bg-gray/10 py-[50px] px-[50px] transition duration-500 hover:scale-105 hover:bg-[#41D0FD] hover:drop-shadow-[0_5px_13px_rgba(60,72,88,0.20)]">
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
                            <div className="group flex items-center justify-center rounded-[32px] bg-gray/10 py-[50px] px-[50px] transition duration-500 hover:scale-105 hover:bg-[#E54C21] hover:drop-shadow-[0_5px_13px_rgba(60,72,88,0.20)]">
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
                            <div className="group flex items-center justify-center rounded-[32px] bg-gray/10 py-[50px] px-[50px] transition duration-500 hover:scale-105 hover:bg-black hover:drop-shadow-[0_5px_13px_rgba(60,72,88,0.20)]">
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
                            <div className="group flex items-center justify-center rounded-[32px] bg-gray/10 py-[50px] px-[50px] transition duration-500 hover:scale-105 hover:bg-[#01D8FF] hover:drop-shadow-[0_5px_13px_rgba(60,72,88,0.20)]">
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
                </div>
            </section>


            <Testimonial />

            <section className="relative overflow-x-hidden border-t-2 border-transparent px-4 py-14 dark:border-gray/20 lg:py-[100px]">
                <div className="items-center justify-center gap-10 lg:flex">
                    <div className="text-center" data-aos={isRtl ? 'fade-left' : 'fade-right'} data-aos-duration="1000">
                        <img src="/assets/images/services-form-txt.png" alt="services-form-txt" className="mx-auto mb-10 sm:pt-4 xl:mx-0" />
                        <form action="" className="relative z-[1] text-center lg:pt-[50px]">
                            <div className="relative inline-block w-full sm:w-auto">
                                <input
                                    type="email"
                                    placeholder="Email Address"
                                    className="w-full rounded-3xl py-4 font-bold leading-5 outline-none ltr:pl-4 ltr:pr-[110px] rtl:pr-4 rtl:pl-[110px] dark:bg-gray-dark sm:w-[540px] sm:py-6 ltr:sm:pl-[30px] ltr:sm:pr-[140px] rtl:sm:pr-[30px] rtl:sm:pl-[140px]"
                                />
                                <button
                                    type="submit"
                                    className="absolute top-0 h-full bg-secondary px-4 font-extrabold uppercase text-white ltr:right-0 ltr:rounded-r-3xl rtl:left-0 rtl:rounded-l-3xl sm:px-7"
                                >
                                    submit
                                </button>
                            </div>
                        </form>
                    </div>
                    <div className="mt-10 lg:mt-0" data-aos={isRtl ? 'fade-right' : 'fade-left'} data-aos-duration="1000">
                        <svg
                            width="320"
                            height="282"
                            viewBox="0 0 320 282"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="mx-auto my-8 w-[90%] sm:w-auto"
                        >
                            <path
                                d="M254.182 123.52L203.127 119.709C198.183 119.334 193.219 120.151 188.656 122.091L175.076 127.872C173.249 131.184 171.005 134.248 168.397 136.989C161.845 143.977 136.719 156.969 123.457 159.701C120.332 160.256 117.111 159.694 114.361 158.113C108.352 162.928 102.056 167.373 95.5072 171.426C95.5072 171.426 107.911 206.717 154.095 186.768L190.829 170.854L182.782 190.136C183.005 201.158 183.069 215.611 182.337 225.245C190.961 227.868 200.16 227.956 208.832 225.497C212.297 201.991 214.937 164.889 205.968 150.88L249.86 150.467C255.391 140.518 254.904 134.861 254.182 123.52Z"
                                fill="#B476E5"
                            ></path>
                            <path
                                d="M172.633 109.862L177.977 86.3878C178.096 85.8739 178.003 85.3342 177.724 84.8875C177.443 84.4406 176.996 84.1235 176.482 84.0054C175.968 83.8876 175.427 83.9785 174.98 84.2585C174.532 84.5386 174.215 84.9845 174.097 85.4984L167.799 113.166"
                                fill="#B476E5"
                            ></path>
                            <path
                                d="M172.633 109.862L177.977 86.3878C178.096 85.8739 178.003 85.3342 177.724 84.8875C177.443 84.4406 176.996 84.1235 176.482 84.0054C175.968 83.8876 175.427 83.9785 174.98 84.2585C174.532 84.5386 174.215 84.9845 174.097 85.4984L167.799 113.166C168.591 116.084 170.719 119.996 172.633 109.862Z"
                                fill="#B476E5"
                            ></path>
                            <path
                                d="M168.499 20.9169C168.499 24.8561 167.329 28.7067 165.138 31.982C162.946 35.2574 159.832 37.8102 156.189 39.3177C152.545 40.8252 148.535 41.2196 144.667 40.451C140.799 39.6826 137.245 37.7857 134.457 35.0003C131.668 32.2148 129.768 28.6659 128.999 24.8024C128.23 20.9389 128.625 16.9343 130.134 13.295C131.643 9.65572 134.199 6.54505 137.478 4.35659C140.758 2.16813 144.613 1 148.557 1C153.845 1.00318 158.916 3.10253 162.655 6.83696C166.393 10.5714 168.495 15.6356 168.499 20.9169Z"
                                fill="#B476E5"
                            ></path>
                            <path
                                d="M272.632 126.031C268.973 134.696 263.804 142.644 257.366 149.506C260.896 150.046 264.427 150.843 267.448 151.316C270.595 149.945 273.546 148.163 276.223 146.015C284.593 139.281 301.834 130.926 305.61 126.161C298.772 125.173 282.043 125.84 272.632 126.031Z"
                                fill="#47BDFF"
                            ></path>
                            <path
                                d="M207.937 244.834C199.124 241.511 190.97 236.649 183.861 230.475C183.447 234.002 182.811 237.56 182.43 240.609C183.921 243.702 185.814 246.586 188.059 249.186C195.089 257.254 204.09 274.154 208.983 277.775C209.75 270.914 208.479 254.237 207.937 244.834Z"
                                fill="#47BDFF"
                            ></path>
                            <path
                                d="M98.7515 144.136C98.1154 144.454 97.4475 144.739 96.7796 145.025C93.6602 141.364 90.7292 137.548 87.9982 133.59C88.2844 134.259 97.0625 153.221 111.629 160.368C112.583 159.606 113.505 158.875 114.364 158.144C108.922 155.19 103.268 149.472 98.7515 144.136Z"
                                fill="#47BDFF"
                            ></path>
                            <path d="M182.398 174.472C182.398 174.472 182.684 181.174 182.843 190.1L190.826 170.851L182.398 174.472Z" fill="#47BDFF"></path>
                            <path
                                d="M96.7478 60.7848C96.7478 60.7848 91.1787 50.3641 78.0785 56.7189C64.9784 63.0736 67.5194 88.6112 67.5194 88.6112C67.5194 88.6112 55.8772 94.1702 49.6753 103.541C40.0703 118.058 44.9063 139.976 74.7742 139.976C73.3503 133.718 72.8574 127.286 73.3112 120.885C74.1063 109.608 78.2091 99.2844 81.8348 88.7065C86.4582 75.0324 85.4656 76.1258 87.0826 71.1085C83.2325 67.4555 87.8141 63.0719 89.8814 66.628C90.7569 68.0658 90.9661 68.1226 91.6658 68.3416C95.4556 69.527 102.332 70.8494 106.062 69.6156C106.067 69.5186 106.385 60.7848 96.7478 60.7848Z"
                                fill="#47BDFF"
                            ></path>
                            <path
                                d="M89.6872 93.1215L86.2843 84.6084C87.4194 86.1276 88.757 87.4848 90.2599 88.6426C89.9802 90.1228 89.789 91.6185 89.6872 93.1215Z"
                                fill="#47BDFF"
                            ></path>
                            <path
                                d="M134.69 237.37C134.911 238.445 134.807 239.56 134.392 240.575C133.978 241.59 133.271 242.459 132.362 243.074C131.452 243.688 130.381 244.019 129.283 244.025C128.185 244.03 127.11 243.711 126.194 243.108C125.278 242.504 124.562 241.641 124.136 240.632C123.71 239.62 123.594 238.507 123.802 237.43C124.01 236.353 124.534 235.362 125.305 234.583C126.077 233.804 127.063 233.27 128.139 233.05C128.853 232.899 129.59 232.893 130.307 233.03C131.025 233.167 131.708 233.443 132.317 233.846C132.926 234.247 133.45 234.765 133.857 235.37C134.264 235.976 134.548 236.654 134.69 237.37Z"
                                fill="#47BDFF"
                            ></path>
                            <path
                                d="M168.499 20.9169C168.499 24.8561 167.329 28.7067 165.137 31.9821C162.946 35.2574 159.832 37.8101 156.188 39.3177C152.545 40.8252 148.535 41.2196 144.667 40.451C140.799 39.6826 137.245 37.7857 134.457 35.0003C131.668 32.2148 129.768 28.6659 128.999 24.8024C128.229 20.9389 128.624 16.9343 130.134 13.295C131.643 9.65572 134.199 6.54505 137.478 4.35659C140.758 2.16813 144.613 1 148.557 1C153.845 1.00318 158.915 3.10253 162.655 6.83696C166.393 10.5714 168.495 15.6356 168.499 20.9169Z"
                                stroke="#7780A1"
                                strokeWidth="0.75"
                            ></path>
                            <path
                                d="M212.103 186.067L228.546 194.357C231.921 196.054 235.833 196.345 239.421 195.167C243.012 193.988 245.987 191.435 247.694 188.068L266.522 150.839"
                                stroke="#7780A1"
                                strokeWidth="0.75"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            ></path>
                            <path
                                d="M278.449 127.269L290.058 104.335C291.757 100.964 292.048 97.0577 290.868 93.4729C289.688 89.8879 287.132 86.917 283.76 85.2119L167.571 26.584M101.709 102.88L135.419 36.1878"
                                stroke="#7780A1"
                                strokeWidth="0.75"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            ></path>
                            <path
                                d="M290.599 92.5821L193.561 108.211L157.692 38.6367"
                                stroke="#7780A1"
                                strokeWidth="0.75"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            ></path>
                            <path
                                d="M140.392 191.371C133.153 199.321 124.384 205.732 114.61 210.223C104.836 214.715 94.2565 217.194 83.5022 217.514C72.7479 217.833 62.0394 215.986 52.0153 212.082C41.9913 208.178 32.8572 202.298 25.1578 194.793C17.4584 187.287 11.3514 178.31 7.20105 168.396C3.05076 158.482 0.942231 147.834 1.0012 137.089C1.06018 126.343 3.28546 115.72 7.54432 105.852C11.8032 95.9836 18.0084 87.0734 25.7897 79.6523"
                                stroke="#7780A1"
                                strokeWidth="0.75"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            ></path>
                            <path
                                d="M89.6867 95.7573C89.5973 93.3497 89.802 90.94 90.296 88.5817C94.1728 91.1714 97.3767 89.5614 99.7286 86.211C102.745 81.3349 104.294 75.6948 104.19 69.9639"
                                stroke="#7780A1"
                                strokeWidth="0.75"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            ></path>
                            <path
                                d="M87.998 133.591C90.728 137.549 93.6577 141.365 96.7761 145.026C101.788 142.928 106.405 139.991 110.429 136.343C113.409 133.64 116.083 130.619 118.403 127.333C112.915 120.166 107.83 112.7 103.17 104.97C100.901 101.2 97.4947 98.2448 93.4399 96.5273C91.7007 95.8524 89.8227 95.6125 87.9695 95.8285C86.5932 96.1891 85.1515 96.221 83.7604 95.9219C82.3696 95.6228 81.0688 95.0009 79.9631 94.1064"
                                stroke="#7780A1"
                                strokeWidth="0.75"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            ></path>
                            <path
                                d="M254.436 125.998C258.762 126.157 267.349 126.125 272.597 126.03C268.948 134.692 263.79 142.64 257.364 149.504C255.742 149.25 252.307 148.901 250.749 148.806"
                                stroke="#7780A1"
                                strokeWidth="0.75"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            ></path>
                            <path
                                d="M305.608 126.157C307.421 126.411 308.586 126.826 308.725 127.396C309.606 131.004 290.701 139.768 282.2 146.614C279.728 148.63 276.963 150.259 273.998 151.442C271.835 151.839 269.616 151.797 267.47 151.315C270.622 149.948 273.576 148.166 276.255 146.014C284.601 139.293 301.825 130.954 305.608 126.157Z"
                                stroke="#7780A1"
                                strokeWidth="0.75"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            ></path>
                            <path
                                d="M272.632 126.03C282.047 125.839 298.776 125.172 305.609 126.157C301.824 130.922 284.593 139.284 276.221 146.01C273.545 148.162 270.593 149.946 267.443 151.315C264.422 150.839 260.891 150.044 257.361 149.504C263.801 142.643 268.971 134.695 272.632 126.03Z"
                                stroke="#7780A1"
                                strokeWidth="0.75"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            ></path>
                            <path
                                d="M207.555 225.869C207.269 230.634 207.555 237.654 207.937 244.865C199.135 241.535 190.995 236.673 183.892 230.507C184.083 228.887 184.21 227.267 184.242 225.742"
                                stroke="#7780A1"
                                strokeWidth="0.75"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            ></path>
                            <path
                                d="M208.986 277.775C208.795 279.614 208.449 280.768 207.873 280.952C204.326 282.08 194.828 263.389 187.677 255.158C185.558 252.759 183.82 250.049 182.524 247.122C182.059 244.977 182.026 242.76 182.429 240.602C183.915 243.698 185.809 246.582 188.058 249.178C195.089 257.282 204.088 274.154 208.986 277.775Z"
                                stroke="#7780A1"
                                strokeWidth="0.75"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            ></path>
                            <path
                                d="M207.936 244.833C208.477 254.236 209.749 270.914 208.986 277.769C204.088 274.148 195.066 257.267 188.062 249.18C185.814 246.582 183.92 243.698 182.432 240.604C182.814 237.554 183.45 233.995 183.864 230.469C190.971 236.645 199.123 241.508 207.936 244.833Z"
                                stroke="#7780A1"
                                strokeWidth="0.75"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            ></path>
                            <path
                                d="M111.632 160.368C97.0654 153.221 88.2873 134.257 87.9977 133.59"
                                stroke="#7780A1"
                                strokeWidth="0.75"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            ></path>
                            <path
                                d="M98.7515 144.136C103.271 149.472 108.932 155.217 114.368 158.179C117.125 159.741 120.343 160.291 123.464 159.736C136.738 157.061 161.852 144.012 168.403 137.024C180.268 124.368 179.294 114.726 178.263 98.6194C177.844 92.0757 177.021 92.2329 176.037 95.2756C174.572 99.8164 172.724 110.824 171.202 115.161C171.06 115.597 170.767 115.969 170.375 116.209C169.204 116.878 168.465 115.415 167.864 113.35C167.227 111.158 166.771 108.239 166.179 106.495C165.139 103.421 163.018 100.619 162.68 109.64C162.483 114.945 162.469 124.082 156.701 127.429C152.212 129.984 147.533 132.193 142.707 134.036C137.715 135.989 132.485 137.271 127.155 137.848C124.26 138.002 120.38 134.703 116.691 129.589"
                                stroke="#7780A1"
                                strokeWidth="0.75"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            ></path>
                            <path
                                d="M172.633 109.861L177.976 86.3868C178.095 85.8729 178.003 85.3332 177.724 84.8865C177.442 84.4396 176.996 84.1225 176.482 84.0045C175.968 83.8866 175.427 83.9775 174.98 84.2576C174.531 84.5376 174.215 84.9835 174.096 85.4974L167.799 113.165"
                                stroke="#7780A1"
                                strokeWidth="0.75"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            ></path>
                            <path
                                d="M182.407 174.502C187.369 172.374 190.834 170.851 190.834 170.851L182.843 190.1"
                                stroke="#7780A1"
                                strokeWidth="0.75"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            ></path>
                            <path
                                d="M114.367 158.176C108.359 162.976 102.061 167.401 95.5071 171.426C84.8217 163.977 77.4015 152.721 74.7738 139.975"
                                stroke="#7780A1"
                                strokeWidth="0.75"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            ></path>
                            <path
                                d="M175.051 127.872L189.967 121.551C193.661 119.992 197.672 119.328 201.671 119.613L254.182 123.52C255.364 134.496 255.223 140.809 249.857 150.457L206.028 150.87"
                                stroke="#7780A1"
                                strokeWidth="0.75"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            ></path>
                            <path
                                d="M96.7477 60.7838C96.7477 60.7838 91.1786 50.3631 78.0784 56.7179C64.9782 63.0726 67.5193 88.6103 67.5193 88.6103C67.5193 88.6103 55.8771 94.1692 49.6752 103.54C40.0702 118.057 44.9062 139.975 74.7741 139.975C73.3502 133.718 72.8573 127.285 73.3111 120.884C74.1062 109.607 78.209 99.2834 81.8347 88.7056C82.6616 86.2596 84.6335 80.2877 85.3014 77.8084C85.9057 75.4912 86.1919 73.8695 87.0825 71.1076C83.2324 67.4546 87.814 63.0709 89.8813 66.627C90.7936 68.1317 90.971 68.0447 91.9703 68.3741C94.4444 69.1866 101.11 71.0307 106.07 69.5444C106.066 69.5494 106.385 60.7838 96.7477 60.7838Z"
                                stroke="#7780A1"
                                strokeWidth="0.75"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            ></path>
                            <path
                                d="M33.9636 66.246C22.6885 71.6778 12.08 78.3937 2.34976 86.2598C2.07591 86.43 1.84746 86.6639 1.68402 86.9416C1.52058 87.2193 1.42704 87.5324 1.41141 87.8541C1.39575 88.1757 1.45851 88.4966 1.59425 88.7886C1.72999 89.0809 1.93468 89.3359 2.19074 89.5316L9.44224 95.2811C13.8363 89.5249 19.7938 84.6598 25.7798 79.6342C21.1723 85.5872 17.1371 91.9607 13.7275 98.67L21.5297 104.843C21.7814 105.042 22.0776 105.178 22.3931 105.24C22.7086 105.301 23.0342 105.286 23.3427 105.196C23.6512 105.106 23.9336 104.943 24.1659 104.721C24.3983 104.499 24.5741 104.225 24.6783 103.921L36.9533 68.6066C37.0965 68.2107 37.1116 67.7797 36.9963 67.3748C36.8808 66.9699 36.6407 66.6114 36.3101 66.3505C35.9794 66.0893 35.5748 65.9387 35.1536 65.92C34.7326 65.9012 34.3161 66.0153 33.9636 66.246Z"
                                stroke="#7780A1"
                                strokeWidth="0.75"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            ></path>
                            <path
                                d="M249.602 5.70256C243.273 2.55613 236.181 7.04005 237.199 13.6439L234.241 16.374L238.312 16.6917C241.906 22.7589 251.034 23.0147 254.023 17.0411C254.937 14.9513 254.984 12.5853 254.156 10.4605C253.327 8.33574 251.69 6.6251 249.602 5.70256Z"
                                stroke="#7780A1"
                                strokeWidth="0.75"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            ></path>
                            <path
                                d="M287.259 189.242C286.298 188.746 285.248 188.443 284.172 188.351C283.094 188.259 282.008 188.38 280.977 188.707C279.947 189.035 278.99 189.562 278.164 190.259C277.337 190.956 276.656 191.809 276.159 192.768C276.159 192.768 270.784 203.252 266.268 202.933L288.722 214.527C285.828 211.033 290.789 200.33 290.789 200.33C291.286 199.37 291.591 198.322 291.681 197.245C291.773 196.169 291.653 195.085 291.325 194.056C290.997 193.026 290.469 192.071 289.771 191.245C289.073 190.419 288.22 189.739 287.259 189.242Z"
                                stroke="#7780A1"
                                strokeWidth="0.75"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            ></path>
                            <path
                                d="M281.184 210.653C280.679 211.631 279.803 212.366 278.754 212.701C277.704 213.033 276.566 212.936 275.587 212.432C274.608 211.927 273.871 211.052 273.536 210.004C273.203 208.956 273.3 207.819 273.806 206.841"
                                stroke="#7780A1"
                                strokeWidth="0.75"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            ></path>
                            <path d="M311.749 67.8984L305.801 88.3553" stroke="#7780A1" strokeWidth="0.75" strokeLinecap="round" strokeLinejoin="round"></path>
                            <path d="M319 81.0817L298.518 75.1416" stroke="#7780A1" strokeWidth="0.75" strokeLinecap="round" strokeLinejoin="round"></path>
                            <path
                                d="M182.875 214.75C191.909 216.235 201.112 216.403 210.195 215.252"
                                stroke="#7780A1"
                                strokeWidth="0.75"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            ></path>
                            <path
                                d="M242.033 122.694C243.466 132.224 241.922 141.963 237.612 150.584"
                                stroke="#7780A1"
                                strokeWidth="0.75"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            ></path>
                            <path
                                d="M134.691 237.37C134.911 238.445 134.807 239.56 134.392 240.575C133.978 241.59 133.271 242.459 132.362 243.074C131.452 243.688 130.381 244.019 129.283 244.025C128.185 244.03 127.111 243.711 126.194 243.108C125.278 242.504 124.562 241.641 124.136 240.632C123.71 239.62 123.595 238.507 123.803 237.43C124.011 236.353 124.534 235.362 125.306 234.583C126.078 233.804 127.064 233.27 128.139 233.05C128.853 232.899 129.591 232.893 130.308 233.03C131.025 233.167 131.708 233.443 132.317 233.846C132.926 234.247 133.45 234.765 133.857 235.37C134.265 235.976 134.548 236.654 134.691 237.37Z"
                                stroke="#7780A1"
                                strokeWidth="0.75"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            ></path>
                            <path
                                d="M132.178 219.993C134.31 218.002 136.986 216.686 139.867 216.215C142.748 215.742 145.704 216.133 148.362 217.338C151.02 218.544 153.261 220.51 154.8 222.988C156.34 225.464 157.11 228.342 157.012 231.257C156.914 234.171 155.953 236.989 154.251 239.358C152.548 241.727 150.181 243.538 147.448 244.563C144.715 245.588 141.739 245.78 138.896 245.116C136.054 244.452 133.472 242.961 131.478 240.831C128.806 237.974 127.378 234.176 127.51 230.267C127.641 226.36 129.32 222.665 132.178 219.993Z"
                                stroke="#7780A1"
                                strokeWidth="0.75"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            ></path>
                            <path
                                d="M95.5071 171.426C95.5071 171.426 107.911 206.717 154.095 186.769L182.407 174.502C182.759 187.847 183.499 210.432 182.374 225.235C190.998 227.858 200.195 227.946 208.867 225.489C212.334 201.981 215.014 164.874 206.037 150.87C194.406 132.726 158.648 144.358 158.648 144.358"
                                stroke="#7780A1"
                                strokeWidth="0.75"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            ></path>
                            <path
                                d="M90.2964 88.5822C88.7639 87.4911 87.4176 86.1605 86.3091 84.6416L89.6871 93.1213"
                                stroke="#7780A1"
                                strokeWidth="0.75"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            ></path>
                        </svg>
                    </div>
                </div>
                <div className="absolute bottom-20 ltr:left-0 rtl:right-0">
                    <svg width="171" height="216" viewBox="0 0 171 216" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path opacity="0.06" d="M160.487 10.9038L47.9038 205.904L-64.6795 10.9038L160.487 10.9038Z" stroke="#7780A1" strokeWidth="20"></path>
                    </svg>
                </div>
            </section>
        </div>
    );
};

export default Services;

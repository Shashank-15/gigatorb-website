import Link from 'next/link';
import Head from 'next/head';
import { useSelector } from 'react-redux';
import { IRootState } from '../store';
import BlogSlider from '../components/BlogSlider';
import Faq from '../components/Faq';
import LogoSlider from '../components/LogoSlider';
import Testimonial from '../components/Testimonial';

const ModernSaas = () => {
    const isRtl = useSelector((state: IRootState) => state.themeConfig.direction) === 'rtl' ? true : false;
    const faqs: any = [
        {
            id: 1,
            question: 'Do you offer a free trial?',
            answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        },
        {
            id: 2,
            question: 'How do I create an account?',
            answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        },
        {
            id: 3,
            question: 'What protections does Strategic Systems use to protect our data?',
            answer: "For now it is limited to 100MB per instance. We'll offer expansion options soon.",
        },
        {
            id: 4,
            question: 'What type of support is included with this Service?',
            answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        },
        {
            id: 5,
            question: 'Do you have premium plans for products?',
            answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        },
        {
            id: 6,
            question: 'Who else is using plurk SaaS tool?',
            answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        },
    ];

    const feedbacks = [
        {
            id: 1,
            name: '',
            role: '',
            color:'',
            thumbnail: '/assets/images/modern-saas/client.png',
            message:
                "",
        },
    ];

    const blogs = [
        {
            id: 1,
            thumbnail: '/assets/images/modern-saas/design.png',
            title: '3 experiments to improve your mobile app funnel',
            excerpt: 'Funnels don’t just provide you with conversion numbers, they provide you with insight into how your users behave.',
            description: '',
            date: 'Dec 15, 2022',
            tag: 'Design',
        },
        {
            id: 2,
            thumbnail: '/assets/images/modern-saas/marketing.png',
            title: 'What’s growth hacking? 8 great books to learn more about it',
            excerpt: 'The use of resource-light and cost-effective digital marketing tactics to help grow and retain an active user base, sell products and...',
            description: '',
            date: 'Dec 25, 2022',
            tag: 'Marketing',
        },
        {
            id: 3,
            thumbnail: '/assets/images/modern-saas/integration.png',
            title: '6 new interesting mobile apps to grow your audience on',
            excerpt: 'Before I get into the advice, here’s a bit about my background and experience with growing audiences for creative work.',
            description: '',
            date: 'Nov 06, 2022',
            tag: 'Integration',
        },
    ];

    return (
        <div>
            <Head>
                <title>Azure DevOps Services | Gigatorb </title>
            </Head>
            <div className="overflow-x-hidden">
                <section className="bg-black mt-20 pb-20 bg-[url(/assets/images/modern-saas/banner-bg.png)] bg-cover bg-top bg-no-repeat pt-[82px] lg:pt-[106px]">
                    <div className="container lg:pt-7">
                        <div className="relative">
                            <div className="pt-14 pb-8 text-center text-white lg:w-3/5 lg:py-20 ltr:lg:text-left rtl:lg:text-right">
                               
                                <h2 className="text-3xl font-extrabold leading-normal sm:text-5xl lg:text-[70px] lg:leading-[90px]">
                                    <span className="text-[#e7f1ff]">Azure  </span>
                                    <span className="text-[#1759D4]">DevOps Services</span>
                                </h2>
                                <p className="my-8 text-lg lg:w-3/4">
                                Welcome to <span className='text-[#1759D4]'>Giga</span>Torb, your trusted partner for Azure DevOps services</p>
                              
                            </div>
                            <div
                                className="top-[70px] w-[70%] mr-18 pb-7 ltr:right-0 rtl:left-0 rtl:right-auto lg:absolute lg:max-w-[630px] lg:pb-0 xl:ltr:-right-52 xl:rtl:-left-52"
                                data-aos={isRtl ? 'fade-right' : 'fade-left'}
                                data-aos-duration="1000"
                            >
                                 <img src="\assets\images\Gallary\Blog-Website-Banner.jpg" alt="" /> 
                            </div>
                        </div>
                    </div>
                </section>

                <section className="bg-white pt-5 from-white/[55%] to-transparent py-14 dark:bg-[#e7f1ff] lg:py-20">
                    <div className="container">
                        <div className="lg:w-1/2">
                            <div className="heading mb-5 text-center ltr:lg:text-left rtl:lg:text-right">
                                <h6 className="!text-[#1759D4] " style={{fontSize:'35px'}}>Our Azure DevOps Services:</h6>
                                <p className="mt-4 text-lg font-semibold text-black">
                                We offer a range of solutions to streamline your software development and deployment processes using Microsoft's Azure DevOps platform</p>
                            </div>
                        </div>
                        <div className="mt-16 grid gap-x-7 gap-y-12 text-lg font-semibold sm:grid-cols-2 lg:grid-cols-3 lg:gap-y-20">
                            <div className="flex gap-5" data-aos="fade-up" data-aos-duration="1000">
                                <div className="h-10 w-10 flex-none text-black dark:text-white">
                                    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M9.25175 22.8926H2.67813C1.58662 22.8926 0.701782 23.7774 0.701782 24.8689V36.8477C0.701782 37.9392 1.58662 38.8241 2.67813 38.8241H9.25175C10.3433 38.8241 11.2281 37.9392 11.2281 36.8477V24.8689C11.2281 23.7774 10.3433 22.8926 9.25175 22.8926Z"
                                            fill="#47BDFF"
                                        />
                                        <path
                                            d="M22.936 12.0098H16.3623C15.2708 12.0098 14.386 12.8946 14.386 13.9861V36.8482C14.386 37.9397 15.2708 38.8245 16.3623 38.8245H22.936C24.0275 38.8245 24.9123 37.9397 24.9123 36.8482V13.9861C24.9123 12.8946 24.0275 12.0098 22.936 12.0098Z"
                                            fill="currentColor"
                                        />
                                        <path
                                            d="M36.6202 0.929688H30.0465C28.955 0.929688 28.0702 1.81453 28.0702 2.90604V36.8481C28.0702 37.9396 28.955 38.8244 30.0465 38.8244H36.6202C37.7117 38.8244 38.5965 37.9396 38.5965 36.8481V2.90604C38.5965 1.81453 37.7117 0.929688 36.6202 0.929688Z"
                                            fill="#B476E5"
                                        />
                                    </svg>
                                </div>
                                <div className="flex-1">
                                    <h3 className="mb-6 text-[22px] font-extrabold text-black dark:text-[#1759D4]">Azure DevOps Setup</h3>
                                    <p className="line-clamp-4 text-black">We help you get started with Azure DevOps, configuring your projects, repositories, boards, and pipelines for optimal productivity.</p>
                                </div>
                            </div>
                            <div className="flex gap-5" data-aos="fade-up" data-aos-duration="1000">
                                <div className="h-10 w-10 flex-none text-black dark:text-white">
                                    <svg width="34" height="37" viewBox="0 0 34 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M5.01127 0.318359H0.938767C0.4203 0.318359 0 0.738659 0 1.25713V35.0798C0 35.5983 0.4203 36.0186 0.938767 36.0186H5.01127C5.52973 36.0186 5.95003 35.5983 5.95003 35.0798V1.25713C5.95003 0.738659 5.52973 0.318359 5.01127 0.318359Z"
                                            fill="#B476E5"
                                        />
                                        <mask id="mask0_733_15588" style={{ maskType: 'alpha' }} maskUnits="userSpaceOnUse" x="7" y="0" width="28" height="23">
                                            <path
                                                d="M31.1839 0.318359H10.4664C8.91096 0.318359 7.65005 1.57926 7.65005 3.13466V19.6022C7.65005 21.1576 8.91096 22.4185 10.4664 22.4185H31.1839C32.7393 22.4185 34.0002 21.1576 34.0002 19.6022V3.13466C34.0002 1.57926 32.7393 0.318359 31.1839 0.318359Z"
                                                fill="#01B969"
                                            />
                                        </mask>
                                        <g mask="url(#mask0_733_15588)">
                                            <path
                                                d="M31.1839 0.318359H10.4664C8.91096 0.318359 7.65005 1.57926 7.65005 3.13466V19.6022C7.65005 21.1576 8.91096 22.4185 10.4664 22.4185H31.1839C32.7393 22.4185 34.0002 21.1576 34.0002 19.6022V3.13466C34.0002 1.57926 32.7393 0.318359 31.1839 0.318359Z"
                                                fill="#47BDFF"
                                            />
                                            <path d="M34.2428 10.6993L22.2819 22.6602L34.2428 34.621L46.2036 22.6602L34.2428 10.6993Z" fill="currentColor" />
                                        </g>
                                    </svg>
                                </div>
                                <div className="flex-1">
                                    <h3 className="mb-6 text-[22px] font-extrabold text-black dark:text-[#1759D4]">Continuous Integration (CI)</h3>
                                    <p className="line-clamp-3 text-black">Automate code builds and testing to catch issues early in the development process.</p>
                                </div>
                            </div>
                            <div className="flex gap-5" data-aos="fade-up" data-aos-duration="1000">
                                <div className="h-10 w-10 flex-none text-black dark:text-white">
                                    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M22.1366 3.02539C22.5757 3.02539 22.9135 3.38362 22.9135 3.8101V9.30304C22.9135 12.4248 25.4639 14.9836 28.5547 15.0007C29.8384 15.0007 30.8518 15.0178 31.6287 15.0178L31.9165 15.0165C32.4357 15.0125 33.1347 15.0007 33.7399 15.0007C34.1622 15.0007 34.5 15.3418 34.5 15.7683V29.4836C34.5 33.7142 31.1051 37.143 26.9164 37.143H13.4721C9.08067 37.143 5.5 33.5436 5.5 29.1083V10.7189C5.5 6.48833 8.91173 3.02539 13.1173 3.02539H22.1366ZM23.9438 25.0312H14.7557C14.0632 25.0312 13.4889 25.5942 13.4889 26.2936C13.4889 26.993 14.0632 27.573 14.7557 27.573H23.9438C24.6363 27.573 25.2105 26.993 25.2105 26.2936C25.2105 25.5942 24.6363 25.0312 23.9438 25.0312ZM20.4645 16.5018H14.7557C14.0632 16.5018 13.4889 17.0818 13.4889 17.7812C13.4889 18.4807 14.0632 19.0436 14.7557 19.0436H20.4645C21.1569 19.0436 21.7312 18.4807 21.7312 17.7812C21.7312 17.0818 21.1569 16.5018 20.4645 16.5018ZM25.3747 4.57092C25.3747 3.83568 26.2581 3.47062 26.7631 4.00116C28.5889 5.91856 31.7794 9.27064 33.5629 11.1437C34.0561 11.6606 33.6947 12.5186 32.9836 12.5203C31.5953 12.5254 29.9587 12.5203 28.7814 12.5084C26.9134 12.5084 25.3747 10.9543 25.3747 9.06764V4.57092Z"
                                            fill="#B476E5"
                                        />
                                        <path
                                            d="M20.4648 16.502H14.756C14.0635 16.502 13.4893 17.082 13.4893 17.7814C13.4893 18.4808 14.0635 19.0438 14.756 19.0438H20.4648C21.1573 19.0438 21.7315 18.4808 21.7315 17.7814C21.7315 17.082 21.1573 16.502 20.4648 16.502Z"
                                            fill="currentColor"
                                        />
                                        <path
                                            d="M23.9441 25.0312H14.756C14.0635 25.0312 13.4893 25.5942 13.4893 26.2937C13.4893 26.9931 14.0635 27.573 14.756 27.573H23.9441C24.6366 27.573 25.2109 26.9931 25.2109 26.2937C25.2109 25.5942 24.6366 25.0312 23.9441 25.0312Z"
                                            fill="currentColor"
                                        />
                                        <path
                                            fillRule="evenodd"
                                            clipRule="evenodd"
                                            d="M26.7627 4.00153C26.2577 3.471 25.3743 3.83606 25.3743 4.57129V9.068C25.3743 10.9547 26.913 12.5087 28.7811 12.5087C29.9583 12.5207 31.5949 12.5258 32.9833 12.5207C33.6943 12.519 34.0558 11.6609 33.5626 11.1441C32.6721 10.2089 31.4309 8.905 30.1839 7.59513C28.9333 6.28142 27.6769 4.96162 26.7627 4.00153Z"
                                            fill="#47BDFF"
                                        />
                                    </svg>
                                </div>
                                <div className="flex-1">
                                    <h3 className="mb-6 text-[22px] font-extrabold text-black dark:text-[#1759D4]">Continuous Deployment</h3>
                                    <p className="line-clamp-4 text-black">
                                    Streamline the deployment of your applications to Azure environments with our CD pipeline setups.
                                    </p>
                                </div>
                            </div>
                            <div className="flex gap-5" data-aos="fade-up" data-aos-duration="1000">
                                <div className="h-10 w-10 flex-none">
                                    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M35.4885 2.06836H5.20114C3.85481 2.06836 2.75861 3.16457 2.75861 4.51089V7.52888C2.75861 9.7887 3.77665 11.8864 5.5509 13.2844L14.8765 20.6316H25.8122L35.1378 13.2844C36.9129 11.8864 37.931 9.78774 37.931 7.52888V4.51089C37.931 3.16457 36.8348 2.06836 35.4885 2.06836Z"
                                            fill="#47BDFF"
                                        />
                                        <path
                                            d="M15.46 23.5625V35.7752C15.46 36.3242 15.7668 36.8274 16.2543 37.0785C16.4664 37.187 16.696 37.2407 16.9255 37.2407C17.2255 37.2407 17.5244 37.1488 17.7775 36.9681L24.6166 32.0831C25.0015 31.8075 25.2302 31.363 25.2302 30.8901V23.5625H15.46Z"
                                            fill="#B476E5"
                                        />
                                    </svg>
                                </div>
                                <div className="flex-1">
                                    <h3 className="mb-6 text-[22px] font-extrabold text-black dark:text-[#1759D4]">Infrastructure as Code</h3>
                                    <p className="line-clamp-4 text-black">Implement Infrastructure as Code practices to manage and scale your Azure resources efficiently.</p>
                                </div>
                            </div>
                            <div className="flex gap-5" data-aos="fade-up" data-aos-duration="1000">
                                <div className="h-10 w-10 flex-none text-black dark:text-white">
                                    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M20.0335 14.25H7.50748C4.44768 14.25 1.96722 16.7305 1.96722 19.7903V32.3163C1.96722 35.3761 4.44768 37.8566 7.50748 37.8566H20.0335C23.0933 37.8566 25.5738 35.3761 25.5738 32.3163V19.7903C25.5738 16.7305 23.0933 14.25 20.0335 14.25Z"
                                            fill="#B476E5"
                                        />
                                        <path
                                            d="M31.8368 2.44531H19.3108C16.251 2.44531 13.7705 4.92577 13.7705 7.98557V20.5116C13.7705 23.5714 16.251 26.0519 19.3108 26.0519H31.8368C34.8966 26.0519 37.3771 23.5714 37.3771 20.5116V7.98557C37.3771 4.92577 34.8966 2.44531 31.8368 2.44531Z"
                                            fill="#47BDFF"
                                        />
                                        <path
                                            fillRule="evenodd"
                                            clipRule="evenodd"
                                            d="M25.5738 26.0533H19.3108C16.251 26.0533 13.7705 23.5728 13.7705 20.513V14.25H20.0335C23.0933 14.25 25.5738 16.7305 25.5738 19.7903V26.0533Z"
                                            fill="currentColor"
                                        />
                                    </svg>
                                </div>
                                <div className="flex-1">
                                    <h3 className="mb-6 text-[22px] font-extrabold text-black dark:text-[#1759D4]">Security and Compliance</h3>
                                    <p className="line-clamp-4 text-black">Enhance the security of your Azure environment and ensure compliance with industry standards.</p>
                                </div>
                            </div>
                            <div className="flex gap-5" data-aos="fade-up" data-aos-duration="1000">
                                <div className="h-10 w-10 flex-none text-black dark:text-white">
                                    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            fillRule="evenodd"
                                            clipRule="evenodd"
                                            d="M23.5351 15.8717C23.2033 15.3029 22.5943 14.9531 21.9358 14.9531H11.102C10.4434 14.9531 9.83448 15.3029 9.50267 15.8717L4.10235 25.1294C3.76606 25.706 3.76606 26.4188 4.10235 26.9953L9.50267 36.253C9.83448 36.8218 10.4434 37.1716 11.102 37.1716H21.9358C22.5943 37.1716 23.2033 36.8218 23.5351 36.253L28.9354 26.9953C29.2717 26.4188 29.2717 25.706 28.9354 25.1294L23.5351 15.8717ZM16.5189 31.2741C19.4351 31.2741 21.7992 28.91 21.7992 25.9938C21.7992 23.0776 19.4351 20.7135 16.5189 20.7135C13.6027 20.7135 11.2386 23.0776 11.2386 25.9938C11.2386 28.91 13.6027 31.2741 16.5189 31.2741Z"
                                            fill="#47BDFF"
                                        />
                                        <path
                                            fillRule="evenodd"
                                            clipRule="evenodd"
                                            d="M30.6374 3.67673C30.386 3.25889 29.9245 3.00195 29.4255 3.00195H21.2154C20.7164 3.00195 20.2549 3.25889 20.0034 3.67673L15.911 10.4771C15.6561 10.9006 15.6561 11.4242 15.911 11.8477L20.0034 18.6481C20.2549 19.066 20.7164 19.3229 21.2154 19.3229H29.4255C29.9245 19.3229 30.386 19.066 30.6374 18.6481L34.7299 11.8477C34.9847 11.4242 34.9847 10.9006 34.7299 10.4771L30.6374 3.67673ZM25.3205 14.9908C27.5304 14.9908 29.3219 13.2542 29.3219 11.1121C29.3219 8.96989 27.5304 7.23331 25.3205 7.23331C23.1105 7.23331 21.3189 8.96989 21.3189 11.1121C21.3189 13.2542 23.1105 14.9908 25.3205 14.9908Z"
                                            fill="#B476E5"
                                        />
                                        <path
                                            fillRule="evenodd"
                                            clipRule="evenodd"
                                            d="M25.5491 19.3244L23.5351 15.8717C23.2032 15.3029 22.5943 14.9531 21.9358 14.9531H17.7791L20.0036 18.6496C20.255 19.0675 20.7165 19.3244 21.2155 19.3244H25.5491Z"
                                            fill="currentColor"
                                        />
                                    </svg>
                                </div>
                                <div className="flex-1">
                                    <h3 className="mb-6 text-[22px] font-extrabold text-black dark:text-[#1759D4]">Azure DevOps Automation</h3>
                                    <p className="text-lg font-semibold line-clamp-4 text-black">
                                    Our Azure automation simplifies development & deployment by automating tasks, from code testing to resource scaling.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="bg-gradient-to-t from-white/[55%] to-transparent py-8 dark:bg-white/[0.03] dark:bg-none lg:py-20 px-5">
                    <div className="relative mx-auto max-w-[1440px] bg-black pt-14 rounded-[32px]">
                        {/* <img src="\assets\images\Gallary\Microsoft-Azure.jpg" alt="" className="absolute bottom-0 ltr:right-0 rtl:left-0" /> */}
                        {/* <img src="/assets/images/modern-saas/dollers-icon.svg" alt="" className="absolute top-0 ltr:right-14 rtl:left-14" /> */}
                        <div className="container">
                            <div className="relative">
                                {/* <img src="/assets/images/modern-saas/perfomance-doller-icon.svg" alt="" className="absolute bottom-0 ltr:left-0 rtl:right-0" /> */}
                                <div className="grid gap-4 lg:grid-cols-2">
                                    <div className="pt-28 lg:pb-10 lg:pt-0">
                                        <div className="heading mb-12 ltr:lg:text-left rtl:lg:text-right">
                                            <h6 className="!text-[#1759D4] " style={{fontSize:'40px'}}>Our Process</h6>
                                            <h4 className="pb-4 leading-normal !text-white lg:!leading-[50px]">Increase your performance</h4>
                                            <p className="text-lg font-semibold xl:w-11/12">
                                                We take step wise for your every platform. We helping to client with our talented expert.
                                            </p>
                                        </div>
                                        <ul className="space-y-8 text-lg font-semibold text-white">
                                            <li className="flex items-center gap-3.5">
                                                <div className="flex h-5 w-5 items-center justify-center rounded-full bg-[#e7f1ff]">
                                                    <svg width="12" height="9" viewBox="0 0 12 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path
                                                            d="M4.60002 5.79922L2.42502 3.62422C2.24169 3.44089 2.01669 3.34922 1.75002 3.34922C1.48336 3.34922 1.25002 3.44922 1.05002 3.64922C0.866691 3.83255 0.775024 4.06589 0.775024 4.34922C0.775024 4.63255 0.866691 4.86589 1.05002 5.04922L3.90002 7.89922C4.08336 8.08255 4.31669 8.17422 4.60002 8.17422C4.88336 8.17422 5.11669 8.08255 5.30002 7.89922L10.975 2.22422C11.1584 2.04089 11.25 1.81589 11.25 1.54922C11.25 1.28255 11.15 1.04922 10.95 0.849219C10.7667 0.665886 10.5334 0.574219 10.25 0.574219C9.96669 0.574219 9.73336 0.665886 9.55002 0.849219L4.60002 5.79922Z"
                                                            fill="black"
                                                        />
                                                    </svg>
                                                </div>
                                                <p>Assessment</p>
                                            </li>
                                            <li className="flex items-center gap-3.5">
                                                <div className="flex h-5 w-5 items-center justify-center rounded-full bg-[#1759D4]">
                                                    <svg width="12" height="9" viewBox="0 0 12 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path
                                                            d="M4.60002 5.79922L2.42502 3.62422C2.24169 3.44089 2.01669 3.34922 1.75002 3.34922C1.48336 3.34922 1.25002 3.44922 1.05002 3.64922C0.866691 3.83255 0.775024 4.06589 0.775024 4.34922C0.775024 4.63255 0.866691 4.86589 1.05002 5.04922L3.90002 7.89922C4.08336 8.08255 4.31669 8.17422 4.60002 8.17422C4.88336 8.17422 5.11669 8.08255 5.30002 7.89922L10.975 2.22422C11.1584 2.04089 11.25 1.81589 11.25 1.54922C11.25 1.28255 11.15 1.04922 10.95 0.849219C10.7667 0.665886 10.5334 0.574219 10.25 0.574219C9.96669 0.574219 9.73336 0.665886 9.55002 0.849219L4.60002 5.79922Z"
                                                            fill="white"
                                                        />
                                                    </svg>
                                                </div>
                                                <p>Planning</p>
                                            </li>
                                            <li className="flex items-center gap-3.5">
                                                <div className="flex h-5 w-5 items-center justify-center rounded-full bg-[#e7f1ff]">
                                                    <svg width="12" height="9" viewBox="0 0 12 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path
                                                            d="M4.60002 5.79922L2.42502 3.62422C2.24169 3.44089 2.01669 3.34922 1.75002 3.34922C1.48336 3.34922 1.25002 3.44922 1.05002 3.64922C0.866691 3.83255 0.775024 4.06589 0.775024 4.34922C0.775024 4.63255 0.866691 4.86589 1.05002 5.04922L3.90002 7.89922C4.08336 8.08255 4.31669 8.17422 4.60002 8.17422C4.88336 8.17422 5.11669 8.08255 5.30002 7.89922L10.975 2.22422C11.1584 2.04089 11.25 1.81589 11.25 1.54922C11.25 1.28255 11.15 1.04922 10.95 0.849219C10.7667 0.665886 10.5334 0.574219 10.25 0.574219C9.96669 0.574219 9.73336 0.665886 9.55002 0.849219L4.60002 5.79922Z"
                                                            fill="black"
                                                        />
                                                    </svg>
                                                </div>
                                                <p>Implementation</p>
                                            </li>
                                            <li className="flex items-center gap-3.5">
                                                <div className="flex h-5 w-5 items-center justify-center rounded-full bg-[#1759D4]">
                                                    <svg width="12" height="9" viewBox="0 0 12 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path
                                                            d="M4.60002 5.79922L2.42502 3.62422C2.24169 3.44089 2.01669 3.34922 1.75002 3.34922C1.48336 3.34922 1.25002 3.44922 1.05002 3.64922C0.866691 3.83255 0.775024 4.06589 0.775024 4.34922C0.775024 4.63255 0.866691 4.86589 1.05002 5.04922L3.90002 7.89922C4.08336 8.08255 4.31669 8.17422 4.60002 8.17422C4.88336 8.17422 5.11669 8.08255 5.30002 7.89922L10.975 2.22422C11.1584 2.04089 11.25 1.81589 11.25 1.54922C11.25 1.28255 11.15 1.04922 10.95 0.849219C10.7667 0.665886 10.5334 0.574219 10.25 0.574219C9.96669 0.574219 9.73336 0.665886 9.55002 0.849219L4.60002 5.79922Z"
                                                            fill="white"
                                                        />
                                                    </svg>
                                                </div>
                                                <p> Support</p>
                                            </li>
                                         
                                        </ul>
                                    </div>
                                    <div className="pb-20 lg:pt-20 lg:pb-8" data-aos="fade-up" data-aos-duration="1000">
                                        <img src="\assets\images\Gallary\Microsoft-Azure.jpg" alt="" className="w-full" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

              

              

            

                <section className="py-14 text-center lg:py-20 bg-[#e7f1ff]">
                    <div className="container">
                        <div className="heading mb-12 lg:mb-20">
                            <h6 className="!text-[#1759D4]"style={{fontSize:'30px'}}>Our Services</h6>
                            <h4 className="!text-black " style={{fontSize:'32px'}}>The Best Solutions For You</h4>
                        </div>
                        <div className="grid gap-14 sm:grid-cols-2 lg:grid-cols-3">
                            <div data-aos="fade-up" data-aos-duration="1000">
                                <div className="mb-10">
                                    <img src="/assets/images/modern-saas/modern-design.svg" alt="" className="mx-auto w-24" />
                                </div>
                                <h4 className="text-[22px] font-extrabold text-black dark:text-[#1759D4]">Azure Expertise</h4><br/>
                                <p className="mt-6 mb-8 text-md text-black font-semibold line-clamp-4">
                                Our team of Azure is well-versed in Azure DevOps tools & services, ensuring seamless integration into your development workflows.</p>
                               
                            </div>
                            <div data-aos="fade-up" data-aos-duration="1000">
                                <div className="mb-10">
                                    <img src="/assets/images/modern-saas/magic-pagebuilder.svg" alt="" className="mx-auto w-24" />
                                </div>
                                <h4 className="text-[22px] font-extrabold text-black dark:text-[#1759D4]">Continuous Integration and Deployment (CI/CD)</h4>
                                <p className="mt-6 mb-8 text-md text-black font-semibold line-clamp-4">
                                Accelerate your development cycles with our CI/CD pipeline setup and automation, ensuring rapid and reliable software releases.</p>
                            
                            </div>
                            <div data-aos="fade-up" data-aos-duration="1000">
                                <div className="mb-10">
                                    <img src="/assets/images/modern-saas/support-icon.svg" alt="" className="mx-auto w-24" />
                                </div>
                                <h4 className="text-[22px] font-extrabold text-black dark:text-[#1759D4]">Monitoring and Reporting</h4>
                                <br/><p className="mt-6 mb-8 text-md text-black font-semibold line-clamp-4">
                                Stay informed about the health and performance of your applications with our monitoring and reporting solutions, powered by Azure DevOps.</p>
                              
                            </div>
                        </div>
                    </div>
                </section>

              
            </div>
        </div>
    );
};

export default ModernSaas;

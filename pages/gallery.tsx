import { useState,useEffect } from 'react';
import { useSelector } from 'react-redux';
import Link from 'next/link';
import Head from 'next/head';
import { IRootState } from '../store';

const Gallery = () => {
    const [activeTab, setActiveTab] = useState<string>('all');
    const isRtl = useSelector((state: IRootState) => state.themeConfig.direction) === 'rtl' ? true : false;
// var a = useEffect()
    return (
        <div>
            <Head>
                <title>Gallery | Gigatorb</title>
            </Head>
            <div className='bg-[#e5f1ff]'>
               
            

                <section className="pt-12 pb-14 md:pb-[100px]">
                    <div className="container">
                        <div className="overflow-x-auto">
                            <ul className="filters portfolio-filter mx-auto flex w-max gap-7 whitespace-nowrap pb-2.5 font-bold dark:text-white">
                                <li className={`filter ${activeTab === 'all' ? 'active' : ''}`}>
                                    {/* <button
                                        type="button"
                                        onClick={() => setActiveTab('all')}
                                        className="rounded-[10px] bg-[#1759D4] py-4 px-5 leading-5 transition hover:bg-secondary hover:text-white"
                                    >
                                     All
                                    </button> */}
                                </li>
                                <li className={`filter ${activeTab === 'work' ? 'active' : ''}`}>
                                    <button
                                        type="button"
                                        onClick={() => setActiveTab('work')}
                                        className="rounded-[10px] bg-[#1759D4] text-white py-4 px-5  leading-5 transition hover:bg-gray/5 hover:text-[#1759D4]"
                                    >
                                     Work
                                    </button>
                                </li>
                                <li className={`filter ${activeTab === 'celebrations' ? 'active' : ''}`}>
                                    <button
                                        type="button"
                                        onClick={() => setActiveTab('celebrations')}
                                        className="rounded-[10px] bg-[#1759D4] text-white py-4 px-5 leading-5 transition hover:bg-gray/5 hover:text-[#1759D4]"
                                    >
                                        Celebrations
                                    </button>
                                </li>
                                <li className={`filter ${activeTab === 'outing' ? 'active' : ''}`}>
                                    <button
                                        type="button"
                                        onClick={() => setActiveTab('outing')}
                                        className="rounded-[10px] bg-[#1759D4] text-white py-4 px-5  leading-5 transition hover:bg-gray/5 hover:text-[#1759D4]"
                                    >
                                        Outing
                                    </button>
                                </li>
                              
                            </ul>
                        </div>
                        <div className="projects mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                            <div className={`project ${activeTab === 'all' || activeTab === 'celebrations' ? 'block' : 'hidden'}`}>
                                <div className="relative rounded-3xl border border-transparent bg-white drop-shadow-[5px_10px_80px_rgba(119,128,161,0.15)] transition duration-500 hover:border-secondary hover:bg-secondary/20 dark:bg-gray-dark dark:drop-shadow-none">
                                    <Link href="/portfolio-detail" className="absolute top-0 h-full w-full ltr:left-0 rtl:right-0"></Link>
                                    <img src="\assets\images\Gallary\Celebration-3.jpg" alt="project-1" className="h-52 w-full rounded-t-3xl object-cover" />
                                  
                                </div>
                            </div>
                            <div className={`project ${activeTab === 'all' || activeTab === 'celebrations' ? 'block' : 'hidden'}`}>
                                <div className="relative rounded-3xl border border-transparent bg-white drop-shadow-[5px_10px_80px_rgba(119,128,161,0.15)] transition duration-500 hover:border-secondary hover:bg-secondary/20 dark:bg-gray-dark dark:drop-shadow-none">
                                    <Link href="/portfolio-detail" className="absolute top-0 h-full w-full ltr:left-0 rtl:right-0"></Link>
                                    <img src="\assets\images\Gallary\Celebration-1.jpg" alt="project-2" className="h-52 w-full rounded-t-3xl object-cover" />
                                   
                                </div>
                            </div>
                            <div className={`project ${activeTab === 'all' || activeTab === 'celebrations' ? 'block' : 'hidden'}`}>
                                <div className="relative rounded-3xl border border-transparent bg-white drop-shadow-[5px_10px_80px_rgba(119,128,161,0.15)] transition duration-500 hover:border-secondary hover:bg-secondary/20 dark:bg-gray-dark dark:drop-shadow-none">
                                    <Link href="/portfolio-detail" className="absolute top-0 h-full w-full ltr:left-0 rtl:right-0"></Link>
                                    <img src="\assets\images\Gallary\Celebration-4.jpg" alt="project-3" className="h-52 w-full rounded-t-3xl object-cover" />
                                 
                                </div>
                            </div>
                            <div className={`project ${activeTab === 'all' || activeTab === 'outing' ? 'block' : 'hidden'}`}>
                                <div className="relative rounded-3xl border border-transparent bg-white drop-shadow-[5px_10px_80px_rgba(119,128,161,0.15)] transition duration-500 hover:border-secondary hover:bg-secondary/20 dark:bg-gray-dark dark:drop-shadow-none">
                                    <Link href="/portfolio-detail" className="absolute top-0 h-full w-full ltr:left-0 rtl:right-0"></Link>
                                    <img src="\assets\images\Gallary\outing-3.jpg" alt="project-4" className="h-52 w-full rounded-t-3xl object-cover" />
                                  
                                </div>
                            </div>
                            <div className={`project ${activeTab === 'all' || activeTab === 'work' ? 'block' : 'hidden'}`}>
                                <div className="relative rounded-3xl border border-transparent bg-white drop-shadow-[5px_10px_80px_rgba(119,128,161,0.15)] transition duration-500 hover:border-secondary hover:bg-secondary/20 dark:bg-gray-dark dark:drop-shadow-none">
                                    <Link href="/portfolio-detail" className="absolute top-0 h-full w-full ltr:left-0 rtl:right-0"></Link>
                                    <img src="\assets\images\Gallary\Work-1.jpg" alt="project-5" className="h-52 w-full rounded-t-3xl object-cover" />
                                  
                                </div>
                            </div>
                            <div className={`project ${activeTab === 'all' || activeTab === 'work' ? 'block' : 'hidden'}`}>
                                <div className="relative rounded-3xl border border-transparent bg-white drop-shadow-[5px_10px_80px_rgba(119,128,161,0.15)] transition duration-500 hover:border-secondary hover:bg-secondary/20 dark:bg-gray-dark dark:drop-shadow-none">
                                    <Link href="/portfolio-detail" className="absolute top-0 h-full w-full ltr:left-0 rtl:right-0"></Link>
                                    <img src="https://lh3.googleusercontent.com/p/AF1QipOUcWmOrsHZUyS-gS4z95HT7l9SFpNVpdj0CfJM=s680-w680-h510" alt="project-6" className="h-52 w-full rounded-t-3xl object-cover" />
                                  
                                </div>
                            </div>
                            <div className={`project ${activeTab === 'all' || activeTab === 'celebrations' ? 'block' : 'hidden'}`}>
                                <div className="relative rounded-3xl border border-transparent bg-white drop-shadow-[5px_10px_80px_rgba(119,128,161,0.15)] transition duration-500 hover:border-secondary hover:bg-secondary/20 dark:bg-gray-dark dark:drop-shadow-none">
                                    <Link href="/portfolio-detail" className="absolute top-0 h-full w-full ltr:left-0 rtl:right-0"></Link>
                                    <img src="\assets\images\Gallary\Celebration-5.jpg" alt="project-7" className="h-52 w-full rounded-t-3xl object-cover" />
                                   
                                </div>
                            </div>
                            <div className={`project ${activeTab === 'all' || activeTab === 'celebrations' ? 'block' : 'hidden'}`}>
                                <div className="relative rounded-3xl border border-transparent bg-white drop-shadow-[5px_10px_80px_rgba(119,128,161,0.15)] transition duration-500 hover:border-secondary hover:bg-secondary/20 dark:bg-gray-dark dark:drop-shadow-none">
                                    <Link href="/portfolio-detail" className="absolute top-0 h-full w-full ltr:left-0 rtl:right-0"></Link>
                                    <img src="\assets\images\Gallary\Celebration-6.jpg" alt="project-8" className="h-52 w-full rounded-t-3xl object-cover" />
                                   
                                </div>
                            </div>
                            <div className={`project ${activeTab === 'all' || activeTab === 'celebrations' ? 'block' : 'hidden'}`}>
                                <div className="relative rounded-3xl border border-transparent bg-white drop-shadow-[5px_10px_80px_rgba(119,128,161,0.15)] transition duration-500 hover:border-secondary hover:bg-secondary/20 dark:bg-gray-dark dark:drop-shadow-none">
                                    <Link href="/portfolio-detail" className="absolute top-0 h-full w-full ltr:left-0 rtl:right-0"></Link>
                                    <img src="\assets\images\Gallary\Celebration-7.jpg" alt="project-9" className="h-52 w-full rounded-t-3xl object-cover" />
                                   
                                </div>
                            </div>
                            
                           
                            
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default Gallery;










          
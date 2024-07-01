import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { useSelector } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { IRootState } from '../store';

const Message = () => {
    const dialog = useRef<any>();
    const form = useRef<any>();
    const isRtl = useSelector((state: IRootState) => state.themeConfig.direction) === 'rtl';

    const sendEmail = (e:any) => {
        e.preventDefault();
    
        emailjs
          .sendForm('service_zv95n1m', 'template_kkuone4', form.current, {
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
    
    return (
        <div className="w-full bg-[#e5f1ff]">
            <br/><br/>
            <div className="container mx-auto flex flex-col py-5 sm:flex-row md:py-[80]">
                <div className="basis-[45%] -pb-6">
                    <img src="/msg.png" alt="icon" className="w-full" />
                </div>
                <div className="basis-[55%] px-5">
                    <div className="text-center" data-aos={isRtl ? 'fade-left' : 'fade-right'} data-aos-duration="1000">
                        <img src="/assets/images/services-form-txt.png" alt="services-form-txt" className=" bg-[#1759d4]mx-auto mb-10 sm:pt-4 xl:mx-0" />
                        <form action="" className="relative z-[1] text-center lg:pt-[20px]" ref={form} onSubmit={sendEmail}>
                            <div className="relative inline-block sm:w-auto">
                                <input
                                    type="email"
                                    name="from_email"
                                    placeholder="Email Address"
                                    className="dark:bg-gray-dark rounded-3xl py-2 font-bold leading-5 text-black outline-none ltr:pl-4 ltr:pr-[110px] rtl:pr-4 rtl:pl-[110px] sm:w-[540px] sm:py-6 ltr:sm:pl-[30px] ltr:sm:pr-[140px] rtl:sm:pr-[30px] rtl:sm:pl-[140px]"
                                />
                                <button
                                    type="submit"
                                    className="absolute top-0 h-full bg-[#1759D4] px-4 font-extrabold uppercase text-white ltr:right-0 ltr:rounded-r-3xl rtl:left-0 rtl:rounded-l-3xl sm:px-7"
                                >
                                    submit
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <ToastContainer /> {/* Add this component to the end of your component */}
        </div>
    );
};

export default Message;

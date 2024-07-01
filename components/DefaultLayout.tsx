import { PropsWithChildren, useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Footer from './Footer';
import Header from './Header';
import Hero from './Hero';

const DefaultLayout = ({ children }: PropsWithChildren) => {
    const [showLoader, setShowLoader] = useState(true);
    const [showTopButton, setShowTopButton] = useState(false);

    const goToTop = () => {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    };

    const onScrollHandler = () => {
        if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
            setShowTopButton(true);
        } else {
            setShowTopButton(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', onScrollHandler);

        const screenLoader = document.getElementsByClassName('screen_loader');
        if (screenLoader?.length) {
            // screenLoader[0].classList.add("animate__fadeOut");
            setTimeout(() => {
                setShowLoader(false);
            }, 200);
        }

        return () => {
            window.removeEventListener('onscroll', onScrollHandler);
        };
    });

    useEffect(() => {
        AOS.init({
            once: true,
        });
    }, []);

    return (
        <>
    
        <Header/>
        <Hero/>
        </>
    );
};

export default DefaultLayout;

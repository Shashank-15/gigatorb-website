import { useEffect, useState } from 'react';
import Link from 'next/link';
import Head from 'next/head';
import OfficeSwiper from '../components/OfficeSwiper';
import Lightbox from 'react-18-image-lightbox';
import 'react-18-image-lightbox/style.css';
import { useSelector } from 'react-redux';
import { IRootState } from '../store';
import Contactus from '../components/ContactUs';

const items = [
    '/assets/images/gallery-1.png',
    '/assets/images/gallery-2.png',
    '/assets/images/gallery-3.png',
    '/assets/images/gallery-4.png',
    '/assets/images/gallery-5.png',
];
const Career = () => {
    const [activeTab, setActiveTab] = useState<string>('all');
    const [isOpen, setIsOpen] = useState<any>(false);
    const [photoIndex, setPhotoIndex] = useState<any>(0);
    const isRtl = useSelector((state: IRootState) => state.themeConfig.direction) === 'rtl' ? true : false;

    useEffect(() => {
        window['global'] = window as never;
    }, []);

    return (
        <div>
            <Head>
                <title>Career | Gigatorb – Industrial It Solution</title>
            </Head>
            <div className="bg-[url(/assets/images/inner-page-hero-bg.png)] bg-cover bg-bottom bg-no-repeat pt-[82px] lg:pt-[106px]">
                <div className="relative">
                    <div className="container">
                        <div className="items-center justify-between py-10 md:flex md:h-[400px] md:py-0">
                            <div className="heading relative mb-0 text-center ltr:md:text-left rtl:md:text-right">
                                <h6>Career</h6>
                                <h4 className="!text-white">
                                    Unlock Your Potential in the<span className="text-primary"> Digital </span>World !
                                </h4>
                                <h6 className="!text-white">We drive to push boundaries and transform your ideas into reality accelerating growth.</h6>
                            </div>
                            <div className="relative mt-6 md:mt-0" data-aos={isRtl ? 'fade-right' : 'fade-left'} data-aos-duration="1000">
                                <svg
                                    width="246"
                                    height="282"
                                    viewBox="0 0 246 282"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="mx-auto w-[90%] rtl:rotate-y-180 sm:w-auto md:mx-auto"
                                >
                                    <path
                                        d="M171.987 197.736L168.515 228.34L170.755 228.452L170.165 236.096L164.623 236.264C164.13 239.167 163.952 242.115 164.089 245.056L181.868 244.487L171.987 197.736Z"
                                        fill="#B476E5"
                                    />
                                    <path
                                        d="M141.132 225.309C141.048 225.281 143.652 225.925 143.652 225.925L147.964 184.597L134.888 166.369L132.62 188.573C132.729 196.973 122.086 205.165 113.02 200.501L71.9738 181.797L71.1943 184.768L63.9732 181.433L66.1838 174.349C64.0008 173.136 61.6519 172.249 59.2118 171.717L75.1378 247.679L144.352 245.693L145.64 234.381L140.376 233.121C140.376 233.121 141.216 225.337 141.132 225.309Z"
                                        fill="#B476E5"
                                    />
                                    <path
                                        d="M111.144 130.026L107.062 110.453L44.8419 102.643L55.1459 152.622L59.5419 151.418L73.4858 157.886L76.9858 152.09L84.4043 155.17C84.0418 155.562 82.5283 158.026 82.5283 158.026L104.424 167.882C99.1322 139.91 111.144 130.026 111.144 130.026Z"
                                        fill="#B476E5"
                                    />
                                    <path
                                        d="M120.384 81.4741C119.32 77.3596 110.528 70.4996 110.528 70.4996C107.139 67.0556 111.56 66.4116 111.56 66.4116C111.36 66.0771 111.263 65.6919 111.278 65.303C111.294 64.9139 111.422 64.5379 111.648 64.2204C111.873 63.903 112.186 63.6579 112.548 63.515C112.91 63.3722 113.306 63.3377 113.688 63.4156C114.248 63.6676 114.528 62.8262 114.528 62.8262L36.8058 65.2076L40.8363 84.4436C40.8363 84.4436 88.2106 88.0821 108.287 89.2021C108.434 89.2021 116.371 88.365 116.519 88.3355C121.336 87.4116 120.384 81.4741 120.384 81.4741Z"
                                        fill="#B476E5"
                                    />
                                    <path
                                        d="M143.484 62.0117L126.242 62.5437C126.242 62.5437 134.978 73.3237 131.422 78.0837C130.862 78.7147 130.171 79.2147 129.397 79.5486C128.623 79.8826 127.785 80.042 126.942 80.0156C127.005 81.3797 127.568 82.6728 128.523 83.6486C129.478 84.6243 130.759 85.2143 132.122 85.3062L146.654 77.1037L143.484 62.0117Z"
                                        fill="#B476E5"
                                    />
                                    <path d="M151.268 98.584L145.052 102.168V128.572L164.874 163.628L151.268 98.584Z" fill="#B476E5" />
                                    <path
                                        d="M239.102 101.748L235.657 96.3164L202.794 117.092L206.154 102.224L199.882 100.796L194.806 123.224C194.714 123.636 194.705 124.061 194.777 124.477C194.849 124.893 195.004 125.29 195.229 125.645C195.456 126.001 195.75 126.309 196.096 126.551C196.441 126.793 196.831 126.965 197.242 127.056L219.67 132.124L221.098 125.852L206.23 122.492L239.102 101.748Z"
                                        fill="#B476E5"
                                    />
                                    <path
                                        d="M32.634 31.2721C32.4512 30.1534 31.9409 29.1141 31.1674 28.2854C30.394 27.4568 29.3922 26.8761 28.2887 26.6168C27.1852 26.3575 26.0297 26.4312 24.9681 26.8288C23.9066 27.2263 22.9867 27.9295 22.3249 28.8498C21.663 29.7701 21.289 30.866 21.25 31.9988C21.2111 33.1317 21.5089 34.2507 22.1059 35.2142C22.7027 36.1778 23.572 36.9428 24.6038 37.4123C25.6355 37.8819 26.7833 38.0348 27.902 37.8521C29.4021 37.607 30.7432 36.776 31.6307 35.5421C32.518 34.3082 32.8789 32.7722 32.634 31.2721Z"
                                        fill="#47BDFF"
                                    />
                                    <path
                                        d="M104.48 167.884C104.34 167.295 96.892 164.467 96.892 164.467L106.608 177.067C106.608 177.067 105.236 172.111 104.48 167.884Z"
                                        fill="#47BDFF"
                                    />
                                    <path
                                        d="M121.7 55.3521C121.559 55.1181 121.371 54.9154 121.149 54.7566C120.926 54.5976 120.674 54.4859 120.407 54.4281C120.139 54.3703 119.863 54.3678 119.595 54.4206C119.327 54.4733 119.072 54.5803 118.847 54.7351C118.621 54.8898 118.43 55.089 118.284 55.3204C118.138 55.5518 118.041 55.8104 117.999 56.0805C117.957 56.3507 117.971 56.6267 118.039 56.8914C118.107 57.1562 118.229 57.404 118.396 57.6201C118.011 57.42 117.571 57.3516 117.144 57.4256C116.716 57.4994 116.325 57.7115 116.029 58.0293C115.734 58.3471 115.55 58.7529 115.508 59.1848C115.465 59.6166 115.565 60.0506 115.792 60.4201C115.411 60.3406 115.015 60.3747 114.653 60.5179C114.291 60.6612 113.979 60.9076 113.756 61.2263C113.532 61.5452 113.407 61.9226 113.396 62.3118C113.385 62.701 113.488 63.0849 113.693 63.4161C113.309 63.3288 112.909 63.357 112.541 63.4971C112.174 63.6373 111.856 63.8832 111.628 64.2037C111.401 64.5244 111.273 64.9052 111.262 65.2982C111.25 65.6913 111.356 66.0789 111.565 66.4121C111.137 66.3194 110.69 66.3701 110.294 66.5565C109.898 66.7429 109.574 67.0546 109.373 67.4433C109.172 67.8321 109.104 68.2763 109.181 68.7073C109.257 69.1385 109.473 69.5323 109.796 69.828L115.284 74.644C117.72 77.0225 119.96 79.5705 120.38 81.4465C120.044 78.256 118.612 75.1185 118.056 74.896C112.344 72.74 114.224 67.5276 117.3 69.52C118.784 70.472 119.26 70.248 119.232 69.324C118.634 64.8809 121.53 57.0409 127.259 63.9407C126.427 62.8295 124.175 59.5506 121.7 55.3521Z"
                                        fill="#47BDFF"
                                    />
                                    <path d="M136.4 152.398L134.916 166.762L141.916 176.057L136.4 152.398Z" fill="#47BDFF" />
                                    <path
                                        d="M126.908 79.9896C125.85 80.1632 124.767 80.0864 123.744 79.7656L128.56 83.6281C127.702 82.5801 127.132 81.3257 126.908 79.9896Z"
                                        fill="#47BDFF"
                                    />
                                    <path
                                        d="M164.848 254.373C163.905 248.376 163.828 242.275 164.624 236.258C158.271 236.221 151.935 235.604 145.696 234.41L144.604 243.957C150.12 251.825 156.28 262.857 167.198 274.113C166.834 267.49 166.049 260.897 164.848 254.373Z"
                                        fill="#47BDFF"
                                    />
                                    <path d="M106.244 106.508L96.584 109.14L107.084 110.4L106.244 106.508Z" fill="#47BDFF" />
                                    <path
                                        d="M64.8062 153.799C55.5942 156.541 43.1902 158.895 29.0503 165.725C35.4418 167.476 41.9394 168.814 48.5028 169.729C54.4964 170.714 60.3157 172.563 65.7788 175.217C67.8245 169.209 70.4111 163.4 73.5068 157.859L64.8062 153.799Z"
                                        fill="#47BDFF"
                                    />
                                    <path
                                        d="M120.356 110.007L137.716 108.635L138.948 124.315L132.424 132.015L121.588 125.827L120.356 110.007Z"
                                        fill="#47BDFF"
                                    />
                                    <path
                                        d="M164.09 245.05L181.898 244.488L172.014 197.59"
                                        stroke="white"
                                        strokeWidth="0.75"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                    <path
                                        d="M59.4017 172.559L75.2218 247.709L144.436 245.637"
                                        stroke="white"
                                        strokeWidth="0.75"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                    <path d="M44.6736 102.672L55.2015 152.596" stroke="white" strokeWidth="0.75" strokeLinecap="round" strokeLinejoin="round" />
                                    <path
                                        d="M113.608 62.9141L36.8058 65.2101L40.8378 84.446"
                                        stroke="white"
                                        strokeWidth="0.75"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                    <path
                                        d="M146.666 77.1979L143.484 62.0176L126.236 62.5216"
                                        stroke="white"
                                        strokeWidth="0.75"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                    <path d="M164.874 163.628L151.183 98.668" stroke="white" strokeWidth="0.75" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M172.909 43.3105L143.344 62.0454" stroke="white" strokeWidth="0.75" strokeLinecap="round" strokeLinejoin="round" />
                                    <path
                                        d="M181.898 244.487L244.841 204.645L225.02 110.687M194.05 29.9285L206.342 22.1445L223.6 103.955"
                                        stroke="white"
                                        strokeWidth="0.75"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                    <path
                                        d="M143.708 225.955L148.02 184.599L135.168 167.043"
                                        stroke="white"
                                        strokeWidth="0.75"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                    <path d="M104.452 167.882L82.556 158" stroke="white" strokeWidth="0.75" strokeLinecap="round" strokeLinejoin="round" />
                                    <path
                                        d="M142.168 176.589L136.42 152.398L132.589 189.217C132.362 191.407 131.617 193.511 130.419 195.359C129.221 197.207 127.603 198.744 125.696 199.845C123.789 200.946 121.649 201.58 119.45 201.693C117.251 201.806 115.057 201.398 113.046 200.501L71.9733 181.881"
                                        stroke="white"
                                        strokeWidth="0.75"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                    <path
                                        d="M120.356 110.009L137.716 108.637L138.948 124.317L132.424 132.017L121.588 125.829L120.356 110.009Z"
                                        stroke="white"
                                        strokeWidth="0.75"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                    <path d="M123.688 79.8242L128.588 83.6322" stroke="white" strokeWidth="0.75" strokeLinecap="round" strokeLinejoin="round" />
                                    <path
                                        d="M108.316 89.2031C108.316 89.2031 118.088 125.407 109.1 120.059"
                                        stroke="white"
                                        strokeWidth="0.75"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                    <path
                                        d="M137.869 82.0918V100.038L118.368 101.718L115.344 88.4463"
                                        stroke="white"
                                        strokeWidth="0.75"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                    <path
                                        d="M145.052 78.1719V128.572L169.466 171.718C172.43 176.95 173.665 182.984 172.994 188.96L168.514 228.328"
                                        stroke="white"
                                        strokeWidth="0.75"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                    <path
                                        d="M141.193 225.338L140.438 233.234C150.152 235.66 160.173 236.622 170.172 236.09L170.928 228.194C160.928 228.867 150.883 227.902 141.193 225.338Z"
                                        stroke="white"
                                        strokeWidth="0.75"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                    <path
                                        d="M77.0138 152.064C71.2249 161.192 66.8185 171.128 63.9379 181.547L71.1943 184.77C73.8868 174.285 78.3053 164.321 84.2687 155.286L77.0138 152.064Z"
                                        stroke="white"
                                        strokeWidth="0.75"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                    <path
                                        d="M116.828 135.318C116.286 137.43 115.238 139.377 113.775 140.992C112.311 142.607 110.476 143.841 108.428 144.586"
                                        stroke="white"
                                        strokeWidth="0.75"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                    <path
                                        d="M144.016 133.191C144.016 133.191 146.48 138.511 151.237 139.659"
                                        stroke="white"
                                        strokeWidth="0.75"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                    <path
                                        d="M45.654 37.0972C45.9782 39.0774 45.708 41.1092 44.8772 42.9356C44.0467 44.7621 42.693 46.3011 40.9875 47.3582C39.282 48.4152 37.3014 48.9426 35.2961 48.8738C33.2907 48.805 31.3509 48.143 29.7219 46.9716C28.0929 45.8002 26.848 44.1719 26.1444 42.2928C25.441 40.4137 25.3106 38.3681 25.7698 36.4149C26.2292 34.4617 27.2574 32.6886 28.7244 31.3198C30.1914 29.9511 32.0316 29.0481 34.012 28.7253C36.6656 28.2939 39.382 28.9332 41.5649 30.5028C43.7477 32.0724 45.2183 34.4442 45.654 37.0972Z"
                                        stroke="white"
                                        strokeWidth="0.75"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                    <path
                                        d="M120.356 81.4776C119.936 79.6016 117.696 77.0566 115.26 74.6736L109.772 69.8577C109.45 69.5619 109.233 69.1681 109.157 68.7371C109.08 68.306 109.148 67.8617 109.349 67.473C109.551 67.0842 109.874 66.7725 110.27 66.5861C110.666 66.3997 111.113 66.349 111.541 66.4417C111.332 66.1085 111.227 65.7209 111.238 65.3279C111.249 64.9348 111.377 64.554 111.605 64.2334C111.832 63.9128 112.15 63.6669 112.517 63.5267C112.885 63.3866 113.285 63.3584 113.669 63.4457C113.464 63.1146 113.361 62.7307 113.372 62.3415C113.383 61.9523 113.508 61.5749 113.732 61.256C113.955 60.9372 114.267 60.6908 114.629 60.5476C114.991 60.4043 115.388 60.3703 115.769 60.4497C115.541 60.0803 115.441 59.6463 115.484 59.2145C115.527 58.7825 115.71 58.3767 116.005 58.059C116.301 57.7411 116.692 57.529 117.12 57.4552C117.548 57.3812 117.988 57.4496 118.373 57.6497C118.131 57.3333 117.986 56.9544 117.953 56.5577C117.919 56.1072 118.039 55.6585 118.292 55.2843C118.546 54.9101 118.918 54.6324 119.349 54.4959C119.779 54.3596 120.244 54.3725 120.666 54.5327C121.089 54.6931 121.445 54.9911 121.677 55.3788C122.887 57.3741 125.666 61.7849 126.923 63.5592"
                                        stroke="white"
                                        strokeWidth="0.75"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                    <path
                                        d="M190.802 17.2997C191.347 15.685 191.76 14.0284 192.035 12.3467C193.32 6.38272 194.797 7.44819 195.087 12.9907C195.249 16.1001 194.767 21.6721 194.555 24.7801C194.426 26.6855 193.857 32.2001 193.127 37.66C191.982 46.228 190.389 60.7319 189.431 69.4119C189.184 71.6513 188.417 73.802 187.193 75.693C185.967 77.5839 184.318 79.1626 182.375 80.3039L144.925 102.306"
                                        stroke="white"
                                        strokeWidth="0.75"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                    <path
                                        d="M190.83 19.8223C190.942 19.0944 190.559 13.4678 190.214 8.4824C189.828 2.88236 188.139 2.12636 186.994 8.5664C185.983 14.2504 185.258 15.4824 185.258 15.4824"
                                        stroke="white"
                                        strokeWidth="0.75"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                    <path
                                        d="M179.574 15.9854C179.574 15.9854 179.792 6.40649 179.798 5.48691C179.841 -0.33854 181.63 -0.396013 183.074 4.75891C184.4 9.48799 185.706 18.5894 185.706 18.5894"
                                        stroke="white"
                                        strokeWidth="0.75"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                    <path
                                        d="M180.554 18.4777C180.554 18.4777 178.764 14.1658 177.11 9.65777C175.376 4.9258 172.929 5.04665 174.142 10.8058C174.278 11.4512 175.443 17.8367 175.794 19.7097C176.009 20.8592 176.13 23.7697 175.15 24.1308C172.294 25.1933 165.129 22.4802 164.09 24.8588C163.42 26.3988 168.399 27.8371 171.706 29.1427C173.637 29.9046 174.633 33.0274 174.282 35.1848C174.251 35.3808 169.298 64.5847 169.298 64.5847L132.144 85.2752C130.838 85.1527 129.616 84.5805 128.686 83.6562C127.757 82.7319 127.177 81.5131 127.048 80.2086"
                                        stroke="white"
                                        strokeWidth="0.75"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                    <path
                                        d="M177.888 18.8424C182.303 17.8395 186.926 18.3117 191.048 20.1864"
                                        stroke="white"
                                        strokeWidth="0.75"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                    <path
                                        d="M179.657 22.2012C184.585 23.7412 187.581 26.6532 187.385 31.2731"
                                        stroke="white"
                                        strokeWidth="0.75"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                    <path
                                        d="M18.6901 92.6748C15.109 92.8667 11.5178 92.6884 7.97347 92.1428C1.44949 91.1112 1.8916 93.0624 7.49747 94.7468C9.00799 95.2007 10.3255 95.5603 11.4455 95.8388C14.7214 96.6552 17.9694 97.4598 21.1894 98.3588C33.4784 101.756 45.9472 102.836 107.07 110.453"
                                        stroke="white"
                                        strokeWidth="0.75"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                    <path
                                        d="M17.4047 84.6678L9.95677 80.4398C5.19237 77.7327 5.56521 75.7093 11.4688 78.0819C12.1113 78.3398 18.6323 80.9512 20.5687 81.6939C21.6858 82.1213 24.7731 82.9834 25.2727 82.1979C26.711 79.9358 24.6582 72.9329 27.2327 72.594C28.9127 72.3714 29.8603 77.1314 30.8727 80.3779C31.4622 82.2539 34.5967 83.9619 36.8927 84.1299C37.0887 84.1579 108.319 89.1964 108.319 89.1964L116.971 88.2444C123.411 86.5364 119.156 75.363 118.063 74.946C112.385 72.7767 114.224 67.5864 117.307 69.57C119.093 70.7194 119.289 70.1594 119.196 68.9569C118.806 63.9037 122.586 55.5288 129.207 66.854C138.464 82.6798 123.691 79.8224 123.691 79.8224"
                                        stroke="white"
                                        strokeWidth="0.75"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                    <path
                                        d="M18.858 84.9999C18.858 84.9999 6.73704 82.0526 5.92209 81.8374C-0.363144 80.1604 -0.37346 82.3311 4.8581 84.3294C9.8185 86.2231 15.8341 88.6399 15.8341 88.6399"
                                        stroke="white"
                                        strokeWidth="0.75"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                    <path
                                        d="M17.9618 88.9236C13.8816 88.5068 9.8256 87.8806 5.80983 87.0474C-0.600675 85.7535 -0.319202 87.6855 4.96983 89.5954C8.21973 90.8445 11.5498 91.8736 14.9378 92.6754"
                                        stroke="white"
                                        strokeWidth="0.75"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                    <path
                                        d="M19.4676 83.3535C17.9413 87.1922 17.9413 91.4692 19.4676 95.308"
                                        stroke="white"
                                        strokeWidth="0.75"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                    <path
                                        d="M22.7778 85.7383C23.8698 90.4983 26.5578 93.8303 31.4018 94.7822"
                                        stroke="white"
                                        strokeWidth="0.75"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                    <path
                                        d="M145.696 234.41L143.96 249.669C149.412 257.341 155.216 269.213 167.226 281.001C167.374 272.057 166.584 263.123 164.868 254.345C163.869 248.353 163.8 242.243 164.66 236.23"
                                        stroke="white"
                                        strokeWidth="0.75"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                    <path
                                        d="M205.166 247.121C218.97 251.349 217.766 231.722 231.57 235.95"
                                        stroke="white"
                                        strokeWidth="0.75"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                    <path d="M33.5015 196.386L38.6254 195.238" stroke="white" strokeWidth="0.75" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M47.6979 193.166L52.8219 192.018" stroke="white" strokeWidth="0.75" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M40.9778 184.543L42.1538 189.667" stroke="white" strokeWidth="0.75" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M44.1979 198.738L45.3459 203.862" stroke="white" strokeWidth="0.75" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M34.7896 188.91L39.2415 191.71" stroke="white" strokeWidth="0.75" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M47.11 196.693L51.534 199.493" stroke="white" strokeWidth="0.75" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M48.4536 185.83L45.6536 190.282" stroke="white" strokeWidth="0.75" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M40.67 198.121L37.87 202.573" stroke="white" strokeWidth="0.75" strokeLinecap="round" strokeLinejoin="round" />
                                    <path
                                        d="M197.242 127.087C196.831 126.996 196.441 126.825 196.096 126.583C195.75 126.341 195.456 126.033 195.229 125.677C195.004 125.321 194.849 124.924 194.777 124.509C194.705 124.093 194.714 123.667 194.806 123.256L199.846 100.828L206.118 102.256L202.794 117.091L235.666 96.3125L239.11 101.744L206.21 122.523L221.078 125.883L219.642 132.158L197.242 127.087Z"
                                        stroke="white"
                                        strokeWidth="0.75"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                    <path
                                        d="M229.302 72.3208L234.594 64.8168L227.146 59.6649L232.41 52.1609L224.906 46.7009L230.198 39.2249L222.498 33.793"
                                        stroke="white"
                                        strokeWidth="0.75"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                    <path
                                        d="M235.35 57.6216L240.64 50.1176L233.194 44.9656L238.456 37.4617L230.954 32.0017L236.246 24.5257L228.546 19.0938"
                                        stroke="white"
                                        strokeWidth="0.75"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                    <path
                                        d="M73.5417 157.859L59.5977 151.391C50.6083 154.135 37.5058 155.897 22.5259 163.571C30.9512 166.555 39.6714 168.63 48.5378 169.76C54.5215 170.722 60.331 172.56 65.7798 175.213"
                                        stroke="white"
                                        strokeWidth="0.75"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                    <path
                                        d="M96.584 109.14L106.244 106.508L111.172 130.028C111.172 130.028 96.612 141.116 106.604 177.066L96.8876 164.466"
                                        stroke="white"
                                        strokeWidth="0.75"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <section className="relative pt-14 lg:pb-48 lg:pt-[100px]">
                <div className="container relative z-[1]">
                    <div className="text-center ltr:lg:text-left rtl:lg:text-right">
                        <div className="heading mb-5 text-center ltr:lg:text-left rtl:lg:text-right xl:w-[95%]">
                            <h6>Join Us At GigaTorb</h6>
                            <h4>We thrive to help our clients have global impact!</h4>
                        </div>
                        <p className="pb-10 text-lg font-semibold leading-[30px]">
                            <ol>
                                <li>
                                    <span className="text-primary">Fostering Diversity and Inclusion: </span>
                                    At Gigatorb, we believe that diversity and inclusion are more than just words, they are the lifeblood of innovation,
                                    creativity, and success in the IT world.
                                </li>
                                <li>
                                    <span className="text-primary">Inspiring Innovation Through Collaboration: </span>
                                    In the world of IT, innovation and collaboration are the driving forces behind every breakthrough, every solution, and every
                                    success story. At Gigatorb, we understand that the future of IT is built on these pillars.
                                </li>
                                <li>
                                    <span className="text-primary">Build your career: </span>
                                    Are you ready to embark on a journey that will shape the future of technology? At Gigatorb, we're not just building
                                    software, we're building careers, innovators, and the next generation of IT leaders.
                                </li>
                            </ol>
                        </p>
                        <Link href="/career" className="btn capitalize text-white">
                            Join Our Team
                        </Link>
                    </div>
                </div>
            </section>

            <section className="bg-gradient-to-t from-white/[54%] to-transparent py-14 dark:bg-none lg:py-[100px]">
                <div className="container">
                    <div className="grid items-center gap-8 md:grid-cols-3 lg:grid-cols-2 xl:items-start">
                        <div className="order-2 md:order-1 md:col-span-2 lg:col-auto">
                            <div className="heading mb-5 text-center ltr:md:text-left rtl:md:text-right">
                                <h6>Careers</h6>
                                <h4>
                                    Join the <span className="text-primary">Giga</span>Torb Family
                                </h4>
                            </div>
                            <div className="text-center font-semibold ltr:md:text-left rtl:md:text-right">
                                <p>
                                    We have embarked on a dynamic journey driven by passion, innovation, and a relentless commitment to technological
                                    excellence. Together, we've crafted innovative solutions, solved complex challenges, and fostered a culture of collaboration
                                    and growth.
                                </p>
                                <Link href="/career#open-position" className="btn mt-10 capitalize text-white">
                                    Open Positions
                                </Link>
                            </div>
                        </div>
                        <img
                            src="/Images/Employees/team1.jpg"
                            alt="creative-agency"
                            className="order-1 mx-auto rounded-[32px] md:order-2 md:mx-0"
                            data-aos={isRtl ? 'fade-right' : 'fade-left'}
                            data-aos-duration="1000"
                        />
                    </div>
                </div>
            </section>

            <section className="bg-gradient-to-t from-white/[54%] to-transparent py-14 dark:bg-none lg:py-[100px]">
                <div className="container">
                    <div className="heading text-center">
                        <h6>Our Culture</h6>
                        <h4>Be Great. Do Good. Have Fun.</h4>
                    </div>
                    {isOpen && (
                        <Lightbox
                            mainSrc={items[photoIndex]}
                            nextSrc={items[(photoIndex + 1) % items.length]}
                            prevSrc={items[(photoIndex + items.length - 1) % items.length]}
                            enableZoom
                            onImageLoad={() => {
                                window.dispatchEvent(new Event('resize'));
                            }}
                            onCloseRequest={() => setIsOpen(false)}
                            onMovePrevRequest={() => setPhotoIndex((photoIndex + items.length - 1) % items.length)}
                            onMoveNextRequest={() => setPhotoIndex((photoIndex + 1) % items.length)}
                        />
                    )}
                    <div className="grid gap-4 md:gap-6">
                        <div className="flex flex-col gap-4 sm:flex-row md:gap-6">
                            <div
                                className="mx-auto w-full cursor-pointer overflow-hidden rounded-[32px] sm:w-[43%]"
                                data-aos="fade-up"
                                data-aos-duration="1000"
                                onClick={() => {
                                    setIsOpen(true);
                                    setPhotoIndex(0);
                                }}
                            >
                                <img
                                    src="\Images\gigatorb2.jpg"
                                    alt="gallery-1"
                                    className="h-full w-full rounded-[32px] object-cover transition duration-500 hover:rotate-12 hover:scale-125"
                                />
                            </div>
                            <div
                                className="mx-auto w-full cursor-pointer overflow-hidden rounded-[32px] sm:w-[35%]"
                                data-aos="fade-up"
                                data-aos-duration="1000"
                                onClick={() => {
                                    setIsOpen(true);
                                    setPhotoIndex(1);
                                }}
                            >
                                <img
                                    src="\Images\gigatorb3.jpg"
                                    alt="gallery-2"
                                    className="h-full w-full rounded-[32px] object-cover transition duration-500 hover:rotate-12 hover:scale-125"
                                />
                            </div>
                            <div
                                className="mx-auto w-full cursor-pointer overflow-hidden rounded-[32px] sm:w-[22%]"
                                data-aos="fade-up"
                                data-aos-duration="1000"
                                onClick={() => {
                                    setIsOpen(true);
                                    setPhotoIndex(2);
                                }}
                            >
                                <img
                                    src="\Images\gigatorb5.jpg"
                                    alt="gallery-3.png"
                                    className="h-full w-full rounded-[32px] object-cover transition duration-500 hover:rotate-12 hover:scale-125"
                                />
                            </div>
                        </div>
                        <div className="flex flex-col gap-4 sm:flex-row md:gap-6">
                            <div
                                className="mx-auto w-full cursor-pointer overflow-hidden rounded-[32px] sm:w-3/5"
                                data-aos="fade-up"
                                data-aos-duration="1000"
                                onClick={() => {
                                    setIsOpen(true);
                                    setPhotoIndex(3);
                                }}
                            >
                                <img
                                    src="\Images\gigatorb7.jpg"
                                    alt="gallery-4"
                                    className="h-full w-full rounded-[32px] object-cover transition duration-500 hover:rotate-12 hover:scale-125"
                                />
                            </div>
                            <div
                                className="mx-auto w-full cursor-pointer overflow-hidden rounded-[32px] sm:w-2/5"
                                data-aos="fade-up"
                                data-aos-duration="1000"
                                onClick={() => {
                                    setIsOpen(true);
                                    setPhotoIndex(4);
                                }}
                            >
                                <img
                                    src="\Images\gigatorb11.jpg"
                                    alt="gallery-5"
                                    className="h-full w-full rounded-[32px] object-cover transition duration-500 hover:rotate-12 hover:scale-125"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="bg-gradient-to-t from-white/[54%] to-transparent py-14 dark:bg-none lg:py-[100px]">
                <div className="container">
                    <div className="heading text-center">
                        <h6>Our Amazing Perks</h6>
                        <h4>
                            Great benefits of working at <span className="text-primary">Giga</span>Torb
                        </h4>
                    </div>
                    <div className="grid gap-[30px] sm:grid-cols-2 lg:grid-cols-3">
                        <div data-aos="fade-up" data-aos-duration="1000">
                            <div className="flex items-center justify-start gap-3 rounded-[32px] border-2 border-white bg-white p-6 drop-shadow-[5px_10px_60px_rgba(119,128,161,0.08)] transition hover:border-secondary hover:bg-secondary/10 dark:border-gray-dark dark:bg-gray-dark dark:hover:border-secondary sm:justify-center md:p-10">
                                <div>
                                    <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M34.8141 38.9194H32.5093C32.5093 38.8544 32.4991 38.7886 32.4737 38.7247L30.3821 33.4967L34.2045 31.3358C34.4585 31.1923 34.5482 30.87 34.4043 30.6161C34.2608 30.3621 33.9378 30.2735 33.6846 30.4162L32.2161 31.2464C32.3498 30.9336 32.4247 30.5892 32.4247 30.2273C32.4247 28.7941 31.2653 27.6348 29.8321 27.6348C28.3989 27.6348 27.2396 28.7941 27.2396 30.2273C27.2396 31.5447 28.2223 32.6186 29.4935 32.7861L26.6404 34.3992C26.7287 34.1605 26.7785 33.908 26.7785 33.6519C26.7785 33.3402 26.7098 33.0285 26.5725 32.7324C26.0598 31.6384 24.7443 31.1843 23.6664 31.7177L15.3339 35.855H4.81304C4.39051 35.855 4.00468 36.0294 3.72998 36.304C3.44987 36.5787 3.28093 36.9645 3.28093 37.3871C3.28093 38.2325 3.96249 38.9195 4.8134 38.9195H1.07203C0.665123 38.9195 0.332336 39.2523 0.332336 39.6592V41.3711C0.332336 41.778 0.665123 42.1108 1.07203 42.1108L2.32436 42.1112V44.8745C2.32436 45.2814 2.65715 45.6142 3.06405 45.6142H5.10368C5.51059 45.6142 5.84337 45.2814 5.84337 44.8745V42.1112H30.0427V44.8745C30.0427 45.2814 30.3755 45.6142 30.7824 45.6142H32.8221C33.229 45.6142 33.5618 45.2814 33.5618 44.8745V42.1112H34.8141C35.221 42.1112 35.5538 41.7784 35.5538 41.3715V39.6596C35.5538 39.2523 35.221 38.9195 34.8141 38.9195L34.8141 38.9194ZM20.7905 38.9194L29.4536 34.0217L31.4133 38.9194H20.7905Z"
                                            fill="#47BDFF"
                                        />
                                        <path
                                            d="M15.238 34.7188L12.6331 32.5789C11.9991 32.0612 11.1006 32.0187 10.4191 32.4783L6.98981 34.798H15.0843L15.238 34.7188Z"
                                            fill="#47BDFF"
                                        />
                                        <path
                                            d="M12.712 18.8535C12.8598 19.1071 12.7701 19.4294 12.5165 19.5772C12.292 19.712 11.9458 19.6524 11.7979 19.3818L11.1534 18.2668C11.0055 18.0187 11.0953 17.691 11.3488 17.5482C11.597 17.4003 11.9196 17.49 12.0675 17.7382L12.712 18.8535Z"
                                            fill="#B476E5"
                                        />
                                        <path
                                            d="M15.5765 16.5221C15.4232 16.78 15.0908 16.861 14.8528 16.7121L13.7379 16.0727C13.4843 15.9248 13.3996 15.6022 13.5424 15.3486C13.6903 15.095 14.0125 15.0104 14.2661 15.1531L15.3811 15.7976C15.6347 15.9462 15.7193 16.2685 15.5765 16.5221Z"
                                            fill="#B476E5"
                                        />
                                        <path
                                            d="M5.53748 18.2666L4.89297 19.3815C4.74584 19.6511 4.39924 19.7122 4.17435 19.577C3.92076 19.4291 3.83102 19.1069 3.97888 18.8533L4.62339 17.7383C4.76618 17.4902 5.09351 17.4001 5.34202 17.5483C5.59561 17.6907 5.68534 18.0185 5.53748 18.2666V18.2666Z"
                                            fill="#B476E5"
                                        />
                                        <path
                                            d="M7.81427 5.81723V4.52825C7.81427 4.2376 8.05187 4 8.34252 4C8.63825 4 8.87077 4.23797 8.87077 4.52825V5.81723C8.87077 6.10787 8.63825 6.34548 8.34252 6.34548C8.05187 6.34584 7.81427 6.10787 7.81427 5.81723Z"
                                            fill="#B476E5"
                                        />
                                        <path
                                            d="M3.14906 9.34789C3.0001 9.59857 2.67966 9.68649 2.42535 9.54335L1.31039 8.89885C1.0568 8.75098 0.972155 8.42873 1.11493 8.17477C1.26279 7.92118 1.58505 7.83654 1.83863 7.97931L2.95359 8.62382C3.20719 8.77205 3.29183 9.0943 3.14906 9.34789Z"
                                            fill="#B476E5"
                                        />
                                        <path
                                            d="M13.5416 9.3479C13.3988 9.0943 13.4835 8.77205 13.7371 8.62382L14.8521 7.97931C15.1056 7.83653 15.4279 7.92118 15.5758 8.17478C15.7185 8.42837 15.6339 8.75062 15.3803 8.89885L14.2653 9.54336C14.0179 9.68287 13.696 9.60803 13.5416 9.3479Z"
                                            fill="#B476E5"
                                        />
                                        <path
                                            d="M16.6909 12.3466C16.6909 12.6373 16.4583 12.8749 16.1626 12.8749H14.8787C14.5829 12.8749 14.3504 12.6373 14.3504 12.3466C14.3504 12.056 14.5829 11.8184 14.8787 11.8184H16.1626C16.4583 11.8184 16.6909 12.056 16.6909 12.3466Z"
                                            fill="#B476E5"
                                        />
                                        <path
                                            d="M12.8441 12.3479C12.8441 14.8311 10.831 16.8442 8.34238 16.8442C5.8592 16.8442 3.84607 14.8311 3.84607 12.3479C3.84607 9.86469 5.8592 7.85156 8.34238 7.85156C10.831 7.8512 12.8441 9.86469 12.8441 12.3479Z"
                                            fill="#B476E5"
                                        />
                                        <path
                                            d="M1.81257 12.8749H0.528612C0.232516 12.8749 0 12.6373 0 12.3466C0 12.056 0.232517 11.8184 0.528249 11.8184H1.81258C2.10831 11.8184 2.34083 12.056 2.34083 12.3466C2.34083 12.6373 2.10831 12.8749 1.81258 12.8749H1.81257Z"
                                            fill="#B476E5"
                                        />
                                        <path
                                            d="M3.14906 15.3483C3.29184 15.6019 3.20719 15.9242 2.9536 16.0724L1.83864 16.7118C1.60103 16.8604 1.26825 16.7801 1.11493 16.5218C0.97215 16.2682 1.0568 15.946 1.3104 15.7977L2.42536 15.1532C2.6735 15.0104 3.0012 15.0947 3.14906 15.3483Z"
                                            fill="#B476E5"
                                        />
                                        <path
                                            d="M3.97864 5.83906C3.83078 5.59092 3.92051 5.26322 4.1741 5.12044C4.42261 4.97257 4.74994 5.06231 4.89273 5.31045L5.53723 6.43053C5.6851 6.67867 5.59536 7.00128 5.34177 7.14915C5.08455 7.30356 4.76121 7.20401 4.62315 6.95914L3.97864 5.83906Z"
                                            fill="#B476E5"
                                        />
                                        <path
                                            d="M11.1532 6.43069L11.7977 5.31061C11.9405 5.06247 12.2678 4.97237 12.5163 5.1206C12.7699 5.26338 12.8597 5.59072 12.7118 5.83922L12.0673 6.9593C11.9332 7.19763 11.6121 7.30771 11.3487 7.14931C11.0951 7.00145 11.0053 6.67919 11.1532 6.43069Z"
                                            fill="#B476E5"
                                        />
                                        <path
                                            d="M8.87077 18.8779V20.1668C8.87077 20.4575 8.63825 20.6951 8.34252 20.6951C8.05187 20.6951 7.81427 20.4571 7.81427 20.1668V18.8779C7.81427 18.5872 8.05187 18.3496 8.34252 18.3496C8.63861 18.3492 8.87077 18.5872 8.87077 18.8779Z"
                                            fill="#B476E5"
                                        />
                                        <path
                                            d="M40.2773 26.555C38.8665 27.0255 37.4398 27.1679 36.0977 26.9725C35.7755 25.2922 35.4321 23.7866 35.1465 22.6081C35.5218 22.7032 35.9178 22.7298 36.3248 22.6927C37.2759 22.603 38.0737 22.1696 38.6441 21.541C39.3105 22.9092 39.8437 24.6476 40.2773 26.555V26.555Z"
                                            fill="#B476E5"
                                        />
                                        <path
                                            d="M40.9377 30.0703C39.4899 30.5404 38.0632 30.6516 36.6895 30.398C36.5678 29.6002 36.4359 28.8184 36.2986 28.0627C37.6617 28.2106 39.0884 28.0522 40.4936 27.5977C40.6575 28.406 40.8054 29.2354 40.9376 30.0703L40.9377 30.0703Z"
                                            fill="#B476E5"
                                        />
                                        <path
                                            d="M42.0742 44.1652C42.0793 44.5881 41.7675 44.9471 41.345 45.0056L36.9596 45.6025C36.278 45.6977 35.7865 44.9736 36.1142 44.3662C37.6516 41.4921 37.4933 36.3298 36.8433 31.4894C37.2713 31.5526 37.6993 31.5846 38.1327 31.5846C39.11 31.5846 40.0982 31.4313 41.0969 31.125C41.8467 36.4136 42.0426 41.8561 42.0742 44.1645L42.0742 44.1652Z"
                                            fill="#B476E5"
                                        />
                                        <path
                                            d="M47.2788 8.04022L43.9607 8.35739C43.7493 8.37338 43.6755 8.64259 43.8499 8.7643L45.2551 9.76812C43.0095 9.22933 40.4257 9.65731 38.1169 11.1418L35.8502 12.5947C36.3309 9.40344 38.2913 7.88148 38.2913 7.88148C42.3334 4.16159 46.1797 6.65026 47.4004 7.63843C47.5588 7.76558 47.4796 8.02462 47.2787 8.04024L47.2788 8.04022Z"
                                            fill="#B476E5"
                                        />
                                        <path
                                            d="M34.3649 12.2053C34.3965 12.1843 34.4285 12.1683 34.4601 12.1472C31.3164 11.3123 28.8172 10.1291 25.4356 11.7087L26.6508 10.4247C26.7936 10.2714 26.6719 10.0178 26.4604 10.0389L23.1529 10.3666C22.9469 10.3826 22.8201 10.1501 22.952 9.99677C23.9663 8.79206 27.2633 5.61133 31.9449 8.4909C31.9449 8.4909 34.1483 9.62149 35.2369 12.6544C34.9619 12.459 34.6661 12.3057 34.3649 12.2054L34.3649 12.2053Z"
                                            fill="#B476E5"
                                        />
                                        <path
                                            d="M29.5406 15.9841C29.6408 17.0461 30.1851 17.9656 30.9989 18.5625L29.9631 19.3658C29.8468 19.461 29.6725 19.4134 29.6143 19.2706L28.822 17.2891C28.7533 17.1147 28.5102 17.0936 28.4151 17.2629C27.966 18.0553 26.867 19.683 25.3822 19.8257C25.2554 19.8363 25.1446 19.7306 25.1391 19.6038L25.0178 17.3531C25.0018 17.1417 24.7377 17.057 24.6109 17.2263L22.5662 19.8577C22.4449 20.0161 22.1859 19.9475 22.1648 19.7469C22.0009 18.3573 21.9428 14.5742 25.6838 12.7566C26.1434 12.5295 26.656 12.3391 27.2373 12.1807C27.2373 12.1807 29.1712 11.6735 31.5646 12.3867C30.3014 13.004 29.3768 14.325 29.5406 15.9842L29.5406 15.9841Z"
                                            fill="#B476E5"
                                        />
                                        <path
                                            d="M49.9992 17.0654C50.0152 17.2663 49.7721 17.3826 49.6188 17.2503L47.1142 15.0523C46.9558 14.915 46.7073 15.0472 46.7389 15.2583L47.0241 17.3296C47.0557 17.5621 46.8707 17.7681 46.6382 17.7681C45.233 17.7681 43.949 16.4791 43.3834 15.8186C43.262 15.6758 43.0241 15.7394 42.9925 15.9243L42.591 18.0221C42.5645 18.1699 42.4006 18.2491 42.2633 18.1805L41.2965 17.6893C41.7721 17.0128 42.0097 16.1728 41.9254 15.2903C41.751 13.383 40.2767 12.1939 38.6865 12.0304C41.1487 10.4504 43.5686 10.6037 43.5686 10.6037C49.048 10.9946 49.8774 15.5014 49.9992 17.0655L49.9992 17.0654Z"
                                            fill="#B476E5"
                                        />
                                        <path
                                            d="M39.4319 17.9529C39.4213 17.9158 39.4053 17.8787 39.3948 17.842C38.7859 16.1643 36.9694 15.2539 35.7385 15.4646C35.8788 14.0626 36.9026 13.1867 38.0633 13.0708C39.4845 12.9335 40.742 13.9693 40.8743 15.3905C40.98 16.4891 40.3776 17.4984 39.4319 17.9529L39.4319 17.9529Z"
                                            fill="#B476E5"
                                        />
                                        <path
                                            d="M35.0996 13.9428C34.6523 14.794 34.6941 15.5083 34.6556 15.7078C33.715 16.0671 32.9491 16.8224 32.579 17.795C32.5419 17.9007 32.5048 18.0064 32.4732 18.1118C31.4745 17.8371 30.6977 16.9757 30.5924 15.8821C30.455 14.4659 31.4905 13.2085 32.912 13.0712C33.7731 12.9865 34.5709 13.3349 35.0996 13.9427L35.0996 13.9428Z"
                                            fill="#B476E5"
                                        />
                                        <path
                                            d="M38.1009 20.5386C37.6889 21.1464 37.0124 21.5689 36.2251 21.643C35.7336 21.6906 35.2634 21.6009 34.8514 21.4C34.0696 21.0196 33.5039 20.2585 33.4142 19.3338C33.3771 18.9269 33.4302 18.5306 33.5675 18.1716C33.8898 17.3313 34.6349 16.6923 35.57 16.5495C35.6227 16.5335 35.6808 16.5284 35.7339 16.5234C35.7866 16.5179 35.8396 16.5128 35.8923 16.5179C37.0229 16.4703 38.0267 17.1733 38.402 18.2036C38.4761 18.4042 38.5233 18.6211 38.5447 18.8431C38.608 19.4661 38.4336 20.063 38.1008 20.5386L38.1009 20.5386Z"
                                            fill="#B476E5"
                                        />
                                    </svg>
                                </div>
                                <h6 className="text-xl font-bold text-black dark:text-white">5 Working Days</h6>
                            </div>
                        </div>
                        <div data-aos="fade-up" data-aos-duration="1000">
                            <div className="flex items-center justify-start gap-3 rounded-[32px] border-2 border-white bg-white p-6 drop-shadow-[5px_10px_60px_rgba(119,128,161,0.08)] transition hover:border-secondary hover:bg-secondary/10 dark:border-gray-dark dark:bg-gray-dark dark:hover:border-secondary sm:justify-center md:p-10">
                                <div>
                                    <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M35.9006 13.0684C31.3845 13.1158 29.9582 14.352 27.7239 16.3008C26.8683 17.0616 23.7781 17.2042 21.8766 17.0138C20.7833 16.9186 19.8326 17.7268 19.6897 18.7727C19.5945 19.866 20.3552 20.8167 21.4485 20.9596C21.7815 21.0071 22.5419 21.0548 23.4926 21.0548C25.5366 21.0548 28.5794 20.7696 30.2905 19.2482C30.5282 19.0105 30.766 18.8205 31.0034 18.6301C30.8134 20.6268 30.5279 24.097 30.2905 27.1396C23.73 27.2822 21.0679 27.9003 20.0696 30.0395C19.3566 31.6083 19.3089 36.5523 19.9744 44.7291C20.0696 46.0602 21.2103 47.1061 22.5413 47.1061H22.7313C24.1576 47.0109 25.2035 45.775 25.1083 44.3488C24.7754 40.0226 24.5379 34.7934 24.7279 32.7492C26.0116 32.4641 28.5785 32.3215 30.7655 32.3689C33.095 32.4163 38.0864 32.8444 38.5619 30.8953C39.0849 28.7083 39.7978 18.5826 39.7978 16.2057C39.7988 14.5423 39.1334 13.0684 35.9006 13.0684Z"
                                            fill="#47BDFF"
                                        />
                                        <path
                                            d="M36.2283 2.00879C38.9803 2.17095 41.08 4.53329 40.9179 7.2853C40.7557 10.0373 38.3934 12.137 35.6414 11.9749C32.889 11.8127 30.7896 9.45036 30.9518 6.69836C31.1136 3.94635 33.4759 1.84665 36.2283 2.00879Z"
                                            fill="#47BDFF"
                                        />
                                        <path
                                            d="M43.5545 13.972C42.6512 13.8768 41.8431 14.5423 41.7479 15.4456L39.7987 33.7957H28.1041C27.2008 33.7957 26.4401 34.5564 26.4401 35.4597C26.4401 36.363 27.2008 37.1238 28.1041 37.1238H33.4761V43.2088L29.7681 44.5395C29.1025 44.7773 28.7222 45.538 28.9599 46.2509C29.1977 46.9638 29.9584 47.2968 30.6713 47.0591L34.8072 45.5854L38.943 47.0591C39.0856 47.1065 39.2282 47.1542 39.3708 47.1542C39.8937 47.1542 40.4166 46.8213 40.6067 46.2987C40.8445 45.6332 40.5115 44.8724 39.7986 44.5873L36.0905 43.2562L36.0908 37.1235H41.2251C42.0806 37.1235 42.7939 36.5054 42.8891 35.6498L44.9809 15.826C45.1232 14.8753 44.4576 14.0668 43.5543 13.972L43.5545 13.972Z"
                                            fill="#B476E5"
                                        />
                                        <path
                                            d="M28.4369 26.332C28.627 26.332 28.8173 26.142 28.8173 25.9516V23.7173C28.8173 23.5273 28.6273 23.3369 28.4369 23.3369L25.9648 23.3373V22.5766C25.9648 22.3866 25.7748 22.1962 25.5845 22.1962H18.5962C18.4062 22.1962 18.2159 22.3862 18.2159 22.5766V23.3373H13.6049V22.5766C13.6049 22.3866 13.4149 22.1962 13.1294 22.1962H11.228C11.038 20.3896 10.9428 15.8735 12.2738 13.8769L12.4164 15.1128C12.4639 15.3028 12.6542 15.4457 12.8442 15.4457L13.272 15.3983L13.7475 18.8686C13.7949 19.0586 13.9853 19.2015 14.1753 19.2015L15.6489 19.0115C15.8389 18.9641 15.9819 18.7737 15.9819 18.5837L14.3178 6.22356C14.2704 6.03355 14.0801 5.89062 13.89 5.89062L12.4638 6.03322C12.2738 6.08064 12.1309 6.27098 12.1309 6.46099L12.6538 10.4067L12.226 10.4542C12.036 10.5016 11.8931 10.6919 11.8931 10.8819L12.0831 12.1656C11.8931 12.3082 11.6553 12.4985 11.465 12.7359C9.46835 15.1129 9.80095 20.8175 9.94357 22.1487H8.08954C7.80436 22.1487 7.61401 22.3387 7.61401 22.529V23.2897H5.38036C5.19034 23.2897 5 23.4798 5 23.6701V25.9044C5 26.0944 5.19001 26.2848 5.38036 26.2848H8.28024V46.5365C8.28024 46.7265 8.47025 46.9168 8.6606 46.9168H15.3637C15.5537 46.9168 15.7441 46.7268 15.7441 46.5365V26.3323L28.4369 26.332Z"
                                            fill="#B476E5"
                                        />
                                    </svg>
                                </div>
                                <h6 className="text-xl font-bold text-black dark:text-white">Flexible Work Environment</h6>
                            </div>
                        </div>
                        <div data-aos="fade-up" data-aos-duration="1000">
                            <div className="flex items-center justify-start gap-3 rounded-[32px] border-2 border-white bg-white p-6 drop-shadow-[5px_10px_60px_rgba(119,128,161,0.08)] transition hover:border-secondary hover:bg-secondary/10 dark:border-gray-dark dark:bg-gray-dark dark:hover:border-secondary sm:justify-center md:p-10">
                                <div>
                                    <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M1.0957 16.4609L11.8572 42.5465L22.6188 16.4609H1.0957Z" fill="#B476E5" />
                                        <path
                                            d="M16.1364 9.77767L13.9242 10.1744L13.4034 14.1427L12.2323 12.1585H11.5816L10.4102 13.7459L10.0198 9.38095H8.06813L6.24641 14.1427L5.20494 7H3.25331V14.5398L1.56189 11.365H0L1.07766 15.4653H17.1765L16.1364 9.77767Z"
                                            fill="#B476E5"
                                        />
                                        <path
                                            d="M24.0738 12.6875L22.2525 11.7615L20.3005 14.6716L19.3893 10.3066H18.0882L17.177 15.4652H22.7736L24.0738 12.6875Z"
                                            fill="#B476E5"
                                        />
                                        <path
                                            d="M20.5798 27.1243V27.882H48.0288V27.1243H48.0299C48.0299 23.9086 45.7834 21.293 43.022 21.293L25.5872 21.2933C22.8257 21.2933 20.5792 23.909 20.5792 27.1243L20.5798 27.1243Z"
                                            fill="#47BDFF"
                                        />
                                        <path
                                            d="M46.9339 32.3262H20.8634C20.2581 32.3262 19.7679 32.9606 19.7679 33.7442C19.7679 34.5277 20.2584 35.1633 20.8634 35.1633H46.9339C47.5395 35.1633 48.0301 34.5277 48.0301 33.7442C48.0304 32.9606 47.5399 32.3262 46.9339 32.3262Z"
                                            fill="#47BDFF"
                                        />
                                        <path
                                            d="M20.2549 36.991C20.2549 40.2078 22.501 42.8234 25.2628 42.8234H42.6967C45.4581 42.8234 47.7046 40.2081 47.7046 36.991V36.2344H20.2556L20.2549 36.991Z"
                                            fill="#47BDFF"
                                        />
                                        <path
                                            d="M49.0851 29.1121C48.1624 29.111 46.6359 28.5851 45.7649 29.1461C45.2681 29.4683 44.7835 30.0554 44.2613 29.5306C43.976 29.2442 43.6527 28.925 43.2619 28.791C42.299 28.4592 41.4412 28.8633 40.5872 29.3118C39.8431 29.7045 39.0555 29.0069 38.3355 28.9442C37.8195 28.8999 37.3899 28.9822 36.8927 29.132C35.7847 29.4668 35.1843 29.6705 34.0974 29.1652C33.4751 28.8759 32.8975 28.608 32.2302 28.4563C30.7949 28.1307 29.5533 29.3291 28.0974 29.0361C26.8625 28.7858 26.0169 28.1761 24.709 28.3662C24.1904 28.4419 23.6623 28.8859 23.2485 29.1752C22.197 29.9071 21.2131 29.1678 20.2447 28.674C19.1607 28.1211 18.2034 29.7528 19.2902 30.3068C20.2734 30.808 21.3526 31.6336 22.5274 31.4424C23.8796 31.2225 24.8289 29.9326 26.2177 30.3452C27.4981 30.7257 28.3266 31.0893 29.6841 30.8837C30.8053 30.7143 31.3633 30.0208 32.6311 30.5571C33.3327 30.8538 33.9624 31.2029 34.7072 31.3845C36.0613 31.7163 37.2419 30.5571 38.5226 30.9291C39.8793 31.3229 40.6079 31.4388 41.8926 30.7608C42.5551 30.4128 44.0111 31.7488 44.8677 31.7713C45.2914 31.7824 45.7265 31.486 46.0561 31.2564C46.9419 30.6394 48.0941 31.0025 49.0851 31.004C50.3049 31.0051 50.3049 29.1143 49.0851 29.1122V29.1121Z"
                                            fill="#47BDFF"
                                        />
                                    </svg>
                                </div>
                                <h6 className="text-xl font-bold text-black dark:text-white">Healthy Snacks</h6>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-14 lg:py-[100px]" id="open-position">
                <div className="container">
                    <div className="heading text-center">
                        <h6>Open Positions</h6>
                        <h4>Wake Up To A Better Future</h4>
                    </div>
                    <div className="pb-[50px]">
                        <ul className="filters portfolio-filter flex items-center gap-4 overflow-x-auto whitespace-nowrap pb-2.5 font-bold dark:text-white md:justify-between">
                            {/* <li className={`filter ${activeTab === 'all' ? 'active' : ''}`}> */}
                            <li >

                                <button
                                    type="button"
                                    onClick={() => setActiveTab('all')}
                                    className="rounded-[10px] bg-gray/5 px-5 py-4 leading-5 transition hover:bg-secondary hover:text-white"
                                >
                                    All Positions
                                </button>
                            </li>
      {/* <li className={`filter ${activeTab === 'all' ? 'active' : ''}`}> */}
      <li >
                                <button
                                    type="button"
                                    onClick={() => setActiveTab('design')}
                                    className="rounded-[10px] bg-gray/5 px-5 py-4 leading-5 transition hover:bg-secondary hover:text-white"
                                >
                                    UI/UX Design
                                </button>
                            </li>
      {/* <li className={`filter ${activeTab === 'all' ? 'active' : ''}`}> */}
      <li >
                                <button
                                    type="button"
                                    onClick={() => setActiveTab('website')}
                                    className="rounded-[10px] bg-gray/5 px-5 py-4 leading-5 transition hover:bg-secondary hover:text-white"
                                >
                                    Website Development
                                </button>
                            </li>
      {/* <li className={`filter ${activeTab === 'all' ? 'active' : ''}`}> */}
      <li >
                                <button
                                    type="button"
                                    onClick={() => setActiveTab('app')}
                                    className="rounded-[10px] bg-gray/5 px-5 py-4 leading-5 transition hover:bg-secondary hover:text-white"
                                >
                                    Application Development
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>

            <section className="py-8 lg:py-[20px]">
                <div className="container">
                    <div className="heading text-center">
                        <h6>Meet Our Team</h6>
                        <h4>Creative Minds</h4>
                    </div>
                    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
                    <div className="group cursor-pointer text-center">
                            <div className="relative h-[280px] rounded-3xl transition-all duration-500 group-hover:shadow-[0_0_25px_#979797]">
  <img src="/Images/Employees/Neeraj Sharma.jpg"  alt="Developers"                                    
                                    className="h-full w-full rounded-3xl object-cover object-top"
                                />
                            </div>
                            <h4 className="pb-2 pt-5 text-xl font-extrabold text-black transition duration-500 group-hover:text-secondary dark:text-white">
    Neeraj Sharma                        </h4>
                        </div>   <div className="group cursor-pointer text-center">
                            <div className="relative h-[280px] rounded-3xl transition-all duration-500 group-hover:shadow-[0_0_25px_#979797]">
                            <img src="/Images/Employees/Keshav Sharma.jpg" alt="Developers" 
                                    className="h-full w-full rounded-3xl object-cover object-top"
                                />
                            </div>
                            <h4 className="pb-2 pt-5 text-xl font-extrabold text-black transition duration-500 group-hover:text-secondary dark:text-white">
                            Keshav Sharma                            </h4>
                        </div>   <div className="group cursor-pointer text-center">
                            <div className="relative h-[280px] rounded-3xl transition-all duration-500 group-hover:shadow-[0_0_25px_#979797]">
           <img src="/Images/Employees/Shashank Sohani.jpg"
                                    alt="team-member-1"
                                    className="h-full w-full rounded-3xl object-cover object-top"
                                />
                            </div>
                            <h4 className="pb-2 pt-5 text-xl font-extrabold text-black transition duration-500 group-hover:text-secondary dark:text-white">
                            Shashank Sohani                            </h4>
                        </div>   <div className="group cursor-pointer text-center">
                            <div className="relative h-[280px] rounded-3xl transition-all duration-500 group-hover:shadow-[0_0_25px_#979797]">
                            <img src="/Images/Employees/Amar rathod.png" 
                                    alt="team-member-1"
                                    className="h-full w-full rounded-3xl object-cover object-top"
                                />
                            </div>
                            <h4 className="pb-2 pt-5 text-xl font-extrabold text-black transition duration-500 group-hover:text-secondary dark:text-white">
                            Amar Rathod                            </h4>
                        </div>  
                    
                        <div className="group cursor-pointer text-center">
                            <div className="relative h-[280px] rounded-3xl transition-all duration-500 group-hover:shadow-[0_0_25px_#979797]">
                                <img
                                    src="/Images/Employees/Vaishali Parmar.jpg"
                                    alt="team-member-1"
                                    className="h-full w-full rounded-3xl object-cover object-top"
                                />
                            </div>
                            <h4 className="pb-2 pt-5 text-xl font-extrabold text-black transition duration-500 group-hover:text-secondary dark:text-white">
                                Vaishali Parmar{' '}
                            </h4>
                        </div>
                        <div className="group cursor-pointer text-center">
                            <div className="relative h-[280px] rounded-3xl transition-all duration-500 group-hover:shadow-[0_0_25px_#979797]">
                                <img
                                    src="/Images/Employees/Bhumika Malviya.jpg"
                                    alt="team-member-2"
                                    className="h-full w-full rounded-3xl object-cover object-top"
                                />
                            </div>
                            <h4 className="pb-2 pt-5 text-xl font-extrabold text-black transition duration-500 group-hover:text-secondary dark:text-white">
                                Bhumika Malviya{' '}
                            </h4>
                        </div>
                        <div className="group cursor-pointer text-center">
                            <div className="relative h-[280px] rounded-3xl transition-all duration-500 group-hover:shadow-[0_0_25px_#979797]">
                                <img
                                    src="/Images/Employees/Sankalp Nagale.jpg"
                                    alt="team-member-3"
                                    className="h-full w-full rounded-3xl object-cover object-top"
                                />
                            </div>
                            <h4 className="pb-2 pt-5 text-xl font-extrabold text-black transition duration-500 group-hover:text-secondary dark:text-white">
                                Sankalp Nagle{' '}
                            </h4>
                        </div>
                        <div className="group cursor-pointer text-center">
                            <div className="relative h-[280px] rounded-3xl transition-all duration-500 group-hover:shadow-[0_0_25px_#979797]">
                                <img
                                    src="/Images/Employees/Shubham Pandey.jpg"
                                    alt="team-member-4"
                                    className="h-full w-full rounded-3xl object-cover object-top"
                                />
                            </div>
                            <h4 className="pb-2 pt-5 text-xl font-extrabold text-black transition duration-500 group-hover:text-secondary dark:text-white">
                                Shubham Pandey{' '}
                            </h4>
                        </div>
                        <div className="group cursor-pointer text-center">
                            <div className="relative h-[280px] rounded-3xl transition-all duration-500 group-hover:shadow-[0_0_25px_#979797]">
                                <img
                                    src="/Images/Employees/Ritu Ranabhat.jpg"
                                    alt="team-member-1"
                                    className="h-full w-full rounded-3xl object-cover object-top"
                                />
                            </div>
                            <h4 className="pb-2 pt-5 text-xl font-extrabold text-black transition duration-500 group-hover:text-secondary dark:text-white">
                                Ritu Ranabhat{' '}
                            </h4>
                        </div>
                        <div className="group cursor-pointer text-center">
                            <div className="relative h-[280px] rounded-3xl transition-all duration-500 group-hover:shadow-[0_0_25px_#979797]">
                                <img
                                    src="/Images/Employees/Jahnvi Dubey.jpg"
                                    alt="team-member-2"
                                    className="h-full w-full rounded-3xl object-cover object-top"
                                />
                            </div>
                            <h4 className="pb-2 pt-5 text-xl font-extrabold text-black transition duration-500 group-hover:text-secondary dark:text-white">
                                Jahnvi Dubey{' '}
                            </h4>
                        </div>
                        <div className="group cursor-pointer text-center">
                            <div className="relative h-[280px] rounded-3xl transition-all duration-500 group-hover:shadow-[0_0_25px_#979797]">
                                <img
                                    src="/Images/Employees/Sumit Andariya.jpg"
                                    alt="team-member-3"
                                    className="h-full w-full rounded-3xl object-cover object-top"
                                />
                            </div>
                            <h4 className="pb-2 pt-5 text-xl font-extrabold text-black transition duration-500 group-hover:text-secondary dark:text-white">
                                Sumit Andariya{' '}
                            </h4>
                        </div>
                        <div className="group cursor-pointer text-center">
                            <div className="relative h-[280px] rounded-3xl transition-all duration-500 group-hover:shadow-[0_0_25px_#979797]">
                                <img src="/Images/Employees/Amit Yadav.jpg" alt="team-member-4" className="h-full w-full rounded-3xl object-cover object-top" />
                            </div>
                            <h4 className="pb-2 pt-5 text-xl font-extrabold text-black transition duration-500 group-hover:text-secondary dark:text-white">
                                Amit Yadav{' '}
                            </h4>
                        </div>
                        <div className="group cursor-pointer text-center">
                            <div className="relative h-[280px] rounded-3xl transition-all duration-500 group-hover:shadow-[0_0_25px_#979797]">
                                <img src="/Images/Employees/Anushree.png" alt="team-member-4" className="h-full w-full rounded-3xl object-cover object-top" />
                            </div>
                            <h4 className="pb-2 pt-5 text-xl font-extrabold text-black transition duration-500 group-hover:text-secondary dark:text-white">
                                Anushree Joshi{' '}
                            </h4>
                        </div>
                        <div className="group cursor-pointer text-center">
                            <div className="relative h-[280px] rounded-3xl transition-all duration-500 group-hover:shadow-[0_0_25px_#979797]">
                                <img src="/Images/Employees/Anushr.png" alt="team-member-4" className="h-full w-full rounded-3xl object-cover object-top" />
                            </div>
                            <h4 className="pb-2 pt-5 text-xl font-extrabold text-black transition duration-500 group-hover:text-secondary dark:text-white">
                                {' '}
                                Shalu Patidar{' '}
                            </h4>
                        </div>
                    </div>
                </div>
            </section>

            <Contactus />
        </div>
    );
};

export default Career;

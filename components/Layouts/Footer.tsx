import Link from 'next/link';

const Footer = () => {
    return (
        <footer className="mt-auto bg-white dark:bg-transparent dark:bg-gradient-to-b dark:from-white/[0.03] dark:to-transparent">
            <div className="container">
                <div className="grid gap-y-10 gap-x-4 py-14 sm:grid-cols-3 lg:grid-cols-5 lg:py-[100px]">
                    <div className="relative">
                        <img src="\assets\images\gigatorb1new1.png" alt="plurk" className="h-7 w-auto" />
                        <ul className="mt-12 flex items-center gap-8">
                        <li>
                                <Link href="https://www.gigatorb.com/">
                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="32" fill="currentColor" className="bi bi-google" viewBox="0 0 23 22">
  <path d="M15.545 6.558a9.42 9.42 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.689 7.689 0 0 1 5.352 2.082l-2.284 2.284A4.347 4.347 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.792 4.792 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.702 3.702 0 0 0 1.599-2.431H8v-3.08h7.545z"/>

</svg>

                                </Link>
                            </li>
                            <li>
                                <Link href="https://www.linkedin.com/company/gigatorb/mycompany/">
                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="32" fill="currentColor" className="bi bi-linkedin" viewBox="0 0 23 22">
  <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/>
</svg>

                                </Link>
                            </li>
                         
                            <li>
                                <Link href="https://www.instagram.com/gigatorbsoftware/?igshid=YmMyMTA2M2Y%3D">
                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="32" fill="currentColor" className="bi bi-instagram" viewBox="0 0 23 22">
  <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"/>
 
                                       
                                    </svg>
                                </Link>
                            </li>
                        </ul>
                        <img src="/assets/images/footer-shape.png" alt="footer-shape" className="absolute bottom-0 right-0 sm:left-0" />
                        <img
                            src="/assets/images/footer-shape-dark.png"
                            alt="footer-shape-dark"
                            className="absolute bottom-0 right-0 hidden dark:block sm:left-0"
                        />
                    </div>
                    <div>
                        <ul className="flex flex-col gap-3 font-bold">
                            <li className="mb-3 text-lg font-extrabold text-black dark:text-white">Quick Menu</li>
                            <li>
                                <Link href="/company" className="inline-block transition hover:scale-110 hover:text-secondary">
                                    Company
                                </Link>
                            </li>
                          
                            <li>
                                <Link href="/services" className="inline-block transition hover:scale-110 hover:text-secondary">
                                    Service
                                </Link>
                            </li>
                            <li>
                                <Link href="/gallery" className="inline-block transition hover:scale-110 hover:text-secondary">
                                    Gallery
                                </Link>
                            </li>
                            <li>
                                <Link href="/about-us" className="inline-block transition hover:scale-110 hover:text-secondary">
                                    Contact Us
                                </Link>
                            </li>
                            <li>
                                <Link href="/career" className="inline-block transition hover:scale-110 hover:text-secondary">
                                    Career
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <ul className="flex flex-col gap-3 font-bold">
                            <li className="mb-3 text-lg font-extrabold text-black dark:text-white">Services</li>
                            <li>
                                <Link href="/ui-ux" className="inline-block transition hover:scale-110 hover:text-secondary">
                                    UI/UX Design
                                </Link>
                            </li>
                            <li>
                                <Link href="/webDevelopment" className="inline-block transition hover:scale-110 hover:text-secondary">
                                    Web Development
                                </Link>
                            </li>
                            <li>
                                <Link href="/mobileDevelopment" className="inline-block transition hover:scale-110 hover:text-secondary">
                                App Development
                                </Link>
                            </li>
                            <li>
                                <Link href="/curam" className="inline-block transition hover:scale-110 hover:text-secondary">
                                Cúram
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <ul className="flex flex-col gap-3 font-bold">
                           <img src='\assets\images\Gallary\india-parliament.jpg' className="h-50 w-50" />
                            <li>Kanadia road, Indore, India</li>
                        </ul>
                    </div>
                    <div>
                        <ul className="flex flex-col gap-3 font-bold">
                        <img src='\assets\images\Gallary\canadian parliament.jpeg' className="h-40 w-50" />
                        <li>Mississauga, Ont. , Canada</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="bg-gradient-to-r from-[#FCF1F4] to-[#EDFBF9] py-5 dark:border-t-2 dark:border-white/5 dark:bg-none">
                <div className="container">
                    <div className="items-center justify-between text-center font-bold dark:text-white md:flex">
                        <div>
                            Copyright© {new Date().getFullYear() + ' '}
                            <Link href="/" className="text-primary transition hover:text-secondary">
                                GigaTorb Software Pvt. Ltd.
                            </Link>
                        </div>
                        <div>
                            Need help? Visit the{' '}
                            <Link href="/contact-us" className="text-secondary transition hover:text-primary">
                                Contact Us
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

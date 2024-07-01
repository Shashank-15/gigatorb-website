import React, { ReactNode, useRef, useState } from 'react';
 
interface ButtonProps {
    label: string;
    hoverText: string;
    additionalContent: ReactNode;
    modalLabel: string; // New prop for modal label
    modalText: string; // New prop for modal text
}
 
const Button: React.FC<ButtonProps> = ({ label, hoverText, additionalContent, modalLabel, modalText }) => {
    const [isHovered, setHovered] = useState(false);
    const [isModalOpen, setModalOpen] = useState(false);
    const buttonRef = useRef<HTMLButtonElement>(null);
 
    const handleMouseEnter = () => {
        setHovered(true);
    };
 
    const handleMouseLeave = () => {
        setHovered(false);
    };
 
    const handleButtonClick = () => {
        setModalOpen(true);
    };
 
    const handleCloseModal = () => {
        setModalOpen(false);
    };
 
    const buttonCoordinates = buttonRef.current?.getBoundingClientRect();
 
    return (
        <>
            <div className="group relative">
                <button
                    ref={buttonRef}
                    className="bg-gray-300 group relative overflow-hidden rounded-full border border-2 border-[#1759D4] bg-white px-12 py-4 text-xl font-bold text-[#1759D4] hover:bg-[#1759D4] hover:text-white focus:outline-none"
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                >
                    {additionalContent}
                </button>
 
                {isHovered && isModalOpen && (
                    <div
                        className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transform rounded-md border border-[#1759D4] bg-white p-8 shadow-lg"
                        style={{ width: '700px', height: '400px' }}
                    >
                        {/* Add your modal content here */}
                        <p>{modalLabel}</p>
                        <p>{modalText}</p>
                        {/* <button onClick={handleCloseModal}>Close</button> */}
                    </div>
                )}
            </div>
         
        </>
    );
};
 
export default Button;
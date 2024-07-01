import React from 'react';
 
interface ModalProps {
  content: React.ReactNode;
  buttonCoordinates?: DOMRect;
}
 
const Modal: React.FC<ModalProps> = ({ content, buttonCoordinates }) => {
  if (!buttonCoordinates) {
    return null;
  }
 
  const modalStyle: React.CSSProperties = {
    position: 'fixed',
    top: `${buttonCoordinates.bottom + window.pageYOffset}px`,
    left: `${(buttonCoordinates.left + buttonCoordinates.right) / 2}px`,
    transform: 'translate(-50%, 0)',
    backgroundColor: 'white',
    padding: '16px',
    borderRadius: '8px',
    border: '1px solid #ccc',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  };
 
  return <div style={modalStyle}>{content}</div>;
};
 
export default Modal;
 
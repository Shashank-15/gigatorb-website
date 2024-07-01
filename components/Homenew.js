import React from 'react';
import { useState } from 'react';







const Section2 = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <div className=" section2-container h-[90vh] w-full flex justify-center " style={{ backgroundImage: 'url("\section2-bg-img.png")' }}>
      <div className="drop-btn pt-4 w-[80%] h-auto flex m-auto  justify-around " >

        <div className='icon2-dropdown-btn w-3/10 grid justify-items-center'>
          <img src="main.png.png" alt="" className="mr-2 w-[35%]" />
          <div className="relative w-[70%]">
          <button
  className="relative w-full flex items-center px-4 py-2 text-blue-700 hover:text-white  bg-white border-2 text-center font-semibold border-blue-700 rounded-full overflow-hidden focus:outline-none transition duration-300 ease-in-out group hover:bg-blue-700"
  onMouseEnter={() => setDropdownOpen(true)}
  onMouseLeave={() => setDropdownOpen(false)}
>
Core Values
             

            </button>
            {dropdownOpen && (
              <>

                <div className="absolute w-[70%] bg-green-500 p-2 text-white text-lg font-semibold mt-1">
                  <span>Dropdown Content</span>
                </div>
              </>
            )}
          </div>
        </div>

        <div className='icon2-dropdown-btn w-3/10 grid justify-items-center '>
          <img src="main.png.png" alt="" className="mr-2 w-[35%]" />
          <button className="relative w-[70%] flex items-center px-4 py-2 bg-white border-2 border-blue-700 text-blue-700 rounded-full overflow-hidden focus:outline-none transition duration-300 ease-in-out group">
            <span className='text-blue-700 text-lg font-semibold m-auto '>Core Values</span>
            {/* <svg className="ml-2 h-5 w-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="[1](http://www.w3.org/2000/svg)">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7"></path>
      </svg> */}
            <div className="p-2 text-white text-lg font-semibold bg-blue-700 absolute inset-0 bg-gradient-to-t from-sky-blue-200 to-transparent opacity-0 group-hover:opacity-100 animate-waves">
              <span  >Core Values</span>
              {/* <svg className="ml-2 h-5 w-5  text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="[1](http://www.w3.org/2000/svg)">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7"></path>
      </svg> */}
            </div>
          </button>
        </div>

        <div className='icon2-dropdown-btn w-3/10 grid justify-items-center '>
          <img src="main.png.png" alt="" className="mr-2 w-[35%]" />
          <button className="relative w-[70%] flex items-center px-4 py-2 bg-white border-2 border-blue-700 text-blue-700 rounded-full overflow-hidden focus:outline-none transition duration-300 ease-in-out group">
            <span className='text-blue-700 text-lg font-semibold m-auto '>Core Values</span>
            {/* <svg className="ml-2 h-5 w-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="[1](http://www.w3.org/2000/svg)">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7"></path>
      </svg> */}
            <div className="p-2 text-white text-lg font-semibold bg-blue-700 absolute inset-0 bg-gradient-to-t from-sky-blue-200 to-transparent opacity-0 group-hover:opacity-100 animate-waves">
              <span  >Core Values</span>
              {/* <svg className="ml-2 h-5 w-5  text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="[1](http://www.w3.org/2000/svg)">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7"></path>
      </svg> */}
            </div>
          </button>
        </div>
     
      </div>

        {/* {dropdownOpen && ( */}
        <>

<div className="absolute w-[70%] bg-green-500 p-2 text-white text-lg font-semibold mt-52">
  <span>Dropdown Content</span>
</div>
</>
{/* )} */}


    </div>

  );
}

export default Section2; 
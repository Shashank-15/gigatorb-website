import React from "react";


const Hero = () => {
    return (
        <div className="section1-container w-full h-screen relative ">
            <video
                className="w-full h-full  opacity-90 object-cover"
                src={process.env.PUBLIC_URL + '/bg-video.mp4'}
                autoPlay
                loop
                muted
                alt="Shipping Industry"
            />
            <div className=" absolute w-full h-full top-0 left-0 ">
            <div className="m-auto top-0 w-[80%] h-full flex flex-col justify-center text-center mt-20 md:mt-12 text-white p-3">
  <h1 className="text-base xl:text-xl leading-10 tracking-wider font-bold">
    GIGATORB is revolutionizing the maritime industry by harnessing the potential of cutting-edge IT solutions encapsulated in our ethos, 'Tech Tides: Steering the Maritime Industry Forward.' Join us as we ride this wave of innovation, navigating towards a more intelligent and interconnected maritime future together.
  </h1>
</div>

            </div>
        </div>
    );
};

export default Hero;

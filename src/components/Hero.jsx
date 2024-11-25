import React from 'react';

const Hero = () => {
    return (
<div className="px-10">
    <div className="hero bg-base-200 min-h-screen">
    <div className="hero-content flex-col lg:flex-row-reverse">
        <img
        src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
        className="max-w-sm rounded-lg shadow-2xl" />
        <div>
        <h1 className="text-5xl font-bold">Books to freshen up <br /> your bookshelf</h1>

        <button className=" my-16 btn text-white font-bold bg-[#23BE0A]">View The List</button>
        </div>
    </div>
    </div>  
</div>
    );
};

export default Hero;
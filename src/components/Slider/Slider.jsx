import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules"; // Autoplay মডিউল যুক্ত করা

// Swiper এর CSS ফাইল ইমপোর্ট
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
//import { Autoplay, Navigation, Pagination } from "swiper/modules";
//import { Swiper, SwiperClass } from "swiper/react";

const Slider = () => {
  return (
    <div className="w-full mx-auto mt-10 px-10 my-6">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]} // Autoplay সহ মডিউল যুক্ত
        navigation // ন্যাভিগেশন সক্রিয়
        pagination={{ clickable: true }} // পেজিনেশন ক্লিকযোগ্য
        autoplay={{ delay: 3000, disableOnInteraction: false }} // Autoplay সেটআপ
        spaceBetween={30} // স্লাইডগুলোর মধ্যে ফাঁক
        slidesPerView={1} // প্রতি ভিউতে ১টি স্লাইড দেখাবে
        className="rounded-lg shadow-lg"
      >

        <SwiperSlide>
          <div className="flex items-center justify-center h-96  md:w-auto flex-col lg:flex-row-reverse ">
           <img src="https://i.ibb.co.com/8mgGcLb/land-01.jpg" alt="" className="w-screen" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex items-center justify-center h-96  md:w-auto flex-col lg:flex-row-reverse ">
           <img src="https://i.ibb.co.com/NWRJgKv/Emerald-Vineyards-02.jpg" alt="" className="w-screen" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex items-center justify-center h-96  md:w-auto flex-col lg:flex-row-reverse ">
           <img src="https://i.ibb.co.com/cXQnSxw/Rustic-Ranch-Estate-03.jpg" alt="" className="w-screen" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex items-center justify-center h-96  md:w-auto flex-col lg:flex-row-reverse ">
           <img src="https://i.ibb.co.com/yyxNzk0/Maple-Forest-Retreat-04.jpg" alt="" className="w-screen" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex items-center justify-center h-96  md:w-auto flex-col lg:flex-row-reverse ">
           <img src="https://i.ibb.co.com/8M4zbvd/Sunny-Plantation-05.jpg" alt="" className="w-screen" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex items-center justify-center h-96  md:w-auto flex-col lg:flex-row-reverse ">
           <img src="https://i.ibb.co.com/jfZZL4v/Rolling-Hills-Pasture-06.jpg" alt="" className="w-screen" />
          </div>
        </SwiperSlide>

      </Swiper>
    </div>
  );
};

export default Slider;

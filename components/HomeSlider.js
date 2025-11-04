import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';



// import required modules
import { Navigation } from 'swiper/modules';

export default function HomeSlider() {
    return (
        <>
            <Swiper
                slidesPerView={1}
                navigation={true}
                spaceBetween={15}
                breakpoints={{
                    0: { slidesPerView: 1.2 },
                    576: { slidesPerView: 2 },
                    992: { slidesPerView: 3 },
                    1200: { slidesPerView: 4.5 },
                }}
                modules={[Navigation]}

                className="mySwiper mm-swiper">

                <SwiperSlide>
                    <div className='card-02-item'>
                        <a href="/about-us/">
                            <Image src='/img/pic-1.jpg' alt='Selection of Blocks' className='img-fluid' width={646} height={818} />
                            <h3>Selection of Blocks</h3>
                        </a>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='card-02-item'>
                        <a href="/about-us/">
                            <Image src='/img/pic-2.jpg' alt='Cutting & Polishing' className='img-fluid' width={646} height={818} />
                            <h3>Cutting & Polishing</h3>
                        </a>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='card-02-item'>
                        <a href="/about-us/">
                            <Image src='/img/pic-3.jpg' alt='Stone Carving' className='img-fluid' width={646} height={818} />
                            <h3>Stone Carving</h3>
                        </a>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='card-02-item'>
                        <a href="/about-us/">
                            <Image src='/img/pic-4.jpg' alt='Customization of Monuments' className='img-fluid' width={646} height={818} />
                            <h3>Customization of Monuments</h3>
                        </a>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='card-02-item'>
                        <a href="/about-us/">
                            <Image src='/img/pic-5.jpg' alt='Quality Assurance' className='img-fluid' width={646} height={818} />
                            <h3>Quality Assurance</h3>
                        </a>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='card-02-item'>
                        <a href="/about-us/">
                            <Image src='/img/pic-6.jpg' alt='Packaging & Shipping' className='img-fluid' width={646} height={471} />
                            <h3>Packaging & Shipping</h3>
                        </a>
                    </div>
                </SwiperSlide>

            </Swiper>
            <style jsx global>
                {`

                .mm-swiper .swiper-button-next,
  .mm-swiper .swiper-button-prev {
    width: 68px;
    height: 68px;
    background: rgba(0,0,0,0.05);
    border-radius: 50%;
  }
    .mm-swiper .swiper-button-disabled {
    opacity: 0.35 !important;
    cursor: not-allowed !important;
    pointer-events: none !important; /* prevents accidental click */
    background: rgba(0,0,0,0.1);
  }
                `}
            </style>
        </>
    );
}

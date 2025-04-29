import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import Head from 'next/head';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import ImageMagnifier from '@/components/ImageMagnifier';
// import required modules
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';


const SingleProduct = () => {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    return (
        <>
            <Head>
                <title>this is product single page</title>
            </Head>

            <div className='container m-t-40'>
                <div className='row'>
                    <div className='col-lg-12'>
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item"><a href="#">Home</a></li>
                                <li className="breadcrumb-item"><a href="#">Headstone</a></li>
                                <li className="breadcrumb-item active" aria-current="page">Product name</li>
                            </ol>
                        </nav>

                    </div>
                </div>
            </div>

            <div className='product-page-wrap'>
                <div className='contianer'>
                    <div className='container'>

                        <div className='col-lg-5'>
                            <div className='product-grid-left'>
                                <Swiper
                                    style={{
                                        '--swiper-navigation-color': '#fff',
                                        '--swiper-pagination-color': '#fff',
                                    }}
                                    loop={true}
                                    spaceBetween={10}
                                    navigation={true}
                                    thumbs={{ swiper: thumbsSwiper }}
                                    modules={[FreeMode, Navigation, Thumbs]}
                                    className="mySwiper2"
                                >
                                    <SwiperSlide>
                                        <ImageMagnifier
                                            src="https://cdn-iicel.nitrocdn.com/kWkIcgZsMsclxAYXwZxVGNlWeSIUwOaS/assets/images/optimized/rev-d2023a6/www.stonediscover.com/wp-content/uploads/2023/03/Frame-63.png"
                                            alt="Product 1"
                                            zoomWidth={600}
                                            zoomScale={2}
                                        />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <ImageMagnifier src="https://swiperjs.com/demos/images/nature-2.jpg" zoomWidth={600}
                                            zoomScale={2} />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <ImageMagnifier src="https://swiperjs.com/demos/images/nature-3.jpg" zoomWidth={600}
                                            zoomScale={2} />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <ImageMagnifier src="https://swiperjs.com/demos/images/nature-4.jpg" zoomWidth={600}
                                            zoomScale={2} />
                                    </SwiperSlide>
                                    
                                </Swiper>
                                <Swiper
                                    onSwiper={setThumbsSwiper}
                                    loop={true}
                                    spaceBetween={10}
                                    slidesPerView={4}
                                    freeMode={true}
                                    watchSlidesProgress={true}
                                    modules={[FreeMode, Navigation, Thumbs]}
                                    className="mySwiper"
                                >
                                    <SwiperSlide>
                                        <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
                                    </SwiperSlide>
                                    
                                </Swiper>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default SingleProduct;

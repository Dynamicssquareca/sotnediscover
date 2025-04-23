import React, { useState, useRef } from 'react';
import Head from 'next/head';

export default function Home() {




  return (
    <>
      <Head>
        <title>Home Page</title>
      </Head>

      <div className='hero-banner-one' style={{ backgroundImage: 'url("/img/banner/hero-banner-01.jpg")', backgroundSize: 'cover', backgroundPosition: 'center' ,backgroundRepeat: 'no-repeat' }}>
        <div className='container'>
          <div className='row align-items-center justify-content-center'>
            <div className='col-lg-9 text-center'>
              <div className='hero-banner-content'>
                <h1>Welcome to <span>Stone Discover</span> UK</h1>
                <p>We specialize in creating premium quality memorial headstones and gravestones using the finest granite</p>
                <div className='hero-banner-btn'>
                <a className='btn btn-three'>Get Quotes</a>
                <a className='btn btn-transparent'>Request Catalogue</a>
                </div>
                
              </div>
            </div>
          </div>
        </div>

      </div>
      <section className='about-us'>
        <div className='container'>
          <div className='row align-items-center justify-content-center'>
            <div className='col-lg-6'>
              <div className='about-us-content'>
                <h2>About Us</h2>
                <p>We are a family-run business with over 20 years of experience in the stone industry. We pride ourselves on our craftsmanship and attention to detail.</p>
                <a className='btn btn-three'>Learn More</a>
              </div>
            </div>
            <div className='col-lg-6'>
              <img src='/img/about-us.jpg' alt='About Us' />
            </div>
          </div>
        </div>
      </section>
      <section className='about-us'>
        <div className='container'>
          <div className='row align-items-center justify-content-center'>
            <div className='col-lg-6'>
              <div className='about-us-content'>
                <h2>About Us</h2>
                <p>We are a family-run business with over 20 years of experience in the stone industry. We pride ourselves on our craftsmanship and attention to detail.</p>
                <a className='btn btn-three'>Learn More</a>
              </div>
            </div>
            <div className='col-lg-6'>
              <img src='/img/about-us.jpg' alt='About Us' />
            </div>
          </div>
        </div>
      </section>

      <section className='about-us'>
        <div className='container'>
          <div className='row align-items-center justify-content-center'>
            <div className='col-lg-6'>
              <div className='about-us-content'>
                <h2>About Us</h2>
                <p>We are a family-run business with over 20 years of experience in the stone industry. We pride ourselves on our craftsmanship and attention to detail.</p>
                <a className='btn btn-three'>Learn More</a>
              </div>
            </div>
            <div className='col-lg-6'>
              <img src='/img/about-us.jpg' alt='About Us' />
            </div>
          </div>
        </div>
      </section>

      <section className='about-us'>
        <div className='container'>
          <div className='row align-items-center justify-content-center'>
            <div className='col-lg-6'>
              <div className='about-us-content'>
                <h2>About Us</h2>
                <p>We are a family-run business with over 20 years of experience in the stone industry. We pride ourselves on our craftsmanship and attention to detail.</p>
                <a className='btn btn-three'>Learn More</a>
              </div>
            </div>
            <div className='col-lg-6'>
              <img src='/img/about-us.jpg' alt='About Us' />
            </div>
          </div>
        </div>
      </section>



    </>
  );
}

import React, { useState, useRef } from 'react';
import Head from 'next/head';
import ModelBox from '@/components/ModelBox';
import Image from 'next/image';
import HomeSlider from '@/components/HomeSlider';
import VerticalTabs from "@/components/VerticalTabs";
export default function Home() {




  return (
    <>
      <Head>
        <title>Wholesale Granite Headstone Monuments | Stone Discover India</title>
        <meta
          name="description"
          content="Trusted granite headstones & monuments supplier from India. Order in bulk and save 20% on wholesale memorials with worldwide delivery. Contact us Today!"
        />
        <link rel="canonical" href="https://www.stonediscover.com/" />
        <meta property="og:locale" content="US" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content=" Wholesale Granite Headstone Monuments | Stone Discover India " />
        <meta property="og:description" content=" Trusted granite headstones & monuments supplier from India. Order in bulk and save 20% on wholesale memorials with worldwide delivery. Contact us Today!" />
        <meta property="og:url" content="https://www.stonediscover.com/" />
        <meta property="og:site_name" content="Stone Discover" />
        <meta property="og:image" content="https://www.stonediscover.com/img/stone-home-o.jpeg" />
        <meta property="og:image:width" content="200" />
        <meta property="og:image:height" content="200" />
        <meta property="og:image:type" content="image/jpeg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@Stone Discover" />
        <meta name="twitter:title" content=" Wholesale Granite Headstone Monuments | Stone Discover India " />
        <meta name="twitter:description" content=" Trusted granite headstones & monuments supplier from India. Order in bulk and save 20% on wholesale memorials with worldwide delivery. Contact us Today!" />
        <meta name="twitter:image" content="https://www.stonediscover.com/img/stone-home-o.jpeg" />

      </Head>

      {/* <div className="hero-banner-one">
        <Image
          src="/img/banner/main-bg.jpg"
          alt="Hero Banner"
          fill
          style={{ objectFit: 'cover', objectPosition: 'bottom' }}
          priority
          className='desh-top'
        />

        <div className="relative z-10">
          <div className="container">
            <div className="row align-items-center justify-content-center">
              <div className="col-lg-12 text-center">
                <div className="hero-banner-content">
                  <h1>Trusted Wholesale Granite Headstones Supplier</h1>
                  <p>A Leading Granite Monuments Manufacturer and Exporter from India </p>
                  <div className="hero-banner-btn">
                    <ModelBox className="btn-three" headerText="Scale Your Store!" buttonText="Get Quote Now" />
                    <ModelBox className="btn-transparent" headerText="Scale Your Store!" buttonText="Request Catalogue" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
      <section className='hero-banner-custom'>
        <div className="container">
            <div className="row align-items-center justify-content-center">
              <div className="col-lg-12 text-center">
                <div className="hero-banner-content">
                  <h1>Granite Headstone Monuments Manufacturer & Exporter</h1>
                  <p>Trusted wholesale granite headstone monuments manufacturer and exporter supplying global B2B markets from India.</p>
                  <div className="hero-banner-btn">
                    <ModelBox className="btn-three" headerText="Scale Your Store!" buttonText="Get Quote Now" />
                    {/* <ModelBox className="btn-transparent" headerText="Scale Your Store!" buttonText="Request Catalogue" /> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
      </section>

      <div className='container'>
        <div className='row'>
          <div className='col-lg-12'>
            <div className='over-imgaa'>
              <Image
                src="/img/banner/Granite-Headstones-Monuments.png"
                alt="Hero Banner"
                width={1024}
                height={368}
                className='mobile-newaa'
                priority
              />
            </div>

          </div>
        </div>
      </div>



      <section className='about-us-section about-us-section-hh p-b-40 p-t-60'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-6 align-self-center'>
              <div className='about-us-content'>
                <h2>The legacy of <span>Stone Discover</span></h2>
                <p>Stone Discover is a leading Indian exporter and manufacturer of premium granite memorial monuments, serving memorial dealers and retailers worldwide since 1984. We specialize exclusively in granite headstones, including upright monuments, angel memorials, vases, bench memorials, columbariums, and custom-designed memorial products.
</p>
                <p>All our granite monuments are carefully selected, expertly crafted, and manufactured at our own facilities in India, ensuring consistent quality and durability. With a strong focus on bulk supply, timely global delivery, and competitive B2B pricing, we are committed to building long-term partnerships across international memorial markets.
</p>
                <div className='d-flex-grd'>
                  <div className='grif-list'>
                    <span>38+</span>
                    <p>Years of Expertise</p>
                  </div>
                  <div className='grif-list'>
                    <span>70+</span>
                    <p>Countries</p>
                  </div>
                  <div className='grif-list'>
                    <span>38+</span>
                    <p>Memorial Shipped Annually</p>
                  </div>
                </div>
                <a href='/about-us/' className='btn btn-four m-t-30' >Read More<span className="sr-only">about Stone Discover</span></a>
              </div>
            </div>

            <div className='col-lg-6'>
              <div className='about-us-image'>
                <Image src='/img/webpages/about-main.png' alt='About Us' className='img-fluid' width={670} height={589} />
              </div>
            </div>
          </div>
        </div>
      </section>



      <section className='products-section-one m-p-02'>
        <div className='container'>
          <div className='row justify-content-center'>
            <div className='col-lg-10 text-center'>
              <div className='heading-center p-b-40'>
                <h2 className='m-b-20'>The Journey of<span> Granite Memorials,</span> From Selection to Global Supply!
</h2>
                <p>At Stone Discover India, the journey of every granite monument begins with the careful selection of premium granite blocks sourced from trusted quarries across India. These blocks are then transported to our dedicated manufacturing units, where they are processed, shaped, and crafted into durable memorial products designed for long-lasting remembrance.
</p>
              </div>
            </div>
          </div>
          <div className='row'>
            <div className='col-lg-12'>

              <div className='card-02a'>
                <HomeSlider />
              </div>
            </div>
          </div>
        </div>
        <div className='container  p-t-80'>
          <div className='row justify-content-center'>
            <div className='col-lg-9'>
              <div className='heading-center p-b-40'>
                <h2 className='m-b-30'>Pillars of Strength</h2>
                <p>Whether you’re a high-volume buyer or expanding your product line, our team is here to support your growth. We understand the B2B dynamics of the memorial industry and deliver not just products—but trust, consistency, and partnership.</p>
              </div>

            </div>
          </div>

          <div className='row'>
            <div className='col-lg-12'>
              <div className='card-05'>
                <div className='card-05-item'>
                  <Image src='/img/icons/about-pi-01.png' alt='About Us' className='img-fluid' width={48} height={48} />
                  <span>Finest Quality Stones</span>
                  <p>We ensure that each headstone is crafted with great attention to detail</p>
                </div>
                <div className='card-05-item'>
                  <Image src='/img/icons/about-pi-02.png' alt='About Us' className='img-fluid' width={48} height={48} />
                  <span>Competitive Prices</span>
                  <p>Get Quality headstones at the Best Rates!</p>
                </div>
                <div className='card-05-item'>
                  <Image src='/img/icons/about-pi-03.png' alt='About Us' className='img-fluid' width={48} height={48} />
                  <span>On-time Delivery</span>
                  <p>Ensuring Your tombstones Arrive When You Need Them!</p>
                </div>
                <div className='card-05-item'>
                  <Image src='/img/icons/about-pi-04.png' alt='About Us' className='img-fluid' width={48} height={48} />
                  <span>Bulk Order</span>
                  <p>Streamline Your Business with Our Premium tombstones!</p>
                </div>
                <div className='card-05-item'>
                  <Image src='/img/icons/about-pi-05.png' alt='About Us' className='img-fluid' width={48} height={48} />
                  <span>Shipping Worldwide</span>
                  <p>Delivering Quality tombstones Everywhere!</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='content-section-two p-b-80 p-t-100 m-p-03'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-6 align-items-center'>
              <div className='left-card-01-img'>
                <Image src='/img/webpages/pic-06.png' alt='About Us' className='img-fluid' width={553} height={545} />
              </div>
            </div>
            <div className='col-lg-6 align-self-center'>
              <div className='about-us-content'>
                <h2>Why Choose Stone Discover</h2>
                <p>Stone Discover is a trusted manufacturer and global exporter of premium granite monuments since 1984. We specialize exclusively in granite headstones and memorial products, including tombstones, monuments, gravestones, grave markers, and custom headstones designs for international B2B markets.</p>
                <ul className='my-flex-item'>
                  <li>
                    <div><i className="bi bi-check-lg"></i> <span>Fast Production & Turnaround Times</span></div>
                  </li>
                  <li>
                    <div><i className="bi bi-check-lg"></i> <span>Quality Checks Before Shipment</span></div>
                  </li>
                  <li>
                    <div><i className="bi bi-check-lg"></i> <span>Bulk Order Pricing Advantage</span></div>
                  </li>
                  <li>
                    <div><i className="bi bi-check-lg"></i> <span>Dedicated B2B Account Support</span></div>
                  </li>

                </ul>

              </div>
            </div>

          </div>
        </div>

      </section>


      <section>
        <div className='container'>
          <div className='row justify-content-center'>
            <div className='col-lg-9'>
              <div className='heading-center p-b-40'>
                <h2 className='m-b-30'>Timeless <span>Craftsmanship Across</span> Borders</h2>
                <p>We export granite headstone monuments to international markets, meeting region-specific standards and preferences. With active exports across the UK, USA, Europe, Australia, and New Zealand, we deliver consistent quality worldwide.
</p>
              </div>
            </div>
          </div>
          <div className='row'>
            <div className='col-lg-12'>
              <VerticalTabs />
            </div>
          </div>
        </div>
      </section>



      <section className='new-bg'>
        <div className='container'>
          <div className='row justify-content-center'>
            <div className='col-lg-9'>
              <div className='heading-center p-b-40'>
                <h2 className='m-b-30'>Partner with a Trusted <span>Granite Monuments Exporter</span></h2>
                <p>Whether you are sourcing in bulk or expanding your memorial range, Stone Discover supports your business with reliable granite headstones supply, consistent quality, and export expertise. We work closely with memorial dealers and agents worldwide to ensure long-term supply partnerships built on trust and performance.</p>
              </div>
              <div className='button-center-new text-center'>
                <a href='/get-quote-now/' className='btn btn-three'>Request a Quote</a>
                <a href='/catalog-download/' className='btn btn-four'>Request Catalogue</a>

              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='p-t-80'>
        <div className='container'>
          <div className='row justify-content-center'>
            <div className='col-lg-9'>
              <div className='heading-center p-b-40'>
                <h2 className='m-b-30'>Delivering <span>Excellence Across</span> Borders</h2>
              </div>
            </div>
          </div>
          <div className='row'>
            <div className='col-lg-12'>
              <div className="map-container grow">
                <span><img decoding="async" src="img/webpages/world-01.png" alt="world-map" /></span><div className="point canada tippy" title="Canada" hover-tooltip="Canada" tooltip-position="top"></div><div className="point usa tippy" title="USA" hover-tooltip="USA" tooltip-position="top"></div><div className="point uk tippy" title="UK" hover-tooltip="UK" tooltip-position="top"></div><div className="point netherlands tippy" title="Netherlands" hover-tooltip="Netherlands" tooltip-position="top"></div><div className="point india tippy" title="India" hover-tooltip="India" tooltip-position="top"></div><div className="point australia tippy" title="Australia" hover-tooltip="Australia" tooltip-position="top"></div></div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className='container'>
          <div className='row justify-content-center'>
            <div className='col-lg-9'>
              <div className='heading-center p-b-40'>
                <h2 className='m-b-30'>Recent <span>Export</span></h2>
              </div>
            </div>
          </div>
          <div className='row'>
            <div className='col-lg-12'>
              <div className="grid">
                <figure className="card-001">
                  <img loading="lazy" src="/img/webpages/p-1.jpg" alt="Polished headstones batch" />
                </figure>
                <figure className="card-001">
                  <img loading="lazy" src="/img/webpages/p-2.jpg" alt="Cross monument on base" />
                </figure>
                <figure className="card-001">
                  <img loading="lazy" src="/img/webpages/p-3.jpg" alt="Black granite memorials" />
                </figure>
                <figure className="card-001">
                  <img loading="lazy" src="/img/webpages/p-4.jpg" alt="Granite tomb covers" />
                </figure>
                <figure className="card-001">
                  <img loading="lazy" src="/img/webpages/p-5.jpg" alt="Shield shaped memorial wrapped" />
                </figure>
                <figure className="card-001">
                  <img loading="lazy" src="/img/webpages/p-6.jpg" alt="Pallets wrapped for shipping" />
                </figure>
                <figure className="card-001">
                  <img loading="lazy" src="/img/webpages/p-7.png" alt="Crated slabs ready to export" />
                </figure>
                <figure className="card-001">
                  <img loading="lazy" src="/img/webpages/p-8.png" alt="Cartons prepared for dispatch" />
                </figure>
              </div>
            </div>
          </div>
        </div>
      </section>

    </>
  );
}

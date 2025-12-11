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

      <div className="hero-banner-one">
        <Image
          src="/img/banner/main-bg.jpg"
          alt="Hero Banner"
          fill
          style={{ objectFit: 'cover', objectPosition: 'bottom' }}
          priority
          className='desh-top'
        />

        {/* Content over the image */}
        <div className="relative z-10">
          <div className="container">
            <div className="row align-items-center justify-content-center">
              <div className="col-lg-12 text-center">
                <div className="hero-banner-content">
                  <h1>Trusted Wholesale Granite Headstones Supplier</h1>
                  <p>A Leading Granite Monuments Manufacturer and Exporter from India </p>
                  <div className="hero-banner-btn">
                    <ModelBox className="btn-three" headerText="Scale Your Store!" buttonText="Get Quote Now" />
                    {/* <ModelBox className="btn-transparent" headerText="Scale Your Store!" buttonText="Request Catalogue" /> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='container'>
        <div className='row'>
          <div className='col-lg-12'>
            <div className='over-img'>
              <Image
                src="/img/banner/Granite-Headstones-Monuments.png"
                alt="Hero Banner"
                width={1024}
                height={368}
                className='mobile-new'
                priority
              />
            </div>

          </div>
        </div>
      </div>



      <section className='about-us-section about-us-section-h p-b-40 p-t-60'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-6 align-self-center'>
              <div className='about-us-content'>
                <h2>The legacy of <span>Stone Discover</span></h2>
                <p>Stone Discover is the largest manufacturer and supplier of premium quality memorial granite headstones since 1984. We offer a complete range of natural stones in various forms, including headstone monuments, gravestones, memorials, and grave markers.</p>
                <p>Our granite monuments are carefully selected, handcrafted, and sourced from quarries and factories owned by the MPG Group India, ensuring the highest quality standards. We pride ourselves on providing exceptional customer service, timely delivery, and competitive prices.</p>
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
          <div className='row'>
            <div className='col-lg-12 text-center'>
              <div className='heading-center p-b-40'>
                <h2 className='m-b-20'>Journey of<span> Natural Stone</span>, from Mines to your Doorstep!</h2>
                <p>At Stone Discover India, the journey of natural stones begins deep within the earth, where skilled miners extract high-quality stones from mines located in various parts of India. These raw stones are then transported to quarries, where they are carefully extracted in large blocks, ensuring their integrity and quality.</p>
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
                  <Image src='/img/icons/icons-1.png' alt='About Us' className='img-fluid' width={58} height={76} />
                  <span>Finest Quality Stones</span>
                  <p>We ensure that each headstone is crafted with great attention to detail</p>
                </div>
                <div className='card-05-item'>
                  <Image src='/img/icons/icons-2.png' alt='About Us' className='img-fluid' width={58} height={76} />
                  <span>Competitive Prices</span>
                  <p>Get Quality Headstones at the Best Rates!</p>
                </div>
                <div className='card-05-item'>
                  <Image src='/img/icons/icons-3.png' alt='About Us' className='img-fluid' width={58} height={76} />
                  <span>On-time Delivery</span>
                  <p>Ensuring Your Headstones Arrive When You Need Them!</p>
                </div>
                <div className='card-05-item'>
                  <Image src='/img/icons/icons-4.png' alt='About Us' className='img-fluid' width={58} height={76} />
                  <span>Bulk Order</span>
                  <p>Streamline Your Business with Our Premium Headstones!</p>
                </div>
                <div className='card-05-item'>
                  <Image src='/img/icons/icons-5.png' alt='About Us' className='img-fluid' width={58} height={76} />
                  <span>Shipping Worldwide</span>
                  <p>Delivering Quality Headstones Everywhere!</p>
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
                <h2>Why Us</h2>
                <p>Stone Discover is the largest manufacturer and supplier of premium quality natural stones since 1984. We offer a complete range of natural stones in various forms, including tombstones, monuments, gravestones, memorials, grave markers and headstones.</p>
                <ul className='my-flex-item'>
                  <li>
                    <div><i className="bi bi-check-lg"></i> <span>Quick Turnaround Time</span></div>
                  </li>
                  <li>
                    <div><i className="bi bi-check-lg"></i> <span>Order inspection before dispatch</span></div>
                  </li>
                  <li>
                    <div><i className="bi bi-check-lg"></i> <span>Bulk Order Advantage</span></div>
                  </li>
                  <li>
                    <div><i className="bi bi-check-lg"></i> <span>Dedicated Support</span></div>
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
                <p>Whether you’re a high-volume buyer or expanding your product line, our team is here to support your growth. We understand the B2B dynamics of the memorial industry and deliver not just products—but trust, consistency, and partnership.</p>
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
                <h2 className='m-b-30'>Join Hands with a Reliable <span>Tombstone Supplier</span></h2>
                <p>Whether you’re a high-volume buyer or expanding your product line, our team is here to support your growth. We understand the B2B dynamics of the memorial industry and deliver not just products—but trust, consistency, and partnership.</p>
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

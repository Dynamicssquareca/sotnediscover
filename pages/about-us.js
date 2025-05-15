import React, { useState, useRef } from 'react';
import Head from 'next/head';
import ModelBox from '@/components/ModelBox';
import Image from 'next/image';
export default function About() {




    return (
        <>
            <Head>
                <title>About US</title>
            </Head>

            <div className='common-header-banner'>
                <div className='container'>
                    <div className='row justify-content-center'>
                        <div className='col-lg-8'>
                            <div className='commn-head'>
                                <h1>About US</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>



            <section className='about-us-section p-b-60 p-t-80'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-lg-6'>
                            <div className='about-us-content'>
                                <h2>About Us</h2>
                                <p>Stone Discover UK is a trusted name in the memorial industry, dedicated to supplying memorial stones all over the United Kingdom. Whether you are looking for an Ogee, Kerb set, Heart-shaped, or Angel memorial, we have a wide range of memorials to suit all kinds of needs.</p>

                                <p>Our skilled professionals ensure that each piece is thoughtfully designed and crafted with care and precision, reflecting the memory of the deceased. We also do custom designs by adding memorial flower vases and graveside ornaments to add a personal touch to the memorial.</p>
                                <p>With warehouses in Liverpool and Southampton, we ensure safe packaging and prompt delivery. Please feel free to visit our showrooms for any queries or further guidance.</p>
                                <a href='/' className='btn btn-four m-t-30'>Read More</a>
                            </div>
                        </div>

                        <div className='col-lg-6'>
                            <div className='about-us-image'>
                                <Image src='/img/webpages/about-us-pic.png' alt='About Us' className='img-fluid' width={553} height={545} />
                            </div>
                        </div>
                    </div>
                </div>
            </section>





            <section className='content-section-two p-b-80 p-t-60'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-lg-6 align-items-center'>
                            <div className='left-card-01-img'>
                                <Image src='/img/webpages/pic-06.png' alt='About Us' className='img-fluid' width={553} height={545} />
                            </div>
                        </div>
                        <div className='col-lg-6 d-flex align-self-center'>
                            <div className='card-03'>
                                <ul>
                                    <li className='m-b-20'>
                                        <h3 className='m-b-20'>Our Mission</h3>
                                        <p>To craft and deliver premium-quality tombstones with unmatched precision and reliability, empowering wholesalers worldwide to meet their clients' needs with confidence and trust.</p>
                                    </li>
                                    <li className='m-b-20'>
                                        <h3 className='m-b-20'>Our Vision</h3>
                                        <p>To become the global leader in tombstone manufacturing and exporting, recognized for innovation, exceptional craftsmanship, and unwavering commitment to excellence in partnerships.</p>
                                    </li>

                                </ul>
                            </div>
                        </div>

                    </div>
                </div>

            </section>

            <section className='p-b-100'>
                <div className='container'>
                    <div className='row justify-content-center'>
                        <div className='col-lg-9'>
                            <div className='heading-center p-b-40'>
                                <h2 className='m-b-30'>Memorial Collection <span>Crafted</span> for All</h2>
                                <p>We offer a wide range of expertly crafted memorial designs to suit every need and occasion. From classic headstones and kerbsets to elegant bench and heart memorials, our collection also includes vases, urns, angel tributes, and dedicated children’s memorials. Each piece is made with care, precision, and a deep respect for the memories it honors. Contact us directly for competitive quotes and tailored solutions.</p>
                            </div>
                        </div>
                    </div>
                    <div className='row g-2 sliding-row'>
                        <div className='col-lg-2 col-md-4 sliding-col'>
                            <div className='card-04'>
                                <div className='card-04-item text-center'>
                                    <a href="/memorials/">
                                        <Image src='/img/webpages/pic-07.jpg' alt='About Us' className='img-fluid' width={210} height={210} />
                                        <h4>Bench</h4>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-2 col-md-4 sliding-col'>
                            <div className='card-04'>
                                <div className='card-04-item text-center'>
                                    <a href="/memorials/">
                                        <Image src='/img/webpages/pic-08.jpg' alt='About Us' className='img-fluid' width={210} height={210} />
                                        <h4>Kerbsets</h4>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-2 col-md-4 sliding-col'>
                            <div className='card-04'>
                                <div className='card-04-item text-center'>
                                    <a href="/memorials/">
                                        <Image src='/img/webpages/pic-09.jpg' alt='About Us' className='img-fluid' width={210} height={210} />
                                        <h4>Flower Vases</h4>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-2 col-md-4 sliding-col'>
                            <div className='card-04'>
                                <div className='card-04-item text-center'>
                                    <a href="/memorials/">
                                        <Image src='/img/webpages/pic-10.jpg' alt='About Us' className='img-fluid' width={210} height={210} />
                                        <h4>Urns</h4>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-2 col-md-4 sliding-col'>
                            <div className='card-04'>
                                <div className='card-04-item text-center'>
                                    <a href="/memorials/">
                                        <Image src='/img/webpages/pic-11.jpg' alt='About Us' className='img-fluid' width={210} height={210} />
                                        <h4>Angle Heqadstones</h4>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-2  col-md-4 sliding-col'>
                            <div className='card-04'>
                                <div className='card-04-item text-center'>
                                    <a href="/memorials/">
                                        <Image src='/img/webpages/pic-12.jpg' alt='About Us' className='img-fluid' width={210} height={210} />
                                        <h4>Children Memorial</h4>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* <section className='p-t-80'>
        <div className='container'>
          <div className='row justify-content-center'>
            <div className='col-lg-9'>
              <div className='heading-center p-b-40'>
                <h2 className='m-b-30'>Join Hands with a Reliable <span>Tombstone Supplier</span></h2>
                <p>Whether you’re a high-volume buyer or expanding your product line, our team is here to support your growth. We understand the B2B dynamics of the memorial industry and deliver not just products—but trust, consistency, and partnership.</p>
              </div>
              <div className='button-center-new text-center'>
                <a href='/' className='btn btn-three'>Request a Quote</a>
                <a href='/' className='btn btn-four'>Request Catalogue</a>

              </div>
            </div>
          </div>
        </div>
      </section> */}
            <section className='p-b-30'>
                <div className='container'>
                    <div className='row justify-content-center'>
                        <div className='col-lg-9'>
                            <div className='heading-center p-b-40'>
                                <h2 className='m-b-30'>Why Choose Us?</h2>
                                <p>Whether you’re a high-volume buyer or expanding your product line, our team is here to support your growth. We understand the B2B dynamics of the memorial industry and deliver not just products—but trust, consistency, and partnership.</p>
                            </div>

                        </div>
                    </div>

                    <div className='row'>
                        <div className='col-lg-12'>
                            <div className='card-05'>
                                <div className='card-05-item'>
                                    <Image src='/img/icons/icons-1.png' alt='About Us' className='img-fluid' width={58} height={76} />
                                    <span>Quality Craftmanship</span>
                                </div>
                                <div className='card-05-item'>
                                    <Image src='/img/icons/icons-2.png' alt='About Us' className='img-fluid' width={58} height={76} />
                                    <span>Nationwide Delivery</span>
                                </div>
                                <div className='card-05-item'>
                                    <Image src='/img/icons/icons-3.png' alt='About Us' className='img-fluid' width={58} height={76} />
                                    <span>24*7 Customer Service</span>
                                </div>
                                <div className='card-05-item'>
                                    <Image src='/img/icons/icons-4.png' alt='About Us' className='img-fluid' width={58} height={76} />
                                    <span>Custom Designs</span>
                                </div>
                                <div className='card-05-item'>
                                    <Image src='/img/icons/icons-5.png' alt='About Us' className='img-fluid' width={58} height={76} />
                                    <span>Experienced Masons</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* <section className='faq'>
        <div className='container'>
          <div className='row justify-content-center'>
            <div className='col-lg-9'>
              <div className='heading-center p-b-40'>
                <h2 className='m-b-30'>Frequently Asked <span>Questions</span></h2>
              </div>

            </div>
          </div>
        </div>
      </section> */}



        </>
    );
}

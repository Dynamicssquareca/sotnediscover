import React, { useState, useRef } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import { Accordion, AccordionBody, AccordionHeader, AccordionItem, } from 'reactstrap';
export default function About() {
    const [open, setOpen] = useState('1');
    const toggle = (id) => {
        if (open === id) {
            setOpen();
        } else {
            setOpen(id);
        }
    };



    return (
        <>
            <Head>
                <title>About Stone Discover UK : Memorial Headstones Supplier in UK</title>
                <meta
                    name="description"
                    content="Stone Discover UK is a reliable supplier of wholesale memorial headstones, serving funeral homes and retailers across the UK with quality granite products."
                />
                <link rel="canonical" href="https://www.stonediscover.com/about-us/" />
                <meta property="og:locale" content="US" />
                <meta property="og:type" content="website" />
                <meta property="og:title" content="About Stone Discover UK : Memorial Headstones Supplier in UK" />
                <meta property="og:description" content="Stone Discover UK is a reliable supplier of wholesale memorial headstones, serving funeral homes and retailers across the UK with quality granite products." />
                <meta property="og:url" content="https://www.stonediscover.com/about-us/" />
                <meta property="og:site_name" content="Stone Discover UK" />
                <meta property="og:image" content="https://www.stonediscover.com/img/stone-home-o.jpeg" />
                <meta property="og:image:width" content="200" />
                <meta property="og:image:height" content="200" />
                <meta property="og:image:type" content="image/jpeg" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:site" content="@Stone Discover UK" />
                <meta name="twitter:title" content="About Stone Discover UK : Memorial Headstones Supplier in UK" />
                <meta name="twitter:description" content="Stone Discover UK is a reliable supplier of wholesale memorial headstones, serving funeral homes and retailers across the UK with quality granite products." />
                <meta name="twitter:image" content="https://www.stonediscover.com/img/stone-home-o.jpeg" />
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



            <section className='about-us-section p-b-60 p-t-80 p-b-40 '>
                <div className='container'>
                    <div className='row'>
                        <div className='col-lg-6'>
                            <div className='about-us-image'>
                                <Image src='/img/webpages/about-us-pic.png' alt='About Us' className='img-fluid' width={553} height={545} />
                            </div>
                        </div>
                        <div className='col-lg-6 align-self-center'>
                            <div className='about-us-content'>
                                <h2>A Leading Granite Headstone Manufacturer and Supplier</h2>
                                <p>Stone Discover, an ISO 9001-certified company, caters to B2B buyers and their requirements for Granite tombstones, headstones, gravestones, cemetery monuments, memorial plates, grave plaques and more.</p>
                                <p>As a trusted Granite tombstone and monument wholesaler, we are determined to supply our clients with the highest-quality granite headstone and monument products cut, engraved, and polished with utmost craftsmanship.</p>
                                <p>We are wholesale granite monument suppliers that give top priority to their clients and believe in transparency. Therefore, our B2B clients can be 100% sure that our granite tombstone and monument products are delivered to you from top-notch quality natural stone quarries and factories in India</p>
                            </div>
                        </div>

                    </div>
                </div>
            </section>





            <section className='content-section-two p-b-80 p-t-60 m-p-08 m-p-06 partner-section'>
                <div className='container'>
                    <div className='row justify-content-center'>
                        <div className='col-lg-9'>
                            <div className='heading-center p-b-40'>
                                <h2 className='m-b-30'><span>Journey of Natural Stone</span> from Mines to your Doorstep!</h2>
                                <p>At Stone Discover India, the journey of natural stones begins deep within the earth, where skilled miners extract high-quality stones from mines located in various parts of India. These raw stones are then transported to quarries, where they are carefully extracted in large blocks, ensuring their integrity and quality.</p>
                            </div>

                        </div>
                    </div>
                    <div className='row g-5 p-b-40'>
                        <div className='col-lg-6 d-flex align-self-center order-2'>
                            <div className='about-us-content-s'>
                                <h4>Selection of Blocks</h4>
                                <p>Once the stones arrive at the quarry, blocks are selected based on their color, texture, and pattern. These blocks are then moved to state-of-the-art facilities, where the process of cutting and polishing begins.</p>
                            </div>
                        </div>
                        <div className='col-lg-6 align-items-center order-1'>
                            <div className='left-card-01-img'>
                                <Image src='/img/webpages/stone-blok-01.jpg' alt='stone-blok-01' className='img-fluid' width={555} height={246} />
                            </div>
                        </div>
                    </div>
                    <div className='row g-5 p-b-40'>
                        <div className='col-lg-6 d-flex align-self-center'>
                            <div className='about-us-content-s about-us-content-s-l'>
                                <h4>Cutting & Polishing</h4>
                                <p>Advanced machinery shapes the stone into the desired slabs, and skilled craftsmen hand-polish the surfaces to bring out the natural luster and beauty of the stone.</p>
                            </div>
                        </div>
                        <div className='col-lg-6 align-items-cente'>
                            <div className='left-card-01-img'>
                                <Image src='/img/webpages/stone-blok-02.jpg' alt='stone-blok-02' className='img-fluid' width={555} height={246} />
                            </div>
                        </div>
                    </div>
                    <div className='row g-5 p-b-40'>
                        <div className='col-lg-6 d-flex align-self-center order-2'>
                            <div className='about-us-content-s'>
                                <h4>Stone Carving & Finishing</h4>
                                <p>Next, artisans engage in stone carving and detailed finishing to add intricate designs and customized touches. Whether it’s a sculptural masterpiece or a functional surface, each stone is meticulously worked on to match the client’s specifications.</p>
                            </div>
                        </div>
                        <div className='col-lg-6 align-items-center order-1'>
                            <div className='left-card-01-img'>
                                <Image src='/img/webpages/stone-blok-03.jpg' alt='stone-blok-03' className='img-fluid' width={555} height={246} />
                            </div>
                        </div>
                    </div>
                    <div className='row g-5 p-b-40'>
                        <div className='col-lg-6 d-flex align-self-center'>
                            <div className='about-us-content-s about-us-content-s-l'>
                                <h4>Customization of Monuments</h4>
                                <p>At Stone Discover India, customization is key, offering tailored sizes, finishes, and designs to meet unique needs. Once the stones are perfectly finished, they undergo a rigorous quality check before being carefully packaged to ensure they arrive undamaged.</p>
                            </div>
                        </div>
                        <div className='col-lg-6 align-items-center order-1'>
                            <div className='left-card-01-img'>
                                <Image src='/img/webpages/stone-blok-04.jpg' alt='stone-blok-04' className='img-fluid' width={555} height={246} />
                            </div>
                        </div>
                    </div>
                    <div className='row g-5 p-b-40'>
                        <div className='col-lg-6 d-flex align-self-center order-2'>
                            <div className='about-us-content-s'>
                                <h4>Quality Assurance</h4>
                                <p>At Stone Discover India, quality assurance is at the heart of our process of meeting the highest standards before reaching our customers. After the stones are cut, polished, and carved, they undergo a thorough inspection by our experienced quality inspectors. Each stone is carefully examined for consistency in color, texture, and finish.</p>
                            </div>
                        </div>
                        <div className='col-lg-6 align-items-center order-1'>
                            <div className='left-card-01-img'>
                                <Image src='/img/webpages/stone-blok-05.jpg' alt='stone-blok-05' className='img-fluid' width={555} height={246} />
                            </div>
                        </div>
                    </div>
                    <div className='row g-5 p-b-40'>
                        <div className='col-lg-6 d-flex align-self-center order-1'>
                            <div className='about-us-content-s about-us-content-s-l'>
                                <h4>Packaging & Shipping</h4>
                                <p>Once approved, the stones are carefully packed with bubble wrap, and cardboard, inside the crates to avoid any damage during transit. This attention to detail during the quality assurance and packaging stages guarantees that our customers receive only the finest natural stones, ready to be delivered to their doors with confidence.</p>
                            </div>
                        </div>
                        <div className='col-lg-6 align-items-center order-2'>
                            <div className='left-card-01-img'>
                                <Image src='/img/webpages/stone-blok-06.jpg' alt='stone-blok-06' className='img-fluid' width={555} height={246} />
                            </div>
                        </div>
                    </div>
                </div>

            </section>
            <section className='content-section-two p-b-80 p-t-60 m-p-07'>
                <div className='container'>
                    <div className='row'>

                        <div className='col-lg-6 d-flex'>
                            <div className='about-us-content'>
                                <h2>Our Vision</h2>
                                <p>To be the most trusted name in granite memorials globally, popular for unmatched quality, craftsmanship, and reliability. We hold expertise in honouring memories with stone that lasts forever.</p>
                            </div>
                        </div>
                        <div className='col-lg-6 d-flex'>
                            <div className='about-us-content'>
                                <h2>Our Mission</h2>
                                <p>Our mission is to provide superior quality granite monuments to our partners and wholesalers across the UK at the most competitive prices, while maintaining excellence in sourcing, shipping, and delivery.</p>
                            </div>
                        </div>

                    </div>
                </div>

            </section>


            <section className='p-b-30 p-t-60 m-p-07'>
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
            <section className='p-t-80 m-p-07'>
                <div className='container'>
                    <div className='row justify-content-center'>
                        <div className='col-lg-9'>
                            <div className='heading-center p-b-40'>
                                <h2 className='m-b-30'>Join Hands with a Reliable <span>Tombstone Supplier</span></h2>
                                <p>Whether you’re a high-volume buyer or expanding your product line, our team is here to support your growth. We understand the B2B dynamics of the memorial industry and deliver not just products—but trust, consistency, and partnership.</p>
                            </div>
                            <div className='button-center-new text-center'>
                                <a href='/get-quote-now' className='btn btn-three'>Request a Quote</a>
                                <a href='/catalog-download' className='btn btn-four'>Request Catalogue</a>

                            </div>
                        </div>
                    </div>
                </div>
            </section>



        </>
    );
}

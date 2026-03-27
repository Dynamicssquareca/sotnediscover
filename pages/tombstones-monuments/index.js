import React, { useState, useRef } from 'react';
import Head from 'next/head';
import { Accordion, AccordionBody, AccordionHeader, AccordionItem } from 'reactstrap';
import ModelBox from '@/components/ModelBox';
import Image from 'next/image';
import sanitizeHtml from 'sanitize-html';
import FooterContactFormHome from '@/components/FooterContactFormHome';
import FaqAccordionComon from '@/components/FaqAccordionComon';
import CommonSlider from "@/components/CommonSlider";

export const getStaticProps = async () => {
    try {
        const res = await fetch(process.env.NEXT_PUBLIC_PRODUCT_CATEGORY_API_URL)
        if (!res.ok) {
            throw new Error('Failed to fetch categories');
        }
        const categoriesRaw = await res.json()

        // categoriesRaw is expected to be an array of category objects.
        // Find the parent category with slug 'tombstones-monuments'
        let parentCategory = null;
        if (Array.isArray(categoriesRaw)) {
            parentCategory = categoriesRaw.find(
                (c) =>
                    (typeof c.slug === 'string' && c.slug === 'tombstones-monuments') ||
                    (typeof c.title === 'string' && c.title.toLowerCase().includes('tombstone'))
            );
        } else if (categoriesRaw && typeof categoriesRaw === 'object') {
            // in case API returned an object with data/results
            const arr = categoriesRaw.data || categoriesRaw.results || categoriesRaw.categories || null;
            if (Array.isArray(arr)) {
                parentCategory = arr.find(
                    (c) =>
                        (typeof c.slug === 'string' && c.slug === 'tombstones-monuments') ||
                        (typeof c.title === 'string' && c.title.toLowerCase().includes('tombstone'))
                );
            }
        }

        // Use subcategories of the parent. If parent not found, fallback to empty array.
        const subcategories = (parentCategory && Array.isArray(parentCategory.subcategories)) ? parentCategory.subcategories : [];

        // ensure each subcategory has an `id` (so your existing code using category.id works)
        const categories = subcategories.map((sc) => ({
            ...sc,
            id: sc.id || sc._id || sc._id?.toString?.() || sc.slug,
        }));

        // Extract extdesc and description from parent and sanitize
        const parentExtdescRaw = parentCategory?.extdesc || '';
        const parentDescriptionRaw = parentCategory?.description || '';

        const sanitizeOptions = {
            allowedTags: sanitizeHtml.defaults.allowedTags.concat(['img', 'h2', 'h3', 'br', 'blockquote']),
            allowedAttributes: {
                a: ['href', 'name', 'target', 'rel'],
                img: ['src', 'alt', 'width', 'height'],
                '*': ['class', 'id'],
            },
            transformTags: {
                'a': (tagName, attribs) => {
                    const at = { ...attribs }
                    if (at.target === '_blank') at.rel = at.rel ? `${at.rel} noopener noreferrer` : 'noopener noreferrer'
                    return { tagName: 'a', attribs: at }
                }
            }
        }

        const extdesc = sanitizeHtml(parentExtdescRaw || '', sanitizeOptions)
        const description = sanitizeHtml(parentDescriptionRaw || '', sanitizeOptions)

        // Return categories (subcategories) plus full parent data (with sanitized html fields)
        const categoryData = {
            ...(parentCategory || {}),
            extdesc,
            description,
        }

        return {
            props: {
                categories,
                categoryData,
                error: null,
            },
            // revalidate: 60,
            revalidate: false,
        }
    } catch (error) {
        console.error('Error fetching categories:', error)
        return {
            props: {
                categories: [],
                categoryData: {},
                error: 'Failed to load categories. Please try again later.',
            },
        }
    }
}

const getImageUrl = (img) =>
    img ? `${process.env.NEXT_PUBLIC_IMAGE}/${img}` : '/img/webpages/product-01.jpg'

const Index = ({ categories = [], categoryData = {} }) => {

    /*accordion code*/
    const [open, setOpen] = useState('1');
    const toggle = (id) => {
        if (open === id) {
            setOpen();
        } else {
            setOpen(id);
        }
    };

    // ref to the accordion we will scroll to & open
    const descRef = useRef(null);

    // handler for Read More button - scrolls to the accordion and opens it
    const handleReadMore = (e) => {
        e.preventDefault();
        // open the accordion item with id 'desc'
        setOpen('desc');

        // scroll to the element
        if (descRef.current) {
            // give the browser a tiny moment to update layout if needed, then scroll
            descRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
            // optionally adjust scroll a little for fixed headers:
            // window.scrollBy(0, -80);
        }
    };

    // --- dynamic head/meta values (fallbacks included) ---
    const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL || '').replace(/\/$/, '') + '/';
    const pagePath = 'tombstones-monuments/';
    const canonicalUrl = siteUrl ? `${siteUrl}${pagePath}` : `https://www.stonediscover.com/${pagePath}`;

    const metaTitle =
        categoryData?.metaTitle ||
        categoryData?.title ||
        'UK’s Trusted Supplier of Memorial Stones | Stone Discover UK';

    const metaDescription =
        categoryData?.metaDescription ||
        (categoryData?.excerpt && categoryData.excerpt) ||
        categoryData?.shortdescription ||
        'Stone Discover UK supplies high-quality memorial stones at wholesale prices. Trusted by funeral homes and retailers across the UK. Contact us today!';

    // choose the best image available
    const metaImage =
        (categoryData?.featuredimage && getImageUrl(categoryData.featuredimage)) ||
        (categoryData?.image && getImageUrl(categoryData.image)) ||
        'https://www.stonediscover.com/img/stone-og-inne.jpeg';

    // optional image size metadata (keep as before or remove if you don't know exact dims)
    const metaImageWidth = categoryData?.imageWidth || '1200';
    const metaImageHeight = categoryData?.imageHeight || '630';

    return (
        <>
            <Head>
                <title>{metaTitle}</title>
                <meta name="description" content={metaDescription} />
                <link rel="canonical" href={canonicalUrl} />

                {/* standard meta */}
                {categoryData?.metaKeywords && <meta name="keywords" content={categoryData.metaKeywords} />}

                {/* Open Graph */}
                <meta property="og:locale" content="en_US" />
                <meta property="og:type" content="website" />
                <meta property="og:title" content={metaTitle} />
                <meta property="og:description" content={metaDescription} />
                <meta property="og:url" content={canonicalUrl} />
                <meta property="og:site_name" content="Stone Discover UK" />
                <meta property="og:image" content={metaImage} />
                <meta property="og:image:width" content={metaImageWidth} />
                <meta property="og:image:height" content={metaImageHeight} />
                <meta property="og:image:type" content="image/jpeg" />

                {/* Twitter */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:site" content="@StoneDiscoverUK" />
                <meta name="twitter:title" content={metaTitle} />
                <meta name="twitter:description" content={metaDescription} />
                <meta name="twitter:image" content={metaImage} />
            </Head>

            {/* <div className='hero-banner-two' style={{ backgroundImage: 'url("/img/banner/hero-banner-02.jpg")', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>
                <div className='container'>
                    <div className='row'>
                        <div className='col-lg-6 align-self-end'>
                            <div className='hero-banner-two-head '>
                                <h1>{categoryData?.title ? categoryData.title + ' ' : 'Tombstones '}<span> Stones</span></h1>
                                <p>{categoryData?.shortdescription || 'The USA Trusted Partner for Quality Tombstones Stones'}</p>
                            </div>
                        </div>
                        <div className='col-lg-6'>
                            <div className='hero-banner-two-image'>
                                <Image src={categoryData?.image ? getImageUrl(categoryData.image) : "/img/banner/single-page-001.png"} width={563} height={563} alt="single-page-0" />
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}


            <div
                className="hero-banner-twso">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 align-self-end">
                            <div className="hero-banner-two-head-cust">
                                <h1>{categoryData?.title ? categoryData.title + ' ' : 'Tombstones '}<span></span></h1>
                                <p>{categoryData?.shortdescription || 'The USA Trusted Partner for Quality Tombstones Stones'}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <section className='p-b-80 p-t-40 m-p-06'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-lg-12'>
                            <div className='heading-left p-b-20'>
                                <h2 className='m-b-30'>Our Categories</h2>
                            </div>
                        </div>
                    </div>
                    <div className='row g-3 sliding-row-05'>
                        {categories.length > 0 ? (
                            categories.slice().sort((a, b) => a.title.localeCompare(b.title)).map((category) => (
                                <div className="col-lg-3 sliding-col-05" key={category.id}>
                                    <div className="card-06">
                                        <div className="card-06-item">
                                            <a href={`/tombstones-monuments/${category.slug}/`}>
                                                <Image
                                                    src={getImageUrl(category.image)}
                                                    alt={category.title}
                                                    className="img-fluid"
                                                    width={300}
                                                    height={300}
                                                />
                                                <span>{category.title}</span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <p>No categories available.</p>
                        )}
                    </div>
                </div>
            </section>
            <section className='about-us-section p-t-40 p-b-40 m-p-05'>
                <div className='container'>
                    <div className='row'>

                        <div className='col-lg-6'>
                            <div className='about-us-content'>
                                {/* render extdesc from parent category (sanitized) */}
                                {categoryData.extdesc ? (
                                    <div dangerouslySetInnerHTML={{ __html: categoryData.extdesc }} />
                                ) : null}

                                {/* Replaced the link with a button that scrolls and opens the accordion */}
                                <button onClick={handleReadMore} className='btn btn-four m-t-30'>Read More</button>
                            </div>
                        </div>

                        <div className='col-lg-6'>
                            <div className='about-us-image'>
                                <img src='/img/webpages/about-us-pic.png' alt='About Us' className='img-fluid' />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* New accordion target (we keep design; this is the minimal addition)
                It will open when setOpen('desc') is called and we scroll to it.
            */}
            <section className='p-t-20 p-b-40' ref={descRef}>
                <div className='container'>
                    {/* <div className='row'>
                        <div className='col-lg-12'>
                            <div className='heading-left p-b-20'>
                                <h2 className='m-b-30'>More Details</h2>
                            </div>
                        </div>
                    </div> */}

                    <div className='row'>
                        <div className='col-lg-12'>
                            <div className='accordion-one accordion-one-product accordion-one-product-new'>
                                {/* This accordion uses the same open/toggle logic you already have */}
                                <Accordion open={open} toggle={toggle}>
                                    <AccordionItem>
                                        {/* <AccordionHeader targetId="desc">
                                            <div className="d-flex justify-content-between align-items-center w-100">
                                                <h3>Full Description</h3>
                                            </div>
                                        </AccordionHeader> */}
                                        <AccordionBody accordionId="desc">
                                            {/* show extdesc then description */}
                                            {/* {categoryData.extdesc && (
                                                <div dangerouslySetInnerHTML={{ __html: categoryData.extdesc }} />
                                            )} */}
                                            {categoryData.description && (
                                                <div dangerouslySetInnerHTML={{ __html: categoryData.description }} />
                                            )}
                                        </AccordionBody>
                                    </AccordionItem>
                                </Accordion>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className='partner-section'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-lg-12'>
                            <div className='heading-left p-b-20'>
                                <h2 className='m-b-30'>Why Partner With Stone Discover?</h2>
                            </div>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-lg-6 align-self-center'>
                            <div className='partner-pic'>
                                <img src='/img/webpages/headstones-pic.png' alt='partent-side-pic' />
                            </div>
                        </div>
                        <div className='col-lg-6 align-self-center'>
                            <div className='form-left'>
                                <div className='accordion-one accordion-one-product'>
                                    <Accordion open={open} toggle={toggle}>
                                        <AccordionItem>
                                            <AccordionHeader targetId="1">
                                                <div className="d-flex justify-content-between align-items-center w-100">
                                                    <h3><img src='/img/icons/faq-icon-01.png' alt='faq-icon' />Direct Manufacturer Advantage</h3>
                                                </div>
                                            </AccordionHeader>
                                            <AccordionBody accordionId="1">
                                                <p>No middlemen. No markups. Just direct supply from our own facilities in India.</p>
                                                <p>We own and operate our full production chain — from granite sourcing at Khammam quarry in Telangana to manufacturing at our Chennai factory. This means:</p>
                                                <ul>
                                                    <li>Competitive wholesale & B2B export pricing on every order</li>
                                                    <li>Consistent supply with no third-party dependency</li>
                                                    <li>Flexible production for both standard and custom designs</li>
                                                    <li>Export-ready packaging for seamless US import</li>
                                                </ul>
                                                <p>Since 1984, we have been exporting premium granite memorials to dealers, cemeteries, and monument retailers across the USA and 70+ countries worldwide.</p>
                                            </AccordionBody>
                                        </AccordionItem>
                                        <AccordionItem>
                                            <AccordionHeader targetId="2">
                                                <div className="d-flex justify-content-between align-items-center w-100">
                                                    <h3><img src='/img/icons/faq-icon-02.png' alt='faq-icon' />Consistent Quality, Every Time</h3>
                                                </div>
                                            </AccordionHeader>
                                            <AccordionBody accordionId="2">
                                                <p>Every piece that ships from our facility is built to last — outdoors, for decades.</p>
                                                <p>Our memorials are crafted from premium Indian granite, quarry-sourced directly from Telangana and processed at our Chennai plant. Each product goes through a strict multi-stage quality check covering:</p>
                                                <ul>
                                                    <li>Surface finishing and polish consistency</li>
                                                    <li>Dimensional accuracy to US cemetery specifications</li>
                                                    <li>Structural integrity for all-weather outdoor durability</li>
                                                    <li>Engraving-ready panel preparation</li>
                                                </ul>
                                                <p>When your customers receive a Stone Discover product, it reflects the standard your business stands for.</p>
                                            </AccordionBody>
                                        </AccordionItem>
                                        <AccordionItem>
                                            <AccordionHeader targetId="3">
                                                <div className="d-flex justify-content-between align-items-center w-100">
                                                    <h3><img src='/img/icons/faq-icon-03.png' alt='faq-icon' />Custom Designs</h3>
                                                </div>
                                            </AccordionHeader>
                                            <AccordionBody accordionId="3">
                                                <p>Your customers have unique needs. We make sure you can meet every one of them.</p>
                                                <p>We support full customisation across our entire product range, including:</p>
                                                <ul>
                                                    <li>Upright Headstones</li>
                                                    <li>Flat Markers</li>
                                                    <li>Slant Markers</li>
                                                    <li>Bevel Markers</li>
                                                    <li>Angel Headstones</li>
                                                    <li>Memorial Benches</li>
                                                    <li>Full Length Kerb Sets</li>
                                                    <li>Ledger Grave Markers</li>
                                                    <li>Columbarium</li>
                                                </ul>
                                                <p>All designs are engraving-ready, and we accept custom shapes, sizes, granite colours, and sculpted details, whether it's a single bespoke piece or a large bulk order.</p>
                                            </AccordionBody>
                                        </AccordionItem>
                                        <AccordionItem>
                                            <AccordionHeader targetId="4">
                                                <div className="d-flex justify-content-between align-items-center w-100">
                                                    <h3><img src='/img/icons/faq-icon-04.png' alt='faq-icon' />Seamless Export & Delivery to the USA</h3>
                                                </div>
                                            </AccordionHeader>
                                            <AccordionBody accordionId="4">
                                                <p>From our production floor in Chennai to your warehouse — reliable, trackable, and hassle-free.</p>
                                                <p>Stone Discover exports granite memorials directly to the USA with full logistics support:</p>
                                                <ul>
                                                    <li>Export-ready crating and packaging</li>
                                                    <li>Proper freight coordination (sea & air)</li>
                                                    <li>Hassle-free customs documentation handling</li>
                                                    <li>Bulk order dispatch with flexible lead times</li>
                                                    <li>Dedicated export support team for US buyers</li>
                                                    <p>Whether you are a monument dealer, cemetery supplier, or wholesale distributor — our export network is built to keep your business moving.
                                                    </p>
                                                </ul>
                                            </AccordionBody>
                                        </AccordionItem>
                                    </Accordion>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className='p-t-60 p-b-60'>
                <div className='container'>
                    <div className='row justify-content-center'>
                        <div className='col-lg-9'>
                            <div className='heading-center p-b-40'>
                                <h2 className='m-b-30'>Partner with a Trusted <span>Granite Monuments Exporter</span></h2>
                                <p>Whether you are sourcing in bulk or expanding your memorial range, Stone Discover supports your business with reliable granite headstones supply, consistent quality, and export expertise. We work closely with memorial dealers and retailers worldwide to ensure long-term supply partnerships built on trust and performance.</p>
                            </div>
                            <div className='button-center-new text-center'>
                                <ModelBox className='btn-three' headerText="Scale Your Store! " buttonText="Request a Quote" />
                                <a className='btn-four btn-four-cc' href="/catalog-download">Request Catalogue</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>



            <section className="products-section-one m-p-02">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-10 text-center">
                            <div className="heading-center p-b-40">
                                <h2 className="m-b-20"><span>Granite Tombstone Manufacturing Process</span>, From Selection to Global Supply!</h2>
                                <p>At Stone Discover, every granite tombstone begins with careful block selection followed by precision shaping and expert hand carving for accurate memorial designs.
                                    Each monument undergoes professional surface polishing and finishing to ensure durability, consistency, and premium appearance for international cemetery markets.
                                    Finally, all products are securely packed using export-grade protection to support safe global shipping and reliable B2B supply worldwide.</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="card-02a">
                                <CommonSlider />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container  p-t-80">
                    <div className="row justify-content-center">
                        <div className="col-lg-9">
                            <div className="heading-center p-b-40">
                                <h2 className="m-b-30">Pillars of Strength</h2>
                                <p>
                                    Whether you’re a high-volume buyer or expanding your product
                                    line, our team is here to support your growth. We understand
                                    the B2B dynamics of the memorial industry and deliver not just
                                    products—but trust, consistency, and partnership.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-lg-12">
                            <div className="card-05">
                                <div className="card-05-item">
                                    <Image
                                        src="/img/icons/about-pi-01.png"
                                        alt="About Us"
                                        className="img-fluid"
                                        width={48}
                                        height={48}
                                    />
                                    <span>Finest Quality Stones</span>
                                    <p>
                                        We ensure that each headstone is crafted with great
                                        attention to detail
                                    </p>
                                </div>
                                <div className="card-05-item">
                                    <Image
                                        src="/img/icons/about-pi-02.png"
                                        alt="About Us"
                                        className="img-fluid"
                                        width={48}
                                        height={48}
                                    />
                                    <span>Competitive Prices</span>
                                    <p>Get Quality headstones at the Best Rates!</p>
                                </div>
                                <div className="card-05-item">
                                    <Image
                                        src="/img/icons/about-pi-03.png"
                                        alt="About Us"
                                        className="img-fluid"
                                        width={48}
                                        height={48}
                                    />
                                    <span>On-time Delivery</span>
                                    <p>Ensuring Your tombstones Arrive When You Need Them!</p>
                                </div>
                                <div className="card-05-item">
                                    <Image
                                        src="/img/icons/about-pi-04.png"
                                        alt="About Us"
                                        className="img-fluid"
                                        width={48}
                                        height={48}
                                    />
                                    <span>Bulk Order</span>
                                    <p>Streamline Your Business with Our Premium tombstones!</p>
                                </div>
                                <div className="card-05-item">
                                    <Image
                                        src="/img/icons/about-pi-05.png"
                                        alt="About Us"
                                        className="img-fluid"
                                        width={48}
                                        height={48}
                                    />
                                    <span>Shipping Worldwide</span>
                                    <p>Delivering Quality tombstones Everywhere!</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <FooterContactFormHome faqList={categoryData.faqs} />

        </>
    );
}

export default Index;

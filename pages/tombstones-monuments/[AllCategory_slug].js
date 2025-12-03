// pages/tombstones-monuments/[AllCategory_slug].js
import React, { useState, useRef } from 'react';
import Head from 'next/head';
import { Accordion, AccordionBody, AccordionHeader, AccordionItem } from 'reactstrap';
import Image from 'next/image';
import ModelBox from '@/components/ModelBox';
import { useRouter } from 'next/router';
import FooterContactFormHome from '@/components/FooterContactFormHome';

const getImageUrl = (img) =>
  img ? `${process.env.NEXT_PUBLIC_IMAGE}/${img}` : '/img/webpages/product-01.jpg';

const getImageUrlBanner = (img) =>
  img ? `${process.env.NEXT_PUBLIC_IMAGE}/${img}` : '/img/webpages/product-01.jpg';

const CategoryPage = ({ category, subcategory, products = [], faq, error }) => {
  if (error) {
    return <p className="text-danger">{error}</p>;
  }
  if (!category && !subcategory) {
    return <p className="text-warning">Category not found.</p>;
  }

  /* accordion code */
  const [open, setOpen] = useState('1');
  const toggle = (id) => {
    setOpen(open === id ? undefined : id);
  };

  // Read More -> scroll & open behaviour
  const descRef = useRef(null);
  const handleReadMore = (e) => {
    e && e.preventDefault();
    setOpen('desc');
    if (descRef.current) {
      setTimeout(() => {
        descRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
        // adjust for fixed header if needed:
        // window.scrollBy(0, -80);
      }, 50);
    }
  };

  const router = useRouter();
  const { AllCategory_slug } = router.query;

  // Prefer subcategory content if subcategory exists, otherwise fall back to category
  const primary = subcategory || category || {};

  const displayDescription =
    (primary.description && primary.description.trim() && primary.description) ||
    (primary.extdescription && primary.extdescription.trim() && primary.extdescription) ||
    (primary.extdesc && primary.extdesc.trim() && primary.extdesc) ||
    '';

  const displayShortDesc = (primary.shortdescription && primary.shortdescription) || '';

  const displayHeroImage = primary.image || primary.featuredimage || '';

  // FAQs: prefer subcategory -> category -> passed faq prop -> []
  const displayFaqs =
    (Array.isArray(subcategory?.faqs) && subcategory.faqs.length > 0
      ? subcategory.faqs
      : Array.isArray(category?.faqs) && category.faqs.length > 0
        ? category.faqs
        : Array.isArray(faq) && faq.length > 0
          ? faq
          : []);

  const canonicalUrl = `${process.env.NEXT_PUBLIC_SITE_URL}tombstones-monuments/${(primary.slug || category?.slug || '').replace(/^\//, '')}/`;
  const CanImageUrl = (img) => {
    if (!img) return '';
    if (img.startsWith('http')) return img;
    return `${process.env.NEXT_PUBLIC_IMAGE.replace(/\/$/, '')}/${img.replace(/^\//, '')}`;
  };

  return (
    <>
      <Head>
        <title>{primary.metaTitle || primary.title || category?.title}</title>
        <meta name="description" content={primary.metaDescription || primary.excerpt || ''} />
        <link rel="canonical" href={canonicalUrl} />
        {primary.metaKeywords && <meta name="keywords" content={primary.metaKeywords} />}
        <meta property="og:title" content={primary.metaTitle || primary.title || category?.title} />
        <meta property="og:description" content={primary.metaDescription || primary.excerpt || ''} />
        <meta property="og:site_name" content="Stone Discover UK" />
        <meta
          property="og:image"
          content={
            primary.featuredimage
              ? CanImageUrl(primary.featuredimage)
              : `${process.env.NEXT_PUBLIC_SITE_URL}img/stone-og-inne.jpeg`
          }
        />
      </Head>

      {/* <div
        className="hero-banner-two"
        style={{
          backgroundImage: 'url("/img/banner/hero-banner-02.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-6 align-self-end">
              <div className="hero-banner-two-head ">
                <h1>
                  <span>{primary.title || category?.title}</span>
                </h1>
                <p>{displayShortDesc}</p>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="hero-banner-two-image">
                <Image
                  width={563}
                  height={563}
                  src={getImageUrlBanner(displayHeroImage)}
                  alt={primary.title || category?.title}
                  className="img-fluid"
                />
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
                <h1>
                  <span>{primary.title || category?.title}</span>
                </h1>
                <p>{displayShortDesc}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container py-4 m-p-08">
        <div className="row mt-4">
          <div className="col-lg-12">
            <div className="about-us-content">
              <h2>Our Products</h2>
            </div>
          </div>

          {Array.isArray(products) && products.length > 0 ? (
            products
              .slice()
              .sort((a, b) => (a.title || '').localeCompare(b.title || ''))
              .map((product) => (
                <div className="col-lg-3 sliding-col-05" key={product._id || product.id || product.slug}>
                  <div className="card-06">
                    <div className="card-06-item">
                      <a href={`/product/${product.slug}`}>
                        <Image
                          width={300}
                          height={200}
                          src={getImageUrl(product.images?.[0])}
                          alt={product.title}
                          className="img-fluid"
                        />
                        <span>{product.title}</span>
                      </a>
                    </div>
                  </div>
                </div>
              ))
          ) : (
            <div className="col-12">
              <p className="text-muted">No products found in this category.</p>
            </div>
          )}
        </div>
      </div>

      <section className="about-us-section p-t-80 p-b-40 p-t-40">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="about-us-content">
                <h2>About {primary.title || category?.title}</h2>

                {displayDescription ? (
                  <div dangerouslySetInnerHTML={{ __html: displayDescription }} />
                ) : null}

                <button onClick={handleReadMore} className="btn btn-four m-t-30">
                  Read More
                </button>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="about-us-image">
                <img src="/img/webpages/about-us-pic.png" alt="About Us" className="img-fluid" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Full Description target */}
      <section className="p-t-20 p-b-40" ref={descRef}>
        <div className="container">
          {/* <div className="row">
            <div className="col-lg-12">
              <div className="heading-left p-b-20">
                <h2 className="m-b-30">Full Description</h2>
              </div>
            </div>
          </div> */}

          <div className="row">
            <div className="col-lg-12">
              <div className="accordion-one accordion-one-product">
                <Accordion open={open} toggle={toggle}>
                  <AccordionItem>
                    <AccordionHeader targetId="desc">
                      <div className="d-flex justify-content-between align-items-center w-100">
                        <h3>About {primary.title || category?.title} — Details</h3>
                      </div>
                    </AccordionHeader>
                    <AccordionBody accordionId="desc">
                      {displayDescription ? (
                        <div dangerouslySetInnerHTML={{ __html: displayDescription }} />
                      ) : (
                        <p>No additional details available.</p>
                      )}
                    </AccordionBody>
                  </AccordionItem>
                </Accordion>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partner section (unchanged) */}
      <section className='partner-section'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-12'>
              <div className='heading-left p-b-20'>
                <h2 className='m-b-30'>Why Partner with Us?</h2>
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
                        <p>We manage our own production facilities in India, allowing us to offer:</p>
                        <ul>
                          <li>Competitive B2B pricing</li>
                          <li>Flexible customization options</li>
                          <li>Faster Deliveries with smooth logistics</li>
                        </ul>
                      </AccordionBody>
                    </AccordionItem>
                    <AccordionItem>
                      <AccordionHeader targetId="2">
                        <div className="d-flex justify-content-between align-items-center w-100">
                          <h3><img src='/img/icons/faq-icon-02.png' alt='faq-icon' />Consistent Quality, Every Time</h3>
                        </div>
                      </AccordionHeader>
                      <AccordionBody accordionId="2">
                        <p>Our tombstones are crafted from premium-grade Indian granite, renowned for its durability and timeless appeal. Every piece is quality-checked to ensure consistent finishing, accurate dimensions, and enduring aesthetics.</p>

                      </AccordionBody>
                    </AccordionItem>
                    <AccordionItem>
                      <AccordionHeader targetId="3">
                        <div className="d-flex justify-content-between align-items-center w-100">
                          <h3><img src='/img/icons/faq-icon-03.png' alt='faq-icon' />Bespoke Designs</h3>
                        </div>
                      </AccordionHeader>
                      <AccordionBody accordionId="3">
                        <p>We support customizations including:</p>
                        <ul>
                          <li>Headstones</li>
                          <li>Kerbsets</li>
                          <li>Vases and Urns</li>
                          <li>Angel Memorials</li>
                          <li>Children Memorials</li>
                          <li>All with engraving-ready finishes</li>
                        </ul>
                      </AccordionBody>
                    </AccordionItem>
                    <AccordionItem>
                      <AccordionHeader targetId="4">
                        <div className="d-flex justify-content-between align-items-center w-100">
                          <h3><img src='/img/icons/faq-icon-04.png' alt='faq-icon' />Seamless Logistics & Delivery</h3>
                        </div>
                      </AccordionHeader>
                      <AccordionBody accordionId="4">
                        <p>With our warehouses located in Liverpool and Southampton, we guarantee:</p>
                        <ul>
                          <li>On-time delivery</li>
                          <li>Proper transport coordination</li>
                          <li>Hassle-free customs handling</li>
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
      <section className='p-t-60'>
        <div className='container'>
          <div className='row justify-content-center'>
            <div className='col-lg-9'>
              <div className='heading-center p-b-40'>
                <h2 className='m-b-30'>Join Hands with a Reliable <span>Tombstone Supplier</span></h2>
                <p>Whether you’re a high-volume buyer or expanding your product line, our team is here to support your growth. We understand the B2B dynamics of the memorial industry and deliver not just products—but trust, consistency, and partnership.</p>
              </div>
              <div className='button-center-new text-center'>
                <ModelBox className='btn-three' headerText="Scale Your Store! " buttonText="Request a Quote" />
                <a className='btn-four btn-four-cc' href="/catalog-download">Request Catalogue</a>

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
                <h2 className='m-b-30'>Pillars of Strength</h2>

              </div>

            </div>
          </div>

          <div className='row'>
            <div className='col-lg-12'>
              <div className='card-05'>
                <div className='card-05-item'>
                  <Image src='/img/icons/about-pi-01.png' alt='About Us' className='img-fluid' width={48} height={48} />
                  <span>Finest Quality Stones</span>
                  <p>We ensure that each tombstone is crafted with great attention to detail</p>
                </div>
                <div className='card-05-item'>
                  <Image src='/img/icons/about-pi-02.png' alt='About Us' className='img-fluid' width={48} height={48} />
                  <span>Competitive Prices</span>
                  <p>Get Quality Tombstones at the Best Rates!</p>
                </div>
                <div className='card-05-item'>
                  <Image src='/img/icons/about-pi-03.png' alt='About Us' className='img-fluid' width={48} height={48} />
                  <span>On-time Delivery</span>
                  <p>Ensuring Your Tombstones Arrive When You Need Them!</p>
                </div>
                <div className='card-05-item'>
                  <Image src='/img/icons/about-pi-04.png' alt='About Us' className='img-fluid' width={48} height={48} />
                  <span>Bulk Order</span>
                  <p>Streamline Your Business with Our Premium Tombstones!</p>
                </div>
                <div className='card-05-item'>
                  <Image src='/img/icons/about-pi-05.png' alt='About Us' className='img-fluid' width={48} height={48} />
                  <span>Shipping Worldwide</span>
                  <p>Delivering Quality Tombstones Everywhere!</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* pass computed displayFaqs to FooterContactFormHome */}
      <FooterContactFormHome faqList={displayFaqs} />
    </>
  );
};

export const getStaticPaths = async () => {
  try {
    const categoriesUrl =
      process.env.NEXT_PUBLIC_PRODUCT_CATEGORY_API_URL ||
      'https://stonediscoverusaapi.onrender.com/api/frontend/categories/';

    const res = await fetch(categoriesUrl);

    if (!res.ok) {
      console.error('Failed to fetch categories for paths:', res.status);
      return { paths: [], fallback: 'blocking' };
    }

    const data = await res.json();

    const paths = Array.isArray(data)
      ? data.map((cat) => ({
        params: { AllCategory_slug: cat.slug },
      }))
      : [];

    return {
      paths: paths || [],
      fallback: 'blocking',
    };
  } catch (error) {
    console.error('Error generating paths:', error.message);
    return {
      paths: [],
      fallback: 'blocking',
    };
  }
};

export const getStaticProps = async ({ params }) => {
  try {
    const detailsBase =
      process.env.NEXT_PUBLIC_CATEGORY_CHILD_API_URL ||
      'https://stonediscoverusaapi.onrender.com/api/frontend/productscategory';

    const slug = encodeURIComponent(params.AllCategory_slug || '');
    const url = `${detailsBase.replace(/\/$/, '')}/${slug}`;

    const res = await fetch(url);
    if (res.status === 404) {
      return { notFound: true };
    }
    if (!res.ok) {
      throw new Error(`Failed fetching category details: ${res.status}`);
    }

    const data = await res.json();

    if (!data || (!data.category && !data.products && !data.subcategory && !data.slug)) {
      return { notFound: true };
    }

    // determine category and subcategory regardless of shape
    let category = null;
    let subcategory = null;
    let products = [];

    // If API returned top-level "category" and "subcategory"
    if (data.category) {
      category = data.category;
      // some responses include subcategory at top-level or nested
      subcategory = data.subcategory || data.category.subcategory || null;
      products = data.products || [];
    } else if (data.slug && !data.category) {
      // data is the category object itself (maybe includes products and subcategory)
      category = data;
      subcategory = data.subcategory || null;
      products = data.products || [];
    } else if (data.subcategory) {
      // fallback: top-level subcategory with parent category provided in data.category or data.categoryId
      subcategory = data.subcategory;
      category = data.category || null;
      products = data.products || [];
    } else {
      // last fallback: data is something else, map fields defensively
      category = data.category || data;
      subcategory = data.subcategory || null;
      products = data.products || [];
    }

    const faq = (subcategory && subcategory.faqs) || (category && category.faqs) || null;

    return {
      props: {
        category,
        subcategory,
        products,
        faq,
      },
      revalidate: 60,
    };
  } catch (error) {
    console.error('Failed to load category details:', error.message);
    return {
      props: {
        category: null,
        subcategory: null,
        products: [],
        faq: null,
        error: 'Something went wrong while loading this page.',
      },
      revalidate: 60,
    };
  }
};

export default CategoryPage;

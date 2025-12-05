import React from 'react';
import Head from 'next/head';
import Form from '@/components/Form';
const ContactUs = () => {
    return (
        <>
            <Head>
                <title>Get a Quote | Stone Discover India</title>
                <meta
                    name="description"
                    content="Request a quote from Stone Discover India. Share your required details and our team will provide a customized price estimate."
                />
                <link rel="canonical" href=" https://www.stonediscover.com/get-quote-now/" />
                <meta property="og:locale" content="US" />
                <meta property="og:type" content="website" />
                <meta property="og:title" content=" Get a Quote | Stone Discover India" />
                <meta property="og:description" content=" Request a quote from Stone Discover India. Share your required details and our team will provide a customized price estimate." />
                <meta property="og:url" content=" https://www.stonediscover.com/get-quote-now/" />
                <meta property="og:site_name" content="Stone Discover" />
                <meta property="og:image" content="https://www.stonediscover.com/img/stone-home-o.jpeg" />
                <meta property="og:image:width" content="200" />
                <meta property="og:image:height" content="200" />
                <meta property="og:image:type" content="image/jpeg" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:site" content="@Stone Discover" />
                <meta name="twitter:title" content=" Get a Quote | Stone Discover India" />
                <meta name="twitter:description" content=" Request a quote from Stone Discover India. Share your required details and our team will provide a customized price estimate." />
                <meta name="twitter:image" content="https://www.stonediscover.com/img/stone-home-o.jpeg" />

            </Head>

            <div className='common-header-banner'>
                <div className='container'>
                    <div className='row justify-content-center'>
                        <div className='col-lg-8'>
                            <div className='commn-head'>
                                <h1>Get A Quote</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='contact-main p-t-80 p-b-40'>
                <div className='container'>
                    <div className='row justify-content-center'>

                        <div className='col-lg-6'>
                            <div className='addre-right'>
                                <Form />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ContactUs;

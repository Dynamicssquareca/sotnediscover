import Head from 'next/head';
import React from 'react';
const ThankYou = () => {
    return (
        <>
            <Head>
                <title> Thank You for Getting in Touch | Stone Discover India </title>
                <meta
                    name="description"
                    content=" Thank you for getting in touch with Stone Discover India. We’ve received your message and our team will respond shortly with the information you need."
                />
                <link rel="canonical" href=" https://www.stonediscover.com/thank-you/" />
                <meta property="og:locale" content="US" />
                <meta property="og:type" content="website" />
                <meta property="og:title" content=" Thank You for Getting in Touch | Stone Discover India " />
                <meta property="og:description" content=" Thank you for getting in touch with Stone Discover India. We’ve received your message and our team will respond shortly with the information you need." />
                <meta property="og:url" content=" https://www.stonediscover.com/thank-you/" />
                <meta property="og:site_name" content="Stone Discover" />
                <meta property="og:image" content="https://www.stonediscover.com/img/stone-home-o.jpeg" />
                <meta property="og:image:width" content="200" />
                <meta property="og:image:height" content="200" />
                <meta property="og:image:type" content="image/jpeg" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:site" content="@Stone Discover" />
                <meta name="twitter:title" content=" Thank You for Getting in Touch | Stone Discover India " />
                <meta name="twitter:description" content=" Thank you for getting in touch with Stone Discover India. We’ve received your message and our team will respond shortly with the information you need." />
                <meta name="twitter:image" content="https://www.stonediscover.com/img/stone-home-o.jpeg" />

            </Head>

            <section className="hero">
                <div id="hero"></div>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-9">
                            <div className="hero-content">
                                <h1>Thank You !</h1>
                                <p>Thanks for getting in touch - someone will contact you soon!</p>
                                <a className="btn btn-one" href='/'>Back to Home</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default ThankYou;

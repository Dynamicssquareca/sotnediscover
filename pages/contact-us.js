import React from 'react';
import Head from 'next/head';
import Form from '@/components/Form';
import { useRouter } from 'next/router';
const ContactUs = () => {

    const router = useRouter();
    const handleFormSubmit = () => {
        console.log('Form submitted!');
        setTimeout(() => {
            router.push('/thank-you');
        }, 3000);
        // Perform any additional actions needed after form submission
    };


    return (
        <>
            <Head>
                <title>Contact Us | Stone Discover India</title>
                <meta
                    name="description"
                    content="Get in touch with Stone Discover India. Contact our team for inquiries, quotes, or support, we’re here to help with all your stone requirements."
                />
                <link rel="canonical" href="https://www.stonediscover.com/contact-us/" />
                <meta property="og:locale" content="US" />
                <meta property="og:type" content="website" />
                <meta property="og:title" content=" Contact Us | Stone Discover India " />
                <meta property="og:description" content=" Get in touch with Stone Discover India. Contact our team for inquiries, quotes, or support—we’re here to help with all your stone requirements." />
                <meta property="og:url" content="https://www.stonediscover.com/contact-us/" />
                <meta property="og:site_name" content="Stone Discover" />
                <meta property="og:image" content="https://www.stonediscover.com/img/stone-home-o.jpeg" />
                <meta property="og:image:width" content="200" />
                <meta property="og:image:height" content="200" />
                <meta property="og:image:type" content="image/jpeg" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:site" content="@Stone Discover" />
                <meta name="twitter:title" content=" Contact Us | Stone Discover India " />
                <meta name="twitter:description" content=" Get in touch with Stone Discover India. Contact our team for inquiries, quotes, or support—we’re here to help with all your stone requirements." />
                <meta name="twitter:image" content="https://www.stonediscover.com/img/stone-home-o.jpeg" />

            </Head>

            <div className='common-header-banner'>
                <div className='container'>
                    <div className='row justify-content-center'>
                        <div className='col-lg-8'>
                            <div className='commn-head'>
                                <h1>Contact US</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='contact-main p-t-80 p-b-40'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-lg-6 align-self-center'>
                            <div className='addre-left'>
                                <h2>Get in touch with us</h2>
                                <p>Get in touch with us using the form below. We're excited to assist you with all your tiles and stone needs!</p>
                                <div className='addres-sec'>
                                    <div className='add-list'>
                                        <div className='icons-l'>
                                            <i className="bi bi-house-fill"></i>
                                        </div>
                                        <div className='inf-wigt'>
                                            <h4>Office</h4>
                                            <p>1116, JMD Megapolis, Sector 48, Gurugram, Haryana 122018</p>
                                        </div>
                                    </div>
                                    <div className='add-list'>
                                        <div className='icons-l'>
                                            <i className="bi bi-building-fill"></i>
                                        </div>
                                        <div className='inf-wigt'>
                                            <h4>Factory</h4>
                                            <p>SY.No.33, Alinagar, Chetlapotham Village, Jinaram-Mandal, Sangareddy, Telangana 502319</p>
                                        </div>
                                    </div>
                                    <div className='add-list'>
                                        <div className='icons-l'>
                                            <i className="bi bi-person-plus-fill"></i>
                                        </div>
                                        <div className='inf-wigt'>
                                            <h4>Customer Support & Sales(India):</h4>
                                            <p><a href="tel:919667584700">+91 966 758 4700</a></p>
                                        </div>
                                    </div>
                                    <div className='add-list'>
                                        <div className='icons-l'>
                                            <i className="bi bi-person-lines-fill"></i>
                                        </div>
                                        <div className='inf-wigt'>
                                            <h4>Customer Support & Sales(USA):</h4>
                                            <p><a href="tel:18582935368">+1 858 293 5368</a></p>
                                        </div>
                                    </div>
                                    <div className='add-list'>
                                        <div className='icons-l'>
                                            <i className="bi bi-envelope-at-fill"></i>
                                        </div>
                                        <div className='inf-wigt'>
                                            <h4>Email Us</h4>
                                            <p><a href="mailto:info@stonediscover.com">info@stonediscover.com</a></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-6'>
                            <div className='addre-right'>
                                <Form onSubmit={handleFormSubmit} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ContactUs;

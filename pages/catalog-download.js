import React from 'react';
import Head from 'next/head';
import FormCatlog from '@/components/FormCatlog';
import { useRouter } from 'next/router';

const CatalogDownload = () => {
    const router = useRouter();
    const handleFormSubmit = () => {
        console.log('Form submitted!');
        setTimeout(() => {
            router.push('/files/Catalogue-Stonediscover.pdf');
        }, 3000);
        // Perform any additional actions needed after form submission
    };

    return (
        <>
            <Head>
                <title>Catalog Download | Stone Discover India</title>
                <meta
                    name="description"
                    content="Download the latest product catalog from Stone Discover India. Explore our full range of premium headstones, colors, and finishes."
                />
                <link rel="canonical" href="https://www.stonediscover.com/catalog-download/" />
                <meta property="og:locale" content="US" />
                <meta property="og:type" content="website" />
                <meta property="og:title" content=" Catalog Download | Stone Discover India" />
                <meta property="og:description" content=" Download the latest product catalog from Stone Discover India. Explore our full range of premium headstones, colors, and finishes." />
                <meta property="og:url" content="https://www.stonediscover.com/catalog-download/" />
                <meta property="og:site_name" content="Stone Discover" />
                <meta property="og:image" content="https://www.stonediscover.com/img/stone-home-o.jpeg" />
                <meta property="og:image:width" content="200" />
                <meta property="og:image:height" content="200" />
                <meta property="og:image:type" content="image/jpeg" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:site" content="@Stone Discover" />
                <meta name="twitter:title" content=" Catalog Download | Stone Discover India" />
                <meta name="twitter:description" content=" Download the latest product catalog from Stone Discover India. Explore our full range of premium headstones, colors, and finishes." />
                <meta name="twitter:image" content="https://www.stonediscover.com/img/stone-home-o.jpeg" />

            </Head>

            <div className='common-header-banner'>
                <div className='container'>
                    <div className='row justify-content-center'>
                        <div className='col-lg-8'>
                            <div className='commn-head'>
                                <h1>Catalog Download</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='contact-main p-t-40 p-b-40'>
                <div className='container'>
                    <div className='row'>
                        <div className='contact-main p-t-20 p-b-40'>
                            <div className='container'>
                                <div className='row justify-content-center'>

                                    <div className='col-lg-6'>
                                        <div className='addre-right'>
                                            <FormCatlog onSubmit={handleFormSubmit} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default CatalogDownload;

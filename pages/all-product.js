import React from 'react';
import Head from 'next/head';
const AllProduct = () => {
    return (
        <>
            <Head>
                <title></title>
            </Head>

            <div className='common-header-banner '>
                <div className='container'>
                    <div className='row justify-content-center'>
                        <div className='col-lg-8'>
                            <div className='commn-head'>
                                <h1>All Products</h1>
                            </div>
                            <nav aria-label="breadcrumb" className='cent-flex'>
                                <ol className="breadcrumb">
                                    <li className="breadcrumb-item"><a href="#">Home</a></li>
                                    <li className="breadcrumb-item"><a href="#">Headstone</a></li>
                                    <li className="breadcrumb-item active" aria-current="page">Product name</li>
                                </ol>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>

            <div className='searc-product p-t-60'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-lg-4'>
                            <div className='product-list-left'>
                                <h3>Product Categories</h3>
                                <ul className='pro-side-bar'>
                                    <li><a href="">Granite <span className='cat-sing'>20</span></a>
                                        <ul className='child-nn'>
                                            <li><a href="">Black Colors of Granite <span className='cat-sing-child'>10</span></a></li>
                                            <li><a href="">Black Colors of Granite <span className='cat-sing-child'>8</span></a></li>
                                            <li><a href="">Black Colors of Granite <span className='cat-sing-child'>9</span></a></li>
                                            <li><a href="">Black Colors of Granite <span className='cat-sing-child'>12</span></a></li>
                                        </ul>
                                    </li>
                                    <li><a href="">Granite <span className='cat-sing'>12</span></a>
                                        <ul className='child-nn'>
                                            <li><a href="">Black Colors of Granite <span className='cat-sing-child'>7</span></a></li>
                                            <li><a href="">Black Colors of Granite <span className='cat-sing-child'>4</span></a></li>
                                            <li><a href="">Black Colors of Granite <span className='cat-sing-child'>3</span></a></li>
                                            <li><a href="">Black Colors of Granite <span className='cat-sing-child'>2</span></a></li>
                                        </ul>
                                    </li>
                                    <li><a href="">Granite <span className='cat-sing'>16</span></a>
                                        <ul className='child-nn'>
                                            <li><a href="">Black Colors of Granite <span className='cat-sing-child'>10</span></a></li>
                                            <li><a href="">Black Colors of Granite <span className='cat-sing-child'>10</span></a></li>
                                            <li><a href="">Black Colors of Granite <span className='cat-sing-child'>10</span></a></li>
                                            <li><a href="">Black Colors of Granite <span className='cat-sing-child'>10</span></a></li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className='col-lg-8'>
                            <div className='product-list-rigt'>
                                <div className='row g-4'>
                                    <div className='col-lg-4'>
                                        <div class="card-04"><div class="card-04-item text-center"><a href="/single-page/"><img src="/img/webpages/pic-07.jpg" alt="About Us" class="img-fluid" /><h4>Bench</h4></a></div></div>
                                    </div>
                                    <div className='col-lg-4'>
                                        <div class="card-04"><div class="card-04-item text-center"><a href="/single-page/"><img src="/img/webpages/pic-08.jpg" alt="About Us" class="img-fluid" /><h4>Bench</h4></a></div></div>
                                    </div>
                                    <div className='col-lg-4'>
                                        <div class="card-04"><div class="card-04-item text-center"><a href="/single-page/"><img src="/img/webpages/pic-09.jpg" alt="About Us" class="img-fluid" /><h4>Bench</h4></a></div></div>
                                    </div>
                                    <div className='col-lg-4'>
                                        <div class="card-04"><div class="card-04-item text-center"><a href="/single-page/"><img src="/img/webpages/pic-10.jpg" alt="About Us" class="img-fluid" /><h4>Bench</h4></a></div></div>
                                    </div>
                                    <div className='col-lg-4'>
                                        <div class="card-04"><div class="card-04-item text-center"><a href="/single-page/"><img src="/img/webpages/pic-07.jpg" alt="About Us" class="img-fluid" /><h4>Bench</h4></a></div></div>
                                    </div>
                                    <div className='col-lg-4'>
                                        <div class="card-04"><div class="card-04-item text-center"><a href="/single-page/"><img src="/img/webpages/pic-08.jpg" alt="About Us" class="img-fluid" /><h4>Bench</h4></a></div></div>
                                    </div>
                                    <div className='col-lg-4'>
                                        <div class="card-04"><div class="card-04-item text-center"><a href="/single-page/"><img src="/img/webpages/pic-09.jpg" alt="About Us" class="img-fluid" /><h4>Bench</h4></a></div></div>
                                    </div>
                                    <div className='col-lg-4'>
                                        <div class="card-04"><div class="card-04-item text-center"><a href="/single-page/"><img src="/img/webpages/pic-10.jpg" alt="About Us" class="img-fluid" /><h4>Bench</h4></a></div></div>
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

export default AllProduct;

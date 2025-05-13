import React from 'react';
import Image from 'next/image';
import Head from 'next/head';

const getImageUrl = (img) =>
  img ? `${process.env.NEXT_PUBLIC_IMAGE}/${img}` : '/img/webpages/product-01.jpg';

const ProductPage = ({ product, relatedProducts, error }) => {
  if (error) {
    return <div className="container py-5 text-center">Error loading product. Please try again later.</div>;
  }

  return (
    <>
      <Head>
         <title>{product.metaTitle || product.title}</title>
      </Head>
      <div className='container m-t-40'>
        <div className='row'>
          <div className='col-lg-12'>
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb">
                <li className="breadcrumb-item"><a href="#">Home</a></li>
                <li className="breadcrumb-item"><a href={`/memorials/${product.category.slug}/`}>{product.category.title}</a></li>
                <li className="breadcrumb-item active" aria-current="page">{product.metaTitle || product.title}</li>
              </ol>
            </nav>

          </div>
        </div>
      </div>

      <div className="container py-5">
        <h1>{product.title}</h1>
        <div className="mb-4">
          <Image
            src={getImageUrl(product.images?.[0])}
            alt={product.title}
            width={500}
            height={400}
            className="img-fluid"
          />
        </div>

        <h2>Related Products</h2>
        <div className="row">
          {relatedProducts?.length > 0 ? (
            relatedProducts.map((rel) => (
              <div className="col-md-3" key={rel._id}>
                <a href={`/memorials/${rel.categorySlug}/${rel.slug}`}>
                  <Image
                    src={getImageUrl(rel.images?.[0])}
                    alt={rel.title}
                    width={300}
                    height={250}
                    className="img-fluid"
                  />
                  <p>{rel.title}</p>
                </a>
              </div>
            ))
          ) : (
            <p>No related products found.</p>
          )}
        </div>
      </div>




    </>
  );
};

export default ProductPage;

export async function getStaticPaths() {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_PRODUCTS_API_URL}`);
    const data = await res.json();

    const paths = data?.map((product) => ({
      params: {
        AllCategory_slug: product.categorySlug || 'unknown-category',
        categorslug: product.categorySlug || 'unknown-category',
        product_slug: product.slug,
      },
    })) || [];

    return { paths, fallback: 'blocking' };
  } catch (error) {
    console.error('Error in getStaticPaths:', error);
    return { paths: [], fallback: 'blocking' };
  }
}

export async function getStaticProps(context) {
  const { product_slug } = context.params;

  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_PRODUCTS_DETAILS_API_URL}/${product_slug}`);
    if (!res.ok) throw new Error('Failed to fetch product details');

    const { product, relatedProducts } = await res.json();

    return {
      props: {
        product,
        relatedProducts: relatedProducts || [],
      },
      revalidate: 60, // ISR
    };
  } catch (err) {
    console.error('Error in getStaticProps:', err);
    return {
      props: {
        error: true,
      },
    };
  }
}

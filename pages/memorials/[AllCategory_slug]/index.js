
import Image from 'next/image';

const getImageUrl = (img) =>
 img ? `${process.env.NEXT_PUBLIC_IMAGE}/${img}` : '/img/webpages/product-01.jpg'

const CategoryPage = ({ category, products,faq, error }) => {
  if (error) {
    return <p className="text-danger">{error}</p>;
  }

  if (!category) {
    return <p className="text-warning">Category not found.</p>;
  }

  return (
    <>
    
    
       <div className='hero-banner-two' style={{ backgroundImage: 'url("/img/banner/hero-banner-02.jpg")', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>
                <div className='container'>
                    <div className='row'>
                        <div className='col-lg-6 align-self-end'>
                            <div className='hero-banner-two-head '>
                                <h1><span>{category.title}</span></h1>
                                <p>Trusted Tombstone Supplier for Global B2B Partners</p>
                            </div>
                        </div>
                        <div className='col-lg-6'>
                            <div className='hero-banner-two-image'>
                                <img src="/img/banner/single-page-01.png" alt="single-page-0" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    
            <section className='about-us-section p-t-80 p-b-40'>
                <div className='container'>
                    <div className='row'>

                        <div className='col-lg-6'>
                            <div className='about-us-content'>
                                <h2>About {category.title}</h2>
                                <p>{category.description}</p>
                                <a href='/about-us/' className='btn btn-four m-t-30'>Read More</a>
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
    
    
    
     <div className="container py-4">
      <h1 className="mb-3">{category.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: category.description }} />

      <div className="row mt-4">
        {Array.isArray(products) && products.length > 0 ? (
          products.map((product) => (
            <div className="col-lg-3 sliding-col-05" key={product._id}>
              <div className="card-06">
                <div className="card-06-item">
                  <a href={`/memorials/${category.slug}/${product.slug}`}>
                    <img
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
    
    </>


   
  );
};

export const getStaticPaths = async () => {
  try {
    const res = await fetch(process.env.NEXT_PUBLIC_PRODUCT_CATEGORY_API_URL);
    const data = await res.json();

    const paths = data?.map((cat) => ({
      params: { AllCategory_slug: cat.slug },
    }));

    return {
      paths: paths || [],
      fallback: 'blocking',
    };
  } catch (error) {
    console.error("Error generating paths:", error.message);
    return {
      paths: [],
      fallback: 'blocking',
    };
  }
};

export const getStaticProps = async ({ params }) => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_DETSILS_URL}/${params.AllCategory_slug}`);
    const data = await res.json();

    if (!data || !data.category || !data.products) {
      return {
        notFound: true,
      };
    }

    return {
      props: {
        category: data.category,
        products: data.products,
         faq: data.category.faqs || null, 
      },
      revalidate: 60,
    };
  } catch (error) {
    console.error("Failed to load category details:", error.message);
    return {
      props: {
        category: null,
        products: [],
        faq: null,
        error: 'Something went wrong while loading this page.',
      },
    };
  }
};

export default CategoryPage;

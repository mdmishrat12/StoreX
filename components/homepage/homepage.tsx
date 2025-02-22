import React from 'react';
import BannerSlider from './banner/banner-slider';
import FeaturedProducts from './featured-products/featured-products';
import Footer from '../shared/footer/footer';

const HomePage: React.FC = () => {
  const banners = [
    {
      id: 1,
      image: '/banner-1.jpg',
      alt: 'Banner 1',
      link: '/promo1',
      title:'"Get Black Friday Discount Upto 50%"'
    },
    {
      id: 2,
      image: '/banner-2.jpg',
      alt: 'Banner 2',
      link: '/promo2',
      title:'"Get Black Friday Discount Upto 50%"'
    },
    {
      id: 3,
      image: '/banner-3.jpg',
      alt: 'Banner 3',
      link:'/promo3',
      title:"Get Black Friday Discount Upto 50%"
    },
  ];

  return (
    <>
    <div className="container mx-auto px-4">
      <BannerSlider banners={banners} className="mb-8" />
    </div>
    <div className="container mx-auto p-4">
        <FeaturedProducts/>
    </div>
    <Footer/>
    </>
  );
};

export default HomePage;
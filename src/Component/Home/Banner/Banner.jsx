import React from 'react';
import banner from '../../../assets/banner-home-2.jpg';
const Banner = () => {
  const bannerStyle = {
    backgroundImage: `url(${banner})`,
    backgroundSize: 'cover',
    height: '80vh',
  };

  return (
    <div className="banner w-11/12 mx-auto" style={bannerStyle}>
      <div className="space-y-3 lg:h-[80vh] h-full flex flex-col justify-center items-center">
        <h2 className="text-3xl font-semibold font-serif text-center">
          Sale up to 80% off
        </h2>
        <h3 className="font-semibold font-serif text-center text-gray-600">
          The best Fashionable product
        </h3>
        <button className="px-4 py-3 text-lg bg-blue-500 text-white hover:bg-green-700">
          Shop Now
        </button>
      </div>
    </div>
  );
};

export default Banner;

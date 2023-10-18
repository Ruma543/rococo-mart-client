import React from 'react';
import banner from '../../../assets/banner-home-2.jpg';
const Banner = () => {
  const bannerStyle = {
    backgroundImage: `url(${banner})`,
    backgroundSize: 'cover',
    height: '80vh',
  };
  // https://i.ibb.co/VVPrMxc/freestocks-3-Q3ts-J01nc-unsplash.jpg
  return (
    <div className="banner w-11/12 mx-auto" style={bannerStyle}>
      <h3>banner</h3>
    </div>
  );
};

export default Banner;

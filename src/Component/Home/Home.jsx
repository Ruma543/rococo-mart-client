import React, { useContext } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import Banner from './Banner/Banner';
import BrandCard from './BrandCard/BrandCard';
import Footer from './Footer/Footer';
import Policy from './Policy/Policy';

const Home = () => {
  const { user } = useContext(AuthContext);
  return (
    <div>
      <Banner></Banner>
      <BrandCard></BrandCard>
      <Policy></Policy>
      <Footer></Footer>
    </div>
  );
};

export default Home;

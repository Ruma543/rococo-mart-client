import React, { useContext } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import Banner from './Banner/Banner';
import BrandCard from './BrandCard/BrandCard';

const Home = () => {
  const { user } = useContext(AuthContext);
  return (
    <div>
      <Banner></Banner>
      <BrandCard></BrandCard>
    </div>
  );
};

export default Home;

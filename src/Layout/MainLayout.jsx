import React from 'react';
import Navbar from '../Component/Navbar/Navbar';
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
  return (
    <div>
      <div className="sticky top-0   z-50   w-full mx-auto  ">
        <Navbar></Navbar>
      </div>

      <Outlet></Outlet>
    </div>
  );
};

export default MainLayout;

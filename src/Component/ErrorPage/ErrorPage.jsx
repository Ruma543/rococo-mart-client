import React from 'react';
import errorImg from '../../assets/404-error.jpg';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
  return (
    <div className="flex flex-col justify-center space-y-4 my-10 lg:w-2/5 w-11/12 mx-auto">
      <img src={errorImg} alt="" />
      <h2 className="text-2xl font-semibold text-center">
        Oops! Something went wrong. Please try again later.
      </h2>
      <div className="lg:w-1/4 w-2/4 mx-auto">
        <Link to="/">
          <button className="px-4 py-3 text-lg bg-blue-500 text-white hover:bg-green-700">
            Go Home
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;

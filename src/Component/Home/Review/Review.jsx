import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Review = () => {
  // const review = useLoaderData();
  // console.log(review);
  return (
    <div className="w-2/3 mx-auto">
      <form className="flex flex-col space-y-5 bg-blue-200 px-4 py-6">
        <h3 className="text-3xl font-semibold text-blue-800 text-center font-serif">
          Participate in Our Review Contest & Get a 45% Sale for All Brands
        </h3>
        <input
          className=" px-4 w-2/3 mx-auto  py-2 bg-white"
          type="text"
          placeholder="name"
        />

        <input
          className="px-4 w-2/3 mx-auto  py-2 bg-white "
          type="email"
          placeholder="email"
        />
        <input
          className="px-4 w-2/3 mx-auto  py-2 bg-white "
          type="text"
          placeholder="Your Profession"
        />
        <input
          className="px-4 w-2/3 mx-auto  py-2 bg-white "
          type="text"
          placeholder="Product Name"
        />

        <textarea
          id="message"
          name="message"
          className="w-2/3 mx-auto px-3 py-2 border rounded-lg bg-white my-5 "
          rows="4"
          placeholder="Enter your message..."
        ></textarea>
        <button className="px-4 py-3  bg-blue-700 hover:bg-blue-400 w-1/3 mx-auto text-white ">
          Send
        </button>
      </form>
    </div>
  );
};

export default Review;

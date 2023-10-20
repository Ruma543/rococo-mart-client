import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Review = () => {
  return (
    <div className="lg:w-2/3 w-full p-5 mx-auto">
      {/* <h3>{review.length}</h3> */}
      <form className="flex flex-col space-y-5 bg-orange-100 px-4 py-6">
        <h3 className="text-3xl font-semibold text-blue-800 text-center font-serif">
          Participate in Our Review Contest & Get a 45% Sale for All Brands
        </h3>
        <input
          className=" px-4 w-full lg:w-2/3 mx-auto  py-2 bg-white"
          type="text"
          placeholder="name"
        />

        <input
          className="px-4 w-full lg:w-2/3 mx-auto  py-2 bg-white "
          type="email"
          placeholder="email"
        />
        <input
          className="px-4 w-full lg:w-2/3 mx-auto  py-2 bg-white "
          type="text"
          placeholder="Your Profession"
        />
        <input
          className="px-4 w-full lg:w-2/3 mx-auto  py-2 bg-white "
          type="text"
          placeholder="Product Name"
        />

        <textarea
          id="message"
          name="message"
          className="w-full lg:w-2/3 mx-auto px-3 py-2 border rounded-lg bg-white my-5 "
          rows="4"
          placeholder="Enter your message..."
        ></textarea>
        <button className="px-4 py-3 w-1/5 mx-auto text-lg bg-blue-500 text-white hover:bg-green-700">
          Send
        </button>
      </form>
    </div>
  );
};

export default Review;

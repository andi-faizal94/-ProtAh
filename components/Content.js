import React from 'react';
import { FaAngleDown } from 'react-icons/fa';

const Content = () => {
  return (
    <div>
      <div className='flex flex-col md:flex-row justify-between px-10 mb-2 space-y-4 md:space-y-0'>
        <h1 className='font-inter text-center md:text-left text-gray-400'>
          City
        </h1>
        <h1 className='font-inter text-center md:text-left  text-gray-400'>
          Type
        </h1>
        <h1></h1>
      </div>
      <div className='flex flex-col md:flex-row justify-between px-10 mb-4 mt-2 space-y-10 md:space-y-0'>
        <button className='flex items-center bg-gray-200 font-inter px-4 py-2 rounded-full'>
          City of Evil State
          <FaAngleDown />
        </button>
        <button className='flex items-center bg-gray-200 font-inter px-4 py-2 rounded-full'>
          Vintage Classic
          <FaAngleDown />
        </button>
        <button className=' bg-green-500 text-white font-inter px-4 py-2 rounded-full'>
          Search
        </button>
      </div>
    </div>
  );
};

export default Content;

import React from 'react';
import { FaAngleDown } from 'react-icons/fa';

const Content = () => {
  return (
    <div>
      {' '}
      <div className='flex justify-between px-10 mb-2'>
        <h1 className='font-inter text-gray-400'>City</h1>
        <h1 className='font-inter  text-gray-400'>Type</h1>
        <h1></h1>
      </div>
      <div className='flex justify-between px-10'>
        <button className='flex items-center bg-gray-200 font-inter px-4 py-2 rounded-full'>
          City of Evil State
          <FaAngleDown />
        </button>
        <button className='flex items-center  bg-gray-200 font-inter px-4 py-2 rounded-full'>
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

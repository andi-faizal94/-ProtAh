import React, { useState } from 'react';
import Content from './Content';
import Image from 'next/image';

const Hero = () => {
  const [home, setHome] = useState('home');
  return (
    <div>
      <div className='bg-blue-200 rounded-xl overflow-hidden mx-10 h-screen mb-14'>
        <div className='bg-hero h-screen max-w-full'>
          <div className='flex flex-col justify-center items-center h-screen'>
            <div className='flex flex-col  items-center mb-5'>
              <h1 className='font-sans font-bold text-7xl text-white'>
                Buy and Sell, Rent,
              </h1>
              <h1 className='font-sans font-bold text-7xl text-white'>
                Cooperate, Property
              </h1>
            </div>
            <div className='mb-5'>
              <p className='text-white'>
                Choice of property options are all here
              </p>
            </div>
            <div className='bg-white w-[692px] h-[201px] rounded-xl'>
              <div className='flex flex-col mx-auto'>
                <div className='flex mx-auto space-x-14 py-7 mb-3'>
                  <div
                    onClick={handleTabHome}
                    className={
                      home === 'home'
                        ? 'flex items-center space-x-2 border-b-2 w-auto border-black'
                        : 'flex items-center space-x-2'
                    }
                  >
                    <Image
                      layout='intrinsic'
                      className='items-center'
                      src='/images/Vector.png'
                      width='16%'
                      height='16%'
                      objectFit='contain'
                      alt='logo'
                    />
                    <div className='flex flex-col'>
                      <p className='font-inter cursor-pointer'>House</p>
                    </div>
                  </div>
                  <div
                    onClick={handleTabAppart}
                    className={
                      home === 'appart'
                        ? 'flex items-center space-x-2 border-b-2 w-auto border-black'
                        : 'flex items-center space-x-2'
                    }
                  >
                    <Image
                      layout='intrinsic'
                      className='items-center'
                      src='/images/buildings.png'
                      width='16%'
                      height='16%'
                      objectFit='contain'
                      alt='logo'
                    />
                    <div>
                      <p className='font-inter cursor-pointer '>Apartement</p>
                    </div>
                  </div>
                  <div
                    onClick={handleTabOffice}
                    className={
                      home === 'office'
                        ? 'flex items-center space-x-2 font-bold border-b-2 w-auto border-black'
                        : 'flex items-center space-x-2'
                    }
                  >
                    <Image
                      layout='intrinsic'
                      src='/images/building.png'
                      className='items-center'
                      width='16%'
                      height='16%'
                      objectFit='contain'
                      alt='logo'
                    />
                    <div>
                      <p className='font-inter cursor-pointer '>Office</p>
                    </div>
                  </div>
                  <div
                    onClick={handleTabShopHouse}
                    className={
                      home === 'shophouse'
                        ? 'flex items-center space-x-2 border-b-2 w-auto border-black'
                        : 'flex items-center space-x-2'
                    }
                  >
                    <Image
                      layout='intrinsic'
                      className='items-center'
                      src='/images/buildings-2.png'
                      width='16%'
                      height='16%'
                      objectFit='contain'
                      alt='logo'
                    />
                    <div>
                      <p className='font-inter cursor-pointer '>Shophouse</p>
                    </div>
                  </div>
                </div>
                {home === 'home' && <Content />}
                {home === 'appart' && (
                  <p className='text-center'>Appart On Development</p>
                )}
                {home === 'office' && (
                  <p className='text-center'>Office On Development</p>
                )}
                {home === 'shophouse' && (
                  <p className='text-center'>ShopHouse On Development</p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

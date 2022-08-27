import { useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import { FaAngleDown } from 'react-icons/fa';
import Content from '../components/Content';

import styles from '../styles/Home.module.css';

export default function Home() {
  const [home, setHome] = useState('home');

  function handleTabHome() {
    setHome('home');
  }
  function handleTabAppart() {
    setHome('appart');
  }
  function handleTabOffice() {
    setHome('office');
  }
  function handleTabShopHouse() {
    setHome('shophouse');
  }
  return (
    <div className={styles.container}>
      <Head>
        <title> ProtAh.</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <header>
        <nav className='flex items-center justify-evenly p-5'>
          <ul className='flex items-center space-x-6'>
            <li>
              <a className='font-inter' href='#'>
                Home
              </a>
            </li>
            <li>
              <a className='font-inter' href='#'>
                Buy
              </a>
            </li>
            <li>
              <a className='font-inter' href='#'>
                Sell and Rent
              </a>
            </li>
            <li className='flex items-center'>
              <a className='font-inter' href='#'>
                Our Project
              </a>
              <FaAngleDown />
            </li>
          </ul>
          <ul className='flex items-center space-x-8'>
            <li className='flex items-center'>
              <div className='w-14 h-14 py-4 overflow-hidden'>
                <Image
                  layout='intrinsic'
                  className='items-center'
                  src='/images/protah.png'
                  width='20%'
                  height='20%'
                  alt='logo'
                />
              </div>
              <a className='-ml-8 font-inter' href='#'>
                ProtAh.
              </a>
            </li>
          </ul>
          <ul className='flex items-center space-x-6'>
            <li>
              <a className='font-inter' href='#'>
                Join with Us
              </a>
            </li>
            <li>
              <a className='font-inter' href='#'>
                Contact
              </a>
            </li>
            <li>
              <a className='font-inter' href='#'>
                About Us
              </a>
            </li>
            <li>
              <button className='font-inter text-green-400 outline outline-green-300 rounded-full px-6 py-2 '>
                Login
              </button>
            </li>
          </ul>
        </nav>
      </header>

      <main className=''>
        <section>
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
                          home
                            ? 'flex items-center space-x-2 font-bold'
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
                          <p className='font-inter'>House</p>
                        </div>
                      </div>
                      <div
                        onClick={handleTabAppart}
                        className={
                          !home
                            ? 'flex items-center space-x-2 font-bold'
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
                          <p className='font-inter'>Apartement</p>
                        </div>
                      </div>
                      <div
                        onClick={handleTabOffice}
                        className={
                          !home
                            ? 'flex items-center space-x-2 font-bold'
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
                          <p className='font-inter'>Office</p>
                        </div>
                      </div>
                      <div
                        onClick={handleTabShopHouse}
                        className={
                          !home
                            ? 'flex items-center space-x-2 font-bold'
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
                          <p className='font-inter'>Shophouse</p>
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
        </section>
        <section>
          <div className='flex justify-around px-10 leading-8 mb-14'>
            <div>
              <h1 className='font-sans text-bold text-4xl'>
                We Are Spread All
              </h1>
              <h1 className='font-sans text-bold text-4xl mb-5'>
                Over the Archipelago.
              </h1>
              <p className='text-base font-inter'>
                Sit curabitur aliquet morbi venenatis sit in. Ultrices tortor
                facilisi et sit non enim.
              </p>
              <p className='text-base font-inter'>
                Vel, a eu nulla egestas nunc, sed morbi facilisis. At
              </p>
              <p className='text-base font-inter mb-5'>
                sed auctor aliquam metus. At elit tortor enim sapien
                pellentesque.
              </p>
              <button className='bg-green-500 px-4 py-2 rounded-full text-white'>
                Our Project
              </button>
            </div>
            <div className='bg-gray-200  mx-auto rounded-3xl w-[517px] h-[342px] py-20 px-10'>
              <div className='flex justify-center items-center space-x-6 py-10'>
                <div className='flex flex-col space-y-10'>
                  <div>
                    <h1 className='text-[#0A74A7] font-sans text-3xl font-black'>
                      300K+
                    </h1>
                    <p className='text-gray-400'>Property Options</p>
                  </div>
                  <div>
                    <h1 className='text-[#0A74A7] font-sans text-3xl font-black'>
                      48+
                    </h1>
                    <p className='text-gray-400'>Partners</p>
                  </div>
                </div>
                <div className='flex flex-col space-y-10'>
                  <div>
                    <h1 className='text-[#0A74A7] font-sans text-3xl font-black'>
                      52K+
                    </h1>
                    <p className='text-gray-400'>Customers</p>
                  </div>
                  <div className=''>
                    <h1 className='text-[#0A74A7] font-sans text-3xl font-black'>
                      125K+
                    </h1>
                    <p className='text-gray-400'>Listing Property</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className='flex items-center justify-center mb-10'>
            <h1 className='font-sans font-bold text-4xl'>
              Benefit of Choosing Us
            </h1>
          </div>
          <div className='flex items-center justify-evenly space-x-3 px-10'>
            <div>
              <h1 className='font-sans font-black text-3xl text-[#0A74A7] mb-3'>
                01.
              </h1>
              <h3 className='font-sans text-3xl font-bold mb-3'>
                Access to <br /> Exclusive Projects
              </h3>
              <p className='font-inter font-normal text-base text-gray-500'>
                Monitor various exclusive project listings from various leading
                developers that are sure to be interesting for potential buyers
              </p>
            </div>
            <div>
              <h1 className='font-sans font-black text-3xl text-[#0A74A7] mb-3'>
                02.
              </h1>
              <h3 className='font-sans text-3xl font-bold mb-3'>
                Personal Data <br /> Privacy is Safe
              </h3>
              <p className='font-inter font-normal text-base text-gray-500'>
                All transaction data of you and your buyers, both primary and
                those using joint account services, must be kept safe
              </p>
            </div>
            <div>
              <h1 className='font-sans font-black text-3xl text-[#0A74A7] mb-3'>
                03.
              </h1>
              <h3 className='font-sans text-3xl font-bold mb-3'>
                Faster and Easier
                <br /> Transactions
              </h3>
              <p className='font-inter font-normal text-base text-gray-500'>
                You can search for property types in many locations.
                Transactions are faster and you can get commissions easily
              </p>
            </div>
          </div>
        </section>
      </main>

      <footer className=''></footer>
    </div>
  );
}

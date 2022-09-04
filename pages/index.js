import { useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import { FaAngleDown } from 'react-icons/fa';
import Content from '../components/Content';
import { useRouter } from 'next/router';
import { FaBars, FaTimes } from 'react-icons/fa';

export default function Home() {
  const [nav, setNav] = useState(false);
  const [home, setHome] = useState('home');
  const router = useRouter();

  function handleTab(arg) {
    setHome(arg);
  }

  const navs = [
    {
      name: 'Home',
      href: '#home',
      icon: null,
    },
    {
      name: 'Buy',
      href: '#buy',
      icon: null,
    },
    {
      name: 'Sell and Rent',
      href: '#sell',
      icon: null,
    },
    {
      name: 'Our Project',
      href: '#our',
      icon: <FaAngleDown />,
    },
  ];
  return (
    <div>
      <Head>
        <title> ProtAh.</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <header>
        <nav className='flex items-center justify-evenly p-5'>
          <ul className='hidden md:flex items-center md:space-x-6'>
            {navs.map((nav, index) => {
              return (
                <li className='flex items-center' key={index}>
                  <a
                    className={`${
                      router.asPath === router.href
                        ? 'active:underline'
                        : 'text-normal'
                    }`}
                    href='#'
                  >
                    {nav.name}
                  </a>
                  {nav.icon}
                </li>
              );
            })}
          </ul>
          <ul className='hidden md:flex items-center md:space-x-8'>
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
          <ul className='hidden md:flex items-center md:space-x-6'>
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
          <div
            onClick={() => setNav(!nav)}
            className='md:hidden absolute right-2 top-2 z-30'
          >
            {!nav ? (
              <FaBars className='transition duration-500 ease-out' />
            ) : (
              <FaTimes className='transition duration-500 ease-out' />
            )}
          </div>

          {/* hp */}
          {nav && (
            <div className='flex flex-col md:hidden item-center justify-center bg-black w-screen h-screen   text-white'>
              <ul className='flex flex-col md:hidden items-center space-y-8'>
                {navs.map((nav, index) => {
                  return (
                    <li className='flex items-center' key={index}>
                      <a
                        className={`${
                          router.asPath === router.href
                            ? 'active:underline'
                            : 'text-normal'
                        }`}
                        href='#'
                      >
                        {nav.name}
                      </a>
                      {nav.icon}
                    </li>
                  );
                })}
              </ul>

              <ul className='flex flex-col md:hidden items-center space-y-8'>
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
              <ul className='flex flex-col md:hidden items-center space-y-8'>
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
            </div>
          )}
        </nav>
      </header>

      <main className=''>
        <section className='md:px-10 m-2'>
          <div className='bg-blue-200 rounded-xl overflow-hidden h-screen w-full mb-14'>
            <div className='bg-hero mx-auto h-screen'>
              <div className='flex flex-col justify-center items-center h-screen'>
                <div className='flex flex-col items-center mb-5'>
                  <h1 className='font-sans font-bold md:text-7xl text-white'>
                    Buy and Sell, Rent,
                  </h1>
                  <h1 className='font-sans font-bold md:text-7xl text-white'>
                    Cooperate, Property
                  </h1>
                </div>
                <div className='mb-5'>
                  <p className='text-white'>
                    Choice of property options are all here
                  </p>
                </div>
                <div className='bg-white w-1/2 md:w-[692px] h-auto md:h-[201px] rounded-xl md:px-0'>
                  <div className='flex flex-col mx-auto'>
                    <div className='flex flex-col md:flex-row mx-auto md:space-x-14 py-7 mb-3'>
                      <div
                        onClick={() => handleTab('home')}
                        className={
                          home === 'home'
                            ? 'flex items-center md:space-x-2 font-bold md:border-b-2 border-black'
                            : 'flex items-center md:space-x-2'
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
                        onClick={() => handleTab('appart')}
                        className={
                          home === 'appart'
                            ? 'flex items-center md:space-x-2 font-bold md:border-b-2  border-black'
                            : 'flex items-center md:space-x-2'
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
                          <p className='font-inter cursor-pointer '>
                            Apartement
                          </p>
                        </div>
                      </div>
                      <div
                        onClick={() => handleTab('office')}
                        className={
                          home === 'office'
                            ? 'flex items-center md:space-x-2 font-bold md:border-b-2 border-black'
                            : 'flex items-center md:space-x-2'
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
                        onClick={() => handleTab('shophouse')}
                        className={
                          home === 'shophouse'
                            ? 'flex items-center md:space-x-2 md:border-b-2  border-black'
                            : 'flex items-center md:space-x-2'
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
                          <p className='font-inter cursor-pointer '>
                            Shophouse
                          </p>
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
          <div className='flex flex-col justify-between md:flex-row md:justify-around items-center px-10 leading-8 space-y-10 md:space-y-0 mb-14'>
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
            <div className='bg-gray-200  mx-auto rounded-3xl md:w-[517px] md:h-[342px] py-10 px-8'>
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
          <div className='mb-14'>
            <div className='flex items-center justify-center mb-10'>
              <h1 className='font-sans font-bold md:text-4xl'>
                Benefit of Choosing Us
              </h1>
            </div>
            <div className='flex flex-col md:flex-row items-center md:justify-evenly md:space-x-3 px-10'>
              <div>
                <h1 className='font-sans font-black text-3xl text-[#0A74A7] mb-3'>
                  01.
                </h1>
                <h3 className='font-sans text-3xl font-bold mb-3'>
                  Access to <br /> Exclusive Projects
                </h3>
                <p className='font-inter font-normal text-base text-gray-500'>
                  Monitor various exclusive project listings from various
                  leading developers that are sure to be interesting for
                  potential buyers
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
          </div>
        </section>

        <section>
          <div className='bg-blue-200 h-full rounded-2xl overflow-hidden mx-10 mb-32'>
            <div className='bg-appart w-full h-[500px]'></div>
          </div>
        </section>

        <section>
          <div className='flex flex-col md:flex-row md:justify-evenly items-center object-cover mb-24'>
            <div className='h-32 w-32'>
              <Image
                layout='intrinsic'
                className='items-center'
                src='/images/Brookfield.png'
                width='100%'
                height='100%'
                objectFit='contain'
                alt='logo'
              />
            </div>
            <div className='h-32 w-32'>
              <Image
                layout='intrinsic'
                className='items-center'
                src='/images/Group 8.png'
                width='100%'
                height='100%'
                objectFit='contain'
                alt='logo'
              />
            </div>
            <div className='h-32 w-32'>
              <Image
                layout='intrinsic'
                className='items-center'
                src='/images/g7402.png'
                width='100%'
                height='100%'
                objectFit='contain'
                alt='logo'
              />
            </div>
            <div className='h-32 w-32'>
              <Image
                layout='intrinsic'
                className='items-center'
                src='/images/Group (4).png'
                width='100%'
                height='100%'
                objectFit='contain'
                alt='logo'
              />
            </div>
            <div className='h-32 w-32'>
              <Image
                layout='intrinsic'
                className='items-center'
                src='/images/g2081.png'
                width='100%'
                height='100%'
                objectFit='contain'
                alt='logo'
              />
            </div>
            <div className='h-32 w-32'>
              <Image
                layout='intrinsic'
                className='items-center'
                src='/images/Group 7 (1).png'
                width='100%'
                height='100%'
                objectFit='contain'
                alt='logo'
              />
            </div>
          </div>
        </section>

        <section>
          <div className='flex flex-col  items-center md:flex-row md:items-stretch mb-32 md:px-10'>
            <div className='w-6/12'>
              <h1 className='fon-sants font-bold md:text-5xl leading-normal'>
                Our Recommended <br /> Comfortable Residence
              </h1>
            </div>
            <div className='w-6/12'>
              <p className='font-inter text-sm text-gray-500 leading-loose mb-4'>
                We have a recommendation for a comfortable house for your family
                at a <br /> low price with a down payment of 10% without
                interest, can be paid in <br />
                installments for 5 years
              </p>
              <button className='bg-green-500 px-4 py-2 rounded-full text-white'>
                See More
              </button>
            </div>
          </div>
        </section>

        <section>
          <div className='flex items-end space-x-6 overflow-x-auto mb-32 px-10'>
            <div className='shrink-0 overflow-hidden rounded-2xl'>
              <div className='bg-office1 w-[300px] h-[476px] flex justify-center items-end'>
                <p className='text-center text-white mb-5'>
                  Permata Hijau Suites
                </p>
              </div>
            </div>
            <div className='shrink-0 overflow-hidden rounded-2xl'>
              <div className='bg-office2 w-[300px] h-[335px] flex justify-center items-end'>
                <p className='text-center text-white mb-5'>Cahaya Alam Setu</p>
              </div>
            </div>
            <div className='shrink-0 overflow-hidden rounded-2xl'>
              <div className='bg-office3 w-[300px] h-[476px] flex justify-center items-end'>
                <p className='text-center text-white mb-5'>
                  SouthGate Apartement
                </p>
              </div>
            </div>
            <div className='shrink-0 overflow-hidden rounded-2xl'>
              <div className='bg-office2 w-[300px] h-[242px] flex justify-center items-end'>
                <p className='text-center text-white mb-5'>Sharia Residence</p>
              </div>
            </div>
            <div className='shrink-0 overflow-hidden rounded-2xl'>
              <div className='bg-office4 w-[300px] h-[335px] flex justify-center items-end'>
                <p className='text-center text-white mb-5'>
                  SouthGate Apartement
                </p>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className='flex flex-col items-center justify-center mb-14'>
            <h1 className='font-sans md:text-4xl font-bold mb-10'>
              Testimonials Our Clients
            </h1>
            <p className='font-sans text-gray-600 text-center mb-5 leading-8'>
              Asooooyyy, I once bought a house with this protah agency! Now I
              live in <br /> a comfortable and safe apartment of course. Low
              prices, easy <br /> payments, no hassle at all
            </p>
            <div className='overflow-hidden rounded-full bg-gray-400 mb-5'>
              <div className='bg-employee w-20 h-20'></div>
            </div>
            <div>
              <p className='text-center'>Endang Susanti</p>
              <p className='text-center'>Private Employees</p>
            </div>
          </div>
        </section>

        <section>
          <div className='flex flex-col md:grid md:grid-cols-2 items-center justify-between space-y-4 bg-[#0A74A7] h-full md:h-40 px-10'>
            <div className='px-10'>
              <div className='flex items-center'>
                <Image
                  layout='intrinsic'
                  className='items-center'
                  src='/images/protah.png'
                  width='20%'
                  height='20%'
                  alt='logo'
                />
                <h1 className='text-white'>ProtAh.</h1>
              </div>
              <p className='text-white'>
                We ara a lorem ipsum dolor sit amet, consectetur adipiscing
                elit, sed do eiusmod tempor incididun.
              </p>
            </div>
            <div className='px-10'>
              <h1 className='text-white'>Newsletter</h1>
              <p className='text-white'>
                Be the first one to know about discounts, offers and events
                weekly in your mailbox. Unsubscribe whenever you like with one
                click.
              </p>
            </div>
          </div>
        </section>
      </main>

      <footer className=''></footer>
    </div>
  );
}

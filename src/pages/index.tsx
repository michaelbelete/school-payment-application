import Link from 'next/link';
import { useRouter } from 'next/router';
import { useSession } from 'next-auth/react';
import * as React from 'react';
export default function HomePage() {
  const router = useRouter();
  const { data: session, status } = useSession();

  if (session) {
    if (session.user?.image == 's') router.push('/user');
    else if (session.user?.image == 'a') router.push('/admin');
  }
  return (
    <div className='relative h-screen overflow-hidden bg-indigo-900'>
      <img
        src='https://images.unsplash.com/photo-1588072432836-e10032774350?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=872&q=80'
        className='absolute h-full w-full object-cover'
      />
      <div className='absolute inset-0 bg-black opacity-25'></div>
      <header className='absolute top-0 left-0 right-0 z-20'>
        <nav className='container mx-auto px-6 py-4 md:px-12'>
          <div className='items-center justify-between md:flex'>
            <div className='flex items-center justify-between'>
              <a href='#' className='text-white'>
                <svg
                  className='mr-2 w-8 fill-current'
                  xmlns='http://www.w3.org/2000/svg'
                  data-name='Capa 1'
                  viewBox='0 0 16.16 12.57'
                >
                  <defs></defs>
                  <path d='M14.02 4.77v7.8H9.33V8.8h-2.5v3.77H2.14v-7.8h11.88z'></path>
                  <path d='M16.16 5.82H0L8.08 0l8.08 5.82z'></path>
                </svg>
              </a>
              <div className='md:hidden'>
                <button className='text-white focus:outline-none'>
                  <svg
                    className='h-12 w-12'
                    viewBox='0 0 24 24'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      d='M4 6H20M4 12H20M4 18H20'
                      stroke='currentColor'
                      strokeWidth='2'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                    ></path>
                  </svg>
                </button>
              </div>
            </div>
            <div className='hidden items-center md:flex'>
              <a
                href='https://www.linkedin.com/in/michael-belete-8600a3176/'
                className='mx-3 cursor-pointer text-lg uppercase text-white hover:text-gray-300'
              >
                About Me
              </a>
              <Link href='/auth/login'>
                <a className='mx-3 cursor-pointer text-lg uppercase text-white hover:text-gray-300'>
                  Login
                </a>
              </Link>
            </div>
          </div>
        </nav>
      </header>
      <div className='container relative z-10 mx-auto flex items-center px-6 py-32 md:px-12 xl:py-40'>
        <div className='relative z-10 flex flex-col items-start lg:w-3/5 xl:w-2/5'>
          <span className='font-bold uppercase text-yellow-400'>
            By Michael Belete
          </span>
          <h1 className='mt-4 text-4xl font-bold leading-tight text-white sm:text-7xl'>
            Finance <br />
            management system
          </h1>
          <Link href='/auth/login'>
            <a
              href='#'
              className='mt-10 block rounded-lg bg-white py-3 px-4 text-lg font-bold uppercase text-gray-800 hover:bg-gray-100'
            >
              login
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
}

import Image from 'next/image';
import { useSession } from 'next-auth/react';
import React from 'react';
export default function Header() {
  const { data: session, status } = useSession();
  return (
    <>
      {/* <!-- header --> */}
      <header className='z-40 flex h-16 w-full items-center justify-between'>
        <div className='ml-6 block lg:hidden'></div>
        <div className='relative z-20 flex h-full flex-col justify-end bg-blue-600 px-3 text-white md:w-full'>
          <h2 className='relative top-10'></h2>
          <div className='relative flex w-full items-center justify-end space-x-4 p-1 pr-4'>
            <a href='#' className='relative block pr-2'>
              <Image
                alt='profile'
                src='https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80'
                width={40}
                height={40}
                className='mx-auto h-10 w-10 rounded-full object-cover '
              />
            </a>
            <button className='text-md flex items-center pb-2 text-white dark:text-white'>
              Welcome {session?.user?.name}
            </button>
          </div>
        </div>
      </header>
    </>
  );
}

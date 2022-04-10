import Link from 'next/link';
import React from 'react';

type Link = {
  name: string;
  url: string;
};

export default function SideBar(props: { links: Link[]; title: string }) {
  return (
    <div className='relative hidden h-screen w-80 shadow-lg lg:block'>
      <div className='h-full bg-white dark:bg-gray-700'>
        <div className='ml-8 flex items-center justify-start pt-6'>
          <p className='text-xl font-bold dark:text-white'>
            {props.title || 'PMS'}{' '}
          </p>
        </div>
        <nav className='mt-6'>
          <div>
            {props.links.map((link, index) => (
              <Link href={link.url} key={index}>
                <a className='my-2 flex w-full items-center justify-start border-l-4 border-blue-500 p-2 pl-6 text-gray-800 transition-colors duration-200 dark:text-white'>
                  <span className='mx-2 text-sm font-normal'>{link.name}</span>
                </a>
              </Link>
            ))}
            <a
              className='my-2 flex w-full items-center justify-start p-2 pl-6 text-gray-800 transition-colors duration-200 dark:text-white'
              href='#'
            >
              <span className='mx-2 text-sm font-normal'>Logout</span>
            </a>
          </div>
        </nav>
      </div>
    </div>
  );
}

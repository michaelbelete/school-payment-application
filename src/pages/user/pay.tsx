import React from 'react';

import UserAuthLayout from '@/components/layout/UserAuthLayout';

export default function Admin() {
  const date = new Date();
  const month = date.toLocaleString('default', { month: 'long' });

  return (
    <UserAuthLayout>
      <div className='mb-4 flex flex-col justify-between'>
        <h1 className='pb-4 text-2xl font-medium'>Pay Monthly Fee</h1>
        <div className='w-2/3 rounded bg-white p-4 shadow'>
          <form action='' method='post' className='flex flex-col gap-4'>
            <div>
              <label className='text-gray-700' htmlFor='animals'>
                Academic Year(E.C)
                <span className='required-dot text-red-500'>*</span>
              </label>

              <select
                id='academicYear'
                className='block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-primary-500 focus:outline-none focus:ring-primary-500 disabled:bg-gray-300'
                name='academicYear'
                disabled
              >
                <option value='1'>2014</option>
              </select>
            </div>
            <div>
              <label className='text-gray-700' htmlFor='animals'>
                Current Month
                <span className='required-dot text-red-500'>*</span>
              </label>

              <select
                id='academicYear'
                className='block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-primary-500 focus:outline-none focus:ring-primary-500 disabled:bg-gray-300'
                name='academicYear'
                disabled
              >
                <option value='1'>{month}</option>
              </select>
            </div>
            <div className=' relative '>
              <label htmlFor='required-email' className='pb-2 text-gray-700'>
                Monthly Payment Amount(Birr)
                <span className='required-dot text-red-500'>*</span>
              </label>
              <input
                type='number'
                min='0.00'
                max='10000.00'
                step='0.01'
                className='w-full flex-1 appearance-none rounded-lg border border-gray-300 bg-white py-2 px-4 text-base text-gray-700 placeholder-gray-400 shadow-sm focus:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 disabled:bg-gray-300'
                name='number'
                disabled
                value={2000}
                placeholder='Enter Amount'
              />
            </div>
            <div className=' relative '>
              <label htmlFor='required-email' className='pb-2 text-gray-700'>
                Penalty(Birr) -{' '}
                <em>if the penalty is not zero that means you are late</em>
                <span className='required-dot text-red-500'>*</span>
              </label>
              <input
                type='number'
                min='0.00'
                max='10000.00'
                step='0.01'
                className='w-full flex-1 appearance-none rounded-lg border border-gray-300 bg-white py-2 px-4 text-base text-gray-700 placeholder-gray-400 shadow-sm focus:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 disabled:bg-gray-300'
                name='number'
                disabled
                value={0}
                placeholder='Enter Amount if the person pay late'
              />
            </div>

            <div className='py-4'>
              <button className='text-md rounded bg-blue-600 px-4 py-2 text-white hover:bg-blue-500 disabled:bg-gray-400'>
                <div className='flex flex-row gap-2'>Pay Now</div>
              </button>
            </div>
          </form>
        </div>
      </div>
    </UserAuthLayout>
  );
}

import React from 'react';

import AdminAuthLayout from '@/components/layout/AdminAuthLayout';

const Years = () => {
  let result = '';
  for (let year = 2012; year < 2025; year++) {
    result += `<options value="${year}">${year}</options>`;
  }

  return result;
};
export default function Admin() {
  return (
    <AdminAuthLayout>
      <div className='mb-4 flex flex-col justify-between'>
        <h1 className='pb-4 text-2xl font-medium'>Create Academic Year</h1>
        <div className='w-2/3 rounded bg-white p-4 shadow'>
          <form action='' method='post' className='flex flex-col gap-4'>
            <div>
              <label className='text-gray-700' htmlFor='animals'>
                Academic Year(E.C)
                <span className='required-dot text-red-500'>*</span>
              </label>

              <select
                id='academicYear'
                className='block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-primary-500 focus:outline-none focus:ring-primary-500'
                name='academicYear'
              >
                <option value=''>Select an option</option>
                <option value='2012'>2012</option>
                <option value='2013'>2013</option>
                <option value='2014'>2014</option>
                <option value='2015'>2015</option>
                <option value='2016'>2016</option>
                <option value='2017'>2017</option>
                <option value='2018'>2018</option>
                <option value='2019'>2019</option>
                <option value='2020'>2020</option>
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
                className='w-full flex-1 appearance-none rounded-lg border border-gray-300 bg-white py-2 px-4 text-base text-gray-700 placeholder-gray-400 shadow-sm focus:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600'
                name='number'
                placeholder='Enter Amount'
              />
            </div>
            <div className=' relative '>
              <label htmlFor='required-email' className='pb-2 text-gray-700'>
                Penalty(Birr)
                <span className='required-dot text-red-500'>*</span>
              </label>
              <input
                type='number'
                min='0.00'
                max='10000.00'
                step='0.01'
                className='w-full flex-1 appearance-none rounded-lg border border-gray-300 bg-white py-2 px-4 text-base text-gray-700 placeholder-gray-400 shadow-sm focus:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600'
                name='number'
                placeholder='Enter Amount if the person pay late'
              />
            </div>
            <div className=' relative flex flex-row gap-4'>
              <div>
                <label htmlFor='required-email' className='pb-2 text-gray-700'>
                  Start Day of the month
                  <span className='required-dot text-red-500'>*</span>
                </label>
                <input
                  type='number'
                  min='0.00'
                  max='10000.00'
                  step='0.01'
                  className='w-full flex-1 appearance-none rounded-lg border border-gray-300 bg-white py-2 px-4 text-base text-gray-700 placeholder-gray-400 shadow-sm focus:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600'
                  name='number'
                  placeholder='Enter Amount if the person pay late'
                />
              </div>
              <div>
                <label htmlFor='required-email' className='pb-2 text-gray-700'>
                  End Day of the payment
                  <span className='required-dot text-red-500'>*</span>
                </label>
                <input
                  type='number'
                  min='0.00'
                  max='10000.00'
                  step='0.01'
                  className='w-full flex-1 appearance-none rounded-lg border border-gray-300 bg-white py-2 px-4 text-base text-gray-700 placeholder-gray-400 shadow-sm focus:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600'
                  name='number'
                  placeholder='Enter Amount if the person pay late'
                />
              </div>
            </div>

            <div className='py-4'>
              <button className='text-md rounded bg-blue-600 px-4 py-2 text-white hover:bg-blue-500 disabled:bg-gray-400'>
                <div className='flex flex-row gap-2'>Start Academic Year</div>
              </button>
            </div>
          </form>
        </div>
      </div>
    </AdminAuthLayout>
  );
}

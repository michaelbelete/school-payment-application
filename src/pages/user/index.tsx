import Link from 'next/link';
import React from 'react';
import { AiTwotoneMoneyCollect } from 'react-icons/ai';

import UserAuthLayout from '@/components/layout/UserAuthLayout';
import PaymentTable from '@/components/user/PaymentTable';

export default function user() {
  return (
    <UserAuthLayout>
      <div className='mb-4 flex flex-row justify-center gap-6'>
        <h1 className='mt-2 pb-1 text-2xl font-medium'>Monthly Payments</h1>
        <Link href='/user/pay' passHref>
          <button className='text-md rounded bg-green-600 py-1 px-4 text-white hover:bg-green-500 disabled:bg-gray-400'>
            <div className='flex flex-row gap-2'>
              <AiTwotoneMoneyCollect size={24} /> Pay Monthly Fee
            </div>
          </button>
        </Link>
      </div>
      <PaymentTable />
    </UserAuthLayout>
  );
}

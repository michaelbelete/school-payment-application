import Link from 'next/link';
import React from 'react';
import { AiOutlinePlus } from 'react-icons/ai';

import PaymentTable from '@/components/admin/PaymentTable';
import AdminAuthLayout from '@/components/layout/AdminAuthLayout';
export default function Admin() {
  return (
    <AdminAuthLayout>
      <div className='mb-4 flex flex-row justify-between'>
        <h1 className='pb-4 text-2xl font-medium'>Manage Monthly Payments</h1>
        <Link href='/admin/academicYear/create' passHref>
          <button className='text-md rounded bg-blue-600 py-1 px-4 text-white hover:bg-blue-500 disabled:bg-gray-400'>
            <div className='flex flex-row gap-2'>
              <AiOutlinePlus size={24} /> Start Academic Year
            </div>
          </button>
        </Link>
      </div>
      <PaymentTable />
    </AdminAuthLayout>
  );
}

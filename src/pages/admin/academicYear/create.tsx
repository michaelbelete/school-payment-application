import React from 'react';

import AdminAuthLayout from '@/components/layout/AdminAuthLayout';
export default function Admin() {
  return (
    <AdminAuthLayout>
      <div className='mb-4 flex flex-row justify-between'>
        <h1 className='pb-4 text-2xl font-medium'>Create Academic Year</h1>
      </div>
    </AdminAuthLayout>
  );
}

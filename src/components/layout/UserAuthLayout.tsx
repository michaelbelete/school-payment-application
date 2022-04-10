import React, { ReactNode } from 'react';

import Header from '../common/Header';
import SideBar from '../../components/common/SideBar';
type Props = {
  children: ReactNode;
};

const AdminAuthLayout: React.FC<Props> = (props) => {
  const links = [
    {
      name: 'Home',
      url: '/user',
    },
  ];
  return (
    <div className='relative h-screen overflow-hidden bg-gray-100 dark:bg-gray-800'>
      {/* <!-- sidebar --> */}
      <div className='flex items-start justify-between'>
        <SideBar links={links} title='Parent Portal' />
        {/* <!-- div app --> */}
        <div className='flex w-full flex-col md:space-y-4'>
          <Header />
          {/* <!-- div body --> */}
          <div className='h-screen overflow-auto px-4 pb-24 md:px-6'>
            {props.children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminAuthLayout;

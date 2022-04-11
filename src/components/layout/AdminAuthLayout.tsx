import { useRouter } from 'next/router';
import { useSession } from 'next-auth/react';
import React, { ReactNode } from 'react';

import Header from '../common/Header';
import SideBar from '../../components/common/SideBar';
type Props = {
  children: ReactNode;
};

const AdminAuthLayout: React.FC<Props> = (props) => {
  const router = useRouter();
  const { data: session, status } = useSession();
  const links = [
    {
      name: 'Dashboard',
      url: '/admin',
    },
  ];

  React.useEffect(() => {
    if (!session) {
      router.push('/');
    } else if (session?.user?.image !== 'a') {
      router.push('/user');
    }
  }, [session]);
  return (
    <div className='relative h-screen overflow-hidden bg-gray-100 dark:bg-gray-800'>
      {/* <!-- sidebar --> */}
      <div className='flex items-start justify-between'>
        <SideBar links={links} title='Administrator' />
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

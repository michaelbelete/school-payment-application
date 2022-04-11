export default function Analytics() {
  return (
    <div className='py-4 '>
      <div className='grid grid-cols-3 gap-4'>
        <div className='rounded-2xl bg-white p-4 shadow-lg dark:bg-gray-800'>
          <div className='flex items-center'>
            <p className='text-md font-bold text-black dark:text-white'>
              This Month
            </p>
          </div>
          <div className='flex flex-col justify-start'>
            <p className='my-2 text-left text-4xl font-bold text-gray-700 dark:text-gray-100'>
              20
            </p>
            <div className='flex items-center text-sm text-gray-500'>
              Student Paid
            </div>
          </div>
        </div>
        <div className='rounded-2xl bg-white p-4 shadow-lg dark:bg-gray-800'>
          <div className='flex items-center'>
            <p className='text-md font-bold  text-black  dark:text-white'>
              This Month
            </p>
          </div>
          <div className='flex flex-col justify-start'>
            <p className='my-2 text-left text-4xl font-bold text-gray-700 dark:text-gray-100'>
              20
              <span className='text-sm'>birr</span>
            </p>
            <div className='flex items-center text-sm text-gray-500'>
              Collected
            </div>
          </div>
        </div>
        <div className='rounded-2xl bg-white p-4 shadow-lg dark:bg-gray-800'>
          <div className='flex items-center'>
            <p className='text-md font-bold  text-black  dark:text-white'>
              Currently
            </p>
          </div>
          <div className='flex flex-col justify-start'>
            <p className='my-2 text-left text-4xl font-bold text-gray-700 dark:text-gray-100'>
              50,000
              <span className='text-sm'>birr</span>
            </p>
            <div className='flex items-center text-sm text-gray-500'>
              Total Collected
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

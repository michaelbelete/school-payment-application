import { useRouter } from 'next/router';
import { signIn } from 'next-auth/react';
import React from 'react';

export default function Login() {
  const router = useRouter();
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const callbackUrl =
    typeof router.query?.callbackUrl === 'string'
      ? router.query.callbackUrl
      : '/jobs';

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const response = await signIn<'credentials'>('credentials', {
      redirect: false,
      email,
      password,
      callbackUrl,
    });

    if (response.error) {
      if (response.status === 401) alert('Your email or password is incorrect');
      else alert('An error occurred' + response.error);
    } else {
      router.push('/');
    }
  };
  return (
    <div className='flex h-screen flex-row items-center justify-center bg-gray-100 pt-9 '>
      <div className='flex w-full max-w-md flex-col items-center rounded-lg bg-white py-10 shadow-lg dark:bg-gray-800 sm:px-6 md:px-8 lg:px-10'>
        <div className='self-center text-xl font-light text-gray-600 dark:text-white sm:text-2xl'>
          Login To Your Account
        </div>
        <div className='mt-8'>
          <form onSubmit={handleSubmit}>
            <div className='mb-2 flex flex-col'>
              <div className='relative flex '>
                <span className='inline-flex items-center  rounded-l-md border-t border-l border-b border-gray-300 bg-white  px-3 text-sm text-gray-500 shadow-sm'>
                  <svg
                    width='15'
                    height='15'
                    fill='currentColor'
                    viewBox='0 0 1792 1792'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path d='M1792 710v794q0 66-47 113t-113 47h-1472q-66 0-113-47t-47-113v-794q44 49 101 87 362 246 497 345 57 42 92.5 65.5t94.5 48 110 24.5h2q51 0 110-24.5t94.5-48 92.5-65.5q170-123 498-345 57-39 100-87zm0-294q0 79-49 151t-122 123q-376 261-468 325-10 7-42.5 30.5t-54 38-52 32.5-57.5 27-50 9h-2q-23 0-50-9t-57.5-27-52-32.5-54-38-42.5-30.5q-91-64-262-182.5t-205-142.5q-62-42-117-115.5t-55-136.5q0-78 41.5-130t118.5-52h1472q65 0 112.5 47t47.5 113z'></path>
                  </svg>
                </span>
                <input
                  type='text'
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  id='sign-in-email'
                  className=' w-full flex-1 appearance-none rounded-r-lg border border-gray-300 bg-white py-2 px-4 text-base text-gray-700 placeholder-gray-400 shadow-sm focus:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-600'
                  placeholder='Your email'
                />
              </div>
            </div>
            <div className='mb-6 flex flex-col'>
              <div className='relative flex '>
                <span className='inline-flex items-center  rounded-l-md border-t border-l border-b border-gray-300 bg-white  px-3 text-sm text-gray-500 shadow-sm'>
                  <svg
                    width='15'
                    height='15'
                    fill='currentColor'
                    viewBox='0 0 1792 1792'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path d='M1376 768q40 0 68 28t28 68v576q0 40-28 68t-68 28h-960q-40 0-68-28t-28-68v-576q0-40 28-68t68-28h32v-320q0-185 131.5-316.5t316.5-131.5 316.5 131.5 131.5 316.5q0 26-19 45t-45 19h-64q-26 0-45-19t-19-45q0-106-75-181t-181-75-181 75-75 181v320h736z'></path>
                  </svg>
                </span>
                <input
                  type='password'
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  id='sign-in-email'
                  className=' w-full flex-1 appearance-none rounded-r-lg border border-gray-300 bg-white py-2 px-4 text-base text-gray-700 placeholder-gray-400 shadow-sm focus:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-600'
                  placeholder='Your password'
                />
              </div>
            </div>
            <div className='flex w-full'>
              <button
                type='submit'
                className='w-full rounded-lg  bg-blue-600 py-2 px-4 text-center text-base font-semibold text-white shadow-md transition duration-200 ease-in hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2  focus:ring-offset-blue-200 '
              >
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

'use client';

import SignIn from '@/components/features/auth/sign-in';

export default function ResearchError() {
  return (
    <div className='flex flex-col items-center justify-center gap-6'>
      <h1 className='text-4xl font-bold'>Oops, something went wrong</h1>
      <p>Try signing in again</p>
      <SignIn />
    </div>
  );
}

import { PropsWithChildren } from 'react';
import { ResearchForm } from '@/components/features/job-search/research-form';

export default function ResearchLayout({ children }: PropsWithChildren) {
  return (
    <div className='flex flex-col w-full p-16 gap-8'>
      <ResearchForm />
      {children}
    </div>
  );
}

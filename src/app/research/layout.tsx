import { PropsWithChildren } from 'react';

export default function ResearchLayout({ children }: PropsWithChildren) {
  return <div className='flex flex-col w-full h-full p-24'>{children}</div>;
}

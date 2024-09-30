import { PropsWithChildren } from 'react';

const ResearchOffersLayout = ({ children }: PropsWithChildren) => {
  return (
    <>
      <h1 className='text-4xl font-bold'>Here are the corresponding offers</h1>
      <div className='grid grid-cols-3 gap-8 mt-8'>{children}</div>
    </>
  );
};
export default ResearchOffersLayout;

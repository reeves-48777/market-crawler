import { prisma } from '@/lib/prisma';
import { auth } from '@/lib/auth';
import ResearchButton from './research-button';
import JobView from './job-view';

export default async function ResearchTester() {
  const session = await auth();

  if (!session || !session.user) {
    throw new Error('User not authenticated');
  }

  const offers = await prisma.jobOffer.findMany({
    where: {
      research: {
        userId: session.user.id,
      },
    },
  });

  return (
    <>
      <div className='grid grid-cols-2 max-md:grid-cols-1 gap-6'>
        {offers.map((offer) => (
          <JobView
            key={offer.id}
            job={offer}
          />
        ))}
      </div>
      <ResearchButton />
    </>
  );
}

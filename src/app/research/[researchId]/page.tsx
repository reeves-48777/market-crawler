import JobView from '@/components/features/job-search/job-view';
import { prisma } from '@/lib/prisma';

type ResearchOffersParams = {
  params: {
    researchId: string;
  };
};

const ResearchOffers = async ({ params }: ResearchOffersParams) => {
  const offers = await prisma.jobOffer.findMany({
    where: {
      researchId: params.researchId,
    },
  });

  return (
    <>
      {offers.map((offer) => (
        <JobView
          key={offer.id}
          job={offer}
        />
      ))}
    </>
  );
};

export default ResearchOffers;

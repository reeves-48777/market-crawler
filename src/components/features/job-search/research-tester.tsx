import { prisma } from '@/lib/prisma';
import { auth } from '@/lib/auth';
import JobView from './job-view';
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination';

export default async function ResearchTester() {
  const session = await auth();

  if (!session || !session.user) {
    throw new Error('User not authenticated');
  }

  const latestSearch = await prisma.jobSearch.findFirst({
    where: {
      userId: session.user.id,
    },
    orderBy: {
      createdAt: 'desc',
    },
    include: {
      offers: true,
    },
  });
  const offers = latestSearch?.offers || [];

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
      <Pagination className='mt-8'>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious />
          </PaginationItem>
          <PaginationItem>
            <PaginationLink isActive>1</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink>2</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink>3</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>
          <PaginationItem>
            <PaginationNext />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </>
  );
}

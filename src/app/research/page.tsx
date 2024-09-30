// import { ResearchForm } from '@/components/features/job-search/research-form';
// import ResearchTester from '@/components/features/job-search/research-tester';
import { prisma } from '@/lib/prisma';
import { auth } from '@/lib/auth';
import { ResearchView } from '@/components/features/job-search/research-view';
import { NewJobResearch } from '@/components/features/job-search/new-research';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { useRef, useState } from 'react';
import { Input } from '@/components/ui/input';
import { JobSearch } from '@prisma/client';

export default async function ResearchPage() {
  const session = await auth();

  if (!session || !session.user) {
    throw new Error('User not authenticated');
  }

  const jobResearches = await prisma.jobSearch.findMany({
    where: {
      userId: session.user.id,
    },
  });

  // TODO: add real pagination support
  // TODO: wrap researches list in a client component
  // TODO: within the client component, add a global dialog

  return (
    <>
      <h1 className='text-4xl font-bold'>Here are your researches</h1>
      <div className='grid grid-cols-3 mt-8 gap-6'>
        <NewJobResearch />
        {jobResearches.map((research) => (
          <ResearchView
            key={research.id}
            research={research}
          />
        ))}
      </div>
    </>
  );
}

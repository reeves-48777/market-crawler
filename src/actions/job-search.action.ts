'use server';

import {
  FreeworkAPIParams,
  FreeworkAPIResponse,
  FreeworkMapper,
} from '@/lib/types/freework';
import { buildUrlWithQueryParams, transformFromMapper } from '@/lib/utils';
import { prisma } from '@/lib/prisma';
import { auth } from '@/lib/auth';

const createNewJobResearchWithOffers = async (
  userId: string,
  researchData: {
    title: string;
    parameters: FreeworkAPIParams;
    offers: any[];
  }
) => {
  return await prisma.$transaction(async (prisma) => {
    const jobSearch = await prisma.jobSearch.create({
      data: {
        title: researchData.title,
        parameters: JSON.stringify(researchData.parameters),
        user: {
          connect: {
            id: userId,
          },
        },
        offers: {
          create: researchData.offers.map((offer) => ({
            title: offer.title,
            contractType: JSON.stringify(offer.contractType),
            remoteMode: JSON.stringify(offer.remoteMode),
            company: JSON.stringify(offer.company.name),
            location: JSON.stringify(offer.location.locality),
            dailyIncome: offer.dailyIncome,
            annualIncome: offer.annualIncome,
            currency: offer.currency,
            duration: offer.duration,
            publicationDate: offer.publicationDate,
          })),
        },
      },
    });
    return jobSearch;
  });
};

export const jobSearchAction = async (params: FreeworkAPIParams) => {
  const session = await auth();

  if (!session || !session.user) {
    throw new Error('User not authenticated');
  }

  const url = buildUrlWithQueryParams(
    'https://www.free-work.com/api/job_postings',
    params
  );

  const response = await fetch(url.toString(), { method: 'GET' });

  if (!response.ok) {
    throw new Error('Failed to fetch jobs from freework');
  }

  const rawData: FreeworkAPIResponse = await response.json();

  const research = {
    title: params.searchKeywords,
    parameters: params,
    offers: rawData['hydra:member'].map((rawJobData: object) =>
      transformFromMapper(rawJobData, FreeworkMapper)
    ),
  };

  createNewJobResearchWithOffers(session.user?.id!, research)
    .then((result) => {
      console.log('job search created successfully: ', result);
    })
    .catch((error) => {
      console.error('error creating job search: ', error);
    })
    .finally(async () => {
      await prisma.$disconnect();
    });
};

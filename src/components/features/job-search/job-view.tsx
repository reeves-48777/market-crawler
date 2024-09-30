import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from '@/components/ui/card';
import { JobOffer } from '@prisma/client';
import { Clock, Laptop, PiggyBank, Signature } from 'lucide-react';

type JobViewProps = {
  job: JobOffer | any;
};

export default function JobView({ job }: JobViewProps) {
  const contractType = JSON.parse(job.contractType);
  const remoteMode = JSON.parse(job.remoteMode);

  return (
    <Card>
      <CardHeader>
        <CardTitle>{job.title}</CardTitle>
        <CardDescription className='flex flex-row justify-between'>
          <em>{`published at ${new Date(
            job.publicationDate
          ).toLocaleDateString()}`}</em>
          <strong>{JSON.parse(job.company)}</strong>
        </CardDescription>
      </CardHeader>
      <CardContent className='grid grid-rows-2 grid-cols-2 gap-2'>
        <div className='flex flex-row gap-3 items-center'>
          <PiggyBank />
          <span>
            {job.annualIncome
              ? `${job.annualIncome} / year`
              : `${job.dailyIncome} / day`}
          </span>
        </div>
        <div className='flex flex-row gap-3 items-center'>
          <Clock />
          <span>{`${job.duration} month(s)`}</span>
        </div>
        <div className='flex flex-row gap-3 items-center'>
          <Laptop />
          <span>
            {Array.isArray(remoteMode) ? remoteMode.join(', ') : remoteMode}
          </span>
        </div>
        <div className='flex flex-row gap-3 items-center'>
          <Signature />
          <span>
            {Array.isArray(contractType)
              ? contractType.join(', ')
              : contractType}
          </span>
        </div>
      </CardContent>
    </Card>
  );
}

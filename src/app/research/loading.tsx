import { Skeleton } from '@/components/ui/skeleton';

export default function ResearchLoading() {
  return (
    <div className='grid grid-cols-2 max-md:grid-cols-1 gap-6'>
      <Skeleton />
      <Skeleton />
      <Skeleton />
      <Skeleton />
      <Skeleton />
    </div>
  );
}

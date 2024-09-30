import { Card, CardContent } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';

const ResearchOffersLoading = () => {
  return (
    <>
      <Card>
        <CardContent>
          <Skeleton className='h-2 w-full' />
        </CardContent>
      </Card>
      <Card>
        <CardContent>
          <Skeleton className='h-2 w-full' />
        </CardContent>
      </Card>
      <Card>
        <CardContent>
          <Skeleton className='h-2 w-full' />
        </CardContent>
      </Card>
      <Card>
        <CardContent>
          <Skeleton className='h-2 w-full' />
        </CardContent>
      </Card>
      <Card>
        <CardContent>
          <Skeleton className='h-2 w-full' />
        </CardContent>
      </Card>
    </>
  );
};

export default ResearchOffersLoading;

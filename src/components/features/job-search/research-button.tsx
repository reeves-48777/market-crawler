'use client';

import { Button } from '@/components/ui/button';
import { jobSearchAction } from '@/actions/job-search.action';
import { useRouter } from 'next/navigation';

export default function ResearchButton() {
  const router = useRouter();

  const handleClick = async () => {
    await jobSearchAction({
      page: 1,
      itemsPerPage: 16,
      searchKeywords: 'Développeur nextJS',
    });
    router.refresh();
  };
  return (
    <Button
      variant='outline'
      size='lg'
      onClick={handleClick}
    >
      Test Research
    </Button>
  );
}

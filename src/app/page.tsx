import { auth } from '@/lib/auth';
import { Card } from '@/components/ui/card';
import ChartDonut from '@/components/features/charts/donut';
import ChartRadial from '@/components/features/charts/radial';
import ChartRadar from '@/components/features/charts/radar';
import ChartLine from '@/components/features/charts/line';
import ChartBar from '@/components/features/charts/bar';
import { Button, buttonVariants } from '@/components/ui/button';
import { PlusCircle } from 'lucide-react';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import ChartArea from '@/components/features/charts/area';
import { cn } from '@/lib/utils';
import Link from 'next/link';

export default async function Home() {
  const session = await auth();

  const sideOffset = 32;

  if (session && session.user) {
    return (
      <main className='flex flex-col h-full w-full items-start pl-32 pt-16 pb-12 pr-12 overflow-y-auto'>
        <h1 className='text-4xl font-semibold'>
          Welcome {session.user.name?.split(' ').at(0)} !
        </h1>
        <h2 className='text-xl'>
          Here are the results from your previous researches
        </h2>
        <div className='flex w-full h-full mt-12 gap-64'>
          <div className='grid w-full h-full grid-cols-3 2xl:grid-cols-4 grid-rows-2 gap-12'>
            <ChartRadial className='col-start-1 row-start-1' />
            <ChartDonut className='col-start-1 row-start-2' />
            <ChartRadar className='max-2xl:hidden col-start-2 row-start-2' />
            <ChartArea className='col-start-2 2xl:col-start-3 row-start-2' />
            <ChartLine className='col-start-2 row-start-1 col-span-2' />
            <ChartBar className='max-2xl:hidden col-start-4 row-start-1 row-span-2' />
          </div>
          <Card className='w-20 h-full flex flex-col items-center justify-start gap-8 py-4'>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Link
                    href='/research'
                    className={cn(
                      buttonVariants({ variant: 'secondary', size: 'icon' }),
                      'rounded-full size-12'
                    )}
                  >
                    <PlusCircle />
                  </Link>
                </TooltipTrigger>
                <TooltipContent
                  side='left'
                  sideOffset={sideOffset}
                  className='text-xl'
                >
                  New research
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                    variant='outline'
                    size='icon'
                    className='rounded-full'
                  >
                    <Avatar>
                      <AvatarFallback className='bg-transparent'>
                        R
                      </AvatarFallback>
                    </Avatar>
                  </Button>
                </TooltipTrigger>
                <TooltipContent
                  side='left'
                  sideOffset={sideOffset}
                  className='text-xl bg-muted text-primary'
                >
                  React developer
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                    variant='outline'
                    size='icon'
                    className='rounded-full'
                  >
                    <Avatar>
                      <AvatarFallback className='bg-transparent'>
                        N
                      </AvatarFallback>
                    </Avatar>
                  </Button>
                </TooltipTrigger>
                <TooltipContent
                  side='left'
                  sideOffset={sideOffset}
                  className='text-xl bg-muted text-primary'
                >
                  NextJS developer
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                    variant='outline'
                    size='icon'
                    className='rounded-full'
                  >
                    <Avatar>
                      <AvatarFallback className='bg-transparent'>
                        T
                      </AvatarFallback>
                    </Avatar>
                  </Button>
                </TooltipTrigger>
                <TooltipContent
                  side='left'
                  sideOffset={40}
                  className='text-xl bg-muted text-primary'
                >
                  ThreeJS developer
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </Card>
        </div>
      </main>
    );
  }
  return (
    <main className='flex h-full w-full items-center justify-center'></main>
  );
}

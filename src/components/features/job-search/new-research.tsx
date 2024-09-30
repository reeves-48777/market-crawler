'use client';

import { Button, buttonVariants } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Plus } from 'lucide-react';
import { motion, spring } from 'framer-motion';
import { cn } from '@/lib/utils';

const NewJobResearch = () => {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      transition={{
        type: 'spring',
        damping: 10,
        stiffness: 200,
      }}
    >
      <Card className='hover:bg-muted/20 border-dashed w-full h-full'>
        <CardContent className='p-0 flex h-full items-center justify-center gap-4'>
          <h1 className='text-xl font-semibold'>Create new</h1>
          <motion.div
            initial={{ scale: 1, rotate: 0 }}
            whileHover={{
              scale: 1.07,
              rotate: '-90deg',
            }}
            className={cn(
              buttonVariants({ variant: 'outline' }),
              'rounded-full size-16 group hover:bg-background'
            )}
          >
            <Plus className='text-muted-foreground group-hover:text-primary' />
          </motion.div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export { NewJobResearch };

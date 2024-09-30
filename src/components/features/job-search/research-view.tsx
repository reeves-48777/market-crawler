'use client';

import { JobSearch } from '@prisma/client';
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Eye, Maximize2, Pen, Save, Trash2 } from 'lucide-react';
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuTrigger,
} from '@/components/ui/context-menu';

import * as React from 'react';
import { motion } from 'framer-motion';
import { Button, buttonVariants } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader } from '@/components/ui/dialog';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { DialogTitle } from '@radix-ui/react-dialog';

type ResearchViewProps = {
  research: JobSearch;
};

const ResearchView = ({ research }: ResearchViewProps) => {
  const iconSize = 16;

  const [isDialogOpen, setIsDialogOpen] = React.useState(false);

  const parameters = JSON.parse(research.parameters);

  return (
    <>
      {/* <Dialog
        open={isDialogOpen}
        onOpenChange={() => setIsDialogOpen(false)}
      >
        <DialogHeader>  
          <DialogTitle>{research.title}</DialogTitle>
        </DialogHeader>
        <DialogContent className='w-[54rem]'>
          <div className='flex flex-col gap-2'>
            <span className='text-muted-foreground italic'>
              {research.createdAt.toLocaleString()}
            </span>
          </div>

          <div className='flex flex-row gap-2 mt-4'>
            <div className='flex flex-col gap-2 items-center'>
              <Button
                size='icon'
                variant='ghost'
              >
                <Save size={iconSize} />
              </Button>
              <Button
                size='icon'
                variant='ghost'
              >
                <Pen size={iconSize} />
              </Button>
              <Link
                className={cn(
                  buttonVariants({ variant: 'ghost', size: 'icon' })
                )}
                href={`/research/${research.id}`}
              >
                <Eye size={iconSize} />
              </Link>
              <Button
                size='icon'
                variant='ghost'
                className='text-destructive hover:bg-destructive/40'
              >
                <Trash2 size={iconSize} />
              </Button>
            </div>
            <Separator
              orientation='vertical'
              className='ml-2 mr-6'
            />
            <div className='grid grid-cols-2 gap-8'>
              <div className='flex flex-col gap-2'>
                <strong>Salary</strong>
                <Label className='flex flex-row gap-2 items-center justify-between'>
                  Daily
                  <Input
                    value={parameters.minDailySalary}
                    className='w-20'
                  />
                </Label>
                <Label className='flex flex-row gap-2 items-center justify-between'>
                  Annual
                  <Input
                    value={parameters.minAnnualSalary}
                    className='w-20'
                  />
                </Label>
              </div>
              <div className='flex flex-col gap-2'>
                <strong>Duration</strong>
                <Label className='flex flex-row gap-2 items-center justify-between'>
                  Min
                  <Input
                    value={parameters.minDuration}
                    className='w-20'
                  />
                </Label>
              </div>
              <div className='flex flex-col gap-2'>
                <strong>Contract type</strong>
                <Checkbox>Freelance</Checkbox>
                <Checkbox>Contract</Checkbox>
              </div>
              <div className='flex flex-col gap-2'>
                <strong>Remote mode</strong>
                <Checkbox>Full remote</Checkbox>
                <Checkbox>Partial</Checkbox>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog> */}
      <motion.div whileHover={{ scale: 1.02 }}>
        <Card className='group'>
          <ContextMenu>
            <ContextMenuTrigger asChild>
              <CardHeader className='flex flex-row items-center gap-4'>
                <div className='flex-1'>
                  <CardTitle className='text-xl'>{research.title}</CardTitle>
                  <CardDescription className='italic'>
                    {research.createdAt.toLocaleString()}
                  </CardDescription>
                </div>
                <div className='flex flex-col items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-100 ease-in-out'>
                  <Button
                    size='icon'
                    variant='ghost'
                    onClick={() => setIsDialogOpen(true)}
                  >
                    <Maximize2 size={iconSize} />
                  </Button>
                  <Link
                    href={`/research/${research.id}`}
                    className={cn(
                      buttonVariants({
                        variant: 'ghost',
                        size: 'icon',
                      })
                    )}
                  >
                    <Eye size={iconSize} />
                  </Link>
                </div>
              </CardHeader>
            </ContextMenuTrigger>
            <ContextMenuContent>
              <ContextMenuItem>
                <IconContainer>
                  <Maximize2 size={iconSize} />
                </IconContainer>
                Maximize
              </ContextMenuItem>
              <ContextMenuItem>
                <IconContainer>
                  <Pen size={iconSize} />
                </IconContainer>
                Edit
              </ContextMenuItem>
              <ContextMenuItem asChild>
                <Link href={`/research/${research.id}`}>
                  <IconContainer>
                    <Eye size={iconSize} />
                  </IconContainer>
                  View corresponding offers
                </Link>
              </ContextMenuItem>
              <ContextMenuItem className='text-destructive'>
                <IconContainer>
                  <Trash2 size={iconSize} />
                </IconContainer>
                Delete
              </ContextMenuItem>
            </ContextMenuContent>
          </ContextMenu>
        </Card>
      </motion.div>
    </>
  );
};

const IconContainer = ({ children }: React.PropsWithChildren) => {
  const child = React.Children.only(children);
  //@ts-ignore
  return React.cloneElement(child, {
    className: 'mr-4',
  });
};

export { ResearchView };

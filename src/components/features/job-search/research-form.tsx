'use client';

import { jobSearchAction } from '@/actions/job-search.action';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';

import SalaryForm from './salary-form';
import MultiSelect from './multi-select';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { useRouter } from 'next/navigation';

const ContractTypeEnum = z.enum([
  'freelance',
  'fixed',
  'contract',
  'internship',
  'apprenticeship',
]);

const RemoteModeEnum = z.enum(['full', 'partial', 'none']);

const researchFormSchema = z.object({
  search: z.string().min(1),
  duration: z.coerce
    .number()
    .min(1, 'You cannot select a duration of 0 months')
    .max(36),
  salary: z.object({
    daily: z.number().min(0).max(2000, "woooow isn't it a lot of money ?"),
    annual: z
      .number()
      .min(0)
      .max(120000, "that's already a lot of money don't you think ?"),
  }),
  contractType: z.array(ContractTypeEnum).min(0),
  remoteMode: z.array(RemoteModeEnum).min(0),
});

export function ResearchForm() {
  const router = useRouter();
  const form = useForm<z.infer<typeof researchFormSchema>>({
    resolver: zodResolver(researchFormSchema),
    defaultValues: {
      search: '',
      salary: {
        daily: 350,
        annual: 30000,
      },
      duration: 6,
      contractType: ['freelance'],
      remoteMode: ['full'],
    },
  });

  async function onSubmit(values: z.infer<typeof researchFormSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
    await jobSearchAction({
      page: 1,
      itemsPerPage: 16,
      searchKeywords: values.search,
      minDuration: values.duration,
      contracts: values.contractType.map((val) => {
        switch (val) {
          case 'freelance':
            return 'contractor';
          case 'fixed':
            return 'fixed-term';
          case 'contract':
            return 'permanent';
          case 'internship':
            return 'internship';
          case 'apprenticeship':
            return 'apprenticeship';
        }
      }),
      minDailySalary: values.salary.daily,
      minAnnualSalary: values.salary.annual,
      remoteMode: values.remoteMode,
    });

    router.refresh();
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className='flex flex-col gap-2'
      >
        <div className='flex flex-row gap-2 items-center'>
          <FormField
            control={form.control}
            name='search'
            render={({ field }) => (
              <FormItem className='flex-1'>
                <FormControl>
                  <Input
                    placeholder='Try searching for a new mission or job'
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button
            type='submit'
            variant='secondary'
            size='icon'
            className='size-10'
            onClick={form.handleSubmit(onSubmit)}
          >
            <Search size={14} />
          </Button>
        </div>
        <div className='flex flex-row gap-4'>
          <FormField
            control={form.control}
            name='salary'
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <SalaryForm {...field} />
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='duration'
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant='outline'
                        className='text-muted-foreground'
                      >
                        Duration
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent>
                      <FormLabel htmlFor='duration'>
                        Minimum duration (in months)
                      </FormLabel>
                      <Input
                        id='duration'
                        {...field}
                        placeholder='Number of months'
                      />
                    </PopoverContent>
                    <FormMessage />
                  </Popover>
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='contractType'
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <MultiSelect
                    label='Contract type'
                    {...field}
                    enumValues={ContractTypeEnum.options}
                  />
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='remoteMode'
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <MultiSelect
                    label='Remote working'
                    {...field}
                    enumValues={RemoteModeEnum.options}
                  />
                </FormControl>
              </FormItem>
            )}
          />
        </div>
      </form>
    </Form>
  );
}

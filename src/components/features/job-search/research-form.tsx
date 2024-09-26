'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';

import SalaryRange from './salary-range';
import MultiSelect from './multi-select';

const ContractTypeEnum = z.enum([
  'freelance',
  'fixed',
  'contract',
  'internship',
  'apprenticeship',
]);

const RemoteModeEnum = z.enum(['full', 'partial', 'none']);

const researchFormSchema = z.object({
  search: z.string().min(0),
  duration: z.number().min(1).max(36),
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
  const form = useForm<z.infer<typeof researchFormSchema>>({
    resolver: zodResolver(researchFormSchema),
    defaultValues: {
      search: '',
      salary: {
        daily: 0,
        annual: 0,
      },
      contractType: [],
      remoteMode: [],
    },
  });

  function onSubmit(values: z.infer<typeof researchFormSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
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
                  <SalaryRange
                    {...field}
                    schema={researchFormSchema.shape.salary}
                  />
                </FormControl>
              </FormItem>
            )}
          />
          <Button
            variant='outline'
            className='text-muted-foreground'
          >
            Location
          </Button>
          <Button
            variant='outline'
            className='text-muted-foreground'
          >
            Duration
          </Button>
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

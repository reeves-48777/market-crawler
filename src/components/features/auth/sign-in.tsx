'use client';

import { signIn } from 'next-auth/react';
import { Button } from '@/components/ui/button';
import { useMutation } from '@tanstack/react-query';
import { Loader2, LogIn } from 'lucide-react';
import { ComponentPropsWithoutRef } from 'react';
import { cn } from '@/lib/utils';

export default function SignIn({
  className,
  ...props
}: ComponentPropsWithoutRef<typeof Button>) {
  const mutation = useMutation({
    mutationFn: () => signIn(),
  });

  return (
    <Button
      size='lg'
      onClick={() => mutation.mutate()}
      className={cn('flex flex-row gap-2 p-4', className)}
      {...props}
    >
      {mutation.isPending ? (
        <Loader2
          className='animate-spin'
          size={16}
        />
      ) : (
        <LogIn size={16} />
      )}
      Sign In
    </Button>
  );
}

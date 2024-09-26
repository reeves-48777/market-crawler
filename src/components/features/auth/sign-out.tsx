'use client';

import { signOut } from 'next-auth/react';
import { Button } from '@/components/ui/button';
import { LogOut, Loader2 } from 'lucide-react';
import { ComponentPropsWithoutRef } from 'react';
import { cn } from '@/lib/utils';
import { useMutation } from '@tanstack/react-query';

export default function SignOut({
  className,
  ...props
}: ComponentPropsWithoutRef<typeof Button>) {
  const mutation = useMutation({
    mutationFn: () => signOut(),
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
        <LogOut size={16} />
      )}
      Sign Out
    </Button>
  );
}

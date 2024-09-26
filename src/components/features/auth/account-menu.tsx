'use client';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuLabel,
} from '@/components/ui/dropdown-menu';
import { useSession } from 'next-auth/react';
import Link from 'next/link';
import SignOut from './sign-out';
import { Bolt } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function AccountMenu() {
  const { data: session } = useSession();
  const user = session?.user;

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant='ghost'
          className='flex items-center gap-4'
        >
          <Avatar className='size-6'>
            <AvatarFallback>{user?.name?.charAt(0)}</AvatarFallback>
            {user?.image && (
              <AvatarImage
                src={user?.image}
                alt={`${user?.name} image`}
              />
            )}
          </Avatar>
          <span>{user?.name}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className='w-44'>
        <DropdownMenuLabel>My account</DropdownMenuLabel>
        <DropdownMenuItem>
          <Link
            className={cn('flex gap-3 items-center')}
            href='/account'
          >
            <Bolt size={16} />
            <span>Settings</span>
          </Link>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <SignOut
            size='sm'
            variant='destructive'
            className='w-full'
          />
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

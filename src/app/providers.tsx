'use client';

import { SessionProvider } from 'next-auth/react';
import { QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from '@/lib/react-query';
import { PropsWithChildren } from 'react';
import { ThemeProvider } from '@/components/theme/theme-provider';

export default function Providers({ children }: PropsWithChildren) {
  return (
    <ThemeProvider
      attribute='class'
      defaultTheme='system'
      enableSystem
    >
      <SessionProvider>
        <QueryClientProvider client={queryClient}>
          {children}
        </QueryClientProvider>
      </SessionProvider>
    </ThemeProvider>
  );
}

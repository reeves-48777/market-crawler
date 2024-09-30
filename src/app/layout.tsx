import type { Metadata } from 'next';
import './globals.css';
import Providers from './providers';
import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';
import { cn } from '@/lib/utils';
import Header from '@/components/layouts/header';
import { NavigationOverlay } from '@/components/features/navigation/navigation-overlay';

export const metadata: Metadata = {
  title: 'Market Crawler',
  description: 'Find the market that suits your needs',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang='en'
      className='h-screen w-screen'
      suppressHydrationWarning
    >
      <body className={cn('h-full w-full antialiased', GeistSans.className)}>
        <Providers>
          <Header />
          <NavigationOverlay />
          <div className='w-full h-[calc(100%-5rem)]'>{children}</div>
        </Providers>
      </body>
    </html>
  );
}

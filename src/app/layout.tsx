import type { Metadata } from 'next';
import { Rubik } from 'next/font/google';
import './globals.css';
import Providers from './providers';
import { cn } from '@/lib/utils';
import Header from '@/components/layouts/header';

const rubikSans = Rubik({
  display: 'swap',
  subsets: ['latin'],
});

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
      <body className={cn('h-full w-full antialiased', rubikSans.className)}>
        <Providers>
          <Header />
          <div className='w-full h-[calc(100%-5rem)]'>{children}</div>
        </Providers>
      </body>
    </html>
  );
}

import { auth } from '@/lib/auth';
import SignIn from '../features/auth/sign-in';
import Link from 'next/link';
import AccountMenu from '../features/auth/account-menu';
import ThemeSwitcher from '../theme/theme-switcher';
export default async function Header() {
  const session = await auth();

  return (
    <header className='w-full h-20 flex items-center border-b px-4 justify-between sticky top-0 z-50 backdrop-blur-md'>
      <Link
        href='/'
        className='text-4xl font-bold tracking-tighter px-8'
      >
        Market Crawler
      </Link>
      <div className='flex gap-4'>
        {session?.user ? <AccountMenu /> : <SignIn />}
        <ThemeSwitcher />
      </div>
    </header>
  );
}

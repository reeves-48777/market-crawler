'use client';

import * as React from 'react';
import { Moon, Sun } from 'lucide-react';
import { Button } from '../ui/button';
import { useTheme } from 'next-themes';

export default function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();
  const iconSize = 16;

  const handleClick = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <Button
      variant='outline'
      size='icon'
      onClick={handleClick}
    >
      <Sun
        size={iconSize}
        className='dark:hidden'
      />
      <Moon
        size={iconSize}
        className='hidden dark:block'
      />
      <span className='sr-only'>Toggle theme</span>
    </Button>
  );
}

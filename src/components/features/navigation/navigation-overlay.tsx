'use client';

import { ArrowLeft } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { motion, spring } from 'framer-motion';
import * as React from 'react';
import { cn } from '@/lib/utils';

const NavigationOverlay = () => {
  const router = useRouter();

  const [showPrevious, setShowPrevious] = React.useState(false);
  const [showNext, setShowNext] = React.useState(false);

  const threshold = 80;

  React.useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      const { clientX } = event;

      if (clientX <= threshold) {
        setShowPrevious(true);
      } else {
        setShowPrevious(false);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <motion.div
      className={cn(
        'fixed left-0 flex items-center justify-center cursor-pointer h-full backdrop-blur-lg px-4'
      )}
      initial={{ x: '-100%', opacity: 0 }}
      animate={{
        x: showPrevious ? 0 : '-100%',
        opacity: showPrevious ? 1 : 0,
      }}
      transition={{
        type: 'spring',
        stiffness: 300,
        damping: 13,
        duration: 0.2,
      }}
    >
      <motion.div
        whileHover={{ scale: 1.1 }}
        onClick={router.back}
      >
        <ArrowLeft size={48} />
      </motion.div>
    </motion.div>
  );
};

export { NavigationOverlay };

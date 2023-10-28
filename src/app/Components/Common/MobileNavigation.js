"use client";
import Container from '../Ui/Container';
// import useLockBody from '@/hooks/use-body-lock';
import  cn  from '../Lib/Utils';
import { AnimatePresence, motion, useAnimate } from 'framer-motion';
import { useEffect } from 'react';

function MobileNavigation({ isOpen, onClose, links }) {
//   useLockBody(isOpen);

  useEffect(() => {
    function handleEscape(event) {
      if (!event.key || event.key.toLowerCase() !== 'escape') return;

      onClose();
    }
    window.addEventListener('keydown', handleEscape);

    return () => {
      window.removeEventListener('keydown', handleEscape);
    };
  }, [onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          aria-controls="mobile-navigation-toggle"
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
          }}
          exit={{
            opacity: 0,
          }}
          transition={{ duration: 0.1 }}
          className={cn('border-neutrals-600 py-4 lg:hidden')}
        >
          <Container>
            <motion.nav
              aria-label="Primary"
              initial={{ y: -10, rotateX: 25 }}
              animate={{
                y: 0,
                rotateX: 0,
              }}
              exit={{
                y: -10,
                rotateX: 25,
              }}
              className="flex flex-col justify-center divide-y-0.5 divide-neutrals-600"
            >
              {links.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  onClick={onClose}
                  className={cn(
                    'py-4 ps-2 uppercase text-neutrals-200 transition-[letter-spacing,color]',
                    'hover:tracking-wider hover:text-neutrals-50 focus-visible:tracking-wider focus-visible:text-neutrals-50',
                  )}
                >
                  {link.label}
                </a>
              ))}
            </motion.nav>
          </Container>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function MobileNavigationOverlay({ isOpen, onClose }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          aria-hidden
          onClick={onClose}
          className="fixed inset-0 -z-10 bg-neutrals-900/90 backdrop-blur-sm lg:hidden"
        />
      )}
    </AnimatePresence>
  );
}
MobileNavigation.Overlay = MobileNavigationOverlay;

function MobileNavigationToggle({ isOpen, onIsOpenChange, isBackgroundShown }) {
  const [scope, animate] = useAnimate();

  useEffect(() => {
    void animate([
      // Your animation logic here
    ]);
  }, [isOpen, animate]);

  return (
    <button
      type="button"
      id="mobile-navigation-toggle"
      aria-haspopup="menu"
      aria-expanded={isOpen}
      onClick={() => onIsOpenChange(!isOpen)}
      aria-label="Toggle navigation menu"
      className={cn(
        'rounded-full px-3 py-1.5 transition-colors duration-500 md:px-4 md:py-2',
        isBackgroundShown && 'bg-neutrals-900/40',
      )}
    >
      <span className="sr-only">Menu</span>
      <motion.svg
        ref={scope}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        aria-hidden
        className="md:6-4 h-6 w-6 divide-y-0.5 divide-neutrals-800 md:h-7"
      >
        {/* Your SVG paths here */}
      </motion.svg>
    </button>
  );
}
MobileNavigation.Toggle = MobileNavigationToggle;

export default MobileNavigation;

"use client";
import lokkeestudiosWordmarkLogoImage from '../../../Assets/images/logos/lokkeestudios-wordmark.svg';
import MobileNavigation from './MobileNavigation';
import Button from '../Ui/Button';
import Container from '../Ui/Container';
import Image from '../Ui/Image';
import  cn  from '../Lib/Utils';

import { useState } from 'react';

const links = [
  {
    label: 'About',
    href: '/#about',
  },
  {
    label: 'Work',
    href: '/#work',
  },
  {
    label: 'Services',
    href: '/#services',
  },
  {
    label: 'Blog',
    href: '/blog',
  },
];

const GRACE_THRESHOLD = 12;

function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header
      aria-label="Primary"
      className="fixed top-0 z-40 w-full"
    >
      <Container>
        <div
          className={cn(
          "mt-4 rounded-full border-0.5 p-2 transition-colors duration-500 border-neutrals-600 bg-neutrals-900/90 backdrop-blur-md supports-[backdrop-filter]:bg-neutrals-900/50"  
          )}
        >
          <div className="grid grid-cols-3">
            <div className="flex items-center lg:hidden">
              <MobileNavigation.Toggle
                isOpen={isMobileMenuOpen}
                onIsOpenChange={setIsMobileMenuOpen}
                isBackgroundShown={true}
              />
            </div>
            <nav
              aria-label="Primary"
              className="ms-4 hidden items-center gap-x-6 lg:flex"
            >
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="relative flex h-full items-center p-1 text-sm uppercase text-neutrals-50 after:absolute after:inset-x-0 after:bottom-[12.25%] after:h-px after:scale-x-0 after:bg-gradient-to-r after:from-transparent after:via-neutrals-200 after:to-transparent after:transition-transform hover:after:-scale-x-100 focus-visible:after:-scale-x-100"
                >
                  {link.label}
                </a>
              ))}
            </nav>
            <div className="flex items-center justify-center">
              <a
                href="/"
                title="Navigate home"
                className="hover:animate-jiggle"
              >
                <Image
                  metadata={lokkeestudiosWordmarkLogoImage}
                  alt="LOKKEE STUDIOS"
                  className="h-3.5 md:h-4"
                />
              </a>
            </div>
            <div className="flex items-center justify-end">
              <Button
                as="a"
                href="/#contact"
                size="small"
                isGhost
                className="rounded-full"
              >
                Hit me up
              </Button>
            </div>
          </div>
        </div>
      </Container>
      <MobileNavigation
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        links={links}
      />
      <MobileNavigation.Overlay
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />
    </header>
  );
}

export default Header;

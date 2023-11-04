"use client";
import MobileNavigation from './MobileNavigation';
import Button from '../Ui/Button';
import Container from '../Ui/Container';
import cn from '../Lib/Utils';
import { useState } from 'react';
import { neutralsNine, neutralsTwo, neutralsZ, red } from '@/Assets/Const/ColorConst';

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
            'mt-2 rounded-full border borderColor p-2 transition-colors duration-500',
            `bg-${neutralsNine}/90 backdrop-blur-md supports-[backdrop-filter]:bg-${neutralsNine}/50`
          )}
          style={{ backgroundColor: "#0a0b0f80" }}>
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
                  className={`relative flex h-full items-center p-1 text-sm uppercase text-${neutralsZ} after:absolute after:inset-x-0 after:bottom-[12.25%] after:h-px after:scale-x-0 after:bg-gradient-to-r after:from-transparent after:via-${neutralsTwo} after:to-transparent after:transition-transform hover:after:-scale-x-100 focus-visible:after:-scale-x-100`}
                >
                  {link.label}
                </a>
              ))}
            </nav>
            <div className="flex items-center justify-center SvgName">
              <a
                href="/"
                title="Navigate home"
                className="hover:animate-jiggle"
              >
                <span className="font-medium SvgName">WEB DEVELOPMENT</span>
              </a>
            </div>
            <div className="flex items-center justify-end ">
              <Button
                as="a"
                href="/#contact"
                size="small"
                isGhost
                className="rounded-full text-white"
              >
                Get in Touch
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

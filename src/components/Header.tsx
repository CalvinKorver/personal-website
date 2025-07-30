'use client';

import { useState } from 'react';
import Link from 'next/link';
import AnimatedArrow from './AnimatedArrow';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigationItems = [
    { href: "/#projects-section", label: "Projects" },
    { href: "/blog", label: "Blog" },
    { href: "https://www.linkedin.com/in/calvinkorver/", label: "LinkedIn", external: true },
    { href: "https://github.com/CalvinKorver", label: "Github", external: true }
  ];

  return (
    <>
      <AnimatedArrow />
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md">
        <div className="mx-auto px-6">
          <div className="flex items-center h-12" style={{ gap: '24px' }}>
          {/* Logo/Name */}
          <Link 
            href="/" 
            className="text-large font-medium text-foreground hover:text-accent transition-colors flex-shrink-0"
          >
            Calvin Korver
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8 ml-auto">
            {navigationItems.map((item) => (
              item.external ? (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground hover:text-accent transition-colors font-light"
                >
                  {item.label}
                </a>
              ) : (
                <Link
                  key={item.label}
                  href={item.href}
                  className="text-foreground hover:text-accent transition-colors font-light"
                >
                  {item.label}
                </Link>
              )
            ))}
          </nav>

          {/* Mobile Navigation Menu */}
          <div className="md:hidden ml-auto relative">
            <button
              className="flex items-center justify-center w-10 h-10 text-foreground hover:text-accent transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle navigation menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
            
            {isMenuOpen && (
              <div className="absolute top-full right-0 mt-2 w-48 bg-white border border-border rounded-lg shadow-lg py-2 z-50">
                {navigationItems.map((item) => (
                  <div key={item.label} className="px-4 py-2">
                    {item.external ? (
                      <a
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block text-foreground hover:text-accent transition-colors font-medium"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {item.label}
                      </a>
                    ) : (
                      <Link
                        href={item.href}
                        className="block text-foreground hover:text-accent transition-colors font-medium"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {item.label}
                      </Link>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
          </div>
        </div>
      </header>
    </>
  );
}
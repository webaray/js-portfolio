
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useActiveSection } from '@/hooks/useActiveSection';

function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  
  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' }
  ];

  const sectionIds = navLinks.map(link => link.href.substring(1));
  const activeSection = useActiveSection(sectionIds);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'glass-panel shadow-sm py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <button
            onClick={() => scrollToSection('#hero')}
            className="text-xl font-extrabold tracking-tight text-foreground hover:text-primary transition-colors duration-200"
          >
            jsjosim<span className="text-primary">.</span>
          </button>

          <nav className="hidden lg:flex items-center space-x-1 bg-background/50 backdrop-blur-md rounded-full px-4 py-2 border border-border/50 shadow-sm">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => scrollToSection(link.href)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  activeSection === link.href.substring(1)
                    ? 'text-primary bg-primary/10'
                    : 'text-muted-foreground hover:text-foreground hover:bg-accent/50'
                }`}
              >
                {link.name}
              </button>
            ))}
          </nav>

          <div className="hidden lg:flex">
            <Button 
              onClick={() => scrollToSection('#contact')}
              className="rounded-full px-6 font-semibold shadow-sm hover:shadow-md transition-all duration-300"
            >
              Let's Talk
            </Button>
          </div>

          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden h-10 w-10 rounded-full"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div 
        className={`lg:hidden absolute top-full left-0 w-full bg-background border-b border-border shadow-lg transition-all duration-300 ease-in-out origin-top ${
          isMobileMenuOpen ? 'opacity-100 scale-y-100' : 'opacity-0 scale-y-0 pointer-events-none'
        }`}
      >
        <nav className="px-4 py-6 flex flex-col space-y-2">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => scrollToSection(link.href)}
              className={`block w-full text-left px-6 py-4 rounded-xl text-base font-semibold transition-all duration-200 ${
                activeSection === link.href.substring(1)
                  ? 'text-primary bg-primary/10'
                  : 'text-foreground/80 hover:text-foreground hover:bg-accent'
              }`}
            >
              {link.name}
            </button>
          ))}
          <div className="pt-4 px-2">
            <Button 
              className="w-full py-6 rounded-xl text-lg font-semibold"
              onClick={() => scrollToSection('#contact')}
            >
              Let's Talk
            </Button>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;

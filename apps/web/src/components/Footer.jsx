
import React from 'react';
import { Linkedin, Github, Twitter, Mail, ArrowUpRight } from 'lucide-react';

function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Projects', href: '#projects' },
  ];

  const socialLinks = [
    { name: 'LinkedIn', icon: Linkedin, href: 'https://www.linkedin.com/in/webaray/' },
    { name: 'GitHub', icon: Github, href: 'https://github.com/webaray' },
    { name: 'Twitter', icon: Twitter, href: 'https://twitter.com/webaray' }
  ];

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
  };

  return (
    <footer className="bg-background border-t border-border/50 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-8 mb-16">
          <div className="md:col-span-5">
            <span className="text-2xl font-extrabold tracking-tight text-foreground block mb-6">
              jsjosim<span className="text-primary">.</span>
            </span>
            <p className="text-muted-foreground leading-relaxed max-w-sm mb-8 text-sm md:text-base">
              Crafting high-performance, scalable web applications that drive real business results and exceptional user experiences.
            </p>
            <a 
              href="mailto:josimuddin105464@gmail.com" 
              className="inline-flex items-center gap-2 text-foreground font-semibold hover:text-primary transition-colors"
            >
              <Mail className="h-5 w-5" />
              josimuddin105464@gmail.com
            </a>
          </div>

          <div className="md:col-span-3 md:col-start-7">
            <h3 className="text-sm font-bold text-foreground tracking-wider uppercase mb-6">
              Navigation
            </h3>
            <ul className="space-y-4">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-muted-foreground hover:text-primary transition-colors duration-200 text-sm md:text-base font-medium"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-3">
            <h3 className="text-sm font-bold text-foreground tracking-wider uppercase mb-6">
              Socials
            </h3>
            <ul className="space-y-4">
              {socialLinks.map((social) => (
                <li key={social.name}>
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center text-muted-foreground hover:text-primary transition-colors duration-200 text-sm md:text-base font-medium"
                  >
                    {social.name}
                    <ArrowUpRight className="ml-1 h-3 w-3 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all duration-200" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-border/50 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground font-medium">
            © {currentYear} Js Josim. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm font-medium">
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors duration-200">
              Privacy Policy
            </a>
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors duration-200">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

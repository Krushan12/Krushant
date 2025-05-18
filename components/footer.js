import React from 'react';
import { socialLinks, navLinks } from './data';
import Link from 'next/link';
import { Code } from 'lucide-react';
import * as LucideIcons from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-muted/30 border-t">
      <div className="container mx-auto px-4 md:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Code className="h-6 w-6 text-primary" />
              <span className="font-mono font-semibold text-lg">
                <span className="text-primary">Krushant</span> Wagh
              </span>
            </div>
            <p className="text-muted-foreground mb-6 max-w-md">
              A passionate full-stack developer and Materials Engineering undergraduate at IIT Gandhinagar, building impactful apps with React, Node.js, and MongoDB.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((link) => {
                const Icon = LucideIcons[link.icon];
                return (
                  <a 
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noreferrer"
                    className="text-foreground/70 hover:text-primary transition-colors"
                    aria-label={link.name}
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                );
              })}
            </div>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link 
                    href={link.href}
                    className="text-foreground/70 hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">Contact</h3>
            <ul className="space-y-3 text-foreground/70">
              <li>Maharashtra, India</li>
              <li>krushantw@gmail.com</li>
              <li>+91 8767821091</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-border mt-10 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-foreground/60 text-sm">
            © {currentYear} Krushant Wagh. All rights reserved.
          </p>
          <p className="text-foreground/60 text-sm mt-2 md:mt-0">
            <span className="font-mono">Designed & Built with</span> 🖤
          </p>
        </div>
      </div>
    </footer>
  );
}
import React from 'react';
import { Cube16Solid, LinkIcon } from './Icons';

export const Footer = () => {
  return (
    <footer className="w-full border-t border-mystic/10 bg-oceanic pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <Cube16Solid className="text-forsythia text-2xl" />
              <span className="font-mono font-bold tracking-tight text-xl text-arctic">SpeedRun AI</span>
            </div>
            <p className="text-mystic/70 text-sm leading-relaxed mb-6">
              Empowering data teams to build, scale, and automate without limits. Built for the next generation of software.
            </p>
          </div>
          
          <div>
            <h4 className="text-arctic font-semibold mb-4">Product</h4>
            <ul className="flex flex-col gap-3 text-sm text-mystic/80">
              <li><a href="#" className="hover:text-forsythia transition-colors">Features</a></li>
              <li><a href="#" className="hover:text-forsythia transition-colors">Integrations</a></li>
              <li><a href="#" className="hover:text-forsythia transition-colors">Pricing</a></li>
              <li><a href="#" className="hover:text-forsythia transition-colors">Changelog</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-arctic font-semibold mb-4">Resources</h4>
            <ul className="flex flex-col gap-3 text-sm text-mystic/80">
              <li><a href="#" className="hover:text-forsythia transition-colors">Documentation</a></li>
              <li><a href="#" className="hover:text-forsythia transition-colors">API Reference</a></li>
              <li><a href="#" className="hover:text-forsythia transition-colors">Community Forum</a></li>
              <li><a href="#" className="hover:text-forsythia transition-colors">Guides</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-arctic font-semibold mb-4">Connect</h4>
            <ul className="flex flex-col gap-3 text-sm text-mystic/80">
              <li><a href="#" className="hover:text-forsythia transition-colors flex items-center gap-2">Twitter <LinkIcon className="w-3 h-3"/></a></li>
              <li><a href="#" className="hover:text-forsythia transition-colors flex items-center gap-2">GitHub <LinkIcon className="w-3 h-3"/></a></li>
              <li><a href="#" className="hover:text-forsythia transition-colors flex items-center gap-2">Discord <LinkIcon className="w-3 h-3"/></a></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-mystic/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-mystic/60">
          <p>&copy; {new Date().getFullYear()} SpeedRun AI Inc. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-arctic transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-arctic transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

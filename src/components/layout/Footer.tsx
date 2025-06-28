"use client";

import Link from 'next/link';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Logo } from '@/components/Logo';
import { NAV_LINKS } from '@/lib/constants';
import { Github, Twitter, Linkedin, MessageCircle } from 'lucide-react';
import { useState, useEffect } from 'react';

export function Footer() {
  const [year, setYear] = useState<number | null>(null);

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="border-t">
      <div className="container mx-auto px-4 md:px-6 py-12 grid gap-8 md:grid-cols-12">
        <div className="md:col-span-3">
          <Link href="/" className="flex items-center space-x-2 mb-4">
            <Logo />
            <span className="font-bold text-lg">Humanly Persona</span>
          </Link>
          <p className="text-muted-foreground text-sm">
            Branding that feels like you.
          </p>
          <div className="flex space-x-4 mt-4">
            <Link href="#" aria-label="Twitter">
              <Twitter className="h-5 w-5 text-muted-foreground hover:text-foreground" />
            </Link>
            <Link href="#" aria-label="LinkedIn">
              <Linkedin className="h-5 w-5 text-muted-foreground hover:text-foreground" />
            </Link>
            <Link href="#" aria-label="WhatsApp">
              <MessageCircle className="h-5 w-5 text-muted-foreground hover:text-foreground" />
            </Link>
          </div>
        </div>

        <div className="md:col-span-2">
          <h3 className="font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            {NAV_LINKS.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className="text-sm text-muted-foreground hover:text-foreground"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        
        <div className="md:col-span-3">
            <h3 className="font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="mailto:hello@humanlypersona.com" className="hover:text-foreground">hello@humanlypersona.com</a></li>
                <li>Delhi, India</li>
            </ul>
        </div>


        <div className="md:col-span-4">
          <h3 className="font-semibold mb-4">Subscribe to our Newsletter</h3>
          <p className="text-sm text-muted-foreground mb-4">
            Get weekly tips on building your virtual identity and online growth strategies.
          </p>
          <form className="flex space-x-2">
            <Input type="email" placeholder="Enter your email" className="flex-1" />
            <Button type="submit">Subscribe</Button>
          </form>
        </div>
      </div>
      <div className="border-t">
        <div className="container mx-auto px-4 md:px-6 py-4 flex justify-between items-center text-sm text-muted-foreground">
          <p>&copy; {year} Humanly Persona. All rights reserved.</p>
          <div className="flex space-x-4">
             <Link href="#" className="hover:text-foreground">Privacy Policy</Link>
             <Link href="#" className="hover:text-foreground">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

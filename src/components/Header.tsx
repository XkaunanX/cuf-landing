'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

const links = [
  { href: '#inicio', label: 'Inicio' },
  { href: '#nosotros', label: 'Nosotros' },
  { href: '#alojamientos', label: 'Alojamientos' },
  { href: '#eventos', label: 'Eventos' },
  { href: '#experiencias', label: 'Experiencias' },
  { href: '#faqs', label: 'FAQs' },
  { href: '#contacto', label: 'Contacto' },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || open ? 'bg-white shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto flex h-20 items-center justify-between px-4">
        <div className="flex items-center gap-2">
          <span
            className={`text-xl font-bold transition-colors ${
              scrolled || open ? 'text-gray-900' : 'text-white'
            }`}
          >
            CUF
          </span>
        </div>

        {/* Nav para desktop */}
        <nav className="hidden md:flex gap-6">
          {links.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              className={`text-sm font-medium transition-colors ${
                scrolled || open
                  ? 'text-gray-700 hover:text-secondary'
                  : 'text-white hover:text-secondary'
              }`}
            >
              {label}
            </a>
          ))}
        </nav>

        {/* Boton mobile */}
        <div className="md:hidden">
          <Button
            variant="outline"
            size="icon"
            className={`transition-colors ${
              scrolled || open
                ? 'text-gray-900 border-gray-900 hover:bg-gray-100'
                : 'text-white border-white hover:bg-white/20'
            }`}
            onClick={() => setOpen(!open)}
          >
            {/* Icono siempre gris */}
            {open ? <X className="h-5 w-5 text-gray-900" /> : <Menu className="h-5 w-5 text-gray-900" />}
            <span className="sr-only">Menu</span>
          </Button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-gray-800/80 backdrop-blur-sm px-6 py-6 rounded-b-xl shadow-lg animate-slideDown">
          <nav className="flex flex-col gap-5">
            {links.map(({ href, label }) => (
              <a
                key={href}
                href={href}
                className="text-base font-medium text-white hover:text-secondary transition-colors"
                onClick={() => setOpen(false)}
              >
                {label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}

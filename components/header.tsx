'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { usePathname } from 'next/navigation'

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/contact', label: 'Contact' },
  ]

  return (
    <>
      {/* Top Bar */}
       <div className="hidden sm:block bg-primary text-primary-foreground text-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 flex justify-center items-center gap-6">
          <a href="mailto:hopeharborcommunity@gmail.com" className="hover:opacity-90 transition">
            hopeharborcommunity@gmail.com
          </a>
          <span>•</span>
          <span>+256 701 640 853</span>
          <span>•</span>
          <span>P.O Box 202327, Kampala, Uganda</span>
        </div>
      </div>

      {/* Main Header */}
      <header className="bg-white border-b border-border sticky top-0 z-50">
        <div className="mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center flex-shrink-0">
              <div className="w-40 h-20">
                <Image
                  src="/logo.png"
                  alt="Hope Harbor Community Transformers"
                  className="w-full h-full object-contain"
                  width={1000}
                  height={500}
                />
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => {
                const isActive = pathname === link.href
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`font-medium transition relative group ${
                      isActive
                        ? 'text-primary'
                        : 'text-foreground hover:text-primary'
                    }`}
                  >
                    {link.label}
                    <span className={`absolute bottom-0 left-0 h-0.5 bg-primary transition-all ${
                      isActive ? 'w-full' : 'w-0 group-hover:w-full'
                    }`}></span>
                  </Link>
                )
              })}
              <Link
                href="/donate"
                className="bg-primary text-primary-foreground px-8 py-3 rounded-xl font-semibold hover:opacity-90 hover:shadow-lg transition-all duration-300 transform hover:scale-105"
              >
                Donate Now
              </Link>
            </nav>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation - Full Width Below Header */}
          {mobileMenuOpen && (
            <nav className="md:hidden w-full bg-white border-t border-border py-4">
              <div className="flex flex-col gap-2">
                {navLinks.map((link) => {
                  const isActive = pathname === link.href
                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      className={`font-medium py-3 px-4 rounded transition ${
                        isActive
                          ? 'bg-primary/10 text-primary'
                          : 'text-foreground hover:text-primary hover:bg-muted'
                      }`}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {link.label}
                    </Link>
                  )
                })}
                <Link
                  href="/donate"
                  className="bg-primary text-primary-foreground px-6 py-3 rounded-xl font-semibold hover:opacity-90 transition text-center mt-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Donate Now
                </Link>
              </div>
            </nav>
          )}
        </div>
      </header>
    </>
  )
}

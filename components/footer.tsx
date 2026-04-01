import Link from 'next/link'
import { Mail, Phone, MapPin } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-foreground text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Organization Info */}
          <div>
            <h3 className="font-bold text-lg mb-4">Hope Harbor Community</h3>
            <p className="text-sm opacity-90 mb-4">
              Transforming lives through community empowerment and sustainable development in Uganda.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="hover:opacity-80 transition">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:opacity-80 transition">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:opacity-80 transition">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/donate" className="hover:opacity-80 transition">
                  Donate
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold mb-4">Contact Us</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <Mail size={18} className="mt-0.5 flex-shrink-0" />
                <a href="mailto:hopeharbourcommunity@gmail.com" className="hover:opacity-80 transition break-all">
                  hopeharborcommunity@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Phone size={18} className="mt-0.5 flex-shrink-0" />
                <div>
                  <div>+256 701 640 853</div>
                </div>
              </li>
            </ul>
          </div>

          {/* Location */}
          <div>
            <h4 className="font-bold mb-4">Location</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <MapPin size={18} className="mt-0.5 flex-shrink-0" />
                <div>
                  <p>P.O Box 202327</p>
                  <p>Kampala, Uganda</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm opacity-75">
            <p>&copy; {new Date().getFullYear()} Hope Harbor Community Transformers Ltd. All rights reserved.</p>
            
          </div>
        </div>
      </div>
    </footer>
  )
}

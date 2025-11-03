'use client'

import Link from 'next/link'
import { Code2, Mail, Phone, MapPin, Linkedin, Twitter, Github, Facebook } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative z-20 bg-slate-950 border-t border-slate-800 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Code2 className="w-8 h-8 text-cyan-400" />
              <span className="text-xl font-bold gradient-text">Khodal</span>
            </div>
            <p className="text-gray-400 text-sm">
              Transforming businesses through innovative IT solutions and cutting-edge technology.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
                <Github className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/about" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">About Us</Link></li>
              <li><Link href="/services" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">Services</Link></li>
              <li><Link href="/portfolio" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">Portfolio</Link></li>
              <li><Link href="/careers" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">Careers</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li><span className="text-gray-400 text-sm">Web Development</span></li>
              <li><span className="text-gray-400 text-sm">App Development</span></li>
              <li><span className="text-gray-400 text-sm">AI/ML Solutions</span></li>
              <li><span className="text-gray-400 text-sm">Data Migration</span></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-2 text-sm">
                <MapPin className="w-4 h-4 text-cyan-400 mt-1 flex-shrink-0" />
                <span className="text-gray-400">Surat, Gujarat, India</span>
              </li>
              <li className="flex items-center space-x-2 text-sm">
                <Mail className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                <a href="mailto:info@khodal.com" className="text-gray-400 hover:text-cyan-400 transition-colors">info@khodal.com</a>
              </li>
              <li className="flex items-center space-x-2 text-sm">
                <Phone className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                <a href="tel:+919876543210" className="text-gray-400 hover:text-cyan-400 transition-colors">+91 98765 43210</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-gray-400 text-sm">
            © {currentYear} Khodal IT Solutions. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm">
            <Link href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">Privacy Policy</Link>
            <Link href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
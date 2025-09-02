// src/components/Footer.jsx
import React from "react";
import { Facebook, Instagram, Linkedin } from "lucide-react"; // icons

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-12">
      {/* Top Section */}
      <div className="max-w-6xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Company Info */}
        <div>
          <h2 className="text-xl font-bold text-white">
            Strong Wall Construction LLC
          </h2>
          <p className="mt-2 text-sm text-gray-400">
            Building trust, one project at a time. Reliable remodeling &
            construction services.
          </p>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Contact</h3>
          <p>📍 Prueet Ridge, Dr Lawndale, NC</p>
          <p>📞 (555) 987-6543</p>
          <p>✉️ info@strongwallcontractingllc.com</p>
        </div>

        {/* Opening Hours */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">
            Opening Hours
          </h3>
          <p>Mon - Fri: 9:00 AM - 6:00 PM</p>
          <p>Sat: 10:00 AM - 4:00 PM</p>
          <p>Sun: Closed</p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <a href="#hero" className="hover:text-yellow-400">
                Home
              </a>
            </li>
            <li>
              <a href="#services" className="hover:text-yellow-400">
                Services
              </a>
            </li>
            <li>
              <a href="#estimate" className="hover:text-yellow-400">
                Estimate
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-yellow-400">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Socials + Bottom Bar */}
      <div className="border-t border-gray-700 py-6 px-6 flex flex-col md:flex-row items-center justify-between max-w-6xl mx-auto">
        {/* Copyright */}
        <p className="text-sm text-gray-500">
          &copy; {new Date().getFullYear()} Strong Wall Construction LLC. All
          rights reserved.
        </p>

        {/* Social Icons */}
        <div className="flex space-x-4 mt-4 md:mt-0">
          <a href="#" aria-label="Facebook" className="hover:text-yellow-400">
            <Facebook size={20} />
          </a>
          <a href="#" aria-label="Instagram" className="hover:text-yellow-400">
            <Instagram size={20} />
          </a>
          <a href="#" aria-label="LinkedIn" className="hover:text-yellow-400">
            <Linkedin size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import { Link } from 'react-router-dom';
import { Twitter, Linkedin, Instagram, Youtube, Facebook, Globe } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-white pt-20 pb-10 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start mb-16">
          <div className="mb-8 md:mb-0">
            <Link to="/" className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center">
                <div className="w-5 h-5 bg-white rounded-sm rotate-45"></div>
              </div>
            </Link>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 w-full md:w-auto md:flex-1 md:ml-20">
            <div>
              <h3 className="font-bold text-sm uppercase tracking-wider mb-6">Product</h3>
              <ul className="space-y-4">
                <li><Link to="#" className="text-gray-600 hover:text-primary text-sm">Watch demo</Link></li>
                <li><Link to="#" className="text-gray-600 hover:text-primary text-sm">Pricing</Link></li>
                <li><Link to="#" className="text-gray-600 hover:text-primary text-sm">Paid vs Free</Link></li>
                <li><Link to="#" className="text-gray-600 hover:text-primary text-sm">Accessibility</Link></li>
                <li><Link to="#" className="text-gray-600 hover:text-primary text-sm">Featured releases</Link></li>
                <li><Link to="#" className="text-gray-600 hover:text-primary text-sm">Change log</Link></li>
                <li><Link to="#" className="text-gray-600 hover:text-primary text-sm">Status</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-bold text-sm uppercase tracking-wider mb-6">Features</h3>
              <ul className="space-y-4">
                <li><Link to="#" className="text-gray-600 hover:text-primary text-sm">Channels</Link></li>
                <li><Link to="#" className="text-gray-600 hover:text-primary text-sm">Workholo Connect</Link></li>
                <li><Link to="#" className="text-gray-600 hover:text-primary text-sm">Workflow Builder</Link></li>
                <li><Link to="#" className="text-gray-600 hover:text-primary text-sm">Messaging</Link></li>
                <li><Link to="#" className="text-gray-600 hover:text-primary text-sm">Huddles</Link></li>
                <li><Link to="#" className="text-gray-600 hover:text-primary text-sm">Canvas</Link></li>
                <li><Link to="#" className="text-gray-600 hover:text-primary text-sm">Lists</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-bold text-sm uppercase tracking-wider mb-6">Solutions</h3>
              <ul className="space-y-4">
                <li><Link to="#" className="text-gray-600 hover:text-primary text-sm">Engineering</Link></li>
                <li><Link to="#" className="text-gray-600 hover:text-primary text-sm">IT</Link></li>
                <li><Link to="#" className="text-gray-600 hover:text-primary text-sm">Customer service</Link></li>
                <li><Link to="#" className="text-gray-600 hover:text-primary text-sm">Sales</Link></li>
                <li><Link to="#" className="text-gray-600 hover:text-primary text-sm">Project management</Link></li>
                <li><Link to="#" className="text-gray-600 hover:text-primary text-sm">Marketing</Link></li>
                <li><Link to="#" className="text-gray-600 hover:text-primary text-sm">Security</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-bold text-sm uppercase tracking-wider mb-6">Resources</h3>
              <ul className="space-y-4">
                <li><Link to="#" className="text-gray-600 hover:text-primary text-sm">Help Centre</Link></li>
                <li><Link to="#" className="text-gray-600 hover:text-primary text-sm">What's new</Link></li>
                <li><Link to="#" className="text-gray-600 hover:text-primary text-sm">Resources library</Link></li>
                <li><Link to="#" className="text-gray-600 hover:text-primary text-sm">Workholo blog</Link></li>
                <li><Link to="#" className="text-gray-600 hover:text-primary text-sm">Community</Link></li>
                <li><Link to="#" className="text-gray-600 hover:text-primary text-sm">Customer stories</Link></li>
                <li><Link to="#" className="text-gray-600 hover:text-primary text-sm">Events</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-bold text-sm uppercase tracking-wider mb-6">Company</h3>
              <ul className="space-y-4">
                <li><Link to="#" className="text-gray-600 hover:text-primary text-sm">About us</Link></li>
                <li><Link to="#" className="text-gray-600 hover:text-primary text-sm">News</Link></li>
                <li><Link to="#" className="text-gray-600 hover:text-primary text-sm">Media kit</Link></li>
                <li><Link to="#" className="text-gray-600 hover:text-primary text-sm">Brand centre</Link></li>
                <li><Link to="#" className="text-gray-600 hover:text-primary text-sm">Careers</Link></li>
                <li><Link to="#" className="text-gray-600 hover:text-primary text-sm">Workholo shop</Link></li>
                <li><Link to="#" className="text-gray-600 hover:text-primary text-sm">Engineering blog</Link></li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-gray-100">
          <div className="flex items-center gap-6 mb-4 md:mb-0">
            <button className="flex items-center gap-2 text-sm font-bold hover:text-primary">
              <Globe className="w-4 h-4" />
              Change region
            </button>
            <div className="hidden md:flex items-center gap-4 text-sm text-gray-500">
              <Link to="#" className="hover:text-primary">Status</Link>
              <Link to="#" className="hover:text-primary">Privacy</Link>
              <Link to="#" className="hover:text-primary">Terms</Link>
              <Link to="#" className="hover:text-primary">Your privacy choices</Link>
              <Link to="#" className="hover:text-primary">Cookie preferences</Link>
              <Link to="#" className="hover:text-primary">Contact us</Link>
            </div>
          </div>
          
          <div className="flex items-center gap-4 text-gray-600">
            <Link to="#" className="hover:text-primary"><Linkedin className="w-5 h-5" /></Link>
            <Link to="#" className="hover:text-primary"><Instagram className="w-5 h-5" /></Link>
            <Link to="#" className="hover:text-primary"><Facebook className="w-5 h-5" /></Link>
            <Link to="#" className="hover:text-primary"><Twitter className="w-5 h-5" /></Link>
            <Link to="#" className="hover:text-primary"><Youtube className="w-5 h-5" /></Link>
          </div>
        </div>
        
        <div className="mt-8 text-xs text-gray-500 text-center md:text-left">
          ©2026 Workholo Technologies, LLC, a Salesforce company. All rights reserved. Various trademarks held by their respective owners.
        </div>
      </div>
    </footer>
  );
}

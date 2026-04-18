import React from "react";
import { FaLinkedin, FaTwitter, FaGithub, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-300 py-12 border-t border-slate-800">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <img
                src="/logo.ico"
                alt="PixelWind logo"
                className="w-8 h-8 rounded-md bg-white/10 object-contain shadow-sm"
              />
              <span className="font-bold text-xl tracking-tight text-white">
                Pixel Technologies
              </span>
            </div>
            <p className="text-slate-400 max-w-sm">
              Transforming ambition into expertise. We build the next generation of AI/ML professionals through hands-on industry experience.
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#about" className="hover:text-primary transition-colors">About Us</a></li>
              <li><a href="#program" className="hover:text-primary transition-colors">Program Details</a></li>
              <li><a href="#companies" className="hover:text-primary transition-colors">Placement</a></li>
              <li><a href="#contact" className="hover:text-primary transition-colors">Apply Now</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4">Contact Info</h4>
            <ul className="space-y-2 text-slate-400">
              <li>pixeltechnology@gmail.com</li>
              <li>+91 9398929970</li>
              <li>4th foor,Potluri classic, beside Sun international, Dwarakanagar, Visakhapatnam-530016</li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-slate-500">
            &copy; {new Date().getFullYear()} Pixel Technologies. All rights reserved.
          </p>
          <div className="flex gap-4">
            <a href="#" className="text-slate-400 hover:text-white transition-colors">
              <FaLinkedin size={20} />
            </a>
            <a href="#" className="text-slate-400 hover:text-white transition-colors">
              <FaTwitter size={20} />
            </a>
            <a href="#" className="text-slate-400 hover:text-white transition-colors">
              <FaGithub size={20} />
            </a>
            <a href="#" className="text-slate-400 hover:text-white transition-colors">
              <FaInstagram size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

"use client";

import React from 'react';
import { Github, Linkedin, Mail, Heart, FileText, } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: "GitHub",
      icon: Github,
      url: "https://github.com/abhikarnati333",
      color: "hover:text-gray-900"
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      url: "https://linkedin.com/in/abhikarnati",
      color: "hover:text-blue-600"
    },
    {
      name: "Email",
      icon: Mail,
      url: "mailto:abhikarnati33@example.com",
      color: "hover:text-orange-500"
    },
        {
      name: "Resume",
      icon: FileText,
      url: "https://www.canva.com/design/DAGO4ZBWu_w/GbE5PWCowFD8WYP-D5ckrA/view?utm_content=DAGO4ZBWu_w&utm_campaign=designshare&utm_medium=link&utm_source=editor",
      color: "hover:text-green-500"
    }
  ];

  return (
    <footer className="bg-gray-50 m-3 rounded-4xl py-12 px-5">
      <div className="max-w-6xl mx-auto">
        
        {/* Main Footer Content */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-8">
          
          {/* Left Section - Branding */}
          <div className="text-center md:text-left">
            <h3 className="text-3xl font-serif italic mb-2">
              Abhi Karnati
            </h3>
            <p className="text-base">
              Full Stack Developer & Designer
            </p>
          </div>

          {/* Right Section - Social Links */}
          <div className="flex gap-6">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className={` ${link.color} transition-all duration-300 hover:scale-110`}
                aria-label={link.name}
              >
                <link.icon className="w-6 h-6" />
              </a>
            ))}
            <span onClick={() => window.open('https://github.com/abhikarnati333/opensesame-project', '_blank')} className='underline underline-offset-2'>Source Code</span>

          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 mb-8"></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm 0">
          
          {/* Copyright */}
          <div className="flex items-center gap-1">
            <span>Built for</span>
            <span className="font-serif italic text-orange-500">OpenSesame</span>
          </div>

          {/* Made with love */}
          <div className="flex items-center gap-2">
            <span>Made with</span>
            <Heart className="w-4 h-4 text-red-500 fill-red-500" />
            <span>using React, Next.js & Tailwind CSS</span>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-8 text-center">
          <p className=" text-sm">
            Excited for the prospect of joining the <span className="font-serif italic text-orange-500">OpenSesame</span> team this summer! 🚀
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
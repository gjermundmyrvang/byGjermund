import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconMail,
} from "@tabler/icons-react";
import React from "react";

export default function MyFooter() {
  return (
    <footer className="w-full max-w-3xl mx-auto py-8 flex flex-col items-center gap-4">
      <div className="flex gap-6">
        <a
          href="https://github.com/gjermundmyrvang"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-700 hover:text-white transition-colors duration-200 transform hover:scale-110 cursor-target"
          aria-label="GitHub"
        >
          <IconBrandGithub size={52} stroke={1.5} />
        </a>
        <a
          href="https://linkedin.com/in/gjermupm"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-700 hover:text-blue-500 transition-colors duration-200 transform hover:scale-110 cursor-target"
          aria-label="LinkedIn"
        >
          <IconBrandLinkedin size={52} stroke={1.5} />
        </a>
        <a
          href="mailto:gjermundmyrvang@gmail.com"
          className="text-gray-700 hover:text-pink-500 transition-colors duration-200 transform hover:scale-110 cursor-target"
          aria-label="Email"
        >
          <IconMail size={52} stroke={1.5} />
        </a>
      </div>
      <span className="text-xs sm:text-lg select-none">
        &copy; {new Date().getFullYear()} Gjermund Myrvang. All rights reserved.
      </span>
    </footer>
  );
}

import React from 'react';
import { portfolioData } from '@/components/constants/data';

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="pt-12 pb-6 flex items-center justify-between text-gray-400 dark:text-zinc-500 text-[10px] font-bold uppercase tracking-widest">
      <p>© {currentYear} {portfolioData.labels.copyright}</p>
      <button className="flex items-center gap-2 px-4 py-2 bg-gray-100 dark:bg-zinc-700 text-gray-900 dark:text-white border border-gray-200 dark:border-zinc-600 rounded-full hover:bg-gray-200 dark:hover:bg-zinc-600 transition-colors shadow-sm">
        <span className="text-[10px]">{portfolioData.labels.share}</span>
      </button>
    </footer>
  );
};

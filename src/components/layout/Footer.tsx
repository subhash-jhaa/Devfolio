import React from 'react';

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="pt-12 pb-6 flex items-center justify-between text-gray-400 text-[10px] font-bold uppercase tracking-widest">
      <p>© {currentYear} Subhash</p>
      <button className="flex items-center gap-2 px-4 py-2 bg-zinc-900 text-white rounded-full hover:bg-zinc-800 transition-colors">
        <span className="text-[10px]">{portfolioData.labels.share}</span>
      </button>
    </footer>
  );
};

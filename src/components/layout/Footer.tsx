"use client";

import React, { useEffect, useState } from 'react';
import { portfolioData } from '@/components/constants/data';
import { Eye } from 'lucide-react';

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  const initialViews = portfolioData.views || 0;
  const [views, setViews] = useState(initialViews);

  useEffect(() => {
    // Persistent counter logic using localStorage
    const savedViews = localStorage.getItem('portfolio_views');
    const lastVisit = localStorage.getItem('last_visit');
    const now = new Date().getTime();
    
    let currentCount = savedViews ? parseInt(savedViews) : initialViews;

    // Simulate visit increase (only if more than 1 minute has passed since last visit to avoid spam)
    if (!lastVisit || now - parseInt(lastVisit) > 60000) {
      currentCount += 1;
      localStorage.setItem('portfolio_views', currentCount.toString());
      localStorage.setItem('last_visit', now.toString());
    }
    
    setViews(currentCount);
  }, [initialViews]);

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: portfolioData.metadata.title,
          text: portfolioData.metadata.description,
          url: window.location.href,
        });
      } catch (error) {
        if ((error as Error).name !== 'AbortError') {
          console.error('Error sharing:', error);
        }
      }
    } else {
      try {
        await navigator.clipboard.writeText(window.location.href);
        alert(portfolioData.labels.shareSuccess);
      } catch (err) {
        console.error('Failed to copy link:', err);
      }
    }
  };

  return (
    <footer className="pt-12 pb-6 flex items-center justify-between text-gray-400 dark:text-zinc-500 text-[10px] font-bold uppercase tracking-widest">
      <p>© {currentYear} {portfolioData.labels.copyright}</p>
      <div className="flex items-center gap-3">
        <div className="flex items-center gap-2 px-3 py-1.5 bg-gray-50 dark:bg-zinc-800/50 text-gray-500 dark:text-zinc-400 border border-gray-100 dark:border-zinc-700/50 rounded-full">
          <Eye className="w-3 h-3" strokeWidth={2.5} />
          <span>{views.toLocaleString()} views</span>
        </div>
        <button 
          onClick={handleShare}
          className="flex items-center gap-2 px-4 py-2 bg-gray-100 dark:bg-zinc-700 text-gray-900 dark:text-white border border-gray-200 dark:border-zinc-600 rounded-full hover:bg-gray-200 dark:hover:bg-zinc-600 shadow-sm transition-colors"
        >
          <span className="text-[10px]">{portfolioData.labels.share}</span>
        </button>
      </div>
    </footer>
  );
};

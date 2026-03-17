"use client";

import React from 'react';
import { portfolioData } from "@/components/constants/data";

export const Experience = () => {
  return (
    <section className="pt-4" aria-label="Work experience">
      <h2 className="mb-4 text-base font-bold text-gray-900 text-left">{portfolioData.titles.experience}</h2>
      <div className="relative">
        <div className="absolute left-3 top-0 bottom-0 w-px bg-gray-100"></div>
        <div className="space-y-4">
          {portfolioData.experience.map((exp, i) => (
            <div key={i} className="relative pl-8">
              <div className="absolute left-2 top-2 h-2 w-2 rounded-full bg-orange-400"></div>
              <div className="rounded-2xl border border-gray-100 bg-white p-4 shadow-sm">
                <div className="flex items-center gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gray-50 flex-shrink-0 border border-gray-100">
                    <img alt={exp.company} className="h-6 w-6 object-contain" src={exp.logo} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-sm font-bold text-gray-900">{exp.company}</div>
                    <div className="text-[11px] font-semibold text-gray-500">
                      {exp.role} • {exp.duration}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

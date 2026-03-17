import React from 'react';
import { TechIcon } from './TechIcon';
import { Skill } from '@/types';

interface SkillBadgeProps {
  skill: Skill;
}

export const SkillBadge: React.FC<SkillBadgeProps> = ({ skill }) => (
  <div className="group flex-shrink-0">
    <div className="flex items-center gap-2 rounded-xl border border-gray-200 bg-white px-3 py-1.5 text-[12px] font-semibold text-gray-700 shadow-sm transition-all duration-300 hover:border-gray-300 hover:shadow-md">
      <span className="flex h-5 w-5 items-center justify-center">
        <TechIcon name={skill.name} size={14} />
      </span>
      <span>{skill.name}</span>
    </div>
  </div>
);

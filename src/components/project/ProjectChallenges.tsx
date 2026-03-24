import { ChallengeItem } from '@/types/project';

interface ProjectChallengesProps {
  challenges: ChallengeItem[];
}

export function ProjectChallenges({ challenges }: ProjectChallengesProps) {
  if (challenges.length === 0) return null;

  return (
    <section>
      <h2 className="text-xl font-semibold tracking-tight border-b border-gray-200 dark:border-[#272727] pb-3 mb-4 text-gray-900 dark:text-[#f0f0f0]">
        Challenges & Solutions
      </h2>
      <div className="divide-y divide-gray-200 dark:divide-[#272727]">
        {challenges.map((item, i) => (
          <div key={i} className="py-8 first:pt-0 last:pb-0 space-y-4">
            <div className="flex items-start gap-4">
              <span className="h-fit px-2 py-0.5 bg-gray-50 dark:bg-[#1e1e1e] border border-gray-200 dark:border-[#2d2d2d] text-gray-500 dark:text-[#888] font-mono text-[10px] uppercase tracking-wider rounded">
                Challenge
              </span>
              <p className="text-gray-900 dark:text-[#f0f0f0] text-[15px] font-medium leading-relaxed">
                {item.problem}
              </p>
            </div>
            <div className="pl-6 border-l-2 border-gray-200 dark:border-[#333333]">
              <p className="text-gray-600 dark:text-[#a0a0a0] text-[15px] leading-relaxed italic">
                {item.solution}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

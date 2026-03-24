import { ChallengeItem } from '@/types/project';

interface ProjectChallengesProps {
  challenges: ChallengeItem[];
}

export function ProjectChallenges({ challenges }: ProjectChallengesProps) {
  if (challenges.length === 0) return null;

  return (
    <section>
      <h2 className="text-xl font-semibold tracking-tight border-b border-gray-200 dark:border-[#272727] pb-3 mb-6 text-gray-900 dark:text-[#f0f0f0]">
        Challenges & Solutions
      </h2>
      <div className="p-6 rounded-2xl border border-gray-200 dark:border-[#272727] bg-amber-50/5 dark:bg-amber-900/5 shadow-sm">
        <div className="space-y-10">
          {challenges.map((item, i) => (
            <div key={i} className="group space-y-4">
              <div className="flex items-start gap-4">
                <span className="flex-shrink-0 mt-1 px-2 py-0.5 bg-amber-100/50 dark:bg-amber-900/30 border border-amber-200 dark:border-amber-800/50 text-amber-700 dark:text-amber-400 font-mono text-[9px] uppercase tracking-wider rounded font-bold">
                  Challenge
                </span>
                <p className="text-gray-900 dark:text-[#f0f0f0] text-[15px] font-semibold leading-relaxed group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors duration-300">
                  {item.problem}
                </p>
              </div>
              <div className="relative pl-6 ml-4 border-l-2 border-amber-500/20 group-hover:border-amber-500 transition-colors duration-300">
                <div className="absolute -left-[2px] top-0 h-4 w-[2px] bg-amber-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                <p className="text-gray-600 dark:text-[#a0a0a0] text-[15px] leading-relaxed">
                  <span className="text-gray-400 dark:text-[#555] font-mono text-[10px] uppercase mr-2 opacity-50 font-bold">Solution:</span>
                  {item.solution}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


import { FeatureItem } from '@/types/project';

interface ProjectFeaturesProps {
  features: FeatureItem[];
}

export function ProjectFeatures({ features }: ProjectFeaturesProps) {
  if (features.length === 0) return null;

  return (
    <section>
      <h2 className="text-xl font-semibold tracking-tight border-b border-gray-200 dark:border-[#272727] pb-3 mb-6 text-gray-900 dark:text-[#f0f0f0]">
        Key Features
      </h2>
      <div className="p-6 rounded-2xl border border-gray-200 dark:border-[#272727] bg-emerald-50/10 dark:bg-emerald-900/5 shadow-sm">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
          {features.map((item, i) => (
            <div key={i} className="flex gap-4 items-start group">
              <div className="mt-1.5 p-1 rounded-full bg-emerald-500/10 dark:bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 group-hover:bg-emerald-500 group-hover:text-white transition-all duration-300">
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div className="text-[15px] leading-relaxed">
                <span className="text-gray-900 dark:text-[#f0f0f0] font-semibold block mb-0.5">{item.title}</span>
                <span className="text-gray-600 dark:text-[#a0a0a0] font-normal">{item.description}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

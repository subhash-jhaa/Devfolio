import { ImplementationItem } from '@/types/project';

interface ProjectImplementationProps {
  implementation: ImplementationItem[];
}

export function ProjectImplementation({ implementation }: ProjectImplementationProps) {
  if (implementation.length === 0) return null;

  return (
    <section>
      <h2 className="text-xl font-semibold tracking-tight border-b border-gray-200 dark:border-[#272727] pb-3 mb-6 text-gray-900 dark:text-[#f0f0f0]">
        Implementation Details
      </h2>
      <div className="p-6 rounded-2xl border border-gray-200 dark:border-[#272727] bg-gray-50/50 dark:bg-[#111111]/50 shadow-sm">
        <div className="space-y-8">
          {implementation.map((item, i) => (
            <div key={i} className="group relative pl-6 border-l-2 border-blue-500/20 hover:border-blue-500 transition-colors duration-300">
              <h3 className="text-gray-900 dark:text-[#f0f0f0] font-semibold mb-2">
                {item.title}
              </h3>
              <p className="text-gray-600 dark:text-[#a0a0a0] text-[15px] leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

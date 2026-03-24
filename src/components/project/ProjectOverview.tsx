interface ProjectOverviewProps {
  overview: string[];
}

export function ProjectOverview({ overview }: ProjectOverviewProps) {
  if (overview.length === 0) return null;

  return (
    <section>
      <h2 className="text-xl font-semibold tracking-tight border-b border-gray-200 dark:border-[#272727] pb-3 mb-4 text-gray-900 dark:text-[#f0f0f0]">
        Overview
      </h2>
      <div className="space-y-4">
        {overview.map((para, i) => (
          <p key={i} className="text-gray-600 dark:text-[#a0a0a0] text-[15px] leading-relaxed">
            {para}
          </p>
        ))}
      </div>
    </section>
  );
}

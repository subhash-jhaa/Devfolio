'use client';

import React from 'react';
import { GitHubCalendar } from 'react-github-calendar';

interface Props {
  username: string;
}

const GITHUB_THEME = {
  light: ['#ebedf0', '#9be9a8', '#40c463', '#30a14e', '#216e39'],
  dark: ['#161b22', '#0e4429', '#006d32', '#26a641', '#39d353'],
};

// --- Constants for Grid Calculation ---
const TOTAL_WEEKS = 53;
const GAPS = TOTAL_WEEKS - 1;
const DEFAULT_BLOCK_SIZE = 9;
const DEFAULT_BLOCK_MARGIN = 2;
const MARGIN_RATIO = DEFAULT_BLOCK_MARGIN / DEFAULT_BLOCK_SIZE;
const PADDING_OFFSET = 48; // accounts for card's left+right padding/ 0.222...

export const GitHubCalendarWrapper = ({ username }: Props) => {
  const [mounted, setMounted] = React.useState(false);
  const [dimensions, setDimensions] = React.useState({ 
    blockSize: DEFAULT_BLOCK_SIZE, 
    blockMargin: DEFAULT_BLOCK_MARGIN 
  });
  const containerRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    setMounted(true);
    const container = containerRef.current;
    if (!container) return;

   const calculateDimensions = (width: number) => {
  if (width <= 0) return;

  const availableWidth = width - PADDING_OFFSET; // ← subtract padding

  const denominator = TOTAL_WEEKS + GAPS * MARGIN_RATIO;
  const blockSize = Math.floor((availableWidth / denominator) * 10) / 10;
  const blockMargin = Math.floor((blockSize * MARGIN_RATIO) * 10) / 10;

  setDimensions({
    blockSize,
    blockMargin,
  });
};

    const observer = new ResizeObserver((entries) => {
      for (const entry of entries) {
        calculateDimensions(entry.contentRect.width);
      }
    });

    observer.observe(container);
    calculateDimensions(container.getBoundingClientRect().width);

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={containerRef} className="w-full">
      {mounted && (
        <GitHubCalendar
          username={username}
          theme={GITHUB_THEME}
          fontSize={12}
          blockSize={dimensions.blockSize}
          blockMargin={dimensions.blockMargin}
          showWeekdayLabels={['monday', 'wednesday', 'friday']}
          hideColorLegend={true}
          hideTotalCount={true}
          loading={false}
        />
      )}
    </div>
  );
};

'use client'

import Image from 'next/image'
import { useState } from 'react'

type Props = {
  src: string
  alt: string
  className?: string
  aspectRatio?: string   // e.g. "16/9", "16/10", or "auto"
  priority?: boolean
  quality?: number
}

export default function ProjectImage({ 
  src, 
  alt, 
  className, 
  aspectRatio = '16/9',
  priority = false,
  quality = 100
}: Props) {
  const [failed, setFailed] = useState(!src)

  if (failed) {
    return (
      <div
        className={`w-full bg-gray-50 dark:bg-[#141414] border border-gray-200 dark:border-[#272727] rounded-lg 
          flex items-center justify-center ${className ?? ''}`}
        style={{ aspectRatio: aspectRatio === 'auto' ? '16/9' : aspectRatio }}
      >
        <div className="flex flex-col items-center gap-2 text-gray-400 dark:text-[#333]">
          {/* simple image icon */}
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" 
            stroke="currentColor" strokeWidth="1.2">
            <rect x="3" y="3" width="18" height="18" rx="2"/>
            <circle cx="8.5" cy="8.5" r="1.5"/>
            <path d="M21 15l-5-5L5 21"/>
          </svg>
          <span className="text-[11px] font-mono text-gray-500 dark:text-[#444]">
            No image yet
          </span>
        </div>
      </div>
    )
  }

  return (
    <div
      className={`relative w-full overflow-hidden rounded-lg border 
        border-gray-200 dark:border-[#272727] bg-gray-100 dark:bg-[#141414] ${className ?? ''}`}
      style={{ aspectRatio: aspectRatio === 'auto' ? 'auto' : aspectRatio }}
    >
      <Image
        src={src}
        alt={alt}
        {...(aspectRatio === 'auto' ? { width: 1200, height: 750 } : { fill: true })}
        quality={quality}
        sizes="(max-width: 640px) 100vw, 1200px"
        className={aspectRatio === 'auto' ? 'w-full h-auto' : 'object-cover'}
        priority={priority}
        onError={() => setFailed(true)}
      />
    </div>
  )
}

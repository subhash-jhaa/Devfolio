'use client'

import Link from 'next/link'
import { ArrowLeft, Hammer, Sparkles } from 'lucide-react'
import { motion } from 'framer-motion'

interface BuildingProjectProps {
  projectName: string
}

export default function BuildingProject({ projectName }: BuildingProjectProps) {
  return (
    <div className="min-h-screen bg-white dark:bg-[#0c0c0c] flex items-center justify-center px-4 relative overflow-hidden font-sans">
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div 
          className="absolute inset-0 opacity-[0.03] dark:opacity-[0.07]" 
          style={{ 
            backgroundImage: 'linear-gradient(to right, #808080 1px, transparent 1px), linear-gradient(to bottom, #808080 1px, transparent 1px)',
            backgroundSize: '40px 40px' 
          }}
        />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-zinc-400/10 dark:bg-zinc-100/5 blur-[120px] rounded-full" />
      </div>

      <div className="max-w-2xl w-full text-center relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12 flex flex-col items-center"
        >
          {/* Animated Icon Container */}
          <div className="relative mb-8">
            <motion.div 
              animate={{ 
                rotate: [0, -10, 0],
              }}
              transition={{ 
                duration: 2, 
                repeat: Infinity, 
                ease: "easeInOut" 
              }}
              className="w-24 h-24 bg-white dark:bg-zinc-900 rounded-[2.5rem] flex items-center justify-center border border-zinc-200 dark:border-zinc-800 shadow-2xl relative z-10"
            >
              <Hammer className="w-10 h-10 text-zinc-900 dark:text-white" />
            </motion.div>
            
            {/* Floating Sparkles */}
            <motion.div
              animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute -top-2 -right-2 text-zinc-400 dark:text-zinc-500"
            >
              <Sparkles className="w-6 h-6" />
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-100 dark:bg-zinc-800/50 border border-zinc-200 dark:border-zinc-800 text-[10px] uppercase tracking-[0.2em] font-bold text-zinc-500 dark:text-zinc-400 mb-6"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-zinc-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-zinc-500"></span>
            </span>
            Work in Progress
          </motion.div>

          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-zinc-900 dark:text-white mb-6">
            <span className="text-zinc-400 dark:text-zinc-600 font-medium">{projectName}</span> <br />
            Something <span className="italic font-serif">Great</span> is Taking Shape
          </h1>
          
          <p className="text-zinc-600 dark:text-zinc-400 mb-12 text-lg md:text-xl leading-relaxed max-w-lg mx-auto font-light">
            I&apos;m currently fine-tuning the technical architecture and crafting the case study for this project.
          </p>

          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Link 
              href="/"
              className="group inline-flex items-center gap-3 px-8 py-4 bg-zinc-900 dark:bg-white text-white dark:text-black rounded-full font-semibold transition-all shadow-xl shadow-zinc-200 dark:shadow-none hover:shadow-2xl hover:shadow-zinc-300 dark:hover:shadow-zinc-800"
            >
              <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
              Return to Portfolio
            </Link>
          </motion.div>
        </motion.div>

        {/* Bottom Status Labels */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-8 md:mt-12 flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12 text-[10px] md:text-[12px] uppercase tracking-[0.2em] md:tracking-[0.3em] font-bold"
        >
          <div className="flex flex-col gap-1.5 md:gap-2 items-center group">
            <span className="text-zinc-400 dark:text-zinc-600 font-medium tracking-widest transition-colors group-hover:text-zinc-500">Phase</span>
            <span className="text-zinc-900 dark:text-white bg-zinc-100 dark:bg-zinc-800/80 px-4 py-1.5 rounded-md border border-zinc-200 dark:border-zinc-700/50 shadow-sm whitespace-nowrap">Development</span>
          </div>
          
          <div className="hidden md:block w-[1px] h-12 bg-zinc-200 dark:bg-zinc-800" />
          
          <div className="flex flex-col gap-1.5 md:gap-2 items-center group">
            <span className="text-zinc-400 dark:text-zinc-600 font-medium tracking-widest transition-colors group-hover:text-zinc-500">Status</span>
            <span className="text-zinc-900 dark:text-white bg-zinc-100 dark:bg-zinc-800/80 px-4 py-1.5 rounded-md border border-zinc-200 dark:border-zinc-700/50 shadow-sm whitespace-nowrap">Refining</span>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

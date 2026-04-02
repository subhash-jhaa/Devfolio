import { Variants, TargetAndTransition } from "framer-motion";

/**
 * Common animation variants for consistent motion across the app.
 * Using these ensures a unified look and feel.
 */

export const FADE_IN: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

export const SLIDE_UP: Variants = {
  hidden: { y: 20, opacity: 0 },
  visible: { 
    y: 0, 
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15
    }
  },
};

export const STAGGER_CONTAINER: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export const SCALE_IN: Variants = {
  hidden: { scale: 0.9, opacity: 0 },
  visible: { 
    scale: 1, 
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 260,
      damping: 20
    }
  },
};

export const HOVER_SCALE: TargetAndTransition = {
  scale: 1.02,
  transition: { type: "spring", stiffness: 400, damping: 10 }
};

export const TAP_SCALE: TargetAndTransition = { scale: 0.98 };

export const SPRING_TRANSITION = {
  type: "spring",
  stiffness: 260,
  damping: 20
};

/**
 * Standard Entry Animations
 */
export const FADE_IN_LEFT: Variants = {
  hidden: { opacity: 0, x: -20 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

export const SCALE_SPRING: Variants = {
  hidden: { scale: 0.95, opacity: 0 },
  visible: { 
    scale: 1, 
    opacity: 1,
    transition: { 
      type: "spring",
      stiffness: 300,
      damping: 25,
      mass: 0.5
    }
  }
};

/**
 * Viewport configuration
 */
export const VIEWPORT_CONFIG = {
  once: true,
  margin: "-50px"
};

export const VIEWPORT_STRICT = {
  once: true,
  margin: "-100px"
};

/**
 * Social icon/card hover effects
 */
export const SOCIAL_HOVER: TargetAndTransition = { 
  y: -3, 
  scale: 1.1,
  transition: { type: "spring", stiffness: 400, damping: 10 }
};

export const SOCIAL_TAP: TargetAndTransition = { scale: 0.9 };

/**
 * Success message pop-in
 */
export const SUCCESS_POP: Variants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: { type: "spring", stiffness: 500, damping: 25 }
  }
};

/**
 * Reveal animation for cards on scroll
 */
export const CARD_SCROLL_REVEAL: Variants = {
  hidden: { 
    opacity: 0, 
    y: 30,
    scale: 0.95
  },
  visible: { 
    opacity: 1, 
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 20,
      duration: 0.6
    }
  },
};

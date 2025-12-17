import { useRef } from "react";
import { useScroll, useTransform, motion, useReducedMotion } from "framer-motion";

export default function ParallaxSection({
  children,
  speed = 0.5,
  className = "",
  direction = "vertical",
}) {
  const ref = useRef(null);
  const prefersReducedMotion = useReducedMotion();
  
  // Disable parallax on mobile and for users who prefer reduced motion
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
  const shouldAnimate = !prefersReducedMotion && !isMobile;
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
    layoutEffect: false, // Use useEffect instead of useLayoutEffect for better performance
  });

  // Reduce parallax intensity for better performance
  const reducedSpeed = speed * 0.5;
  
  const y = useTransform(
    scrollYProgress,
    [0, 1],
    shouldAnimate && direction === "vertical" ? [0, -100 * reducedSpeed] : [0, 0]
  );
  const x = useTransform(
    scrollYProgress,
    [0, 1],
    shouldAnimate && direction === "horizontal" ? [0, -100 * reducedSpeed] : [0, 0]
  );
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  return (
    <motion.div
      ref={ref}
      style={{ 
        y, 
        x, 
        opacity,
        transform: 'translateZ(0)', // Force GPU acceleration
        willChange: shouldAnimate ? 'transform' : 'auto'
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function ParallaxElement({ children, speed = 0.3, className = "" }) {
  const ref = useRef(null);
  const prefersReducedMotion = useReducedMotion();
  
  // Disable on mobile for better performance
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
  const shouldAnimate = !prefersReducedMotion && !isMobile;
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
    layoutEffect: false,
  });

  // Reduce parallax intensity
  const reducedSpeed = speed * 0.5;
  const y = useTransform(
    scrollYProgress, 
    [0, 1], 
    shouldAnimate ? [-50 * reducedSpeed, 50 * reducedSpeed] : [0, 0]
  );

  return (
    <motion.div 
      ref={ref} 
      style={{ 
        y,
        transform: 'translateZ(0)', // Force GPU acceleration
        willChange: shouldAnimate ? 'transform' : 'auto'
      }} 
      className={className}
    >
      {children}
    </motion.div>
  );
}


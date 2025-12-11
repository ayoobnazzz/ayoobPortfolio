import { useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";

export default function ParallaxSection({
  children,
  speed = 0.5,
  className = "",
  direction = "vertical",
}) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(
    scrollYProgress,
    [0, 1],
    direction === "vertical" ? [0, -100 * speed] : [0, 0]
  );
  const x = useTransform(
    scrollYProgress,
    [0, 1],
    direction === "horizontal" ? [0, -100 * speed] : [0, 0]
  );
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  return (
    <motion.div
      ref={ref}
      style={{ y, x, opacity }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function ParallaxElement({ children, speed = 0.3, className = "" }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [-50 * speed, 50 * speed]);

  return (
    <motion.div ref={ref} style={{ y }} className={className}>
      {children}
    </motion.div>
  );
}


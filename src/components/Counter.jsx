import { useEffect, useRef } from "react";
import CountUp from "react-countup";
import { useInView } from "../hooks/useInView";

const Counter = ({ end, decimals }) => {
  const [viewRef, isInView] = useInView({ threshold: 0.1 });
  const startRef = useRef(null);
  const hasStartedRef = useRef(false);

  useEffect(() => {
    if (isInView && !hasStartedRef.current && startRef.current) {
      // Add a small delay to match the original delayedCall behavior
      setTimeout(() => {
        if (startRef.current) {
          startRef.current();
          hasStartedRef.current = true;
        }
      }, 100);
    }
  }, [isInView]);

  return (
    <CountUp
      end={end ? end : 100}
      duration={3}
      decimals={decimals ? decimals : 0}
    >
      {({ countUpRef, containerRef, start }) => {
        startRef.current = start;
        
        // react-countup v6 provides containerRef as a ref object
        const reactCountupRef = containerRef || countUpRef;
        
        // Combine refs callback
        const combinedRef = (node) => {
          // Attach to react-countup ref object
          if (reactCountupRef && typeof reactCountupRef === 'object' && 'current' in reactCountupRef) {
            reactCountupRef.current = node;
          }
          
          // Attach to useInView ref
          if (viewRef && typeof viewRef === 'object' && 'current' in viewRef) {
            viewRef.current = node;
          }
        };

        return (
          <span
            className="count-text"
            data-from="0"
            data-to={end}
            ref={combinedRef}
          >
            count
          </span>
        );
      }}
    </CountUp>
  );
};

export default Counter;

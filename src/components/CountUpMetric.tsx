import { useEffect, useRef, useState } from "react";

interface CountUpMetricProps {
  end: number;
  duration?: number;
  suffix?: string;
  prefix?: string;
  showMillionsToBillions?: boolean;
}

const CountUpMetric = ({ 
  end, 
  duration = 2800, 
  suffix = "", 
  prefix = "",
  showMillionsToBillions = false 
}: CountUpMetricProps) => {
  const [count, setCount] = useState(0);
  const [displaySuffix, setDisplaySuffix] = useState(suffix);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

  // Easing function for smooth acceleration/deceleration
  const easeOutQuart = (x: number): number => {
    return 1 - Math.pow(1 - x, 4);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let startTime: number;
    let animationFrame: number;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      const easedProgress = easeOutQuart(progress);

      // For billions, show in millions first then transition
      if (showMillionsToBillions && suffix === "B") {
        const totalMillions = end * 1000;
        
        // First 60% show in millions, last 40% transition to billions
        if (progress < 0.6) {
          const currentValue = easedProgress * totalMillions * 0.6;
          setCount(Math.floor(currentValue));
          setDisplaySuffix("M+");
        } else {
          // Smooth transition to billions with decimal precision
          const transitionProgress = (progress - 0.6) / 0.4;
          const billionsValue = end * easeOutQuart(transitionProgress);
          setCount(parseFloat(billionsValue.toFixed(1)));
          setDisplaySuffix("B");
        }
      } else {
        setCount(Math.floor(easedProgress * end));
        setDisplaySuffix(suffix);
      }

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrame);
  }, [isVisible, end, duration, suffix, showMillionsToBillions]);

  return (
    <span ref={ref}>
      {prefix}
      {count}
      {displaySuffix}
    </span>
  );
};

export default CountUpMetric;

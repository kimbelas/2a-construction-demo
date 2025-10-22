import { useEffect, useState, RefObject } from "react";

/**
 * Custom hook to detect when an element enters the viewport
 * Used for scroll-triggered animations
 *
 * @param ref - React ref to the element to observe
 * @param threshold - Intersection threshold (0 to 1)
 * @param triggerOnce - Whether to trigger only once or every time element enters viewport
 * @returns boolean indicating if element is in view
 */
export function useScrollAnimation(
  ref: RefObject<Element>,
  threshold: number = 0.1,
  triggerOnce: boolean = true
): boolean {
  const [isInView, setIsInView] = useState(false);
  const [hasTriggered, setHasTriggered] = useState(false);

  useEffect(() => {
    if (!ref.current) return;

    // If already triggered and triggerOnce is true, don't observe
    if (hasTriggered && triggerOnce) {
      setIsInView(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        const inView = entry.isIntersecting;
        setIsInView(inView);

        if (inView && !hasTriggered) {
          setHasTriggered(true);
        }
      },
      { threshold, rootMargin: "50px" }
    );

    observer.observe(ref.current);

    return () => {
      observer.disconnect();
    };
  }, [ref, threshold, triggerOnce, hasTriggered]);

  return isInView;
}

/**
 * Hook to detect scroll direction
 * @returns 'up' | 'down' | null
 */
export function useScrollDirection() {
  const [scrollDirection, setScrollDirection] = useState<'up' | 'down' | null>(null);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY) {
        setScrollDirection('down');
      } else if (currentScrollY < lastScrollY) {
        setScrollDirection('up');
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return scrollDirection;
}

/**
 * Hook to detect if user has scrolled past a certain point
 * @param threshold - Scroll position in pixels
 * @returns boolean
 */
export function useScrollPast(threshold: number = 100): boolean {
  const [hasPassed, setHasPassed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setHasPassed(window.scrollY > threshold);
    };

    handleScroll(); // Check initial state
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [threshold]);

  return hasPassed;
}

import { useState, useEffect, useCallback, useRef } from "react";

export function useCarousel(total, interval = 3800) {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const timer = useRef(null);

  const go = useCallback(
    (next) => {
      setDirection(next > index || (next === 0 && index === total - 1) ? 1 : -1);
      setIndex(next);
    },
    [index, total]
  );

  const next = useCallback(() => go((index + 1) % total), [go, index, total]);
  const prev = useCallback(() => go((index - 1 + total) % total), [go, index, total]);

  useEffect(() => {
    timer.current = setInterval(next, interval);
    return () => clearInterval(timer.current);
  }, [next, interval]);

  const resetTimer = useCallback(() => {
    clearInterval(timer.current);
    timer.current = setInterval(next, interval);
  }, [next, interval]);

  return { index, direction, next, prev, go, resetTimer };
}

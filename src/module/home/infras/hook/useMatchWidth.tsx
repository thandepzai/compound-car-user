import { useEffect, useState } from "react";

export const useMatchWidth = (
  ref: React.RefObject<HTMLElement | null>,
  width: number
) => {
  const [isMatched, setIsMatched] = useState(false);

  useEffect(() => {
    const checkWidth = () => {
      if (!ref.current) return;
      const elementWidth = ref.current.getBoundingClientRect().width;
      setIsMatched(elementWidth <= width);
    };

    checkWidth();
    window.addEventListener("resize", checkWidth);

    return () => {
      window.removeEventListener("resize", checkWidth);
    };
  }, [ref, width]);

  return isMatched;
};

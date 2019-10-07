import { useRef, useState } from "react";

const useCarousel = () => {
  const [scrollState, setScrollState] = useState(0);
  const scrollRef = useRef(0);
  const scrollableRef = useRef(null);

  const scrollHandler = ({ target: { scrollLeft, scrollWidth, offsetWidth } }) => {
    scrollRef.current = scrollLeft;
    const scrollMax = scrollWidth - offsetWidth;
    let newScrollState;
    if (scrollLeft === 0) newScrollState = 0;
    else if (scrollLeft === scrollMax) newScrollState = 2;
    else newScrollState = 1;
    if (newScrollState !== scrollState) setScrollState(newScrollState);
  };

  const scroll = (val = 1) =>
    scrollableRef.current.scrollBy({
      top: 0,
      left: val * (scrollableRef.current.offsetWidth / 2),
      behavior: "smooth"
    });

  return [scrollState, scroll, scrollableRef, scrollHandler];
};

export default useCarousel;

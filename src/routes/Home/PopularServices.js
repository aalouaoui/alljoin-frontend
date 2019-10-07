import React from "react";
import styled from "styled-components";
import SectionTitle from "components/SectionTitle";
import categories from "utils/categories";
import CategoryCard from "components/CategoryCard";
import { ChevronIcon } from "components/Icons";
import useCarousel from "hooks/useCarousel";

const Div = styled.div`
  margin: 0 ${({ theme }) => theme.spacing};
  height: 250px;
  overflow-y: hidden;
  position: relative;
  .wrapper {
    display: flex;
    justify-content: stretch;
    align-items: center;
    overflow-x: auto;
    padding-bottom: 5px;
  }
  .btn {
    position: absolute;
    top: 0;
    bottom: 0;
    width: 100px;
    padding-left: ${({ theme }) => theme.spacing};
    display: flex;
    justify-content: center;
    align-items: center;
    background: linear-gradient(-90deg, ${({ theme }) => theme.bg}, rgba(0, 0, 0, 0));
    cursor: pointer;
  }

  .prev {
    left: 0;
    transform: rotate(180deg);
  }

  .next {
    right: 0;
  }
`;

const PopularServices = () => {
  const [scrollState, scroll, scrollableRef, scrollHandler] = useCarousel();
  const scrollLeft = () => scroll(-1);
  const scrollRight = () => scroll(1);
  return (
    <>
      <SectionTitle>Popular Professional Services</SectionTitle>
      <Div>
        {scrollState !== 0 && (
          <div className="btn prev" onClick={scrollLeft}>
            <ChevronIcon />
          </div>
        )}
        <div className="wrapper" ref={scrollableRef} onScroll={scrollHandler}>
          {categories.map(cat => (
            <CategoryCard key={cat.path} {...cat} />
          ))}
        </div>
        {scrollState !== 2 && (
          <div className="btn next" onClick={scrollRight}>
            <ChevronIcon />
          </div>
        )}
      </Div>
    </>
  );
};

export default PopularServices;

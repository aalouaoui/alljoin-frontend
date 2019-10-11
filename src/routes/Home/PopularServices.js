import React from "react";
import styled from "styled-components";
import SectionTitle from "components/SectionTitle";
import categories from "utils/categories";
import CategoryCard from "components/CategoryCard";
import { ChevronIcon } from "components/Icons";
import useCarousel from "hooks/useCarousel";

const Div = styled.div`
  margin: 0 30px;
  height: 250px;
  overflow-y: hidden;
  position: relative;
  .wrapper {
    display: flex;
    justify-content: stretch;
    align-items: center;
    overflow-x: auto;
    padding-bottom: 15px;
  }
  .btn {
    position: absolute;
    top: 0;
    bottom: 0;
    width: 100px;
    padding-left: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: linear-gradient(-90deg, ${({ theme }) => theme.black1}, rgba(0, 0, 0, 0));
    cursor: pointer;
  }

  .prev {
    left: 0px;
    transform: rotate(180deg);
  }

  .next {
    right: 0px;
  }

  @media (max-width: 970px) {
    height: 200px;
    .btn {
      width: 50px;
      padding-left: 10px;
    }
  }
  @media (max-width: 640px) {
    margin: 0 5px;
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

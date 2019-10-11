import React from "react";
import styled from "styled-components";
import Button from "./Button";
import { LocationIcon } from "./Icons";

const Div = styled.div`
  background: ${({ theme }) => theme.black2};
  margin: 0 30px;
  margin-bottom: 10px;
  padding: 30px;
  border-radius: 15px;
  &,
  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  img {
    height: 64px;
    width: 64px;
    margin-right: 15px;
    border-radius: 100%;
  }
  a {
    margin-left: 15px;
  }
  .alt {
    text-align: right;
    h4 {
      color: ${({ theme }) => theme.primary0};
    }
  }

  @media (max-width: 640px) {
    margin: 0 5px;
    margin-bottom: 10px;
    padding: 10px;

    & {
      flex-direction: column;
      justify-content: space-between;
      align-items: stretch;
      text-align: center;
    }
    div {
      flex-direction: column;
      align-items: stretch;
    }
    .alt {
      display: flex;
      justify-content: space-between;
      width: 100%;
    }
    a {
      margin: 5px 0;
    }
    img {
      margin: 5px auto;
    }
    * {
      line-height: 1.5;
    }
  }
`;

const LongCard = ({ title, img, id, location, duration, price }) => (
  <Div>
    <div>
      <img src={img} alt="job" />
      <span>
        <h4>{title}</h4>
        <i>
          <LocationIcon />
          &nbsp;
          {location}
        </i>
      </span>
    </div>
    <div>
      <span className="alt">
        <p>{duration} Days</p>
        <h4>{price}$</h4>
      </span>
      <Button href={`/jobs/${id}`}>Apply</Button>
    </div>
  </Div>
);

export default LongCard;

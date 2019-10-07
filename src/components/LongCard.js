import React from "react";
import styled from "styled-components";
import { A } from "hookrouter";
import Button from "./Button";
import { LocationIcon } from "./Icons";

const Div = styled.div`
  background: ${({ theme }) => theme.darkBg};
  margin: 0 ${({ theme }) => theme.spacing};
  margin-bottom: 10px;
  padding: ${({ theme }) => theme.spacing};
  border-radius: ${({ theme }) => theme.borderRadius};
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
      color: ${({ theme }) => theme.primaryLight};
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
      <Button Comp={A} href={`/jobs/${id}`}>
        Apply
      </Button>
    </div>
  </Div>
);

export default LongCard;

import { memo } from "react";
import styled from "styled-components";

const SectionTitle = styled.h1`
  padding: 30px;
  font-weight: 300;

  @media (max-width: 640px) {
    padding: 15px 5px;
    text-align: center;
  }
`;

export default memo(SectionTitle);

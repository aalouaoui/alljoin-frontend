import { memo } from "react";
import styled from "styled-components";

const SectionTitle = styled.h1`
  padding: ${({ theme }) => theme.spacing};
  font-weight: 300;
`;

export default memo(SectionTitle);

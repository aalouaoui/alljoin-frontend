import React, { memo } from "react";
import { A } from "hookrouter";
import styled from "styled-components";
import categories from "utils/categories";
import { howToList, supportList } from "./footerLists";
import FooterList from "./FooterList";

const TopFooter = styled.div`
  display: flex;
  background: ${({ theme }) => theme.black1};
  padding: 30px;
  border-radius: ${({ theme: { borderRadius: r } }) => `${r} ${r} 0 0`};
  justify-content: stretch;
  align-items: flex-start;
  a:hover {
    color: ${({ theme }) => theme.primary0};
  }
  @media (max-width: 640px) {
    padding: 15px;
    flex-direction: column;
    align-items: stretch;
  }
`;

const BottomFooter = styled.div`
  background: ${({ theme }) => theme.black2};
  padding: 0 30px;
  line-height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  a:hover {
    color: ${({ theme }) => theme.primary0};
  }
  @media (max-width: 640px) {
    padding: 0 5px;
    line-height: 40px;
    align-items: center;
    flex-direction: column;
  }
`;

const Footer = () => (
  <footer>
    <TopFooter>
      <FooterList title="Browse Categories" list={categories} />
      <FooterList title="How To Buy" list={howToList} />
      <FooterList title="Help And Support" list={supportList} />
    </TopFooter>
    <BottomFooter>
      <span>Copyright © 2019 AllJoin</span>
      <span>
        <A href="/terms">Terms & Condition</A>&nbsp;|&nbsp;
        <A href="/privacy-policy">Privacy Policy</A>
      </span>
    </BottomFooter>
  </footer>
);

export default memo(Footer);

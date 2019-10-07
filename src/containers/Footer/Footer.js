import React from "react";
import { A } from "hookrouter";
import styled from "styled-components";
import categories from "utils/categories";
import { howToList, supportList } from "./footerLists";
import FooterList from "./FooterList";

const TopFooter = styled.div`
  display: flex;
  background: ${({ theme }) => theme.bg};
  padding: ${({ theme }) => theme.spacing};
  border-radius: ${({ theme: { borderRadius: r } }) => `${r} ${r} 0 0`};
  justify-content: stretch;
  align-items: flex-start;
  > div {
    flex: 1;
    padding: 0 ${({ theme }) => theme.spacing};
  }
  h3 {
    margin-bottom: ${({ theme }) => theme.spacing};
  }

  a:hover {
    color: ${({ theme }) => theme.primaryLight};
  }
`;

const BottomFooter = styled.div`
  background: ${({ theme }) => theme.darkBg};
  padding: 0 ${({ theme }) => theme.spacing};
  line-height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  a:hover {
    color: ${({ theme }) => theme.primaryLight};
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

export default Footer;

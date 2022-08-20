import React, { ReactNode } from "react";
import Footer from "../../Footer";
import Navbar from "../../Navbar";
import { StyledFooter, StyledHeader, Styledlayout, StyledMain } from "./style";

interface Props {
  children: ReactNode;
}
const WebLayout = ({ children }: Props) => {
  return (
    <Styledlayout>
      <StyledHeader>
        <Navbar />
      </StyledHeader>
      <StyledMain>{children}</StyledMain>
      <StyledFooter>
        <Footer />
      </StyledFooter>
    </Styledlayout>
  );
};

export default WebLayout;

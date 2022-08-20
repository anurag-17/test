import styled from "styled-components";
import { COLORS } from "../../../lib/StyledComponents/themes";
import { Link } from "react-router-dom";


export const Container = styled.nav`
  background: ${COLORS.text} 0% 0% no-repeat padding-box;

  opacity: 0.8;
  height: 100vh;
  display: flex;
  flex-flow: column wrap;
  color: ${COLORS.white};
  z-index: 100;
`;

export const Section = styled.section`
  display: flex;
  flex-flow: row no-wrap;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid ${COLORS.border};
  padding: 2.5% 5%;
`;
export const Heading = styled.h1`
  display: block;
  font-size: 32px;
`;

export const CloseIcon = styled.img`
  display: block;
  height: 30px;
  width: 30px;
  cursor: pointer;
`;

export const Menu = styled.ul`
  padding: 0;
  padding: 0 5%;
`;

export const MenuItem = styled.li`
  list-style: none;
  border-bottom: 1px solid ${COLORS.border};
  flex-basis: 100%;
  display: block;
  padding: 5% 0;
`;

export const Nav = styled.span`
  text-decoration: none;
  opacity: 1;
  font-size: 18px;
  &:link {
    color: ${COLORS.white};
  }
  &:hover {
    color: ${COLORS.grey};
  }
  &:active {
    color: ${COLORS.grey};
  }
  &:visited {
    color: ${COLORS.grey};
  }
  cursor: pointer;
`;

export const NavWrapper = styled.div`
   display: flex;
  flex-flow: row no-wrap;
    justify-content: space-between;
    align-items: center;
  text-decoration: none;
  opacity: 1;
  font-size: 18px;
  &:link {
    color: ${COLORS.white};
  }
  &:hover {
    color: ${COLORS.grey};
  }
  &:active {
    color: ${COLORS.grey};
  }
  &:visited {
    color: ${COLORS.grey};
  }
  cursor: pointer;
`;
export const StyledNavLink = styled(Link)`
  font-size: 16px;
  text-decoration: none;
  text-wrap: no-wrap;
  color: ${COLORS.white};
  text-transform: uppercase;
  display: block;

  &:link {
    color: ${COLORS.white};
  }
  &:hover {
    color: ${COLORS.primary};
  }

  &:active {
    color: ${COLORS.primary};
  }
  &:focus {
    color: ${COLORS.primary};
  }
  &:visited {
    color: ${COLORS.white};
    &:hover {
      color: ${COLORS.primary};
    }
  }
`;
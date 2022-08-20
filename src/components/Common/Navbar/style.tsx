import { Link } from "react-router-dom";
import styled from "styled-components";
import { COLORS } from "../../../lib/StyledComponents/themes";
import { SCREEN_MAX, SCREEN_MIN } from "../../../utils/ScreenSettings";

interface Props {
  showDropDown?: boolean;
  setShowDropDown?: any;
  isLoggedIn?: boolean;
}
export const Header = styled.header`
  background-color: ${COLORS.black};
  margin: 0;
  display: flex;
  flex-direction: column;
  width: 100%;
  box-sizing: border-box;
  flex-shrink: 0;
  position: sticky;
  z-index: 1100;
  top: 0px;
  left: auto;
  right: 0px;
  color: ${COLORS.grey};
  transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
`;

export const Nav = styled.nav`
  padding: 10px 70px;
  @media ${SCREEN_MAX.sm} {
    padding: 3% 5%;
  }
`;

export const Ul = styled.ul<Props>`
  display: flex;
  flex-flow: row no-wrap;
  justify-content: space-around;

  align-items: center;

  text-decoration: none;
  list-style: none;
  padding: 0;
  & :first-child {
    flex-grow: 1;
  }
  & :nth-child(6) {
    flex-grow: 1;
  }

  & :nth-child(2),
  & :nth-child(3),
  & :nth-child(4),
  & :nth-child(5) {
    margin-right: 4%;
  }
  & :nth-child(7) {
    margin-right: 2%;
  }

  @media ${SCREEN_MAX.md} {
    display: flex;
    flex-flow: row no-wrap;
    justify-content: center;
    text-decoration: none;
    list-style: none;
    padding: 0;
    & :first-child {
      flex-grow: 1;
    }
    & :nth-child(6) {
      flex-grow: 1;
    }

    & :nth-child(2),
    & :nth-child(3),
    & :nth-child(4),
    & :nth-child(5),
    & :nth-child(6) {
      display: none;
    }

    & :nth-child(7) {
      margin-right: 5%;
      flex-grow: 1;
    }
    & :nth-child(8) {
      flex-grow: 1;
    }
  }

  @media ${SCREEN_MIN.md} {
    ${(p) =>
      p.isLoggedIn
        ? `
      & :nth-child(8) {
        display: none;
      }
      `
        : `
    & :nth-child(9) {
      display: none;
    }
    `}
  }

  @media ${SCREEN_MAX.sm} {
    ${(p) =>
      p.isLoggedIn
        ? `
        & :nth-child(2),
        & :nth-child(3),
        & :nth-child(4),
        & :nth-child(5),
        & :nth-child(6),
        & :nth-child(7) {
          display: none;
        }
      `
        : `
        & :nth-child(2),
        & :nth-child(3),
        & :nth-child(4),
        & :nth-child(5),
        & :nth-child(6),
        & :nth-child(7),
        & :nth-child(8) {
          display: none;
        }
        & :nth-child(9) {
          flex-grow: 1;
        }
    `}
  }
`;

export const Li = styled.li<Props>`
  font-size: 14px;
  position: relative;
  display: block;
  &:focus {
    pointer-events: none;
  }
  & > div {
    visibility: hidden;

    z-index: 1000;
  }
  &:focus > div {
    opacity: 1;
    visibility: visible;
    z-index: 100;
  }

  &:focus > span {
    color: ${COLORS.primary};
  }
`;

export const StyledLink = styled(Link)`
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

  // &:active {
  //   color: ${COLORS.primary};
  // }
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

export const StyledListItem = styled.span`
  font-size: 16px;
  text-decoration: none;
  text-wrap: no-wrap;
  color: ${COLORS.white};
  text-transform: uppercase;
  display: block;
  cursor: pointer;
  &:link {
    color: ${COLORS.white};
  }
  &:hover {
    color: ${COLORS.primary};
  }
  &:focus {
    color: ${COLORS.primary};
  }
  // &:active {
  //   color: ${COLORS.primary};
  // }
  &:visited {
    &:hover {
      color: ${COLORS.primary};
    }
  }
`;

export const MenuIcon = styled.img`
  cursor: pointer;
`;

export const StyledLoggedInAvatarWrapper = styled.section`
  width: 76px;
  height: 40px;
  border-radius: 8px;
  opacity: 1;
  background: ${COLORS.dropDownBackground};
  display: flex;
  justify-content: space-around;
  align-items: center;
  wrap: no-wrap;
`;

export const StyledLoggedInDropDown = styled.section`
  position: absolute;
  width: 100%;
  margin-left: -120px;
`;

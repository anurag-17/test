import { Link } from "react-router-dom";
import styled from "styled-components";
import { COLORS } from "../../../lib/StyledComponents/themes";

interface Props {
  positionAbsolute?: boolean;
  display?: boolean;
  pt?: number;
}

export const StyledDropDownWrapper = styled.div<Props>`
  position: ${(p) => p.positionAbsolute && "absolute"};
  width: 200px;
  padding-top: ${(p) => (p.pt ? `${p.pt}%` : "25%")};
  pointer-events: auto;
  left: 0;
`;
export const StyleDropDownContainer = styled.ul<Props>`
  background: ${COLORS.dropDownBackground} 0% 0% no-repeat padding-box;
  border-radius: 8px;
  width: 100%;
  color: ${COLORS.white};

  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  align-items: flex-start;

  text-decoration: none;
  list-style: none;
  > * {
    &:last-child {
      border-bottom: 0px;
    }
  }
`;

export const StyledDropDownItem = styled.li<Props>`
  text-color: ${COLORS.white};
  font-size: 0.875em;
  text-transform: uppercase;
  width: 100%;
  cursor: pointer;
  padding: 6% 8%;

  &:hover {
    color: ${COLORS.white};
    background-color: ${COLORS.black};
    opacity: 0.5;
  }
  > * {
    &:last-child {
      border-bottom: 0px;
    }
  }
`;

export const StyledDropDownLink = styled(Link)`
  font-size: 16px;
  text-decoration: none;
  text-wrap: no-wrap;
  width: 100%;
  border-bottom: 1px solid ${COLORS.dropDowanBorder};
  color: ${COLORS.white};
  &:link {
    color: ${COLORS.grey};
  }

  &:active {
    color: ${COLORS.white};
    transform: scale(0.98);
    /* Scaling button to 0.98 to its original size */
    box-shadow: 3px 2px 22px 1px rgba(0, 0, 0, 0.24);
    /* Lowering the shadow */
    background: ${COLORS.black};
    opacity: 0.7;
    transition: 0.5s;
  }
`;

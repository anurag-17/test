import styled from "styled-components";

import { COLORS } from "../../../lib/StyledComponents/themes";

export const StyledButton = styled.button.attrs(
  (props: { 
    color: string; 
    width: number; 
    background: string, 
    margin: number, 
    paddingVertical: number, 
    paddingHorizontal: number,
    fontSize: number,
    borderRadius: number,
   }) => props
)`

  background: ${(props) =>
    props.background ? props.background : COLORS.primary};
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border-radius: 20px;
  border: 2px solid
    ${(props) => (props.background ? props.background : COLORS.primary)};
  color: ${(props) => (props.color ? props.color : COLORS.white)};
  cursor: pointer;
`;

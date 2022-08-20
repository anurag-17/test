import styled from "styled-components";
import { COLORS } from "../../../lib/StyledComponents/themes";
import { SCREEN_MAX } from "../../../utils/ScreenSettings";

interface Props {
  width?: string;
}
export const Container = styled.section<Props>`
  width: ${(p) => (p.width ? p.width : "100%")};
  @media ${SCREEN_MAX.md} {
    width: 100%;
  }
`;
export const Label = styled.label`
  text-transform: uppercase;
`;
export const Input = styled.textarea`
  width: 100%;
  font-size: 1.125em;
  border: 0;
  padding: 12px 20px;
  margin: 1% 0px;

  border-radius: 8px;
  outline: none;
  border: 1px solid ${COLORS.inputBorder};
  color: ${COLORS.text};
  &:focus {
    outline: none;
    background: ${COLORS.inputBackground} 0% 0% no-repeat padding-box;
    border: 1px solid ${COLORS.primary};
  }
  &::placeholder {
    color: ${COLORS.text};
    font-family: Source Sans Pro;
    font-size: 0.8em;
    opacity:0.7;
  }
  &:focus::placeholder {
    color: transparent;
  }
`;

export const Icon = styled.div`
  position: absolute;
  bottom: 12px;
  right: 20px;
`;
export const TextAreaWrapper = styled.section`
  border-radius: 8px;
  position: relative;
  width: 100%;
  background: ${COLORS.white};
  margin-top: 0.5%;
  border: 0;

  &:focus {
    outline: none;
  }
`;

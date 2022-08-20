import styled from "styled-components";
import { COLORS } from "../../../lib/StyledComponents/themes";
interface IInputFieldProps { 
    color: string, 
    width: number, 
    background: string, 
    borderColor: string,
    fontSize?: number,
    margin?: number,
    paddingVertical?: number,
    paddingHorizontal?: number,
    height?: number,
    focusBackgroundColor?: string,
    borderRadius?: number,
}
export const StyledInputField = styled.input.attrs((props: IInputFieldProps) => props)`
background: ${props => props.background};
font-size: ${(props) => (props.fontSize ? props.fontSize : 1)}em;
margin: 1em;
margin: ${(props) => (props.margin ? props.margin : 1)}em;
padding: ${(props) => (props.paddingVertical ? props.paddingVertical : 0.25)}em ${(props) => (props.paddingHorizontal ? props.paddingHorizontal : 1)}em;
border-radius: ${(props) => (props.borderRadius ? props.borderRadius : 5)}px;
border: 1px solid ${props => props.borderColor};
width: ${props => props.width}px;
height: ${(props) => (props.height ? props.height : 30)}px;
&:focus {
    background: ${(props) => (props.focusBackgroundColor ? props.focusBackgroundColor : COLORS.lightPink)} 0% 0% no-repeat padding-box;
    outline: none;
}
`
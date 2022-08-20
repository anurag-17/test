import {createGlobalStyle} from "styled-components";
import { COLORS } from "./lib/StyledComponents/themes";

const GlobalStyles = createGlobalStyle`
    * {
        padding:0;
        box-sizing: border-box;
        margin: 0;
    }

    /*styles for multiselect library t library overide*/
    .rmsc {
        --rmsc-main: #4285f4;
        --rmsc-hover: #f1f3f5;
        --rmsc-selected: #e2e6ea;
        --rmsc-border: ${COLORS.inputBorder};
        --rmsc-gray: #aaa;
        --rmsc-bg: #fff;
        --rmsc-p: 10px;
        --rmsc-radius: 8px;
        --rmsc-h: 38px;
      }
      
    .rmsc .dropdown-heading .dropdown-heading-value {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: pre-wrap;
        flex: 1;
        height:100%;
        overflow-y:auto;
        padding-top:3%;
        
      }
      .rmsc .dropdown-container {
        position: relative;
        outline: 0;
        background-color: var(--rmsc-bg);
        border: 1px solid var(--rmsc-border);
        border-radius: var(--rmsc-radius);
        padding-right:1.4%;
      }

      /*styled for phone number input library overide*/
      .PhoneInputInput {
        /* The phone number input stretches to fill all empty space */
        flex: 1;
        /* The phone number input should shrink
           to make room for the extension input */
        min-width: 0;
        width: 100%;
        font-size: 1.125em;
        border: 0;
        padding: 10px 14px;
       border-radius: 8px;

    }

    .PhoneInputInput:focus {
        outline: none;
        background: ${COLORS.inputBackground} 0% 0% no-repeat padding-box;
        color: ${ COLORS.text};
        border: 1px solid ${COLORS.primary};

      }
    

   .PhoneInput {
	/* This is done to stretch the contents of this component. */
	display: flex;
	align-items: center;
    border-radius: 8px;
    border: 1px solid ${COLORS.inputBorder};
    padding-left:15px;
   }
   .PhoneInput:focus {
    border: 1px solid ${COLORS.primary};

   }

    
`
export default GlobalStyles;
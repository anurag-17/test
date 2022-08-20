import styled from "styled-components";
import { COLORS } from "../../lib/StyledComponents/themes";
import { SCREEN_MAX } from "../../utils/ScreenSettings";

export const StyledPostRoleWrapper = styled.div`
  position: relative;
  width: 80%;
  margin: 2% auto;
  border-radius: 8px;
`;
export const StyledBorderTop = styled.div`
  border-top: 3px solid ${COLORS.primary};

  width: 97%;
  border-radius: 10px;
  left: 1.5%;
  margin: auto;
`;
export const StyledPostRoleForm = styled.form`
  display: flex;
  flex-flow: row wrap;
  gap: 27px;
  width: 100%;
  padding: 1.5% 0px 0 0px;
`;

export const StylePostRoleButton = styled.section`
  margin-top: 4%;
  margin-bottom: 2%;
  text-align: center;
  width: 100%;
`;
export const DatePickerContainer = styled.div`
  top: 250px;
  z-index: 88;
  align-items: center;

  input{
    width: 330px;
    height: 40.5px;
    border-radius: 0.5rem;
    margin-top: 0.5rem;
    padding: 1rem;
    border: 1px solid #DEE2E6;
  }
  @media ${SCREEN_MAX.md} {
    input{ 
      width: 206px;
    }
    
  }
  
`;

export const Label = styled.label`
  display: flex;
  wrap: no-wrap;
  text-transform: uppercase;
`;
export const StyledAsterik = styled.span`
  color: #c92a2a;
  padding-left: 0.3rem;
`;

export const Container = styled.div`
  

`
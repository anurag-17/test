import styled from "styled-components";
import { SCREEN_MAX } from "../../../utils/ScreenSettings";

export const CardContainer = styled.div`
  background-color: #fff;
  height: 362px;
  width: 240px;

  @media ${SCREEN_MAX.md} {
    transform: scale(0.75, 0.75);
    width: 1000px;
    height: 400px;

    &:not(:first-child) {
      margin-top: -5rem;
      
    }
  }
`;

export const ImageWrapper = styled.div`
  height: 45%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 10px;
`;
export const SubWrapper = styled.div`
  height: 60%;
  margin: 0px;
`;
export const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 55%;
  display: flex;
  padding-bottom: 20px;

  h2 {
    text-align: center;
    font: normal normal 600 20px/24px SF Pro;
    letter-spacing: 0px;
    color: #212529;
    opacity: 1;
  }
  p {
    text-align: center;
    font: normal normal normal 14px/20px SF Pro;
    letter-spacing: 0px;
    color: #212529;
    opacity: 1;
    padding: 0px 10px;
  }
`;

export const DetailWrapper = styled.div`
  height: 50%;
  display: flex;
  justify-content: space-around;
  text-decoration: none;
  .button {
    width: 157px;
    height: 51px;
    background: #c92a2a 0% 0% no-repeat padding-box;
    border-radius: 26px;
    opacity: 1;
    text-decoration: none;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .button:hover {
    opacity: 0.8;
    height: 50px;
  }
 p {
    font: normal normal medium 16px/19px SF Pro;
    letter-spacing: 0px;
    color: #ffffff;
    opacity: 1;
   
  }

  .message {
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    height: 51px;
    width: 51px;
    background: #f1f3f5 0% 0% no-repeat padding-box;
    opacity: 1;
  }
  .message:hover {
    background-color: #d3d3d3;
  }

  @media ${SCREEN_MAX.md} {

    .button {
      flex-basis: 65%;
    }
  }
`;

import React from 'react'
import { StyledAuthLayoutWrppper } from "./style";

interface Props {
  children: any;
}
const AuthLayout = ({ children }: Props) => {
  return <StyledAuthLayoutWrppper>{children}</StyledAuthLayoutWrppper>;
};

export default AuthLayout;


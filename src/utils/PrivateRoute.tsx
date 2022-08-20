import React from 'react'
import { Navigate } from "react-router-dom";
import { TOKEN_KEY, USER_ID_KEY } from "../lib/Config/constants";
import ErrorBoundary from "./ErrorBoundary";
import { SIGN_IN } from "../Navigation/routes";

function PrivateRoute({ children }: any) {
  const userToken = localStorage.getItem(TOKEN_KEY);
  const userId = localStorage.getItem(USER_ID_KEY);

  return userToken && userId ? (
    <ErrorBoundary>{children}</ErrorBoundary>
  ) : (
    <Navigate to={SIGN_IN} />
  );
}

export default PrivateRoute;

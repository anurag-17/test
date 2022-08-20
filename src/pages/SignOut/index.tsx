import React from 'react'
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilState, useResetRecoilState } from "recoil";
import { PERSISTED_DATA, TOKEN_KEY } from "../../lib/Config/constants";
import useAuth from "../../lib/ReactQuery/Hooks/Auth";
import { USER } from "../../store/atoms";
import { SIGN_IN } from "../../Navigation/routes";

const SignOut = () => {
  const { signOut } = useAuth();
  const navigate = useNavigate();
  const token = localStorage.getItem(TOKEN_KEY);
  const [user, setUser] = useRecoilState(USER);
  const resetUser = useResetRecoilState(USER);
  

  useEffect(() => {
    signOut({ token: token });
    setUser({...user, isLoggedIn: false});
    navigate(SIGN_IN);
    localStorage.removeItem(PERSISTED_DATA);
    localStorage.clear()
    resetUser()
    setUser({});

    //eslint-disable-next-line
  }, [signOut, navigate, token]);

  return <>signed out</>;
};

export default SignOut;

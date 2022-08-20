import { useMutation } from "react-query";
import { toast } from "react-toastify";
import { useResetRecoilState, useSetRecoilState } from "recoil";
import { USER } from "../../../../store/atoms/userAtoms/getUser";
import {TOKEN_KEY, USER_ID_KEY } from "../../../Config/constants";
import loginService from "../../Services/Mutations/loginService";
import createAccountService from "../../Services/Mutations/createAccountService";
import createPostRole from "../../Services/Mutations/createPostRole";
import { ErrorResponse } from "../../../Config/types";
import { useNavigate } from "react-router-dom";
import { HOME, SIGN_IN } from "../../../../Navigation/routes";
import signOutService from "../../Services/Mutations/signOutService";
import { GET_TOKEN } from "../../../../store/atoms/userAtoms/getToken";
import resetPasswordService from "../../Services/Mutations/resetPasswordService";
import forgotPasswordService from "../../Services/Mutations/forgotPasswordService";
import createPostFacilities from "../../Services/Mutations/createPostFacilities";
import getAllFacilities from "../../Services/Query/getAllFacilities";
import { ERROR_DEFAULT } from "../../../../constants/Errors";

const useAuth = () => {
  const setUserData = useSetRecoilState(USER);
  const setToken = useSetRecoilState(GET_TOKEN);

  const resetUser = useResetRecoilState(USER);
  const navigate = useNavigate();


  const loginMutation = useMutation(loginService, {
    onSuccess: (data) => {
      const { token } = data?.data;
      const { userData } = data?.data;
      localStorage.setItem(TOKEN_KEY, token);
      localStorage.setItem(USER_ID_KEY, userData?.id);
      const userToken = localStorage.getItem(TOKEN_KEY);
      setToken(userToken || "");
      setUserData({ ...userData, isLoggedIn: true });
      navigate(HOME);
    },

    onError: (err: Record<any, any>) => {
      const error = err?.response?.data?.responseDetails?.message;
      toast.error(`${error || ERROR_DEFAULT}`);
    },
  });

  const { mutate: login, data, isLoading, error, isSuccess } = loginMutation;

  const createAccountMutation = useMutation(createAccountService, {
    onSuccess: (data) => {
      toast.success(`${data?.data}`);
      navigate(SIGN_IN);
    },
    onError: (error: ErrorResponse) => {
      const err = error?.response?.data?.responseDetails?.message;
      const message = error?.response?.data?.apiResponse?.message;
      const passwordError = error?.response?.data?.apiResponse?.data?.password;
      const emailError = error?.response?.data?.apiResponse?.data?.password;
      toast.error(
        `${err || ""}\n${message || ""}\n${passwordError || ""}\n${
          emailError || ""
        }`
      );
    },
  });

  const { mutate: createAccount, isLoading: isCreatingAccount } =
    createAccountMutation;

  const createPostMutation = useMutation(createPostRole, {
    onSuccess: (data) => {
      toast.success(`${data?.data?.responseDetails?.message}`);
    },
    onError: (error: ErrorResponse) => {
      
      const err = error?.response?.data?.responseDetails?.message;
      const message = error?.response?.data?.apiResponse?.message;
      const genderError = error?.response?.data?.apiResponse?.gender;
      const languagesError = error?.response?.data?.apiResponse?.languages;
      toast.error(
        `${err || ""}\n${message || ""}\n${genderError || ""}\n${
          languagesError || ""
        }`
      );
    },
  });

  const { mutate: createPost, isLoading: isCreatingPost } =
    createPostMutation;

  const createFacilityPostMutation = useMutation(createPostFacilities, {
    onSuccess: (data) => {
      getAllFacilities()
      toast.success(`${data?.data?.responseDetails?.message}`);
    },

    onError: (error: ErrorResponse) => {
      const err = error?.response?.data?.responseDetails?.message;
      const message = error?.response?.data?.apiResponse?.message;
      // const genderError = error?.response?.data?.apiResponse?.;
      // const languagesError = error?.response?.data?.apiResponse?.languages;
      toast.error(
        `${err || ""}\n${message //|| ""}\n${genderError || ""}\n${
         // languagesError || ""
        }`
      );
    },
  });

  const { mutate: createFacilityPost, isLoading: isCreatingFacilityPost} = createFacilityPostMutation;

  const signOutMutation = useMutation(signOutService, {
    onSuccess: (data) => {
      resetUser();
      toast.success(`${data?.data}`);
    },
    onError: (error: ErrorResponse) => {
      const err = error?.response?.data?.responseDetails;
      console.log(`${err || ""}`);
    },
  });

  const { mutate: signOut, isLoading: isSigningOut } = signOutMutation;

  const resetPasswordMutation = useMutation(resetPasswordService, {
    onSuccess: (data) => {
      const message = data?.data?.responseDetails?.message;
      toast.success(`${message}`);
    },
    onError: (error: ErrorResponse) => {
      console.log("error -->",error.request);
      const err = error?.response?.data?.apiResponse?.data?.newPassword;
      const errMessage = error?.response?.data?.apiResponse?.message;
      toast.error(`${errMessage || ""}:\n${err || ""}`);
    },
  });

  const { mutate: resetPassword, isLoading: isResetting } =
    resetPasswordMutation;

  const forgotPasswordMutation = useMutation(forgotPasswordService, {
    onSuccess: (data) => {
      const message = data?.data?.responseDetails?.message;
      toast.success(`${message}`);
    },
    onError: (error: ErrorResponse) => {
      const err = error?.response?.data?.apiResponse?.data?.newPassword;
      const errMessage = error?.response?.data?.apiResponse?.message;
      toast.error(`${errMessage || ""}:\n${err || ""}`);

    },
  });

  const { mutate: forgotPassword, isLoading: isSendingForgotPasswordEmail } =
    forgotPasswordMutation;

  return {
    login,
    data,
    isLoading,
    error,
    isSuccess,
    createAccount,
    isCreatingAccount,
    createPost,
    isCreatingPost,
    createFacilityPost,
    isCreatingFacilityPost,
    signOut,
    isSigningOut,
    isResetting,
    resetPassword,
    forgotPassword,
    isSendingForgotPasswordEmail,
  };
};

export default useAuth;



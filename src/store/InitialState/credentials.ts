import {
  ICreateAccount,
  IforgotPassword,
} from "../../Interface/createAccountInterface";
import {
  IPersonaSetup,
  IPortfolioMedia,
  ITalentSetup,
  IUserData,
} from "../../Interface/userInterface";

interface ILoginCredentials {
  email: string;
  password: string;
}

interface IresetPasswordCredentials {
  oldPassword: string;
  newPassword: string;
  confirmNewPassword: string;
}

export const LoginCredentials: ILoginCredentials = {
  email: "",
  password: "",
};

interface IPostRoleCredentials {
  projectName: string;
  projectType: string | any;
  projectDescription: string;
  gender: string | any;
  minAge: number;
  maxAge: number;
  postExpiryDate: string;
  languages: string | string[];
  state: string;
  city: string;
  country: string;
  postalZipCode: string;
  otherRequirements: string;
  talentSkill: string;
}

export const PostRoleCredentials: IPostRoleCredentials = {
  projectName: "",
  projectType: "",
  projectDescription: "",
  gender: "",
  minAge: 0,
  maxAge: 0,
  postExpiryDate: "",
  languages: [],
  state: "",
  city: "",
  country: "",
  postalZipCode: "",
  otherRequirements: "",
  talentSkill: "",
};

interface IPostFacilitiesCredentials {
  facilityType: string;
  facilityName: string;
  quantity: number;
  facilityDescription: string;
  state: string;
  city: string;
}

export const PostFacilitiesCredentials: IPostFacilitiesCredentials = {
  facilityType: "",
  facilityName: "",
  quantity: 0,
  facilityDescription: "",
  state: "",
  city: "",
};

export const createAccountCredentials: ICreateAccount = {
  email: "",
  password: "",
  userPersona: "",
  confirmPassword: "",
};

export const resetPasswordCredentials: IresetPasswordCredentials = {
  oldPassword: "",
  newPassword: "",
  confirmNewPassword: "",
};

export const forgotPasswordCredentials: IforgotPassword = {
  email: "",
};

export const userDefault: IUserData = {
  id: 0,
  isLoggedIn: false,
  email: "",
  ethnicity: "",
  firstName: "",
  middleName: "",
  surname: "",
  title: "",
  displayName: "",
  gender: "",
  roles: [],
  addressLine1: "",
  addressLine2: "",
  city: "",
  state: "",
  postalCode: "",
  dateOfBirth: "",
  profilePictureUrl: "",
  userPersonas: [],
  phoneNumber: "",
  workPhoneNumber: "",
  headline: "",
  status: "",
  userType: "",
  companyName: "",
  country: "",
  portfolios: [],
  genres: [],
  spokenLanguages: [],
  height: "",
  weight: "",
  skinTone: "",
  race: "",
  education: "",
  accountVerified: false,
};

export const portfolioMediaState: IPortfolioMedia = {
  portfolioType: "",
  portfolio: "",
  portfolioTitle: "",
};

export const personaState: IPersonaSetup = {
  userPersonas: [],
};

export const talentState: ITalentSetup = {
  education: "",
  ethnicity: "",
  genres: [],
  height: "",
  roles: [],
  skinTone: "",
  spokenLanguages: [],
  weight: "",
};
export const initialPortfolio = {
  video: "",
  audio: "",
  image: "",
};

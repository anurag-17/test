export interface IUserPersona {
  persona: string;
}

export interface IUserData {
  id: number;
  email: string;
  firstName: string;
  middleName: string;
  surname: string;
  title: string;
  displayName: string;
  gender: string;
  roles: string[];
  addressLine1: string;
  addressLine2: string;
  city: string;
  state: string;
  postalCode: string;
  dateOfBirth: string;
  profilePictureUrl: string;
  userPersonas: [];
  phoneNumber: string;
  workPhoneNumber: string;
  headline: string;
  status: string;
  userType: string;
  companyName: string;
  country: string;
  portfolios: [];
  genres: Record<string, string>[];
  spokenLanguages: [];
  height: string;
  weight: string;
  skinTone: string;
  race: string;
  education: string;
  ethnicity: string;
  accountVerified: boolean;
  isLoggedIn: boolean;
}

export interface IPortfolioMedia {
  portfolioType: string;
  portfolio: any;
  portfolioTitle: string;
}

export interface IPersonaSetup {
  userPersonas: Record<string, any>[];
}

export interface ITalentSetup {
  education?: string;
  ethnicity?: string;
  genres?: Record<any, any>[];
  height?: string;
  roles?: Record<any, any>[];
  skinTone?: string;
  spokenLanguages?: Record<any, any>[];
  weight?: string;
}

export interface IPostRole {
  gender: string;
  languages: string | string[];
  state: string;
  city: string;
  country: string;
  postalZipCode: string;
  maxAge: number | string;
  minAge: number | string;
  otherRequirements: string;
  postExpiryDate: string;
  projectDescription: string;
  projectName: string;
  projectType: string;
  talentSkill: string;
}
export interface ISearchRole {
  gender: string;
  languages: string;
  location: string;
  maxAge: number | string;
  minAge: number | string;
  talentSkill: string;
  projectType: string;
  projectName: string;
  sortDirection: string;
  pageNumber: number | string;
}
export interface IFacility {
  pageNumber: number | string;
  pageSize: number | string;
  state: string;
  typeOfAsset: string;
}
export interface ISearchCastCalls {
  projectType: string;
  projectName: string;
}

export interface ICastCall {
  pageNumber: number | string;
  size: number | string;
}

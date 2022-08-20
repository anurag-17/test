export interface ICreateAccount {
  confirmPassword: string;
  email: string;
  password: string;
  userPersona: string;
}

export interface IresetPassword {
  oldPassword: string;
  newPassword: string;
  confirmNewPassword: string;
}

export interface IforgotPassword {
  email: string;
}

interface IContactUsPayload {
  contactorName: string;
  contactorEmail: string;
  message: string;
}

export const ContactUsPayload: IContactUsPayload = {
  contactorEmail: "",
  contactorName: "",
  message: "",
};

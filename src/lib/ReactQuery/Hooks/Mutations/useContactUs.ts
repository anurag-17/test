

import { useMutation } from "react-query";
import { toast } from "react-toastify";
import { ErrorResponse } from "../../../Config/types";
import contactUsService from "../../Services/Mutations/contactUsService";

const useContactUs = () => {
  const contactUsMutation= useMutation(contactUsService, {
    onSuccess: (data) => {
        toast.success(`${data?.data?.responseDetails?.message}`);
    },
    onError: (error: ErrorResponse) => {
      let msg=error?.response?.data.apiResponse.message
     
      let msgDescription=JSON.stringify(error?.response?.data?.apiResponse?.data)
      toast.error(`${msg}: ${msgDescription || error?.response?.data}`);
    },
  });

  const { mutate: contactUs, isLoading } = contactUsMutation;  
 
  return {
    contactUs,
    isLoading,
  };
};

export default useContactUs;

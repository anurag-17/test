

import { useMutation } from "react-query";
import { toast } from "react-toastify";
import { ErrorResponse } from "../../../../Config/types";
import uploadProfilePicService from "../../../Services/Mutations/uploadProfilePic";

const useUploadProfilePic = () => {


  
  const uploadProfilePicMuation= useMutation(uploadProfilePicService, {
    onSuccess: (data) => {
        toast.success(`${data?.data?.responseDetails?.message}`);
    },
    onError: (error: ErrorResponse) => {
      let msg=error?.response?.data.apiResponse.message
      let msgDescription=JSON.stringify(error?.response?.data?.apiResponse?.data)
      toast.error(`${msg}: ${msgDescription || error?.response?.data}`);
    },
  });

  const { mutate: uploadProfilePic, isLoading: isUploading } = uploadProfilePicMuation;  
 
  return {
    uploadProfilePic,
    isUploading,
  };
};

export default useUploadProfilePic;



import { useMutation } from "react-query";
import { toast } from "react-toastify";
import { ERROR_DEFAULT } from "../../../../../constants/Errors";
import { ErrorResponse } from "../../../../Config/types";
import {uploadPortfolioAudioService} from "../../../Services/Mutations/uploadPortfolioMediaService";

const useUploadPortfolioAudio = () => {

  const uploadPortfolioAudioMuation= useMutation(uploadPortfolioAudioService, {
    onSuccess: (data) => {
        toast.success(`${data?.data?.responseDetails?.message}`);
    },
    onError: (error: ErrorResponse) => {
      // console.log("error===>", error.request)
      let msg=error?.response?.data.apiResponse.message
      let msgDescription=JSON.stringify(error?.response?.data?.apiResponse?.data)
      toast.error(`${msg}: ${msgDescription || error?.response?.data?.message || ERROR_DEFAULT}`);
    },
  });

  const { mutate: uploadPortfolioAudio, isLoading: isUploadingPortfolioAudio, isError:isUploadAudioError} = uploadPortfolioAudioMuation;  
  return {
    uploadPortfolioAudio,
    isUploadingPortfolioAudio,
    isUploadAudioError
  };
};

export default useUploadPortfolioAudio;

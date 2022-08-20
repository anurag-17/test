

import { useMutation } from "react-query";
import { toast } from "react-toastify";
import { ERROR_DEFAULT } from "../../../../../constants/Errors";
import { ErrorResponse } from "../../../../Config/types";
import {uploadPortfolioVideoService} from "../../../Services/Mutations/uploadPortfolioMediaService";

const useUploadPortfolioVideo = () => {

  const uploadPortfolioVideoMuation= useMutation(uploadPortfolioVideoService, {
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

  const { mutate: uploadPortfolioVideo, isLoading: isUploadingPortfolioVideo, isError:isUploadVideoError} = uploadPortfolioVideoMuation;  
  return {
    uploadPortfolioVideo,
    isUploadingPortfolioVideo,
    isUploadVideoError
  };
};

export default useUploadPortfolioVideo;

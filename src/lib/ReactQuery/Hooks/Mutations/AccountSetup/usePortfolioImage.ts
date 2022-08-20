import { useMutation } from "react-query";
import { toast } from "react-toastify";
import { ERROR_DEFAULT } from "../../../../../constants/Errors";
import { ErrorResponse } from "../../../../Config/types";
import {getPortfolioImageService} from "../../../Services/Query/getPortfolioItems";

const usePortfolioImage = () => {

  const usePortfolioImageMutation= useMutation(getPortfolioImageService, {
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

  const { mutate: usePortfolioImage, isLoading: isusePortfolioImage, isError:isuseImageError} = usePortfolioImageMutation;  
  return {
    usePortfolioImage,
    isusePortfolioImage,
    isuseImageError
  };
};

export default usePortfolioImage;
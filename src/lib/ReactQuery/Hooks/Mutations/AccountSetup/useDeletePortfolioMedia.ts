

import { useMutation } from "react-query";
import { toast } from "react-toastify";
import { ERROR_DEFAULT } from "../../../../../constants/Errors";
import { ErrorResponse } from "../../../../Config/types";
import {deletePortfolioService} from "../../../Services/Mutations/uploadPortfolioMediaService";

const useDeletePortfolioItem = () => {

  const deletePortfolioItemMutation= useMutation(deletePortfolioService, {
    onSuccess: (data) => {
        toast.success(`${data?.data?.responseDetails?.message}`);
    },
    onError: (error: ErrorResponse) => {
        let msg2 = error?.response?.data?.responseDetails.message;
        let msg1 = error?.response?.data?.responseDetails.reason;
        toast.error(`${ msg1}: ${ msg2 || ERROR_DEFAULT}`);
    },
  });

  const { mutate: deletePortfolioItem, isLoading: isDeletingPortfolioItem, isError:isDeletingError} = deletePortfolioItemMutation;  
  return {
    deletePortfolioItem,
    isDeletingPortfolioItem,
    isDeletingError
  };
};

export default useDeletePortfolioItem ;

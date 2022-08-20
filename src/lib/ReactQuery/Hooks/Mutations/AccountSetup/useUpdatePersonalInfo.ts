import { useMutation } from "react-query";
import { toast } from "react-toastify";
import { useRecoilValue } from "recoil";
import { ERROR_DEFAULT } from "../../../../../constants/Errors";
import { USER } from "../../../../../store/atoms";
// import { toast } from "react-toastify";
import { ErrorResponse } from "../../../../Config/types";
import  { updatePersonalInfoService } from "../../../Services/Mutations/accountSetupService";

const useUpdatePersonalInfo = () => {
  const user = useRecoilValue(USER);
  const payload = {
    addressLine1: user?.addressLine1,
    addressLine2: user?.addressLine2,
    city: user?.city,
    companyName: user?.companyName,
    country: user?.country,
    dateOfBirth: user?.dateOfBirth,
    displayName: user?.displayName,
    email:user?.email,
    firstName: user?.firstName,
    gender: user?.gender,
    headline: user?.headline,
    middleName: user?.middleName,
    phoneNumber: user?.phoneNumber,
    postalCode: user?.postalCode,
    state: user?.state,
    status: user?.status,
    surname: user?.surname,
    title: user?.title,
    workPhoneNumber: user?.workPhoneNumber,
  };
  const updatePersonalInfoMutation = useMutation(updatePersonalInfoService, {
    onSuccess: (data) => {
      toast.success(`${data?.data?.responseDetails?.message}`);
    },
    onError: (error: ErrorResponse) => {
      let msg2 = error?.response?.data?.responseDetails.message;
      let msg1 = error?.response?.data?.responseDetails.reason;
      toast.error(`${ msg1}: ${ msg2 || ERROR_DEFAULT}`);
    },
  });

  const { mutate: updatePersonalInfo, isLoading: isSavingPersonalInfo } = updatePersonalInfoMutation;

  return {
    updatePersonalInfo,
    isSavingPersonalInfo ,
    payload,
  };
};

export default useUpdatePersonalInfo;

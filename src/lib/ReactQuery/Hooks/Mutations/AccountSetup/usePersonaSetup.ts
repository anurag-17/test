import { useMutation } from "react-query";
import { toast } from "react-toastify";
import { useRecoilValue } from "recoil";
import { USER } from "../../../../../store/atoms";
// import { toast } from "react-toastify";
import { ErrorResponse } from "../../../../Config/types";
import personaSetupService from "../../../Services/Mutations/personaSetupService";

const usePersonaSetup = () => {
  const user = useRecoilValue(USER);
  const payload = {
    userPersonas: user?.userPersonas,
  };

  const personaSetUpMutation = useMutation(personaSetupService, {
    onSuccess: (data) => {
      toast.success(`${data?.data?.responseDetails?.message}`);
    },
    onError: (error: ErrorResponse) => {
      let msg = error?.response?.data.apiResponse.message;
      let msg2 = error?.response?.data?.responseDetails.message;
      let msg1 = error?.response?.data?.responseDetails.reason;

      let msgDescription = JSON.stringify(
        error?.response?.data?.apiResponse?.data
      );
      toast.error(`${msg || msg1}: ${msgDescription || msg2}`);
    },
  });

  const { mutate: savePersona, isLoading:isSavingPersona } = personaSetUpMutation;

  return {
    savePersona,
    isSavingPersona,
    payload
  };
};

export default usePersonaSetup;

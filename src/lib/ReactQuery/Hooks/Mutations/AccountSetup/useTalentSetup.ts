import { useMutation } from "react-query";
import { toast } from "react-toastify";
import { useRecoilValue } from "recoil";
import { USER } from "../../../../../store/atoms";
// import { toast } from "react-toastify";
import { ErrorResponse } from "../../../../Config/types";
import talentSetupService from "../../../Services/Mutations/talentSetupService";

const useTalentsSetup = () => {
  const user = useRecoilValue(USER);
  const payload = {
    education: user?.education,
    ethnicity: user?.ethnicity,
    genres: user?.genres,
    height: user?.height,
    roles: user?.roles,
    skinTone: user?.skinTone,
    spokenLanguages: user?.spokenLanguages,
    weight: user?.weight
  };
  const talentSetUpMutation = useMutation(talentSetupService, {
    onSuccess: (data) => {
      toast.success(`${data?.data?.responseDetails?.message}`);
    },
    onError: (error: ErrorResponse) => {
      console.log("error", error.request)
      let msg2 = error?.response?.data?.responseDetails.message;
      let msg1 = error?.response?.data?.responseDetails.reason;

      toast.error(`${ msg1}: ${ msg2}`);
    },
  });

  const { mutate: saveTalent, isLoading:isSavingTalent } = talentSetUpMutation;

  return {
    saveTalent,
    isSavingTalent,
    payload 
  };
};

export default useTalentsSetup;

import { useRecoilState } from "recoil";
import { useMutation } from "react-query";
import { toast } from "react-toastify";
import getAllApplicants from "../../Services/Query/getAllApplicant";
import { ALLAPPLICANT } from "../../../../store/atoms/userAtoms";

const useGetApplicant = () => {
  const [, setApplicant] = useRecoilState(ALLAPPLICANT);

  const getApplicantMutation = useMutation(getAllApplicants, {
    onSuccess: (data: any) => {
      return setApplicant(data);
    },
    onError: (error: any) => {
      const err = error?.response?.data?.responseDetails?.message;
      const message = error?.response?.data?.apiResponse?.message;
      toast.error(
        `${err || ""}\n${message || ""}`
      );
    },
  });

  const {
    mutate: getApplicant,
    data,
    isLoading,
    error,
    isSuccess,
  } = getApplicantMutation;

 

  return {
    getApplicant,
    data,
    isLoading,
    error,
    isSuccess,
  };
};

export default useGetApplicant;

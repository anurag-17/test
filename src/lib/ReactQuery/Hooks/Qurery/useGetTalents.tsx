import { useState } from "react";
import { useMutation } from "react-query";
import { useRecoilState } from "recoil";
import { GET_TALENTS } from "../../../Config/constants";
import getAllTallent from "../../Services/Query/getAllTalents";
import { ALLTALENTS } from "../../../../store/atoms/userAtoms";


const useGetAllRoles = () => {
  const [talentError, setTalentError] = useState("");
  const [totalPages, setTotalPages] = useState(null);


  const [allTalents, setAllTalents] = useRecoilState(ALLTALENTS);

  const getTalentMutations = useMutation(
    GET_TALENTS,
    getAllTallent,
    {
      onSuccess: (data: Record<string, any>) => {

          setAllTalents(data?.data?.content);
          setTotalPages(data?.data?.totalPages)
      },
      onError: (error: any) => {
        
        setTalentError(error.messsage);
      },
    }
  );

  const{mutate:getTalent, isLoading: loadingAllTalents} = getTalentMutations

  return {
    allTalents,
    talentError,
    loadingAllTalents,
    getTalent,
    totalPages

  };
};

export default useGetAllRoles;

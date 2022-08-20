import { useState } from "react";
import { useQuery } from "react-query";
import { useRecoilState } from "recoil";
import { GET_ROLES } from "../../../Config/constants";
import getAllRoles from "../../Services/Query/getAllRoles";
// import { ALLROLES} from "../../../../store/atoms/userAtoms";
import { SEARCHROLES} from "../../../../store/atoms/userAtoms";



const useGetAllRoles = () => {
  // const [allRoles, setAllRoles] = useRecoilState(ALLROLES);
  const [searchRoles, setSearchRoles] = useRecoilState(SEARCHROLES);
  const [rolesError, setRolesError] = useState("");

  const { isLoading: loadingAllRoles } = useQuery(
    GET_ROLES,
    getAllRoles,
    
    {
      onSuccess: (data: Record<string, any>) => {
          
          setSearchRoles(data?.data?.content);
      },
      onError: (error: any) => {
        
        setRolesError(error.messsage);
      },
    }
  );

  return {
    // allRoles,
    searchRoles,
    rolesError,
    loadingAllRoles,
  };
};

export default useGetAllRoles;

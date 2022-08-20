import { useState } from "react";
import { useRecoilState } from "recoil";
import { useMutation } from "react-query";
import { FACILITY } from "../../../Config/constants";
import getFacility from "../../Services/Query/getFacilities"
import { FACILITIES } from "../../../../store/atoms/userAtoms";


const useGetFacilities = () => {
    const [facilities, setFacilities] = useRecoilState(FACILITIES);
    const [facilityError, setFacilityError] = useState("");
    const [totalPages, setTotalPages] = useState(null);

  const getFacilityMutations = useMutation(
    FACILITY,
    getFacility,
    {
      onSuccess: (data: Record<string, any>) => {
        setFacilities(data?.data?.content);
        setTotalPages(data?.data?.totalPages);
      },
      onError: (error: any) => {
        
        setFacilityError(error.messsage);
      },
    }
  );


  const {mutate: getFacilities, isLoading: loadingFacility} = getFacilityMutations

  return {
    facilities,
    facilityError,
    loadingFacility,
    getFacilities,
    totalPages
  };
};

export default useGetFacilities;

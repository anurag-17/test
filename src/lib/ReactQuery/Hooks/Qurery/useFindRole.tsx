import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { useMutation } from "react-query";
import { toast } from "react-toastify";
import getRoles from "../../Services/Query/searchRole";
import { SEARCHROLES } from "../../../../store/atoms/userAtoms";
import { SEARCH_ROLES } from "../../../Config/constants";

const Roles = () => {
  const [findRole, setSearchRoles] = useRecoilState(SEARCHROLES);
  const [totalPages, setTotalPages] = useState(null);
  const getRolesMutation = useMutation(
    SEARCH_ROLES,
    getRoles, {
    onSuccess: (data) => {
       setSearchRoles(data.content);
       setTotalPages(data.totalPages);
    },
    onError: (error: any) => {
      const err = error?.response?.data?.responseDetails?.message;
      const message = error?.response?.data?.apiResponse?.message;
      const genderError = error?.response?.data?.apiResponse?.data?.gender;
      const projectNameError =
        error?.response?.data?.apiResponse?.data?.projectName;
      toast.error(
        `${err || ""}\n${message || ""}\n${genderError || ""}\n${
          projectNameError || ""
        }`
      );
    },
  });

  const {
    mutate: getRole,
    data,
    isLoading,
    error,
    isSuccess,
  } = getRolesMutation;

  useEffect(() => {
    if (findRole.length === 0 && isSuccess) {
        toast.error("No matching roles for your search")
    }
}, [findRole, isSuccess])

  return {
    getRole,
    data,
    isLoading,
    error,
    isSuccess,
    totalPages
  };
};

export default Roles;

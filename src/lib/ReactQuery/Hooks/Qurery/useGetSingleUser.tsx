import { useState } from "react";
import { useQuery } from "react-query";
import getSingleUser from "../../Services/Query/getSingleUser";
import { SINGLE_USER } from "../../../Config/constants";

const useGetSingleUser = () => {
    const [singleUser, setSingleUser] = useState<any>([])
    const [singleUserError, setSingleUserError] = useState("")

    const { isLoading: loadingSingleUser } = useQuery(
        SINGLE_USER,
        getSingleUser,
        {
          onSuccess: (data) => {
            setSingleUser(data?.data);
          },
          onError: (error: any) => {
            setSingleUserError(error.messsage);
          },
        }
      );

      return {
        singleUser,
        singleUserError,
        loadingSingleUser,
      };

}


export default useGetSingleUser;
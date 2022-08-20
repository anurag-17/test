import { useState } from "react";
import { useQuery } from "react-query";
import { USER_PERSONA_KEY } from "../../../Config/constants";
import getUserPersonas from "../../Services/Query/getUserPersonas";

const useGetUserPersona = () => {
  const [userPersonas, setUserPersonas] = useState([]);
  
  const [personaError, setPersonaError] = useState("");

  const { isLoading: loadingPersonas } = useQuery(
    USER_PERSONA_KEY,
    getUserPersonas,
    {
      onSuccess: (data) => {
        setUserPersonas(data?.data?.userPersonas);
      },
      onError: (error: any) => {
        setPersonaError(error.messsage);
      },
    }
  );

  return {
    userPersonas,
    personaError,
    loadingPersonas,
  };
};

export default useGetUserPersona;

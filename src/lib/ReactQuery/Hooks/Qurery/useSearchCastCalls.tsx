import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { useMutation } from "react-query";
import { toast } from "react-toastify";
import searchCastCalls from "../../Services/Query/searchCastCalls";
import { SEARCHCALLS } from "../../../../store/atoms/userAtoms";
import {ERROR_SEARCH_CALL} from '../../../Config/constants'

const Roles = () => {
    const [castCall, setSearchCalls] = useRecoilState(SEARCHCALLS);

    const getRolesMutation = useMutation(searchCastCalls, {
        onSuccess: (data) => {
            return setSearchCalls(data);

        },

        onError: (error: any) => {
            const err = error?.response?.data?.responseDetails?.message;
            const message = error?.response?.data?.apiResponse?.message;
            const projectTypeError = error?.response?.data?.apiResponse?.data?.gender;
            const projectNameError =
                error?.response?.data?.apiResponse?.data?.projectName;
            toast.error(
                `${err || ""}\n${message || ""}\n${projectTypeError || ""}\n${projectNameError || ""
                }`
            );



        },


    });

    const {
        mutate: getCastCalls,
        data,
        isLoading,
        error,
        isSuccess,
    } = getRolesMutation;

    useEffect(() => {
        if (castCall.length === 0 && isSuccess) {
            toast.error(`${ERROR_SEARCH_CALL}`)
        }
    }, [castCall, isSuccess])

    return {
        getCastCalls,
        data,
        isLoading,
        error,
        isSuccess,
    };
};

export default Roles;

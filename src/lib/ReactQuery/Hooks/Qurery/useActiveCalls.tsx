import { useState } from 'react';
import { useRecoilState } from 'recoil';
import { useMutation } from 'react-query';
import getActiveCalls from '../../Services/Query/getActiveCalls';
import { ACTIVECALLS } from '../../../../store/atoms/userAtoms';
import { ACTIVE_CALLS } from '../../../Config/constants';

const useGetActiveCastCalls = () => {
  const [activeCastCalls, setActiveCastCalls] = useRecoilState(ACTIVECALLS);
  const [castCallsError, setCastCallsError] = useState('');
  const [totalPages, setTotalPages] = useState(0);
  const [totalElements, setTotalElements] = useState(0);

  const getActiveCallsMutation = useMutation(
    ACTIVE_CALLS ,
    getActiveCalls, {
    
    onSuccess: (data: Record<string, any>) => {
      setActiveCastCalls(data?.data?.content);
      setTotalPages(data?.data?.totalPages);
      setTotalElements(data?.data?.totalElements);
    },
    onError: (error: any) => {
      setCastCallsError(error.messsage);
    },
  });
  const {
    mutate: getCalls,
    isLoading: loadingActiveCalls,
    data,
  } = getActiveCallsMutation;

  return {
    getCalls,
    activeCastCalls,
    castCallsError,
    loadingActiveCalls,
    data,
    totalElements,
    totalPages,
  };
};

export default useGetActiveCastCalls;

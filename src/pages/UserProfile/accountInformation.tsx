import React from 'react';
import Grid from '../../components/Common/Grid';
import Heading from '../../components/Common/Heading';
import Typography from '../../components/Common/Typography';
import {  HEADING } from '../../constants/UserProfile';
import useGetSingleUser from '../../lib/ReactQuery/Hooks/Qurery/useGetSingleUser'; 
import Loader from 'react-spinners/CircleLoader';


const AccountInformation = () => {

  const { singleUser, loadingSingleUser, singleUserError } = useGetSingleUser();

  console.log(singleUser.headline)

  return (
    <>
    {loadingSingleUser ? (
        <Loader /> ? (
          singleUserError
        ) : (
          <Typography>An error occured loading user</Typography>
        )
      ) : (
        <>
    <Grid gap={15}>
      <Heading title={HEADING} marginTop="0rem" />

   
        <Grid item gap={20}  column>
      
        <Typography
            fontSize="0.85em"
            fontWeight={400}
            padding="2% 0 0 0"
            text={singleUser.status}
          />

        </Grid>
    </Grid>
    </>
    )}
    </>
  );
};

export default AccountInformation;







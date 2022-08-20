import React from 'react';
import { Link } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import Card from '../../components/Common/Card';
import Button from '../../components/Common/CustomButton';
import Grid from '../../components/Common/Grid';
import Heading from '../../components/Common/Heading';
import Typography from '../../components/Common/Typography';
import {
  SEARCH_DESCRIPTION,
  SEARCH_ITEMS_FOUND,
  VIEW_DETAILS,
  SEARCH_ERROR,
} from '../../constants/CastCalls';
import { COLORS } from '../../lib/StyledComponents/themes';
import { CAST_CALL_DETAILS } from '../../Navigation/routes';
import { ACTIVECALLS, SEARCHCALLS } from '../../store/atoms/userAtoms';

import { SINGLE_CAST_CALL } from '../../lib/Config/constants';

const SearchResult = () => {
  const allCastCalls = useRecoilValue(ACTIVECALLS);
  const searchCastCalls = useRecoilValue(SEARCHCALLS);



  const count =
    searchCastCalls?.length > 0 ? searchCastCalls?.length : allCastCalls.length;

  const datas = searchCastCalls?.length > 0 ? searchCastCalls : allCastCalls;

  const onClick = (item: any) => {
    localStorage.setItem(SINGLE_CAST_CALL, JSON.stringify(item));
  };

  return (
    <Grid mb={5} width={95} justifyContent="center" alignItems="center">
      <Grid
        margin="30px 0"
        item
        justifyContent="center"
        alignItems="center"
        column
      >
        <Heading
          title={count + ' ' + SEARCH_ITEMS_FOUND}
          subTitle2
          marginTop="0rem"
        />
        <Typography width={70} text={SEARCH_DESCRIPTION} textAlign="center" />
      </Grid>
      {datas.length > 0 && Array.isArray(datas) === true ? (
        <Grid row gap={10} width={95}>
          {datas.map((project: any, index: any) => (
            <Card
              width={'195px'}
              height={'250px'}
              widthMobile={'195px'}
              position={'relative'}
              padding={'2.5% 10px 10px 10px'}
              flexGrow={''}
              key={index}
            >
              <Grid item column alignItems="center">
                <Grid item column alignItems="center">
                  <Heading
                    fontWeight={900}
                    fontSize="0.9em"
                    title={project?.projectName.toLocaleUpperCase()}
                    marginTop="0rem"
                  />
                  <Typography
                    padding="0"
                    textAlign="center"
                    fontWeight={'medium'}
                    fontSize="0.85em"
                    text={project?.projectType.toLocaleUpperCase()}
                    color={COLORS.primary}
                  />
                  <Typography
                    margin="7% 0"
                    fontSize="12px"
                    textAlign="center"
                    fontWeight={'medium'}
                    text={'active'.toLocaleUpperCase()}
                    color={COLORS.primary}
                    bgColor={COLORS.thinPitch}
                    width={30}
                    borderRadius={8}
                  />
                </Grid>

                <Typography
                  margin="3% 0% 15% 0%"
                  textAlign="center"
                  fontSize="0.85em"
                  text={`${project.projectDescription.slice(0, 105)}...`}
                  width={90}
                />
              </Grid>

              <Link to={CAST_CALL_DETAILS}>
                <Button
                  bottom={'0.5rem'}
                  position="absolute"
                  marginLeft="0.6rem"
                  primary
                  size="80%"
                  sizeMd="100%"
                  onClick={() => onClick(project)}
                >
                  {VIEW_DETAILS.toUpperCase()}
                </Button>
              </Link>
            </Card>
          ))}
        </Grid>
      ) : (
        <Typography>{`${SEARCH_ERROR}`}</Typography>
      )}
    </Grid>
  );
};

export default SearchResult;

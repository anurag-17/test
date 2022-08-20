import React from "react";
import { Link } from "react-router-dom";
import Card from "../../components/Common/Card";
import Button from "../../components/Common/CustomButton";
import Grid from "../../components/Common/Grid";
import Heading from "../../components/Common/Heading";
import Typography from "../../components/Common/Typography";
import {
  SEARCH_FACILITIES_FOUND,
  SEARCH_FACILITY_DESCRIPTION,
  VIEW_FACILITY_DETAILS,
} from "../../constants/Facilities";
import { COLORS } from "../../lib/StyledComponents/themes";
import { USER_PROFILE } from "../../Navigation/routes";
import useGetFacilities from "../../lib/ReactQuery/Hooks/Qurery/useFacility";
import Loader from "../../components/Common/Spinner/spinner";

const SearchResult = () => {
  const { facilities, loadingFacilities }: any = useGetFacilities();

  const COUNT = facilities.length;

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
          title={COUNT + " " + SEARCH_FACILITIES_FOUND}
          subTitle2
          marginTop="0rem"
        />
        <Typography
          width={70}
          text={SEARCH_FACILITY_DESCRIPTION}
          textAlign="center"
        />
      </Grid>
      {!loadingFacilities ? (
        <>
          {facilities.length > 0 && Array.isArray(facilities) === true ? (
            <Grid row gap={10} width={95}>
              {facilities?.map(
                (project: Record<string, string>, index: string) => (
                  <Card
                    width={"195px"}
                    widthMobile={"195px"}
                    padding={"2.5% 10px 10px 10px"}
                    flexGrow={""}
                    key={index}
                  >
                    <Grid item column alignItems="center">
                      <Grid item column alignItems="center">
                        <Heading
                          fontWeight={900}
                          fontSize="1.5rem"
                          title={project?.equipmentName === null ? "Sound drum" : project?.equipmentName?.toLocaleUpperCase()}
                          marginTop="0rem"
                        />
                        <Typography
                          padding="0"
                          textAlign="center"
                          fontWeight={"medium"}
                          fontSize="0.85em"
                          text={project.equipmentType === null ? "Sound Instrument" : project?.equipmentType?.toLocaleUpperCase()}
                          color={COLORS.primary}
                        />
                        <Typography
                          margin="7% 0"
                          fontSize="12px"
                          textAlign="center"
                          fontWeight={"medium"}
                          text={`Quantity ${project?.quantity}`}
                          color={COLORS.primary}
                          bgColor={COLORS.thinPitch}
                          width={40}
                          borderRadius={8}
                        />
                      </Grid>

                      <Typography
                        margin="3% 0% 15% 0%"
                        textAlign="center"
                        fontSize="0.85em"

                        text={`${project?.description?.slice(0, 105)}...`}

                        width={90}
                      />
                    </Grid>

                    <Link to={USER_PROFILE}>
                      <Button primary size="100%" sizeMd="100%">
                        {VIEW_FACILITY_DETAILS.toUpperCase()}
                      </Button>
                    </Link>
                  </Card>
                )
              )}
            </Grid>
          ) : (
            
            ""
          )}
        </>
      ) : (
        <Loader />
      )}
    </Grid>
  );
};

export default SearchResult;

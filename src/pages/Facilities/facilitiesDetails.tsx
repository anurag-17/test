import React from 'react'
import Card from "../../components/Common/Card";
import Grid from "../../components/Common/Grid";
import Heading from "../../components/Common/Heading";
import ContentLayout from "../../components/Common/Layout/ContentLayout";
import Typography from "../../components/Common/Typography";

import { APPLICANTS } from "../../Navigation/routes";
import { COLORS } from "../../lib/StyledComponents/themes";
import {
  FACILITY_DESCRIPTION,
  FACILITY_DETAILS_SUBTITLE,
  FACILITY_DETAILS_TITLE,
  FACILITY_NAME,
  FACILTIY_INFO,
  TYPE_OF_FACILITY,
  VIEW_APPLICANT_BUTTON,
} from "../../constants/Facilities";

const FacilityDetails = () => {
  return (
    <ContentLayout
      title={FACILITY_DETAILS_TITLE}
      subtitle={FACILITY_DETAILS_SUBTITLE}
      button={VIEW_APPLICANT_BUTTON.toUpperCase()}
      buttonLink={APPLICANTS}
      buttonSize={15}
    >
      <Card padding="2.5% 0">
        <Grid gap={8} alignItems="center" pl={5}>
          <Grid item column pl={2.5}>
            <Heading fontWeight={700} title={FACILITY_NAME.toUpperCase()} marginTop="0rem"/>
            <Typography
              fontSize="0.8em"
              fontWeight={500}
              text={TYPE_OF_FACILITY.toUpperCase()}
              color={COLORS.primary}
            />
          </Grid>
          <Typography
       
            fontSize="0.85em"
            fontWeight={400}
            text={FACILITY_DESCRIPTION}
            padding="0.3em 2.5%"
            lineHeight={20}
          />
        </Grid>

        <Grid item column padding="3% 0 0 0">
          {FACILTIY_INFO.map((projectInfo, index) => (
            <Grid
              item
              borderBottom
              justifyContent="space-between"
              
              padding="1% 2.5%"
              key={index}
            >
              <Heading
                fontSize="0.85em"
                title={projectInfo.name}
                fontWeight={400}
                color={COLORS.grey}
                marginTop="0rem"
              />
              <Typography
                textAlign="right"
                fontSize="0.85em"
                text={projectInfo.value}
                fontWeight={400}
              />
            </Grid>
          ))}
        </Grid>
      </Card>
    </ContentLayout>
  );
};

export default FacilityDetails;

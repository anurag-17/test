import React from 'react'
import Card from "../../components/Common/Card";
import Grid from "../../components/Common/Grid";
import Heading from "../../components/Common/Heading";
import ContentLayout from "../../components/Common/Layout/ContentLayout";
import Typography from "../../components/Common/Typography";
import {
  CAST_CALL_DETAILS_SUBTITLE,
  CAST_CALL_DETAILS_TITLE,
  VIEW_APPLICANT_BUTTON,
} from "../../constants/CastCalls";
import { APPLICANTS } from "../../Navigation/routes";
import { COLORS } from "../../lib/StyledComponents/themes";
import { SINGLE_CAST_CALL } from "../../lib/Config/constants";



const CastCallDetails = () => {

  const singleCast: any = localStorage.getItem(SINGLE_CAST_CALL)
  const data = JSON.parse(singleCast)

  function getData() {
    let useData: any = [{}]

    useData.push({ "name": "Talent or Skill Required", "value": data.talentSkill })
    useData.push({ "name": "Gender", "value": data.gender })
    useData.push({ "name": "Minimum Age", "value": data.minAge })
    useData.push({ "name": "Maximum Age", "value": data.maxAge })
    useData.push({ "name": "Lcation", "value": data.country })
    useData.push({ "name": "Language", "value": data.languages })
    useData.push({ "name": "Other Requirements", "value": data.otherRequirements })
    useData.push({ "name": "Post Expiry Date", "value": data.postExpiryDate })


    return useData
  }
  const datas = getData()

  return (
    <ContentLayout
      title={CAST_CALL_DETAILS_TITLE}
      subtitle={CAST_CALL_DETAILS_SUBTITLE}
      button={VIEW_APPLICANT_BUTTON.toUpperCase()}
      buttonLink={APPLICANTS}
      buttonSize={15}
    >
      <Card padding="2.5% 0">
        <Grid gap={8} alignItems="center" pl={5}>
          <Grid item column pl={2.5}>
            <Heading
              fontWeight={700}
              title={data?.projectName.toUpperCase()}
              marginTop="0rem"
            />
            <Typography
              fontSize="0.8em"
              fontWeight={500}
              text={data.projectType.toUpperCase()}
              color={COLORS.primary}
            />
          </Grid>
          <Typography
            fontSize="0.85em"
            fontWeight={400}
            text={data?.projectDescription}
            padding="0.3em 2.5%"
            lineHeight={20}
          />
        </Grid>

        <Grid item column padding="3% 0 0 0">
          {datas.map((projectInfo: any, index: any) => (
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

export default CastCallDetails;

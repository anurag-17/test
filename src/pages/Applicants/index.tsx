import React, { useEffect, useState } from 'react'
import { useRecoilValue } from "recoil";
import { Link } from "react-router-dom";
import Avatar from "../../components/Common/Avatar";
import Card from "../../components/Common/Card";
import Button from "../../components/Common/CustomButton";
import Grid from "../../components/Common/Grid";
import Heading from "../../components/Common/Heading";
import ContentLayout from "../../components/Common/Layout/ContentLayout";
import Typography from "../../components/Common/Typography";

import {
  APPLICANTS_SUBTITLE,
  APPLICANTS_TITLE,
  APPLICANT_BUTTON_LABEL,
  SEARCH_ERROR
} from "../../constants/Applicants";
import { USER_PROFILE } from "../../Navigation/routes";
import useGetApplicant from '../../lib/ReactQuery/Hooks/Qurery/useGetAllApplicants'
import { ALLAPPLICANT } from "../../store/atoms/userAtoms";
import Pagination from "../../components/Common/Pagination";
import {
  applicantData
} from "../../constants/Applicants";
import Loader from "../../components/Common/Spinner/spinner";

const Applicants = () => {
  const [search,] = useState<any>(applicantData);
  const [page, setPage] = useState(0)
  const allApplicants: any = useRecoilValue(ALLAPPLICANT);



  const { getApplicant, isLoading } = useGetApplicant()

  useEffect(() => {
    getApplicant(search);

     // eslint-disable-next-line
  }, [page, search])

  const handlePageClick = (data: Record<string, any>) => {
    const currentPage = data.selected;
    search.pageNumber = currentPage;
    setPage(currentPage)


  }

  const applicants: any = allApplicants.data?.content


  return (
    <>
      <ContentLayout title={APPLICANTS_TITLE} subtitle={APPLICANTS_SUBTITLE}>
        {!isLoading ? (
          <>
            {applicants?.length > 0 && Array.isArray(applicants) === true ? (
              <Grid row gap={10}>
                {applicants?.map((applicanatInfo: any, index: number) => (
                  <Card
                    width={"195px"}
                    widthMobile={"195px"}
                    padding={"2.5% 10px 10px 10px"}
                    flexGrow={""}
                    key={index}
                  >
                    <Grid item column alignItems="center" gap={10}>
                      <Avatar border size={90} gap={10} image={applicanatInfo.avatar} />
                      <Heading
                        fontWeight={550}
                        fontSize="0.9em"
                        title={applicanatInfo.name}
                        marginTop="0rem"
                      />
                    </Grid>
                    <Typography
                      padding="3% 5% 20% 2%"
                      textAlign="center"
                      fontSize="0.85em"
                      text={`${applicanatInfo.bio.slice(0, 40)}...`}
                    />

                    <Link to={USER_PROFILE}>
                      <Button primary size="100%" sizeMd="100%">
                        {APPLICANT_BUTTON_LABEL}
                      </Button>
                    </Link>
                  </Card>
                ))}
              </Grid>
            ) : (

              <Typography>{SEARCH_ERROR}</Typography>
            )}

          </>
        ) : (
          <Loader />
        )}
      </ContentLayout>
      <Pagination pageCount={15} handlePageClick={(data) => handlePageClick(data)} />

    </>
  );
};

export default Applicants;

import React, { lazy, Suspense, useState, useEffect } from "react";
import { SEARCH_ICON } from "../../components/Assets/IconsConstant";
import Button from "../../components/Common/CustomButton";
import Select from "../../components/Common/CustomSelect";
import FormGroup from "../../components/Common/FormGroup";
import Grid from "../../components/Common/Grid";
import InputWithLabel from "../../components/Common/InputWithLabel";
import ContentLayout from "../../components/Common/Layout/ContentLayout";
import {
  FACILITY_SUBTITLE,
  FACILITY_TITLE,
  SEARCH_BY_FACILITY,
  TYPE_OF_FACILITY,
} from "../../constants/Facilities";
import { COLORS } from "../../lib/StyledComponents/themes";
import Loader from "../../components/Common/Spinner/spinner";
import Pagination from "../../components/Common/Pagination";
import useGetFacilities from '../../lib/ReactQuery/Hooks/Qurery/useFacility'
import {
  facilityData
} from "../../constants/Facilities";
const SearchResult = lazy(() => import("./searchResult"));
const Facilities = () => {
  const items: string[] = ["samson", "john"];
  const [page, setPage] = useState(0)
  const [search,] = useState<any>(facilityData);
  const {getFacilities, totalPages} = useGetFacilities();
  useEffect(() => {
    getFacilities(search);
    // eslint-disable-next-line
  }, [page, search])


  const handlePageClick = (e: any, data : Record<string, any>)=>{
    e.preventDefault();
    const currentPage = data.selected;
    search.pageNumber = currentPage;
    setPage(currentPage);
    
  }
  return (
    <>
    <ContentLayout
      titleColor={COLORS.white}
      centerText
      mt={0.0001}
      backgroundImageTop
      title={FACILITY_TITLE}
      subtitle={`${FACILITY_SUBTITLE.slice(0, 147)}...`}
      fontWeightTitle={900}
      fontSizeTitle="60px"
      widthMobile
      width={100}
      flexBasisHeader={100}
      marginHeader="0%"
    >
      <Grid item column alignItems="center">
        <FormGroup
          width={95}
          gap={20}
          padding={"1%"}
          mt={"10px"}
          bgColor={COLORS.text}
        >
          <InputWithLabel
            width="60%"
            borderColor={COLORS.dark}
            bgColor={COLORS.text}
            placeHolder={SEARCH_BY_FACILITY}
            fontWeightPlaceHolder={300}
            color={COLORS.white}
          />
          <Select
            borderColor={COLORS.dark}
            bgColor={COLORS.text}
            listItem={items}
            placeHolder={`${TYPE_OF_FACILITY}...`}
            width="100%"
          />
          <Button
            padding="1% 0"
            primary
            size="40%"
            sizeMd="100%"
            borderRadius={8}
            onClick={(e: any, data: any) => handlePageClick(e, data)}
          >
            <img src={SEARCH_ICON} alt="search" />
          </Button>
        </FormGroup>
        <Suspense fallback={<Loader />}>
          <SearchResult />
        </Suspense>
      </Grid>
    </ContentLayout>
      <Pagination pageCount={totalPages} handlePageClick={(e, data)=>handlePageClick(e, data)} />
    </>
  );
};
export default Facilities;
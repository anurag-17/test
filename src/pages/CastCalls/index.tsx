import React, { useState, useEffect } from 'react';
import { Suspense, lazy } from 'react';
import { SEARCH_ICON } from '../../components/Assets/IconsConstant';
import Button from '../../components/Common/CustomButton';
import FormGroup from '../../components/Common/FormGroup';
import Grid from '../../components/Common/Grid';
import InputWithLabel from '../../components/Common/InputWithLabel';
import ContentLayout from '../../components/Common/Layout/ContentLayout';
import {
  CAST_CALL_SUBTITLE,
  CAST_CALL_TITLE,
  PROJECTS_TYPE,
  PROJECT_STATUS,
  PROJECT_TYPES,
  SEARCH_CAST_CALL,
  searchData,
} from '../../constants/CastCalls';
import { COLORS } from '../../lib/StyledComponents/themes';
import Picker from '../../components/Common/MultiplePicker';
import Loader from '../../components/Common/Spinner/spinner';
import useGetSearchCalls from '../../lib/ReactQuery/Hooks/Qurery/useSearchCastCalls';
import useGetActiveCastCalls from '../../lib/ReactQuery/Hooks/Qurery/useActiveCalls';
import Pagination from '../../components/Common/Pagination';

const SearchResult = lazy(() => import('./searchResult'));

const CastCalls = () => {
  const [search, setSearch] = useState<any>(searchData);
  const { getCastCalls, isLoading } = useGetSearchCalls();
  const { getCalls, totalPages } = useGetActiveCastCalls();
  const [query, setQuery] = useState({ pageNumber: 0, size: 5 });
  const [page, setPage] = useState(0);
  
  const onClick = (e: any) => {
    e.preventDefault();
    getCastCalls(search);
    setSearch(searchData);
  };

  console.log(setQuery)

  const handleChange = (e: any) => {
    e.preventDefault();
    const { name, value } = e.target;
    setSearch((prevState: any) => {
      return { ...prevState, [name]: value };
    });
  };

  const handleSelectItem = (item: any, id: any) => {
    if (id === 'projectType') {
      setSearch((prev: any) => ({
        ...prev,
        [id]: item.value,
      }));
      return;
    }
  };

  useEffect(() => {
    getCalls(query);
    //eslint-disable-next-line
  }, [page]);

  const handlePageClick = (data: Record<string, any>) => {
    const currentPage = data.selected;
    query.pageNumber = currentPage;
    setPage(currentPage);
  };

  return (
    <>
      <ContentLayout
        titleColor={COLORS.white}
        centerText
        mt={0.0001}
        backgroundImageTop
        title={CAST_CALL_TITLE}
        subtitle={`${CAST_CALL_SUBTITLE.slice(0, 147)}...`}
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
            padding={'1%'}
            mt={'10px'}
            bgColor={COLORS.text}
          >
            <InputWithLabel
              borderColor={COLORS.dark}
              id="projectName"
              name="projectName"
              bgColor={COLORS.text}
              placeHolder={SEARCH_CAST_CALL}
              fontWeightPlaceHolder={300}
              color={COLORS.white}
              value={search.projectName}
              onChange={handleChange}
            />
            <Picker
              id="projectType"
              data={PROJECT_TYPES}
              label={PROJECTS_TYPE}
              bgColor={'#000'}
              width={'70%'}
              height={'2.8rem'}
              marginTop={'0.4rem'}
              color="white"
              marginLeft={'15rem'}
              selected={{
                label: search.projectType ? search.projectType : PROJECTS_TYPE,
                value: search.projectType,
              }}
              selectItem={(item: any) => handleSelectItem(item, 'projectType')}
            />

            <Picker
              id="projectStatus"
              data={PROJECT_TYPES}
              label={PROJECT_STATUS}
              bgColor={'#000'}
              width={'70%'}
              color="white"
              height={'2.8rem'}
              marginTop={'0.4rem'}
              marginLeft={'15rem'}
              selected={{
                label: PROJECT_STATUS,
                value: 'search',
              }}
              selectItem={(item: any) => console.log(item, 'status')}
            />

            <Button
              padding="1% 0"
              primary
              size="40%"
              sizeMd="100%"
              borderRadius={8}
              onClick={(e: any) => onClick(e)}
              disabled={
                search.projectName === '' || search.projectType === ''
                  ? true
                  : false
              }
            >
              {isLoading ? (
                <Loader size="20" />
              ) : (
                <img src={SEARCH_ICON} alt="searchicon" />
              )}
            </Button>
          </FormGroup>
          <Suspense fallback={<Loader />}>
            <SearchResult />
          </Suspense>
        </Grid>
      </ContentLayout>

      <Pagination
        pageCount={totalPages}
        handlePageClick={(data) => handlePageClick(data)}
      />
    </>
  );
};

export default CastCalls;

import React, { useEffect, useState } from 'react';
import { useRecoilValue } from 'recoil';
import TalentCards from '../../components/Common/TalentCard';
import {
  SEARCH_HEADER,
  SEARCH_BODY,
  TALENT_COUNT,
  TALENT_REVIEW,
} from '../../constants/TalentSearch';
import {
  Banner,
  CrewMen,
  CrewOne,
  CrewTwo,
  TopTalent,
  FirstTop,
  SecondTop,
  MainCardSection,
} from './style';
import { ALLTALENTS } from '../../store/atoms/userAtoms';
import { SINGLE_TALENT } from '../../lib/Config/constants';
import useGetAllTalents from '../../lib/ReactQuery/Hooks/Qurery/useGetTalents';
import Loader from '../../components/Common/Spinner/spinner';
import Pagination from '../../components/Common/Pagination';

const TalentSearch: React.FC = () => {
  const [page, setPage] = useState(0);
  const [search] = useState<any>({ pageNumber: '' });

  const allTalents = useRecoilValue(ALLTALENTS);

  const { loadingAllTalents, getTalent, totalPages } = useGetAllTalents();
  const count = allTalents.length;

  const onClick = (item: any) => {
    localStorage.setItem(SINGLE_TALENT, JSON.stringify(item));
  };

  useEffect(() => {
    getTalent(search);
    // eslint-disable-next-line
  }, [page, search]);
  const handlePageClick = (data: Record<string, any>) => {
    const currentPage = data.selected;
    search.pageNumber = currentPage;
    setPage(currentPage);
  };

  return (
    <>
      <Banner>
        <CrewMen>
          <CrewOne>{SEARCH_HEADER}</CrewOne>
          <CrewTwo>{SEARCH_BODY}</CrewTwo>
        </CrewMen>
      </Banner>
      <TopTalent>
        <FirstTop>
          {count} {TALENT_COUNT}
        </FirstTop>
        <SecondTop>{TALENT_REVIEW}</SecondTop>
      </TopTalent>
      {!loadingAllTalents ? (
        <MainCardSection>
          {allTalents.map((item: any, index: number) => (
            <TalentCards
              first_name={item?.firstName ? item?.firstName : 'None'}
              last_name={item?.surname ? item?.surname : 'None'}
              description={item?.title ? item?.title : 'None'}
              profilePictureUrl={
                item?.profilePictureUrl ? item.profilePictureUrl : ''
              }
              key={index}
              onClick={() => onClick(item)}
            />
          ))}
        </MainCardSection>
      ) : (
        <Loader />
      )}
      <Pagination
        pageCount={totalPages}
        handlePageClick={(data) => handlePageClick(data)}
      />
    </>
  );
};

export default TalentSearch;

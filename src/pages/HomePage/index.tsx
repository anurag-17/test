import React from "react";
import FeatureCard from "../../components/Common/FeatureCard";
import NewsCard from "../../components/Common/NewsCard";
import {
  HeroContainer,
  MainContainer,
  Wrapper,
  CardContainer,
  NewsContainer,
  FeatureWrapper,
  NewsWrapper,
} from "./style";
import {data} from '../HomePage/data'

const HomePage: React.FC = (props) => {
  return (
    <MainContainer>
      <HeroContainer>
        <Wrapper>
          <CardContainer>
            {data.map((items: any,) => (
              <FeatureWrapper>
                <FeatureCard title={items?.title} subtitle={items.subtitle} image={items.image} link={items.link}/>
              </FeatureWrapper>
            ))}
          </CardContainer>
          <NewsContainer>
            {[1, 1, 1, 1].map(() => (
              <NewsWrapper>
                <NewsCard />
              </NewsWrapper>
            ))}
          </NewsContainer>
        </Wrapper>
      </HeroContainer>
    </MainContainer>
  );
};

export default HomePage;

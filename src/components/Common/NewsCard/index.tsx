import React from 'react';
import { COLORS } from '../../../lib/StyledComponents/themes';
import Heading from '../Heading';
import Typography from '../Typography';
import {Container, ImageWrapper, Img} from './style';
import {PROFILE_ITEMS_BACKGROUND} from '../../Assets/ImageConstant'
import { NEWS_DATE, NEWS_SUMMARY, NEWS_TITLE } from '../../../constants/NewsCard';

const NewsCard:React.FC = () =>{
    return (
        <Container>
            <ImageWrapper>
                <Img src={PROFILE_ITEMS_BACKGROUND}/>
            </ImageWrapper>
            <div>
                <Heading subTitle2 title={NEWS_TITLE} color={COLORS.white} fontSize="15px" resFont="12px" marginTop="0rem"/>
                <Typography text={NEWS_SUMMARY} fontSize="13px" resFont="10px" color={COLORS.white} padding="2.5% 0% 0% 0%"/>
                <Typography text={NEWS_DATE} fontSize="13px" resFont="10px" color={COLORS.white} padding="2.5% 0% 0% 0%"/>
            </div>
        </Container>
    );
}

export default NewsCard;
import React from 'react';
import { Link } from "react-router-dom";
import {MESSAGE_ICON} from '../../Assets/IconsConstant';
import Avatar from '../Avatar'
import { USER_PROFILE } from "../../../Navigation/routes";
import {
    VIEW_DETAILS
  } from "../../../constants/TalentSearch";
import {CardContainer,ImageWrapper,SubWrapper,InfoWrapper,DetailWrapper} from './style'

interface Iprops {
    first_name: string;
    last_name: string;
    description: string;
    onClick?: () => void;
    profilePictureUrl?: string;
}

const TalentCard:React.FC<Iprops> = ({first_name, last_name, description, onClick, profilePictureUrl})=>{
    return (
        <CardContainer>
            <ImageWrapper>
                <Avatar image={profilePictureUrl} border={true}/>
            </ImageWrapper>
            <SubWrapper>
                <InfoWrapper>
                    <h2>{first_name} {last_name}</h2>
                    <p>{description}</p>
                </InfoWrapper>
                <DetailWrapper>
                    <div className="message"><img src={MESSAGE_ICON} alt="message"/></div>
                    <div className="button" onClick={onClick}><Link style={{ textDecoration: 'none' }} to={USER_PROFILE}><p>{VIEW_DETAILS}</p></Link></div>
                </DetailWrapper>
            </SubWrapper>
        </CardContainer>
    );
}

export default TalentCard;
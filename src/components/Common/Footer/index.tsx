import React from 'react';
import { Link } from "react-router-dom";
import {COPYRIGHT, PRIVACY_POLICY, TERMS_OF_USE, CONTACT_US} from '../../../constants';
import {StyledFooter,SubWrapper} from "./style";

const Footer: React.FC =()=> {
    return (
        <StyledFooter>
            <div className="main"><p>{COPYRIGHT}</p></div>
            <SubWrapper>
                <Link style={{
                    textDecoration: 'none',
                }} to={'/terms-of-use'}>
                    <div><p className="mid">{TERMS_OF_USE}</p></div>
                </Link>
                <Link style={{
                    textDecoration: 'none',
                }} to={'/privacy-policy'}>
                    <div><p className="mid">{PRIVACY_POLICY}</p></div>
                </Link>
                <Link to={'/contact-us'} style={{
                    textDecoration: 'none',
                }}>
                <div><p className="mid">{CONTACT_US}</p></div>
                </Link>
            </SubWrapper>
        </StyledFooter>
    );
}

export default Footer;
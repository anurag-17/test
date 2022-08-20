import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { ACCOUNT_SETUP, CAST_CALLS, DELETE_ACCOUNT, FACILITIES, FIND_ROLE, NEWS_UPDATE, POST_FACILITIES, POST_ROLE, RESET_PASSWORD, SIGN_OUT, USER_PROFILE } from '../../../Navigation/routes';
import { showMenuSate } from '../../../store/atoms/navAtoms';

import {
  Nav,
  Menu,
  MenuItem,
} from "./style";




export const useRenderNestedNav = () => {
  const [showMenu, setShowMenu] = useRecoilState(showMenuSate);
  
const navigate = useNavigate();
  const handleNav = (route:string) => {
    setShowMenu(!showMenu);
    navigate(route)
  };
  const renderCastCall = (
    <Menu>
    <MenuItem>
      <Nav onClick={()=>handleNav(POST_ROLE)} >Post Cast Calls</Nav>
    </MenuItem>
    <MenuItem>
      <Nav onClick={()=>handleNav(FIND_ROLE)} >Find Roles</Nav>
    </MenuItem>
    <MenuItem>
      <Nav onClick={()=>handleNav(CAST_CALLS)}>My Cast Calls</Nav>
    </MenuItem>
  </Menu>
  ) 

  const renderFacilities = (
    <Menu>
  <MenuItem>
    <Nav onClick={()=>handleNav(POST_FACILITIES)}>Post Facilities</Nav>
  </MenuItem>
  <MenuItem>
    <Nav onClick={()=>handleNav(FACILITIES)}>Find Facilities</Nav>
  </MenuItem>
  <MenuItem>
    <Nav onClick={()=>handleNav(FACILITIES)}>My Facilities</Nav>
  </MenuItem>
  </Menu>
  )


  const renderBlog = (
  
    <Menu>
  <MenuItem>
    <Nav onClick={()=>handleNav(NEWS_UPDATE)} >Blog</Nav>
  </MenuItem>
  <MenuItem>
    <Nav onClick={()=>handleNav(NEWS_UPDATE)}>News & Update</Nav>
  </MenuItem>
  </Menu>
  )

  const renderProfile = (
    <Menu>
  <MenuItem>
    <Nav onClick={()=>handleNav(USER_PROFILE)}>View Profile</Nav>
  </MenuItem>
  <MenuItem>
    <Nav onClick={()=>handleNav(ACCOUNT_SETUP)}>Edit Profile</Nav>
  </MenuItem>
  <MenuItem>
    <Nav >Upgrade Account</Nav>
  </MenuItem>
  <MenuItem>
    <Nav onClick={()=>handleNav(RESET_PASSWORD)}>Reset Password</Nav>
  </MenuItem>
  <MenuItem>
    <Nav onClick={()=>handleNav(DELETE_ACCOUNT)}>Delete Account</Nav>
  </MenuItem>
  <MenuItem>
    <Nav onClick={()=>handleNav(SIGN_OUT)}>Sign Out</Nav>
  </MenuItem>
  </Menu>
  )

  return{
    renderCastCall,
    renderFacilities,
    renderBlog,
    renderProfile
  }
}







import React, { useEffect, useState } from "react";
import {
  CREATE_ACCOUNT_LABEL,
  FIND_ROLE_LABEL,
  HOME_LABEL,
  NEWS_UPDATE_LABEL,
  SIGN_IN_LABEL,
} from "../../../constants/Navbar";
import {
  CREATE_ACCOUNT,
  HOME,
  POST_ROLE,
  FIND_ROLE,
  SIGN_IN,
  NEWS_UPDATE,
  SEARCH_TALENT,
  CAST_CALLS,
  FACILITIES,
  USER_PROFILE,
  ACCOUNT_SETUP,
  RESET_PASSWORD,
  SIGN_OUT,
  POST_FACILITIES,
} from "../../../Navigation/routes";
import { COLORS } from "../../../lib/StyledComponents/themes";
import Modal from '../../Common/Modal';
import { ARROW_DOWN_WHITE, LOGO, MENU_ICON } from "../../Assets/IconsConstant";
import Button from "../button/Button";

import MobileNav from "../MobileNav";
import {
  Header,
  Li,
  MenuIcon,
  StyledLink,
  Nav,
  Ul,
  StyledLoggedInAvatarWrapper,
  StyledListItem,
  StyledLoggedInDropDown,
} from "./style";
import DropDown from "../DropDownMenu";
import Avatar from "../Avatar";
import IconButton from "../IconButton";
import { useRecoilState, useRecoilValue } from "recoil";
import { USER } from "../../../store/atoms";
import { TOKEN_KEY } from "../../../lib/Config/constants";
import { showMenuSate } from "../../../store/atoms/navAtoms";

const Navbar = () => {
  const [showMenu, setShowMenu] = useRecoilState(showMenuSate);
  
  const [showDropDown, setShowDropDown] = useState(false);
  const { isLoggedIn } = useRecoilValue(USER);
  const [user, setUser] = useRecoilState(USER);

  useEffect(() => {
    const token = localStorage.getItem(TOKEN_KEY);
    if (token) {
      setUser({ ...user, isLoggedIn: true });
    } else {
      setUser({ ...user, isLoggedIn: false });
    }

    //eslint-disable-next-line
  }, [isLoggedIn]);
  const handleMenu = () => {
    setShowMenu(!showMenu);
    console.log("display Menu", showMenu);
  };
  const handleDropDown = () => {
    setShowDropDown(!showDropDown);
  };
  const [modalOpen, setModalOpen] = useState(false);
  // const onClick = () =>{
    
  //     setModalOpen(true);
  
  // }
  return (
    <>
      <Header>
        {!showMenu && (
          <Nav>
            <Ul isLoggedIn={isLoggedIn}>
              <Li>
                <StyledLink to={HOME}>
                  <MenuIcon src={LOGO} alt="wakacast logo" />
                </StyledLink>
              </Li>
              <Li>
                <StyledLink to={HOME}>{HOME_LABEL}</StyledLink>
              </Li>
              <Li>
                <StyledLink to={SEARCH_TALENT}>Talents</StyledLink>
                {/* <StyledLink to={FIND_ROLE}>{FIND_ROLE_LABEL}</StyledLink> */}
              </Li>
              <Li tabIndex={0}>
                <StyledListItem>Cast calls</StyledListItem>
                <DropDown
                setModalOpen={setModalOpen}
                  positionAbsolute
                  items={[
                    { link: `${POST_ROLE}`, name: "post cast call" },
                    { link: `${FIND_ROLE}`, name: `${FIND_ROLE_LABEL}` },
                    { link: `${CAST_CALLS}`, name: "my cast calls" },
                  ]}
                />
                {/* <StyledLink to={POST_ROLE}>{POST_ROLE_LABEL}</StyledLink> */}
              </Li>
              <Li tabIndex={0}>
                <StyledListItem>Facilities</StyledListItem>
                <DropDown
                setModalOpen={setModalOpen}
                  positionAbsolute
                  // display={false}
                  items={[
                    { link: `${POST_FACILITIES}`, name: "Post Facilities" },
                    { link: `${FACILITIES}`, name: "find facility" },
                    { link: `${FACILITIES}`, name: "my facilities" },
                  ]}
                />
              </Li>
              <Li tabIndex={0}>
                <StyledListItem>Blog</StyledListItem>
                <DropDown
                setModalOpen={setModalOpen}
                  positionAbsolute
                  pt={5}
                  items={[
                    { link: `${NEWS_UPDATE}`, name: "Blog" },
                    { link: `${NEWS_UPDATE}`, name: `${NEWS_UPDATE_LABEL}` },
                  ]}
                />
              </Li>
              {isLoggedIn ? (
                <Li isLoggedIn={isLoggedIn}
                >
                  <StyledLoggedInAvatarWrapper
                    onClick={handleDropDown}
                    // onMouseOut={ ()=>setShowDropDown(false)}
                  >
                    <Avatar square avatarOrInitials/>
                    <IconButton
                      opacity={1}
                      size={18}
                      icon={ARROW_DOWN_WHITE}
                      alt="open drop down"
                      background="none"
                      onClick={handleDropDown}
                    />
                  </StyledLoggedInAvatarWrapper>
                  {showDropDown && (
                    <StyledLoggedInDropDown
                    onPointerLeave={ ()=>setShowDropDown(false)}
                    >
                      <DropDown
                        // display={false}
                        setModalOpen={setModalOpen}
                        items={[
                          // { link: `${CREATE_ACCOUNT}`, name: "Create Profile" },
                          { link: `${USER_PROFILE}`, name: "View Profile" },
                          { link: `${ACCOUNT_SETUP}`, name: "Edit Profile" },
                          { link: `${HOME}`, name: "UPGRADE ACCOUNT" },
                          { link: `${RESET_PASSWORD}`, name: "RESET PASSWORD" },
                          { link: `${CREATE_ACCOUNT}`, name: "Delete Account" },
                          { link: `${SIGN_OUT}`, name: "Sign Out" },
                        ]}
                      />
                    </StyledLoggedInDropDown>
                  )}
                </Li>
              ) : (
                <>
                  <Li isLoggedIn={isLoggedIn}>
                    <StyledLink to={CREATE_ACCOUNT}>
                      <Button
                        title={CREATE_ACCOUNT_LABEL}
                        background={COLORS.dark}
                      />
                    </StyledLink>
                  </Li>
                  <Li isLoggedIn={isLoggedIn}>
                    <StyledLink to={SIGN_IN}>
                      <Button title={SIGN_IN_LABEL} color={COLORS.white} />
                    </StyledLink>
                  </Li>
                </>
              )}

              <Li>
                <MenuIcon
                  onClick={handleMenu}
                  src={MENU_ICON}
                  alt="Menu, Click to show Menu"
                />
              </Li>
            </Ul>
          </Nav>
        )}
        {modalOpen && <Modal setOpenModal={setModalOpen} />}

        {showMenu && <MobileNav showMenu={showMenu} setShowMenu={setShowMenu} />}
      </Header>
    </>
  );
};

export default Navbar;

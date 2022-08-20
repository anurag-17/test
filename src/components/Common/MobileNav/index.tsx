import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { InitialMobileNavRoute } from "../../../store/InitialState/mobileNav";
import { HOME, SEARCH_TALENT } from "../../../Navigation/routes";
import { ARROW_RIGHT, CLOSE_ICON } from "../../Assets/IconsConstant";
import Avatar from "../Avatar";
import { useRenderNestedNav } from "./renderNestedNav";
import {
  CloseIcon,
  Container,
  Heading,
  Nav,
  Menu,
  MenuItem,
  Section,
  NavWrapper,
} from "./style";
import {
  BLOG,
  CASTCALLS,
  FACILITIES,
  PROFILE,
} from "../../../Navigation/nestedRoutes";
import IconButton from "../IconButton";

interface Props {
  setShowMenu: any;
  showMenu: any;
}

const MobileNav = ({ setShowMenu, showMenu }: Props) => {
  const [mobileNavRoute, setMobileNavRoute] = useState(InitialMobileNavRoute);
  const navigate = useNavigate();

  const [headerTitle, showHeaderTitle] = useState("Navigation");

  const { renderCastCall, renderFacilities, renderBlog, renderProfile } =
    useRenderNestedNav();
  const handleClose = () => {
    setShowMenu(!showMenu);
  };
  const handleMobileNavRoute = (title: string) => {
    setMobileNavRoute({
      ...mobileNavRoute,
      castCalls: title === CASTCALLS && true,
      facilities: title === FACILITIES && true,
      blog: title === BLOG && true,
      profile: title === PROFILE && true,
    });
    showHeaderTitle(title);
  };

  const handleNaviagte = (route: string) => {
    setShowMenu(!showMenu);
    navigate(route);
  };
  return (
    <Container>
      <Section>
        <Heading>{headerTitle}</Heading>
        <CloseIcon
          onClick={handleClose}
          src={CLOSE_ICON}
          alt="Close, click to close"
        />
      </Section>

      {mobileNavRoute.castCalls ? (
        renderCastCall
      ) : mobileNavRoute.facilities ? (
        renderFacilities
      ) : mobileNavRoute.blog ? (
        renderBlog
      ) : mobileNavRoute.profile ? (
        renderProfile
      ) : (
        <Menu>
          <MenuItem>
            <Nav onClick={() => handleNaviagte(HOME)}>Home</Nav>
          </MenuItem>
          <MenuItem>
            <Nav onClick={() => handleNaviagte(SEARCH_TALENT)}>Talents</Nav>
          </MenuItem>
          <MenuItem>
            <NavWrapper onClick={() => handleMobileNavRoute(CASTCALLS)}>
              <Nav>Cast Calls</Nav>
              <IconButton icon={ARROW_RIGHT} opacity={1} />
            </NavWrapper>
          </MenuItem>
          <MenuItem>
            <NavWrapper onClick={() => handleMobileNavRoute(FACILITIES)}>
              <Nav>Facilities</Nav>
              <IconButton icon={ARROW_RIGHT} opacity={1} />
            </NavWrapper>
          </MenuItem>
          <MenuItem>
            <NavWrapper onClick={() => handleMobileNavRoute(BLOG)}>
              <Nav>Blog</Nav>
              <IconButton icon={ARROW_RIGHT} opacity={1} />
            </NavWrapper>
          </MenuItem>
          <MenuItem>
            <Nav onClick={() => handleMobileNavRoute(PROFILE)}>
              <Avatar square={true} size={60} />
            </Nav>
          </MenuItem>
        </Menu>
      )}
    </Container>
  );
};

export default MobileNav;

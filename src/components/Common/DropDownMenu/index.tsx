import React from 'react'
import {
  StyledDropDownItem,
  StyledDropDownLink,
  StyledDropDownWrapper,
  StyleDropDownContainer,
} from './style';

interface Props {
  positionAbsolute?: boolean;
  display?: boolean;
  pt?: number;
  items: { link: string; name: string }[];
  setModalOpen: any
}

const DropDown = ({ positionAbsolute, items, display, pt, setModalOpen }: Props) => {
  const dropDownItems = items;



 
  return (
    <StyledDropDownWrapper positionAbsolute={positionAbsolute} pt={pt}>
      <StyleDropDownContainer>
        {dropDownItems.map((item, index) => {
          return item.name === 'Delete Account' ? (
            <StyledDropDownLink onClick={()=> setModalOpen(true)} to={item.link} key={index}>
              <StyledDropDownItem>{item.name}</StyledDropDownItem>
            </StyledDropDownLink>
          ) : (
            <StyledDropDownLink to={item.link} key={index}>
              <StyledDropDownItem>{item.name}</StyledDropDownItem>
            </StyledDropDownLink>
          );
        })}
        {/* {modalOpen && <Modal setOpenModal={setModalOpen} />} */}
      </StyleDropDownContainer>
  
    </StyledDropDownWrapper>
  );
};

export default DropDown;

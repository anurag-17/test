import React from 'react'
import { HEADING_ACCOUNT_DELETE, TITLE_ACCOUNT_DELETE, TITLE_ACCOUNT_DELETE_2 } from '../../../constants/DeleteAccount';
import Card from '../Card';
import Button from '../CustomButton';
import Heading from '../Heading';
import Typography from '../Typography';
import { StyledSignInWrapper, StyleSignInButtonWrapper } from './style';
import accountDelete from '../../../lib/ReactQuery/Services/Mutations/accountDelete';
import { useNavigate } from 'react-router-dom';
import { COLORS } from '../../../lib/StyledComponents/themes';
import { CREATE_ACCOUNT } from '../../../Navigation/routes';

 const Modal = ({setOpenModal}: any) => {
    const navigate = useNavigate();

    const handleNavigate = () => {
        navigate(CREATE_ACCOUNT);
      };

  return (
    <StyledSignInWrapper>
    <Card padding="8%">
        <button onClick={() => setOpenModal(false)}>X</button>
      <Heading title={HEADING_ACCOUNT_DELETE} subTitle2 marginTop="0rem" />
      <Typography body1 text={TITLE_ACCOUNT_DELETE} />
      <Typography body1 text={TITLE_ACCOUNT_DELETE_2} />

      <StyleSignInButtonWrapper>
        <Button
          color={COLORS.grey}  onClick={() => setOpenModal(false)}
          primary
          shadow
          size={"45%"}
          sizeMd={"45%"}
        >
          {"Cancel"}
        </Button>

        <Button
          onClick={() => accountDelete(handleNavigate)}
          primary
          shadow
          size={"45%"}
          sizeMd={"45%"}
        >
          {"Delete Account"}
        </Button>
      </StyleSignInButtonWrapper>
    </Card>
  </StyledSignInWrapper>
    
  )
}

export default Modal;





    // <div className="modlaBackground">
    //     <div className="modalContainer">
    //         <div className="titleCloseBtn">
    //             <button onClick={() => setOpenModal(false)}>X</button>
    //         </div>
    //         <div className="title">
    //             <h2>Are You Sure You Want To Delete Your Acount?</h2>
    //         </div>
    //         <div className="body">
    //             <p>After Deleting Your account You cannot reverse this Action</p>
    //         </div>
    //         <div className="footer">
    //             <button onClick={() => setOpenModal(false)}>Cancel</button>
    //             <button>Delete</button>
    //         </div>
    //     </div>
    // </div>
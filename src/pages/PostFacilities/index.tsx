import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router';
import { setTimeout } from 'timers';
import Card from '../../components/Common/Card';
import Button from '../../components/Common/CustomButton';
import Select from '../../components/Common/CustomSelect';
import Heading from '../../components/Common/Heading';
import InputWithLabel from '../../components/Common/InputWithLabel';
import TextArea from '../../components/Common/TextArea';
import Typography from '../../components/Common/Typography';
import { CREATING_FACILITY_POST, EnterCity, EnterFacility, EnterName, EnterQuantity, EnterState, HeadingPost, POST_FACILITY, Title } from '../../constants/FacilityPost';
import useAuth from '../../lib/ReactQuery/Hooks/Auth';
import useGetAssetList from '../../lib/ReactQuery/Hooks/Qurery/useGetAssetList';
import { PostFacilitiesCredentials } from '../../store/InitialState/credentials';
import { FACILITIES } from '../../Navigation/routes';
import { validate } from '../../utils/validations';
import { StyledBorderTop } from '../PostRole/style';
import { StyledPostFacilitiesButton, StyledPostFacilitiesForm, StyledPostFacilitiesWrapper } from './style';

const PostFacilities = () => {
  const {createFacilityPost, isCreatingFacilityPost} = useAuth();
  const [credentials, setCredentials]= useState(PostFacilitiesCredentials);
 
  const [emptyFields, setEmptyFields] = useState(false);
  
  const {assetList, loadingAssets, assetError} = useGetAssetList();
  const navigate = useNavigate();

  useEffect(() => {
    validate.isEmptyFormFiled(credentials)
    ? setEmptyFields(true)
    : setEmptyFields(false);
  }, [credentials]);

  
  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setCredentials((prevState) => {
      return { ...prevState, [name]: value };
    });
  };

  const handleSubmit = () => {
    createFacilityPost(credentials);
    setTimeout(() => {
      handleNavigate();
    }, 2000)
  };

  const handleNavigate = () => {
    navigate(FACILITIES);
  }

  

  return (
    <StyledPostFacilitiesWrapper>
      <StyledBorderTop/>
      <Card>
        <Heading subTitle2 title={Title} marginTop="0rem"/>
        <Typography text={HeadingPost} fontSize="1em" />
        <StyledPostFacilitiesForm>

          <Select
            listItem={assetList}
            width={"37.6%"}
            error={assetError || ""}
            label="TYPE OF FACILITY/PRODUCTION ASSET"
            placeHolder={
              loadingAssets ? "loading facilities..." : EnterFacility
            }
            name="facilityType"
            onChange={handleChange}
          />

          <InputWithLabel
            width={"37.6%"}
            label="Name Of facility/production asset"
            name="facilityName"
            placeHolder={EnterName}
            onChange={handleChange}
          />

          <InputWithLabel
            width={"20.3%"}
            label="QUANTITY"
            name="quantity"
            placeHolder={EnterQuantity}
            onChange={handleChange}
          />

          <TextArea
            width="100%"
            rows={10}
            label="Description of your facility/production asset"
            name="facilityDescription"
            onChange={handleChange}
          />


          <InputWithLabel
            width={"48.9%"}
            label="state"
            name="state"
            placeHolder={EnterState}
            onChange={handleChange}
          />

          <InputWithLabel
            width={"48.9%"}
            label="city"
            name="city"
            placeHolder={EnterCity}
            onChange={handleChange}
          />

        </StyledPostFacilitiesForm>
        <StyledPostFacilitiesButton>
          <Button
            size="16.5em"
            primary
            shadow
            padding="2%"
            onClick={handleSubmit}
            disabled={isCreatingFacilityPost || emptyFields}
          >
            {isCreatingFacilityPost ? CREATING_FACILITY_POST : POST_FACILITY}
          </Button>
        </StyledPostFacilitiesButton>
      </Card>
    </StyledPostFacilitiesWrapper>
  )
}

export default PostFacilities;
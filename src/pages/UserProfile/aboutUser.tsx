import React from "react";
import { COLORS } from "../../lib/StyledComponents/themes";
import Typography from "../../components/Common/Typography";
import Grid from "../../components/Common/Grid";
import Heading from "../../components/Common/Heading";
import Avatar from "../../components/Common/Avatar"; 
import useGetSingleUser from "../../lib/ReactQuery/Hooks/Qurery/useGetSingleUser";
import Loader from "react-spinners/CircleLoader";

const AboutUser = () => {
  const { singleUser, loadingSingleUser, singleUserError } = useGetSingleUser();
  console.log("singleUser", singleUser)

  const roles = singleUser?.roles?.map((role: any)=>Object.values(role)[0])
  console.log("roles", roles)

  const genres = singleUser?.genres?.map((genre: any)=>Object.values(genre)[0]) 
  console.log("genres", genres)

  const languages = singleUser?.spokenLanguages?.map((language: any)=>Object.values(language)[0])
  console.log("languages", languages)
  
 
 

  return (
    <>
      {loadingSingleUser ? (
        <Loader /> ? (
          singleUserError
        ) : (
          <Typography>An error occured loading user</Typography>
        )
      ) : (
        <>
          <Grid gap={8} alignItems="center">
            <Avatar border size={70} gap={7} />
            <Grid item column alignItems="center">
              <Heading
                fontWeight={700}
                title={`${singleUser?.firstName} ${singleUser?.surname}`}
                marginTop="0rem"
              />
              <Heading
                fontSize="1em"
                fontWeight={500}
                color={COLORS.primary}
                marginTop="0rem"
              />
            </Grid>
            <Typography
              textAlign="center"
              fontSize="1em"
              fontWeight={400}
              text={singleUser.headline}
              padding="0.3em 5%"
            />
          </Grid>
          <Grid item column padding="5% 0 0 0">
            {/* {USER_DETAILS.map((userData, index) => ( */}
              <Grid
                item
                borderBottom
                justifyContent="space-between"
                padding="3% 5%"
              >
                <Heading
                  fontSize="0.8em"
                  title={"Roles"}
                  fontWeight={400}
                  color={COLORS.grey}
                  marginTop="0rem"
                />
                 <Heading
                  fontSize="0.75em"
                  title={roles.map((role : any)=><span> {role} ,</span>)}
                  fontWeight={400}
                  marginTop="0rem"
                />
              </Grid>
              <Grid
                item
                borderBottom
                justifyContent="space-between"
                padding="3% 5%"
            
              >
                <Heading
                  fontSize="0.8em"
                  title={"Genres"}
                  fontWeight={400}
                  color={COLORS.grey}
                  marginTop="0rem"
                />
                <Heading
                  fontSize="0.75em"
                  title={genres.map((genre : any)=><span> {genre},</span>)}
                  fontWeight={400}
                  marginTop="0rem"
                />
              </Grid>
              <Grid
                item
                borderBottom
                justifyContent="space-between"
                padding="3% 5%"
              >
                <Heading
                  fontSize="0.8em"
                  title={"Languages Spoken"}
                  fontWeight={400}
                  color={COLORS.grey}
                  marginTop="0rem"
                />

                <Heading
                  fontSize="0.75em"
                  title={languages.map((language: any)=><span> {language}, </span>)}
                  fontWeight={400}
                  marginTop="0rem"
            
                />
              </Grid>
              <Grid
                item
                borderBottom
                justifyContent="space-between"
                padding="3% 5%"
              >
                <Heading
                  fontSize="0.8em"
                  title={"Height"}
                  fontWeight={400}
                  color={COLORS.grey}
                  marginTop="0rem"
                />
                <Heading
                  fontSize="0.75em"
                  title= {singleUser.height}
                  fontWeight={400}
                  marginTop="0rem"
                />
              </Grid>
              <Grid
                item
                borderBottom
                justifyContent="space-between"
                padding="3% 5%"
              >
                <Heading
                  fontSize="0.8em"
                  title={"Weight"}
                  fontWeight={400}
                  color={COLORS.grey}
                  marginTop="0rem"
                />
                <Heading
                  fontSize="0.75em"
                  title= {singleUser.weight}
                  fontWeight={400}
                  marginTop="0rem"
                />
                </Grid>
                <Grid
                item
                borderBottom
                justifyContent="space-between"
                padding="3% 5%"
              >
                <Heading
                  fontSize="0.8em"
                  title={"Skin Tone"}
                  fontWeight={400}
                  color={COLORS.grey}
                  marginTop="0rem"
                />
                <Heading
                  fontSize="0.75em"
                  title= {singleUser.skinTone}
                  fontWeight={400}
                  marginTop="0rem"
                />
              </Grid>
              <Grid
                item
                borderBottom
                justifyContent="space-between"
                padding="3% 5%"
                // key={index}
              >
                <Heading
                  fontSize="0.8em"
                  title={"Ethnicity"}
                  fontWeight={400}
                  color={COLORS.grey}
                  marginTop="0rem"
                />
                <Heading
                  fontSize="0.75em"
                  title= {singleUser.ethnicity}
                  fontWeight={400}
                  marginTop="0rem"
                />
              </Grid>
              <Grid
                item
                borderBottom
                justifyContent="space-between"
                padding="3% 5%"
              >
                <Heading
                  fontSize="0.8em"
                  title={"Education"}
                  fontWeight={400}
                  color={COLORS.grey}
                  marginTop="0rem"
                />
                <Heading
                  fontSize="0.75em"
                  title= {singleUser.education}
                  fontWeight={400}
                  marginTop="0rem"
                />
              </Grid>
            {/* ))} */}
          </Grid>
        </>
      )}
    </>
  );
};

export default AboutUser;
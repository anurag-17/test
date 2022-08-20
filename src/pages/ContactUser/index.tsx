import React from 'react'
import { SEND_ICON } from "../../components/Assets/IconsConstant";
import Avatar from "../../components/Common/Avatar";
import Card from "../../components/Common/Card";
import Grid from "../../components/Common/Grid";
import Heading from "../../components/Common/Heading";
import InputWithLabel from "../../components/Common/InputWithLabel";
import ContentLayout from "../../components/Common/Layout/ContentLayout";
import Paper from "../../components/Common/Paper";
import Typography from "../../components/Common/Typography";
import {
  CHATS,
  CONTACT_USER_SUBTITLE,
  CONTACT_USER_TITLE,
} from "../../constants/ContactUser";
import { ROLE, USER_NAME } from "../../constants/UserProfile";
import { COLORS } from "../../lib/StyledComponents/themes";

const ContactUser = () => {
  return (
    <ContentLayout title={CONTACT_USER_TITLE} subtitle={CONTACT_USER_SUBTITLE}>
      <Card padding="0" pt={1.5} pb={1.5}>
        <Grid gap={8} alignItems="center">
          <Avatar border size={70} gap={7} />
          <Grid item column alignItems="center" borderBottom pb={1.5} mb={2}>
            <Heading fontWeight={700} title={USER_NAME} marginTop="0rem" />
            <Heading
              fontSize="1em"
              fontWeight={500}
              title={ROLE}
              color={COLORS.primary}
              marginTop="0rem"
            />
          </Grid>
          {CHATS.map((chat, index) => (
            <Grid
              gap={8}
              alignItems={chat.type === "sent" ? "flex-end" : "flex-start"}
              mr={chat.type === "sent" ? 2.5 : 0}
              ml={chat.type === "sent" ? 0 : 2.5}
              key={index}
            >
              <Paper
                width={47}
                pl={1.5}
                mr={2.5}
                bgColor={
                  chat.type === "sent" ? COLORS.dark : COLORS.inputBorder
                }
              >
                <Typography
                  fontSize="1em"
                  fontWeight={chat.type === "sent" ? 350 : 400}
                  text={chat.message}
                  color={chat.type === "sent" ? COLORS.white : ""}
                />
              </Paper>
              <Typography
                fontSize="0.75em"
                padding="0 1.5%"
                fontWeight={400}
                color={COLORS.border}
                text={chat.time}
                textAlign="left"
                width={49.5}
              />
            </Grid>
          ))}
          <InputWithLabel
            mr={2.5}
            mt={5}
            iconText="send icon"
            bgColor={COLORS.inputBorder}
            icon={SEND_ICON}
            width="95%"
            iconTop={22}
            placeHolder="Type Something..."
          />
        </Grid>
      </Card>
    </ContentLayout>
  );
};

export default ContactUser;

import React from "react";
import { COLORS } from "../../../lib/StyledComponents/themes";
import Heading from "../Heading";
import Typography from "../Typography";
import { Container, Icon, Input, Label, TextAreaWrapper } from "./style";

interface Props {
  rows?: number;
  count?: number;
  cols?: number;
  label?: string | number;
  placeHolder?: string;
  width?: string;
  name?: string;
  onChange: Function | any;
  id?: string;
  value?: string;
  maxLength?: number;
}

const TextArea = ({
  rows,
  count,
  cols,
  label,
  placeHolder,
  width,
  name,
  onChange,
  id,
  value,
  maxLength
}: Props) => {
  return (
    <Container width={width}>
      <Label>
        <Heading
          title={label}
          color={COLORS.grey}
          fontSize="0.725em"
          fontWeight={600}
          marginTop="0rem"
        />
      </Label>
      <TextAreaWrapper>
        <Input
          rows={rows ? rows : 3}
          cols={cols ? cols : 4}
          placeholder={placeHolder}
          name={name}
          onChange={onChange}
          id={id}
          value={value}
          maxLength={maxLength}
        />

        {maxLength && (
          <Icon>
            <Typography fontSize="0.75em" text={`${count}/${maxLength || 0}`} />
          </Icon>
        )}
      </TextAreaWrapper>
    </Container>
  );
};
export default TextArea;

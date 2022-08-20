import React, { useEffect, useState } from "react";
import Heading from "../../../components/Common/Heading";
import {
  BorderSolid,
  BorderSolidFirst,
  Toggle,
  ToggleP,
  FontP,
  PickerPopups,
  PickerPopup,
  PickerLabel,
  StyledAsterik,
  Label,
  Container,
  Img,
} from "./pick";
import { COLORS } from "../../../lib/StyledComponents/themes";
import { ARROW_DOWN_WHITE } from "../../../components/Assets/IconsConstant";

interface PickerData {
  label: string;
  value: string;
}

interface Props {
  id: string;
  data?: PickerData[];
  selected?: PickerData;
  label?: string;
  labels?: string;
  place?: string;
  selectItem: Function;
  bgColor?: string;
  width?: any;
  borderRadius?: any;
  height?: any;
  color?: any;
  marginLeft?: any;
  margin?: any;
  marginTop?: any;
  center?: any;
  types?: string;
  type?:Number
  typing?: string | any;
}

const Picker = ({
  id,
  data,
  selected,
  label,
  place,
  selectItem,
  bgColor,
  width,
  height,
  color,
  borderRadius,
  marginLeft,
  marginTop,
  types,
  labels,
  typing,
  margin,
}: Props) => {
  const [openModal, setOpenModal] = useState(false);

  const toggleModal = () => {
    setOpenModal(!openModal);
  };

  const handleSelectItem = (item: PickerData) => {
    selectItem(item);
    setOpenModal(false);
  };

  function handleClickEvent(e: any) {
    if (openModal && e.target?.parentElement?.id === id) {
      return;
    } else {
      if (
        e.target?.parentElement?.id === id ||
        e.target?.parentElement?.id === `${id}toggle`
      ) {
        setOpenModal(true);
        return;
      }
      setOpenModal(false);
    }
  }

  useEffect(() => {
    document.querySelector("div")?.addEventListener("click", handleClickEvent);

    return () => {
      window.removeEventListener("click", handleClickEvent);
    };
  }, [openModal]); // eslint-disable-line

  return (
    <Container
      width={width}
      
    >
      <Label margin={margin} typing={typing}>
        <Heading
          title={labels}
          color={COLORS.grey}
          fontSize="0.725em"
          fontWeight={600}
          marginTop="0rem"
        />
        {"required" && labels && <StyledAsterik>*</StyledAsterik>}
      </Label>
      <BorderSolid
        width={width}
        height={height}
        borderRadius={borderRadius}
        marginTop={marginTop}
        typing={typing}
      >
        <BorderSolidFirst>
          {id === "status" || "action_taken" ? place : label}
        </BorderSolidFirst>
        <Toggle
          id={`${id}toggle`}
          onClick={() => toggleModal()}
          bgColor={bgColor}
          color={color}
        >
          <ToggleP>{selected?.label || label || ""}</ToggleP>
          <FontP marginLeft={marginLeft}>
            <Img src={ARROW_DOWN_WHITE} />
          </FontP>
        </Toggle>
        {openModal && (
          <PickerPopup types={types} width={"10%"}>
            {data?.map((item, index) => (
              <PickerPopups
                id={`pickerItem${index}`}
                key={index}
                onClick={() => handleSelectItem(item)}
              >
                <PickerLabel color={color} types={types} marginLeft={"3rem"}>
                  {item.label}
                </PickerLabel>
              </PickerPopups>
            ))}
          </PickerPopup>
        )}
      </BorderSolid>
    </Container>
  );
};

export default Picker;

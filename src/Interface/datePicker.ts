import { changeEvent } from "../utils/types";

export interface IDatePicker {
    icon?: string;
    iconText?: string;
    label?: string;
    width?: string;
    required?: boolean;
    fontWeightPlaceHolder?: number | string;
    margin?: string;
    type?: string;
    bgColor?: string;
    pt?: number;
    pr?: number;
    pl?: number;
    pb?: number;
    mt?: number;
    mr?: number;
    ml?: number;
    mb?: number;
    iconTop?: number;
    placeHolder?: string;
    id?: string;
    name?: string;
    value?: string;
    borderColor?: string;
    color?: string;
    onChange: (date: Date , e: changeEvent) => void;
    selected:Date;
  }
import React from "react";
import { css } from "@emotion/react";
import ClipLoader from "react-spinners/ClipLoader";
import {Spinner} from './spinnerLoad'

const override = css`
  display: block;
  margin: 0 auto;
`;

const Loader = (props: any) => {
  const {size} = props
  return (
    <>
      <Spinner>
        <ClipLoader color={"#fff00"} css={override} size={size ? size : 50} />
      </Spinner>
    </>
  );
};

export default Loader;

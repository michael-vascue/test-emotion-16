/** @jsx jsx */
import { jsx } from '@emotion/core'
import React from "react";

const Button = () => {
  return (
    <button
      css={{
        backgroundColor: "hotpink",
        "&:hover": {
          color: "lightgreen"
        }
      }}
    ></button>
  );
};

export default Button;

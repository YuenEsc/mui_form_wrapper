import React from 'react';
import HHTextField from "./HHTextField";
import NumberFormat from "react-number-format";
import {InputAdornment} from "@mui/material";
import PropTypes from "prop-types";
import HHFormPriceField from "./HHFormPriceField";

const HHNumberField = ({dollarPrefix= false, ...rest }) => {
  return (
    <NumberFormat
      customInput={HHTextField}
      {...rest}
      InputProps={{ ...rest?.InputProps, startAdornment: dollarPrefix && <InputAdornment position="start">$</InputAdornment> }}
    />
  );
};

HHFormPriceField.propTypes = {
  dollarPrefix: PropTypes.bool,
};

export default HHNumberField;

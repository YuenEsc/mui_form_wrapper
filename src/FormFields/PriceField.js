import React from 'react';
import PropTypes from 'prop-types';
import NumberField from "./NumberField";
import {InputAdornment} from "@material-ui/core";

const PriceField = ({
  name,
  control,
  label= undefined,
  placeholder = "0.0",
  size = "small",
  autocomplete = "off",
  dollarPrefix= true,
  thousandsSeparator = true,
  decimalSeparator = ".",
  decimalScale = 2,
  variant = "outlined",
  allowNegative = true,
  rules = undefined,
  required = false,
  fullWidth= false,
  isNumericString = false,
}) => {
  return (
    <NumberField
      name={name}
      control={control}
      label={label}
      placeholder={placeholder}
      size={size}
      autocomplete={autocomplete}
      thousandsSeparator={thousandsSeparator}
      decimalSeparator={decimalSeparator}
      decimalScale={decimalScale}
      variant={variant}
      allowNegative={allowNegative}
      rules={rules}
      required={required}
      fullWidth={fullWidth}
      isNumericString={isNumericString}
      InputProps={{
        startAdornment: dollarPrefix && <InputAdornment position="start">$</InputAdornment>
      }}
    />
  );
};

PriceField.propTypes = {
  name: PropTypes.string.isRequired,
  control: PropTypes.object.isRequired,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  size: PropTypes.oneOf(['small','medium']),
  autocomplete: PropTypes.string,
  dollarPrefix: PropTypes.bool,
  thousandsSeparator: PropTypes.bool,
  decimalSeparator: PropTypes.oneOf([".",",", false, true]),
  variant: PropTypes.oneOf(["filled","outlined","standard"]),
  allowNegative: PropTypes.bool,
  rules: PropTypes.object,
  required: PropTypes.bool,
  fullWidth: PropTypes.bool,
  isNumericString: PropTypes.bool,
}

export default PriceField;


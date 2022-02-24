import React from 'react';
import NumberFormat from 'react-number-format';
import { Controller } from 'react-hook-form';
import PropTypes from 'prop-types';
import WithInputLabel from "./WithInputLabel";
import StyledTextField from "./StyledTextField";

const NumberField = ({
  name,
  control,
  label= undefined,
  placeholder = "0",
  size = "small",
  autocomplete = "off",
  thousandSeparator = true,
  decimalSeparator = ".",
  decimalScale = 0,
  variant = "outlined",
  allowNegative = true,
  rules = undefined,
  required = false,
  fullWidth= false,
  isNumericString = false,
  InputProps= undefined,
}) => {
  return (
    <WithInputLabel label={label} required={required || rules?.required === true}>
      <Controller
        name={name}
        control={control}
        rules={!!rules
          ?
          {...rules, required: required || rules?.required === true}
          :
          {required: required || rules?.required === true}}
        render={
          ({field}) =>
            <NumberFormat
              placeholder={placeholder}
              size={size}
              autoComplete={autocomplete}
              customInput={StyledTextField}
              InputProps={InputProps}
              thousandSeparator={thousandSeparator}
              decimalSeparator={decimalSeparator}
              decimalScale={decimalScale}
              variant={variant}
              allowNegative={allowNegative}
              {...field}
              fullWidth={fullWidth}
              isNumericString={isNumericString}
            />
        }
      />
    </WithInputLabel>
  );
};

NumberField.propTypes = {
  name: PropTypes.string.isRequired,
  control: PropTypes.object.isRequired,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  size: PropTypes.oneOf(['small','medium']),
  autocomplete: PropTypes.string,
  dollarPrefix: PropTypes.bool,
  thousandSeparator: PropTypes.bool,
  decimalSeparator: PropTypes.oneOf([".",",", false, true]),
  variant: PropTypes.oneOf(["filled","outlined","standard"]),
  allowNegative: PropTypes.bool,
  rules: PropTypes.object,
  required: PropTypes.bool,
  fullWidth: PropTypes.bool,
  isNumericString: PropTypes.bool,
  InputProps: PropTypes.object,
}

export default NumberField;


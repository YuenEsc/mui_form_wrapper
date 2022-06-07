import React from 'react';
import PropTypes from 'prop-types';
import { Controller } from 'react-hook-form';
import HHFormNumberField from "./HHFormNumberField";
import { InputAdornment } from "@mui/material";

const HHFormPriceField = ({
   sx = undefined,
   name,
   control,
   disabled = false,
   label = undefined,
   placeholder = '0.00',
   size = 'medium',
   autocomplete = 'off',
   dollarPrefix = true,
   thousandSeparator = true,
   decimalSeparator = '.',
   decimalScale = 2,
   variant = 'outlined',
   allowNegative = true,
   rules = undefined,
   required = false,
   fullWidth = false,
   isNumericString = false,
   endLabelIcon = undefined,
}) => {
  return (
    <Controller
      name={name}
      control={control}
      rules={!!rules ? { ...rules, required: required || rules?.required === true } : { required: required || rules?.required === true }}
      render={({ field }) => {
        const { ref, onChange, onBlur, ...rest } = field;
        return (
          <HHFormNumberField
            sx={sx}
            name={name}
            control={control}
            disabled={disabled}
            label={label}
            placeholder={placeholder}
            size={size}
            autocomplete={autocomplete}
            thousandSeparator={thousandSeparator}
            decimalSeparator={decimalSeparator}
            decimalScale={decimalScale}
            variant={variant}
            allowNegative={allowNegative}
            rules={rules}
            required={required}
            fullWidth={fullWidth}
            isNumericString={isNumericString}
            InputProps={{ startAdornment: dollarPrefix && <InputAdornment position="start">$</InputAdornment> }}
            endLabelIcon={endLabelIcon}
          />
        );
      }}
    />
  );
};

HHFormPriceField.propTypes = {
  sx: PropTypes.object,
  name: PropTypes.string.isRequired,
  control: PropTypes.object.isRequired,
  disabled: PropTypes.bool,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  size: PropTypes.oneOf(['small', 'medium']),
  autocomplete: PropTypes.string,
  dollarPrefix: PropTypes.bool,
  thousandSeparator: PropTypes.bool,
  decimalSeparator: PropTypes.oneOf(['.', ',', false, true]),
  variant: PropTypes.oneOf(['filled', 'outlined', 'standard']),
  allowNegative: PropTypes.bool,
  rules: PropTypes.object,
  required: PropTypes.bool,
  fullWidth: PropTypes.bool,
  isNumericString: PropTypes.bool,
  endLabelIcon: PropTypes.node,
  InputProps: PropTypes.object,
};

export default HHFormPriceField;

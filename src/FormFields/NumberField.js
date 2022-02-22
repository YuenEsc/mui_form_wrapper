import React from 'react';
import NumberFormat from 'react-number-format';
import { Controller } from 'react-hook-form';
import { TextField, InputAdornment, makeStyles, } from '@material-ui/core';
import PropTypes from 'prop-types';
import WithInputLabel from "./WithInputLabel";

const useStyles = makeStyles({
  root: {
    '& .MuiInputBase-input': {
      display: 'flex',
      padding: '8px 12px',
      borderRadius: 4,
      alignItems: 'center',
      backgroundColor: '#ffffff',
      border: '1px solid #dfe1e6',
      boxShadow: '0 1px 1px rgba(0,0,0,.08)',
    }
  }
});

const NumberField = ({
  name,
  control,
  label= undefined,
  placeholder = "0",
  size = "small",
  autocomplete = "off",
  thousandsSeparator = true,
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
  const classes = useStyles();
  return (
    <WithInputLabel label={label} required={required || rules?.required === true}>
      <Controller
        classes={classes.root}
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
              customInput={TextField}
              InputProps={InputProps}
              thousandsSeparator={thousandsSeparator}
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
  thousandsSeparator: PropTypes.bool,
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


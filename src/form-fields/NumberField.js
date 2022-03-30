import React from 'react';
import NumberFormat from 'react-number-format';
import { Controller } from 'react-hook-form';
import PropTypes from 'prop-types';
import WithInputLabel from './WithInputLabel';
import StyledTextField from './StyledTextField';

const NumberField = ({
  className = undefined,
  name,
  control,
  disabled = false,
  label = undefined,
  placeholder = '0',
  size = 'medium',
  autocomplete = 'off',
  thousandSeparator = true,
  decimalSeparator = '.',
  decimalScale = 0,
  variant = 'outlined',
  allowNegative = true,
  rules = undefined,
  required = false,
  fullWidth = false,
  isNumericString = false,
  InputProps = undefined,
  endLabelIcon = undefined,
}) => {
  return (
    <WithInputLabel endIcon={endLabelIcon} label={label} required={required || rules?.required === true}>
      <Controller
        name={name}
        control={control}
        rules={!!rules ? { ...rules, required: required || rules?.required === true } : { required: required || rules?.required === true }}
        render={({ field }) => {
          const { ref, onChange, onBlur, ...rest } = field;
          return (
            <NumberFormat
              onValueChange={values => {
                const { value } = values;
                onChange(value);
              }}
              className={className}
              disabled={disabled}
              placeholder={placeholder}
              size={size}
              inputRef={ref}
              autoComplete={autocomplete}
              customInput={StyledTextField}
              InputProps={{ ...InputProps, onBlur }}
              thousandSeparator={thousandSeparator}
              decimalSeparator={decimalSeparator}
              decimalScale={decimalScale}
              variant={variant}
              allowNegative={allowNegative}
              {...rest}
              fullWidth={fullWidth}
              isNumericString={isNumericString}
            />
          );
        }}
      />
    </WithInputLabel>
  );
};

NumberField.propTypes = {
  className: PropTypes.string,
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
  InputProps: PropTypes.object,
  endLabelIcon: PropTypes.node,
};

export default NumberField;

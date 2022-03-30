import React from 'react';
import { Controller } from 'react-hook-form';
import PropTypes from 'prop-types';
import WithInputLabel from './WithInputLabel';
import StyledTextField from './StyledTextField';

const TextField = ({
  className = undefined,
  name,
  control,
  disabled = false,
  label = undefined,
  placeholder = undefined,
  size = 'medium',
  autocomplete = 'off',
  variant = 'outlined',
  rules = undefined,
  required = false,
  fullWidth = false,
  InputProps = undefined,
  endLabelIcon = undefined,
  trimLeft = false,
  regexValidators = [],
  onKeyPress = () => {},
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
            <StyledTextField
              className={className}
              disabled={disabled}
              placeholder={placeholder}
              size={size}
              inputRef={ref}
              onKeyPress={onKeyPress}
              onChange={e => {
                if (typeof e.target.value === 'string') {
                  if (trimLeft) {
                    e.target.value = e.target.value.trimLeft();
                  }
                  if (regexValidators.length > 0) {
                    const results = regexValidators.map(regex => regex.test(e.target.value));
                    const isValid = results.reduce((a, b) => a && b, true);
                    if (!isValid) return;
                  }
                }
                onChange(e);
              }}
              autoComplete={autocomplete}
              InputProps={{ ...InputProps, onBlur }}
              variant={variant}
              onBlur={onBlur}
              {...rest}
              fullWidth={fullWidth}
            />
          );
        }}
      />
    </WithInputLabel>
  );
};

TextField.propTypes = {
  className: PropTypes.string,
  name: PropTypes.string.isRequired,
  control: PropTypes.object.isRequired,
  disabled: PropTypes.bool,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  size: PropTypes.oneOf(['small', 'medium']),
  autocomplete: PropTypes.string,
  variant: PropTypes.oneOf(['filled', 'outlined', 'standard']),
  rules: PropTypes.object,
  required: PropTypes.bool,
  fullWidth: PropTypes.bool,
  InputProps: PropTypes.object,
  endLabelIcon: PropTypes.node,
  trimLeft: PropTypes.bool,
  regexValidators: PropTypes.array,
  onKeyPress: PropTypes.func,
};

export default TextField;

import React from 'react';
import { Controller } from 'react-hook-form';
import { MenuItem, makeStyles } from '@material-ui/core';
import PropTypes from 'prop-types';
import WithInputLabel from './WithInputLabel';
import StyledTextField from './StyledTextField';

const useStyles = makeStyles(theme => ({
  root: {
    '& .MuiSelect-select:focus': {
      backgroundColor: 'rgba(0,0,0,0)',
    },
  },
}));

const SelectField = ({
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
  options,
  getOptionValue = option => option?.value,
  getOptionLabel = option => option?.label,
}) => {
  const classes = useStyles();
  return (
    <WithInputLabel label={label} required={required || rules?.required === true}>
      <Controller
        name={name}
        control={control}
        rules={!!rules ? { ...rules, required: required || rules?.required === true } : { required: required || rules?.required === true }}
        render={({ field }) => (
          <StyledTextField
            className={className}
            disabled={disabled}
            placeholder={placeholder}
            size={size}
            autoComplete={autocomplete}
            InputProps={InputProps}
            variant={variant}
            {...field}
            fullWidth={fullWidth}
            select
            SelectProps={{
              className: classes.root,
            }}
          >
            {options.map(option => (
              <MenuItem key={option.key} value={getOptionValue(option)}>
                {getOptionLabel(option)}
              </MenuItem>
            ))}
          </StyledTextField>
        )}
      />
    </WithInputLabel>
  );
};

SelectField.propTypes = {
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
  options: PropTypes.array.isRequired,
  getOptionValue: PropTypes.func,
  getOptionLabel: PropTypes.func,
};

export default SelectField;

import React from 'react'
import PropTypes from 'prop-types'
import { Controller } from 'react-hook-form'
import { MenuItem } from '@mui/material'
import HHTextField from './HHTextField'

const HHFormSelectField = ({
  sx = undefined,
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
  return (
    <Controller
      name={name}
      control={control}
      rules={rules ? { ...rules, required: required || rules?.required === true } : { required: required || rules?.required === true }}
      render={({ field }) => (
        <HHTextField
          label={label}
          required={required || rules?.required === true}
          sx={sx}
          disabled={disabled}
          placeholder={placeholder}
          size={size}
          autoComplete={autocomplete}
          InputProps={InputProps}
          variant={variant}
          {...field}
          fullWidth={fullWidth}
          select
        >
          {options.map(option => (
            <MenuItem key={option.key} value={getOptionValue(option)}>
              {getOptionLabel(option)}
            </MenuItem>
          ))}
        </HHTextField>
      )}
    />
  )
}

HHFormSelectField.propTypes = {
  sx: PropTypes.object,
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
}

export default HHFormSelectField

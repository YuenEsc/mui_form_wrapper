import React from 'react'
import {Checkbox, Chip, MenuItem, styled, Typography} from '@mui/material'
import PropTypes from 'prop-types'
import { Close, KeyboardArrowDownRounded } from '@mui/icons-material'
import HHAutocompleteField from './HHAutocompleteField'
import Constants from "../Constants";
import MultiSelectItem from "./MultiSelectItem";

const { MEDIA_SERVER } = Constants;

const StyledImage = styled('img')(()=>({
  width: 16,
  height: 16
}))

const HHFormMultiSelectAutocompleteField = ({
  disabled = false,
  label = undefined,
  placeholder = '',
  size = 'medium',
  variant = 'outlined',
  required = false,
  fullWidth = false,
  options,
  noOptionsText,
  disableCloseOnSelect = true,
  openOnFocus = false,
  loading = false,
  getOptionLabel = x => x,
  getOptionSelected = (option, value) => option === value,
  debug = false,
  ...rest
}) => {
  return (
    <HHAutocompleteField
      debug={debug}
      getOptionSelected={getOptionSelected}
      disabled={disabled}
      required={required}
      label={label}
      placeholder={placeholder}
      size={size}
      variant={variant}
      fullWidth={fullWidth}
      options={options}
      popupIcon={<KeyboardArrowDownRounded />}
      noOptionsText={noOptionsText}
      multiple
      {...rest}
      disableCloseOnSelect={disableCloseOnSelect}
      renderTags={(value, getTagProps) => (
        <>
          {value?.length >= 1 && (
            <Chip
              sx={{ borderRadius: 1 }}
              size="small"
              label={getOptionLabel(value[0])}
              {...getTagProps(value[0])}
              deleteIcon={<Close />}
            />
          )}
          {value?.length > 1 && <Chip sx={{ borderRadius: 1 }} size="small" label={`+${value.length - 1}`} deleteIcon={<Close />} />}
        </>
      )}
      getOptionLabel={getOptionLabel}
      openOnFocus={openOnFocus}
      loading={loading}
      renderOption={({ className, ...rest }, option, { selected }) => {
        return (
          <MultiSelectItem
            key={option?.key || `option-${getOptionLabel(label)}`}
            {...rest}
            checked={selected}
          >
            {getOptionLabel(option)}
          </MultiSelectItem>
        )
      }}
    />
  )
}

HHFormMultiSelectAutocompleteField.propTypes = {
  disabled: PropTypes.bool,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  size: PropTypes.oneOf(['small', 'medium']),
  variant: PropTypes.oneOf(['filled', 'outlined', 'standard']),
  required: PropTypes.bool,
  fullWidth: PropTypes.bool,
  options: PropTypes.array.isRequired,
  noOptionsText: PropTypes.node,
  disableCloseOnSelect: PropTypes.bool,
  getOptionLabel: PropTypes.func,
  openOnFocus: PropTypes.bool,
  loading: PropTypes.bool,
  getOptionSelected: PropTypes.func,
  onChangeMiddleware: PropTypes.func,
  debug: PropTypes.bool,
}

export default HHFormMultiSelectAutocompleteField
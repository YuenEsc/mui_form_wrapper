import React from 'react'
import {Checkbox, Chip, MenuItem, styled} from '@mui/material'
import PropTypes from 'prop-types'
import { Close, KeyboardArrowDownRounded } from '@mui/icons-material'
import HHFormAutocompleteField from './HHFormAutocompleteField'
import Constants from "../Constants";
import MultiSelectItem from "./MultiSelectItem";

const { MEDIA_SERVER } = Constants;

const StyledImage = styled('img')(()=>({
  width: 16,
  height: 16
}))

const HHFormMultiSelectAutocompleteField = ({
  name,
  control,
  disabled = false,
  label = undefined,
  placeholder = '',
  size = 'medium',
  variant = 'outlined',
  rules = undefined,
  required = false,
  fullWidth = false,
  options,
  noOptionsText,
  disableCloseOnSelect = true,
  openOnFocus = false,
  loading = false,
  getOptionLabel = x => x,
  getOptionSelected = (option, value) => option === value,
  onChangeMiddleware = (onChange, item) => {
    onChange(item)
  },
  debug = false,
}) => {
  return (
    <HHFormAutocompleteField
      debug={debug}
      getOptionSelected={getOptionSelected}
      name={name}
      control={control}
      disabled={disabled}
      label={label}
      placeholder={placeholder}
      size={size}
      variant={variant}
      rules={rules}
      required={required}
      fullWidth={fullWidth}
      options={options}
      popupIcon={<KeyboardArrowDownRounded />}
      noOptionsText={noOptionsText}
      onChangeMiddleware={onChangeMiddleware}
      multiple
      disableCloseOnSelect={disableCloseOnSelect}
      renderOption={({ className, ...rest }, option, { selected }) => {
        return (
          <MultiSelectItem
            key={`${name}-option-${getOptionLabel(label)}`}
            {...rest}
            checked={selected}
          >
            {getOptionLabel(option)}
          </MultiSelectItem>
        )
      }}
      getOptionLabel={getOptionLabel}
      openOnFocus={openOnFocus}
      loading={loading}
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
    />
  )
}

HHFormMultiSelectAutocompleteField.propTypes = {
  name: PropTypes.string.isRequired,
  control: PropTypes.object.isRequired,
  disabled: PropTypes.bool,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  size: PropTypes.oneOf(['small', 'medium']),
  variant: PropTypes.oneOf(['filled', 'outlined', 'standard']),
  rules: PropTypes.object,
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
  debug: PropTypes.func,
}

export default HHFormMultiSelectAutocompleteField
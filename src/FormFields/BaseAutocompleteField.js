import React from 'react';
import { Autocomplete } from '@material-ui/lab';
import { Controller } from 'react-hook-form';
import PropTypes from 'prop-types';
import WithInputLabel from "./WithInputLabel";
import StyledTextField from "./StyledTextField";

const BaseAutocompleteField = ({
   className = undefined,
   name,
   control,
   label= undefined,
   placeholder = undefined,
   size = "small",
   variant = "outlined",
   rules = undefined,
   required = false,
   fullWidth= false,
   InputProps= undefined,
   options,
   noOptionsText,
   multiple = false,
   disableCloseOnSelect = false,
   getOptionLabel = (x) => x,
   renderOption = undefined,
   renderTags = undefined,
   openOnFocus = undefined,
   loading = false,
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
          ({field: { onChange, value }}) =>
            <Autocomplete
              className={className}
              size={size}
              fullWidth={fullWidth}
              noOptionsText={noOptionsText}
              multiple={multiple}
              loading={loading}
              disableCloseOnSelect={disableCloseOnSelect}
              options={options}
              getOptionLabel={getOptionLabel}
              renderOption={renderOption}
              renderTags={renderTags}
              openOnFocus={openOnFocus}
              onChange={(event,item)=>onChange(item)}
              renderInput={(params)=>
                (<StyledTextField
                  placeholder={Array.isArray(value) && value.length === 0 && placeholder}
                  InputProps={InputProps}
                  variant={variant}
                  {...params}
              />)}
            />
        }
      />
    </WithInputLabel>
  );
};

BaseAutocompleteField.propTypes = {
  className: PropTypes.string,
  name: PropTypes.string.isRequired,
  control: PropTypes.object.isRequired,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  size: PropTypes.oneOf(['small','medium']),
  variant: PropTypes.oneOf(["filled","outlined","standard"]),
  rules: PropTypes.object,
  required: PropTypes.bool,
  fullWidth: PropTypes.bool,
  InputProps: PropTypes.object,
  options: PropTypes.array.isRequired,
  noOptionsText: PropTypes.node,
  multiple: PropTypes.bool,
  disableCloseOnSelect: PropTypes.bool,
  getOptionLabel: PropTypes.func,
  renderOption: PropTypes.func,
  renderTags: PropTypes.func,
  openOnFocus: PropTypes.bool,
  loading: PropTypes.bool,
}

export default BaseAutocompleteField;
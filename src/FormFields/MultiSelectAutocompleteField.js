import React from 'react';
import { Checkbox, Chip, makeStyles } from '@material-ui/core';
import PropTypes from 'prop-types';
import BaseAutocompleteField from "./BaseAutocompleteField";
import CloseIcon from '@material-ui/icons/Close';

const useStyles = makeStyles({
  chip: {
    borderRadius: 3,
  },
  chipDeleteIcon: {
    color: '#042040',
    '&:hover':{
      color: '#042040'
    }
  }
})

const MultiSelectAutocompleteField = ({
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
   disableCloseOnSelect = true,
   openOnFocus = undefined,
   loading = false,
  getOptionLabel = (x) => x,
 }) => {
  const classes = useStyles();
  return (
    <BaseAutocompleteField
      className={className}
      name={name}
      control={control}
      label={label}
      placeholder={placeholder}
      size={size}
      variant={variant}
      rules={rules}
      required={required}
      fullWidth={fullWidth}
      InputProps={InputProps}
      options={options}
      noOptionsText={noOptionsText}
      multiple
      disableCloseOnSelect={disableCloseOnSelect}
      renderOption={(option, { selected }) => {
        return(<>
          <Checkbox checked={selected}/>
          {option.name}
        </>)
      }}
      getOptionLabel={getOptionLabel}
      openOnFocus={openOnFocus}
      loading={loading}
      renderTags={(value, getTagProps)=>(
        <>
          {value?.length >= 1 &&
            <Chip
              classes={{root: classes.chip}}
              size="small"
              label={value[0].name}
              {...getTagProps(value[0])}
              deleteIcon={<CloseIcon classes={{root: classes.chipDeleteIcon}} />}
            />
          }
          {value?.length > 1 &&
            <Chip
              classes={{root: classes.chip}}
              size="small"
              label={`+${value.length - 1}`}
              deleteIcon={<CloseIcon classes={{root: classes.chipDeleteIcon}} />}
            />}
        </>)}
    />
  );
};

MultiSelectAutocompleteField.propTypes = {
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
  disableCloseOnSelect: PropTypes.bool,
  getOptionLabel: PropTypes.func,
  openOnFocus: PropTypes.bool,
  loading: PropTypes.bool,
}

export default MultiSelectAutocompleteField;
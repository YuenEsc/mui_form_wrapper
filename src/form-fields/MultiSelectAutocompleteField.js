import React from 'react';
import { Checkbox, Chip, makeStyles } from '@material-ui/core';
import PropTypes from 'prop-types';
import CloseIcon from '@material-ui/icons/Close';
import BaseAutocompleteField from './BaseAutocompleteField';

const useStyles = makeStyles((theme)=>({
  chip: {
    borderRadius: 3,
  },
  chipDeleteIcon: {
    color: theme.palette.text.primary,
    '&:hover': {
      color: theme.palette.text.primary,
    },
  },
  listbox: {
    padding: 0,
    '&::-webkit-scrollbar': {
      width: 0,
      background: 'transparent',
    },
  },
  option: {
    ...theme.typography.body1,
    paddingLeft: 5,
    paddingRight: 5,
    paddingBottom: 5,
    zIndex: 9,
    '&:first-child': {
      paddingTop: 5,
    },
    '&:not(:first-child)': {
      paddingTop: 0,
    },
  },
  tag: {
    margin: '-16px 4px -5px -2px',
    [theme.breakpoints.down('lg')]: {
      margin: '-5px 4px -5px -2px',
    },
  },
}));

const MultiSelectAutocompleteField = ({
  className = undefined,
  name,
  control,
  disabled = false,
  label = undefined,
  placeholder = undefined,
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
    onChange(item);
  },
}) => {
  const classes = useStyles();
  return (
    <BaseAutocompleteField
      className={className}
      classes={{
        listbox: classes.listbox,
        option: classes.option,
        tag: classes.tag,
      }}
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
      noOptionsText={noOptionsText}
      onChangeMiddleware={onChangeMiddleware}
      multiple
      disableCloseOnSelect={disableCloseOnSelect}
      renderOption={(option, { selected }) => {
        return (
          <>
            <Checkbox
              color="primary"
              checked={selected}
            />
            {getOptionLabel(option)}
          </>
        );
      }}
      getOptionLabel={getOptionLabel}
      openOnFocus={openOnFocus}
      loading={loading}
      renderTags={(value, getTagProps) => (
        <>
          {value?.length >= 1 && (
            <Chip
              classes={{ root: classes.chip }}
              size="small"
              label={getOptionLabel(value[0])}
              {...getTagProps(value[0])}
              deleteIcon={<CloseIcon classes={{ root: classes.chipDeleteIcon }} />}
            />
          )}
          {value?.length > 1 && (
            <Chip
              classes={{ root: classes.chip }}
              size="small"
              label={`+${value.length - 1}`}
              deleteIcon={<CloseIcon classes={{ root: classes.chipDeleteIcon }} />}
            />
          )}
        </>
      )}
    />
  );
};

MultiSelectAutocompleteField.propTypes = {
  className: PropTypes.string,
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
};

export default MultiSelectAutocompleteField;

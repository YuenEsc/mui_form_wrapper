import React from 'react';
import { Autocomplete } from '@material-ui/lab';
import { Controller } from 'react-hook-form';
import PropTypes from 'prop-types';
import WithInputLabel from './WithInputLabel';
import StyledTextField from './StyledTextField';

const BaseAutocompleteField = ({
  className = undefined,
  classes = undefined,
  name,
  control,
  disabled = false,
  label = undefined,
  placeholder = undefined,
  size = 'small',
  variant = 'outlined',
  rules = undefined,
  required = false,
  fullWidth = false,
  options,
  noOptionsText,
  multiple = false,
  disableCloseOnSelect = false,
  getOptionLabel = x => x,
  getOptionSelected = (option, value) => option === value,
  renderOption = undefined,
  renderTags = undefined,
  openOnFocus = false,
  loading = false,
  onChangeMiddleware = (onChange, item) => {
    onChange(item);
  },
}) => {
  const [open, setOpen] = React.useState(false);
  return (
    <WithInputLabel label={label} required={required || rules?.required === true}>
      <Controller
        name={name}
        control={control}
        rules={rules ? { ...rules, required: required || rules?.required === true } : { required: required || rules?.required === true }}
        render={props => {
          const {
            field: { onChange, onBlur, value, ref },
          } = props;
          return (
            <Autocomplete
              open={open}
              onBlur={() => {
                setOpen(false);
                onBlur();
              }}
              ref={ref}
              value={value}
              getOptionSelected={getOptionSelected}
              className={className}
              disabled={disabled}
              classes={classes}
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
              onChange={(event, item) => {
                onChangeMiddleware(onChange, item);
              }}
              renderInput={params => {
                return (
                  <StyledTextField
                    onClick={() => {
                      if (!disabled) {
                        setOpen(true);
                      }
                    }}
                    ref={ref}
                    placeholder={Array.isArray(value) && value.length === 0 && placeholder}
                    variant={variant}
                    {...params}
                  />
                );
              }}
            />
          );
        }}
      />
    </WithInputLabel>
  );
};

BaseAutocompleteField.propTypes = {
  className: PropTypes.string,
  classes: PropTypes.object,
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
  multiple: PropTypes.bool,
  disableCloseOnSelect: PropTypes.bool,
  getOptionLabel: PropTypes.func,
  getOptionSelected: PropTypes.func,
  renderOption: PropTypes.func,
  renderTags: PropTypes.func,
  openOnFocus: PropTypes.bool,
  loading: PropTypes.bool,
  onChangeMiddleware: PropTypes.func,
};

export default BaseAutocompleteField;

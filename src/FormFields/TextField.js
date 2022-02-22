import React from 'react';
import { Controller } from 'react-hook-form';
import { TextField as MuiTextField, makeStyles, } from '@material-ui/core';
import PropTypes from 'prop-types';
import WithInputLabel from "./WithInputLabel";

const useStyles = makeStyles({
  root: {
    '& .MuiInputBase-input': {
      display: 'flex',
      padding: '8px 12px',
      borderRadius: 4,
      alignItems: 'center',
      backgroundColor: '#ffffff',
      border: '1px solid #dfe1e6',
      boxShadow: '0 1px 1px rgba(0,0,0,.08)',
    }
  }
});

const TextField = ({
 name,
 control,
 label= undefined,
 placeholder = undefined,
 size = "small",
 autocomplete = "off",
 variant = "outlined",
 rules = undefined,
 required = false,
 fullWidth= false,
 InputProps= undefined,
}) => {
  const classes = useStyles();
  return (
    <WithInputLabel label={label} required={required || rules?.required === true}>
      <Controller
        classes={classes.root}
        name={name}
        control={control}
        rules={!!rules
          ?
          {...rules, required: required || rules?.required === true}
          :
          {required: required || rules?.required === true}}
        render={
          ({field}) =>
            <MuiTextField
              placeholder={placeholder}
              size={size}
              autoComplete={autocomplete}
              InputProps={InputProps}
              variant={variant}
              {...field}
              fullWidth={fullWidth}
            />
        }
      />
    </WithInputLabel>
  );
};

TextField.propTypes = {
  name: PropTypes.string.isRequired,
  control: PropTypes.object.isRequired,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  size: PropTypes.oneOf(['small','medium']),
  autocomplete: PropTypes.string,
  variant: PropTypes.oneOf(["filled","outlined","standard"]),
  rules: PropTypes.object,
  required: PropTypes.bool,
  fullWidth: PropTypes.bool,
  InputProps: PropTypes.object,
}

export default TextField;


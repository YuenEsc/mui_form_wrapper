import React from 'react';
import PropTypes from 'prop-types';
import { InputLabel, makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    textAlign: 'left',
    fontFamily: 'Inter',
    fontStyle: 'normal',
    fontWeight: 500,
    fontSize: 12,
    lineHeight: '24px',
    color: '#7A869A',
    '& .MuiFormLabel-asterisk': {
      color: '#aa2b2b'
    }
  }
})

const WithInputLabel = ({children, label = undefined, required = false}) => {
  const classes = useStyles();
  return (<>
    {!!label
      ?
      <>
        <InputLabel
          className={classes.root}
          required={required}
          shrink={false}
        >
          {label}
        </InputLabel>
        {children}
      </>
      :
      children}
  </>)
};

WithInputLabel.propTypes = {
  children: PropTypes.node,
  label: PropTypes.string,
  required: PropTypes.bool,
}

export default WithInputLabel;


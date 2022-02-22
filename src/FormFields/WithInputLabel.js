import React from 'react';
import PropTypes from 'prop-types';
import { InputLabel, makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    textAlign: 'left',
    fontStyle: 'normal',
    fontWeight: 500,
    fontSize: 12,
    lineHeight: '24px',
    color: '#6b778c',
  }
})

const WithInputLabel = ({children, label = undefined, required = false}) => {
  const classes = useStyles();
  return (<>
    {!!label
      ?
      <>
        <InputLabel
          classes={{root: classes.root}}
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


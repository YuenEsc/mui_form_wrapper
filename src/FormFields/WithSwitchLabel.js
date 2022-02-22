import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles, Box, Typography } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    fontStyle: 'normal',
    fontWeight: 500,
    fontSize: 13,
    lineHeight: '24px',
    color: '#042040',
    marginLeft: 8,
    whiteSpace: 'nowrap',
  }
})

const WithSwitchLabel = ({children, label = undefined}) => {
  const classes = useStyles();
  return (<>
    {!!label
      ?
      <Box display="box">
        <Box display="flex" flexDirection="row" alignItems="center">
          {children}
          <Typography
            className={classes.root}
          >
            {label}
          </Typography>
        </Box>
      </Box>
      :
      children}
  </>)
};

WithSwitchLabel.propTypes = {
  children: PropTypes.node,
  label: PropTypes.string,
}

export default WithSwitchLabel;


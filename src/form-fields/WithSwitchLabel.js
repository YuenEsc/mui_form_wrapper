import React from 'react';
import PropTypes from 'prop-types';
import { Box, Typography } from '@mui/material';

const WithSwitchLabel = ({children, label = undefined}) => {
  return (<>
    {!!label
      ?
      <Box display="box">
        <Box display="flex" flexDirection="row" alignItems="center">
          {children}
          <Typography
            variant="body1"
            noWrap
            sx={{ marginLeft: 1 }}
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
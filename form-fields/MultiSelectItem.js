import React from 'react';
import {Checkbox, MenuItem, styled} from "@mui/material";
import Constants from "../Constants";
import PropTypes from "prop-types";

const { MEDIA_SERVER } = Constants;

const StyledImage = styled('img')(()=>({
  width: 16,
  height: 16
}))

const MultiSelectItem = ({selected, children, ...rest}) => {
  return (
    <MenuItem
      disableGutters
      sx={{ paddingX: 0.5, paddingY: 0 }}
      {...rest}
    >
      <Checkbox
        sx={{
          height: '16px',
          width: '16px',
          margin: 1,
          padding: 0,
        }}
        icon={<StyledImage src={`${MEDIA_SERVER}CheckboxOutline.svg`} alt="" />}
        checkedIcon={<StyledImage src={`${MEDIA_SERVER}CheckboxChecked.svg`} alt="" />}
        checked={selected}
      />
      {children}
    </MenuItem>
  );
};

MultiSelectItem.propTypes = {
  selected: PropTypes.bool,
  children: PropTypes.node,
}

export default MultiSelectItem;

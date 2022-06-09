import React from 'react';
import {KeyboardArrowDownRounded} from "@mui/icons-material";
import {styled} from "@mui/material";

const StyledArrowDown = styled(KeyboardArrowDownRounded)(({theme})=>({
  '& .Mui-focused': {
    color: theme.palette.primary.main
  },
  '& .Mui-error' : {
    color: theme.palette.error.main
  },
  '& .Mui-disabled': {
    color: theme.palette.text.secondary,
  }
}))

export default StyledArrowDown;

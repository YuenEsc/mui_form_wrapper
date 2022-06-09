import {Paper} from "@mui/material";
import React from "react";

const PopupPaper = (props) => {
  return <Paper variant="outlined" sx={{ marginTop: 1, boxShadow: '0px 4px 6px -1px rgba(0, 0, 0, 0.1), 0px 2px 4px -1px rgba(0, 0, 0, 0.06)' }} {...props} />;
};

export default PopupPaper;
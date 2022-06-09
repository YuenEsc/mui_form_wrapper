import React from 'react';
import StyledTextField from "./StyledTextField";
import WithInputLabel from "./WithInputLabel";
import StyledAutocomplete from "./StyledAutocomplete";
import {KeyboardArrowDownRounded} from "@mui/icons-material";

const HHAutocompleteField = ({ label, ...rest }) => {
  return (
    <WithInputLabel label={label}>
      <StyledAutocomplete
        {...rest}
        popupIcon={<KeyboardArrowDownRounded/>}
        renderInput={params => {
          return (
            <StyledTextField
              size="small"
              {...params}
            />
          );
        }}
      />
    </WithInputLabel>
  );
};

HHAutocompleteField.propTypes = {

};

export default HHAutocompleteField;

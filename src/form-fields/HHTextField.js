import React from 'react'
import PropTypes from 'prop-types'
import WithInputLabel from './WithInputLabel'
import StyledTextField from './StyledTextField'
import {KeyboardArrowDownRounded} from "@mui/icons-material";

const HHTextField = ({ label, disabled, required, endIcon, variant = 'outlined', error = '', showErrorMessage = false, SelectProps, ...rest }) => {
  return (
    <WithInputLabel label={label} required={required} endIcon={endIcon} error={error} disabled={disabled}>
      <StyledTextField disabled={disabled} variant={variant} {...rest} error={Boolean(error)} helperText={showErrorMessage && error} SelectProps={{...SelectProps, IconComponent: (props)=><KeyboardArrowDownRounded {...props}/>}} />
    </WithInputLabel>
  )
}

HHTextField.propTypes = {
  label: PropTypes.string,
  required: PropTypes.bool,
  endIcon: PropTypes.node,
  variant: PropTypes.oneOf(['filled', 'outlined', 'standard']),
  error: PropTypes.string,
  showErrorMessage: PropTypes.bool,
}

export default HHTextField

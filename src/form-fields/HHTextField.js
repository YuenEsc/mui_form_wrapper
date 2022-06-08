import React from 'react'
import PropTypes from 'prop-types'
import WithInputLabel from './WithInputLabel'
import StyledTextField from './StyledTextField'

const HHTextField = ({ label, required, endIcon, variant = 'outlined', ...rest }) => {
  return (
    <WithInputLabel label={label} required={required} endIcon={endIcon}>
      <StyledTextField variant={variant} {...rest} />
    </WithInputLabel>
  )
}

HHTextField.propTypes = {
  label: PropTypes.string,
  required: PropTypes.bool,
  endIcon: PropTypes.node,
  variant: PropTypes.oneOf(['filled', 'outlined', 'standard']),
}

export default HHTextField

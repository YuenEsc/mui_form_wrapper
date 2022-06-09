import React from 'react'
import PropTypes from 'prop-types'
import { KeyboardArrowDownRounded } from '@mui/icons-material'
import WithInputLabel from './WithInputLabel'
import StyledTextField from './StyledTextField'

const HHTextField = ({
  label,
  disabled,
  required,
  endIcon,
  variant = 'outlined',
  error = '',
  showErrorMessage = false,
  SelectProps,
  ...rest
}) => {
  return (
    <WithInputLabel label={label} required={required} endIcon={endIcon} error={error} disabled={disabled}>
      <StyledTextField
        disabled={disabled}
        variant={variant}
        {...rest}
        error={Boolean(error)}
        helperText={showErrorMessage && error}
        SelectProps={{
          ...SelectProps,
          IconComponent: props => <KeyboardArrowDownRounded {...props} />,
          MenuProps: {
              elevation: 0,
              PaperProps: {
                sx: {
                  boxShadow: '0px 4px 6px -1px rgba(0, 0, 0, 0.1), 0px 2px 4px -1px rgba(0, 0, 0, 0.06)'
                },
                variant: 'outlined',
              },
            },
          }}
      />
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
  disabled: PropTypes.bool,
  SelectProps: PropTypes.object,
}

export default HHTextField

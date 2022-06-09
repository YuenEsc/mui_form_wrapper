import React from 'react'
import NumberFormat from 'react-number-format'
import { InputAdornment } from '@mui/material'
import PropTypes from 'prop-types'
import HHTextField from './HHTextField'

const HHNumberField = ({ dollarPrefix = false, ...rest }) => {
  return (
    <NumberFormat
      customInput={HHTextField}
      {...rest}
      InputProps={{ ...rest?.InputProps, startAdornment: dollarPrefix && <InputAdornment position="start">$</InputAdornment> }}
    />
  )
}

HHNumberField.propTypes = {
  dollarPrefix: PropTypes.bool,
}

export default HHNumberField

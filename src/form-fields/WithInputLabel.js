import React from 'react'
import { InputLabel, styled } from '@mui/material'
import PropTypes from 'prop-types'

const HHInputLabel = styled(InputLabel)(({ theme }) => ({
  textAlign: 'left',
  ...theme.typography.subtitle2,
  lineHeight: '24px',
  color: theme.palette.text.secondary,
  '& .MuiFormLabel-asterisk': {
    color: '#aa2b2b',
  },
}))

const WithInputLabel = ({ children, label = undefined, required = false, endIcon }) => {
  return (
    <>
      {label ? (
        <>
          <HHInputLabel required={required} shrink={false}>
            {label}
            {endIcon}
          </HHInputLabel>
          {children}
        </>
      ) : (
        children
      )}
    </>
  )
}

WithInputLabel.propTypes = {
  children: PropTypes.node,
  label: PropTypes.string,
  required: PropTypes.bool,
  endIcon: PropTypes.node,
}

export default WithInputLabel
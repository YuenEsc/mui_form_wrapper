import React from 'react'
import { KeyboardArrowDownRounded } from '@mui/icons-material'
import PropTypes from 'prop-types'
import StyledTextField from './StyledTextField'
import WithInputLabel from './WithInputLabel'
import StyledAutocomplete from './StyledAutocomplete'

const HHAutocompleteField = ({ label, debug = false, ...rest }) => {
  return (
    <WithInputLabel label={label}>
      <StyledAutocomplete
        {...rest}
        debug={debug}
        popupIcon={<KeyboardArrowDownRounded />}
        renderInput={params => {
          return <StyledTextField size="small" {...params} />
        }}
      />
    </WithInputLabel>
  )
}

HHAutocompleteField.propTypes = {
  label: PropTypes.string,
  debug: PropTypes.bool,
}

export default HHAutocompleteField

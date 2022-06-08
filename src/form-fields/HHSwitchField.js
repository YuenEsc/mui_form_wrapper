import React from 'react'
import PropTypes from 'prop-types'
import Switch from 'react-switch'
import WithSwitchLabel from './WithSwitchLabel'

const HHSwitchField = ({ label, ...rest }) => {
  return (
    <WithSwitchLabel label={label}>
      <Switch offColor="#7A869A" onColor="#00875A" width={32} height={16} handleDiameter={10} {...rest} />
    </WithSwitchLabel>
  )
}

HHSwitchField.propTypes = {
  label: PropTypes.string,
}

export default HHSwitchField

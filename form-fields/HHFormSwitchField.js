import React from 'react'
import PropTypes from 'prop-types'
import { Controller } from 'react-hook-form'
import Switch from 'react-switch'
import WithSwitchLabel from './WithSwitchLabel'

const HHFormSwitchField = ({ name, rules, label, control }) => {
  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      render={({ field }) => {
        const { onBlur, onChange, ...rest } = field
        return (
          <WithSwitchLabel label={label}>
            <Switch
              offColor="#7A869A"
              onColor="#00875A"
              width={32}
              height={16}
              handleDiameter={10}
              checked={field?.value || false}
              onChange={value => {
                onChange(value)
                onBlur()
              }}
              {...rest}
            />
          </WithSwitchLabel>
        )
      }}
    />
  )
}

HHFormSwitchField.propTypes = {
  control: PropTypes.object.isRequired,
  label: PropTypes.string,
  name: PropTypes.string,
  rules: PropTypes.object,
}

export default HHFormSwitchField

import React from 'react'
import PropTypes from 'prop-types'
import { observer } from 'mobx-react'
import { Checkbox } from 'react-bootstrap'

const BStrapBoolInput = ({attr, label, record, onChange, valuemapping}) => {

  const checked = Boolean(record.get(attr))

  const handleChange = (event) => {
    const newVal = ! checked
    onChange(attr, valuemapping ? valuemapping[newVal] : newVal)
  }

  return (
    <Checkbox checked={checked} onChange={handleChange}>{label}</Checkbox>
  )
}

BStrapBoolInput.propTypes = {
  attr: PropTypes.string.isRequired,
  record: PropTypes.object.isRequired,
  label: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  valuemapping: PropTypes.object
}

export default observer(BStrapBoolInput)

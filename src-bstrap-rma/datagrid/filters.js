import React from 'react'
import { observer } from 'mobx-react'
import { DropdownButton, MenuItem, Button, InputGroup } from 'react-bootstrap'
import { FilterControlBase, FilterDropdownBase } from 'react-mobx-admin'

// dropdown with available filters
@observer
class Dropdown extends FilterDropdownBase {

  renderItem(name, text, icon, onClick) {
    return (
      <MenuItem key={name} eventKey={name} onClick={onClick}>{text}</MenuItem>
    )
  }

  renderMenu(state, filters) {
    return (
      <DropdownButton title="filters" pullRight id="bg-nested-dropdown">
        {this.createItems(state, filters)}
      </DropdownButton>
    )
  }

}

const styles = {
  chip: {
    margin: 4,
  },
  wrapper: {
    display: 'flex',
    flexWrap: 'wrap',
  }
}

// controls to set filter values
@observer
class Controls extends FilterControlBase {

  renderControl(filter, name, state, onHide, onUpdateValue) {

    return (
      <div className={`form-field form-group filter-${name}`} style={styles.chip} key={name}>
        <InputGroup>
          <Button onClick={onHide} style={{float: 'left'}}>x</Button>
          <div style={{float: 'right'}}>
            <filter.component record={state.cv.filters} attr={name} onChange={onUpdateValue} />
          </div>
        </InputGroup>
      </div>
    )
  }

  renderControls(controls, apply) {
    return (
      <div style={styles.wrapper}>
        {controls}
      </div>
    )
  }

}

const Apply = observer(({ apply, label, state }) => {
  const show = state.cv.filters.size > 0 && ! state.filtersApplied
  return show && (<Button onClick={apply}>{label}</Button>)
})

export default { Dropdown, Controls, Apply }

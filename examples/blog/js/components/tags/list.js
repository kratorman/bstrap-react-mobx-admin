import React from 'react'
import { DropdownButton, MenuItem } from 'react-bootstrap'
import { TextField, BoolField, ListView } from 'bstrap-react-mobx-admin'

const TagListView = ({store}) => {

  const batchActions = () => {
    function _batchDelete() {
      if(confirm(`Are you sure you want to delete selected tags?`)) {
        store.deleteSelected()
      }
    }
    return (
      <DropdownButton title="actions" id="bg-nested-dropdown">
        <MenuItem eventKey="1" onClick={() => _batchDelete()}>delete</MenuItem>
      </DropdownButton>
    )
  }

  const fields = [
    (attr, row) => (<TextField attr={attr} record={row} />),
    (attr, row) => {
      return <TextField attr={attr} record={row} onClick={() => store.detailClicked(row)} />
    },
    (attr, row) => (<BoolField attr={attr} record={row} />)
  ]

  return (
    <ListView store={store} fields={fields}
      batchActions={batchActions} onAddClicked={store.addClicked.bind(store)} />

  )
}

export default TagListView

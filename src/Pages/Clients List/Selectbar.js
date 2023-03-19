import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function Selectbar() {
  const [column, setColumn] = React.useState('');

  const handleChange = (event) => {
    setColumn(event.target.value);
  };
  const SelectBoxStyles={
    width: '120px',
    height: '40px',
    backgroundColor: '#FFFFFF',
    border: '1px solid #E6E6E6',
    borderRadius: '8px',
    fontSize:'14px'
  }

  return (
    <FormControl sx={{ m: 0.5, minWidth: 100 }} size="small">
      <InputLabel id="demo-select-small">Column</InputLabel>
      <Select
      style={SelectBoxStyles}
        labelId="demo-select-small"
        id="demo-select-small"
        value={column}
        label="Column"
        onChange={handleChange}
      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={1-5}>1-5</MenuItem>
        <MenuItem value={6-11}>6-11</MenuItem>
        <MenuItem value={12-16}>12-16</MenuItem>
      </Select>
    </FormControl>
  );
}
import React, { useState } from 'react';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';


const DepoTypeSelect = ({ data }) => {
  const [depoType, setDepoType] = useState('unic');

  const handleChange = (ev) => {
    setDepoType(ev.target.value);
  };

  const availableSelects = data.filter(item => item.code !== depoType);
  const selectedFieldName = data.find(item => item.code === depoType).name;

  return(
    <div className='select-container'>
      <InputLabel variant='standard' htmlFor='main-select'>
        Вклад
      </InputLabel>
      <FormControl sx={{ m: 1, minWidth: 472, margin: '8px 0 0 0' }}>
        <Select
          value={depoType}
          onChange={handleChange}
          inputProps={{ id: 'main-select' }}
        >
          <MenuItem value={depoType}>
            <div>{selectedFieldName}</div>
          </MenuItem>
          {
            availableSelects.map((depoType, idx) =>
              <MenuItem
                value={depoType.code}
                key={idx}
              >
                {depoType.name}
              </MenuItem>
            )
          }
        </Select>
      </FormControl>
    </div>
  )
}

export default DepoTypeSelect;
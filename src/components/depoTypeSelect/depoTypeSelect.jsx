import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import * as actionCreators from '../../store/actions';


const DepoTypeSelect = () => {
  const dispatch = useDispatch();

  const depositType = useSelector(state => state.depositDetails.depositType);
  const deposits = useSelector(state => state.depositDetails.deposits);

  const handleChange = (ev) => {
    dispatch(actionCreators.setDepositType(ev.target.value));
  };

  const availableSelects = deposits.filter(item => item.code !== depositType);
  const selectedFieldName = deposits.find(item => item.code === depositType).name;

  return(
    <div className='select-container'>
      <InputLabel variant='standard' htmlFor='main-select'>
        Вклад
      </InputLabel>
      <FormControl sx={{ m: 1, minWidth: 472, margin: '8px 0 0 0' }}>
        <Select
          value={depositType}
          onChange={handleChange}
          inputProps={{ id: 'main-select' }}
        >
          <MenuItem value={depositType}>
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
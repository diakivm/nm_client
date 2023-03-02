import * as React from 'react';
import OutlinedInput from '@mui/material/OutlinedInput';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function CustomSelect({itemsToSelect, selected, setSelected, sx = {}}) {
    const handleChange = (event) => {
        const {target: {value}} = event;
        if (itemsToSelect?.length) {
            setSelected(itemsToSelect.find((item) => item?.value === value));
        }
    };

    return (
        <div>
            <FormControl>
                <Select
                    value={selected?.value}
                    onChange={handleChange}
                    input={<OutlinedInput/>}
                    sx={sx}
                >
                    {itemsToSelect?.length && itemsToSelect.map(({name, value}) => (
                        <MenuItem
                            key={name}
                            value={value}
                        >
                            {name}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
        </div>
    );
}
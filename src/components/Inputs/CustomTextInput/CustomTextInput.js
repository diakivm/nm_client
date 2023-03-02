import * as React from 'react';
import {TextField} from "@mui/material";

export default function CustomTextInput({value, setValue, sx = {}}) {
    const handleChange = (e) => {
        setValue(e.target.value)
    }

    return (
        <div>
            <TextField variant="outlined" value={value} onChange={handleChange} sx={sx}/>
        </div>
    );
}
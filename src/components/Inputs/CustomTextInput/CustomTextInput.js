import * as React from 'react';
import {Input} from "@mui/material";

export default function CustomTextInput({value, setValue}) {
    const handleChange = (e) => {
        setValue(e.target.velue)
    }

    return (
        <div>
            <Input value={value} onChange={handleChange}/>
        </div>
    );
}
import * as React from "react";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useState } from "react";
import Stack from '@mui/material/Stack';
function TexFieldToDo(){
    function warning(){
        alert("Presionaste el boton");
    }
    const[text,setText]=useState(" ");
    const write=()=>{
        setText(...text);
        console.log(text);
    };
    
    return(
        <div>
            <Stack direction="row" spacing={2}>
                <TextField id="outlined-basic" label="Escribe" variant="outlined" onChange={write}></TextField> 
                <Button  variant="contained" color="success" onClick={warning}>Add</Button>
            </Stack>
                
        </div>
    );
}
export default TexFieldToDo;
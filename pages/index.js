import dynamic from "next/dynamic";
import { Grid } from "@mui/material";
import { Button } from "@mui/material";

import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import CodeIcon from '@mui/icons-material/Code';
import TextField from '@mui/material/TextField';
import { useState } from "react";

const CustomAceEditor = dynamic(() => import('../components/Editor'), {ssr: false});
const axios = require('axios').default;

export default function Editor()
{
    const [code, setCode] = useState();
    const [output, setOutput] = useState();
    const [errors, setErrors] = useState();

    const handleRun = async (e) =>
    {
        e.preventDefault();
        console.log("Run from client");

        const response = await axios.get('/api/run', {
            params: {
                code: code
            }
        });

        let value = '';

        console.log(response.data);
        
        if(response.data.errors.length > 0)
        {
            response.data.errors.forEach(e => {
                console.log(e);
                value += `${e}\n`
            });
        }
        else
        {
            response.data.output.forEach(o => {
                value += `${o}\n`;
            });
        }

        console.log(value);

        setOutput(value);
    }

    return(
        <Grid container>
            <Grid item xs={6} align="center">
                <Button startIcon={<CodeIcon/>} variant="contained">Translate</Button>
            </Grid>
            <Grid item xs={6} align="center">
                <Button startIcon={<PlayArrowIcon/>} variant="contained" onClick={handleRun}>Run</Button>
            </Grid>
            <Grid item xs={12} m={1}>
                <CustomAceEditor onChange={setCode}/>
            </Grid>
            <Grid item xs={12} m={1}>
                <TextField value={output} multiline fullWidth label="Output" variant="outlined" inputProps={{readOnly: true}} focused/>
            </Grid>
        </Grid>
    );
}
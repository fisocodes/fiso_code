import dynamic from "next/dynamic";

import { Grid } from "@mantine/core";
import { Stack } from "@mantine/core";
import { Center } from '@mantine/core';
import { Button } from "@mantine/core";
import { Title } from '@mantine/core';
import { Text } from '@mantine/core';
import { showNotification } from '@mantine/notifications';

import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import CodeIcon from '@mui/icons-material/Code';
import { useState } from "react";

const CustomAceEditor = dynamic(() => import('../components/Editor'), {ssr: false});
const axios = require('axios').default;

export default function Editor()
{
    const [code, setCode] = useState();
    const [output, setOutput] = useState([]);
    const [errors, setErrors] = useState([]);

    const handleRun = async (e) =>
    {
        e.preventDefault();
        console.log("Run from client");

        const response = await axios.get('/api/run', {
            params: {
                code: code
            }
        });

        console.log(response.data);
        
        if(response.data.errors.length > 0)
        {
            setErrors(response.data.errors);

            response.data.errors.forEach(error => showNotification({
                title: 'Error',
                message: error,
                color: 'red',
                autoClose: false
            }));
        }
        else
        {
            showNotification({
                title: 'Success',
                message: 'Your code was run successfully',
                color: 'green'
            });
            setOutput(response.data.output);
        }
    }

    return(
        <Grid justify="center">
            <Grid.Col span={6}>
                <Center>
                    <Button leftIcon={<CodeIcon/>} variant="filled">Translate</Button>
                </Center>
            </Grid.Col>
            <Grid.Col span={6}>
                <Center>
                    <Button leftIcon={<PlayArrowIcon/>} variant="filled" onClick={handleRun}>Run</Button>
                </Center>
            </Grid.Col>
            <Grid.Col span={12}>
                <CustomAceEditor onChange={setCode}/>
            </Grid.Col>
            <Grid.Col span={12}>
                <Stack spacing="xs">
                    <Title order={5}>Output</Title>
                    {
                        output.map(line => <Text>{`-> ${line}`}</Text>)
                    }
                </Stack>
            </Grid.Col>
        </Grid>
    );
}
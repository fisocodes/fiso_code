import { Stack } from "@mui/material"
import { Typography } from "@mui/material"

export default function Documentation()
{
    return(
        <Stack m={1}>
            <Typography variant="h3">Documentation</Typography>
            <Typography variant="h4">Introduction</Typography>
            <Typography variant="body1">
                Fiso Code is a minimal programming language. It's porpuse is to
                help students to learn the basics of coding, having an easy to read
                and write code.
            </Typography>
            <Typography variant="body1">
                The following sections will explain how to use Fiso Code, its syntax and
                the online interpreter.
            </Typography>
        </Stack>
    );
}
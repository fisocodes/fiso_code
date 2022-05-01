import dynamic from "next/dynamic";

import { Grid } from "@mantine/core";
import { Stack } from "@mantine/core";
import { Center } from '@mantine/core';
import { Title } from "@mantine/core";
import { Text } from "@mantine/core";
import { Mark } from '@mantine/core';
import { Anchor } from "@mantine/core";
import { Button } from "@mantine/core";
import { Notification } from '@mantine/core';

import CodeIcon from '@mui/icons-material/Code';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';

const CustomAceEditor = dynamic(() => import('../components/Editor'), {ssr: false});

const codeExample = '\n\nThis is the editor';
const declarationExample = 'var a var b var c \n\nvar one\nvar two\nvar three';
const assignmentExample = 'variable1 = 10\nvariable2 = 15 / (4 - 1)\nvariable3 = variable1 + variable2';
const printExample = 'print myVariable\nprint (5 * 5) / (1 + 2)';

export default function Documentation()
{
    return(
        <>
            <Stack m={10}>
                <Title order={1}>Documentation</Title>
                <Title order={2}>Introduction</Title>
                <Text align="justify">
                    Fiso Code is the minimal programming language.
                    Its purpose is to offer an easy to read and an easy to learn code.
                </Text>
                <Text align="justify">
                    Fiso Code's goal is to be an entry point for new learners.
                    Some modern programming languages offer lots of functionalities, which
                    help developers to create powerful problem solving applications.
                    However, the syntax in that kind of languages usually is quite complex
                    and most of the students get confused with "useless" chunks of code.
                </Text>
                <Text align="justify">
                    This guide focuses on teaching structured programming using
                    the online interpreter. The next sections explain the syntax for Fiso Code
                    and give some examples for each section.
                </Text>
                <Title order={2}>The online interpreter</Title>
                <Text align="justify">
                    Fiso Code is an iterpreted language. Compared to languages like C or C++
                    where a binary file is created after a compilation and then this file is
                    executed by a computer, Fiso Code runs on top of javascript instead. The 
                    latter is in charge of interpreting the code and give an output back.
                </Text>
                <Text align="justify">
                    The online interpreter can be found
                    <Anchor href="/" underline={false}> here</Anchor>
                    .
                </Text>
                <Text align="justify">
                    On the very top you can find two buttons, "Translate"
                    and "Run".
                </Text>
                <Grid>
                    <Grid.Col span={6}>
                        <Center>
                            <Button leftIcon={<CodeIcon/>} variant="filled">Translate</Button>
                        </Center>
                    </Grid.Col>
                    <Grid.Col span={6}>
                        <Center>
                            <Button leftIcon={<PlayArrowIcon/>} variant="filled">Run</Button>
                        </Center>
                    </Grid.Col>
                </Grid>
                <Text align="justify">
                    The "Translate" button translates C code in to Fiso Code.
                    This functionality is not currently implemented, but it will
                    be available in future updates.
                </Text>
                <Text align="justify">
                    The "Run" button sends the code to the back-end which interprets
                    the code and returns the results which are then shown as the output.
                </Text>
                <Text align="justify">
                    In the middle you can see the code editor which is used to write some
                    code. There is not more explanation.
                </Text>
                <CustomAceEditor height="100px" value={codeExample} readOnly/>
                <Text align="justify">
                    Finally, at the very bottom you can see the output console,
                    wich appears blank before running any code.
                </Text>
                <Title order={2}>Notifications</Title>
                <Text align="justify">
                    Everytime you run the code, you will get a notification.
                    It can be either a success notification or an error notification.
                </Text>
                <Text align="justify">
                    Succes notifications just tells you that the code was run
                    successfully. It appears with green color and closes by itself
                    a few seconds later.
                </Text>
                <Notification title="Success" color="green">
                    Your code was run successfully
                </Notification>
                <Text align="justify">
                    Error notifications tells you that and error ocurred when running
                    the code. It contains the line number, the column number, and a short
                    description of the error. All error notifications have to be closed
                    manually.
                </Text>
                <Notification title="Error" color="red">
                    Error [line][column]: Error description.
                </Notification>
                <Title order={2}>Syntax</Title>
                <Text align="justify">
                    Fiso Code is an structured language. It means that every instruction
                    is run one after another. The execution order in Fiso Code as in many
                    other languages is from top to bottom.
                </Text>
                <Title order={3}>Variable declaration</Title>
                <Text align="justify">
                    Declaring a variable is very simple. Use the reserved word <Mark>var</Mark> followed
                    by an identifier. Note that variable identifiers can only have
                    numbers or letters and can not start with number.
                </Text>
                <CustomAceEditor height="100px" value={declarationExample} readOnly/>
                <Text align="justify">
                    You can declare one or more variables on the same line, but it is
                    preferable to have one declaration per line. That helps to maintain
                    the code readeable.
                </Text>
                <Title order={3}>Assignment</Title>
                <Text align="justify">
                    When you declare a variable, Fiso Code assigns the default value of
                    zero to it. But probably you might want your variables to have different
                    values. In order to do that you have to use an identifier followed by
                    the equals sign and then a number, an expression or another identifier.
                </Text>
                <CustomAceEditor height="100px" value={assignmentExample} readOnly/>
                <Text align="justify">
                    Note that you have to declare your variables before assinging values
                    to them. Otherwise, you will get an error.
                </Text>
                <Title order={3}>Output</Title>
                <Text align="justify">
                    In order to get a result back from our code we need to show the output
                    on our screen. The way to do that is using the reserved word <Mark>print</Mark> followed
                    by an expression or identifier.
                </Text>
                <CustomAceEditor height="100px" value={printExample} readOnly/>
                <Text align="justify">
                    So far we have learned how to declare variables, how to assign values and how to
                    show the results in console. But sometimes is necesary to have more control over
                    our code. In the next section we will discuss the control structures which allow
                    us to decide or choose the chunk of code to be excuted based on conditions.
                </Text>
                <Title order={2}>Control structures</Title>
            </Stack>
        </>
    );
}
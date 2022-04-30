import { MantineProvider } from '@mantine/core';
import { NotificationsProvider } from '@mantine/notifications';

import "../styles/style.css";

const customTheme = {
    colorScheme: 'dark',
    colors: {
        maincolor: ["#E5F3FF", "#B8DEFF", "#8AC8FF", "#5CB3FF", "#2E9DFF", "#0087FF", "#006CCC", "#005199", "#003666", "#001B33"]
    },
    primaryColor: 'maincolor'
}

export default function FisoCode({ Component, pageProps })
{

    return(
        <MantineProvider theme={customTheme}>
            <NotificationsProvider theme={customTheme}>
                <Component {...pageProps}/>
            </NotificationsProvider>
        </MantineProvider>
    );
}
import { createTheme, ThemeProvider } from '@mui/material/styles';

import '@fontsource/roboto/300.css';

import './../styles/style.css';

const theme = createTheme({
    palette: {
        type: 'dark',
        primary: {
          main: '#002240',
        },
        secondary: {
          main: '#A569BD',
        },
        background: {
          default: '#17202A',
          paper: '#212F3D',
        },
        text: {
          primary: '#F8F9F9',
          secondary: 'rgba(52,73,94,0.54)',
          disabled: 'rgba(52,73,94,0.38)',
          hint: 'rgba(52,73,94,0.38)',
        },
      },
      typography: {
        fontFamily: 'Roboto',
      },
});

export default function FisoCode({ Component, pageProps })
{
    return(
        <ThemeProvider theme={theme}>
            <Component {...pageProps}/>
        </ThemeProvider>
    );
}
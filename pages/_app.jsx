import '../styles/globals.css';
import { StyledEngineProvider, ThemeProvider } from '@mui/material/styles';
import { darkTheme } from '../util/theme.util';

// StyledEngineProvider injectFirst injects the MUI stylesheet before TailwindCSS
function MyApp({ Component, pageProps }) {
	return (
		<StyledEngineProvider injectFirst>
			<ThemeProvider theme={darkTheme}>
				<Component {...pageProps} />
			</ThemeProvider>
		</StyledEngineProvider>
	);
}

export default MyApp;

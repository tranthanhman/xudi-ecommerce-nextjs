import DefaultLayout from '../layouts/DefaultLayout';
import '../styles/globals.css';
import { ThemeProvider } from 'next-themes'

function MyApp({ Component, pageProps }) {
    return (
        <ThemeProvider attribute='class'>
            <DefaultLayout>
                <Component {...pageProps} />
            </DefaultLayout>
        </ThemeProvider>
    );
}

export default MyApp;
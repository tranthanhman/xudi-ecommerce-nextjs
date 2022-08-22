import DefaultLayout from '../layouts/DefaultLayout';
import '../styles/globals.css';
import { ThemeProvider } from 'next-themes'
import { DataProvider } from '../store/GlobalState'

function MyApp({ Component, pageProps }) {
    return (
        <DataProvider>
            <ThemeProvider attribute='class'>
                <DefaultLayout>
                    <Component {...pageProps} />
                </DefaultLayout>
            </ThemeProvider>
        </DataProvider>

    );
}

export default MyApp;
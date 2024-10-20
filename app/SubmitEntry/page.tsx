import SubmitEntry from '../../Components/SubmitEntry';
import '../globals.css';
import type { AppProps } from 'next/app';

export default function SubmitEntryPage({Component, pageProps}: AppProps) {
    return (
        <>  
            <SubmitEntry {...pageProps} />
        </>
    );
};
import { useState } from 'react';
import Head from 'next/head';
import styles from '../styles/Home.module.css';
import axios from 'axios';

export default function Home() {
    const [response, setResponse] = useState('');

    const api = `https://api.nextprot.org/entry-publications/entry/NX_P01308/count.json`;

    const msg = `
# API Endpoint that I am testing

https://api.nextprot.org/entry-publications/entry/NX_P01308/count.json
`;

    const fetchResults = async () => {
        try {
            setResponse('loading...');
            const res = await axios.get(api);
            const { data } = res;
            setResponse(data);
        } catch (error) {
            console.log(error);
            setResponse('Failed!');
        }
    };

    return (
        <div className={styles.container}>
            <Head>
                <title>neXtProt API Testing</title>
                <link rel='icon' href='/favicon.ico' />
                <link rel='preconnect' href='https://fonts.gstatic.com' />
                <link
                    href='https://fonts.googleapis.com/css2?family=Raleway:wght@400;600&display=swap'
                    rel='stylesheet'
                />
            </Head>

            <div className={styles.button}>
                <button onClick={fetchResults}>Click Me!</button>
            </div>
            <div className={styles.code}>
                {response !== '' && <pre className={styles.api}>{msg}</pre>}
                {response !== '' && <pre className='json'>{JSON.stringify(response, null, 2)}</pre>}
            </div>
        </div>
    );
}

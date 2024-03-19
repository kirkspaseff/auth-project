'use client';
import Image from 'next/image';
import styles from './page.module.css';
import Register from './components/Register';
import { createTheme, MantineProvider, Stack } from '@mantine/core';

export default function Home() {
    const theme = createTheme({
        components: {
            Stack: Stack.extend({
                classNames: {
                    root: 'my-root-class',
                    label: 'my-label-class',
                    inner: 'my-inner-class'
                },
                styles: {
                    root: { backgroundColor: 'red' },
                    label: { color: 'blue' },
                    inner: { fontSize: 20 }
                }
            })
        }
    });

    return (
        <>
            <MantineProvider>
                <Register></Register>
            </MantineProvider>
        </>
    );
}

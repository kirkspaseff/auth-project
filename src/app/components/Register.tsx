'use client';

import { useForm } from '@mantine/form';
import { TextInput, Stack, PasswordInput } from '@mantine/core';

function Register() {
    const form = useForm({
        initialValues: {
            username: '',
            password: ''
        }
    });

    return (
        <>
            <Stack>
                <TextInput placeholder="username@test.com" label="Username" {...form.getInputProps('username')}></TextInput>
                <PasswordInput label="Password" {...form.getInputProps('password')}></PasswordInput>
            </Stack>
        </>
    );
}

export default Register;

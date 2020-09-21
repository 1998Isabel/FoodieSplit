import React from 'react';
import { apiGetUserId } from '../api';
import { Button } from 'react-bootstrap';

function Login() {
    const handleTest = async () => {
        const res = (await apiGetUserId()).data
    }

    return (
        <>
            Login
            <Button onClick={handleTest}>TEST</Button>
        </>
    )
}

export default Login;
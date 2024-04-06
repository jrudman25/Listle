/**
 * Login.tsx
 * Handles users logging in with a Spotify account.
 * @version 2024.04.06
 */
import React, { useEffect, useState } from 'react';
import { Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Login = () => {

    const [accountName, setAccountName] = useState('');
    const clientId = `${process.env.REACT_APP_SPOTIFY_CLIENT_ID}`;
    const redirectUri = 'http://localhost:3000/';

    const navigate = useNavigate();

    useEffect(() => {
        const fetchUserProfile = async () => {
            const response = await fetch('https://api.spotify.com/v1/me', {
                headers: {
                    'Authorization': `Bearer ${accessToken}`
                }
            });
            const data = await response.json();
            setAccountName(data.display_name);
            setTimeout(() => {
                navigate('/home');
            }, 2000);
        };

        const urlParams = new URLSearchParams(window.location.hash.substring(1));
        const accessToken = urlParams.get('access_token');

        if (accessToken) {
            sessionStorage.setItem('accessToken', accessToken);
            fetchUserProfile();
        }
    }, [navigate]);

    const handleLogin = () => {
        window.location.href = `https://accounts.spotify.com/authorize?client_id=${clientId}&redirect_uri=${redirectUri}&response_type=token&show_dialog=true`;
    };

    return (
        <div>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
            >
                <h1>Login with Spotify</h1>
                {accountName ? (
                    <p>Welcome, {accountName}!</p>
                ) : (
                    <button onClick={handleLogin}>Login with Spotify</button>
                )}
            </Box>
        </div>
    );
};

export default Login;

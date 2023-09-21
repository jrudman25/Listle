/**
 * Signup.tsx
 * Handles user signup.
 * @version 2023.09.18
 */
import React, { useState, forwardRef } from 'react';
import {Box, TextField, Button, Snackbar, Typography} from '@mui/material';
import { Navigate, useNavigate } from 'react-router-dom';
import { auth } from './backend/FirebaseConfig';
import { signInWithEmailAndPassword, sendPasswordResetEmail } from 'firebase/auth';
import { getFirestore, doc, getDoc } from 'firebase/firestore';
import MuiAlert from '@mui/material/Alert';

const Login = () => {

    /**
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [snackbarOpen, setSnackbarOpen] = useState(false);
    const [snackbarMessage, setSnackbarMessage] = useState('');
    const [severity, setSeverity] = useState('error');
    const navigate = useNavigate();

    const Alert = forwardRef((props, ref) => {
        return <MuiAlert ref={ref} elevation={6} variant="filled" {...props} />;
    });

    async function hasUserCompletedSurvey(email) {
        const firestore = getFirestore();
        const userRef = doc(firestore, 'users', email);
        const userSnapshot = await getDoc(userRef);

        if (userSnapshot.exists()) {
            return userSnapshot.data().surveyCompleted || false;
        }
        return false;
    }

    const handleSnackbarClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setSnackbarOpen(false);
    };

    const showSnackbar = (message) => {
        setSnackbarMessage(message);
        setSnackbarOpen(true);
    };

    if (sessionStorage.getItem('isLoggedIn') === 'true') {
        return <Navigate to="/home" />;
    }

    const handleUsernameChange = event => setEmail(event.target.value);
    const handlePasswordChange = event => setPassword(event.target.value);

    const handleSubmit = async (event) => {
        event.preventDefault();
        await signInWithEmailAndPassword(auth, email, password)
            .then(async () => {
                if (!auth.currentUser.emailVerified) {
                    showSnackbar('Please verify your email before logging in.');
                    return;
                }
                setSeverity('success');
                showSnackbar('Successful login!');
                sessionStorage.setItem('username', email);

                const surveyCompleted = await hasUserCompletedSurvey(email);
                if (!surveyCompleted) {
                    setTimeout(() => {
                        navigate('/questionnaire');
                        sessionStorage.setItem('isLoggedIn', true);
                    }, 1750);
                } else {
                    setTimeout(() => {
                        navigate('/home');
                        sessionStorage.setItem('isLoggedIn', true);
                    }, 1750);
                }
            })
            .catch((error) => {
                console.log(error.code);
                if (error.code === 'auth/invalid-email') {
                    showSnackbar("Invalid email.");
                }
                else if (error.code === 'auth/user-not-found') {
                    showSnackbar("User not found.");
                }
                else if (error.code === 'auth/missing-password') {
                    showSnackbar("Please enter your password.");
                }
                else if (error.code === 'auth/wrong-password') {
                    showSnackbar("Incorrect password.");
                }
                else {
                    showSnackbar("An unexpected error has occurred. Please reload and try again.");
                }
            })
    };

    const handleForgotPassword = async () => {
        if (email === '') {
            showSnackbar('Please enter your email address to reset your password.');
        }
        else {
            try {
                await sendPasswordResetEmail(auth, email);
                showSnackbar('A password reset email has been sent to your email address.');
            } catch (error) {
                console.log(error.code)
                if (error.code === 'auth/invalid-email') {
                    showSnackbar("Please enter a valid email.");
                }
                else if (error.code === 'auth/user-not-found') {
                    showSnackbar("User not found.");
                }
                else {
                    showSnackbar('An error occurred while sending the password reset email. Please try again.');
                }
            }
        }
    };
    */
    return (
        <Typography
            color = 'white'
            marginBottom = '0.5rem'
        >
            Made with ♥ by me © {new Date().getFullYear()}
        </Typography>
    );
};

export default Login;

/**
 * Footer.tsx
 * A small footer at the bottom of the page.
 * @version 2023.09.18
 */
import React from 'react';
import { Typography } from '@mui/material';

const Footer = () => {

    return (
        <Typography
            color = 'white'
            marginBottom = '0.5rem'
        >
            Made with ♥ by me © {new Date().getFullYear()}
        </Typography>
    );
};

export default Footer;

/**
 * Home.tsx
 * The main page of the site. Contains a greeting, an intro, a skills section, and a project showcase.
 * @version 2023.09.18
 */
import React from 'react';
import { Typography } from "@mui/material";

const Home = () => {

    return (
        <Typography
            color = 'white'
            marginBottom = '0.5rem'
        >
            Made with ♥ by me © {new Date().getFullYear()}
        </Typography>
    );
};

export default Home;

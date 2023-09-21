/**
 * App.tsx
 * Handles loading and routing for the site.
 * @version 2023.09.18
 */
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Error from './Error';
import Footer from './Footer';
import Home from './Home';
import Login from './Login';
import NavBar from './NavBar';
import Signup from './Signup';

function App() {

    const isLoggedIn = sessionStorage.getItem('isLoggedIn');

    return (
        <Router>
            <NavBar />
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/home" element={<Home />} />
                <Route path="*" element={<Error />} />
            </Routes>
            <Footer />
        </Router>
    );
}

export default App;

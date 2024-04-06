/**
 * App.tsx
 * Handles loading and routing for the site.
 * @version 2024.04.06
 */
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Error from './Error';
import Footer from './Footer';
import Home from './Home';
import Login from './Login';
import NavBar from './NavBar';

function App() {

    return (
        <Router>
            <NavBar />
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/home" element={<Home />} />
                <Route path="*" element={<Error />} />
            </Routes>
            <Footer />
        </Router>
    );
}

export default App;

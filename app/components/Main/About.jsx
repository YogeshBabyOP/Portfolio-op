import React from 'react';
import StarsCanvas from './StarCanvas';

const About = () => {
    return (
        <>
        <StarsCanvas></StarsCanvas>
        <div className="flex flex-col items-center justify-center min-h-screen bg-black-100">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">About Us</h1>
            <p className="text-lg text-gray-600 text-center max-w-2xl">
                Welcome to our application. We are dedicated to providing the best service possible. Our team is committed to excellence and we strive to exceed your expectations.
            </p>
        </div>
        </>
    );
};

export default About;
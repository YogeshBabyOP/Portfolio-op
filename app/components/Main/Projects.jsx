import React from 'react';

const Projects = () => {
    return (
        <div className="bg-black-100 min-h-screen p-5">
            <div className="max-w-7xl mx-auto">
                <h1 className="text-4xl font-bold text-center text-gray-800 mb-10">Projects</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <div className="bg-red-300 p-6 rounded-lg shadow-lg">
                        <h2 className="text-2xl font-bold mb-2">Project 1</h2>
                        <p className="text-gray-700">Description of project 1.</p>
                    </div>
                    <div className="bg-red-300 p-6 rounded-lg shadow-lg">
                        <h2 className="text-2xl font-bold mb-2">Project 2</h2>
                        <p className="text-gray-700">Description of project 2.</p>
                    </div>
                    <div className="bg-red-300 p-6 rounded-lg shadow-lg">
                        <h2 className="text-2xl font-bold mb-2">Project 3</h2>
                        <p className="text-gray-700">Description of project 3.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projects;
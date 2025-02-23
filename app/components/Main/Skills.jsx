import React from 'react';

const Skills = () => {
    return (
        <section className="py-16 bg-black">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-8">My Skills</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {/* Skill items can be added here */}
                    <div className="p-6 bg-white rounded-lg shadow-md">
                        <h3 className="text-xl font-semibold mb-2">Web Development</h3>
                        <p className="text-gray-600">HTML, CSS, JavaScript, React</p>
                    </div>
                    
                    <div className="p-6 bg-white rounded-lg shadow-md">
                        <h3 className="text-xl font-semibold mb-2">Backend Development</h3>
                        <p className="text-gray-600">Node.js, Express, MongoDB</p>
                    </div>
                    
                    <div className="p-6 bg-white rounded-lg shadow-md">
                        <h3 className="text-xl font-semibold mb-2">Other Tools</h3>
                        <p className="text-gray-600">Git, GitHub, VS Code</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;
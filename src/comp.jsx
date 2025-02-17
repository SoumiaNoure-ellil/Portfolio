import React from 'react';

export default function Comp() {
    return (
        <div className="bg-gray-100 min-h-screen text-gray-800">
 
            <main className="container mx-auto px-4 py-8">
                <section id="about" className="mb-12 flex items-center gap-8">

                </section>

                <section id="projects" className="mb-12">
                    <h2 className="text-3xl font-semibold text-center mb-8">Mes Projets</h2>
                    <div className="grid md:grid-cols-3 gap-6">
                        {[1, 2, 3 ,6].map((project) => (
                            <div key={project} className="bg-white shadow-md rounded-lg p-6 hover:shadow-xl transition">
                                <div className="project-info">
                                    <h3 className="text-2xl font-bold mb-3">Projet {project}</h3>
                                    <p className="text-gray-600">Description du projet et technologies utilisées.</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                <section id="skills" className="mb-12">
                    <h2 className="text-3xl font-semibold text-center mb-8">Mes Compétences</h2>
                    <div className="flex flex-wrap justify-center gap-4">
                        {['HTML5', 'CSS3', 'JavaScript', 'React', 'MySql', 'Tallwind', 'Python'].map((skill) => (
                            <div key={skill} className="bg-blue-500 text-white px-4 py-2 rounded-full">
                                {skill}
                            </div>
                        ))}
                    </div>
                </section>

                <section id="contact" className="mb-12">
                    <h2 className="text-3xl font-semibold text-center mb-8">Contact</h2>
                    <form className="max-w-lg mx-auto">
                        <div className="mb-4">
                            <input 
                                type="text" 
                                placeholder="Votre nom" 
                                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>
                        <div className="mb-4">
                            <input 
                                type="email" 
                                placeholder="Votre email" 
                                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>
                        <div className="mb-4">
                            <textarea 
                                rows="5" 
                                placeholder="Votre message" 
                                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            ></textarea>
                        </div>
                        <button 
                            type="submit" 
                            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
                        >
                            Envoyer
                        </button>
                    </form>
                </section>
            </main>

            <footer className="bg-gray-800 text-white text-center py-4">
                <p>&copy; 2024 Mon Portfolio. Tous droits réservés.</p>
            </footer>
        </div>
    );
}
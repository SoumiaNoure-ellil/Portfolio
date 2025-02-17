import { Download, Code, FolderGit2, User, Palette, Database, GitBranch, UserCheck } from 'lucide-react';
import '../App.css';
import cv from '../components/cv.pdf';
import me from '../components/me.jpg';
export default function Portfolio() {
  const skillCategories = [
    {
      title: "Développement Front-End",
      icon: <Code className="w-6 h-6" />,
      skills: [
        {
          name: "React.js",
          details: "Création de composants réutilisables et gestion d'état",
          projects: "Portfolio personnel"
        },
        {
          name: "HTML5/CSS3 & Tailwind",
          details: "Création d'interfaces responsives modernes",
          projects: "Sites vitrines"
        },
        {
          name: "JavaScript",
          details: "Manipulation du DOM et gestion des événements",
          projects: "Applications web interactives"
        }
      ]
    },
    {
      title: "Développement Back-End",
      icon: <Database className="w-6 h-6" />,
      skills: [
        {
          name: "PHP & MySQL",
          details: "Création de bases de données et requêtes SQL",
          projects: "Système de gestion de contenu"
        },
        {
          name: "Python",
          details: "Scripts et automatisation basique",
          projects: "Scripts utilitaires"
        }
      ]
    },
    {
      title: "Design & UI/UX",
      icon: <Palette className="w-6 h-6" />,
      skills: [
        {
          name: "Figma & Canva",
          details: "Création de maquettes et designs web",
          projects: "Prototypes d'interfaces"
        }
      ]
    },
    {
      title: "Gestion de Projet",
      icon: <UserCheck className="w-6 h-6" />,
      skills: [
        {
          name: "Méthodologies Agiles",
          details: "Compréhension des principes SCRUM",
          projects: "Travail en équipe"
        },
        {
          name: "Outils de Versioning",
          details: "Git, GitHub",
          projects: "Gestion de versions de code"
        }
      ]
    }
  ];

  return (
    <main className="min-h-screen">
   
      <section className="imagee w-full p-16  md:p-32 mb-10 ">
        <h1 className="m-20 md:m-20 uppercase text-white font-bold text-4xl md:text-7xl">
          nour-ellil soumia
        </h1>
        <h2 className="text-white text-2xl md:text-4xl -mt-8 md:-mt-14 m-10">
          Développeur Web Créatif
        </h2>
      </section>

     
      <section className="mx-auto w-full px-4 md:px-20 mb-20">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <img
           src={me}
            alt="Portrait du développeur"
            className="w-32 md:w-40 h-32 md:h-40 rounded-lg object-cover shadow-lg"
          />
          <div className="border p-4 md:p-6 rounded-lg shadow-md bg-white flex-grow">
            <h2 className="text-2xl md:text-3xl font-semibold mb-4 flex items-center gap-2">
              <User className="text-cyan-700" size={32} />
              À propos de moi
            </h2>
            <p className="text-lg md:text-2xl leading-relaxed p-4 md:p-10">
              Bonjour ! Je suis un développeur web débutant, passionné par l'apprentissage
              des technologies web. Actuellement en formation, je découvre avec enthousiasme
              le monde du développement et je suis motivé à développer mes compétences à travers de nouveaux projets.
            </p>
          </div>
        </div>
      </section>



      <section id="projects" className="mb-12 px-20">
                <h2 className="text-3xl font-semibold text-center mb-8 flex items-center justify-center gap-2">
                    <FolderGit2 className="text-cyan-700" size={32} />
                    Mes Projets
                </h2>
                <div className="grid md:grid-cols-3 gap-6">
                    {[{'id':1 , url:'https://gitlab.com/fist_tp/chic-click-v3.git' } , {'id':2 , url:'https://github.com/SoumiaNoure-ellil/article.git'},{'id':3 , url:'https://hafssaelaloini.github.io/livres'} ].map((project) => (
                        <div key={project.id} className="bg-white shadow-md rounded-lg p-6 hover:shadow-xl transition duration-300">
                            <div className="project-info p-40 bgprojet">
                                <h3 className="text-2xl font-bold mb-3">Projet {project.id}</h3>
                                <a href={project.url}  className="bg-cyan-950 text-white px-4 py-2 m-10 text-xl rounded hover:bg-cyan-600 transition duration-300">Consulte</a>
                            </div>

                        
                        </div>
                    ))}
                </div>
            </section>
      
      <section className="py-20 px-4 md:px-20 bg-gradient-to-b from-cyan-950 to-slate-900 text-white " id='Competences'>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">
            Compétences
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {skillCategories.map((category, index) => (
              <div key={index} className="bg-slate-800/50 rounded-xl p-6 backdrop-blur-sm hover:shadow-xl hover:shadow-cyan-500/10 transition-all">
                <div className="flex items-center gap-3 mb-6">
                  {category.icon}
                  <h3 className="text-2xl font-semibold text-cyan-300">
                    {category.title}
                  </h3>
                </div>
                <div className="space-y-6">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="space-y-3 p-4 bg-slate-800/30 rounded-lg hover:bg-slate-800/50 transition-all">
                      <h4 className="font-semibold text-lg text-cyan-100">
                        {skill.name}
                      </h4>
                      <p className="text-slate-300">
                        {skill.details}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      

    
      <section className="text-center py-12">
        <a 
          href={cv}
          download 
          className="inline-flex items-center gap-2 bg-cyan-950 text-white font-bold px-6 py-3 rounded-full hover:bg-cyan-700 transition duration-300 shadow-md"
        >
          <Download size={20} />
          Télécharger mon CV
        </a>
      </section>
    </main>

  );
}
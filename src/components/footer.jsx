import { Mail, Linkedin, Phone } from 'lucide-react';
import '../App.css';

export default function Footer() {
  return (
    <div id='contact'>
        
      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12 px-4 md:px-20 w-full">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Email Section */}
            <div className="flex flex-col items-center md:items-start gap-2">
              <div className="flex items-center gap-2 text-cyan-300">
                <Mail className="w-5 h-5" />
                <h3 className="font-semibold">Email</h3>
              </div>
              <a 
                href="mailto:votre.email@example.com" 
                className="hover:text-cyan-300 transition-colors"
              >
               nourellilsoumia@gmail.com
              </a>
            </div>

            {/* LinkedIn Section */}
            <div className="flex flex-col items-center md:items-start gap-2">
              <div className="flex items-center gap-2 text-cyan-300">
                <Linkedin className="w-5 h-5" />
                <h3 className="font-semibold">LinkedIn</h3>
              </div>
              <a 
                href="https://www.linkedin.com/in/soumia-nour-ellil" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-cyan-300 transition-colors"
              >
                linkedin.com/in/soumia-nour-ellil
              </a>
            </div>

            {/* Téléphone Section */}
            <div className="flex flex-col items-center md:items-start gap-2">
              <div className="flex items-center gap-2 text-cyan-300">
                <Phone className="w-5 h-5" />
                <h3 className="font-semibold">Téléphone</h3>
              </div>
              <a 
                href="tel:+33600000000" 
                className="hover:text-cyan-300 transition-colors"
              >
                +212 6 00 00 00 00
              </a>
            </div>
          </div>

          <div className="text-center mt-8 pt-8 border-t border-slate-800">
            <p className="text-slate-400">
              © {new Date().getFullYear()} Nour-ellil Soumia. Tous droits réservés.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
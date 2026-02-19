import React from 'react';
import { MessageCircle, Instagram, Mail } from 'lucide-react';

interface LinkItem {
    title: string;
    url: string;
    isPrimary?: boolean;
    icon: React.ReactNode;
}

const links: LinkItem[] = [
    {
        title: 'Agendar Consulta via WhatsApp',
        url: 'https://api.whatsapp.com/send?phone=5521981458546&text=Ol%C3%A1%2C%20Dra.%20Sylvia!%20Gostaria%20de%20agendar%20uma%20consulta.',
        isPrimary: true,
        icon: <MessageCircle className="w-5 h-5" />,
    },
    {
        title: 'Instagram Oficial (@sylbravo)',
        url: 'https://instagram.com/sylbravo',
        icon: <Instagram className="w-5 h-5" />,
    }
];

export default function App() {
    return (
        <div className="min-h-screen bg-emerald-800 flex flex-col items-center py-12 px-4 sm:px-6 lg:px-8 font-sans selection:bg-amber-300 selection:text-emerald-900">

            {/* --- CABEÇALHO --- */}
            <div className="flex flex-col items-center space-y-5 mb-10 w-full max-w-md">
                <div className="relative group">
                    {/* Efeito de brilho dourado mais claro ao fundo da foto */}
                    <div className="absolute -inset-1 bg-gradient-to-r from-amber-300 via-yellow-200 to-amber-300 rounded-full opacity-70 group-hover:opacity-100 transition duration-500 blur-md"></div>
                    <div className="relative w-32 h-32 rounded-full overflow-hidden border-4 border-emerald-800 shadow-2xl bg-emerald-700 flex items-center justify-center">
                        <img
                            src="/sylvia.jpg"
                            alt="Dra. Sylvia"
                            className="w-full h-full object-cover"
                            onError={(e) => {
                                e.currentTarget.style.display = 'none';
                                e.currentTarget.parentElement!.innerText = 'DS';
                                e.currentTarget.parentElement!.className += ' text-4xl font-serif text-amber-300';
                            }}
                        />
                    </div>
                </div>

                <div className="text-center z-10">
                    <h1 className="text-3xl font-serif font-bold text-amber-300 tracking-wide">
                        Dra. Sylvia
                    </h1>
                    <p className="text-emerald-100 font-medium mt-1 text-lg">
                        Médica Especialista
                    </p>
                    {/* Linha divisória elegante */}
                    <div className="w-12 h-0.5 bg-amber-400 mx-auto mt-4 opacity-80"></div>
                </div>
            </div>

            {/* --- LISTA DE LINKS --- */}
            <main className="w-full max-w-md space-y-4 flex-grow z-10">
                {links.map((link, index) => (
                    <a
                        key={index}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`
              flex items-center p-4 rounded-xl shadow-md transition-all duration-300
              transform hover:-translate-y-1 hover:shadow-xl group
              ${link.isPrimary
                            ? 'bg-gradient-to-r from-amber-400 to-yellow-300 text-emerald-950 hover:from-amber-300 hover:to-yellow-200 font-bold'
                            : 'bg-emerald-700/60 backdrop-blur-sm text-emerald-50 hover:bg-emerald-600/80 border border-emerald-600 hover:border-amber-300'
                        }
            `}
                    >
                        <div className={`flex items-center justify-center w-10 h-10 rounded-full mr-4 transition-colors ${link.isPrimary ? 'bg-emerald-900/10' : 'bg-emerald-800/80 group-hover:bg-amber-300/20 group-hover:text-amber-300'}`}>
                            {link.icon}
                        </div>
                        <span className="flex-1 font-semibold tracking-wide text-sm sm:text-base">
              {link.title}
            </span>
                        <div className="w-10" />
                    </a>
                ))}
            </main>

            {/* --- RODAPÉ SOCIAL --- */}
            <footer className="mt-16 flex flex-col items-center space-y-6 z-10">
                <div className="flex space-x-6">
                    <a href="https://www.instagram.com/sylviabravofisio" target="_blank" rel="noopener noreferrer" className="text-emerald-300 hover:text-amber-300 transition-colors transform hover:scale-110">
                        <Instagram className="w-6 h-6" />
                    </a>
                    <a href="#" className="text-emerald-300 hover:text-amber-300 transition-colors transform hover:scale-110">
                        <Mail className="w-6 h-6" />
                    </a>
                </div>
                <p className="text-emerald-200/70 text-xs font-medium uppercase tracking-widest">
                    © {new Date().getFullYear()} Dra. Sylvia
                </p>
            </footer>
        </div>
    );
}
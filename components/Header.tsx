
import React from 'react';
import { useTheme } from '../hooks/useTheme';

export const Header: React.FC = () => {
    const [theme, toggleTheme] = useTheme();

    const SunIcon = () => (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
    );

    const MoonIcon = () => (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
        </svg>
    );

    const GemIcon = () => (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M5.166 2.131A1 1 0 016.66 1.39l7.028.001a1 1 0 01.832 1.549l-5.32 9.02a1 1 0 01-1.55.195l-4.148-4.148a1 1 0 01.534-1.685zM5.93 4.26a1 1 0 011.414 0l3.43 3.43a1 1 0 010 1.414l-3.43 3.43a1 1 0 01-1.414-1.414l3.43-3.43a1 1 0 010-1.414L5.93 5.674a1 1 0 010-1.414zM15 6a1 1 0 011-1h2a1 1 0 110 2h-2a1 1 0 01-1-1z" clipRule="evenodd" />
        </svg>
    );

    const InstagramIcon = () => (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
      </svg>
    );

    const GithubIcon = () => (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
      </svg>
    );

    const LinkedinIcon = () => (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
        </svg>
    );

    const socialLinks = [
        { href: "https://instagram.com/dezuhan", icon: <InstagramIcon />, label: "Instagram" },
        { href: "https://github.com/dezuhan", icon: <GithubIcon />, label: "GitHub" },
        { href: "https://linkedin.com/in/dzuhan", icon: <LinkedinIcon />, label: "LinkedIn" }
    ];

    return (
        <header className="bg-light-bg-secondary dark:bg-dark-bg-secondary shadow-md">
            <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                <div className="flex items-center space-x-6">
                    <h1 className="text-xl md:text-2xl font-bold text-light-text dark:text-dark-text">Surat Lamaran Kerja Generator</h1>
                    <div className="hidden md:flex items-center space-x-4 border-l border-light-border dark:border-dark-border pl-6">
                       {socialLinks.map(link => (
                           <a 
                               key={link.label}
                               href={link.href}
                               target="_blank"
                               rel="noopener noreferrer"
                               aria-label={link.label}
                               className="text-light-text-secondary dark:text-dark-text-secondary hover:text-light-text dark:hover:text-dark-text transition-colors"
                           >
                            {link.icon}
                           </a>
                       ))}
                    </div>
                </div>
                
                <div className="flex items-center space-x-2 md:space-x-4">
                     <a
                        href="https://gemini.google.com/gem/1nGBMlGTfJJe4j6rTbdsZxFsv_qMqvsOy?usp=sharing"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center px-3 py-2 text-sm font-medium rounded-md bg-light-bg dark:bg-dark-bg border border-light-border dark:border-dark-border text-light-text dark:text-dark-text hover:bg-light-border dark:hover:bg-dark-border transition-colors"
                    >
                        <GemIcon />
                        <span className="hidden sm:inline">GEM Generator</span>
                    </a>
                    <button
                        onClick={toggleTheme}
                        className="p-2 rounded-full text-light-text-secondary dark:text-dark-text-secondary hover:bg-light-border dark:hover:bg-dark-border transition-colors"
                        aria-label="Toggle theme"
                    >
                        {theme === 'light' ? <MoonIcon /> : <SunIcon />}
                    </button>
                </div>
            </div>
        </header>
    );
};

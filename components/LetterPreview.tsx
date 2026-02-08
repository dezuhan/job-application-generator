
import React from 'react';

interface LetterPreviewProps {
    content: string;
    isLoading: boolean;
    error: string | null;
    onCopy: () => void;
    onSendEmail: () => void;
    companyEmail: string;
}

export const LetterPreview: React.FC<LetterPreviewProps> = ({ content, isLoading, error, onCopy, onSendEmail, companyEmail }) => {

    const buttonClass = "flex items-center justify-center px-4 py-2 text-sm font-medium rounded-md transition-colors disabled:opacity-50 disabled:cursor-not-allowed";
    const primaryButtonClass = `${buttonClass} bg-light-accent dark:bg-dark-accent text-white hover:bg-light-accent-hover dark:hover:bg-dark-accent-hover`;
    const secondaryButtonClass = `${buttonClass} bg-light-bg-secondary dark:bg-dark-bg-secondary border border-light-border dark:border-dark-border text-light-text dark:text-dark-text hover:bg-light-border dark:hover:bg-dark-border`;

    const CopyIcon = () => (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" /></svg>
    );

    const SendEmailIcon = () => (
         <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" /></svg>
    );

    return (
        <div className="bg-light-bg-secondary dark:bg-dark-bg-secondary p-6 rounded-lg shadow-lg h-full flex flex-col">
            <div className="flex justify-between items-center mb-4 border-b border-light-border dark:border-dark-border pb-4 no-print">
                <h2 className="text-xl font-semibold text-light-text dark:text-dark-text">Generated Letter</h2>
                <div className="flex space-x-2">
                    <button onClick={onCopy} disabled={!content || isLoading} className={secondaryButtonClass}>
                        <CopyIcon /> Copy
                    </button>
                    <button onClick={onSendEmail} disabled={!content || isLoading || !companyEmail} className={primaryButtonClass}>
                        <SendEmailIcon /> Copy + Send Email
                    </button>
                </div>
            </div>

            <div id="print-area" className="flex-grow bg-light-bg dark:bg-dark-bg p-6 rounded-md whitespace-pre-wrap overflow-auto font-sans text-sm leading-relaxed">
                {isLoading && <p className="text-center text-light-text-secondary dark:text-dark-text-secondary">Generating your letter...</p>}
                {error && <p className="text-center text-red-500">{error}</p>}
                {!isLoading && !error && !content && <p className="text-center text-light-text-secondary dark:text-dark-text-secondary">Your generated letter will appear here. Fill out the form to get started.</p>}
                {content}
            </div>
        </div>
    );
};
